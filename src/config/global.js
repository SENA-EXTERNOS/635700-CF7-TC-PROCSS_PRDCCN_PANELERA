export default {
  global: {
    componenteFormativo: 'Protocolo de empaques',
    descripcionCurso:
      'El objetivo de los procesos industriales, es el de aumentar la producción de insumos y lograr que los niveles del producto presenten alta calidad. Todo esto es posible cumpliendo a cabalidad la normatividad, donde se controlan las variables. La fabricación de panela no es ajena a lo descrito y se deberán tener, entonces, las precauciones justas y suficientes en su elaboración, especialmente en las fases de moldeado y empacado, que deben efectuarse bajo los estándares de calidad. ',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal-.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-1-.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/banner-principal-decorativo-2-.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Batido',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Adecuación del producto',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Ordoñez, R. (2013). Modelamiento de un sistema de evaporación de múltiple efecto. <em>Revista Tecnura</em>, 17(35), p. 47. ',
      link:
        'https://go.gale.com/ps/i.do?id=GALE%7CA327815835&sid=googleScholar&v=2.1&it=r&linkaccess=abs&issn=0123921X&p=IFME&sw=w&userGroupName=anon%7E9c967f6b ',
    },
    {
      referencia:
        'Aristizábal, J. (2013). <em>La enfermedad laboral en Colombia.</em> ',
      link:
        'https://fasecolda.com/cms/wp-content/uploads/2019/08/enfermedad-laboral-colombia-2013.pdf',
    },
    {
      referencia:
        'Ramírez, K. & Rojas, C. (2017). <em>Cartilla normas de seguridad y salud en el trabajo.</em> ',
      link:
        'https://repository.udistrital.edu.co/bitstream/handle/11349/6128/RamirezKarenRojasCarolina2017Anexo3.pdf;jsessionid=6FA19BC50DF067E6E82F12954E08FC81?sequence=14 ',
    },
    {
      referencia:
        'Fiestas, K. (2015). <em>Diseño de una línea de producción de panela granulada.</em> ',
      link:
        'https://www.coursehero.com/file/56716491/diseno-de-una-linea-de-produccion-de-panela-granuladapdf/',
    },
    {
      referencia:
        'Gallego, A. (2020). <em>Criterios de implementación ISO 22000: 2018 / ISO 9001: 2015 caso estudio sector lácteo.</em> ',
      link:
        'https://repository.unad.edu.co/bitstream/handle/10596/37730/garodriguezn.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Centro Latinoamericano para el Desarrollo Rural (2005), <em>Producción y comercialización de panela: La experiencia de la Asociación Cooperativa de Paneleros de el Salvador (Acopanela).</em> ',
      link:
        'https://www.rimisp.org/wp-content/files_mf/1365015776caso6acopanela1.pdf ',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social (2019). <em>Dirección de regulación de la operación del aseguramiento en salud, riesgos laborales y pensiones.</em> MINSALUD.',
      link: 'https://is.gd/p2ngwX',
    },
    {
      referencia:
        'Sánchez, L. (2021). <em>Gestión integral de los elementos de protección personal (EPP).</em> ',
      link:
        'https://www.minsalud.gov.co/Ministerio/Institucional/Procesos%20y%20procedimientos/GTHS02.pdf ',
    },
    {
      referencia: 'Sánchez, F. (2001). <em>El agua.</em> IDEAM',
      link: 'http://hdl.handle.net/20.500.12324/18771',
    },
    {
      referencia:
        'Tejeda, A. (2018. <em>La humedad en la atmósfera: Bases físicas, instrumentos y aplicaciones.</em> ',
      link:
        'http://ww.ucol.mx/content/publicacionesenlinea/adjuntos/La-humedad-en-la-atmosfera_466.pdf ',
    },
  ],
  glosario: [
    {
      termino: 'Agua',
      significado:
        'Es un compuesto con características únicas, de gran valor para la vida. Este recurso natural es el más abundante en el planeta y determinante en los procesos físicos, químicos y biológicos que existe en el entorno.<br>Al utilizarse en el trapiche debe ser de calidad potable o fácil de higienizar, para el almacenamiento del recurso hídrico se debe tener acceso a tanques de almacenamiento, el cual se debe limpiar y desinfectar con frecuencia.',
    },
    {
      termino: 'Batido',
      significado:
        'Es la fase que, una vez obtenido el punto, la miel pasa a bateas de madera, acero inoxidable, aluminio e inclusive bronce, en donde se revuelve mediante un utensilio largo de madera, en forma manual contra las paredes de la batea con el fin de disminuir la humedad, enfriarla y evitar que se queme.',
    },
    {
      termino: 'Higroscópico',
      significado:
        'Es una propiedad que poseen los materiales granulares, que depende de la porosidad del elemento y está definida como la capacidad para absorber o ceder la humedad del ambiente que lo rodea como respuesta a las condiciones de temperatura y humedad relativa (HR) -. Esta característica puede ser considerada una desventaja de cara a su uso comercial al afectar a las propiedades físicas, mecánicas y biológicas de la panela.',
    },
    {
      termino: 'Humedad relativa',
      significado:
        'A diferencia de la absoluta o de la específica, no estipula el contenido de vapor de agua por unidad de masa o volumen, simplemente indica el porcentaje de vapor disuelto en un volumen de aire debido al vapor necesario para saturarlo; o bien, indica el cociente entre la presión de vapor y de saturación. Si ese cociente fuera de 0.22 se diría que la humedad relativa es de 22%.',
    },
    {
      termino: 'Inocuidad',
      significado:
        'Puede definirse como el conjunto de condiciones y medidas necesarias durante la producción, almacenamiento, distribución y preparación de alimentos para asegurar que una vez ingeridos, no representen un riesgo para la salud.',
    },
    {
      termino: 'Panela',
      significado:
        'Consiste en una fuente inmediata de energía puesto que su principal ingrediente es el jugo de la caña de azúcar, una sustancia que el organismo metaboliza fácilmente. La producción de este alimento es una de las más tradicionales en la agroindustria en Colombia, ocupa el segundo puesto a nivel mundial, después de la India y el primer puesto en términos de consumo por habitante ya que en el país se consume en promedio 23 Kg de panela por persona de forma anual.',
    },
    {
      termino: 'Peligro',
      significado:
        'La palabra proviene del latín “pericŭlum” y se refiere a una situación en la que existe amenaza o a una circunstancia en que puede ocurrir una adversidad o un contratiempo.<br> Es una condición o característica propia de los agentes o situaciones que pueden causar un efecto adverso, una lesión, una enfermedad o daño en ciertas condiciones.',
    },
    {
      termino: 'Peligro biomecánico',
      significado:
        'Conjunto de factores físicos que pueden ocasionar una lesión o un accidente de trabajo por la acción mecánica de elementos presentes en equipos, máquinas, herramienta, por falta de mantenimiento preventivo o correctivo, carencia de guardas de seguridad en partes móviles y fijas.',
    },
    {
      termino: 'Riesgo',
      significado:
        'El término proviene del griego, de “rhizikon”, que significa raíz, piedra o suelo. La palabra en general es muy utilizada en contextos técnicos con diferentes significados, lo que lleva a malas interpretaciones. Se ha utilizado en ámbitos de negocios y economía. Por ejemplo, se habla del riesgo de que cierre una empresa, del riesgo país, del riesgo de no pagar un préstamo, etc.<br> La definición ampliamente aceptada en términos de la salud se refiere a la probabilidad de ocurrencia de un efecto adverso para la salud humana como resultado de la exposición (contacto) a un peligro proveniente de una sustancia química, de un agente físico o biológico. También esta definición es aplicable a provocar alteraciones en el ambiente y en este caso desde el punto de vista ambiental. El riesgo a diferencia del peligro tiene que ver con la “probabilidad de que se produzca una alteración o daño cuando hay exposición (o contacto) a un agente peligroso”.',
    },
    {
      termino: 'Seguridad y salud',
      significado:
        'La Seguridad y Salud en el trabajo (SST), es una disciplina que se encarga de la prevención de las lesiones y enfermedades causadas por las condiciones de trabajo, y la protección y promoción de la salud de los trabajadores.',
    },
  ],
  complementario: [
    {
      tema: 'Batido',
      referencia:
        'Coco Loco TV. (2019). <em>Panela Cómo se hace la panela, proceso de elaboración de la panela</em> [video] YouTube.  ',
      tipo: 'Vídeo',
      link: 'https://www.youtube.com/watch?v=hAXZC8y3fpg',
    },
    {
      tema: 'Batido',
      referencia:
        'El ProductorTV. (2021). <em>Como hacer panela - paso a paso</em> [video] YouTube.  ',
      tipo: 'Vídeo',
      link: 'https://www.youtube.com/watch?v=ipJp_2EHeEg',
    },
    {
      tema: 'Adecuación del producto',
      referencia:
        'Naranjal Tv. (2020). <em>Proceso de Elaboración de la Panela- en Naranjal</em> [video] YouTube.',
      tipo: 'Vídeo',
      link: 'https://www.youtube.com/watch?v=PtCLI7AGGrg',
    },
    {
      tema: 'Adecuación del producto',
      referencia:
        'TvAgro. (2015). <em>Cómo se fabrica panela en un trapiche- TvAgro por Juan Gonzalo Ángel</em> [video] YouTube.   ',
      tipo: 'Vídeo',
      link: 'https://www.youtube.com/watch?v=H1iEHhdPRk0',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Nombre 1', 'Nombre 2'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
