# Guía de maquetación parametrizada

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
