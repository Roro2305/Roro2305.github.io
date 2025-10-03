/*!
* Start Bootstrap - Business Casual v7.0.9 (https://startbootstrap.com/theme/business-casual)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-business-casual/blob/master/LICENSE)
*/
// Highlights current date on contact page
window.addEventListener('DOMContentLoaded', event => {
    const listHoursArray = document.body.querySelectorAll('.list-hours li');
    listHoursArray[new Date().getDay()].classList.add(('today'));
})
function mostrarFormulario() {
        // Ocultar todos los formularios
        document.querySelectorAll(".formulario").forEach(f => f.style.display = "none");
        // Mostrar el formulario seleccionado
        let nivel = document.getElementById("nivel").value.toLowerCase();
        if (nivel) {
            document.getElementById(nivel).style.display = "block";
        }
    }
// Datos de Niveles Educativos
const nivelesEducativos = [
  {
    nombre: "Preprimaria",
    descripcion: "Dirigida a niños y niñas de 4 a 6 años. Este nivel busca estimular el desarrollo integral a través de juegos, actividades artísticas, música y dinámicas que fortalecen la creatividad, la motricidad fina y gruesa, así como las habilidades sociales.",
    imagen: "assets/img/preprimaria.jpg"
  },
  {
    nombre: "Primaria",
    descripcion: "Comprende seis grados, generalmente desde los 7 hasta los 12 años. Se enfoca en el aprendizaje de competencias fundamentales: lectura, escritura, matemáticas, ciencias naturales y sociales, además de la formación en valores.",
    imagen: "assets/img/primaria.jpg"
  },
  {
    nombre: "Básico",
    descripcion: "Incluye tres grados, comúnmente desde los 13 hasta los 15 años. Brinda una educación más amplia y profunda, incorporando materias como física, química, biología, inglés, tecnología y estudios sociales. Además, contamos con áreas ocupacionales, donde los estudiantes exploran y desarrollan habilidades prácticas que los preparan mejor para diversificado o para la vida laboral.",
    imagen: "assets/img/basico.jpg"
  }
];

// Datos de Carreras
const carreras = [
  {nombre: "Computación", 
    descripcion: "Carrera enfocada en la formación tecnológica. El estudiante adquiere conocimientos en programación, bases de datos, redes y desarrollo de software, además de aprender a manejar herramientas digitales modernas. Es ideal para quienes desean continuar estudios en ingeniería en sistemas o informática.", 
    imagen: "assets/img/carrera1.jpg"},
  {nombre: "Perito Contador", 
    descripcion: "Prepara profesionales en contabilidad, finanzas y auditoría. Los alumnos aprenden a elaborar estados financieros, llevar libros contables y administrar los recursos económicos de una empresa. Es una carrera con alta demanda en oficinas, bancos y negocios.", 
    imagen: "assets/img/carrera2.jpg"},
  {nombre: "Bachillerato en Ciencias y Letras", 
    descripcion: "Brinda una formación integral en matemáticas, ciencias, humanidades y comunicación. Es la base más general y versátil para quienes desean ingresar a la universidad en cualquier área de estudio.", 
    imagen: "assets/img/carrera3.jpg"},
  {nombre: "Bachillerato en Ciencias y Letras con orientación en Computación", 
    descripcion: "Incluye los contenidos generales de ciencias y letras, pero con un refuerzo en informática. Los alumnos aprenden lógica de programación, bases de datos y diseño de páginas web, combinando la educación académica con la tecnológica.", 
    imagen: "assets/img/carrera4.jpg"},
  {nombre: "Magisterio en Educación Infantil Bilingüe", descripcion: "Prepara a futuros docentes para la enseñanza en el nivel preprimario, con un enfoque en la educación bilingüe. Los estudiantes desarrollan estrategias pedagógicas, didácticas y psicológicas para trabajar con niños pequeños.", 
    imagen: "assets/img/carrera5.jpg"},
  {nombre: "Perito en Administración de Empresas", descripcion: "Orientada a la gestión empresarial y el liderazgo. Los alumnos aprenden sobre administración, mercadeo, recursos humanos y emprendimiento, con las bases necesarias para dirigir negocios propios o trabajar en empresas privadas.", 
    imagen: "assets/img/carrera6.jpg"},
  {nombre: "Secretariado Bilingüe", descripcion: "Carrera enfocada en la administración de oficinas y la comunicación en inglés. Se adquieren habilidades en redacción, gestión de documentos, atención al cliente y manejo de herramientas de oficina.", 
    imagen: "assets/img/carrera7.jpg"},
  {nombre: "Bachillerato en Ciencias y Letras con orientación en Medicina", descripcion: "Ofrece formación general en ciencias y letras, pero con mayor enfoque en biología, química y salud. Es una buena preparación para quienes buscan carreras como medicina, enfermería o farmacia", 
    imagen: "assets/img/carrera8.jpg"},
  {nombre: "Bachillerato en Ciencias y Letras con orientación en Arte", descripcion: "Desarrolla las capacidades creativas en música, danza, teatro, literatura y artes visuales. Los estudiantes aprenden a expresarse artísticamente y a desarrollar su talento cultural.", 
    imagen: "assets/img/carrera9.jpg"},
  {nombre: "Bachillerato en Ciencias Biológicas", descripcion: "Orientado al estudio profundo de biología, química y ciencias naturales. Es ideal para estudiantes que desean seguir carreras relacionadas con biotecnología, medicina, veterinaria o medio ambiente.", 
    imagen: "assets/img/carrera10.jpg"},
  {nombre: "Bachillerato en Ciencias Sociales", descripcion: "Se centra en materias como historia, filosofía, derecho y sociología. Prepara a los estudiantes para carreras en humanidades, ciencias políticas, derecho y trabajo social.", 
    imagen: "assets/img/carrera11.jpg"},
  {nombre: "Bachillerato en Diseño Gráfico y Publicidad", descripcion: "Los alumnos desarrollan habilidades creativas en ilustración, fotografía, diseño digital y comunicación visual. Es una carrera muy útil para publicidad, marketing y medios de comunicación.", 
    imagen: "assets/img/carrera12.jpg"},
  {nombre: "Perito en Electrónica y Electricidad", descripcion: "Enseña instalación, mantenimiento y reparación de sistemas eléctricos y electrónicos. Los estudiantes trabajan con circuitos, equipos electrónicos y energías renovables.", 
    imagen: "assets/img/carrera13.jpg"},
  {nombre: "Perito en Mecánica Automotriz", descripcion: "Prepara a los estudiantes en el diagnóstico, reparación y mantenimiento de automóviles. Aprenden sobre motores, sistemas eléctricos automotrices y tecnología vehicular.", 
    imagen: "assets/img/carrera14.jpg"},
  {nombre: "Perito en Turismo y Hotelería", descripcion: "Carrera enfocada en atención al cliente, administración de hoteles, agencias de viajes y servicios turísticos. Los alumnos también desarrollan habilidades en idiomas y cultura.", 
    imagen: "assets/img/carrera15.jpg"},
  {nombre: "Bachillerato en Ciencias y Letras con orientación en Derecho", descripcion: "Ofrece bases sólidas en derecho, historia y ciencias sociales. Es una preparación para continuar estudios universitarios en abogacía o ciencias políticas.", 
    imagen: "assets/img/carrera16.jpg"},
  {nombre: "Bachillerato en Ciencias y Letras con orientación en Informática", descripcion: "Con énfasis en matemáticas, física y química, prepara a los estudiantes para carreras universitarias en ingeniería, arquitectura o ciencias puras.", 
    imagen: "assets/img/carrera17.jpg"},
  {nombre: "Perito en Dibujo de Construcción", descripcion: "Orienta a los alumnos en la elaboración de planos, dibujo técnico, diseño estructural y fundamentos de arquitectura. Es ideal para continuar estudios en ingeniería civil o arquitectura.", 
    imagen: "assets/img/carrera18.jpg"},
  {nombre: "Bachillerato en Ciencias y Letras con orientación en Educación Física", descripcion: "Enfocado en la práctica deportiva, la salud y el bienestar físico. Forma a futuros entrenadores, docentes de educación física o profesionales en deportes.", 
    imagen: "assets/img/carrera19.jpg"},
  {nombre: "Perito en Agronomía", descripcion: "Prepara a los estudiantes en agricultura, ganadería y el cuidado del medio ambiente. Desarrollan conocimientos en suelos, cultivos y producción sostenible.", 
    imagen: "assets/img/carrera20.jpg"}
];

// Función para generar tarjetas
function generarTarjetas(data, contenedorId){
  const contenedor = document.querySelector(`#${contenedorId} .row`);
  data.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('col-md-4');
    card.innerHTML = `
      <div class="card-edu">
        <img src="${item.imagen}" alt="${item.nombre}" class="card-img">
        <div class="card-text-container">
          <div class="section-title">${contenedorId === 'niveles' ? 'Nivel Educativo' : 'Carrera'}</div>
          <div class="section-heading">${item.nombre}</div>
          <p>${item.descripcion}</p>
        </div>
      </div>
    `;
    contenedor.appendChild(card);
  });
}

// Generar tarjetas al cargar la página
window.addEventListener('DOMContentLoaded', () => {
  generarTarjetas(nivelesEducativos, 'niveles');
  generarTarjetas(carreras, 'carreras');
});

