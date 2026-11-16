const processes = {
  puestos: {
    number: "01",
    title: "Análisis y diseño de puestos",
    summary: "Comprender el trabajo antes de buscar a la persona que lo realizará.",
    objective: "Identificar las tareas, responsabilidades, competencias y condiciones de cada cargo para favorecer un ajuste saludable entre la persona, el puesto y la organización.",
    importance: "Un cargo claramente definido orienta la selección, la capacitación, la evaluación del desempeño y la prevención de riesgos. También reduce la ambigüedad de rol y facilita que el colaborador comprenda qué se espera de su trabajo.",
    functions: [
      "Recopilar información mediante entrevistas, observación y cuestionarios.",
      "Analizar tareas, responsabilidades, exigencias cognitivas y condiciones del entorno.",
      "Elaborar o actualizar perfiles y descripciones de cargo.",
      "Identificar competencias técnicas y comportamentales.",
      "Recomendar ajustes que favorezcan la seguridad, la autonomía y el bienestar."
    ],
    example: "Una empresa presenta rotación en el área de servicio al cliente. El psicólogo analiza el puesto, encuentra funciones contradictorias y una carga emocional no contemplada. Con esta información actualiza el perfil, propone pausas de recuperación y redefine responsabilidades.",
    indicator: "Perfiles actualizados, claridad de rol y correspondencia entre exigencias y competencias."
  },
  seleccion: {
    number: "02",
    title: "Reclutamiento, selección e inducción",
    summary: "Vincular personas de manera justa, válida y coherente con el cargo.",
    objective: "Atraer, evaluar y acompañar candidatos con criterios pertinentes, transparentes e inclusivos, facilitando posteriormente su adaptación a la organización.",
    importance: "Una selección responsable no busca a una persona perfecta, sino una correspondencia razonable entre las competencias, las expectativas, el cargo y el contexto organizacional.",
    functions: [
      "Definir criterios de evaluación a partir del perfil del cargo.",
      "Diseñar convocatorias claras e inclusivas.",
      "Realizar entrevistas y aplicar instrumentos psicológicos pertinentes.",
      "Integrar la información y elaborar informes comprensibles para la decisión.",
      "Diseñar la inducción y acompañar la adaptación inicial del colaborador."
    ],
    example: "Para cubrir una vacante de coordinación, el psicólogo combina entrevista por competencias, ejercicio situacional y revisión de experiencia. Informa a los candidatos sobre el proceso y diseña una inducción con metas claras para los primeros noventa días.",
    indicator: "Calidad de la vinculación, adaptación inicial, permanencia y percepción de equidad."
  },
  desarrollo: {
    number: "03",
    title: "Capacitación y desarrollo",
    summary: "Convertir las necesidades de aprendizaje en oportunidades de crecimiento.",
    objective: "Fortalecer conocimientos, habilidades y competencias relevantes para el desempeño actual y el desarrollo futuro de los colaboradores.",
    importance: "La formación contribuye al aprendizaje organizacional cuando parte de necesidades reales, incluye oportunidades de aplicación y evalúa cambios en el trabajo, no solo asistencia a cursos.",
    functions: [
      "Diagnosticar necesidades de aprendizaje individuales y colectivas.",
      "Diseñar programas de capacitación con objetivos observables.",
      "Seleccionar metodologías acordes con la población y el contexto.",
      "Acompañar planes de carrera, mentoría y desarrollo del liderazgo.",
      "Evaluar aprendizaje, transferencia al puesto e impacto organizacional."
    ],
    example: "Tras detectar dificultades de comunicación entre líderes y equipos, el psicólogo diseña un programa con casos reales, práctica de retroalimentación y seguimiento. Tres meses después evalúa cambios mediante entrevistas e indicadores de clima.",
    indicator: "Aprendizaje demostrado, aplicación en el puesto y oportunidades de desarrollo."
  },
  desempeno: {
    number: "04",
    title: "Evaluación y gestión del desempeño",
    summary: "Evaluar para aprender, reconocer y mejorar, no solo para controlar.",
    objective: "Valorar el cumplimiento de responsabilidades y competencias, generar retroalimentación útil y acordar acciones de mejora y desarrollo.",
    importance: "La gestión del desempeño conecta las metas organizacionales con el trabajo cotidiano. Requiere criterios conocidos, evidencia suficiente y conversaciones respetuosas.",
    functions: [
      "Construir indicadores y criterios relacionados con las funciones del cargo.",
      "Diseñar instrumentos y orientar a evaluadores y evaluados.",
      "Analizar resultados evitando interpretaciones sesgadas.",
      "Facilitar conversaciones de retroalimentación constructiva.",
      "Proponer planes de mejoramiento, reconocimiento y desarrollo."
    ],
    example: "Una organización reemplaza una evaluación anual punitiva por conversaciones trimestrales. El psicólogo capacita a los líderes, crea guías de retroalimentación y revisa que las metas sean alcanzables y comprensibles.",
    indicator: "Claridad de metas, calidad de la retroalimentación y cumplimiento de planes de mejora."
  },
  cultura: {
    number: "05",
    title: "Clima, cultura y comunicación",
    summary: "Escuchar cómo se vive la organización y transformar esa experiencia.",
    objective: "Comprender las percepciones, valores, prácticas y relaciones que influyen en la experiencia de trabajo, para fortalecer la confianza y la cooperación.",
    importance: "El clima expresa cómo perciben las personas su ambiente laboral; la cultura reúne significados y prácticas compartidas. Ambos orientan el comportamiento y la forma de afrontar los cambios.",
    functions: [
      "Diseñar diagnósticos mediante encuestas, entrevistas y grupos focales.",
      "Analizar patrones de liderazgo, comunicación y relaciones de trabajo.",
      "Socializar resultados de manera clara y responsable.",
      "Facilitar acuerdos, espacios de participación y manejo de conflictos.",
      "Acompañar planes de intervención y evaluar sus avances."
    ],
    example: "Un diagnóstico muestra baja confianza entre áreas. El psicólogo complementa la encuesta con grupos focales, identifica barreras de comunicación y facilita acuerdos de servicio entre equipos con seguimiento mensual.",
    indicator: "Confianza, participación, cooperación, sentido de pertenencia y comunicación."
  },
  bienestar: {
    number: "06",
    title: "Bienestar y riesgos psicosociales",
    summary: "Cuidar la salud desde las condiciones reales en las que se trabaja.",
    objective: "Identificar, prevenir e intervenir factores laborales que pueden afectar la salud psicológica, promoviendo condiciones de trabajo dignas y sostenibles.",
    importance: "El bienestar no depende únicamente de actividades recreativas. También requiere revisar cargas, jornadas, autonomía, apoyo social, liderazgo, reconocimiento y posibilidades de recuperación.",
    functions: [
      "Evaluar factores de riesgo y factores protectores del trabajo.",
      "Analizar cargas, jornadas, relaciones y situaciones de acoso.",
      "Diseñar acciones preventivas individuales, grupales y organizacionales.",
      "Orientar rutas de atención y remisión cuando sea necesario.",
      "Evaluar si las intervenciones mejoran las condiciones y la calidad de vida."
    ],
    example: "Ante el aumento del agotamiento, el psicólogo no se limita a un taller de manejo del estrés. Analiza la carga, los horarios y el apoyo de los líderes; luego propone redistribución de tareas, pausas y seguimiento de los factores de riesgo.",
    indicator: "Reducción de factores de riesgo, apoyo percibido, recuperación y calidad de vida laboral."
  }
};

const processOrder = ["puestos", "seleccion", "desarrollo", "desempeno", "cultura", "bienestar"];
const processFiles = {
  puestos: "analisis-puestos.html",
  seleccion: "seleccion.html",
  desarrollo: "capacitacion.html",
  desempeno: "desempeno.html",
  cultura: "clima-cultura.html",
  bienestar: "bienestar.html"
};

function renderProcess() {
  const key = document.body.dataset.process;
  if (!key || !processes[key]) return;
  const item = processes[key];
  document.title = `${item.title} | Conexión Organizacional`;
  document.querySelector("[data-number]").textContent = `Proceso ${item.number}`;
  document.querySelector("[data-title]").textContent = item.title;
  document.querySelector("[data-summary]").textContent = item.summary;
  document.querySelector("[data-objective]").textContent = item.objective;
  document.querySelector("[data-importance]").textContent = item.importance;
  document.querySelector("[data-indicator]").textContent = item.indicator;
  document.querySelector("[data-functions]").innerHTML = item.functions.map(fn => `<li>${fn}</li>`).join("");
  document.querySelector("[data-example]").textContent = item.example;

  const index = processOrder.indexOf(key);
  const previous = processOrder[(index - 1 + processOrder.length) % processOrder.length];
  const next = processOrder[(index + 1) % processOrder.length];
  const previousLink = document.querySelector("[data-previous]");
  const nextLink = document.querySelector("[data-next]");
  previousLink.href = processFiles[previous];
  previousLink.textContent = `← ${processes[previous].title}`;
  nextLink.href = processFiles[next];
  nextLink.textContent = `${processes[next].title} →`;
}

renderProcess();

