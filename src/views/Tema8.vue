<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 Metodologías en documentos elaborados y publicados

    .row.align-items-center.justify-content-center.mb-4
      .col-lg-5.col-8.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/temas/t8/img1.png" alt="")
      .col-lg-7
        p Publicar un documento institucional es solo el primer paso; su trabajo no termina solo en su divulgación. Es muy importante revisarlo y garantizar que la información sea fácil de comprender por las personas a quienes va dirigida. Un documento puede contener información correcta desde el punto de vista normativo y técnico, pero si presenta exceso de información, tecnicismos o instrucciones confusas, puede presentar dificultades para ser entendido y termina alejando a las personas de la información.
        .cajon.color-secundario.p-4
          p.mb-0 Para solucionarlo, la #[strong Guía de lenguajes claros, comprensibles e incluyentes del SENA] propone evaluar la comprensión del contenido desde la experiencia real de las personas. Estas metodologías parten de una regla simple: si se desea saber si un documento es claro, solo se observa cómo lo usan, y lo entienden quienes necesitan utilizarlo.

    .row.align-items-center.mb-0
      .col-md-auto.text-center.mb-4.mb-md-0.d-none.d-lg-block
        img.tema5-icono(src="@/assets/curso/temas/t8/img2.svg" alt="")
      .col
        p.mb-0 En este componente se desarrollan tres metodologías que facilitan este proceso: la entrevista estructurada, el semáforo de la comprensión y el laboratorio de simplicidad. Cada una de estas metodologías cumple una función diferente, pero su objetivo en común es buscar el mismo resultado como, por ejemplo: identificar oportunidades de mejora para que la información sea clara, comprensible e incluyente. La #[strong Guía de lenguajes claros, comprensibles e incluyentes del SENA] sugiere priorizar los documentos que están dirigidos a la ciudadanía, relacionados con el acceso a derechos y los que son ampliamente consultados o utilizados de manera frecuente en los canales institucionales. También recomienda identificar quiénes son las personas destinatarias del documento, ya que sus características y necesidades son muy importantes porque orientan todo el proceso de evaluación.

    Separador
    #t_8_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 8.1 Metodología en documentos nuevos
    p.mb-4 La construcción de un documento nuevo comienza mucho antes de redactar el primer párrafo. Antes de escribir, es necesario identificar a quién va dirigida la información, qué necesita conocer la ciudadanía, cuál es el propósito del documento y qué acción se espera que realicen las personas después de leerlo. Cuando estas preguntas se responden desde el inicio, resulta más sencillo elaborar mensajes claros, pertinentes y útiles para la ciudadanía. Para lograrlo, es importante conocer los cuatro momentos que orientan la elaboración de documentos:
    .BG01.px-4.px-md-5.py-5.mb-5
      .tarjeta.bgwhite.p-4.p-lg-5
        PasosB.color-acento-botones
          .row.justify-content-center.align-items-center(titulo="Organizar")
            .col-lg-6.mb-4.mb-lg-0.order-2.order-lg-1
              h5.mb-4 Organizar
              p.mb-0 Inicialmente, se define el propósito del documento, se identifican las posibles audiencias, se selecciona la información necesaria y se establece el orden de las ideas para facilitar la comprensión del tema.
            .col-lg-6.col-10.mb-4.mb-lg-0.order-1.order-lg-2
              figure
                img(src="@/assets/curso/temas/t8/img3.png" alt="")
          .row.justify-content-center.align-items-center(titulo="Escribir")
            .col-lg-6.mb-4.mb-lg-0.order-2.order-lg-1
              h5.mb-4 Escribir
              p.mb-0 Una vez organizada la información, se inicia la redacción del documento. En esta etapa es fundamental utilizar un lenguaje común y cercano a la ciudadanía, construir oraciones breves y claras, y organizar las ideas de manera lógica para facilitar la comprensión del mensaje. Asimismo, se recomienda evitar redundancias, emplear la voz activa y reducir al máximo el uso de tecnicismos.
            .col-lg-6.col-10.mb-4.mb-lg-0.order-1.order-lg-2
              figure
                img(src="@/assets/curso/temas/t8/img4.png" alt="")
          .row.justify-content-center.align-items-center(titulo="Revisar")
            .col-lg-6.mb-4.mb-lg-0.order-2.order-lg-1
              h5.mb-4 Revisar
              p.mb-0 Este paso es fundamental, ya que permite leer nuevamente el documento para verificar que la información sea clara y que las ideas se comprendan con facilidad. También es necesario comprobar que el contenido mantenga un hilo conductor y que, cuando existan instrucciones, el paso a paso pueda seguirse sin dificultad.
            .col-lg-6.col-10.mb-4.mb-lg-0.order-1.order-lg-2
              figure
                img(src="@/assets/curso/temas/t8/img5.png" alt="")
          .row.justify-content-center.align-items-center(titulo="Validar")
            .col-lg-6.mb-4.mb-lg-0.order-2.order-lg-1
              h5.mb-4 Validar
              p.mb-0 Finalmente, es importante compartir el documento con otras personas del entorno laboral y, cuando sea posible, con integrantes de la audiencia a la que va dirigido. Esto permite verificar que la información sea comprendida, identificar oportunidades de mejora y confirmar que el contenido cumple su propósito antes de su publicación o difusión.
            .col-lg-6.col-10.mb-4.mb-lg-0.order-1.order-lg-2
              figure
                img(src="@/assets/curso/temas/t8/img6.png" alt="")
    .row.justify-content-center.mb-0
      .col-lg-10
        .cajon.color-primario.p-4
          p.mb-0 Aprendices, este proceso ayuda a comprender que no consiste únicamente en cambiar palabras; el proceso implica organizar la información, pensar a quién va dirigida y verificar que el documento cumpla todos los criterios antes de ser publicado.

    Separador
    #t_8_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 8.2 Entrevista estructurada
    p.mb-4 Esta es una metodología que facilita conocer cómo otras personas comprenden los documentos antes de realizar modificaciones; su finalidad es identificar las dificultades que aparecen durante la lectura y reconocer los aspectos que se pueden mejorar para la comprensión del mensaje. Igualmente, debe tener en cuenta esta serie de pasos:
    .row.align-items-center.justify-content-center.mb-4
      .col-lg-4.col-8.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/temas/t8/img7.png" alt="")
      .col-lg-8
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="1. Selección e inicio de la entrevista")
            p.mb-0 Se selecciona el documento institucional y se entrega a una persona que represente a la población destinataria para que lo lea. Una vez finalizada la lectura, se formulan preguntas que permitan identificar si la información fue comprendida, cuáles fueron las principales dificultades y qué dudas surgieron durante su lectura.
          .row(titulo="2. Durante la entrevista")
            p.mb-0 Se recomienda formular preguntas abiertas, escuchar atentamente las respuestas y registrar las observaciones realizadas. El propósito de esta etapa es comprender cómo la persona interpreta la información, qué aspectos le resultan claros y cuáles requieren ajustes.
          .row(titulo="3. Al finalizar la entrevista")
            p.mb-0 Se analiza la información obtenida para identificar los aspectos que requieren mejora, como el uso de palabras poco conocidas, instrucciones incompletas, exceso de información, ideas desordenadas o expresiones poco adecuadas para la audiencia. A partir de este análisis, se realizan los ajustes necesarios antes de divulgar el documento.
    .row.justify-content-center.mb-0
      .col-lg-10
        .cajon.color-primario.p-4
          p.mb-0 Esta metodología permite reconocer que la claridad de un documento no depende únicamente de quien lo redacta; también se construye a partir de la experiencia de quienes utilizan la información para acceder a un trámite, un servicio o ejercer un derecho.

    Separador
    #t_8_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 8.3 Semáforo de la comprensión
    figure.mb-4
      img(src="@/assets/curso/temas/t8/img8.png" alt="")
    p.mb-4 El semáforo de la comprensión es una metodología que facilita identificar de manera rápida y visual los apartados de un documento que presentan diferentes niveles de comprensión. Su aplicación permite priorizar las mejoras antes de publicar o actualizar un documento institucional.
    p.mb-4 La Guía de lenguajes claros, comprensibles e incluyentes del SENA propone una ruta metodológica de seis pasos adaptada de la propuesta elaborada por la veeduría para traducir documentos a lenguaje claro:
    .row.align-items-center.justify-content-center.mb-4
      .col-lg-8.mb-4.mb-lg-0.order-2.order-lg-1
        LineaTiempoD.color-acento-botones
          p.mb-0(numero="1" titulo="Prueba de lectura con el semáforo de la comprensión para traducción") Una vez que se elige el documento que se va a traducir, las personas responsables que realizan la prueba de lectura deben utilizar el semáforo de la comprensión.
          p.mb-0(numero="2" titulo="Simplificación del documento") El documento se debe revisar y modificar de acuerdo con las recomendaciones que se realizan; es importante que el contenido se redacte en un lenguaje claro, comprensible e incluyente de acuerdo con los lineamientos mencionados en #[b La Guía de lenguajes claros, comprensibles e incluyentes del SENA]. Es importante verificar que la información sea relevante y que se adapte a las necesidades de las personas a quienes va dirigida.
          p.mb-0(numero="3" titulo="Ajustes en el diseño del documento") Es importante revisar si el documento requiere ajustes de mejora en su diseño con el fin de que facilite la comprensión de la información. Para que la lectura del contenido sea más fácil de entender, se puede hacer uso de recursos visuales como cuadros, viñetas, imágenes o gráficos; el objetivo es que las personas puedan comprender el documento con facilidad.
          p.mb-0(numero="4" titulo="Validación con personas expertas") Los documentos organizados deben ser compartidos con personas expertas en el tema, con el fin de verificar que sí cumplen con los requisitos de un lenguaje claro, comprensible e incluyente.
          p.mb-0(numero="5" titulo="Revisión final") Es muy importante revisar el documento final con la persona responsable y asegurar que el contenido cumpla con las condiciones y sea comprensible y accesible para quienes va dirigido.
          p.mb-0(numero="6" titulo="Formalización y publicación del documento") Cuando el documento esté finalizado se debe seguir con un proceso de formalización de acuerdo como lo menciona #[b La Guía de lenguajes claros, comprensibles e incluyentes del SENA] y verificar que esté disponible en un formato accesible.
      .col-lg-4.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/temas/t8/img9.png" alt="")
    p.mb-4 Como parte de la prueba de lectura, el semáforo de la comprensión facilita identificar los apartados del documento que requieren ajustes según el nivel de comprensión alcanzado por la audiencia. En la siguiente figura se presenta el significado de cada color y su aplicación durante este proceso de revisión:
    .row.justify-content-center.align-items-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Figura 4.
          span Semáforo de la comprensión
        .row.justify-content-center.mb-0
          .col-12.d-none.d-lg-block
            figure
              img(src="@/assets/curso/temas/t8/img10.svg" alt="Figura 4. Semáforo de la comprensión: rojo identifica información difícil de comprender; amarillo señala apartados que generan dudas; verde corresponde a información comprendida y escrita en lenguaje claro.")
          .col-12.d-block.d-lg-none
            figure
              img(src="@/assets/curso/temas/t8/img10_1.svg" alt="Figura 4. Semáforo de la comprensión: rojo identifica información difícil de comprender; amarillo señala apartados que generan dudas; verde corresponde a información comprendida y escrita en lenguaje claro.")

    Separador
    #t_8_4.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 8.4 Laboratorio de simplicidad
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(role="img" :style="{'background-image':`url(${require_src('@/assets/curso/temas/t8/img11.png')})`}")
      .bloque-texto-g__texto.p-4
        p.mb-0 Es una metodología desarrollada por el Departamento Nacional de Planeación (DNP) que busca transformar documentos institucionales en textos más claros, comprensibles e incluyentes. A diferencia de las metodologías anteriores, esta estrategia no se centra en identificar dificultades, sino en construir soluciones a partir de las observaciones realizadas durante la revisión. Se trata de un trabajo colaborativo entre las entidades públicas y las personas que serán usuarias de la información, con el propósito de mejorar la comprensión de los documentos y fortalecer la comunicación con la ciudadanía.
    .row.align-items-center.justify-content-center.mb-4
      .col-lg-5.col-8.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/temas/t8/img12.png" alt="")
      .col-lg-7
        p Para desarrollar esta metodología, se parte de un documento previamente elaborado que es revisado de manera individual o colaborativa. Durante este proceso se identifican las dificultades de comprensión y se realizan los ajustes necesarios, conservando el sentido del contenido con una comunicación cercana y clara.
        p Para la aplicación de esta metodología se recomienda:
        ul.lista-ul.mb-0
          li #[i.fas.fa-comment-dots] Reemplazar palabras técnicas por expresiones de uso común, cuando sea posible.
          li #[i.fas.fa-comment-dots] Eliminar información repetitiva o innecesaria.
          li #[i.fas.fa-comment-dots] Dividir los párrafos demasiado extensos.
          li #[i.fas.fa-comment-dots] Organizar las ideas siguiendo una secuencia lógica.
          li #[i.fas.fa-comment-dots] Presentar primero la información más importante.
          li #[i.fas.fa-comment-dots] Verificar que las instrucciones indiquen claramente qué debe hacer la persona.
    .row.justify-content-center.mb-4
      .col-lg-10
        .cajon.color-secundario.p-4
          p.mb-0 Una vez realizados los ajustes, es recomendable que el documento sea revisado por otras personas antes de su aprobación o publicación, con el fin de verificar que la información sea clara, comprensible y responda a las necesidades de la ciudadanía.
    p.mb-0 El laboratorio de simplicidad permite comprender que mejorar un documento no significa reducir información importante, sino presentarla de una manera más organizada, cercana y útil para facilitar el acceso, la comprensión y el uso de la información pública.

    Separador
    #t_8_5.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 8.5 Consideraciones de escritura en lenguajes claros, comprensibles e incluyentes
    .row.align-items-center.mb-4
      .col-md-auto.text-center.mb-4.mb-md-0.d-none.d-lg-block
        img.tema5-icono(src="@/assets/curso/temas/t8/img13.svg" alt="")
      .col
        p.mb-0 Antes de construir o revisar un documento, es importante recordar que escribir con claridad implica pensar primero en las personas que harán uso de la información. La #[strong Guía de lenguajes claros, comprensibles e incluyentes del SENA] recomienda identificar primero quién recibirá el mensaje, qué necesita conocer y cuál es el resultado que se espera después de la lectura.
    p.mb-4 Durante la elaboración de los documentos es preciso tener en cuenta las siguientes consideraciones:
    .BG04.px-5.p-5.mb-0
      .row.align-items-center.justify-content-center
        .col-lg-3.col-8.mb-4.mb-lg-0
          figure
            img(src="@/assets/curso/temas/t8/img14.png" alt="")
        .col-lg-9
          ol.lista-ol--cuadro.mb-0
            li
              .lista-ol--cuadro__vineta
                span 1
              | Organizar la información siguiendo un orden lógico y fácil de comprender.
            li
              .lista-ol--cuadro__vineta
                span 2
              | Presentar al inicio la información más importante o las acciones que debe realizar la ciudadanía.
            li
              .lista-ol--cuadro__vineta
                span 3
              | Utilizar palabras de uso frecuente y explicar los términos necesarios.
            li
              .lista-ol--cuadro__vineta
                span 4
              | Redactar oraciones breves que faciliten la lectura.
            li
              .lista-ol--cuadro__vineta
                span 5
              | Emplear la voz activa para indicar claramente quién realiza cada acción.
            li
              .lista-ol--cuadro__vineta
                span 6
              | Evitar expresiones ambiguas, redundantes o innecesarias.
            li
              .lista-ol--cuadro__vineta
                span 7
              | Mantener coherencia entre los títulos, el contenido y las instrucciones.
            li
              .lista-ol--cuadro__vineta
                span 8
              | Utilizar ejemplos únicamente cuando faciliten la comprensión.
            li
              .lista-ol--cuadro__vineta
                span 9
              | Verificar que el lenguaje sea respetuoso, incluyente y libre de discriminación.
            li
              .lista-ol--cuadro__vineta
                span 10
              | Revisar el documento antes de publicarlo para confirmar que se comprenda desde la primera lectura.

    Separador
    #t_8_6.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 8.6 Guía de lenguajes claros, comprensibles e incluyentes (SENA)
    figure.mb-4
      img(src="@/assets/curso/temas/t8/img15.png" alt="")
    p.mb-4 Esta guía, en su segunda versión, se constituye como un referente metodológico para el conocimiento, elaboración y revisión de documentos y comunicaciones dirigidas a la ciudadanía. Si bien la guía es desarrollada por el Servicio Nacional de Aprendizaje SENA, sirve como sustento para todos los aprendices y servidores públicos para la ejecución de temas relacionados con el uso y aplicaciones de los lenguajes claros, comprensibles e incluyentes.
    .row.align-items-center.justify-content-center.mb-4
      .col-lg-7.mb-4.mb-lg-0.order-2.order-lg-1
        .cajon.color-primario.p-4.mb-4
          p.mb-0 Se recomienda consultar la guía, adaptarla a los procesos de cada entidad pública del país, pues su consulta y utilización permite fortalecer las capacidades institucionales para identificar barreras de comprensión, poder organizar mejor la información, seleccionar el lenguaje y conceptos apropiados y construir mensajes que faciliten el acceso a los trámites, servicios, derechos y mecanismos de participación a todos los ciudadanos.
        .row.align-items-center
          .col-md-auto.text-center.mb-4.mb-md-0.d-none.d-lg-block
            img.tema5-icono(src="@/assets/curso/temas/t8/img16.svg" alt="")
          .col
            p.mb-0 Finalmente, se espera que los aprendices incorporen estas orientaciones en sus prácticas cotidianas, llegando a la comprensión de que la comunicación clara y respetuosa no depende únicamente de escribir correctamente, sino de facilitar el acceso y reconocimiento de todas las personas y que a su vez ellas puedan encontrar, comprender y utilizar la información para el ejercicio y garantía de sus derechos en relación con las entidades públicas del país.
      .col-lg-5.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/temas/t8/img17.png" alt="")
    
    .row.align-items-center.justify-content-center.mb-0
      .col-lg-4.col-8.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/temas/t8/img18.png" alt="")
      .col-lg-8
        p.mb-4 Con el propósito de integrar los conceptos abordados hasta el momento, se presenta un pódcast que explica cómo construir comunidades digitales alrededor del patrimonio cultural:
        .bgpodcast.p-4
          .row.justify-content-center.align-items-center
            .col-lg-4.d-none.d-lg-block
              img(src='@/assets/curso/temas/t8/img19.svg', alt='')
            .col-lg-8
              p.text-white.mb-0.p-4 Pódcast
              .tarjeta.clr--pink.p-4.rounded-0.h-100
                .tarjeta.bg-white.p-4
                  TarjetaAudio.color-primario.mb-3(
                  texto="Cuando comprender un mensaje también es un derecho"
                  :audio="require_src('@/assets/curso/temas/audio/13530530_CF01_Guion_Podcast_Cuando comprender un mensaje también es un derecho.mp3')"
              )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")

</template>

<script>
export default { name: 'Tema8' }
</script>

<style lang="sass"></style>
