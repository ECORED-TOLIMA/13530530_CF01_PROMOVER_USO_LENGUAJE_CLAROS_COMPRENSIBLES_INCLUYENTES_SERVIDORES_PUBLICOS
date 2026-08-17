<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Contexto ciudadano y comunicativo

    figure.mb-4
      img(src="@/assets/curso/temas/t5/img1.png" alt="")

    p.mb-4 La comunicación pública está ligada al contexto ciudadano; cada mensaje institucional llega a personas que viven en contextos diferentes, tienen experiencias y comprenden la información desde sus propias condiciones sociales y culturales. Por eso, antes de diseñar una estrategia de acceso a la información pública, es necesario reconocer quiénes son las personas destinatarias, qué necesitan saber, cómo acceden a la información y qué barreras pueden enfrentar al momento de comprenderla o usarla.

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(role="img" :style="{'background-image':`url(${require_src('@/assets/curso/temas/t5/img2.png')})`}")
      .bloque-texto-g__texto.p-4
        p.mb-0 El contexto ciudadano y comunicativo permite pasar de una comunicación general a una comunicación más situada. De esta manera, el mensaje no se construye únicamente desde lo que la entidad necesita informar, sino que se deben tener en cuenta las condiciones de quienes reciben la información; una misma comunicación puede ser ajustada dependiendo de a quién vaya dirigida; es decir, si se dirige a personas mayores, jóvenes, comunidades rurales, población con acceso limitado a internet, personas con discapacidad o ciudadanía sin conocimientos del lenguaje administrativo.

    .row.justify-content-center.mb-0
      .col-lg-10
        .cajon.color-primario.p-4
          p.mb-0 En este orden de ideas, reconocer el contexto no significa cambiar el contenido de la información pública, sino adecuarla de tal forma que al momento de comunicarla sea más clara, comprensible e incluyente. El mensaje institucional conserva su esencia, pero se organiza y se presenta de acuerdo con las necesidades de la ciudadanía. Así, el contexto se convierte en un criterio importante para evitar barreras comunicativas y garantizar el acceso a la información pública.

    Separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 5.1 Características, condiciones sociales y culturales

    .row.align-items-center.mb-4
      .col-md-auto.text-center.mb-4.mb-md-0.d-none.d-lg-block
        img.tema5-icono(src="@/assets/curso/temas/t5/img3.svg" alt="")
      .col
        p.mb-0 La efectividad de la comunicación pública también depende del contexto en el que las personas reciben e interpretan la información. Por ello, a continuación, se presentan de manera breve el contexto ciudadano y el contexto comunicativo, dos elementos que influyen en la comprensión de los mensajes y en la interacción entre el Estado y la ciudadanía:

    .tarjeta--container.row.mb-4
      .col-md.tarjeta.tema5-contexto--ciudadano.p-5
        .row.justify-content-center.mb-4
          .col-lg-3
            figure
              img(src="@/assets/curso/temas/t5/img4.svg" alt="")
        h5.text-center Contexto ciudadano
        p.mb-5 Se refiere al conjunto de condiciones, características, necesidades y realidades que influyen en la manera como las personas se relacionan con la información pública. De esta forma, aspectos como el lugar donde viven, el nivel de acceso a canales digitales o presenciales, el conocimiento previo sobre trámites, la familiaridad con el lenguaje institucional, la edad, la ocupación, las condiciones sociales y las formas de participación en la vida pública.
      .col-md.tarjeta.tema5-contexto--comunicativo.p-5
        .row.justify-content-center.mb-4
          .cocol-lg-3
            figure
              img(src="@/assets/curso/temas/t5/img5.svg" alt="")
        h5.text-center Contexto comunicativo
        p.mb-5 Por otro lado, se relaciona con las condiciones en que se produce, recibe y se interpreta el mensaje. En este contexto intervienen el canal utilizado, el tipo de lenguaje, el formato, la claridad del mensaje, la posibilidad de resolver dudas y la pertinencia del contenido frente a la necesidad ciudadana.

    .row.justify-content-center.mb-4
      .col-lg-10
        .cajon.color-secundario.p-4
          p.mb-0 Ambos contextos se complementan. El contexto ciudadano ayuda a reconocer a quién se dirige la información; el contexto comunicativo permite definir cómo se debe presentar la información.

    p.mb-4 Las principales características del contexto ciudadano y comunicativo son:

    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Figura 2.
      span Contexto ciudadano y comunicación

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12.d-none.d-lg-block
        figure
          img(src="@/assets/curso/temas/t5/img6.svg" alt="Figura 2 que presenta siete características del contexto ciudadano y comunicativo: diversidad de destinatarios, condiciones de acceso, nivel de comprensión, necesidad de información, pertinencia del canal, influencia cultural y oportunidad. Estas características se relacionan con la necesidad de adaptar la comunicación pública a las distintas realidades de la ciudadanía para que sea clara, accesible y útil.")
      .col-12.d-block.d-lg-none
        figure
          img(src="@/assets/curso/temas/t5/img6_1.svg" alt="Figura 2 que presenta siete características del contexto ciudadano y comunicativo: diversidad de destinatarios, condiciones de acceso, nivel de comprensión, necesidad de información, pertinencia del canal, influencia cultural y oportunidad. Estas características se relacionan con la necesidad de adaptar la comunicación pública a las distintas realidades de la ciudadanía para que sea clara, accesible y útil.")

    p.mb-4 Además de los factores relacionados con el contexto ciudadano, es necesario considerar las condiciones sociales y culturales que influyen en la forma en que las personas reciben, interpretan y utilizan la información pública. A continuación, se presentan de manera breve estas dos condiciones y su importancia para lograr una comunicación clara, pertinente e incluyente:

    .BG01.px-5.p-5.mb-4
      .bgwhite.p-4
        SlyderA(tipo="b")
          .row.align-items-center
            .col-lg-6.mb-4.mb-lg-0
              h5 Condiciones sociales
              p.mb-0 Son factores que pueden facilitar o limitar el acceso a la información pública; la ubicación geográfica, la disponibilidad de tiempo, el acceso a la tecnología, el nivel educativo, la condición económica y la responsabilidad laboral y familiar son condiciones que se deben tener en cuenta, porque una información técnicamente correcta puede no ser útil si no llega por el canal adecuado o si no responde a las necesidades reales de la ciudadanía.
            .col-lg-6
              figure
                img(src="@/assets/curso/temas/t5/img7.png" alt="")
          .row.align-items-center
            .col-lg-6.mb-4.mb-lg-0
              h5 Condiciones culturales
              p.mb-0 También influyen en la comunicación. Las personas interpretan la información desde su forma de vida, costumbres, lenguajes y experiencias comunicativas. Por este motivo, una estrategia comunicativa debe evitar suponer que todas las personas comprenden de la misma forma. Comunicar con pertinencia cultural implica usar ejemplos cercanos, evitar expresiones que generen exclusión y reconocer que la información pública debe ser cercana a la realidad de las personas que la reciben.
            .col-lg-6
              figure
                img(src="@/assets/curso/temas/t5/img8.png" alt="")

    .row.align-items-center.mb-0
      .col-md-auto.text-center.mb-4.mb-lg-0.d-none.d-lg-block
        img.tema5-icono(src="@/assets/curso/temas/t5/img9.svg" alt="")
      .col
        p.mb-0 En el contexto comunicativo un elemento importante es el #[strong canal] por donde se emite la información. La entidad puede contar con recursos como página web, redes sociales, correo electrónico, atención presencial, línea telefónica y piezas impresas; sin embargo, el canal más adecuado no siempre es el más moderno, sino el que permite que la información sea comprendida por las personas destinatarias.
</template>

<script>
export default { name: 'Tema5' }
</script>

<style lang="sass"></style>
