# Guía de maquetación parametrizada

## Estándar consolidado para futuras maquetaciones

Esta sección resume el método construido durante la maquetación de los Temas 1 al 8. Debe utilizarse como guía principal al iniciar otro programa o componente formativo. El registro detallado que aparece después se conserva como historial de decisiones y ejemplos de aplicación.

### 1. Principio de trabajo

La maquetación se realiza por bloques. El PDF o archivo de diseño define la composición visual; el archivo `TemaX.vue` aporta el contenido; y los componentes institucionales proporcionan la estructura y el comportamiento.

Reglas de revisión:

- Solo se modifica el bloque señalado. Los bloques no mencionados se consideran aprobados.
- La información correcta se conserva aunque cambie el componente que la presenta.
- Las imágenes y colores aprobados se mantienen cuando el ajuste solicitado es únicamente estructural.
- Si se agrega una muestra en el archivo, se toma como patrón, se aplica al bloque definitivo y luego se elimina para evitar contenido duplicado.
- Antes de crear CSS propio se revisan los componentes y estilos institucionales existentes.
- El CSS personalizado debe limitarse a necesidades que el componente institucional no resuelva, como un fondo, degradado o tamaño particular aprobado.

### 2. Insumos que deben revisarse

Antes de editar se debe comprobar:

1. La página correspondiente del PDF o archivo de diseño.
2. El contenido existente en `src/views/TemaX.vue`.
3. Las imágenes disponibles en `src/assets/curso/temas/tX/`.
4. Los componentes ya utilizados en otros archivos `TemaX.vue`.
5. Los estilos institucionales ubicados en `src/styles/componentes/`.
6. Las reglas generales y clases existentes en `src/styles/_custom.sass`.

### 3. Formato recomendado para solicitar una revisión

Cada ajuste debe describirse de esta forma:

```text
Bloque: nombre, clase o fila donde inicia
Estado actual: qué está correcto y qué está incorrecto
Resultado esperado: cómo debe quedar
Componente sugerido: componente institucional o bloque de referencia
Qué debe cambiar: estructura, color, imagen, margen o contenido
Motivo: razón institucional, visual, responsiva o de accesibilidad
```

Si un dato está correcto debe indicarse expresamente. Por ejemplo: “información, imágenes y colores correctos; cambiar solo la estructura”.

### 4. Flujo estándar de implementación

1. Inspeccionar el bloque solicitado y su referencia.
2. Identificar qué partes deben conservarse.
3. Confirmar el componente institucional apropiado.
4. Aplicar la estructura Pug respetando su jerarquía e indentación.
5. Aplicar las reglas de títulos, márgenes, párrafos e imágenes.
6. Retirar muestras o CSS personalizado que haya quedado sin uso.
7. Registrar en este documento el cambio y el criterio aprendido.
8. Ejecutar `npm run build`.
9. Corregir cualquier error de Pug, ruta o componente antes de finalizar.

### 5. Reglas generales de estructura y espaciado

- La separación normal entre bloques se maneja con `.mb-4` o `.mt-4`.
- No se deben introducir márgenes arbitrarios cuando las utilidades institucionales sean suficientes.
- El último párrafo dentro de un bloque debe usar `p.mb-0`.
- Si el elemento siguiente es `Separador`, el bloque anterior debe cerrar con `.mb-0`.
- Los cajones que el diseño presenta centrados deben ubicarse normalmente en `.row.justify-content-center > .col-lg-10`.
- Se debe mantener una retícula responsiva con clases Bootstrap y contemplar el apilamiento en pantallas pequeñas.
- Los títulos internos de sliders, acordeones y tarjetas avatar deben utilizar `h5`.

### 6. Regla de imágenes y accesibilidad

- Toda imagen que no corresponda a una figura numerada debe usar `alt=""`.
- Las figuras numeradas deben incluir un texto alternativo descriptivo que comunique la información esencial de la figura.
- Si una figura tiene versiones para escritorio y móvil, ambas deben conservar el mismo texto alternativo.
- Las imágenes usadas como fondo se cargan mediante `require_src` dentro de `:style`.
- Las rutas deben apuntar a `@/assets/curso/...` y respetar exactamente el nombre y extensión del archivo.

### 7. Patrones institucionales aprobados

#### Bloque de apertura con imagen e icono

```pug
.row.g-0.align-items-stretch.tema1-apertura.mb-4
  .col-lg-5
    figure.tema1-apertura__imagenF
      img(src="@/assets/curso/temas/tX/img1.png" alt="")
  .col-lg-7
    .row.p-4.mb-3
      .col-lg-2
        img.tema1-apertura__icono.mb-4(src="@/assets/curso/temas/tX/img2.svg" alt="")
      p.mb-0 Texto del bloque.
```

#### Cajón centrado a diez columnas

```pug
.row.justify-content-center.mb-4
  .col-lg-10
    .cajon.color-primario.p-4
      p.mb-0 Texto destacado.
```

El color puede cambiar a `color-secundario` si el diseño lo indica.

#### Título interno tipo pastilla

```pug
.titulo-pastilla.mt-4(data-aos="fade-down")
  img(src="@/assets/curso/icon.svg" alt="")
  span Título del bloque
```

#### Título de tabla o figura numerada

```pug
.titulo-sexto.color-acento-contenido.mb-3.mt-4
  h5 Figura 1.
  span Nombre de la figura
```

Para tablas se reemplaza “Figura” por “Tabla”.

#### Figura responsiva numerada

```pug
.row.justify-content-center.mb-4
  .col-12.d-none.d-lg-block
    figure
      img(src="@/assets/curso/temas/tX/figura.svg" alt="Descripción de la figura.")
  .col-12.d-block.d-lg-none
    figure
      img(src="@/assets/curso/temas/tX/figura_movil.svg" alt="Descripción de la figura.")
```

#### Tabla institucional con filas alternadas

```pug
.tabla-a.color-acento-contenido.tema1-tabla.mb-4
  table
    thead
      tr
        th Encabezado
    tbody
      tr
        td Contenido
```

La clase `.tema1-tabla` aplica encabezado `#E5E4FE`, filas impares `#F6F6F6`, filas pares blancas y primera columna en negrita.

#### `tarjeta-avatar`

```pug
.row.justify-content-center.mb-0
  .col-md-6.col-xl-4.mb-4.mb-xl-0
    .tarjeta-avatar
      img(src="@/assets/curso/temas/tX/icono.svg" alt="")
      .tarjeta.color-primario.w-100.h-100.mt-3
        .p-4
          h5.text-center Título
          p.mb-0 Contenido.
```

La tarjeta debe incluir `w-100`, `h-100`, `mt-3` y un contenedor interior `.p-4` para conservar uniformidad.

#### `tarjeta--container`

```pug
.tarjeta--container.row.mb-4
  .col-md.tarjeta.clase-de-color.p-5
    .row.justify-content-center.mb-4
      .col-6
        figure
          img(src="@/assets/curso/temas/tX/icono.svg" alt="")
    h5.text-center Título
    p.mb-0 Contenido.
```

#### `tarjeta-numerada`

```pug
.tarjeta-numerada.clase-de-color.p-5.h-100
  .tarjeta-numerada__numero
    .h2 1
  h5.text-center Título
  p.mb-0.text-center Contenido.
```

#### `LineaTiempoD`

```pug
LineaTiempoD.color-acento-botones
  p.mb-0(numero="1" titulo="Título") Contenido del elemento.
  p.mb-0(numero="2" titulo="Título") Contenido del elemento.
```

Cada elemento debe ser hijo directo de `LineaTiempoD` y declarar `numero` y `titulo`.

#### `AcordionA`

```pug
AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
  .row(titulo="Título")
    p.mb-0 Contenido.
```

#### Slider con fondo institucional

```pug
.BG01.px-5.p-5.mb-4
  .bgwhite.p-4
    SlyderA(tipo="b")
      .row.align-items-center
        .col-lg-6.mb-4.mb-lg-0
          h5 Título
          p.mb-0 Contenido.
        .col-lg-6
          figure
            img(src="@/assets/curso/temas/tX/imagen.png" alt="")
```

Las clases `.BG02`, `.BG03` y `.BG04` pueden sustituir a `.BG01` cuando el diseño requiera otro degradado, conservando el panel interior `.bgwhite.p-4`.

#### `bloque-texto-g`

```pug
.bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4
  .bloque-texto-g__img(
    role="img"
    :style="{'background-image':`url(${require_src('@/assets/curso/temas/tX/imagen.png')})`}"
  )
  .bloque-texto-g__texto.p-4
    p.mb-0 Contenido.
```

#### Lista numerada institucional

```pug
ol.lista-ol--cuadro.mb-0
  li
    .lista-ol--cuadro__vineta
      span 1
    | Contenido del elemento.
```

### 8. Uso de fondos y CSS personalizado

- Los fondos amplios deben extenderse mediante `margin-inline` y contemplar el ajuste para móvil.
- Cuando una imagen de fondo no se degrade correctamente en los bordes, debe reemplazarse por un `linear-gradient` equivalente.
- Los colores particulares se asignan con clases modificadoras sin reescribir la geometría del componente institucional.
- Si una clase personalizada deja de utilizarse después de adoptar el componente institucional, debe eliminarse.

### 9. Documentación de cada revisión

Cada cambio registrado debe incluir:

- Bloque revisado.
- Estado anterior.
- Estructura o componente aplicado.
- Elementos que se conservaron.
- Elementos que se eliminaron o reemplazaron.
- Regla general aprendida.
- Resultado de la validación.

El objetivo no es documentar únicamente qué se cambió, sino por qué esa solución debe reutilizarse.

### 10. Lista de validación final

Antes de cerrar un tema se debe confirmar:

- [ ] El contenido coincide con el documento fuente.
- [ ] Las imágenes corresponden al bloque correcto y sus rutas funcionan.
- [ ] No quedaron muestras ni contenido duplicado.
- [ ] Los componentes institucionales mantienen su estructura aprobada.
- [ ] Los títulos internos usan `h5`.
- [ ] Los márgenes siguen las reglas `.mb-4`, `.mt-4` y `.mb-0`.
- [ ] Los párrafos finales usan `p.mb-0`.
- [ ] Las imágenes no numeradas usan `alt=""`.
- [ ] Las figuras numeradas tienen título y texto alternativo descriptivo.
- [ ] La vista responde correctamente en escritorio y móvil.
- [ ] No existe CSS personalizado sin uso.
- [ ] `npm run build` finaliza sin errores.
- [ ] La revisión quedó registrada en `maquetacion.md`.

---

## Historial detallado de implementación

Las secciones siguientes contienen el proceso completo de configuración y las revisiones realizadas durante este componente formativo. Sirven como banco de ejemplos y evidencia de las decisiones que dieron origen al estándar consolidado.

## Regla general para el atributo `alt` de las imágenes

- Todas las imágenes que no correspondan a una figura numerada deben declararse con `alt=""`.
- Las figuras numeradas conservan un texto alternativo descriptivo que permita comprender su contenido.

```pug
// Imagen decorativa o no numerada
img(src="ruta-de-la-imagen" alt="")

// Figura numerada
img(src="ruta-de-la-figura" alt="Descripción completa de la figura")
```

## Tema 3: relaciones de poder

- Después del párrafo que introduce las características se utiliza `SlyderB.mb-4.p-5.tarjeta.color-secundario(:datos="datosSlyder")`.
- Las seis características se administran desde `datosSlyder`, usando título, texto e imagen.
- En proyectos con Vite, las imágenes utilizadas dentro de objetos de datos deben importarse con `import` y asignarse mediante la variable importada. No se debe usar `require(...)`, porque puede impedir que la vista se monte durante el desarrollo.
- Los tipos de relaciones de poder se presentan con el componente institucional `SlyderF`, configurado con `columnas="col-md-6 col-xl-4"`.
- Los títulos internos de los sliders mantienen la jerarquía `h5`.
- Como ninguna imagen del tema corresponde a una figura numerada, todas las etiquetas `img` utilizan `alt=""`.
- Los demás bloques reutilizan los patrones aprobados: columnas responsivas, `cajon`, `bloque-texto-g` y `titulo-pastilla`.
- Se mantienen las reglas generales de separación con `.mb-4`, `.mt-4` y `p.mb-0` al final de cada bloque.

### Revisión del bloque introductorio de la sección 3.1

- El componente `bloque-texto-g` no correspondía al diseño aprobado.
- Se reemplazó por la misma estructura utilizada al inicio de `Tema1.vue`: `.row.g-0.align-items-stretch.tema1-apertura.mb-4`.
- La fotografía ocupa `.col-lg-5` y el contenido ocupa `.col-lg-7`.
- El contenido conserva el ícono institucional con `.tema1-apertura__icono.mb-4` y termina con `p.mb-0`.
- Este patrón debe reutilizarse cuando el PDF presente una imagen lateral y un bloque de texto sobre el fondo violeta claro aprobado.

### Revisión de la clase `.BGTARG`

- La clase estaba correctamente aplicada, pero la ruta declaraba `imgfondoslf.png`.
- El recurso disponible en `src/assets/curso/temas/bg/` tiene extensión `.svg`.
- Se corrigió la propiedad a `background-image: url("../assets/curso/temas/bg/imgfondoslf.svg")`.
- Cuando un fondo no aparezca, se debe validar primero que el nombre y la extensión coincidan exactamente con el archivo existente.

### Revisión del `SlyderF` de tipos de relaciones de poder

- El slider de prueba se utilizó como plantilla visual y luego se eliminó para evitar duplicar el contenido.
- Todas las tarjetas del `SlyderF` usan `.tarjeta.BGTARG.p-5`.
- Cada imagen se centra mediante `.row.justify-content-center.mb-3` y `.col-8`.
- Los títulos conservan `h5.text-center` y el espacio inferior del contenido se maneja con `p.mb-5`, tal como quedó aprobado en la tarjeta de prueba.
- El componente se configura con `SlyderF.mb-5(columnas="col-lg-6 col-xl-4")`.
- Las imágenes siguen la regla general `alt=""` por no corresponder a figuras numeradas.

## Tema 4: garantías de derecho

- La apertura de la página 6 se organiza en una fila responsiva: fotografía en `.col-lg-5` y contenido en `.col-lg-7`.
- La fotografía reutiliza `.intro-imagen-principal`, patrón que incorpora el tratamiento visual y el borde decorativo aprobado.
- El primer párrafo se destaca con `.cajon.color-primario.p-4.mb-4`; el segundo párrafo queda como cierre del bloque con `p.mb-0`.
- Como el bloque es seguido por `Separador`, la fila principal termina en `.mb-0`.
- La sección 4.1 reutiliza un `.cajon.color-secundario.p-4` centrado en diez columnas.
- Dentro del cajón, el ícono se maneja en una columna automática y el contenido termina con `p.mb-0`.
- `img1.png` e `img2.svg` no son figuras numeradas, por lo que ambas usan `alt=""`.

### Revisión del fondo `.BG02`

- Se eliminó la imagen de fondo `imgbgdesgradado.svg`, porque al escalarse producía cortes visibles en los bordes.
- El efecto se reconstruyó con CSS mediante un degradado vertical simétrico.
- La clase utiliza blanco en los extremos y `#FFEFEF` en el centro: `linear-gradient(to bottom, $white 0%, #FFEFEF 37%, #FFEFEF 63%, $white 100%)`.
- Para fondos que solo representan transiciones de color, se debe preferir un degradado CSS en lugar de una imagen, ya que se adapta al alto y ancho del contenido sin bordes abruptos.

### Clases generales para fondos degradados

- `.BG02` reemplaza el fondo rosado `imgbgdesgradado` y utiliza `#FFEFEF` entre el 37 % y el 63 %.
- `.BG03` reemplaza `imgbgdegradovioleta.png` y utiliza `#F6F3FF` entre el 27 % y el 73 %.
- `.BG04` reemplaza `imgbgdegradadovioleta2.png` y utiliza `#F6F3FF` entre el 17 % y el 82 %, por lo que mantiene una zona violeta más extensa.
- Las tres clases pasan de blanco al color central y regresan a blanco, evitando cortes visuales en los bordes.
- Todas conservan `margin-inline: -3.5rem` en escritorio y `-1.5rem` en pantallas pequeñas.

## Tema 5: contexto ciudadano y comunicativo

- La apertura comienza con una imagen panorámica y continúa con un párrafo independiente.
- El segundo texto se presenta con `bloque-texto-g--inverso`, colocando la fotografía al costado derecho.
- El tercer párrafo se destaca en un `.cajon.color-primario.p-4` centrado en diez columnas y termina con `.mb-0` antes del `Separador`.
- La sección 5.1 inicia con un ícono de 84 píxeles y texto en una fila responsiva.
- Los conceptos de contexto ciudadano y comunicativo usan `tarjeta--container`; sus fondos aprobados son `#F6F3FF` y `#FEDEDE`.
- La Figura 2 sigue el patrón general de figuras numeradas: `titulo-sexto`, título `h5`, descripción, versión de escritorio y versión móvil, ambas con texto alternativo descriptivo.
- Las condiciones sociales y culturales se presentan con `SlyderA(tipo="b")` dentro de `.BG03.p-5.mb-4`.
- Los títulos internos se manejan con `h5`; las imágenes no numeradas usan `alt=""` y los párrafos finales usan `p.mb-0`.

Esta guía documenta el proceso para maquetar un recurso educativo a partir de los documentos fuente ubicados en `fuentes/`.

La guía no depende de un número de componente fijo. Debe funcionar para `CF01`, `CF02`, `CF03` o cualquier componente futuro, siempre que conserve la estructura base del formato institucional.

## Codificación obligatoria de los archivos

Todos los archivos de texto del proyecto deben leerse y guardarse en **UTF-8** para conservar correctamente las tildes, la letra `ñ`, los signos de apertura (`¿`, `¡`) y demás caracteres del español.

Reglas:

- No copiar al código textos que contengan secuencias dañadas como `Ã`, `Â` o el carácter de reemplazo `�`.
- Después de generar o modificar archivos `.vue`, `.js`, `.sass` o `.md`, buscar esas secuencias y corregirlas antes de ejecutar la compilación.
- Cuando se utilice Windows PowerShell para generar archivos, el script `.ps1` debe estar guardado como UTF-8 con BOM o evitar literales acentuados que el intérprete pueda leer con una codificación diferente.
- Los textos extraídos del Word deben conservarse en Unicode durante todo el proceso.
- Validar visualmente títulos relevantes, por ejemplo `Desafío de la comunicación ciudadana`, antes de cerrar la actividad.

## 1. Identificar los documentos fuente

Dentro de `fuentes/` se deben ubicar, como mínimo:

```txt
CF_XX_*.docx
Actividad_didactica_CFXX.docx
```

Donde `XX` corresponde al número del componente formativo.

Reglas:

- Usar el documento `.docx` principal asociado al componente. Puede empezar por `CF_`, incluir `CFXX` o usar otra convención institucional equivalente.
- Usar el documento de actividad cuyo nombre empiece por `Actividad_didactica_`.
- Si el nombre cambia ligeramente, priorizar el contenido y no un nombre rígido.
- Ignorar archivos auxiliares que no correspondan al componente, por ejemplo pruebas o borradores.

## 2. Extraer la información general del componente

En la tabla inicial del documento principal se toman estos campos:

| Campo del Word                    | Archivo destino        | Propiedad destino      |
| --------------------------------- | ---------------------- | ---------------------- |
| `NOMBRE DEL COMPONENTE FORMATIVO` | `src/config/titulo.js` | exportación principal |
| `NOMBRE DEL COMPONENTE FORMATIVO` | `src/config/global.js` | `global.Name`          |
| `BREVE DESCRIPCION`               | `src/config/global.js` | `global.Description`   |

Formato esperado:

```js
// src/config/titulo.js
module.exports = 'Nombre del componente formativo'
```

```js
// src/config/global.js
global: {
  Name: 'Nombre del componente formativo',
  Description: 'Breve descripción del recurso',
}
```

## 3. Revisar la guía de diseño `.xd` o `.pdf`

Antes de maquetar la introducción o cualquier tema, revisar si en `fuentes/` existe un archivo de diseño `.xd` asociado al componente. Cuando el `.xd` no esté disponible o no pueda consultarse, se puede utilizar su versión exportada en `.pdf` como referencia visual.

La guía `.xd` se usa como referencia para interpretar la intención visual del contenido:

- distribución de bloques;
- uso de imágenes;
- presencia de tablas, tarjetas, listados, destacados u otros recursos;
- jerarquía visual entre títulos, textos y apoyos gráficos;
- paleta cromática y estilo general del componente.

Reglas de uso:

- El documento Word sigue siendo la fuente oficial del contenido textual.
- El archivo `.xd` orienta la forma de presentar ese contenido en la maquetación.
- Si el `.xd` contiene textos de apoyo, placeholders o fragmentos que no coinciden con el Word, prevalece el Word.
- Antes de pasar contenido a una vista `.vue`, se debe revisar cómo fue resuelto visualmente ese bloque en el `.xd`.
- Cuando se trabaje desde un `.pdf`, tomar como referencia únicamente el contenido interno de la vista que se está maquetando.
- No reproducir el encabezado, menú, navegación, fondo general de la página ni contenedor exterior mostrados en el `.pdf`, porque estos elementos ya son suministrados por la plantilla base.
- La referencia visual comienza en el contenido propio de la sección: títulos, distribución de columnas, textos, imágenes, tarjetas, tablas, destacados, componentes multimedia y demás bloques internos.
- Conservar los componentes estructurales existentes de la base, como `BannerInterno`, `.curso-main-container` y `.container.tarjeta.tarjeta--blanca`, según la vista correspondiente.

### Identificación de componentes desde el diseño

El archivo `.pdf` muestra el resultado visual, pero normalmente no conserva el nombre técnico del componente utilizado. La identificación se realiza comparando cada bloque del diseño con los componentes disponibles en:

```txt
src/styles/componentes/
```

Antes de crear estilos nuevos, revisar como mínimo las siguientes familias:

- recursos tipográficos y destacados básicos definidos en `src/styles/basicos/_tipografias.sass`: encabezados `.h1` a `.h6`, pesos de texto, `titulo-principal`, `titulo-segundo` a `titulo-sexto`, `etiqueta`, `cajon`, `cajon-b` y listas;
- bloques de texto: `bloque-texto-a` hasta `bloque-texto-g`;
- tarjetas: `tarjeta`, `tarjeta-avatar`, `tarjeta-avatar-b`, `tarjeta-numerada`, `tarjeta-flip` y demás variantes;
- tablas: `tabla-a`, `tabla-b` y `tabla-c`;
- líneas de tiempo: `linea-tiempo-a` hasta `linea-tiempo-e`;
- pasos: `pasos-a` y `pasos-b`;
- pestañas: `tabs-a`, `tabs-b` y `tabs-c`;
- deslizadores: `slyder-a`, `slyder-b`, `slyder-c`, `slyder-d` y `slyder-f`;
- acordeones, anexos, modales, infografías, indicadores, imágenes, audio, video, diálogo y zoom.

Proceso de identificación:

1. Dividir la página del diseño en bloques visuales independientes.
2. Determinar la función de cada bloque: texto destacado, tarjeta, tabla, pasos, línea de tiempo, pestañas, acordeón, carrusel, infografía, imagen con texto superpuesto, video, audio o anexo.
3. Comparar su composición, fondo, bordes, iconos, posición de la imagen y comportamiento esperado con las variantes existentes.
4. Revisar primero si el bloque corresponde a un recurso básico de `_tipografias.sass`, especialmente cuando sea un título, etiqueta, cajón o destacado sencillo.
5. Si requiere una composición más compleja, seleccionar el componente institucional de `src/styles/componentes/` con mayor correspondencia funcional y visual.
6. Utilizar CSS personalizado únicamente para ajustes decorativos o composiciones que no estén cubiertas por los recursos básicos y componentes existentes.
7. Verificar que el componente conserve un comportamiento adecuado en escritorio, tableta y móvil.

La coincidencia no tiene que ser exacta en cada detalle gráfico. Se debe priorizar el componente que represente correctamente la intención funcional del diseño y permita una implementación accesible y responsive.

### Configuración de la paleta del curso

Cuando la primera página del `.xd` o `.pdf` incluya la paleta del componente, actualizar la sección `// Colores Curso` de:

```txt
src/styles/_variables.sass
```

La correspondencia obligatoria es:

| Color del diseño | Variable Sass |
| ---------------- | ------------- |
| `1 - Primario` | `$color-primario` |
| `2 - Secundario` | `$color-secundario` |
| `3 - Acento contenido` | `$color-acento-contenido` |
| `4 - Acento BOTÓN` | `$color-acento-botones` |

Reglas:

- Tomar el código hexadecimal principal mostrado junto al nombre del color, no sus variantes clara (`VC`), variable (`V`) u oscura (`VO`).
- Conservar los códigos hexadecimales exactamente como aparecen en el diseño.
- No modificar `$color-institucional` ni los colores adicionales salvo que el diseño lo solicite expresamente.
- Realizar esta configuración antes de seleccionar variantes de componentes, porque clases como `.color-primario`, `.color-secundario`, `.color-acento-contenido` y `.color-acento-botones` dependen de estas variables.
- Compilar el proyecto después del cambio para comprobar contraste, legibilidad y compatibilidad de los componentes.

### Ubicación de estilos personalizados

Todos los estilos personalizados necesarios para la maquetación deben agregarse en:

```txt
src/styles/_custom.sass
```

Reglas:

- No agregar bloques `<style>` dentro de las vistas `.vue`.
- Organizar los estilos por vista o tema mediante comentarios, por ejemplo `// Introducción` o `// Tema 1`.
- Usar nombres de clase específicos para evitar afectar accidentalmente otros componentes.
- Reutilizar primero las variables definidas en `src/styles/_variables.sass`, los recursos de `src/styles/basicos/_tipografias.sass` y los componentes existentes.
- Mantener en `_custom.sass` únicamente los ajustes que no puedan resolverse con Bootstrap o con `src/styles/componentes/`.
- Incorporar las reglas responsive en la sección de media queries existente del mismo archivo.

### Uso de la retícula Bootstrap

La estructura general de las vistas debe construirse con la retícula de **12 columnas de Bootstrap**.

Reglas:

- Usar `.row` como contenedor de columnas.
- Distribuir los bloques mediante clases como `.col-12`, `.col-md-6`, `.col-lg-4` y `.col-lg-8`.
- Comprobar que la suma de columnas de una fila no supere 12 en el mismo nivel.
- Definir primero la distribución de escritorio y permitir que las columnas se apilen en resoluciones menores.
- No reemplazar la retícula con posiciones absolutas para la estructura principal.
- Las posiciones absolutas se reservan para detalles decorativos o superposiciones controladas.

### Norma general de separación vertical y cierre de bloques

Para mantener un ritmo visual uniforme en todas las vistas, los bloques de contenido deben utilizar como separación vertical estándar las clases Bootstrap `.mb-4` o `.mt-4`.

Reglas:

- Usar `.mb-4` cuando la separación se controle desde el bloque anterior.
- Usar `.mt-4` cuando la separación deba aplicarse desde el bloque siguiente.
- Evitar combinar `.mb-4` y `.mt-4` entre dos bloques consecutivos, porque se duplicaría el espacio.
- Evitar `.mb-3`, `.mb-5`, `.mt-3` y `.mt-5` para separar bloques durante la maquetación, salvo que un componente base de la plantilla los incluya estructuralmente y modificarlos pueda alterar su funcionamiento.
- La regla se aplica a filas, tarjetas, figuras, cajones, tablas, carruseles, acordeones y demás bloques principales.
- Los espacios internos se controlan preferentemente con `p-4`. Pueden conservarse otras clases internas cuando formen parte de la estructura oficial de un componente.
- Si el último elemento de un bloque es un párrafo, debe escribirse como `p.mb-0` para eliminar el margen inferior propio del elemento.
- Un párrafo independiente que precede a otro bloque puede utilizar `p.mb-4`, porque en ese caso el párrafo funciona como bloque y controla la separación externa.
- Si el siguiente elemento es `Separador`, el bloque anterior debe utilizar `.mb-0`, porque el componente `Separador` ya controla el espacio de transición hacia el siguiente apartado.

Ejemplo:

```pug
.cajon.color-primario.p-4.mb-4
  h4 Título del bloque
  p.mb-0 Párrafo final sin margen inferior interno.

p.mb-4 Párrafo independiente que introduce el siguiente bloque.

figure.mb-4
  img(src="ruta-de-la-imagen" alt="Descripción de la imagen")
```

### Norma general para títulos de tablas y figuras

Los títulos visibles de todas las tablas y figuras deben utilizar el componente institucional `titulo-sexto`. No se deben construir mediante párrafos en negrita ni mediante estilos personalizados.

Estructura aprobada para figuras:

```pug
.titulo-sexto.color-acento-contenido.mb-3.mt-4
  h5 Figura 1.
  span Nombre de la figura

figure.mb-4
  img(src="ruta-de-la-figura" alt="Descripción accesible de la figura")
```

Estructura aprobada para tablas:

```pug
.titulo-sexto.color-acento-contenido.mb-3.mt-4
  h5 Tabla 1.
  span Nombre de la tabla

.tabla-a.color-acento-contenido.mb-4
  table
```

Reglas:

- Usar `.titulo-sexto.color-acento-contenido` como contenedor del título.
- Escribir el tipo y número del recurso dentro de `h5`, incluyendo el punto final: `Figura 1.` o `Tabla 1.`.
- Escribir el nombre descriptivo del recurso dentro de `span`.
- Conservar `.mb-3.mt-4` porque forman parte del patrón institucional aprobado para `titulo-sexto`; esta es una excepción controlada a la separación general `.mb-4` o `.mt-4`.
- Ubicar el título inmediatamente antes de la figura o tabla correspondiente.
- No repetir el título dentro de `figure`, `figcaption`, la tabla o un párrafo adicional.
- No crear bordes, líneas o estilos personalizados para simular el título, porque `titulo-sexto` ya suministra su presentación visual.
- La figura o tabla conserva `.mb-4` como separación respecto al bloque siguiente.

### Norma general para imágenes de figuras numeradas

Las imágenes correspondientes a figuras numeradas deben maquetarse mediante una fila responsive con una versión para escritorio y otra para dispositivos pequeños cuando existan ambos recursos.

Estructura aprobada:

```pug
.row.justify-content-center.align-items-center.mb-4
  .col-lg-12.d-none.d-lg-block
    figure
      img(
        src="ruta/figura-horizontal.svg"
        alt="Descripción completa de la figura"
      )
  .col-lg-12.d-block.d-lg-none
    figure
      img(
        src="ruta/figura-vertical.svg"
        alt="Descripción completa de la figura"
      )
```

Reglas:

- Encapsular la figura en `.row.justify-content-center.align-items-center.mb-4`.
- Usar `.col-lg-12.d-none.d-lg-block` para la versión horizontal de escritorio.
- Usar `.col-lg-12.d-block.d-lg-none` para la versión vertical destinada a tabletas y móviles.
- Incluir cada imagen dentro de su propio elemento semántico `figure`.
- Utilizar el mismo texto alternativo completo en ambas versiones, porque representan la misma información.
- El texto alternativo debe explicar las relaciones, etapas o ideas principales de la figura; no debe limitarse a repetir su título.
- Mantener `.mb-4` en la fila para respetar la norma general de separación vertical.
- Reemplazar `.mb-4` por `.mb-0` cuando inmediatamente después de la figura aparezca `Separador`.
- No duplicar la figura mediante otro `picture`, `img` o bloque adicional.
- Si solo existe una versión de la imagen, conservar la fila y una única columna responsive, sin inventar o estirar una segunda versión.

### Ficha previa de maquetación por vista

Antes de modificar una vista `.vue`, elaborar una ficha breve que permita validar la interpretación del diseño:

```txt
Vista: Introduccion.vue
Página de referencia: página 2 del PDF
Alcance de la referencia: únicamente el contenido interno; se excluyen encabezado, navegación, fondo general y contenedor exterior del PDF
Bloque 1: retícula Bootstrap 4/8 con imagen y texto
Bloque 2: bloque de texto destacado
Bloque 3: bloque-texto-g o imagen con texto superpuesto
Bloque 4: componente de video
Recursos: intro-1.jpg, intro-2.jpg
CSS personalizado: detalles decorativos no cubiertos por la plantilla
```

Esta ficha debe indicar:

- página o mesa de trabajo de referencia;
- distribución de columnas;
- componente institucional elegido para cada bloque;
- imágenes que deben exportarse;
- contenido interactivo que debe conservarse;
- estilos personalizados estrictamente necesarios.

### Organización de imágenes por tema

Las imágenes exportadas desde el `.xd` o extraídas del `.pdf` deben organizarse dentro de:

```txt
src/assets/curso/temas/
```

Usar una carpeta por cada sección o tema del componente, por ejemplo:

```txt
src/assets/curso/temas/intro/
src/assets/curso/temas/tema1/
src/assets/curso/temas/tema2/
```

Reglas:

- Guardar en cada carpeta únicamente los recursos correspondientes a esa sección.
- Nombrar las imágenes de forma secuencial y consistente, por ejemplo `img1.png`, `img2.svg`, etc.
- Elegir el formato según la naturaleza del recurso:
  - `.svg` para vectores, íconos, diagramas simples e ilustraciones escalables.
  - `.png` para fotografías, composiciones rasterizadas o imágenes con efectos que no convenga reconstruir como vector.
- Antes de maquetar una sección, verificar qué recursos visuales del `.xd` o `.pdf` deben exportarse y en qué formato.
- Extraer únicamente los recursos utilizados por la vista que se está trabajando.
- No usar una captura completa de la página como sustituto de la maquetación HTML.
- Mantener texto, tablas y controles interactivos como elementos HTML accesibles.

## 4. Construir el menú principal

Ubicar la sección equivalente a la tabla de contenidos. Según el documento puede aparecer como:

```txt
TABLA DE CONTENIDOS
A. TABLA DE CONTENIDOS
```

La entrada `Introducción` no se replica en los temas, porque ya existe como ruta independiente.

Reglas:

- Cada tema principal se convierte en `tema1`, `tema2`, `tema3`, etc.
- Cada subtema conserva su numeración original en `numero`.
- El texto visible se copia en `titulo`, sin alterar su sentido.
- Cada subtema usa un `hash` con el patrón `t_numero_subnumero`, por ejemplo `t_4_3`.
- Si se agregan temas nuevos, también deben existir su ruta y su vista correspondiente.

Ejemplo:

```js
{
  nombreRuta: 'tema1',
  numero: '1',
  titulo: 'Título del tema principal',
  desarrolloContenidos: true,
  subMenu: [
    {
      numero: '1.1',
      titulo: 'Título del subtema',
      hash: 't_1_1',
    },
  ],
}
```

## 5. Sincronizar rutas y vistas

Revisar `src/router/index.js`.

Cada tema presente en `menuPrincipal.menu` debe tener:

- `path`
- `name`
- `component`

Ejemplo:

```js
{
  path: 'tema4',
  name: 'tema4',
  component: () =>
    import(/* webpackChunkName: "tema4" */ '../views/Tema4.vue'),
}
```

Si el tema no existe todavía:

- Crear `src/views/Tema#.vue`.
- Tomar como base una vista existente.
- Ajustar el número visible y el nombre del componente.

## 6. Limpiar el submenú institucional

En `src/config/global.js`, retirar de `menuPrincipal.subMenu` la entrada visible:

```js
{
  nombreRuta: 'complementario',
  icono: 'far fa-folder-open',
  titulo: 'Material complementario',
}
```

La ruta puede permanecer en el router si el proyecto la conserva.

## 7. Configurar glosario y referencias

### Glosario

Ubicar la sección equivalente a:

```txt
GLOSARIO
F. GLOSARIO
```

Cada fila de la tabla `TÉRMINO / SIGNIFICADO` se transforma en:

```js
{
  termino: 'Término',
  significado: 'Definición',
}
```

Reglas:

- Mantener el orden del documento.
- Retirar dos puntos finales del término si los trae.
- Reemplazar cualquier ejemplo genérico de plantilla.

### Referencias bibliográficas

Ubicar la sección equivalente a:

```txt
REFERENCIAS BIBLIOGRÁFICAS
G. REFERENCIAS BIBLIOGRÁFICAS
```

Cada referencia se transforma en:

```js
{
  referencia: 'Referencia bibliográfica',
  link: '',
}
```

Reglas:

- Mantener el orden del Word.
- Si existe enlace explícito, asignarlo en `link`.
- Si no existe, dejar `link: ''`.

## 8. Crear títulos y anclajes en las vistas de tema

Por cada subtema del menú, crear su anclaje en `src/views/Tema#.vue`.

Formato:

```pug
Separador
#t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
  h2 1.1 Título del subtema
```

Reglas:

- El `h1` de cada vista debe coincidir con el título del tema principal.
- El `hash` del menú se vuelve el `id` del bloque Pug.
- Antes de cada título de segundo nivel se agrega `Separador`.
- Los anclajes se ubican dentro del contenedor principal del tema.

## 9. Configurar introducción y síntesis

### Introducción

Ubicar la sección equivalente a:

```txt
INTRODUCCIÓN
B. INTRODUCCIÓN
```

Pasar los párrafos narrativos a `src/views/Introduccion.vue`.

### Síntesis

Ubicar la sección equivalente a:

```txt
SÍNTESIS
D. SÍNTESIS
```

Pasar los párrafos narrativos a `src/views/sintesis.vue`.

Reglas comunes:

- Cada párrafo narrativo del Word se convierte en una etiqueta `p`.
- No incluir rótulos de diagramas, textos duplicados ni fragmentos pertenecientes a imágenes.
- Conservar la estructura visual existente de la plantilla.

### Texto alternativo de la síntesis

Si el Word contiene comentarios con el prefijo:

```txt
Texto alternativo:
```

usar el comentario correspondiente a la síntesis para completar el atributo `alt` de:

```pug
img(src="@/assets/curso/sintesis.svg", alt="")
```

## 10. Configurar la actividad didáctica

Desde `Actividad_didactica_CFXX.docx` o su variante institucional equivalente, completar `src/views/Actividad.vue`.

Campos generales:

| Campo del Word             | Destino                                          |
| -------------------------- | ------------------------------------------------ |
| `Objetivo de la actividad` | `introduccion`, precedido por `<b>Objetivo:</b>` |
| Mensaje de aprobación     | `mensaje_final_aprobado`                         |
| Mensaje de no aprobación  | `mensaje_final_reprobado`                        |

Reglas por pregunta:

- Cada bloque `Pregunta N` se convierte en un objeto.
- La opción marcada con `X` queda con `esCorrecta: true`.
- Las demás opciones quedan con `esCorrecta: false`.
- Mantener `barajarRespuestas: true`.
- Validar que cada pregunta tenga exactamente una respuesta correcta.

Reglas de imágenes:

- Las imágenes se toman desde `src/assets/actividad/`.
- Identificar cuántas imágenes `imagen#.png` existen realmente en el proyecto.
- Asignarlas en secuencia y reiniciar el ciclo al llegar al final.
- Ejemplo: si existen `imagen1.png` a `imagen4.png`, la pregunta 5 vuelve a usar `imagen1.png`.

## 11. Validación final

Antes de cerrar la maquetación:

- Verificar que `titulo.js`, `global.js`, router, vistas y actividad correspondan al mismo componente.
- Confirmar que el número de temas del menú coincida con las rutas y archivos `Tema#.vue`.
- Confirmar que todos los `hash` del menú existan como anclajes en las vistas.
- Confirmar que glosario, referencias, introducción, síntesis y actividad ya no conserven textos genéricos.
- Ejecutar el formateador del proyecto si los archivos modificados lo requieren.

## Registro de aplicación por componente

Esta sección se actualiza cada vez que la guía se aplique a un proyecto concreto.

Formato sugerido:

```txt
Componente aplicado: CFXX
Documento principal usado: fuentes/CF_XX_*.docx
Documento de actividad usado: fuentes/Actividad_didactica_CFXX.docx
Estado: pendiente / en progreso / completado
Observaciones: ...
```

## Aplicación actual

```txt
Componente aplicado: CF01
Documento principal usado: fuentes/13530530_CF01_DI.docx
Documento de actividad usado: fuentes/13530530_CF01_AD.docx
Diseño usado: fuentes/13530530_CF01_DW.pdf; el archivo .xd se excluyó temporalmente por decisión del equipo
Estado: en progreso
Observaciones: se creó la primera maquetación textual con ocho temas, diecisiete anclajes, tablas, glosario, referencias, introducción, síntesis y actividad didáctica. La actividad contiene 20 preguntas con una respuesta correcta cada una y utiliza de forma secuencial imagen1.png a imagen10.png. Se inició la validación visual con la introducción, usando la página 2 del PDF, la retícula Bootstrap de 12 columnas y recursos extraídos en src/assets/curso/temas/intro/. Queda pendiente aplicar la metodología de correspondencia de componentes al resto de las vistas.
```

## Registro de maquetación del Tema 1

### Ficha de referencia

```txt
Vista: src/views/Tema1.vue
Tema: 1. Comunicación pública y ciudadana
Página de referencia: página 3 de fuentes/13530530_CF01_DW.pdf
Alcance de la referencia: únicamente el contenido interno del tema; se excluyen el encabezado, el menú, la navegación, el fondo general y el contenedor exterior mostrados en el PDF
Fuente del contenido textual: texto previamente incorporado en src/views/Tema1.vue
Recursos visuales: src/assets/curso/temas/t1/
Estado: en progreso
```

### Distribución visual identificada

La página de referencia se dividió en los siguientes bloques:

1. Apertura del tema mediante una retícula de dos columnas con imagen y texto introductorio.
2. Dos tarjetas que representan la generación y divulgación de información y el acceso y comprensión de la información.
3. Figura 1, denominada `Puente de la comunicación`, con versiones diferenciadas para escritorio y móvil.
4. Apartado 1.1 con banner, destacado introductorio, contenido alternado, tabla comparativa y tarjetas de modalidades.
5. Apartado 1.2 con bloque de imagen y texto, acordeón e imagen lateral.
6. Apartado 1.3 con banner, texto destacado, tabla y carrusel final.

La implementación se realizará por etapas para permitir la revisión visual y los ajustes de cada bloque antes de continuar con el siguiente apartado.

### Recursos previstos

| Recurso | Uso identificado |
| ------- | ---------------- |
| `img1.png` | Imagen principal de la apertura del tema |
| `img2.svg` | Icono del texto introductorio |
| `img3.svg` | Icono de generación y divulgación de información |
| `img4.svg` | Icono de acceso y comprensión de la información |
| `img5.svg` | Figura 1 en formato horizontal para escritorio y tableta |
| `img5_1.svg` | Figura 1 en formato vertical para dispositivos móviles |
| `img6.png` | Banner del apartado 1.1 |
| `img7.svg` | Icono del destacado introductorio del apartado 1.1 |
| `img8.png`, `img9.png` | Imágenes del contenido sobre comunicación pública y ciudadana |
| `img10.svg`, `img11.svg`, `img12.svg` | Iconos de las modalidades de comunicación pública |
| `img13.png`, `img14.png` | Imágenes del apartado 1.2 |
| `img15.png` | Banner del apartado 1.3 |
| `img16.svg` | Ilustración del destacado del apartado 1.3 |
| `img17.png`, `img18.png` | Imágenes del carrusel final sobre tecnicismos y barreras lingüísticas |

### Primera implementación completada

La primera etapa comprende desde el título principal hasta antes del separador del apartado 1.1.

Se implementaron los siguientes elementos:

- Retícula Bootstrap `5/7` para la apertura, con `img1.png` en la primera columna y el texto introductorio acompañado por `img2.svg` en la segunda.
- Dos tarjetas responsive en columnas `6/6`, construidas con `img3.svg` e `img4.svg`.
- Figura 1 mediante el elemento semántico `figure`, precedido por el componente institucional `titulo-sexto` y con texto alternativo descriptivo.
- Fila responsive con `img5.svg` visible desde el breakpoint `lg` e `img5_1.svg` visible por debajo de `lg`.
- Apilamiento de columnas y reorganización de las tarjetas en dispositivos móviles.
- Estilos específicos bajo el comentario `// Tema 1` en `src/styles/_custom.sass`.
- Eliminación del bloque `<style>` vacío de `Tema1.vue`, de acuerdo con la regla de centralización de estilos.

Clases personalizadas incorporadas:

```txt
.tema1-apertura
.tema1-apertura__imagen
.tema1-apertura__contenido
.tema1-apertura__icono
.tema1-puente-fondo
```

### Criterios de accesibilidad y adaptación

- Las imágenes informativas poseen atributos `alt` descriptivos.
- El icono decorativo de la apertura usa un texto alternativo vacío.
- La figura conserva un título visible mediante `titulo-sexto`.
- La versión vertical de la figura evita reducir excesivamente el contenido en pantallas pequeñas.
- La estructura principal utiliza la retícula Bootstrap y no depende de posicionamiento absoluto; este se limita al icono decorativo de las tarjetas en escritorio.

### Validación de la primera etapa

Se ejecutó:

```bash
npm run build
```

Resultado: compilación completada correctamente, sin errores de Vue, Pug o Sass. Vite conserva una advertencia informativa por el tamaño de algunos recursos del proyecto.

### Trabajo pendiente

- Realizar la validación visual de la primera etapa y ajustar, si es necesario, alturas, espaciados, colores y proporciones.
- Maquetar el apartado 1.1: banner, definición, características, contenido sobre comunicación pública y ciudadana, tabla comparativa y modalidades.
- Maquetar el apartado 1.2 mediante el bloque destacado y el componente de acordeón.
- Maquetar el apartado 1.3 mediante el banner, destacado, tabla y carrusel final.
- Ejecutar la validación responsive y la compilación después de cada etapa.

### Registro de revisiones de la primera etapa

#### Revisión 1: tarjetas del puente

```txt
Bloque revisado: tarjetas de generación y divulgación de información y de acceso y comprensión de la información
Estado del contenido: aprobado, sin cambios
Estado del color de fondo: aprobado, se conserva
Implementación inicial: estructura Flexbox personalizada con las clases .tema1-puente, .tema1-puente__icono y .tema1-puente__contenido
Componente seleccionado: tarjeta-avatar-b
Motivo: el componente institucional ya define la distribución lateral del avatar, la superposición entre el icono y la tarjeta y sus proporciones básicas
```

Cambios realizados:

- Se reemplazó la estructura personalizada por `.tarjeta-avatar-b`.
- Cada icono se ubicó dentro de `.tarjeta-avatar-b__img`.
- El contenido se ubicó dentro del componente institucional `.tarjeta`.
- Se conservó el color de fondo `#F1EFFF` mediante la clase específica `.tema1-puente-fondo`.
- Se eliminaron las reglas personalizadas de distribución, posición absoluta y adaptación móvil que duplicaban el comportamiento de `tarjeta-avatar-b`.
- Se mantuvieron sin modificaciones los textos, las imágenes y los demás bloques de la primera etapa.

Criterio aprendido:

> Cuando una composición presenta una imagen o icono lateral que se superpone parcialmente con una tarjeta de contenido, se debe revisar primero `tarjeta-avatar-b`. El CSS personalizado debe limitarse a aspectos propios del diseño, como el color de fondo o un ajuste tipográfico puntual, y no debe duplicar la estructura que ya ofrece el componente institucional.

#### Revisión 2: estructura aprobada para `tarjeta-avatar-b`

Se agregó manualmente una tarjeta de referencia en `Tema1.vue` y se validó como patrón para ajustar las dos tarjetas del puente. La referencia permitió identificar que no basta con usar los nombres principales del componente: también se debe conservar su jerarquía interna y aplicar el espaciado al contenedor de contenido.

Estructura aprobada:

```pug
.col-lg-6
  .tarjeta-avatar-b.mb-4
    .tarjeta-avatar-b__img
      img(
        src="ruta-de-la-imagen"
        alt="Descripción informativa de la imagen"
      )
    .tarjeta.tarjeta--azul.clase-de-color.h-100
      .p-4
        h5 Título de la tarjeta
        p.mb-0 Contenido de la tarjeta.
```

Reglas de aplicación:

- `.tarjeta-avatar-b` es el contenedor principal del componente.
- `.tarjeta-avatar-b__img` contiene exclusivamente la imagen o el icono lateral.
- `.tarjeta` debe ser hija directa de `.tarjeta-avatar-b` para que funcionen el ancho, el margen negativo y el relleno lateral definidos por el componente.
- Se conserva una variante institucional de tarjeta, en este caso `.tarjeta--azul`, incluso cuando una clase específica modifica el color para ajustarlo al diseño.
- El espaciado interno se aplica mediante un contenedor `.p-4`; no se agrega directamente sobre `.tarjeta`.
- `.h-100` se aplica a `.tarjeta` para mantener una altura consistente cuando las tarjetas comparten una fila.
- El título utiliza `h5`, de acuerdo con la tarjeta de referencia aprobada.
- El párrafo final utiliza `.mb-0` para evitar espacio sobrante en la parte inferior.
- La separación inferior del componente se controla con `.mb-4` en `.tarjeta-avatar-b`, de acuerdo con la norma general de separación vertical.
- El texto alternativo debe describir la función informativa de la imagen; no se deben conservar textos genéricos como `AvatarTop`.
- Las columnas se definen en la fila según la cantidad de tarjetas. Para dos tarjetas se utiliza `.col-lg-6` en cada una.

Cambios aplicados a las tarjetas del puente:

- Se retiró la tarjeta temporal duplicada y se conservó una sola fila con las dos tarjetas definitivas.
- Ambas tarjetas adoptaron exactamente la misma jerarquía Pug.
- Se añadió `.tarjeta--azul` como variante institucional.
- El relleno `.p-4` pasó a un contenedor interno.
- Los encabezados cambiaron de `h4` a `h5`.
- Se retiró el ajuste tipográfico personalizado del título porque la jerarquía institucional ya define su presentación.

Criterio general para próximos temas:

> Siempre que el diseño corresponda a una tarjeta con avatar lateral, se partirá de esta estructura aprobada. Primero se implementará el componente institucional completo; después se agregarán únicamente las clases de color o ajustes visuales que el diseño requiera.

#### Revisión 3: normalización de márgenes y párrafos finales

Se definió una norma transversal para todos los bloques de la maquetación:

```txt
Separación vertical estándar: .mb-4 o .mt-4
Último párrafo dentro de un bloque: p.mb-0
```

Aplicación en la primera etapa del Tema 1:

- Las dos instancias de `tarjeta-avatar-b` cambiaron de `.mb-5` a `.mb-4`.
- La fila dejó de tener un margen inferior adicional para evitar duplicar la separación aportada por las tarjetas.
- El párrafo que introduce la Figura 1 recibió `.mb-4`.
- La Figura 1 cambió de `.mb-5` a `.mb-4`.
- El título de la figura se gestiona mediante el patrón institucional `titulo-sexto`.
- El icono del bloque de apertura cambió de `.mb-3` a `.mb-4`.
- Los párrafos finales de la apertura y de ambas tarjetas ya utilizan `p.mb-0` y se conservaron de esa manera.

Criterio aprendido:

> El margen entre bloques debe definirse una sola vez y con una medida consistente. Los párrafos finales no deben sumar su margen predeterminado al relleno del contenedor, por lo que siempre deben finalizar con `.mb-0`.

#### Revisión 4: título de la Figura 1

Se tomó como referencia aprobada la estructura agregada manualmente antes de la Figura 1:

```pug
.titulo-sexto.color-acento-contenido.mb-3.mt-4
  h5 Figura 1.
  span Puente de la comunicación
```

Cambios realizados:

- Se conservó el nuevo título construido con `titulo-sexto`.
- Se eliminó el `figcaption` que repetía `Figura 1. Puente de la comunicación`.
- Se retiró de `_custom.sass` el borde personalizado usado para simular el título.
- En esta revisión no se modificó la imagen; su estructura responsive y el texto alternativo quedaron pendientes para la siguiente validación.

Criterio aprendido:

> Los títulos de figuras y tablas siempre se maquetarán con `titulo-sexto`: el tipo y número se escriben en `h5`, y el nombre del recurso en `span`. El componente debe reutilizarse antes de crear una solución tipográfica personalizada.

#### Revisión 5: imagen de la Figura 1

Se aprobó la estructura agregada manualmente para presentar la Figura 1 mediante recursos diferenciados por tamaño de pantalla.

Cambios de consolidación:

- Se conservó la fila responsive con dos columnas de ancho completo.
- La versión horizontal `img5.svg` se muestra únicamente desde el breakpoint `lg` mediante `.d-none.d-lg-block`.
- La versión vertical `img5_1.svg` se muestra por debajo de `lg` mediante `.d-block.d-lg-none`.
- Se conservó el texto alternativo detallado y equivalente en las dos imágenes.
- El margen de la fila se normalizó inicialmente de `.mb-5` a `.mb-4` y posteriormente pasó a `.mb-0` porque el bloque siguiente es `Separador`.
- Se corrigió la indentación Pug de las dos imágenes.
- Se eliminó la implementación anterior basada en `picture` para evitar que la figura apareciera duplicada.
- Se eliminó `.tema1-figura` de `_custom.sass` porque la estructura aprobada funciona con Bootstrap y no necesita CSS específico.

Criterio aprendido:

> Las figuras numeradas con versiones horizontal y vertical se implementan mediante dos columnas con utilidades responsive de Bootstrap. Ambas versiones deben compartir un texto alternativo completo y la estructura no debe duplicarse con otros mecanismos responsive.

#### Revisión 6: margen anterior a `Separador`

Se estableció la siguiente excepción general:

```txt
Si el bloque siguiente es Separador, el bloque anterior debe terminar con .mb-0.
```

Aplicación en el Tema 1:

- La fila responsive de la Figura 1 cambió de `.mb-4` a `.mb-0`.
- No se modificaron la imagen, las columnas responsive ni los textos alternativos.

Criterio aprendido:

> No se debe añadir margen inferior a un bloque cuando después aparece `Separador`, ya que el componente proporciona su propio espacio vertical. Usar `.mb-0` evita acumular separaciones y mantiene uniforme el inicio del siguiente apartado.

#### Revisión 7: contenido y rutas de imágenes de `SlyderB`

El contenido provisional que se encontraba en listas lineales se trasladó a las dos diapositivas de `SlyderB`.

Correspondencia aplicada:

| Diapositiva | Título | Imagen |
| ----------- | ------ | ------ |
| 1 | Comunicación pública | `@/assets/curso/temas/t1/img8.png` |
| 2 | Comunicación ciudadana | `@/assets/curso/temas/t1/img9.png` |

Cambios realizados:

- Se reemplazaron los textos provisionales de `datosSlyder` por el contenido oficial que estaba entre las líneas 76 y 91 de `Tema1.vue`.
- Se eliminaron las cuatro listas originales para evitar repetir el contenido después del carrusel.
- El párrafo que introduce el carrusel recibió `.mb-4`.
- Las imágenes quedaron como rutas de texto, sin `require()` ni `require_src()` dentro de `data()`.

Patrón aprobado para datos de `SlyderB`:

```js
datosSlyder: [
  {
    titulo: 'Título de la diapositiva',
    texto: 'Contenido de la diapositiva.',
    imagen: '@/assets/curso/temas/tema/img.png',
  },
]
```

Criterio aprendido:

> `SlyderB` recibe la ruta de la imagen como una cadena de texto y la resuelve internamente mediante `require_src`. Por esta razón, no se debe ejecutar `require()` ni `require_src()` dentro de `data()`. Cuando el carrusel reemplaza listas provisionales, estas deben retirarse para evitar contenido duplicado.

#### Revisión 8: maquetación completa del apartado 1.1

Se continuó la maquetación de `1.1 Comunicación pública: conceptos, características y tipos` con la página 3 del PDF como referencia. El `SlyderB` aprobado se conservó sin cambios.

Bloques implementados:

1. Banner de apertura con `img6.png` en una fila de ancho completo.
2. Definición de comunicación pública mediante una fila con `img7.svg` y texto.
3. Encabezado visual para las características fundamentales.
4. `SlyderB` con comunicación pública y comunicación ciudadana, sin modificaciones.
5. Destacado posterior al carrusel mediante `cajon.color-primario`.
6. Título institucional de la Tabla 1 mediante `titulo-sexto`.
7. Tabla comparativa mediante `tabla-a.color-acento-contenido`.
8. Encabezado visual para las modalidades de comunicación pública.
9. Tres modalidades mediante el componente institucional `tarjeta-avatar` y los recursos `img10.svg`, `img11.svg` e `img12.svg`.

Decisiones de componentes:

- Se utilizó `cajon` para el texto que destaca la diferencia entre publicar y comunicar efectivamente.
- Se utilizó `titulo-sexto` para la Tabla 1, conforme a la norma general para figuras y tablas.
- Se utilizó `tarjeta-avatar` porque las ilustraciones de las modalidades sobresalen en la parte superior de cada tarjeta.
- Las tarjetas usan `.color-secundario`, que corresponde al fondo rosado de la referencia.
- Los últimos párrafos de cajones y tarjetas usan `.mb-0`.
- La fila de modalidades usa `.mb-0` porque está seguida por `Separador`.

CSS específico incorporado:

```txt
.tema1-definicion__icono
.titulo-pastilla
.tema1-tabla
```

El CSS personalizado se limita al ancho del icono introductorio, la franja visual de los subtítulos y el peso de la primera columna de la tabla. La estructura principal se resolvió con Bootstrap y componentes institucionales.

#### Revisión 9: color de fondo del cajón primario

Se definió en `src/styles/_custom.sass` el color aprobado para los cajones primarios:

```sass
.cajon.color-primario
  background-color: #F6F3FF
```

La sobrescritura modifica únicamente el fondo del componente. El indicador decorativo `:before` continúa utilizando el color primario definido por la plantilla.

Criterio aprendido:

> Cuando el diseño conserva la estructura de un componente institucional, pero requiere una variación cromática específica, se debe sobrescribir únicamente la propiedad necesaria en `_custom.sass`. No se debe reconstruir el componente ni duplicar sus reglas estructurales.

#### Revisión 10: títulos internos mediante `titulo-pastilla`

Se tomó como referencia aprobada la estructura agregada manualmente para el título `Características fundamentales de la comunicación pública`:

```pug
.titulo-pastilla.mt-5(data-aos="fade-down")
  img(src="@/assets/curso/icon.svg" alt="")
  span Título del bloque
```

Cambios realizados:

- Se eliminó el encabezado personalizado `.tema1-encabezado` que duplicaba la función del patrón aprobado.
- Se conservó una sola instancia de `titulo-pastilla` para `Características fundamentales de la comunicación pública`.
- El título `Modalidades de la comunicación pública` se ajustó con la misma estructura.
- Se eliminó de `_custom.sass` todo el CSS de `.tema1-encabezado`.
- Se conservó el recurso decorativo compartido `src/assets/curso/icon.svg` con texto alternativo vacío.
- Se conservó la animación institucional `data-aos="fade-down"`.

Regla de uso:

> Los títulos internos equivalentes a las franjas verdes de la referencia se maquetarán con `.titulo-pastilla.mt-5`, una imagen decorativa `icon.svg` y el texto dentro de `span`. No se crearán encabezados alternativos con iconos de fuente o CSS duplicado.

#### Revisión 11: cajón primario centrado a diez columnas

El componente `.cajon.color-primario` fue aprobado en contenido, color y presentación. Se ajustó únicamente su ancho para ocupar diez columnas y permanecer centrado.

Estructura aprobada:

```pug
.row.justify-content-center.mb-4
  .col-lg-10
    .cajon.color-primario.p-4
      p.mb-0 Contenido del cajón.
```

Decisiones:

- La retícula se controla con `.row.justify-content-center` y `.col-lg-10`.
- En pantallas inferiores a `lg`, la columna vuelve automáticamente al ancho disponible.
- El margen `.mb-4` se asigna a la fila y no al cajón para evitar separaciones duplicadas.
- El relleno interno permanece en `.p-4`.
- El último párrafo conserva `.mb-0`.

Criterio aprendido:

> Cuando un componente debe ocupar un ancho menor y estar centrado, su dimensión se controla mediante la retícula Bootstrap. No se deben establecer anchos o márgenes laterales personalizados en `_custom.sass`.

#### Revisión 12: estructura y colores de la Tabla 1

Antes del ajuste se revisó `src/styles/componentes/_tablas.sass`. El componente institucional `tabla-a` establece:

- desplazamiento horizontal mediante `overflow-x: auto`;
- ancho mínimo de 700 píxeles para la tabla;
- borde, color y fondo institucional sobre `thead`;
- alineación, tamaño y peso de los encabezados `th`;
- agrupación de las filas mediante `tbody`.

La revisión mostró que la Tabla 1 no tenía `thead` ni `tbody`, por lo que el encabezado institucional no podía aplicarse correctamente.

Cambios realizados:

- La primera fila se agrupó semánticamente dentro de `thead`.
- Las siete filas de contenido se agruparon dentro de `tbody`.
- Se conservó `.tabla-a.color-acento-contenido` para mantener el comportamiento institucional.
- El fondo de `thead` se definió como `#E5E4FE`.
- Las filas impares de `tbody` se definieron con fondo `#F6F6F6`.
- Las filas pares de `tbody` se definieron con fondo blanco.
- Se conservó en negrita la primera celda de cada fila mediante `.tema1-tabla td:first-child`.

CSS específico:

```sass
.tema1-tabla
  thead
    background-color: #E5E4FE

  tbody tr
    &:nth-child(odd)
      background-color: #F6F6F6

    &:nth-child(even)
      background-color: $white
```

Criterio aprendido:

> Antes de personalizar una tabla se debe revisar `_tablas.sass` y construir correctamente `thead` y `tbody`. Los estilos personalizados deben limitarse a los colores solicitados, conservando el scroll, los anchos, los bordes y la tipografía definidos por `tabla-a`.

#### Revisión 13: estructura aprobada para `tarjeta-avatar`

Se tomó como patrón la tarjeta agregada manualmente en las líneas 143 a 148 de `Tema1.vue`.

Estructura aprobada:

```pug
.tarjeta-avatar
  img(src="ruta-del-avatar.svg" alt="Descripción informativa")
  .tarjeta.color-primario.w-100.h-100.mt-3
    .p-4
      h5.text-center Título
      p.mb-0 Contenido de la tarjeta.
```

Cambios realizados:

- Se eliminó la tarjeta temporal utilizada como muestra.
- Las tres modalidades adoptaron la misma jerarquía Pug.
- La clase `.p-4` pasó a un contenedor interno, en lugar de aplicarse directamente sobre `.tarjeta`.
- Se añadió `.w-100` para garantizar que la tarjeta ocupe todo el ancho disponible.
- Las tarjetas utilizan `.color-primario`, conforme al patrón aprobado.
- Los títulos permanecen centrados mediante `.text-center`.
- Los textos descriptivos conservan alineación de lectura normal y terminan con `.mb-0`.
- Se conservaron los textos alternativos descriptivos de los tres iconos.

Motivo del ajuste:

El componente institucional `.tarjeta-avatar` aplica internamente un espacio superior a `.tarjeta` para reservar el área ocupada por el avatar. Al colocar el relleno general directamente sobre `.tarjeta`, se mezclaban el espaciado estructural del componente y el espaciado del contenido. El contenedor interno `.p-4` mantiene ambas responsabilidades separadas.

Criterio aprendido:

> En `tarjeta-avatar`, la imagen debe ser hija directa del componente y `.tarjeta` debe contener un bloque interno `.p-4`. No se debe aplicar el relleno de contenido directamente sobre `.tarjeta`, porque ese elemento ya recibe el espacio superior institucional destinado al avatar.

#### Revisión 14: altura y separación interna de `tarjeta-avatar`

Después de validar visualmente las tres tarjetas de modalidades, se agregaron las clases `.h-100.mt-3` al elemento `.tarjeta`:

```pug
.tarjeta-avatar
  img(src="ruta-del-avatar.svg" alt="Descripción informativa")
  .tarjeta.color-primario.w-100.h-100.mt-3
    .p-4
      h5.text-center Título
      p.mb-0 Contenido de la tarjeta.
```

Función de las clases incorporadas:

- `.h-100` permite que el fondo de las tarjetas ocupe toda la altura disponible y ayuda a mantener una presentación uniforme cuando los textos tienen extensiones diferentes.
- `.mt-3` desplaza ligeramente el cuerpo de la tarjeta hacia abajo para mejorar la separación visual entre el avatar y el contenido.
- `.w-100` continúa controlando el ancho completo de la tarjeta.
- `.p-4` permanece en el contenedor interno y conserva separado el relleno del contenido respecto al espacio estructural del avatar.

La clase `.mt-3` se considera un ajuste interno y controlado del componente, no una separación general entre bloques. Por esta razón, no contradice la regla de utilizar `.mb-4` o `.mt-4` para el ritmo vertical principal de la vista.

Criterio aprendido:

> Cuando varias instancias de `tarjeta-avatar` comparten una fila, se debe comprobar tanto la posición del contenido frente al avatar como la igualdad visual de las alturas. En este patrón se utilizarán `.w-100.h-100.mt-3` sobre `.tarjeta` y `.p-4` sobre su contenedor interno.

#### Revisión 15: maquetación inicial del apartado 1.2

La sección `1.2 Comunicación ciudadana: concepto, objetivo, alcance y enfoque` se organizó mediante dos componentes indicados para el diseño.

Primer bloque: `bloque-texto-g`

- Se reutilizó la estructura aplicada previamente en `Introduccion.vue`.
- La imagen `img13.png` se ubicó como fondo de `.bloque-texto-g__img` mediante `require_src` dentro de la plantilla.
- El texto de definición se ubicó en `.bloque-texto-g__texto.p-4` y termina con `p.mb-0`.
- Se añadió `role="img"` y una descripción mediante `aria-label` al contenedor visual.
- El componente usa `.color-secundario` y finaliza con `.mb-4`.

Estructura:

```pug
.bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4
  .bloque-texto-g__img(
    role="img"
    aria-label="Descripción de la imagen"
    :style="{'background-image':`url(${require_src('ruta-de-la-imagen')})`}"
  )
  .bloque-texto-g__texto.p-4
    p.mb-0 Contenido del bloque.
```

Segundo bloque: `SlyderA(tipo="b")`

- Las listas provisionales de objetivo, alcance y enfoque se sustituyeron por tres diapositivas.
- Cada diapositiva utiliza una fila `8/4` con texto e `img14.png`.
- En dispositivos menores a `lg`, las columnas se apilan y el texto conserva `.mb-4` antes de la imagen.
- Los párrafos finales usan `.mb-0`.
- Se creó `.tema1-slyder-ciudadano` únicamente para el fondo, borde redondeado y tratamiento visual de la imagen.
- El slider queda inmediatamente antes de `Separador`; no se añade margen inferior externo.

Criterio aprendido:

> Cuando una sección combina una introducción visual y varios conceptos relacionados, se puede usar `bloque-texto-g` para presentar la definición y `SlyderA(tipo="b")` para distribuir los conceptos. El contenido repetido en listas debe retirarse y cada diapositiva debe conservar una jerarquía clara de título, texto e imagen.

#### Revisión 16: corrección del segundo bloque del apartado 1.2

El contenido de objetivo, alcance y enfoque era correcto, pero el componente indicado inicialmente no correspondía al diseño esperado. Por esta razón, `SlyderA(tipo="b")` se reemplazó por el componente institucional `AcordionA(tipo="b")`.

Estructura aprobada:

```pug
.row.align-items-center.mb-0
  .col-lg-8.mb-4.mb-lg-0
    AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="Título del elemento")
        .col-12
          p.mb-0 Contenido del elemento.
  .col-lg-4
    figure
      img(src="ruta-de-la-imagen" alt="Descripción informativa")
```

Cambios realizados:

- Se conservaron sin modificaciones los textos de objetivo, alcance y enfoque.
- Cada concepto se convirtió en un elemento directo del acordeón mediante el atributo `titulo`.
- Se aplicó `tipo="b"` y la clase institucional `tarjeta tarjeta--azul`.
- La ilustración `img14.png` se ubicó una sola vez en la columna derecha del bloque.
- En pantallas menores a `lg`, la columna del acordeón utiliza `.mb-4` antes de la imagen.
- El bloque termina con `.mb-0` porque está ubicado inmediatamente antes de `Separador`.
- Se eliminó de `_custom.sass` la clase `.tema1-slyder-ciudadano`, ya que solo personalizaba el componente descartado.

Criterio aprendido:

> Cuando el diseño presenta conceptos desplegables, cada concepto debe ser un hijo directo de `AcordionA` y declarar su encabezado con `titulo`. El componente institucional controla la interacción y su apariencia; el CSS personalizado asociado a una solución anterior debe eliminarse si deja de utilizarse.

#### Revisión 17: nivel de los títulos en componentes

Se establece como regla general que los títulos internos de los siguientes componentes deben utilizar la jerarquía `h5`:

- `SlyderA` y demás sliders con títulos escritos directamente en la plantilla.
- `SlyderB` y otros sliders cuyos títulos provienen de un arreglo de datos.
- `AcordionA`.
- `tarjeta-avatar` y `tarjeta-avatar-b`.

Aplicación de la regla:

```pug
h5 Título del contenido
```

Las tarjetas avatar de `Tema1.vue` ya cumplen semánticamente esta estructura. Cuando el título se escribe directamente dentro de un slider, tarjeta o contenido desplegable, se debe usar `h5` y no `h3` ni `h4`.

Consideración sobre los componentes institucionales:

`SlyderB` y `AcordionA` generan internamente sus encabezados con una etiqueta `h3` desde la librería instalada y no exponen una propiedad para cambiarla. No se debe modificar `node_modules`, porque el cambio se perdería al reinstalar las dependencias. Por ello, `_custom.sass` normaliza esos encabezados al tamaño tipográfico institucional de `h5`:

```sass
.slyder-b h3,
.acordion__titulo h3
  font-size: $h5-font-size
```

Criterio aprendido:

> Los títulos internos de sliders, acordeones y tarjetas avatar deben seguir la jerarquía visual `h5`. Cuando controlamos el marcado, se utiliza directamente la etiqueta `h5`; si el componente institucional fija otra etiqueta internamente, se conserva su código y se normaliza su presentación desde `_custom.sass`.

#### Revisión 18: maquetación inicial del apartado 1.3

La sección `1.3 Tipos de información en la comunicación pública y ciudadana` se ajustó reutilizando los patrones ya aprobados para tablas y sliders.

Tabla 2:

- El título provisional escrito como párrafo se reemplazó por `.titulo-sexto.color-acento-contenido.mb-3.mt-4`.
- La tabla utiliza `.tabla-a.color-acento-contenido.tema1-tabla.mb-4`.
- Se organizaron correctamente las filas de encabezado dentro de `thead` y las filas de contenido dentro de `tbody`.
- Se reutilizaron los colores aprobados: encabezado `#E5E4FE` y filas alternadas `#F6F6F6` y blanco.
- No se modificó el contenido de las celdas.

Último bloque: `SlyderA(tipo="b")`

- Las listas provisionales se reemplazaron por dos diapositivas: usos de tecnicismos y barreras lingüísticas.
- Cada diapositiva utiliza una fila responsiva con distribución `8/4` para texto e imagen.
- Los títulos se escribieron directamente con `h5`, cumpliendo la regla general definida en la revisión 17.
- Los párrafos finales utilizan `.mb-0`.
- Se asociaron `img17.png` al uso de tecnicismos e `img18.png` a las barreras lingüísticas.
- En dispositivos menores a `lg`, el texto utiliza `.mb-4` antes de la imagen.
- Se añadieron textos alternativos descriptivos a ambas imágenes.

Estructura aprobada:

```pug
SlyderA(tipo="b")
  .row.align-items-center
    .col-lg-8.mb-4.mb-lg-0
      h5 Título de la diapositiva
      p.mb-0 Contenido de la diapositiva.
    .col-lg-4
      figure
        img(src="ruta-de-la-imagen" alt="Descripción informativa")
```

Criterio aprendido:

> Cuando varios conceptos forman el último bloque de una sección y deben recorrerse de manera secuencial, se utiliza `SlyderA(tipo="b")`. Cada diapositiva debe mantener el título en `h5`, terminar su texto con `.mb-0` y utilizar una distribución responsiva coherente entre texto e imagen.

#### Revisión 19: bloques iniciales del apartado 1.3

Durante la validación de la sección 1.3 se identificaron dos bloques visuales que no se habían incluido en la primera implementación.

Primer bloque: imagen de apertura

- Se incorporó `img15.png` inmediatamente después del título de la sección.
- La imagen se presenta dentro de `figure.mb-4` y ocupa el ancho disponible.
- Se añadió un texto alternativo que describe al grupo de personas y los globos de conversación.

Segundo bloque: cajón de texto con imagen

- El primer párrafo introductorio se trasladó a un `.cajon.color-primario.p-4`.
- El cajón se ubicó dentro de una columna `.col-lg-10` centrada, conforme a la regla aprobada para este componente.
- En su interior se creó una fila responsiva `3/9`: `img16.svg` a la izquierda y el texto a la derecha.
- En dispositivos menores a `md`, la imagen se ubica sobre el texto y utiliza `.mb-4`.
- El párrafo termina con `.mb-0`.
- El bloque completo utiliza `.mb-4` antes del párrafo que introduce la tabla 2.

Estructura aprobada:

```pug
.row.justify-content-center.mb-4
  .col-lg-10
    .cajon.color-primario.p-4
      .row.align-items-center
        .col-md-3.mb-4.mb-md-0
          figure
            img(src="ruta-del-icono" alt="Descripción informativa")
        .col-md-9
          p.mb-0 Contenido del cajón.
```

Criterio aprendido:

> Antes de maquetar los componentes de contenido de una sección se deben identificar también sus recursos visuales de apertura y apoyo. Un cajón con imagen conserva las diez columnas centradas del patrón general y organiza internamente la imagen y el texto mediante una fila responsiva.

#### Revisión 20: tamaño de `img2.svg` en el bloque de apertura

Se validaron las dimensiones originales de `img2.svg` y se encontró que el recurso fue diseñado con un tamaño de `80 × 80 px`. La clase `.tema1-apertura__icono` lo estaba reduciendo a `64 × 64 px`, por lo que no conservaba el tamaño previsto para el diseño.

Ajuste realizado:

```sass
.tema1-apertura__icono
  height: 80px
  width: 80px
```

No se modificaron la posición, el margen inferior ni la estructura del primer bloque.

Criterio aprendido:

> Antes de definir manualmente el ancho y el alto de un icono SVG se deben revisar su `width`, `height` y `viewBox`. Si el recurso ya fue exportado con el tamaño requerido por el diseño, se debe conservar esa dimensión salvo que la referencia visual indique expresamente otra medida.

## Tema 2: primera implementación de la hoja 4

Se realizó la maquetación inicial completa de `Tema2.vue` tomando como referencia la hoja 4 del PDF y los once recursos de `src/assets/curso/temas/t2/`.

Se implementaron el destacado inicial, la pregunta central, las tres tarjetas de enfoques, el banner y acordeón de 2.1, el `bloque-texto-g` y las cuatro tarjetas de 2.2, y los destacados, cajón y acordeón de 2.3. Se aplicaron títulos `h5`, márgenes `.mb-4`, párrafos finales `.mb-0`, cajones centrados a diez columnas y distribuciones responsivas.

Los botones de descarga quedaron maquetados sin enlace funcional porque no se encontraron los documentos correspondientes dentro de `src` o `public`; las rutas deberán incorporarse cuando estén disponibles.

Criterio aprendido:

> En la primera implementación de un tema se debe respetar la secuencia visual completa de la hoja de diseño, asociar los recursos según su orden y función, y evitar inventar rutas de descarga. Después de esta base, la revisión se realiza bloque por bloque conservando sin cambios aquello que sea aprobado.

### Revisión 1 de Tema 2: bloque de la pregunta

El bloque provisional `.tema2-pregunta` no correspondía con la distribución planteada en el PDF. Se reemplazó por una fila de diez columnas centradas:

```pug
.row.justify-content-center.align-items-center.mb-4
  .col-lg-1.mb-4.mb-lg-0
    img(src="ruta-del-icono" alt="Descripción informativa")
  .col-lg-9
    .cajon.color-primario.p-4
      p.mb-0 Texto de la pregunta.
```

Cambios realizados:

- `img2.svg` ocupa una columna independiente.
- El cajón de texto ocupa nueve columnas.
- La imagen ya no está dentro del fondo del cajón.
- El texto utiliza el componente general `.cajon.color-primario`.
- En dispositivos menores a `lg`, la imagen se ubica sobre el cajón y utiliza `.mb-4`.
- Se eliminó `.tema2-pregunta` de `_custom.sass` porque dejó de utilizarse.

Criterio aprendido:

> Cuando el diseño muestra un icono por fuera de un cajón, ambos deben ser columnas hermanas. No se debe crear un contenedor de fondo que envuelva la imagen y el texto si la referencia visual los presenta como elementos independientes.

### Revisión 2 de Tema 2: enfoques mediante `tarjeta--container`

Los tres enfoques conservaban correctamente sus colores, imágenes y contenidos, pero estaban construidos con una estructura personalizada. Se sustituyeron por el componente institucional `.tarjeta--container` tomando como referencia la muestra agregada en `Tema2.vue`.

Estructura aprobada:

```pug
.tarjeta--container.row.mb-0
  .col-md.tarjeta.color-primario.p-5
    .row.justify-content-center.mb-4
      .col-6
        figure
          img(src="ruta-del-icono" alt="Descripción informativa")
    h5.text-center.mb-4 Título
    p.mb-0 Contenido de la tarjeta.
```

Cambios realizados:

- Se eliminó la muestra temporal y se reutilizó su estructura para los tres contenidos reales.
- Se conservaron `img3.svg`, `img4.svg` e `img5.svg`.
- Se mantuvo el orden cromático aprobado: primario, acento contenido y secundario.
- Los títulos utilizan `h5.text-center.mb-4`.
- Los párrafos finales utilizan `.mb-0`.
- El componente usa `.mb-0` porque está ubicado inmediatamente antes de `Separador`.
- Se eliminó `.tema2-enfoque` de `_custom.sass`, ya que el componente institucional controla la estructura.

Criterio aprendido:

> Cuando varias tarjetas forman un bloque continuo, sin separación entre columnas y con fondos diferenciados, se debe utilizar `.tarjeta--container.row`. Cada tarjeta es una columna `.tarjeta` y mantiene internamente la imagen, el título `h5` y el párrafo final con `.mb-0`.

### Revisión 3 de Tema 2: restauración de los fondos de las tarjetas

La migración a `.tarjeta--container` debía conservar los fondos aprobados del bloque anterior. Las clases institucionales de color aplicaban tonalidades diferentes, por lo que se sustituyeron únicamente por modificadores específicos sobre cada `.tarjeta`:

```sass
.tema2-enfoque
  &--claro
    background-color: #F1EFFF
  &--comprensible
    background-color: #D9FFD0
  &--inclusivo
    background-color: #FEDEDE
```

La estructura continúa siendo el componente institucional `.tarjeta--container`; solo se personaliza el color de fondo de sus tres tarjetas.

Criterio aprendido:

> Adoptar un componente institucional no implica reemplazar una decisión cromática ya aprobada. Se debe conservar la estructura del componente y limitar la personalización CSS a los colores específicos requeridos por el diseño.

### Revisión 4 de Tema 2: características con `LineaTiempoD`

El contenido del acordeón de la sección 2.1 era correcto, pero el componente no correspondía con la referencia. Se reemplazó por el componente institucional `LineaTiempoD.color-secundario`, tomando como patrón la muestra agregada alrededor de la fila 76 de `Tema2.vue`.

Estructura aprobada:

```pug
.row.align-items-center.mb-4
  .col-lg-5.mb-4.mb-lg-0
    img(src="ruta-de-la-imagen" alt="Descripción informativa")
  .col-lg-7
    LineaTiempoD.color-secundario
      p.mb-0(numero="1" titulo="Título") Contenido del elemento.
```

Cambios realizados:

- Se conservaron los seis títulos y sus textos.
- `LineaTiempoD` permanece en la columna derecha de la distribución `5/7` y `img7.png` en la izquierda.
- Cada elemento declara `numero` y `titulo` como atributos del hijo directo.
- `.mb-0` se escribió como clase de cada párrafo, no como un atributo.
- Se eliminó la muestra duplicada que estaba después del párrafo final.
- El acordeón de la sección 2.3 no fue modificado.

Criterio aprendido:

> En `LineaTiempoD`, cada elemento debe ser hijo directo del componente y declarar los atributos `numero` y `titulo`. Las clases de espaciado se escriben antes de los paréntesis del elemento Pug, por ejemplo `p.mb-0(numero="1" titulo="Título")`.

### Revisión 5 de Tema 2: características con `tarjeta-numerada`

Las cuatro características de la sección 2.2 conservaban información y colores correctos, pero utilizaban una estructura personalizada. Se reemplazaron por el componente institucional `.tarjeta-numerada`, tomando como referencia la muestra agregada entre las filas 82 y 110.

Estructura aprobada:

```pug
.tarjeta-numerada.tema2-caracteristica--1.p-5.h-100
  .tarjeta-numerada__numero
    .h2 1
  h5.text-center Título
  p.mb-0.text-center Contenido de la tarjeta.
```

Cambios realizados:

- Se eliminaron las cuatro tarjetas de muestra con contenido de otro tema.
- Se conservaron Orden lógico, Claridad, Coherencia y Pertinencia.
- Los títulos utilizan `h5` y los párrafos finales `.mb-0`.
- Se conservaron los colores aprobados para el borde y el círculo numerado.
- El componente institucional controla ahora el borde, radio, posición y tamaño del número.
- El CSS personalizado quedó limitado a asignar los cuatro colores.

Criterio aprendido:

> En `tarjeta-numerada`, el número debe ubicarse dentro de `.tarjeta-numerada__numero` y representarse con `.h2`. El componente institucional controla la geometría; las personalizaciones deben limitarse a decisiones aprobadas como el color.

### Revisión 6 de Tema 2: características inclusivas con `LineaTiempoD`

El acordeón de la sección 2.3 conservaba información correcta, pero debía utilizar el mismo componente institucional aprobado para las características de la sección 2.1.

Cambios realizados:

- `AcordionA` se reemplazó por `LineaTiempoD.color-acento-botones`.
- Se conservaron Respeto, Reconocimiento, Precisión, No discriminación, Claridad y Pertinencia.
- Los seis elementos se numeraron consecutivamente del 1 al 6.
- Cada contenido utiliza `p.mb-0(numero="…" titulo="…")`.
- Se mantuvieron `img10.png` y la distribución responsiva `5/7`.
- Se eliminaron `.tema2-acordeon` y `.acordion__activo.tema2-acordeon` de `_custom.sass`, porque dejaron de utilizarse en Tema 2.

Criterio aprendido:

> Cuando dos bloques de un mismo tema presentan colecciones equivalentes de características, se debe mantener consistencia en el componente utilizado. En este caso, ambos bloques emplean `LineaTiempoD` con la misma estructura de numeración, título y párrafo final.

### Revisión 1 de Tema 5: contextos con `tarjeta--container`

El bloque de contexto ciudadano y contexto comunicativo conservaba información, imágenes y colores correctos. Se ajustó únicamente su estructura interna con base en la muestra institucional agregada antes del bloque.

Cambios realizados:

- Se mantuvo `.tarjeta--container.row.mb-4` como contenedor de las dos tarjetas.
- Cada imagen quedó dentro de `.row.justify-content-center.mb-4` y `.col-6`.
- Se conservaron los modificadores `.tema5-contexto--ciudadano` y `.tema5-contexto--comunicativo`, responsables de los fondos aprobados `#F6F3FF` y `#FEDEDE`.
- Los títulos permanecen en `h5.text-center` y los párrafos finales en `p.mb-0`.
- Las imágenes mantienen `alt=""` por no corresponder a figuras numeradas.
- Se eliminó la muestra duplicada después de trasladar su estructura al bloque definitivo.

Criterio aprendido:

> Para este tipo de `tarjeta--container`, la estructura institucional centra la imagen mediante una fila y una columna de seis unidades. Los colores aprobados pueden conservarse mediante clases modificadoras propias sin alterar la estructura del componente.

### Revisión de fondo `.BG03` en Tema 5

El `SlyderA` de condiciones sociales y culturales tenía el contenido aprobado y la clase de fondo asignada, pero le faltaba la estructura interior del patrón utilizado en Tema 1.

Cambios realizados:

- Se tomó como referencia la estructura `.BG01.px-5.p-5 > .bgwhite.p-4` utilizada en Tema 1.
- Se aplicó la misma estructura al bloque de Tema 5 mediante `.BG03.px-5.p-5 > .bgwhite.p-4`.
- El `SlyderA` se conservó sin cambios de contenido, imágenes o diseño interno.
- `.BG03` mantiene el degradado violeta definido en `_custom.sass`.

Criterio aprendido:

> Para aplicar los fondos amplios alrededor de un componente interactivo, se usa la clase `BG` correspondiente con relleno `.px-5.p-5` y un contenedor interior `.bgwhite.p-4`. El componente se anida dentro de este último.

## Primera maquetación de Tema 6

Tema 6 se construyó tomando como referencia la página 8 del PDF y reutilizando los componentes institucionales ya aprobados en los temas anteriores.

Estructura aplicada:

- El bloque de apertura reutiliza la estructura de Tema 1 con `.tema1-apertura`, imagen a cinco columnas y texto con icono a siete columnas.
- La sección 6.1 inicia con `img3.png`, continúa con el párrafo introductorio y presenta las siete características mediante `LineaTiempoD.color-acento-botones` junto a `img4.png`.
- Los subtítulos internos usan `.titulo-pastilla`.
- Los textos destacados emplean cajones centrados a diez columnas.
- La Tabla 3 utiliza el componente institucional `.tabla-a` con `thead` y `tbody`.
- Los tres momentos del acceso a la información usan `tarjeta-avatar`, títulos `h5` y párrafos finales `.mb-0`.
- El bloque de estrategias combina `img8.png`, texto, lista y un cajón institucional.
- El cierre normativo usa `.bloque-texto-g` con `img9.png` cargada mediante `require_src`.
- Todas las imágenes no numeradas tienen `alt=""`.

Criterio aprendido:

> Cuando una nueva página repite soluciones ya aprobadas, se deben reutilizar sus estructuras institucionales y limitar el CSS nuevo a valores particulares que el diseño requiera, como el fondo de las tarjetas de acceso.

### Revisión 1 de Tema 6: Tabla 3

La Tabla 3 conservaba el contenido correcto, pero no utilizaba todas las clases del diseño aprobado en Tema 1.

Cambios realizados:

- El título se cambió a `.titulo-sexto.color-acento-contenido.mb-3.mt-4`.
- La tabla ahora utiliza `.tabla-a.color-acento-contenido.tema1-tabla.mb-4`.
- Se conservaron el `thead`, el `tbody` y todo el contenido de las ocho filas.
- La clase `.tema1-tabla` aplica el encabezado `#E5E4FE`, alterna filas `#F6F6F6` y blancas, y destaca la primera columna en negrita.

Criterio aprendido:

> Todas las tablas que compartan el diseño aprobado de Tema 1 deben usar el título institucional `.titulo-sexto` y añadir `.tema1-tabla` al componente `.tabla-a`.

### Revisión 2 de Tema 6: tarjetas de acceso

Las tres tarjetas de acceso tenían el contenido y las imágenes correctos, pero su estructura interna no correspondía completamente a la `tarjeta-avatar` aprobada en Tema 1.

Cambios realizados:

- El contenedor usa `.row.justify-content-center.mb-0`.
- Las columnas siguen el patrón responsivo `.col-md-6.col-xl-4`.
- Cada tarjeta utiliza `.tarjeta.color-primario.w-100.h-100.mt-3`.
- El relleno se aplica mediante un contenedor interior `.p-4`.
- Los títulos se mantienen en `h5.text-center` y los párrafos finales en `p.mb-0`.
- Se retiró `.tema6-acceso` de `_custom.sass`, porque `.color-primario` ya proporciona el fondo aprobado.

Criterio aprendido:

> Para replicar la `tarjeta-avatar` de Tema 1 no basta con usar el nombre del componente: también deben conservarse las clases de ancho, alto, margen superior, contenedor interior y distribución responsiva que garantizan tarjetas uniformes.

## Primera maquetación de Tema 7

Tema 7 se construyó con base en la página 9 del PDF y reutilizando los patrones institucionales ya aprobados.

Estructura aplicada:

- `img1.png` se presenta como imagen panorámica inicial.
- El segundo bloque reutiliza `.tema1-apertura`, con `img2.png`, `img3.svg` y el texto institucional.
- El tercer texto se acompaña de `img4.svg` mediante una fila alineada, siguiendo el patrón usado en Tema 5.
- La sección 7.1 comienza con un cajón secundario centrado a diez columnas.
- La Figura 3 utiliza `.titulo-sexto` y versiones diferenciadas para escritorio (`img5.svg`) y móvil (`img5_1.svg`).
- Manual, Protocolo y Criterios institucionales se presentan mediante `LineaTiempoD.color-acento-botones` junto a `img6.png`.
- El cierre usa un cajón primario centrado a diez columnas.
- Las imágenes no numeradas mantienen `alt=""`; las dos versiones de la Figura 3 conservan un texto alternativo descriptivo.

Criterio aprendido:

> Si una página nueva está compuesta únicamente por patrones ya aprobados, se deben ensamblar esos componentes respetando su estructura, márgenes y comportamiento responsivo, sin agregar CSS específico innecesario.

## Primera maquetación de Tema 8

Tema 8 se construyó con base en la página 10 del PDF y reutilizando los componentes institucionales validados en los temas anteriores.

Estructura aplicada:

- La introducción combina `img1.png`, texto, cajón secundario y un bloque con `img2.svg`.
- La sección 8.1 usa el patrón de Tema 1: `.BG01.px-5.p-5 > .bgwhite.p-4 > SlyderA(tipo="b")`. Sus cuatro diapositivas presentan Organizar, Escribir, Revisar y Validar con títulos `h5`.
- La sección 8.2 utiliza `AcordionA(tipo="b")` junto a `img7.png` y termina con un cajón centrado.
- La sección 8.3 inicia con `img8.png`, presenta los seis pasos mediante `LineaTiempoD` junto a `img9.png` y cierra con la Figura 4 en versiones de escritorio y móvil.
- La sección 8.4 combina `bloque-texto-g`, un bloque imagen–lista y un cajón secundario.
- La sección 8.5 utiliza un bloque con icono y una lista numerada acompañada por `img14.png`.
- La sección 8.6 combina imagen panorámica, cajón, bloques con icono e imagen y la pieza final del pódcast.
- Las imágenes no numeradas usan `alt=""`; la Figura 4 conserva texto alternativo descriptivo.
- No fue necesario agregar CSS específico para Tema 8.

Criterio aprendido:

> Cuando se solicite el componente de Tema 1 para presentar varias etapas con imagen y texto, se debe reutilizar la jerarquía completa de fondo, panel blanco y `SlyderA(tipo="b")`, manteniendo los títulos internos en `h5`.

### Revisión 1 de Tema 8: lista numerada

La lista de consideraciones conservaba la información correcta, pero construía los números mediante `span.text-bold` en línea. Se aplicó la estructura institucional indicada en la muestra.

Estructura aprobada:

```pug
ol.lista-ol--cuadro.mb-0
  li
    .lista-ol--cuadro__vineta
      span 1
    | Contenido del elemento.
```

Cambios realizados:

- Cada uno de los diez elementos mantiene un `li` como contenedor.
- La numeración se construye con `.lista-ol--cuadro__vineta` y un `span` interior.
- El texto se ubica después de la viñeta dentro del mismo `li`.
- Se eliminó la muestra duplicada después de aplicar su patrón a toda la lista.

Criterio aprendido:

> En una lista institucional `.lista-ol--cuadro`, la viñeta numerada no debe simularse con texto en negrita. Debe construirse explícitamente dentro de cada `li` mediante `.lista-ol--cuadro__vineta > span`.

## Validación de contenido: documento DI frente a maquetación HTML

Documento fuente: `fuentes/13530530_CF01_DI.docx`.

Alcance de esta revisión: contenido textual únicamente. No se evalúan diseño, componentes, imágenes, estilos, distribución ni textos alternativos.

### Parte 1. Introducción

Archivo comparado: `src/views/Introduccion.vue`.

#### Diferencias encontradas

1. **Omisión en el primer párrafo**

   - Word: “Estas situaciones generan brechas comunicativas **que surgen por** el uso de tecnicismos…”
   - HTML: “Estas situaciones generan brechas comunicativas **por** el uso de tecnicismos…”
   - Diferencia: en la maquetación faltan las palabras `que surgen`.

2. **Problema de codificación de caracteres en la vista**

   - En `Introduccion.vue` los caracteres con tilde y la letra `ñ` aparecen almacenados como secuencias alteradas, por ejemplo: `IntroducciÃ³n`, `pÃºblicas`, `ciudadanÃ­a`, `comprensiÃ³n` y `diseÃ±o`.
   - En el Word estos caracteres aparecen correctamente.
   - Esta diferencia afecta transversalmente el contenido visible de la Introducción y debe corregirse garantizando que el archivo quede guardado en UTF-8.

#### Contenido coincidente

- El segundo párrafo, que inicia con “En este componente se abordan…”, coincide en redacción con el Word, aparte del problema de codificación indicado.
- El tercer párrafo, que inicia con “El desarrollo de este componente…”, coincide en redacción con el Word, aparte del problema de codificación indicado.
- La frase de invitación al video coincide con el Word, aparte del problema de codificación indicado.
- Las apariciones repetidas del nombre `62360022_CF01_Guion_Video_Introduccion` en el Word corresponden a la referencia del recurso audiovisual y no a párrafos narrativos que deban mostrarse como texto en la vista.

#### Estado

La Introducción queda **pendiente de corrección de contenido** por una omisión de dos palabras y por la codificación incorrecta de caracteres. En esta etapa no se modificó `Introduccion.vue`; únicamente se documentaron las diferencias.

### Revisión 2 de Tema 8: cuatro momentos con `PasosB`

El bloque de los cuatro momentos de la sección 8.1 conservaba información e imágenes correctas, pero utilizaba `SlyderA`.

Cambios realizados:

- `SlyderA` se reemplazó por el componente institucional `PasosB.color-acento-botones`.
- El componente quedó dentro de `.tarjeta.tarjeta--gris.p-4.mb-4`.
- Cada etapa se definió como hija directa de `PasosB` mediante `.row.justify-content-center.align-items-center(titulo="…")`.
- Se conservaron Organizar, Escribir, Revisar y Validar, junto con sus textos e imágenes.
- En móvil la imagen aparece primero mediante las clases `order-1.order-lg-2`, mientras el texto utiliza `order-2.order-lg-1`.
- Las imágenes se limitan a `.col-10` en pantallas pequeñas.
- Los títulos internos utilizan `h5.mb-4` y los párrafos finales `p.mb-0`.
- Las imágenes mantienen `alt=""` por no corresponder a figuras numeradas.
- Se eliminó la muestra de la Ley 1346 de 2009 después de aplicar su estructura.

Estructura aprobada:

```pug
.tarjeta.tarjeta--gris.p-4.mb-4
  PasosB.color-acento-botones
    .row.justify-content-center.align-items-center(titulo="Etapa")
      .col-lg-6.mb-4.mb-lg-0.order-2.order-lg-1
        h5.mb-4 Etapa
        p.mb-0 Contenido.
      .col-lg-6.col-10.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/temas/tX/imagen.png" alt="")
```

Criterio aprendido:

> En `PasosB`, cada etapa debe ser hija directa del componente y declarar el atributo `titulo`. El componente controla la navegación y numeración; la estructura interior organiza el texto y la imagen de cada paso.
