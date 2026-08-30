<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Comunicación pública y ciudadana
    .row.g-0.align-items-stretch.tema1-apertura.mb-4
      .col-lg-5
        figure.tema1-apertura__imagenF
          img(
            src="@/assets/curso/temas/t1/img1.png"
            alt=""
          )
      .col-lg-7
        .row.p-4.mb-3
          .col-lg-2.d-none.d-lg-block
            img.tema1-apertura__icono.mb-4( src="@/assets/curso/temas/t1/img2.svg" alt="" )
          p.mb-0 La comunicación es una acción cotidiana que permite compartir información, expresar ideas, orientar decisiones y fortalecer las relaciones entre las personas y las instituciones. En el ámbito de lo público, esta acción adquiere un papel fundamental, ya que conecta a las entidades del Estado con la ciudadanía y facilita el ejercicio de sus derechos. Cada vez que una institución pública un requisito, brinda información sobre un servicio, explica un trámite, responde una solicitud o convoca a la participación ciudadana, desarrolla un proceso de comunicación que puede facilitar o dificultar el acceso, la comprensión y el uso de la información pública.

    p.mb-4 En esta relación no basta con que la información exista o esté publicada. Para que la comunicación cumpla su función, la ciudadanía necesita comprender qué se informa, por qué es importante, qué acciones puede realizar, qué derechos están involucrados y cuáles son los canales disponibles para interactuar con la entidad. Por esta razón, la comunicación pública y ciudadana debe pensarse como un puente:

    .row.justify-content-center
      .col-lg-6
        .tarjeta-avatar-b.mb-4
          .tarjeta-avatar-b__img
            img(
              src="@/assets/curso/temas/t1/img3.svg"
              alt=""
            )
          .tarjeta.tarjeta--azul.tema1-apertura.h-100
            .p-4
              h5 Generación y divulgación de información
              p.mb-0 Por un lado, las entidades públicas producen, organizan y comunican información sobre sus funciones, servicios, trámites, programas y decisiones.
      .col-lg-6
        .tarjeta-avatar-b.mb-4
          .tarjeta-avatar-b__img
            img(
              src="@/assets/curso/temas/t1/img4.svg"
              alt=""
            )
          .tarjeta.tarjeta--azul.tema1-apertura.h-100
            .p-4
              h5 Acceso y comprensión de la información
              p.mb-0 Por otro lado, la ciudadanía recibe, comprende y utiliza esa información para ejercer sus derechos, acceder a servicios, tomar decisiones y participar en asuntos de interés común.

    p.mb-4 Para comprender cómo se relacionan las entidades públicas y la ciudadanía a través de la comunicación, analice la siguiente figura. En ella se representa la comunicación pública y ciudadana como un puente que conecta la generación de información con su comprensión y uso, destacando que la información solo cumple su propósito cuando resulta clara, accesible y útil para las personas:

    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Figura 1. 
      span Puente de la comunicación

    .row.justify-content-center.align-items-center.mb-0
      .col-lg-12.d-none.d-lg-block
        figure
          img(src="@/assets/curso/temas/t1/img5.svg" alt="Figura 1 que relaciona la comunicación pública y ciudadana con un puente que conecta a la entidad pública, encargada de generar información, con la ciudadanía, que la recibe para tomar decisiones, acceder a servicios, ejercer sus derechos y participar en asuntos de interés común. En el puente se destacan aspectos como la claridad del mensaje, su importancia, las acciones que permite realizar, los derechos involucrados y los canales disponibles, enfatizando que no basta con publicar información, sino que esta debe ser comprendida.")
      .col-lg-12.d-block.d-lg-none
        figure
          img(src="@/assets/curso/temas/t1/img5_1.svg" alt="Figura 1 que relaciona la comunicación pública y ciudadana con un puente que conecta a la entidad pública, encargada de generar información, con la ciudadanía, que la recibe para tomar decisiones, acceder a servicios, ejercer sus derechos y participar en asuntos de interés común. En el puente se destacan aspectos como la claridad del mensaje, su importancia, las acciones que permite realizar, los derechos involucrados y los canales disponibles, enfatizando que no basta con publicar información, sino que esta debe ser comprendida.")
    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.1 Comunicación pública: conceptos, características y tipos

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        figure
          img(src="@/assets/curso/temas/t1/img6.png" alt="")

    .row.align-items-center.mb-4
      .col-md-auto.text-center.mb-4.mb-md-0.d-none.d-lg-block
        img.tema1-definicion__icono(src="@/assets/curso/temas/t1/img7.svg" alt="")
      .col
        p.mb-0 La comunicación pública se define como el conjunto de procesos informativos y de diálogo que las entidades del Estado adelantan para interactuar de forma oficial con la sociedad. Su propósito principal no es comercial ni meramente persuasivo, sino la garantía del interés general, la transparencia en la gestión de lo público y la rendición de cuentas ante la ciudadanía.

    .titulo-pastilla.mt-5(data-aos="fade-down")
      img(src="@/assets/curso/icon.svg" alt="")
      span Características fundamentales de la comunicación pública

    p.mb-4 La comunicación pública se fundamenta en el interés general para garantizar que la información transmitida sea de utilidad colectiva y responda a las necesidades reales de la población. También posee un carácter oficial al representar la postura, normatividad y servicios de la institución gubernamental, y no la de un individuo en particular, rigiéndose bajo el principio de universalidad, el cual exige que los mensajes se diseñen para ser accesibles a todas las personas, sin discriminación de ningún tipo.
    p.mb-4 La comunicación pública y la comunicación ciudadana se complementan:

    SlyderB.mb-4.p-5.tarjeta.color-secundario(:datos="datosSlyder")

    .row.justify-content-center.mb-4
      .col-lg-10
        .cajon.color-primario.p-4
          p.mb-0 Esta diferencia permite reconocer que publicar información no siempre significa comunicar de manera efectiva. Para que exista acceso ciudadano, la información debe estar disponible, pero también debe ser clara, comprensible e inclusiva.

    p.mb-4 Partiendo de lo anterior, la siguiente tabla presenta una comparación de sus principales características, propósitos, tipos, ejemplos y riesgos asociados:

    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Tabla 1.
      span Comparación entre la comunicación pública y la comunicación ciudadana


    .tabla-a.color-acento-contenido.tema1-tabla.mb-4
      table
        thead
          tr
            th Aspecto
            th Comunicación pública
            th Comunicación ciudadana
        tbody
          tr
            td Concepto
            td Proceso mediante el cual las entidades del Estado producen, organizan y divulgan información de interés general para orientar, informar, explicar decisiones, promover servicios o facilitar el acceso a derechos.
            td Proceso mediante el cual la ciudadanía recibe, interpreta, usa y responde a la información pública, de acuerdo con sus necesidades, contexto, experiencias y condiciones sociales, culturales y comunicativas.
          tr
            td Propósito
            td Garantizar que la información institucional llegue a la ciudadanía de manera clara, oportuna y confiable.
            td Favorecer que las personas comprendan la información, la relacionen con su vida cotidiana y puedan actuar, participar o ejercer derechos.
          tr
            td Características
            td Clara, oportuna, accesible y coherente con la normatividad y ajustada a los lineamientos institucionales.
            td Comprensible, cercana, incluyente y útil para que la ciudadanía pueda tomar decisiones.
          tr
            td Tipos
            td Informativa, orientadora, preventiva, pedagógica, normativa, institucional y participativa.
            td Participativa, comunitaria, de atención ciudadana, de retroalimentación y de interacción con las entidades.
          tr
            td Tipo de información
            td Información sobre trámites, servicios, programas, normas, convocatorias, derechos, deberes, decisiones administrativas, campañas y canales institucionales.
            td Información que la ciudadanía necesita comprender para acceder a servicios, presentar solicitudes, participar en espacios públicos, resolver inquietudes o ejercer derechos.
          tr
            td Ejemplo
            td Una entidad pública los requisitos para acceder a un subsidio, informa fechas de inscripción y explica los canales de atención disponibles.
            td Una persona comprende los requisitos del subsidio, identifica si puede postularse, sabe qué documentos presentar y usa el canal indicado para realizar el trámite.
          tr
            td Riesgo si no se aplica adecuadamente
            td La información puede quedar publicada, pero no ser comprendida por el exceso de tecnicismos, desorden, falta de claridad o canales pocos accesibles.
            td La ciudadanía puede confundirse, abandonar el trámite, no participar o no ejercer un derecho por falta de comprensión de la información.
    p.mb-4 En este sentido, la comunicación pública permite organizar y divulgar información institucional, mientras que la comunicación ciudadana ayuda a verificar si esa información realmente responde a las necesidades de las personas. Cuando ambas se articulan, se reducen las brechas comunicativas y se fortalece el acceso ciudadano a trámites, servicios, derechos y espacios de participación.

    .titulo-pastilla.mt-5(data-aos="fade-down")
      img(src="@/assets/curso/icon.svg" alt="")
      span Modalidades de la comunicación pública

    p.mb-4 La comunicación pública se manifiesta a través de diferentes modalidades, entre las que se encuentran:

    .row.justify-content-center.mb-0
      .col-md-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta-avatar
          img(src="@/assets/curso/temas/t1/img10.svg" alt="")
          .tarjeta.color-primario.w-100.h-100.mt-3
            .p-4
              h5.text-center Institucional
              p.mb-0 Enfocada en la difusión de trámites, servicios, requisitos y el funcionamiento de las entidades públicas.
      .col-md-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta-avatar
          img(src="@/assets/curso/temas/t1/img11.svg" alt="")
          .tarjeta.color-primario.w-100.h-100.mt-3
            .p-4
              h5.text-center Política o gubernamental
              p.mb-0 Orientada a socializar planes de desarrollo, programas de gobierno y metas estratégicas.
      .col-md-6.col-xl-4.mb-0
        .tarjeta-avatar
          img(src="@/assets/curso/temas/t1/img12.svg" alt="")
          .tarjeta.color-primario.w-100.h-100.mt-3
            .p-4
              h5.text-center Comunicación de crisis o emergencia
              p.mb-0 Se activa ante situaciones sociales, ambientales o sanitarias que requieren información oportuna y orientaciones inmediatas para la ciudadanía.

    
    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.2 Comunicación ciudadana: concepto, objetivo, alcance y enfoque

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        role="img"
        aria-label="Personas dialogando mientras consultan información en un computador portátil"
        :style="{'background-image':`url(${require_src('@/assets/curso/temas/t1/img13.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La comunicación ciudadana se define como información, opinión y deliberación que nacen desde las personas, los colectivos sociales y las comunidades hacia el Estado o entre sí. A diferencia de la comunicación pública, su dirección es principalmente ascendente u horizontal, operando como una herramienta fundamental para el control social y la auditoría de lo público.

    p.mb-4 Para comprender el papel de la comunicación ciudadana en la relación entre las instituciones y la ciudadanía, es necesario analizar tres aspectos fundamentales:

    .row.align-items-center.justify-content-center.mb-0
      .col-lg-8.mb-4.mb-lg-0.order-2.order-lg-1
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Objetivo")
            .col-12
              p.mb-0 Favorecer una relación más clara, cercana y efectiva en las instituciones y las personas. Para lograrlo, la información debe permitir que la ciudadanía comprenda, actúe, pregunte, participe o tome decisiones. Una comunicación ciudadana bien orientada no solo informa; también reduce distancias, fortalece la confianza y facilita el acceso.
          .row(titulo="Alcance")
            .col-12
              p.mb-0 Incluye diferentes momentos del relacionamiento con el Estado. Está presente cuando una persona consulta información en una página #[i web], lee un cartel institucional, recibe una respuesta escrita o participa en una reunión. En cada uno de estos momentos, la comunicación puede facilitar el proceso o convertirse en una barrera.
          .row(titulo="Enfoque")
            .col-12
              p.mb-0 Debe ser claro, comprensible e incluyente. Esto implica reconocer que no todas las personas acceden a la información de la misma manera ni tienen las mismas condiciones para interpretarla. Por esta razón, comunicar desde el enfoque ciudadano exige pensar en el lenguaje, el canal, el formato, el contexto y la utilidad de la información.
      .col-lg-4.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/temas/t1/img14.png" alt="")
    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.3 Tipos de información en la comunicación pública y ciudadana

    figure.mb-4
      img(src="@/assets/curso/temas/t1/img15.png" alt="")

    .row.justify-content-center.mb-4
      .col-lg-10
        .cajon.color-secundario.p-3
          .row.align-items-center
            .col-lg-3
              figure
                img(src="@/assets/curso/temas/t1/img16.svg" alt="")
            .col-lg-9
              p.mb-0 Dentro de los procesos de comunicación entre el Estado y la ciudadanía circulan diferentes tipos de información. Algunas comunicaciones explican normas, otras orientan trámites, presentan servicios, entregan respuestas, convocan a participar o informan decisiones; identificar este tipo de información es importante porque no todos los mensajes se construyen de la misma manera ni cumplen con el mismo propósito.

    p.mb-4 Los tipos de información que gestionan las entidades públicas se diferencian por su finalidad y por las condiciones de acceso establecidas en la normatividad. La siguiente tabla presenta las principales categorías y el nivel de acceso que tiene la ciudadanía frente a cada una de ellas:

    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Tabla 2.
      span Tipos de información y nivel de acceso ciudadano

    .tabla-a.color-acento-contenido.tema1-tabla.mb-4
      table
        thead
          tr
            th Tipos de información
            th Definición general
            th Nivel de acceso ciudadano
        tbody
          tr
            td Información pública
            td Datos y documentos generados, guardados o controlados por una entidad pública.
            td Acceso universal y obligatorio (transparencia activa y pasiva).
          tr
            td Información clasificada
            td Información del Estado que, de ser revelada, podría afectar la intimidad o los derechos de una persona.
            td Acceso restringido por ley (protección de datos personales).
          tr
            td Información reservada
            td Información cuya difusión podría poner en riesgo la seguridad nacional o la defensa pública.
            td Excepción legal de acceso temporal.
    p.mb-4 Finalmente, y como complemento a la clasificación de la información, se presentan de manera breve dos aspectos que influyen directamente en su comprensión: el uso de tecnicismos y las barreras lingüísticas, ya que ambos pueden dificultar el acceso efectivo a la información pública y el ejercicio de los derechos:

    .BG01.px-5.p-5
      .bgwhite.p-4
        SlyderA(tipo="b")
          .row.align-items-center
            .col-lg-6.mb-4.mb-lg-0
              h5 Usos de tecnicismos
              p.mb-0 El uso excesivo de vocabulario altamente técnico, jurídico o administrativo especializado (conocido comúnmente como "lenguaje burocrático") representa una de las principales fallas en el diseño de contenidos estatales. Si bien es necesario mantener el rigor técnico interno, la traducción de estos términos al interactuar con el ciudadano es imperativa para evitar confusiones y desinformación.
            .col-lg-6
              figure
                img(src="@/assets/curso/temas/t1/img17.png" alt="")
          .row.align-items-center
            .col-lg-6.mb-4.mb-lg-0
              h5 Barreras lingüísticas
              p.mb-0 Las barreras lingüísticas son aquellos obstáculos comunicativos que impiden el entendimiento mutuo entre el servidor público y el ciudadano. Se generan cuando los canales de atención o las piezas informativas ignoran las capacidades cognitivas, los dialectos locales, las lenguas étnicas o las condiciones de diversidad funcional de la población, aislando al ciudadano del goce efectivo de sus derechos.
            .col-lg-6
              figure
                img(src="@/assets/curso/temas/t1/img18.png" alt="")

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Comunicación pública',
        texto:
          'Se relaciona con la responsabilidad que tienen las entidades públicas de generar, organizar y entregar información de interés general de manera oportuna, transparente, clara y accesible, para facilitar el acceso de la ciudadanía a los servicios, trámites, programas y decisiones institucionales.',
        imagen: '@/assets/curso/temas/t1/img8.png',
      },
      {
        titulo: 'Comunicación ciudadana',
        texto:
          'Se enfoca en la forma en que las personas comprenden, interpretan, utilizan y responden a la información recibida, permitiéndoles ejercer sus derechos, participar en asuntos de interés público, tomar decisiones informadas e interactuar con las entidades del Estado.',
        imagen: '@/assets/curso/temas/t1/img9.png',
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>
