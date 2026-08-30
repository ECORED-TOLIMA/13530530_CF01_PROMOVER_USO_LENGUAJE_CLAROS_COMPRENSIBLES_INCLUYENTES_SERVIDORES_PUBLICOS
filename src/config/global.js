export default {
  global: {
    Name: 'Comunicación pública y acceso ciudadano',
    Description:
      'En este componente formativo se estudiará la comunicación pública y la ciudadana, resaltando los objetivos, alcances y enfoques según los tipos de información, abordando usos de tecnicismos, barreras lingüísticas, relaciones de poder y garantías de derecho; integrando el uso de lenguajes claros, comprensibles e inclusivos, contexto ciudadano y comunicativo, información pública, normatividad vigente y lineamientos institucionales.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Comunicación pública y ciudadana',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Comunicación pública: conceptos, características y tipos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Comunicación ciudadana: concepto, objetivo, alcance y enfoque',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo:
              'Tipos de información en la comunicación pública y ciudadana',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Lenguajes claros, comprensibles e inclusivos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Lenguajes claros: conceptos, características y principios',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Lenguaje comprensible: concepto, características, claridad y coherencia',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Lenguaje inclusivo: concepto, características y tipos',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Relaciones de poder',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Características, tipos, Estado y ciudadanía',
            hash: 't_3_1',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Garantías de derechos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Fundamentos, mecanismos y normatividad',
            hash: 't_4_1',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Contexto ciudadano y comunicativo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo:
              'Características, condiciones sociales y culturales',
            hash: 't_5_1',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Información pública',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Características de la información pública',
            hash: 't_6_1',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Lineamientos institucionales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Manuales, protocolos y criterios institucionales',
            hash: 't_7_1',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Metodologías en documentos elaborados y publicados',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '8.1',
            titulo: 'Metodología en documentos nuevos',
            hash: 't_8_1',
          },
          { numero: '8.2', titulo: 'Entrevista estructurada', hash: 't_8_2' },
          {
            numero: '8.3',
            titulo: 'Semáforo de la comprensión',
            hash: 't_8_3',
          },
          {
            numero: '8.4',
            titulo: 'Laboratorio de simplicidad',
            hash: 't_8_4',
          },
          {
            numero: '8.5',
            titulo:
              'Consideraciones de escritura en lenguajes claros, comprensibles e incluyentes',
            hash: 't_8_5',
          },
          {
            numero: '8.6',
            titulo:
              'Guía de lenguajes claros, comprensibles e incluyentes (SENA)',
            hash: 't_8_6',
          },
        ],
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
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/13530530_CF01_CFA_DU.zip',
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
  glosario: [
    {
      termino: 'Acceso ciudadano',
      significado:
        'Posibilidad de encontrar, comprender y usar información pública para ejercer derechos.',
    },
    {
      termino: 'Barreras lingüísticas',
      significado:
        'Obstáculos del lenguaje que dificultan la comprensión de un mensaje institucional.',
    },
    {
      termino: 'Comunicación ciudadana',
      significado:
        'Interacción que permite a la ciudadanía comprender, responder y usar información pública.',
    },
    {
      termino: 'Comunicación pública',
      significado:
        'Proceso mediante el cual el Estado informa, orienta y dialoga con la ciudadanía.',
    },
    {
      termino: 'Contexto ciudadano',
      significado:
        'Condiciones sociales, culturales y comunicativas que influyen en la comprensión ciudadana.',
    },
    {
      termino: 'Derecho de petición',
      significado:
        'Mecanismo para solicitar información o respuesta respetuosa ante una entidad pública.',
    },
    {
      termino: 'Garantía de derechos',
      significado:
        'Condiciones que permiten conocer, ejercer, reclamar y proteger los derechos ciudadanos.',
    },
    {
      termino: 'Información pública',
      significado:
        'Información producida, administrada o conservada por entidades públicas para la ciudadanía.',
    },
    {
      termino: 'Lineamientos institucionales',
      significado:
        'Manuales, protocolos y criterios que orientan la comunicación de una entidad.',
    },
    {
      termino: 'Normatividad vigente',
      significado:
        'Conjunto de normas aplicables a la información pública y comunicación institucional.',
    },
    {
      termino: 'Relaciones de poder',
      significado:
        'Formas en que el Estado influye en el acceso ciudadano a la información.',
    },
    {
      termino: 'Tecnicismos',
      significado:
        'Palabras especializadas que pueden dificultar la comprensión si no se explican.',
    },
  ],
  referencias: [
    {
      referencia:
        'Alcaldía Mayor de Bogotá. (2019). Guía de lenguaje claro e incluyente del Distrito Capital.',
      link: 'https://secretariageneral.gov.co/sites/default/files/2023-03/guia-de-lenguaje-claro-incluyente-del-distrito-capital.pdf',
    },
    {
      referencia:
        'Banco de la República. (s.f.). Guía para la orientación en el uso de lenguaje inclusivo: #DiversidadEInclusiónBanrep.',
      link: 'https://www.banrep.gov.co/sites/default/files/publicaciones/archivos/guia-lenguaje-inclusivo-br.pdf',
    },
    {
      referencia:
        'Calero Álvarez, C. & Torres Rojas, I. V. (2023). El lenguaje sencillo en las decisiones judiciales.',
      link: 'https://repositorio.uceva.edu.co/bitstream/handle/20.500.12993/4125/TG-00034541.pdf?sequence=1',
    },
    {
      referencia:
        'Departamento Administrativo de la Función Pública. (2022). Guía para la realización de talleres de lenguaje claro para servidores públicos.',
      link: 'https://www.bomberosbogota.gov.co/sites/default/files/Documentacion/ServicioCiudadano/Gui%CC%81a%20de%20lenguaje%20claro.pdf',
    },
    {
      referencia:
        'Departamento Nacional de Planeación. (2015). Guía de lenguaje claro para servidores públicos de Colombia.',
      link: 'https://colaboracion.dnp.gov.co/CDT/Programa%20Nacional%20del%20Servicio%20al%20Ciudadano/GUIA%20DEL%20LENGUAJE%20CLARO.pdf',
    },
    {
      referencia:
        'Departamento Nacional de Planeación. (2025). Lenguaje claro para la apertura democrática: Guía práctica de comunicación.',
      link: 'https://colaboracion.dnp.gov.co/CDT/Gobierno_DDHH_Paz/Gob_Asuntos_Internacionales/Innovacion/Guia_Lenguaje_Claro_2025.pdf',
    },
    {
      referencia:
        'Meza Ruiz, L. M. (2024). Gerencia pública: el impacto del lenguaje claro para una ciudadanía activa. Journal of Gender, Diversity & Society, 2(1), 21-28.',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=10095289&orden=0&info=link',
    },
    {
      referencia:
        'Ministerio de Educación Nacional. (2025). Guía de buenas prácticas en lenguaje claro e incluyente para el relacionamiento con la ciudadanía.',
      link: 'https://www.mineducacion.gov.co/1780/articles-423521_recurso_3.pdf',
    },
    {
      referencia:
        'Netherlands Institute for Multiparty Democracy (NIMD). (2020). Transparencia y acceso a la información pública.',
      link: 'https://colombia.nimd.org/wp-content/uploads/2020/12/Cartilla-de-transparencia-FINAL-BAJA-05_11_2020.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez ',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Jhacesiz Mary Hincapié',
          cargo: 'Experta temática',
          centro: 'Centro Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Adriana María Bustamante',
          cargo: 'Experta temática',
          centro: 'Centro Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Erika Alejandra Parra',
          cargo: 'Experta temática',
          centro: 'Centro Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Hugo Armando López',
          cargo: 'Experto temátic0',
          centro: 'Centro Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz ',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'José Jaime Luis Tang Pinzón',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Veimar Celis Melendez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor multimedia',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
