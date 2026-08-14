param(
  [string]$Documento = 'fuentes/13530530_CF01_DI.docx',
  [string]$Actividad = 'fuentes/13530530_CF01_AD.docx'
)

$ErrorActionPreference = 'Stop'

Add-Type -AssemblyName System.IO.Compression.FileSystem

function Get-DocxBlocks([string]$Path) {
  $zip = [System.IO.Compression.ZipFile]::OpenRead((Resolve-Path $Path))
  try {
    $entry = $zip.GetEntry('word/document.xml')
    $reader = [IO.StreamReader]::new($entry.Open())
    [xml]$xml = $reader.ReadToEnd()
    $reader.Dispose()
    $ns = [Xml.XmlNamespaceManager]::new($xml.NameTable)
    $ns.AddNamespace('w', 'http://schemas.openxmlformats.org/wordprocessingml/2006/main')
    $blocks = @()
    foreach ($node in $xml.SelectNodes('//w:body/*', $ns)) {
      if ($node.LocalName -eq 'p') {
        $text = (($node.SelectNodes('.//w:t', $ns) | ForEach-Object { $_.InnerText }) -join '').Trim()
        if ($text) {
          $styleNode = $node.SelectSingleNode('./w:pPr/w:pStyle', $ns)
          $style = if ($styleNode) { $styleNode.GetAttribute('val', $ns.LookupNamespace('w')) } else { '' }
          $blocks += [pscustomobject]@{ Type = 'p'; Text = $text; Style = $style; Rows = $null }
        }
      } elseif ($node.LocalName -eq 'tbl') {
        $rows = @()
        foreach ($row in $node.SelectNodes('./w:tr', $ns)) {
          $cells = @()
          foreach ($cell in $row.SelectNodes('./w:tc', $ns)) {
            $cells += ((($cell.SelectNodes('.//w:t', $ns) | ForEach-Object { $_.InnerText }) -join '').Trim())
          }
          $rows += ,$cells
        }
        $blocks += [pscustomobject]@{ Type = 'table'; Text = ''; Style = ''; Rows = $rows }
      }
    }
    return $blocks
  } finally {
    $zip.Dispose()
  }
}

function Get-DocxParagraphs([string]$Path) {
  $zip = [System.IO.Compression.ZipFile]::OpenRead((Resolve-Path $Path))
  try {
    $entry = $zip.GetEntry('word/document.xml')
    $reader = [IO.StreamReader]::new($entry.Open())
    [xml]$xml = $reader.ReadToEnd()
    $reader.Dispose()
    $ns = [Xml.XmlNamespaceManager]::new($xml.NameTable)
    $ns.AddNamespace('w', 'http://schemas.openxmlformats.org/wordprocessingml/2006/main')
    foreach ($paragraph in $xml.SelectNodes('//w:body//w:p', $ns)) {
      $text = (($paragraph.SelectNodes('.//w:t', $ns) | ForEach-Object { $_.InnerText }) -join '').Trim()
      if ($text) { $text }
    }
  } finally {
    $zip.Dispose()
  }
}

function Clean-Text([string]$Text) {
  $value = ($Text -replace '\s+', ' ').Trim()
  if ($value.Length % 2 -eq 0) {
    $half = $value.Length / 2
    if ($value.Substring(0, $half) -eq $value.Substring($half)) { $value = $value.Substring(0, $half) }
  }
  return $value
}

function Escape-Pug([string]$Text) {
  return (Clean-Text $Text).Replace('&', '&amp;').Replace('<', '&lt;').Replace('>', '&gt;').Replace('#{', '\#{')
}

function Render-Blocks($Blocks, [int]$ThemeNumber) {
  $lines = [Collections.Generic.List[string]]::new()
  foreach ($block in $Blocks) {
    if ($block.Type -eq 'table') {
      $lines.Add('    .tabla-a.color-acento-contenido.mb-5')
      $lines.Add('      table')
      for ($r = 0; $r -lt $block.Rows.Count; $r++) {
        $lines.Add('        tr')
        foreach ($cell in $block.Rows[$r]) {
          $tag = if ($r -eq 0) { 'th' } else { 'td' }
          $lines.Add("          $tag $(Escape-Pug $cell)")
        }
      }
      continue
    }
    $text = Clean-Text $block.Text
    if ($text -match "^$ThemeNumber\.(\d+)\s+(.+)$") {
      $sub = $Matches[1]; $title = Escape-Pug $Matches[2]
      $lines.Add('    Separador')
      $lines.Add("    #t_${ThemeNumber}_${sub}.titulo-segundo.color-acento-contenido(data-aos=`"fade-left`")")
      $lines.Add("      h2 $ThemeNumber.$sub $title")
    } elseif ($text -match '^Figura\s+\d+\.') {
      $lines.Add("    p.text-center.fw-bold.mb-4 $(Escape-Pug $text)")
    } elseif ($text -match '^Tabla\s+\d+\.') {
      $lines.Add("    p.fw-bold.mb-2 $(Escape-Pug $text)")
    } elseif ($block.Style -match 'lista' -or $text -match '^(Paso \d+\.|[•])') {
      $lines.Add("    ul.lista-ul.mb-3")
      $lines.Add('      li')
      $lines.Add('        i.fas.fa-angle-right')
      $lines.Add("        | $(Escape-Pug $text)")
    } else {
      $lines.Add("    p $(Escape-Pug $text)")
    }
  }
  return $lines
}

$main = @(Get-DocxBlocks $Documento)
$themeTitles = @(
  'Comunicación pública y ciudadana',
  'Lenguajes claros, comprensibles e inclusivos',
  'Relaciones de poder',
  'Garantías de derecho',
  'Contexto ciudadano y comunicativo',
  'Información pública',
  'Lineamientos institucionales',
  'Metodologías en documentos elaborados y publicados'
)
$themeStarts = @()
$developmentIndex = for ($i = 0; $i -lt $main.Count; $i++) { if ($main[$i].Type -eq 'p' -and $main[$i].Text.Trim() -eq 'DESARROLLO DE CONTENIDOS') { $i } }
for ($number = 1; $number -le 8; $number++) {
  $needle = "^$number\. "
  $matches = for ($i = $developmentIndex + 1; $i -lt $main.Count; $i++) { if ($main[$i].Type -eq 'p' -and $main[$i].Text -match $needle) { $i } }
  $themeStarts += $matches[0]
}
$synthesisIndex = for ($i = 0; $i -lt $main.Count; $i++) { if ($main[$i].Type -eq 'p' -and $main[$i].Text.Trim() -match '^S.NTESIS\s*$') { $i } }

for ($theme = 1; $theme -le 8; $theme++) {
  $start = $themeStarts[$theme - 1] + 1
  $end = if ($theme -lt 8) { $themeStarts[$theme] - 1 } else { $synthesisIndex[-1] - 1 }
  $content = if ($end -ge $start) { $main[$start..$end] } else { @() }
  $lines = [Collections.Generic.List[string]]::new()
  $lines.Add('<template lang="pug">')
  $lines.Add('.curso-main-container.pb-3')
  $lines.Add('  BannerInterno')
  $lines.Add('  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5')
  $lines.Add('    .titulo-principal.color-acento-contenido')
  $lines.Add('      .titulo-principal__numero')
  $lines.Add("        span $theme")
  $lines.Add("      h1 $($themeTitles[$theme - 1])")
  foreach ($line in (Render-Blocks $content $theme)) { $lines.Add($line) }
  $lines.Add('')
  $lines.Add('</template>')
  $lines.Add('')
  $lines.Add('<script>')
  $lines.Add("export default { name: 'Tema$theme' }")
  $lines.Add('</script>')
  $lines.Add('')
  $lines.Add('<style lang="sass"></style>')
  Set-Content -Path "src/views/Tema$theme.vue" -Value $lines -Encoding utf8
}

# La actividad se transforma a un JSON intermedio para facilitar la validación y el renderizado.
$texts = @(Get-DocxParagraphs $Actividad | ForEach-Object { Clean-Text $_ })
$questions = @()
for ($q = 1; $q -le 20; $q++) {
  $start = [Array]::IndexOf($texts, "Pregunta $q")
  $end = if ($q -lt 20) { [Array]::IndexOf($texts, "Pregunta $($q + 1)") } else { [Array]::IndexOf($texts, 'MENSAJE FINAL ACTIVIDAD') }
  $slice = $texts[$start..($end - 1)]
  $options = @()
  for ($position = 0; $position -lt $slice.Count; $position++) {
    if ($slice[$position] -match '^Opci.n ([a-d])\)$') {
      $answer = $slice[$position + 1]
      $correct = ($position + 2 -lt $slice.Count -and $slice[$position + 2].ToLower() -eq 'x')
      $options += [ordered]@{ id = $Matches[1]; texto = $answer; esCorrecta = $correct }
    }
  }
  $correctLabel = [Array]::IndexOf($slice, 'Comentario respuesta correcta')
  $wrongLabel = [Array]::IndexOf($slice, 'Comentario respuesta incorrecta')
  $questions += [ordered]@{
    id = $q
    texto = $slice[1]
    imagen = "@/assets/actividad/imagen$((($q - 1) % 10) + 1).png"
    barajarRespuestas = $true
    opciones = $options
    mensaje_correcto = $slice[$correctLabel + 1]
    mensaje_incorrecto = $slice[$wrongLabel + 1]
  }
}
$activityData = [ordered]@{
  tema = 'Comunicación pública y acceso ciudadano'
  titulo = 'Desafío de la comunicación ciudadana'
  introduccion = '<b>Objetivo:</b> Validar la apropiación de conceptos sobre comunicación pública y lenguaje claro, comprensible e inclusivo; para reducir brechas comunicativas.'
  barajarPreguntas = $true
  titulo_aprobado = '¡BUEN TRABAJO!'
  titulo_reprobado = 'VUELVA A INTENTARLO.'
  preguntas = $questions
  mensaje_final_aprobado = 'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.'
  mensaje_final_reprobado = 'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.'
}
$json = $activityData | ConvertTo-Json -Depth 8
$activityVue = @"
<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    #Actividad
    ActividadController(:cuestionario="cuestionario")
</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: { ActividadController },
  data: () => ({ cuestionario: $json }),
}
</script>
"@
Set-Content -Path 'src/views/Actividad.vue' -Value $activityVue -Encoding utf8

