<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.mb-5 
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.bl-izq
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/img-intro.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p Apreciado aprendiz, bienvenido a este componente formativo, donde se podrá apropiar de los conceptos y acciones inherentes al protocolo de empaque en la producción panelera. Afiance sus saberes y habilidades en todo lo relacionado con envolturas, conservación, contaminación y riesgos, normatividad, entre otras.
              br
              br
              |Adquiera más y mejores conocimientos que podrá aplicar en diferentes campos como el sector académico, productivo e investigativo.
    p.mb-5(data-aos='fade-right') En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo:
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/SYZeQ6WzT78" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video
    



</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
