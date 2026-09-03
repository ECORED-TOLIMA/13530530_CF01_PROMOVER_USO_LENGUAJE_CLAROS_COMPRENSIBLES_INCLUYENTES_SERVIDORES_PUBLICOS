<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Lenguajes claros, comprensibles e inclusivos

    .tema2-descarga.p-4.p-lg-5.mb-4
      .row.align-items-center
        .col-lg-5.mb-4.mb-lg-0
          .row.justify-content-center.align-items-center
            .col-8
              figure
                img(src="@/assets/curso/temas/t2/img1.svg" alt="")
        .col-lg-7
          h5 Guía para la orientación en el uso de lenguaje inclusivo
          p Para iniciar el desarrollo de esta temática, se invita a consultar la Guía de lenguajes claros, comprensibles e incluyentes del SENA. Este documento es fundamental para el desarrollo del componente formativo, ya que aborda diferentes acciones presentes en la relación entre el Estado y la ciudadanía.
          a.boton.color-acento-botones(:href="obtenerLink('/downloads/Guia_de_lenguaje_claro_SENA.pdf')" target="_blank")
            span Descargar
            i.fas.fa-file-download

    p.mb-4 Después de reconocer que la comunicación pública y ciudadana puede acercar o alejar a las personas de la información, resulta necesario avanzar hacia una pregunta:
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-1.mb-4.mb-lg-0.d-none.d-lg-block
        img(src="@/assets/curso/temas/t2/img2.svg" alt="")
      .col-lg-9
        .cajon.color-secundario.p-3
          p.mb-0 ¿Cómo debe construirse el lenguaje institucional para que la ciudadanía pueda comprender, usar y relacionar la información con sus derechos, trámites, servicios y decisiones?
    p.mb-4 La respuesta no depende únicamente de escribir menos o de cambiar algunas palabras. Comunicar de manera clara exige pensar en la persona que recibe el mensaje, en el propósito de la información, en el contexto en el que se entrega y en las acciones que se esperan desarrollar. Por esta razón, los lenguajes claros, comprensibles e inclusivos se convierten en herramientas fundamentales para reducir brechas comunicativas y fortalecer el acceso ciudadano.
    p.mb-4 Por eso, este apartado presenta tres enfoques complementarios:

    .tarjeta--container.row.mb-0
      .col-md.tarjeta.tema2-enfoque--claro.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src="@/assets/curso/temas/t2/img3.svg" alt="")
        h5.text-center.mb-4 Lenguaje claro
        p.mb-0 Ayuda a organizar y expresar la información de forma más sencilla y directa, utilizando palabras de uso común, frases precisas y una estructura que facilite su lectura y comprensión.
      .col-md.tarjeta.tema2-enfoque--comprensible.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src="@/assets/curso/temas/t2/img4.svg" alt="")
        h5.text-center.mb-4 Lenguaje comprensible
        p.mb-0 Permite que el mensaje tenga sentido para quien lo lee o escucha, porque cuida la claridad, la coherencia y el orden de las ideas.
      .col-md.tarjeta.tema2-enfoque--inclusivo.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src="@/assets/curso/temas/t2/img5.svg" alt="")
        h5.text-center.mb-4 Lenguaje inclusivo
        p.mb-0 Busca que la comunicación reconozca a las personas, evite expresiones discriminatorias y promueva una relación respetuosa entre el Estado y la ciudadanía.

    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.1 Lenguajes claros: conceptos, características y principios
    figure.mb-4
      img(src="@/assets/curso/temas/t2/img6.png" alt="")
    p.mb-4 El lenguaje claro es una estrategia de comunicación integral que busca que las audiencias entiendan un mensaje institucional desde la primera lectura o escucha. No consiste en infantilizar el discurso, sino en simplificar la estructura gramatical para optimizar el acceso a la información.
    p.mb-4 Entre las características de los lenguajes claros se encuentran:
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.col-8.mb-4.mb-lg-0
        img(src="@/assets/curso/temas/t2/img7.png" alt="")
      .col-lg-7
        LineaTiempoD.color-acento-botones
          p.mb-0(numero="1" titulo="Precisión") Presenta la información necesaria de manera exacta, sin datos innecesarios.
          p.mb-0(numero="2" titulo="Organización") Ordena las ideas según las necesidades de quien recibe la información.
          p.mb-0(numero="3" titulo="Claridad") Usa palabras comunes cuando sea posible, sin perder rigor institucional.
          p.mb-0(numero="4" titulo="Coherencia") Mantiene una relación lógica entre las ideas, los pasos y las instrucciones.
          p.mb-0(numero="5" titulo="Utilidad") Permite que la persona comprenda qué debe hacer con la información.
          p.mb-0(numero="6" titulo="Cercanía institucional") Reduce la distancia entre el lenguaje de la entidad y el lenguaje ciudadano.
    p.mb-0 La aplicación del lenguaje claro requiere implementar un #[strong diseño centrado en el usuario] para identificar de forma previa quién es el receptor real del documento o respuesta, articulado con una #[strong estructura lógica] que organice la información mediante la pirámide invertida, situando las conclusiones o requisitos al principio. También se debe #[strong garantizar la brevedad y concisión] a través del empleo de oraciones cortas, de preferencia con menos de veinticinco palabras, eliminando expresiones redundantes u ornamentales y priorizando el uso de la #[strong voz activa] para redactar de forma directa e indicar con precisión quién realiza la acción.
    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.2 Lenguaje comprensible: concepto, características, claridad y coherencia
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(role="img" aria-label="Dos personas conversando en un entorno laboral" :style="{'background-image':`url(${require_src('@/assets/curso/temas/t2/img8.png')})`}")
      .bloque-texto-g__texto.p-4
        p.mb-0 El lenguaje comprensible se relaciona con la posibilidad real de que una persona entienda el mensaje que recibe. Un texto puede estar escrito con palabras sencillas y aun así no ser comprensible si las ideas están desordenadas, si falta información importante o si no explica qué se debe realizar.
    p.mb-4 El lenguaje comprensible tiene las siguientes características:
    .row.justify-content-center.mb-4
      .col-md-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta-numerada.tema2-caracteristica--1.p-5.h-100
          .tarjeta-numerada__numero
            .h2 1
          h5.text-center Orden lógico
          p.mb-0.text-center La información se debe presentar en una secuencia fácil de seguir.
      .col-md-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta-numerada.tema2-caracteristica--2.p-5.h-100
          .tarjeta-numerada__numero
            .h2 2
          h5.text-center Claridad
          p.mb-0.text-center La información debe expresar las ideas principales sin ambigüedades.
      .col-md-6.col-xl-3.mb-4.mb-md-0
        .tarjeta-numerada.tema2-caracteristica--3.p-5.h-100
          .tarjeta-numerada__numero
            .h2 3
          h5.text-center Coherencia
          p.mb-0.text-center La información mantiene relación entre conceptos, instrucciones y acciones.
      .col-md-6.col-xl-3
        .tarjeta-numerada.tema2-caracteristica--4.p-5.h-100
          .tarjeta-numerada__numero
            .h2 4
          h5.text-center Pertinencia
          p.mb-0.text-center Incluye información necesaria para el propósito del mensaje.
    p.mb-0 La efectividad del lenguaje comprensible se fundamenta en la #[strong claridad], orientada a la eliminación de ambigüedades, dobles sentidos y giros idiomáticos complejos que puedan dar pie a interpretaciones erróneas por parte de la ciudadanía. En el mismo sentido, esta práctica se sustenta en la #[strong coherencia textual], la cual exige una secuencia lógica entre los párrafos de manera que las ideas secundarias soporten directamente a la idea principal, manteniendo así un hilo conductor unificado a lo largo de todo el documento o la interacción de servicio.

    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.3 Lenguaje inclusivo: concepto, características y tipos
    .tema2-descarga.tema2-descarga--compacta.p-4.mb-4
      .row.align-items-center
        .col-md-1.mb-4.mb-md-0.d-none.d-md-block
          img(src="@/assets/curso/temas/t2/img9.svg" alt="")
        .col-md-8.mb-4.mb-md-0
          h5 Guía para la orientación en el uso de lenguaje inclusivo
          p.mb-0 Para iniciar esta temática, se les invita a consultar la guía del Banco de la República sobre lenguajes claros, comprensibles e incluyentes.
        .col-md-3.text-center
          a.boton.color-acento-botones(href="https://www.banrep.gov.co/sites/default/files/publicaciones/archivos/guia-lenguaje-inclusivo-br.pdf" target="_blank")          
            span Descargar
            i.fas.fa-file-download
    p.mb-4 El lenguaje inclusivo y no discriminatorio es aquel que reconoce, visibiliza y valora la diversidad humana a través de las palabras. En la comunicación pública, este lenguaje permite que la información institucional no excluya, invisibilice ni reproduzca estereotipos sobre las personas o grupos sociales.
    .row.justify-content-center.mb-4
      .col-lg-10
        .cajon.color-primario.p-4
          p.mb-0 Usar lenguaje inclusivo no significa hacer textos más complejos ni reforzar expresiones difíciles de leer; su finalidad es comunicar con #[strong respeto, precisión y reconocimiento]. En el contexto institucional, esto implica revisar si los mensajes tratan a las personas de manera #[strong digna], si evitan generalizaciones que puedan excluir y si usan términos adecuados para referirse a los grupos poblacionales.
    p.mb-4 Las características que lo destacan son las siguientes:
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.col-8.mb-4.mb-lg-0
        img(src="@/assets/curso/temas/t2/img10.png" alt="")
      .col-lg-7
        LineaTiempoD.color-acento-botones
          p.mb-0(numero="1" titulo="Respeto") Reconoce la dignidad de las personas y evita expresiones ofensivas.
          p.mb-0(numero="2" titulo="Reconocimiento") Considera la diversidad de la ciudadanía.
          p.mb-0(numero="3" titulo="Precisión") Usa términos adecuados para nombrar personas, grupos o situaciones.
          p.mb-0(numero="4" titulo="No discriminación") Evita palabras que refuercen estereotipos o exclusiones.
          p.mb-0(numero="5" titulo="Claridad") Mantienen mensajes comprensibles y fáciles de leer.
          p.mb-0(numero="6" titulo="Pertinencia") Ajusta el lenguaje al contexto y al propósito comunicativo.
    p.mb-4 Finalmente, en la comunicación pública, los lenguajes inclusivos tienen unas tipificaciones o categorías que permiten la distinción entre grupos poblacionales para evitar temas como la discriminación, los estereotipos o la reducción del individuo a una sola condición. Una comunicación puede utilizar términos “correctos”, pero pueden seguir siendo excluyentes si no tiene en cuenta las condiciones de acceso, comprensión o participación de las personas.
    .tema2-descarga.p-4.p-lg-5.mb-0
      .row.align-items-center
        .col-lg-4.mb-4.mb-lg-0
          img(src="@/assets/curso/temas/t2/img11.svg" alt="")
        .col-lg-8
          h5 Profundice sus conocimientos
          p Para fortalecer los conceptos abordados sobre el lenguaje inclusivo y su aplicación en la comunicación pública, se invita a consultar la #[strong Guía para la realización de talleres de lenguaje claro para servidores públicos], con el fin de afianzar los conocimientos adquiridos.
          a.boton.color-acento-botones(href="https://www.bomberosbogota.gov.co/sites/default/files/Documentacion/ServicioCiudadano/Gui%CC%81a%20de%20lenguaje%20claro.pdf" target="_blank")
            span Descargar
            i.fas.fa-file-download
</template>

<script>
export default { name: 'Tema2' }
</script>
