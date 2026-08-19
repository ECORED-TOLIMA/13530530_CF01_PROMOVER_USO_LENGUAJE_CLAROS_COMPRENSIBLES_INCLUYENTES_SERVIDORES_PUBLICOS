<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.align-items-center.justify-content-center.mb-4
      .col-lg-4.col-8.mb-4.mb-lg-0
        figure.h-100
          img(
            src="@/assets/curso/temas/intro/img1.png"
            alt="Grupo de personas consultando información mediante dispositivos móviles durante una reunión"
          )
      .col-lg-8
        p Las comunicaciones públicas y ciudadanas cumplen una función esencial en la relación entre el Estado y la ciudadanía, ya que permiten que las personas ejerzan su derecho a acceder, conocer y comprender la información institucional. Sin embargo, este propósito no siempre se cumple cuando los mensajes son extensos, desordenados o poco relacionados con el contexto de la ciudadanía. Estas situaciones generan brechas comunicativas por el uso de tecnicismos, expresiones ambiguas y estructuras poco claras, creando barreras lingüísticas que dificultan la comprensión y limitan el acceso efectivo a la información pública.
        .cajon.color-primario.p-4.mt-4
          p.mb-0 En este componente se abordan los conceptos, las características, los tipos y los principios de la comunicación pública y ciudadana. Asimismo, se destacan el lenguaje claro, comprensible e inclusivo, las relaciones de poder y la garantía de derechos como elementos fundamentales para fortalecer la comunicación institucional, facilitar la comprensión de la información pública y reducir las barreras lingüísticas. De esta manera, se busca que el aprendiz identifique cómo la forma de comunicar puede acercar o alejar a la ciudadanía del ejercicio de sus derechos.

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require_src('@/assets/curso/temas/intro/intro-2.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El desarrollo de este componente permite comprender cómo el contexto social, cultural y comunicativo influye en la manera en que las personas reciben, interpretan y utilizan la información pública. A partir de esta comprensión, se orienta el diseño de estrategias comunicativas, el uso de mensajes claros, la aplicación de lineamientos institucionales y el cumplimiento de la normatividad vigente, con el fin de fortalecer una comunicación pública más accesible, pertinente y orientada al servicio de la ciudadanía.

    p.mb-4 Por lo anterior y para comprender la importancia del contenido y los temas abordados, se recomienda acceder al siguiente video:

    .row.justify-content-center.align-items-center
      .col-lg-12
        figure
          .video
            iframe(width="1331" height="749" src="https://www.youtube.com/embed/SbWetL0EeH0" title="Public Communication and Citizen Access" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
</template>

<script>
export default { name: 'Introduccion' }
</script>
