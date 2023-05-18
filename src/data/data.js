import tour1 from "../images/javalogo.png";
import tour2 from "../images/jslogo.jpg";
import tour3 from "../images/clogo.jpg";
import tour4 from "../images/kotlin.jpg";

export const links = [
  {
    id: 1,
    link: "inicio",
  },
  {
    id: 2,
    link: "acerca",
  },
  {
    id: 3,
    link: "actividades",
  },
  {
    id: 4,
    link: "lenguajes",
  },
];

export const socialLinks = [
  {
    id: 1,
    link: "facebook",
  },
  {
    id: 2,
    link: "twitter",
  },
  {
    id: 3,
    link: "instagram",
  },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-server fa-fw",
    title: "paginas web",
    text: "Donde se enseñará como crear diferentes paginas web con diferentes metodos.",
  },
  {
    id: 2,
    icon: "fas fa-laptop fa-fw",
    title: "seguridad informatica",
    text: "Donde se enseñará la forma tanto de `proteger como atacar una computadora para encontrar vulnerabilidades.",
  },
  {
    id: 3,
    icon: "fas fa-book fa-fw",
    title: "certificaciones",
    text: "Donde se enseñará tres especializaciones para el area donde el alumno mas le interese.",
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: "agosto 2023",
    title: "Java",
    info: ` Java se destaca por su sintaxis clara y legible, lo que facilita su aprendizaje y comprensión. 
    Además, ofrece una amplia biblioteca estándar que proporciona una gran cantidad de funciones y herramientas 
    que simplifican el desarrollo de software.`,
    location: "bolivia",
    duration: 45,
    cost: 2100,
  },
  {
    id: 2,
    image: tour2,
    date: "octubre 2023",
    title: "Java script",
    info: ` JavaScript es conocido por ser un lenguaje flexible y dinámico, lo que permite a los desarrolladores crear interacciones interactivas y funcionales en sitios web. Es compatible con todos los principales navegadores y se utiliza tanto en el lado del cliente como en el lado del servidor.`,
    location: "bolivia",
    duration: 45,
    cost: 1400,
  },
  {
    id: 3,
    image: tour3,
    date: "septiembre 2023",
    title: "C++",
    info: ` C++ ofrece características de programación genérica a través de plantillas. Las plantillas permiten escribir código que es independiente del tipo de datos específicos, lo que aumenta la flexibilidad y la reutilización del código.`,
    location: "bolivia",
    duration: 45,
    cost: 5000,
  },
  {
    id: 4,
    image: tour4,
    date: "diciembre 2023",
    title: "Kotlin",
    info: ` Kotlin se basa en los principios de la programación orientada a objetos y ofrece una sintaxis clara y concisa. Una de las características más destacadas de Kotlin es su capacidad para eliminar gran parte del código boilerplate que se encuentra en otros lenguajes, lo que mejora la productividad del desarrollador.`,
    location: "bolivia",
    duration: 45,
    cost: 3300,
  },
];
