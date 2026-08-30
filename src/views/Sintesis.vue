<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p La comunicación pública y ciudadana es un engranaje en constante evolución que ha cambiado la interacción entre el Estado y la ciudadanía, adoptando el uso de lenguajes claros, comprensibles e inclusivos como una disciplina clave para garantizar el acceso a la información y el ejercicio efectivo de los derechos. Por medio de una estructura definida en el siguiente esquema, se articulan los principios para mitigar los riesgos que se puedan generar, como las brechas comunicativas o el uso excesivo de tecnicismos, los cuales actúan como barreras lingüísticas que dificultan la comprensión del mensaje institucional.
    p.mb-0 Estos desafíos, enmarcados en complejas relaciones de poder, han impulsado el desarrollo de mecanismos para la garantía de derechos y el reconocimiento del contexto ciudadano y comunicativo, buscando que la información sea cercana a las condiciones sociales y culturales de la población. En este sentido, la gestión de la información pública se fundamenta en la aplicación de lineamientos institucionales como por ejemplo manuales, protocolos y criterios específicos que buscan fortalecer la confianza ciudadana y asegurar que el derecho a comprender sea el pilar de un servicio público eficiente y democrático.


    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg" alt="En la síntesis se presenta un mapa conceptual que organiza los principales temas relacionados con la comunicación pública y ciudadana desde el enfoque de los lenguajes claros, comprensibles e incluyentes. Inicia con los fundamentos de la comunicación pública y ciudadana y su relación con el acceso a la información y la garantía de derechos; continúa con los elementos que favorecen una comunicación efectiva, como el lenguaje claro, las barreras lingüísticas y los tecnicismos. Posteriormente, integra el contexto ciudadano y las características de la información pública, incorpora los lineamientos institucionales que orientan la comunicación de las entidades y finaliza con las metodologías para la elaboración, revisión y evaluación de documentos institucionales dirigidos a la ciudadanía.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg" alt="")
          .anexo__texto
            p Anexo. Síntesis
</template>

<script>
export default {
  name: 'Sintesis',
  mounted() {
    this.$nextTick(() => this.$aosRefresh())
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
