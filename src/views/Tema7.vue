<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Lineamientos institucionales

    figure.mb-4
      img(src="@/assets/curso/temas/t7/img1.png" alt="")

    p.mb-4 Cuando una entidad comunica información pública, no empieza desde cero, de manera interna existen orientaciones que ayudan a cuidar la forma como se escriben los mensajes, se atiendes a la ciudadanía, se publican los contenidos y se responden las solicitudes. Estas orientaciones son los #[strong lineamientos institucionales].

    .row.g-0.align-items-stretch.tema1-apertura.mb-4
      .col-lg-5
        figure.tema1-apertura__imagenF
          img(src="@/assets/curso/temas/t7/img2.png" alt="")
      .col-lg-7
        .row.p-4.mb-3
          .col-lg-2.d-none.d-lg-block 
            img.tema1-apertura__icono.mb-4(src="@/assets/curso/temas/t7/img3.svg" alt="")
          p.mb-0 Los lineamientos institucionales permiten que la información no dependa únicamente de la forma personal de quien redacta o atiente. Su función es ofrecer una ruta común para que la información sea clara, comprensible, respetuosa y útil. De esta manera, las personas pueden encontrar mensajes más ordenados y recibir una atención más cercana sin importar el canal que utilicen para acceder a la información.

    .row.align-items-center.mb-0
      .col-md-auto.text-center.mb-4.mb-md-0.d-none.d-lg-block
        img.tema5-icono(src="@/assets/curso/temas/t7/img4.svg" alt="")
      .col
        p.mb-0 En el acceso ciudadano, estos lineamientos son relevantes porque ayudan a evitar mensajes contradictorios, respuestas incompletas o información difícil de comprender. También permiten que las entidades mantengan un mismo estilo de comunicar la información, basada en el lenguaje claro, la atención respetuosa y el cumplimiento de la normativa vigente.

    Separador
    #t_7_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 7.1 Manuales, protocolos y criterios institucionales

    .row.justify-content-center.mb-4
      .col-lg-10
        .cajon.color-secundario.p-4
          p.mb-0 Los lineamientos institucionales pueden presentarse en diferentes documentos. Los más comunes son los manuales, los protocolos y los criterios institucionales.

    p.mb-4 Los lineamientos institucionales orientan la forma en que las entidades planifican, revisan y comunican la información pública. A continuación, se presenta un esquema con los principales lineamientos utilizados en estos procesos:

    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Figura 3.
      span Lineamientos institucionales
    .row.justify-content-center.mb-4
      .col-12.d-none.d-lg-block
        figure
          img(src="@/assets/curso/temas/t7/img5.svg" alt="Figura 3. Esquema de los lineamientos institucionales, compuesto por manual, protocolo y criterio. El manual reúne orientaciones generales sobre un tema o proceso; el protocolo define una ruta para actuar en una situación específica; y el criterio establece reglas o aspectos que deben revisarse antes de comunicar.")
      .col-12.d-block.d-lg-none
        figure
          img(src="@/assets/curso/temas/t7/img5_1.svg" alt="Figura 3. Esquema de los lineamientos institucionales, compuesto por manual, protocolo y criterio. El manual reúne orientaciones generales sobre un tema o proceso; el protocolo define una ruta para actuar en una situación específica; y el criterio establece reglas o aspectos que deben revisarse antes de comunicar.")

    p.mb-4 Como se analiza en el esquema, cada uno de estos lineamientos cumple una función específica dentro de la comunicación institucional. A continuación, se describe el propósito de cada uno:

    .row.align-items-center.mb-4
      .col-lg-8.mb-4.mb-lg-0.order-2.order-lg-1
        LineaTiempoD.color-acento-botones
          p.mb-0(numero="1" titulo="Manual") Orienta cómo se debe escribir las comunicaciones oficiales, cómo usar el lenguaje institucional, cómo publicar la información en los canales digitales o cómo aplicar lenguaje claro en documentos dirigidos a la ciudadanía.
          p.mb-0(numero="2" titulo="Protocolo") Ayuda a saber qué hacer en una situación específica. Por ejemplo, cómo atender una solicitud ciudadana, cómo responder una petición, cómo orientar a una persona que no comprende un trámite o cómo entregar información por los diferentes canales comunicativos (presencial, telefónico o virtual).
          p.mb-0(numero="3" titulo="Criterios institucionales") Funcionan como una guía de revisión. Permiten saber si el mensaje está completo, si el mensaje es claro, si la información responde a las necesidades de la ciudadanía, si el canal es adecuado y si se cumple con los lineamientos de la entidad.
      .col-lg-4.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/temas/t7/img6.png" alt="")

    .row.justify-content-center.mb-0
      .col-lg-10
        .cajon.color-primario.p-4
          p.mb-0 Cuando estos lineamientos se aplican de la manera correcta, la comunicación pública deja de ser solo una obligación formal y se convierte en una herramienta para facilitar el acceso ciudadano. Por eso, antes de divulgar una información, conviene revisar si el mensaje cumple con la normativa, responder al contexto ciudadano y usar un lenguaje claro, comprensible e inclusivo.
</template>

<script>
export default { name: 'Tema7' }
</script>

<style lang="sass"></style>
