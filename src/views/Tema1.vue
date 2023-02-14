<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Batido

    .row.justify-content-center.mb-5 
        .col-lg-10
          .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-1.png')})`}"
            )
            .bloque-texto-g__texto.p-4
              p Antes de llevar a cabo el batido, se busca obtener el punto de la miel; se trata de aquel punto que sea apto para lograr convertirla en panela. Esta técnica se denomina punteo y está determinada por una temperatura específica donde se consiguen las características de consistencia, color y densidad, requeridas en la miel, para la producción del alimento. Esta temperatura de punteo se encuentra en un rango de 120 °C a 130 °C.
    
    p.mb-5 Estos son algunos aspectos importantes y/o pasos para realizar el proceso de punteo:  

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12.fnd-1.tarjeta.p-5(style="background-color: #ecfffc")
        SlyderA(tipo='b')
          .row
            .col-md-6.mb-4.mb-md-0.px-5
              h4 Obtención
              p La panela es el producto que se obtiene de la extracción del jugo de la caña de azúcar, luego de la limpieza y evaporación del agua que contiene; se ha convertido en un alimento básico, especialmente para la población rural, mientras en las ciudades capitales entra a competir con endulzantes sintéticos y bebidas artificiales debido a los factores socioeconómicos, es importante destacar que la panela fácilmente puede sustituir el azúcar refinado dado que contiene alto altos niveles de sustancias que son necesarias para el metabolismo como las vitaminas y minerales, esto gracias al proceso de elaboración que se hace de manera natural, lo que evita la pérdida de los nutrientes propios de la materia prima, (Comercio, 2012).  
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/c1.svg')
          .row
            .col-md-6.mb-4.mb-md-0.px-5
              h4 Particularidades de la producción de panela
              p Como se sabe, la tecnología para la fabricación de dicho alimento ha sido constate a través de los años, el producto final se adquiere por medio de una serie de etapas que han sido enseñadas de manera generacional, tal proceso se desarrolla desde el momento en que la caña se muele para extraer el jugo, pasando por el descachado, la evaporación del agua hasta transformarse a punto de miel, se lleva a cabo el batido y seguidamente el moldeado. Es de suma importancia saber que cuando la melaza alcanza un estado ideal, el proceso de batido se debe hacer en recipientes construidos de madera que lleva por nombre batea, este se ejecuta de forma manual con la ayuda de instrumentos llamados rema, que son esenciales para bajar la temperatura de la miel, bridarle el color, la firmeza, estabilidad y estructura requerida. El batido, se reconoce por ser un movimiento que se realiza con desplazamientos circulares y uniformes, para brindar la cristalización del azúcar proveniente de la materia prima, la cual obtiene forma de cristales con un tamaño que oscila entre 0.5 a 2 mm, (Martínez & Segovia, 2005), ((RIMISP), 2011). 
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/c2.png')
          .row
            .col-md-6.mb-4.mb-md-0.px-5
              h4 Mecanización e industrialización del proceso
              p La falta de maquinaria en los trapiches es un problema evidente que dificulta el proceso de batido de la miel, este evento se lleva a cabo de forma artesanal y manual y puede acarrear algunos problemas durante la ejecución: 1) los operarios están expuestos a vapores y a temperaturas elevadas, 2) el batidor puede fatigarse con facilidad y por lo tanto perder la concentración, por lo que se debe tener un reemplazo, 3) el batido debe ser constante y homogéneo controlando los factores para que la miel tenga el punto óptimo donde el producto final sea buen color, 4) deben evitarse las impurezas al igual que los insectos que atrae la melaza, se debe ser cuidadoso con la posible contaminación cruzada al ser una etapa que se hace al aire libre, los anteriores factores pueden bajar la productividad, (Andrés et al., 2013). 
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/c3.png') 
          .row
            .col-md-6.mb-4.mb-md-0.px-5
              h4 Batido
              p El batido es una etapa fundamental e importante, dado que es determinante para fijar el color, la consistencia y la textura del alimento, por ello se hace sumamente relevante y rigurosa. 
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/c4.svg') 
          .row
            .col-md-6.mb-4.mb-md-0.px-5
              h4 Higienización y cuidados generales
              p Los utensilios e implementos de la elaboración panelera deben ser limpiados constantemente, con un espacio de tiempo mínimo de 4 horas con agua limpia y potable, se recomienda adicionar cal al liquido con el cual se hará la limpieza para evitar la fermentación de los azúcares, disminuir los residuos orgánicos, es necesario llevar a cabo la fase en mención para mantener la vida útil y prolongada de los utensilios. Lo mismo debe ocurrir durante el batido y moldeado para así evitar contaminación cruzada y libre animales, especialmente los insectos, (Andrés et al., 2013).
            .col-md-6

              figure
                img(src='@/assets/curso/temas/tema1/c5.png') 
    ul.lista-ul--color
      li
        i.fas.fa-leaf(style="color: #e2872c")
        h4 Panela como producto final
    .row.justify-content-center.align-items-start.mb-5
      .col-lg-8
        p.mb-5 La panela es el producto final que se logra después de una serie de pasos donde se transforma el zumo de la caña de azúcar, hasta convertirlo en ese rico y nutritivo alimento de formas definidas en color, textura y dureza, que se determinan por las diversas etapas del proceso. Es considerado como un producto natural de alta pureza, libre de desechos, sustancias químicas o aditivos y microorganismos como hongos y levadura. También es reconocida por ser una fuente alta de energía pues su principal ingrediente es extraído de la caña de azúcar; es de acotar que la sacarosa es una sustancia que el organismo metaboliza fácilmente para llevar a cabo los procesos vitales; dentro de su constitución, también se encuentran vitaminas y minerales, (Amanda & Marcillo, 2002).
        .cajon.color-acento-contenido.p-4.mb-4.fnd-2 
          p Las técnicas de producción pueden ser consideradas como arte debido a la transformación habitual; sin embargo, cumple con los requerimientos tradicionales de las familias rurales y las necesidades alimentarias por el elevado consumo por habitante, ya que en promedio de 23 kg de panela se gasta al año una sola persona. dentro de la fabricación participan individuos con algún grado de consanguinidad, en la mayoría de los casos de origen campesino que son quienes brindan la mano de obra, procesamiento y consumo, (Franco D, 2011).
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema1/img-7.png') 



    p.mb-5(data-aos='fade-right') Para convertir la miel a panela se deben efectuar los siguientes pasos: 
    .tarjeta.tarjeta.p-4.mb-5(style="background-color: #ecfffc ")
      PasosB.color-acento-botones
        .row(titulo="Paso 1").px-5
          .col-md-6.mb-4.mb-md-0
            h4 Moldeo
            p Durante esta etapa se determina la forma del alimento para ello se requiere el uso de instrumentos de madera llamadas gaveras o moldes individuales, con formas diferentes que van desde rectangular, cuadrada, pre-partida o semiesférica, al igual varían los tamaños dentro de los cuales se introducen las mieles. 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/c6.png') 
        .row(titulo="Paso 2").px-5
          .col-md-6.mb-4.mb-md-0
            h4 Tiempo del moldeo
            p Este evento debe llevarse a cabo en un tiempo récord, bajando al máximo la manipulación del producto, debido al cambio de densidad de las melazas al reducir la temperatura. Al trascurrir un determinado tiempo, se pasa al desmolde con el objetivo de que termine el proceso de enfriamiento fuera de la gavera, para evitar resquebrajamientos o fisuras al momento de realizar dicho proceso. Al finalizar el batido, la panela toma el color, la textura, la densidad y la dureza requerida.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/c7.svg') 
        .row(titulo="Paso 3").px-5
          .col-md-6.mb-4.mb-md-0
            h4 Enfriamiento 
            p Al terminar el proceso de moldeo se da paso al enfriamiento con el fin de llevar el comestible a la temperatura ambiente, debe hacerse en lugares con buena ventilación garantizando una buena higiene y salubridad para el producto terminado. 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/c8.svg')  
        

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tarjeta.color-secundario.p-3.mb-5.px-5.fnd-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema1/img-11.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p Para ahondar en todo lo referente a las propiedades de la panela y los beneficios para la salud, se recomienda hacer clic en el siguiente video.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="('https://www.youtube.com/watch?v=yi866Z1roq8 ')" target="_blank")
                    span Enlace
                    i.fas.fa-link       
    ul.lista-ul--color
      li
        i.fas.fa-leaf(style="color: #e2872c")
        h4 Conservación
    p.mb-5 Como cualquier producto para el consumo humano, la panela requiere procesos y mecanismos de conservación. Eso implica pensar, además de su elaboración, en su empaque, almacenamiento y distribución.
      br
      br
      |En el siguiente esquema infográfico, se presentan algunas generalidades y recomendaciones para la conservación de la panela: 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        h3.text-center.mb-5 Conservación de la panela

        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/img-12.svg')
          .tarjeta.color-secundario.p-5.fnd-4(x="9.7%" y="8%" numero="1")
            p Al terminar el proceso de enfriamiento, continua la etapa de empaquetamiento en un sitio limpio y seco, esto depende del destino al cual será enviado el producto, dado que se debe diferenciar la de consumo propio y la de distribución en el mercado local como tiendas y supermercados o si es de tipo exportación. 
          .tarjeta.color-secundario.p-5.fnd-4(x="29.7%" y="93%" numero="2")
            p Si es para consumo propio es almacenada bajo empaques que impidan el contacto directo con el ambiente y los insectos.  
          .tarjeta.color-secundario.p-5.fnd-4(x="50%" y="8%" numero="3")
            p Para el caso de ventas locales, dependiendo de la exigencia del consumidor, puede ser envuelta en hojas de congo o platanillo, en bolsas de papel o en pares en bolsa plástica.
          .tarjeta.color-secundario.p-5.fnd-4(x="70%" y="93%" numero="4")
            p Para la venta al por mayor de la panela en todas las formas, con peso específico y tamaño, se guarda en bolsas de papel llegando a un peso de 36 kg y se sujetan con cabuya o se introduce en cajas de cartón que son selladas con un pegante preparado por los trabajadores. 
          .tarjeta.color-secundario.p-5.fnd-4(x="90%" y="8%" numero="5")
            p Este tipo de presentación es conocido como una paca de panela que se apilan y se disponen para el almacenamiento en sitios aireados, libres de humedad, de contaminantes, de insectos y animales. 


    .row.justify-content-center.align-items-start.mb-5
      .col-md-2
        figure.mb-4
          img.img-190(src='@/assets/curso/temas/tema1/img-13.svg')
      .col-md-10
        p.mb-3 Los empaques antes mencionados, son sistemas de almacenamiento, propensos al deterioro por humedad (por ejemplo, si se moja el empaque por efecto de la lluvia) o a daños mecánicos por golpes durante el transporte. Aunque los embalajes empleados cumplen con uno de los requerimientos de envoltura, no es óptimo para realizarlo con información de origen, producción y lote, ni las tablas nutricionales.
    p.mb-5(data-aos='fade-right') A continuación, se muestra la forma de conservación y empaque de la panela de exportación:

    .tarjeta.tarjeta--gris.p-4.mb-5(style="background-color:#e5f8f5")
      LineaTiempoC.color-acento-botones(text-small)
        .row(titulo="Paso 1")
          .col-md-4.mb-4.mb-md-0
            figure.mb-4
              img(src='@/assets/curso/temas/tema1/img-14.png')
          .col-md-8
            p La exportación tiene más trabajo en cuanto a la parte de empacado, esta debe ser envasada en bolsas especiales. Dado que la panela es envuelta en bolsas especiales de poliolefina, las cuales tienen una característica de adaptarse a la estructura de dicho alimento, además de brindar brillo y resaltar las características, además de ser económica, protege contra la humedad y el polvo después de ser aseguradas por la acción de la máquina selladora. 
        .row(titulo="Paso 2")
          .col-md-4.mb-4.mb-md-0
            figure.mb-4
              img(src='@/assets/curso/temas/tema1/img-15.png')
          .col-md-8
            p Una vez asegurado el producto en las bolsas, son transportas y puestas en el túnel de termo encogido donde por acción del calor el empaque se contrae o mejor se adhiere y toma la forma del artículo, de esta manera se puede ajustar ya sea cuadrada, redonda, pulverizada, entre otros. 
        .row(titulo="Paso 3")
          .col-md-4.mb-4.mb-md-0
            figure.mb-4
              img(src='@/assets/curso/temas/tema1/img-16.png')
          .col-md-8
            p Una vez, la panela es empacada con los requerimientos técnicos, debe identificarse el producto, por esa razón la rotulación es un paso obligatorio para conocer el origen, las características y los componentes. 
            p El Gobierno Nacional solicita que los productos tengan registro Invima, por ello la información debe ser específica indicando siempre los siguientes datos:
            p Nombre de quien distribuye, lugar de origen, composición química del alimento, fecha de vencimiento, teléfono, ubicación de la planta procesadora, entre otras características.  
        .row(titulo="Paso 4")
          .col-md-4.mb-4.mb-md-0
            figure.mb-4
              img(src='@/assets/curso/temas/tema1/img-17.png')
          .col-md-8
            p Finalmente, la panela empacada y rotulada de peso 125 g o 500 g, se deposita en cajas de cartón que presentan una capacidad de almacenamiento que puede llegar a 32 kg, deben estar selladas y se disponen para el acopio.  
        .row(titulo="Paso 5")
          .col-md-4.mb-4.mb-md-0
            figure.mb-4
              img(src='@/assets/curso/temas/tema1/img-18.png')
          .col-md-8
            p Se debe tener presente que una vez empacada y embalada en las cajas se expone a las condiciones ambientales como la humedad, y el material de embalaje que no se conserve de manera correcta pueden tener averías, destrucción parcial o total, otra forma que debilita la estructura del empaque (bolsa), que protege el producto es el contacto entre ellos, esto permite la separación de las panelas, la ruptura y la exposición directa al ambiente.   
        .row(titulo="Paso 6")
          .col-md-4.mb-4.mb-md-0
            figure.mb-4
              img(src='@/assets/curso/temas/tema1/img-19.png')
          .col-md-8
            p Este alimento se almacena en habitaciones cerradas a temperatura ambiente hasta el momento que requiera ser trasportada para la comercialización, debe ser soportada por estructuras limpias de madera. Los almacenes donde se deposita el producto, tienen que construirse con paredes, pisos y techos levantados en materiales resistentes, de fácil limpieza y que permita el acceso a todos los sitios para la desinfección, también se recomiendan acabados en obra blanca que eviten la acumulación de polvo y suciedad.       
        .row(titulo="Paso 7")
          .col-md-4.mb-4.mb-md-0
            figure.mb-4
              img(src='@/assets/curso/temas/tema1/c3.png')
          .col-md-8
            p Se recomienda tener en cuenta tres factores que afectan la calidad del producto final:
              ul.lista-ul--color.nar
                li.mb-0 
                  i.fas.fa-circle
                  | Grado de higroscopicidad del producto.            
                li.mb-0 
                  i.fas.fa-circle
                  | Temperatura del cuarto de almacenamiento.            
                li.mb-0 
                  i.fas.fa-circle.text-small
                  | Humedad relativa del ambiente.
    p.mb-5(data-aos='fade-right') Las siguientes recomendaciones son esenciales para preservar la vida útil de la panela. 
    .row.justify-content-center.mb-5
      .col-lg-4.col-6.mb-lg-0.mb-3: img(src='@/assets/curso/cc.png', alt='')
      .col-lg-8 
        .tarjeta.bg-lista.p-5
          PasosB.color-acento-botones
            div(titulo="")
              ul.lista-ul--color
                li
                  i.fas.fa-angle-right(style='color: #e2872c')
                  | Cada sitio del trapiche debe tener una entrada de aire para ventilar toda el área, al igual que el ingreso de luz para iluminar cada zona, estos aspectos son claves para conservar el producto óptimo y velar por la integridad de los trabajadores.
                li
                  i.fas.fa-angle-right(style='color: #e2872c')
                  | Garantizar el bienestar de los operarios.
                li
                  i.fas.fa-angle-right(style='color: #e2872c')
                  | Usar anjeos en la construcción.
                li
                  i.fas.fa-angle-right(style='color: #e2872c')
                  | Mejorar las condiciones sanitarias de cada fase del trapiche.
                li
                  i.fas.fa-angle-right(style='color: #e2872c')
                  | Propender por el aseo, salubridad y el orden de lugar de acopio.
            div(titulo="")
              ul.lista-ul--color
                li
                  i.fas.fa-angle-right(style='color: #e2872c')
                  | Reducir y evitar la entrada de animales, especialmente de insectos y personas ajenas a la etapa, disminuyendo las posibilidades de contaminación cruzada del producto y evitar la pérdida del mismo.
                li
                  i.fas.fa-angle-right(style='color: #e2872c')
                  | Mejorar la calidad de la panela.
                li
                  i.fas.fa-angle-right(style='color: #e2872c')
                  | Los elementos tóxicos contaminantes están prohibidos en los sitios de almacenamiento.
                li
                  i.fas.fa-angle-right(style='color: #e2872c')
                  | Evitar el uso de insecticidas, puede ser perjudiciales para la salud.
                li
                  i.fas.fa-angle-right(style='color: #e2872c')
                  | La mano de obra calificada debe acatar las actividades propuestas para ellos.
            div(titulo="")
              ul.lista-ul--color
                li
                  i.fas.fa-angle-right(style='color: #e2872c')
                  | Lavar los equipos y materiales mínimo cada cuatro horas.
                li
                  i.fas.fa-angle-right(style='color: #e2872c')
                  | Los trabajadores del trapiche deben cumplir con las normas higiénicas.
                li
                  i.fas.fa-angle-right(style='color: #e2872c')
                  | Capacitación constante para los operarios.
                li
                  i.fas.fa-angle-right(style='color: #e2872c')
                  | No almacenar mieles del ingenio en el espacio de depósito.
                li
                  i.fas.fa-angle-right(style='color: #e2872c')
                  | No guardar melazas de otros trapiches en el sitio de acopio.
                li
                  i.fas.fa-angle-right(style='color: #e2872c')
                  | No tener azúcares o edulcorantes en la bodega donde está el producto final.
                li
                  i.fas.fa-angle-right(style='color: #e2872c')
                  | No archivar blanqueadores y colorantes en el lugar de almacenamiento.



</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
  data: () => ({
    // variables de vue
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

<style lang="sass">
.bg-lista
  background-image: url(../assets/curso/bg-lista.svg)
  background-size: cover
  background-repeat: no-repeat
  background-position: center
.pasos-b__header__btn--right, .pasos-b__header__btn--left
  background-color: #e2872c !important
</style>
