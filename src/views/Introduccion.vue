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
            p Apreciado aprendiz, bienvenido a este componente formativo donde podrá actualizar sus conocimientos sobre el sistema de gestión, con la inclusión de material relacionado con los requerimientos para el diseño e implementación de un sistema de gestión en una organización determinada; a través de los contenidos disponibles, se pueden identificar los componentes del ciclo PHVA (Planear, Hacer, Verificar, Actuar), así como, también, elementos y herramientas necesarios para la implementación efectiva de un sistema de gestión, garantizando la pertinencia del mismo, de acuerdo con las características y necesidades de la organización.

    
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
