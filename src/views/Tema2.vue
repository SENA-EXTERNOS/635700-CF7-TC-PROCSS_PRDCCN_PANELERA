<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Adecuación del producto 

    .row.justify-content-center.mb-5 
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema2/c1.png')    
      .col-lg-7 
        p.mb-5 En el mercado, existen diversos materiales de almacenamiento, ideales para empacar la panela. Suelen ser plásticos termoencogibles, transparentes y resistentes, que permiten sellar al vacío; también están las láminas de aluminio plastificado, de larga duración, que preservan por tiempos prolongados el producto, evitando la modificación del mismo, sin alterar las propiedades organolépticas. 
          br
          br
          |La panela de estructura en bloque, se puede envasar en sacos, cajas de cartón y empaques plásticos moldeables. Para evitar la absorción de humedad, se sugiere conservar en cartón, dado que aísla de manera efectiva, el producto, de las condiciones adversas ambientales y, además, es un material reciclable.
          .cajon.color-acento-contenido.p-4.mb-4(style="background-color: #ecf3dd")
            p.mb-0 Cuando el alimento viene pulverizado, debe empacarse en bolsas de polipropileno biorientado. Lo anterior debe ser considerado, dado que la panela es un producto con propiedades que varían con la temperatura y la humedad, es decir, tiene cualidades higroscópicas, lo que significa que tiene la capacidad de absorber o perder humedad por exposición al entorno.
    
    p.mb-5 Para garantizar la inocuidad y la vida útil de la panela se hacen las siguientes recomendaciones:  


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-11
        h3.text-center.mb-5 Adecuación del producto

        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema2/img-2.svg')
          .tarjeta.color-secundario.p-5.fnd-4(x="7.2%" y="92%" numero="1")
            p.text-center Usar un empaque que identifique el producto. 
          .tarjeta.color-secundario.p-5.fnd-4(x="24.3%" y="8%" numero="2")
            p.text-center Utilizar un material resistente como el polipropileno biorientado o laminado. 
          .tarjeta.color-secundario.p-5.fnd-4(x="41.6%" y="92%" numero="3")
            p.text-center Imprimir el logotipo directamente en la bolsa. 
          .tarjeta.color-secundario.p-5.fnd-4(x="58.3%" y="8%" numero="4")
            p.text-center Especificar la cantidad: una libra, un kilo, etc. 
          .tarjeta.color-secundario.p-5.fnd-4(x="76%" y="92%" numero="5")
            p.text-center El empaque debe llevar la siguiente información: nombre completo del producto, ingredientes, marca o logo comercial, datos y ubicación del trapiche, número de lote o fecha de producción, condiciones de conservación y declaración del contenido neto.  
          .tarjeta.color-secundario.p-5.fnd-4(x="92.9%" y="8%" numero="6")
            p.text-center Si el producto es destinado para exportación, el rotulo debe ajustarse a las exigencias del país que lo compra.  

    br
    br
    ul.lista-ul--color
      li
        i.fas.fa-leaf(style="color: #e2872c")
        h4 Manejo de plagas

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p Los trapiches o microempresas productoras de la panela, deben tener condiciones óptimas para la manipulación en los diferentes aspectos, dado a la exigencia de las normas que son de obligatorio cumplimiento y son exigidas para garantizar la fabricación de productos inocuos para el cliente y de este modo se puedan consumir sin presentar ningún tipo de riesgo a la salud. El cumplimiento de las buenas prácticas de manufactura, beneficia las actividades de los operarios y trabajadores de este sector, logrando una producción segura, minimizando la contingencia de artículos defectuosos tanto en composición y apariencia. 
        p Las condiciones normativas además de prologar la calidad del alimento, también permite la reducción de amenaza microbiológica y control de plagas, según lo ordenado en el decreto 1500 del 2007 “todo procedimiento que un establecimiento lleva a cabo diariamente, antes y durante las operaciones para prevenir la contaminación directa del alimento”. 
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema2/img-3.png')  

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-acento-botones.fnd-6.p-4.mb-4
          p La panela es considerada como un endulzante artesanal, proveniente de la caña de azúcar (Saccharum ofcinarum), este es transformado en trapiches como una actividad económica, la cual debe tener el cumplimiento de los requisitos sanitarios para la elaboración y el cumplimento de acuerdo con las condiciones que exigen en materia de infraestructura (las instalaciones, áreas de procesos y sanitarias). Esto es cobijado ante resoluciones del Ministerio de la Protección Social como la ley 4121 del 2011 “requisitos para la producción y comercialización de la panela en el territorio nacional”, (Gallego, 2020). 
    ul.lista-ul--color
      li
        i.fas.fa-leaf(style="color: #e2872c")
        h4 Riesgos biológicos, químicos y físicos, de contaminación
    p Algunos riesgos biológicos, químicos y físicos que pueden dañar el producto panelero, son:  

    SlyderF.mb-5.row(columnas="col-lg-6 col-xl-4").slyder-100
      .tarjeta.fnd-51.tarjeta-avatar1
        .row.justify-content-center.mb-3
          .col-8
            img.img-150.img-t(src='@/assets/curso/temas/tema2/img-4.svg' alt='AvatarTop')
        p.text-center.px-4 Dependiendo de la humedad relativa y la temperatura, dentro de los productos biológicos se pueden presentar reacciones químicas metabólicas donde aparece la degradación enzimática o microbiológica, por lo general este tipo de transformaciones son efectuadas en los sitios de almacenamiento de la panela, gracias a las condiciones ambientales del lugar que contiene el producto.  
      .tarjeta.p-4.fnd-51.tarjeta-avatar1
        .row.justify-content-center.mb-3
          .col-8
            img.img-150.img-t(src='@/assets/curso/temas/tema2/img-5.svg' alt='AvatarTop')
        p.text-center.px-4 Cabe resaltar que si la panela como producto final contiene entre un 7 % y 10% de humedad, se hará necesario transportarla, distribuirla y consumirla con rapidez, puesto que si se prolonga en el tiempo de almacenamiento la calidad se verá afectada por el deterioro. 
      .tarjeta.p-3.fnd-51.tarjeta-avatar1
        .row.justify-content-center.mb-3
          .col-8
            img.img-150.img-t(src='@/assets/curso/temas/tema2/img-6.svg' alt='AvatarTop')
        p.text-center.px-4 Si la humedad relativa supera el 10%, las características del producto pueden cambiar, presentando en la superficie gotas brillantes de melaza; por eso, la recomendación es de no almacenar ya que puede presentar un alto riesgo de invasión microbiológica y alteraciones fisicoquímicas en el producto.  	
      .tarjeta.p-4.fnd-51.tarjeta-avatar1
        .row.justify-content-center.mb-3
          .col-8
            img.img-150.img-t(src='@/assets/curso/temas/tema2/img-7.svg' alt='AvatarTop')
        p.text-center.px-4 También se recomienda mantener el alimento alejado de las plagas.  	
      .tarjeta.p-4.fnd-51.tarjeta-avatar1
        .row.justify-content-center.mb-3
          .col-8
            img.img-150.img-t(src='@/assets/curso/temas/tema2/img-8.svg' alt='AvatarTop')
        p.text-center.px-4 Es de acotar que la humedad no sólo afecta este artículo, dado que cuando la panela tiene azucares reductores en alta densidad y contenidos mínimos de sacarosa también puede presentar alteraciones. 	

    ul.lista-ul--color
      li
        i.fas.fa-leaf(style="color: #e2872c")
        h4  Agua en los procesos paneleros

    .row.justify-content-center.mb-5 
        .col-lg-10
          .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img-9.png')})`}"
            )
            .bloque-texto-g__texto.p-4
              p El agua es un compuesto con características únicas, de gran valor para la vida. Este recurso natural es el más abundante en el planeta y determinante en los procesos físicos, químicos y biológicos que existe en el entorno. 
              <br>
              <br>
              p Es una sustancia que se compone por dos átomos de hidrógeno y un átomo de oxígeno (H2O) se encuentra en estado sólido (hielo), gaseoso (vapor) y líquido, las propiedades físicas y químicas del agua son indispensables para la supervivencia de los ecosistemas, (Sánchez, 2021).      

    p.mb-5 A continuación, se presentan algunas recomendaciones y problemáticas del uso del agua en los procesos de producción de panela:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        AcordionA.color-acento-contenido.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          .row(titulo="Evacuación de desechos por agua")
            p Para este aspecto se debe tener presente el mandato técnico para la producción, dado que en la mayoría de las veces se convierte en una dificultad para la sociedad, ya que afecta no solo al gremio, sino también a la comunidad en general, pues no se evacua correctamente los desechos ocasionados por el uso del agua en los trapiches. 
          .row(titulo="Higienización de ambientes y equipos")
            p Todo esto converge en la utilización recurso hídrico, cabe resaltar que para los procesos paneleros se requiere agua potable y en cantidades abundantes, al igual que para el lavado constante de los equipos, entre otras etapas de fabricación.  
          .row(titulo="Riegos e hidratación de cultivos")
            p No se puede descuidar la eliminación de los residuos que se generan al momento de la elaboración, pues la mayoría de los sedimentos terminan en las quebradas, charcos o lagos cercanos, desconociendo que se requiere para hidratar los cultivos de caña durante el tiempo de siembra y riego constante en la cosecha. 
          .row(titulo="Pérdida de afluentes naturales y deterioro de ecosistemas")
            p Los problemas ocasionados por la deforestación, especialmente en lugares donde nacen los ríos, ha ocasionado el deterioro no solo de los ecosistemas, también acarrea problemas para los que deben recurrir a aguas lluvia, dado que las quebradas, ríos o riachuelos cada vez son más escasos. 
          .row(titulo="Protección del ambiente y acciones sostenibles")
            p La industria panelera debe velar por el cuidado ambiental, contando con acciones que velen por el cuidado del agua, donde los ríos sigan su curso y los lagos o lagunas permanezcan libres de sedimentos paneleros y preserven el caudal y cantidad, también se debe evitar la deforestación de zonas próximas a los trapiches. La concientización de la población debe ser constante a través de actividades permanentes sobre la protección de la naturaleza, especialmente los recursos hídricos, dado las consecuencias que trae para los procesos de tecnificación, además de multas económicas.

      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema2/img-10.png') 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tarjeta.color-secundario.p-3.mb-5.px-5.fnd-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema1/img-11.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0  Se recomienda hacer clic en el siguiente enlace para complementar los saberes relacionados con el manejo ambiental en los trapiches paneleros.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="('https://www.youtube.com/watch?v=ZpT5MWCAD9I')" target="_blank")
                    span Enlace
                    i.fas.fa-link    


    ul.lista-ul--color
      li
        i.fas.fa-leaf(style="color: #e2872c")
        h4  Normativa de salud y seguridad en el trabajo
    p.mb-5(data-aos='fade-right') El sector de producción de panela, como cualquier otro sector productivo, debe establecer acciones que aseguren la gestión de la salud y la seguridad en el trabajo. Como es de suponer, es la normativa vigente la que regula y orienta tales procesos y ofrece mecanismos de aplicación.
      br
      br
      |Profundice en los aspectos clave de la normativa de salud y seguridad en el trabajo del sector panelero, que se exponen en el siguiente video:

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/-iVjLYm6k34" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)



    p.mb-5(data-aos='fade-right') Conozca y asimile algunos conceptos y términos relacionados con la normativa de salud y seguridad en el trabajo. Estos, le favorecerán su apropiación de acciones aplicables en dicha gestión:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12.fnd-1.tarjeta.p-5(style="background-color: #ecfffc ")
        SlyderA(tipo='b')
          .row
            .col-md-8.mb-4.mb-md-0.px-5
              h3 Prevención de riesgos laborales en el trapiche panelero
              p Los trapiches paneleros son empresas que brindan opción de trabajo a las familias colombianas, estas ofertas van desde la siembra y cosecha de la caña de azúcar, hasta la producción de la panela, todo esto es gracias al proceso de transformación del jugo de la caña en derivados, que constituyen alimentos básicos para los hogares y también para mover la economía de la región y del país. Las actividades que conducen a la fabricación de tal comestible, conllevan situaciones de riesgo para la salud humana y la integridad física, dado a la exposición  a herramientas cortopunzantes, animales, fuego, elevadas temperaturas, vapores, entre otros factores para que las personas realicen las labores de forma adecuada; por ello es necesario que cada uno cuente con las condiciones necesarias para preservar la salud e integridad mientras trabajan, porque sin salud no hay trabajo, sin trabajo no hay producción y sin producción no hay ingresos (Cundinamarca, 2016).  
              p Por tal razón, es de obligatorio que los encargados de los trapiches tomen conciencia de ofrecer las condiciones mínimas, para la amparar la seguridad, la salud y la vida, custodiando que se apliquen las medidas y recomendaciones para lograrlo y así evitar enfermedades y accidentes, garantizando la producción, el bienestar de los productores, trabajadores y las familias. 
              p Dentro de los conceptos para tener en cuenta están: 
            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema2/img-14.png')
          .row
            .col-md-8.mb-4.mb-md-0.px-5
              h3 Salud laboral u ocupacional 
              p Hace referencia al bienestar del empleado, además busca protegerlo de posibles accidentes durante la ejecución de las labores cotidianas. Las tácticas se encaminan en propagar el trabajo seguro y sano para, contando con ambientes óptimos y un excelente lugar de convivencia, donde prevalezca la tranquilidad física, mental y social de los trabajadores, lo que se traduce en mejor desempeño y satisfacción, respaldando el perfeccionamiento y el mantenimiento de las capacidades de las personas. 
              p Dentro de los objetivos de la salud ocupacional, también se menciona el derecho al sano esparcimiento de los trabajadores, donde la economía y el tiempo en familia contribuyan al desarrollo sostenible y personal y de esta manera promover el enriquecimiento humano y profesional, (R. Franco et al., 2007) (Lizarazo et al., 2011). 
            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema2/img-15.png')
          .row
            .col-md-8.mb-4.mb-md-0.px-5
              h3 Sistema general de riesgos laborales 
              p Se define como el conjunto de entidades públicas y privadas, que cuentan con una serie de normas y procedimientos, orientados a prevenir, proteger y atender los requerimientos de los trabajadores y los posibles efectos de las enfermedades que puedan provocar sus labores y minimizar los accidentes que puedan ocurrir dependiendo de la labor, (Ministerio de Salud y Protección, 2019). 
            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema2/img-16.png')
          .row
            .col-md-8.mb-4.mb-md-0.px-5
              h3 Factores de riesgo 
              p Se comprende como el conjunto de procesos y técnicas que permiten afrontar la incertidumbre sobre posibles situaciones que puedan afectar la salud de una persona o población, buscando reducir los riesgos o mantener la protección para los trabajadores con niveles aceptables de seguridad laboral. El enfoque de los factores de riesgo se combina simultáneamente de la siguiente manera: 
              ol.lista-ol--cuadro
                li 
                  .lista-ol--cuadro__vineta.mor
                    span a
                  | Medidas preventivas enfocadas a anticiparse a la exposición de peligros, a través de elementos de protección o factores que sean modificables para evitar que ocurra la enfermedad.
                li 
                  .lista-ol--cuadro__vineta.mor
                    span b
                  | Medidas mitigables que modifican los efectos de la enfermedad evitando complicaciones (secuelas, discapacidad, incapacidad y muerte) costos para el SGSSS, el paciente y su familia; posibles eventos adversos derivados de la atención médica, afectación de la imagen pública y probales sanciones legales, (Gómez, 2006), 
            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema2/img-17.png')
          .row
            .col-md-8.mb-4.mb-md-0.px-5
              h3 Elementos de protección personal (EPP)  
              p Son todos los equipos, aparatos o dispositivos que tiene como función principal proteger las diferentes partes del cuerpo de peligros específicos, de accidentes de trabajo o enfermedades laborales (Salud, 2021). 
            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema2/img-18.png')
          .row
            .col-md-8.mb-4.mb-md-0.px-5
              h3 Accidentes de trabajo 
              p Según la Ley 1562 de 2012, Artículo 3: define el accidente de trabajo como todo aquel suceso repentino que acontezca por causa u ocasión desfavorable durante la realización de la actividad laboral y origine en el trabajador una lesión orgánica, una perturbación funcional o psiquiátrica, invalidez o incluso la muerte. 
              p También se considera accidente de trabajo aquella acción fortuita que pueda ocurrir durante la ejecución de órdenes del contratante sobre los mismos, o mientras la ejecución de una labor bajo la autoridad del empleador donde se incluyen las horas laborales o extras dentro o fuera del lugar trabajo. 
              p Igualmente, se considera accidente, los casos fortuitos donde se vea afectada la integridad o salud del trabajador, incluso durante el traslado desde el lugar de residencia hasta el sitio de trabajo o viceversa, si el medio de transporte es suministrado por la empresa (Compañía de Seguros, 2013).
            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema2/img-19.png')
          .row
            .col-md-8.mb-4.mb-md-0.px-5
              h3 Enfermedad laboral 
              p Es definida como aquella que es contraída a causa de la suma de exposiciones a factores de riesgo inherentes a la actividad laboral o medio de trabajo en el que se desempeña (Aristizábal, 2013). 
            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema2/img-20.png')
    ul.lista-ul--color
      li
        i.fas.fa-leaf(style="color: #e2872c")
        h4 Riesgos laborales 
    .row.justify-content-center.mb-5
      .col-lg-2: img(src='@/assets/curso/temas/tema2/c2.svg', alt='')
      .col-lg-10 
        p También denominados riesgos ocupacionales, trata de aquellas posibilidades de sufrir alguna afectación de orden físico, psicológico, emocional y de salud en general, que se experimentan en el entorno de trabajo, o en actividades directamente relacionadas con el mismo.
          br
          br
          |A continuación, se enuncian algunos riesgos que se pueden detectar en los trapiches paneleros: 



    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
      .row(titulo="Riesgos físicos")
        .col-lg-8
          p.mb-5  Determinados como aquellos factores ambientales, de naturaleza física que pueden provocar efectos negativos en la salud, causados por ruido, vibraciones, iluminación y temperaturas altas de acuerdo con la intensidad o el tiempo de exposición. En el siguiente cuadro se describen los que se generan en los trapiches paneleros: 

          .tabla-a.color-secundario.mb-5 
            table.fnd-4-
              thead
                tr
                  th.text-center Tipo de riesgo 
                  th.text-center Origen 
                  th.text-center Efectos en la salud 
              tbody
                tr
                  td.text-center Ruido
                  td.text-center Motor del trapiche 
                  td.text-center Disminución de la concentración <br>Mal humor <br>Lesiones auditivas 
                tr
                  td.text-center Iluminación
                  td.text-center Áreas de trabajo
                  td.text-center Lesiones ópticas <br>Cansancio visual <br>Dolor de cabeza 

                tr
                  td.text-center Altas temperaturas
                  td.text-center Horno <br>Área de evaporación <br>Zona de moldeo 
                  td.text-center Agotamiento físico <br>Bajo rendimiento <br>Deshidratación <br>Disminución de la concentración <br>Quemaduras  
             

        .col-lg-4
          figure
            img.img-315(src='@/assets/curso/temas/tema2/img-21.svg')
      .row(titulo="¿Cómo prevenir los riesgos físicos?")
        .col-lg-8
          p Para prevenir los riesgos anteriores el trabajador puede usar los siguientes elementos:  
          ul.lista-ul--color.narr
            li.mb-0 
              i.fas.fa-angle-right
              | Protectores personales (auditivos –tapa oídos). 
            li.mb-0 
              i.fas.fa-angle-right
              | Iluminación según el ambiente laboral.
            li.mb-0 
              i.fas.fa-angle-right
              | Elementos de protección personal. 
            li.mb-0 
              i.fas.fa-angle-right
              | Camisa manga larga tres cuartos.
            li.mb-0 
              i.fas.fa-angle-right
              | Pantalones de tela resistentes tipo jeans.
            li.mb-0 
              i.fas.fa-angle-right
              | Botas de caucho o zapato cerrado. 
            li.mb-0 
              i.fas.fa-angle-right
              | Cofia o gorra. 
            li.mb-0 
              i.fas.fa-angle-right
              | Tapabocas.   
          <br>
          p En las instalaciones se debe realizar:
          ul.lista-ul--color.narr
            li.mb-0 
              i.fas.fa-angle-right
              | Señalización obligatoria del uso de elementos de protección personal. 
            li.mb-0 
              i.fas.fa-angle-right
              | Adecuaciones en la infraestructura para mejorar las condiciones de iluminación. 
            li.mb-0 
              i.fas.fa-angle-right
              | Señalética.                 
        .col-lg-4
          figure
            img.img-315(src='@/assets/curso/temas/tema2/img-22.svg')
      .row(titulo="Peligros químicos ")
        .col-lg-8
          p.mb-5 Son todos aquellos elementos y sustancias que, al entrar en contacto con el trabajador, bien sea por inhalación, absorción o ingestión, causado por gases, vapores y humos que puedan provocar intoxicación y quemaduras, según el nivel de concentración y el tiempo de exposición. 


          .tabla-a.color-secundario.mb-5 
            table.fnd-4-
              thead
                tr
                  th.text-center Tipo de riesgo 
                  th.text-center Origen 
                  th.text-center Efectos en la salud 
              tbody
                tr
                  td.text-center(rowspan='2') Contaminación con agroquímicos y productos pecuarios

                  td.text-center Herbicidas 
                    | Plaguicidas<br> 
                    | Fertilizantes <br>
                    | Productos pecuarios <br>
                  td.text-center Irritación o alergias en piel y ojos <br>
                    | Tos seca <br>
                    | Mareo <br>
                    | Desmayo <br>
                    | Intoxicación<br> 
                    | Vómito <br>
                    | Diarrea <br>
                    | Escalofríos<br>
                tr

                    
                  td.text-center Combustible <br> Polvos <br>Gases  
                  td.text-center Intoxicación <br>Quemaduras <br>Incendios y explosiones                    
        .col-lg-4
          figure
            img.img-315(src='@/assets/curso/temas/tema2/img-23.svg')
      .row(titulo="¿Cómo prevenir riesgos químicos?")
        .col-lg-8
          p Para prevenir los riesgos anteriores el trabajador puede seguir las recomendaciones que se disponen a continuación:
          ul.lista-ul--color.narr
            li.mb-0 
              i.fas.fa-angle-right
              | Leer las etiquetas, identificar el grado de toxicidad y seguir las instrucciones de uso del producto. 
            li.mb-0 
              i.fas.fa-angle-right
              | Usar correctamente los elementos de protección personal. 
            li.mb-0 
              i.fas.fa-angle-right
              | Camisa de manga larga. 
            li.mb-0 
              i.fas.fa-angle-right
              | Pantalón de tela resistente. 
            li.mb-0 
              i.fas.fa-angle-right
              | Botas de caucho.  
            li.mb-0 
              i.fas.fa-angle-right
              | Máscara respiratoria.  
            li.mb-0 
              i.fas.fa-angle-right
              | Guantes de material grueso.
          p Se debe realizar: 
          ul.lista-ul--color.narr
            li.mb-0 
              i.fas.fa-angle-right
              | Una adecuada manipulación de los combustibles.  
            li.mb-0 
              i.fas.fa-angle-right
              | Señales de prevención.        
          p En las instalaciones se debe realizar:     
          ul.lista-ul--color.narr
            li.mb-0 
              i.fas.fa-angle-right
              | Almacenar los productos agroquímicos en un lugar fijo y protegido y debidamente identificados.  
            li.mb-0 
              i.fas.fa-angle-right
              | Disponer en lugares adecuados los envases, lejos del contacto humano.  
            li.mb-0 
              i.fas.fa-angle-right
              | Señalización de peligro de riesgo químico.  
            li.mb-0 
              i.fas.fa-angle-right
              | Mantener el extintor en un lugar de fácil acceso.  
            li.mb-0 
              i.fas.fa-angle-right
              | Demarcación gráfica de peligro por presencia de combustible.                            
        .col-lg-4
          figure
            img.img-315(src='@/assets/curso/temas/tema2/img-24.svg')
      .row(titulo="Peligros biológicos")
        .col-lg-8
          p.mb-5 Es la presencia o exposición de agentes vivos como animales, vegetales y microorganismos capaces de originar una amenaza a la salud humana, causando cualquier tipo de infección, o provocando algún tipo de alergia o toxicidad. 


          .tabla-a.color-secundario.mb-5 
            table.fnd-4-
              thead
                tr
                  th.text-center Tipo de riesgo 
                  th.text-center Origen 
                  th.text-center Efectos en la salud 
              tbody
                tr
                  td.text-center Causado por microorganismos 

                  td.text-center Hongos, bacterias y virus presentes en aguas sin tratar y fermentadas <br><br> Esporas presentes en el bagazo 

                  td.text-center Malestar general<br>Náuseas<br>Vómito <br>Diarrea<br>Hepatitis<br>Bagazosis <br>Intoxicación 
                tr
                  td.text-center Originado por animales 
                  td.text-center Roedores e insectos (arañas, hormigas, avispas)<br> <br> Animales domésticos 
                  td.text-center Infecciones<br>Hemorragias<br>Dolor de cabeza<br>Alergias<br>Picaduras, ronchas<br>Enfermedades transmitidas por animales      
        .col-lg-4
          figure
            img.img-315(src='@/assets/curso/temas/tema2/img-25.svg')
      .row(titulo="¿Cómo prevenir riesgos biológicos?")
        .col-lg-8
          p Para prevenir los riesgos anteriores el trabajador puede:  
          ul.lista-ul--color.narr
            li.mb-0 
              i.fas.fa-angle-right
              | Consumir agua potable y bebidas frescas no fermentadas.  
            li.mb-0 
              i.fas.fa-angle-right
              | Lavarse adecuada y frecuentemente las manos.  
            li.mb-0 
              i.fas.fa-angle-right
              | Cubrir heridas, lesiones y/o afectaciones en la piel.  
            li.mb-0 
              i.fas.fa-angle-right
              | Utilizar protector respiratorio – tapabocas.  
            li.mb-0 
              i.fas.fa-angle-right
              | Usar elementos de protección personal: botas de caucho y/o zapatos cerrados.          
          p En las instalaciones se debe tomar las siguientes medidas en materia de señalización:  
          ul.lista-ul--color.narr
            li.mb-0 
              i.fas.fa-angle-right
              | Prohibido aplica para evitar el consumo de alimentos, bebidas embriagantes y cigarrillos durante la producción.  
            li.mb-0 
              i.fas.fa-angle-right
              | Identificación del botiquín.  
            li.mb-0 
              i.fas.fa-angle-right
              | Obligación para uso de elemento de protección personal.  
            li.mb-0 
              i.fas.fa-angle-right
              | Prohibido aplica para el ingreso de animales a la zona de trabajo.  
            li.mb-0 
              i.fas.fa-angle-right
              | Uso obligatorio de elementos de protección personal.         
          p Adecuación de infraestructura:                     
          ul.lista-ul--color.narr
            li.mb-0 
              i.fas.fa-angle-right
              | Cerramientos para evitar ingresos a zonas de trabajo.  
            li.mb-0 
              i.fas.fa-angle-right
              | Control de plagas y roedores.  
            li.mb-0 
              i.fas.fa-angle-right
              | Limpieza y desinfección frecuente en áreas de trabajo.         
        .col-lg-4
          figure
            img.img-315(src='@/assets/curso/temas/tema2/img-26.svg')
      .row(titulo="Peligros mecánicos")
        .col-lg-8
          p Conjunto de factores físicos que pueden ocasionar una lesión o un accidente de trabajo por la acción mecánica de elementos presentes en equipos, máquinas, herramienta, por falta de mantenimiento preventivo o correctivo, carencia de guardas de seguridad en partes móviles y fijas. 
        .col-lg-4
          figure
            img.img-315(src='@/assets/curso/temas/tema2/img-27.svg')
      .row(titulo="Peligros biomecánicos")
        .col-lg-8
          p Involucra todas aquellas situaciones que tienen que ver con la adecuación del lugar o elementos de trabajo a la fisonomía humana.  
          p Representan factor de peligro los objetos, puesto de trabajo, máquinas, equipos y herramientas cuyo peso, tamaño, forma y diseño puedan provocar sobre esfuerzos, así como posturas y movimientos inadecuados que traen como consecuencia fatiga y lesiones osteomusculares. 
        .col-lg-4
          figure
            img.img-315(src='@/assets/curso/temas/tema2/img-28.svg')
      .row(titulo="Peligros de condiciones de seguridad ")
        .col-lg-8
          p Se le atribuyen factores de riesgo de tipo físico, por inadecuadas condiciones en infraestructura, superficies y lugares de trabajo, principales causantes de accidentes en el trabajo. 
        .col-lg-4
          figure
            img.img-315(src='@/assets/curso/temas/tema2/img-29.svg')




    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-acento-botones.fnd-6.p-4.mb-4
          p Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.



</template>

<script>
export default {
  name: 'Tema2',
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
.acordion__activo
  background-color: #f0fcd4
.acordion__accion__btn--a
  background-color: $color-acento-contenido
</style>
