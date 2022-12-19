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
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.bl-izq 
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/img-intro.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p Apreciado aprendiz, sea bienvenido a este momento de estudio orientado a desarrollar protocolos de empaque. En el próximo video se describen algunas generalidades de las envolturas, la conservación, los riesgos de contaminación y la normatividad. Aplicando todo el conocimiento a criterios propios de desempeño en diferentes campos tanto en el sector académico, investigativo y productivo.
            br
            br
            p <b>¡Muchos éxitos en este proceso de aprendizaje!</b>

    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
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
