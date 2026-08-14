<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    #Actividad
    ActividadController(:cuestionario="cuestionario")
</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: { ActividadController },
  data: () => ({
    cuestionario: {
      tema: 'Comunicación pública y acceso ciudadano',
      titulo: 'Cuestionario',
      introduccion:
        '\u003cb\u003eObjetivo:\u003c/b\u003e validar la apropiación de conceptos sobre comunicación pública y lenguaje claro, comprensible e inclusivo; para reducir brechas comunicativas.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es la función principal de la comunicación pública y ciudadana en la relación Estado-ciudadanía?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Promover únicamente la venta de servicios y publicidad comercial de la entidad pública.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Servir como un puente para que comprendas la información e interactúes con el Estado.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Reemplazar los procesos judiciales y administrativos oficiales entre instituciones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Garantizar que solo los servidores públicos entiendan los reglamentos vigentes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Identificó que la comunicación actúa como un puente que conecta a la entidad con las ciudadanías para facilitar sus derechos.',
          mensaje_incorrecto:
            'La comunicación pública y ciudadana busca conectar a las instituciones con las personas para facilitar la toma de decisiones.',
        },
        {
          id: 2,
          texto:
            '¿En cuál de los siguientes principios se fundamenta la comunicación pública institucional?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El interés general y el carácter de universalidad sin discriminación alguna.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'La rentabilidad económica y el beneficio exclusivo de directivos públicos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El uso restringido de la información únicamente para grupos especializados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La persuasión comercial mediante técnicas de mercadeo institucional masivo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente elección! Reconoció que la comunicación pública se orienta al interés general y debe ser accesible de forma universal.',
          mensaje_incorrecto:
            'La comunicación pública se rige por el interés general, la transparencia y la universalidad.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es la dirección predominante de la comunicación ciudadana en el control social?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Descendente, desde los directivos hacia el personal subordinado únicamente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Ascendente u horizontal, desde las personas y comunidades hacia el Estado.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Exclusivamente corporativa, orientada hacia los proveedores institucionales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Unidireccional, sin permitir retroalimentación ni preguntas de las personas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Comprendió que la comunicación ciudadana nace de las personas hacia las entidades o entre comunidades para ejercer auditoría.',
          mensaje_incorrecto:
            'La comunicación ciudadana opera de manera ascendente u horizontal para posibilitar la participación.',
        },
        {
          id: 4,
          texto:
            '¿Qué caracteriza a la información pública en comparación con la clasificada o reservada?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Requiere pago previo para su consulta por cualquier ciudadano en ventanilla.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Es de acceso universal y obligatorio bajo el principio de transparencia.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Solo puede ser leída por funcionarios públicos con cargos directivos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Permanecerá oculta por ley durante cincuenta años sin excepciones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente! La información pública es de acceso libre y obligatorio, garantizando la transparencia activa y pasiva.',
          mensaje_incorrecto:
            'La información pública es de libre acceso para toda la ciudadanía.',
        },
        {
          id: 5,
          texto:
            '¿Qué consecuencia genera el uso excesivo de tecnicismos en las piezas comunicativas institucionales?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Aumenta la velocidad de trámite en todas las ventanillas de atención.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Crea barreras lingüísticas que aíslan al ciudadano del goce de derechos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Garantiza la validez legal inmediata de todos los comunicados oficiales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Facilita la comprensión en comunidades rurales con baja escolaridad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente! Notó que el lenguaje burocrático distorsiona el mensaje y crea obstáculos lingüísticos para comprender tus trámites.',
          mensaje_incorrecto:
            'El uso desmedido de tecnicismos genera barreras que impiden el ejercicio de derechos.',
        },
        {
          id: 6,
          texto:
            '¿En qué consiste la estrategia de lenguaje claro en los documentos institucionales?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Infantilizar el lenguaje mediante el uso de expresiones coloquiales y juegos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Simplificar la estructura gramatical para entender el mensaje en primera lectura.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Eliminar por completo la normativa jurídica que sustenta los trámites.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Aumentar la extensión de las oraciones para detallar cada procedimiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! El lenguaje claro busca que comprendas la información desde la primera lectura sin perder el rigor institucional.',
          mensaje_incorrecto:
            'El lenguaje claro no infantiliza el discurso, sino que simplifica la estructura para asegurar su comprensión rápida.',
        },
        {
          id: 7,
          texto:
            '¿Qué característica define al lenguaje comprensible en una comunicación escrita u oral?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El uso exclusivo de términos en inglés o idiomas técnicos especializados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El orden lógico, la claridad, la coherencia y la pertinencia del mensaje.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'La inclusión de párrafos extensos con múltiples ideas secundarias juntas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La omisión total del objetivo principal de la solicitud comunicada.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! El lenguaje comprensible se fundamenta en estructurar ideas con orden lógico, coherencia y sin ambigüedades.',
          mensaje_incorrecto:
            'Para que un texto sea comprensible debe mantener un orden lógico, ser claro, coherente y pertinente.',
        },
        {
          id: 8,
          texto:
            '¿Cuál es la finalidad principal de utilizar un lenguaje inclusivo en la gestión pública?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Reconocer y valorar la diversidad humana evitando expresiones discriminatorias.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Hacer los textos institucionales más extensos y difíciles de interpretar.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Reemplazar los nombres de las instituciones por siglas técnicas complejas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Restringir la información a grupos sociales específicos de la población.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Así es! El lenguaje inclusivo promueve el respeto, visibiliza la diversidad y evita perpetuar estereotipos o exclusiones.',
          mensaje_incorrecto:
            'El lenguaje inclusivo busca visibilizar a todas las personas de forma digna y libre de discriminación.',
        },
        {
          id: 9,
          texto:
            '¿Por qué existe una relación de poder entre la entidad pública y la ciudadanía?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Porque la ciudadanía posee mayor control técnico de los sistemas del Estado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Porque la entidad administra información, normas y trámites que afectan personas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Porque el Estado no tiene autoridad para establecer ningún tipo de procedimiento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Porque los servidores públicos eligen a los usuarios de los servicios de salud.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente! Identificó que poseer y administrar la información institucional genera una asimetría que exige alta responsabilidad.',
          mensaje_incorrecto:
            'La entidad pública maneja normas y procesos que impactan a las personas, generando una asimetría de información.',
        },
        {
          id: 10,
          texto:
            '¿Qué tipo de poder ejerce una entidad cuando define procedimientos, tiempos y canales?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Poder informativo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Poder administrativo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Poder simbólico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Poder participativo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente! El poder administrativo se manifiesta al establecer requisitos, plazos y canales de atención oficial.',
          mensaje_incorrecto:
            'Definir procedimientos y canales corresponde al poder administrativo.',
        },
        {
          id: 11,
          texto:
            '¿Cómo se relaciona la entrega de información clara con la garantía de derechos?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Permite que las personas conozcan, reclamen y ejerzan sus derechos efectivamente.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Aumenta la cantidad de sanciones pecuniarias contra los ciudadanos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Impide que los usuarios puedan presentar peticiones o quejas oficiales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Elimina la obligación institucional de responder derechos de petición.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Si comprendes la información pública, cuentas con las herramientas para ejercer, reclamar y proteger tus derechos.',
          mensaje_incorrecto:
            'Comprender la información pública es la condición previa para que puedas acceder a tus derechos fundamentales.',
        },
        {
          id: 12,
          texto:
            '¿Qué norma colombiana regula el Derecho de Acceso a la Información Pública Nacional?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ley 100 de 1993.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ley 1712 de 2014.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Código Nacional de Tránsito.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Circular 100-001 de 2010.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Exacto! La Ley 1712 de 2014 regula la transparencia y el libre acceso a la información pública en el país.',
          mensaje_incorrecto:
            'La Ley 1712 de 2014 es la norma marco sobre transparencia y acceso a la información en Colombia.',
        },
        {
          id: 13,
          texto:
            '¿Por qué es indispensable analizar el contexto ciudadano antes de comunicar?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Para modificar y cambiar el sentido de las leyes según el gusto personal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Para adecuar el mensaje a las condiciones sociales y culturales del público.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Para reducir los horarios de atención presencial de las sedes públicas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Para evitar publicar comunicados en medios y redes digitales de la entidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Analizar el contexto te permite adaptar el mensaje sin perder la sustancia, facilitando la comprensión del usuario.',
          mensaje_incorrecto:
            'El contexto ciudadano permite comprender las características del público para adaptar el lenguaje y el canal.',
        },
        {
          id: 14,
          texto:
            '¿Cuáles son los tres momentos clave en el acceso a la información pública?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Diseñar, imprimir y archivar el documento técnico.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Encontrar, comprender y usar la información pública.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Publicar, restringir y clasificar los datos de la entidad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Redactar, traducir al inglés y enviar por correo postal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! El acceso es efectivo solo si logras encontrar la información, entenderla claramente y utilizarla adecuadamente.',
          mensaje_incorrecto:
            'El proceso completo de acceso abarca tres fases: encontrar, comprender y usar la información.',
        },
        {
          id: 15,
          texto:
            '¿Qué función cumplen los lineamientos institucionales como manuales y protocolos?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Estandarizar una ruta común para comunicar con claridad y respeto.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Permitir que cada funcionario redacte según sus gustos personales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Aumentar el uso de tecnicismos legales en cada respuesta enviada.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Eliminar la atención presencial en todas las oficinas públicas del país.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente! Los lineamientos aseguran un estilo uniforme, respetuoso y comprensible en todos los canales de la entidad.',
          mensaje_incorrecto:
            'Manuales y protocolos ofrecen un marco coherente para evitar respuestas confusas o contradictorias.',
        },
        {
          id: 16,
          texto:
            '¿Cuáles son las 4 fases para la elaboración de documentos nuevos en lenguaje claro?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Investigar, sancionar, archivar y destruir.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Organizar, escribir, revisar y validar.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Imprimir, encuadernar, vender y distribuir.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Copiar, traducir, certificar y clasificar.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Así es! Las cuatro fases metodológicas garantizan que el texto esté estructurado, bien redactado, corregido y probado.',
          mensaje_incorrecto:
            'La ruta metodológica para documentos nuevos comprende: organizar, escribir, revisar y validar.',
        },
        {
          id: 17,
          texto:
            '¿Cuál es la finalidad de aplicar la metodología de entrevista estructurada?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Evaluar el desempeño laboral y sancionar a los servidores públicos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Identificar dificultades de lectura escuchando a personas destinatarias.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Contratar nuevo personal para las áreas de comunicaciones del SENA.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Aprobar el presupuesto anual de adquisición de equipos tecnológicos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La entrevista estructurada permite identificar las dificultades de comprensión de un documento a partir de la experiencia de las personas destinatarias, para realizar mejoras antes de su publicación.',
          mensaje_incorrecto:
            'Esta metodología busca identificar las dificultades de comprensión de un documento mediante las respuestas y observaciones de las personas destinatarias, con el fin de mejorar la claridad del mensaje antes de divulgarlo.',
        },
        {
          id: 18,
          texto:
            'En el semáforo de la comprensión, ¿qué representa el color rojo?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Información clara que indica con precisión las acciones a realizar.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Apartados que generan dudas y requieren una segunda lectura rápida.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Información difícil de comprender por tecnicismos o instrucciones confusas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Contenido legal que no puede ser modificado por ninguna autoridad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! El color rojo señala aquellos pasajes críticos que requieren simplificación urgente por su complejidad.',
          mensaje_incorrecto:
            'En el semáforo, el rojo advierte alta dificultad de comprensión debido al uso de lenguaje complejo.',
        },
        {
          id: 19,
          texto:
            '¿Qué caracteriza a la metodología laboratorio de simplicidad del DNP?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Es un trabajo colaborativo para transformar textos en versiones claras.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Un software automatizado que elimina documentos antiguos del sistema.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Un procedimiento sancionatorio para quienes no usen lenguaje claro.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Una prueba física para medir la velocidad de escritura de los aprendices.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente! El laboratorio reúne a servidores y usuarios para construir soluciones colaborativas sobre los documentos.',
          mensaje_incorrecto:
            'El laboratorio de simplicidad es un espacio de cocreación para reescribir textos de manera accesible.',
        },
        {
          id: 20,
          texto:
            '¿Cuál es la recomendación clave respecto a la voz narrativa en oraciones de lenguaje claro?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Utilizar preferentemente la voz pasiva para ocultar al responsable.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Emplear la voz activa para indicar claramente quién realiza la acción.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Escribir exclusivamente en tercera persona del plural y en tiempo futuro.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Evitar nombrar al ciudadano o a la entidad en todos los párrafos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La voz activa le otorga claridad directa al mensaje, identificando quién ejecuta cada paso del procedimiento.',
          mensaje_incorrecto:
            'Se recomienda priorizar la voz activa para lograr una comunicación directa e identificable.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
