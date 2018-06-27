import { Project } from '../_models';

export const PROJECTS: Project[] = [
  {
    title: 'Página web del Albergue San Vicente',
    technologies: 'Angular, Node, MongoDB',
    description: `Página web para el albergue San Vicente de Paul la cual tiene
    como objetivo mostrar los proyectos, donaciones y eventos del albergue. Se
    utilizó Angular en el front-end y se creo un API Rest con Node.js para el
    manejo de la información así como para la autenticación, mediante JWT, en el
    modulo de administración.`,
    imgUrl: ''
  }, {
    title: 'Job Board',
    technologies: 'Node.JS, MongoDB, Angular, Android',
    description: `JobBoard es una plataforma que permite a los estudiantes buscar
    empresas para realizar sus residencias profesionales.

    La plataforma consiste en un API Rest se encarga de manejar los perfiles de
    los estudiantes y de las empresas, las vacantes, y el inicio de sesión
    utilizando JWT; Una aplicación en Android para que los estudiantes puedan
    visualizar las vacantes, empresas y administrar su perfil; y una página web
    para que las empresas publiquen las vacantes.`,
    imgUrl: ''
  }, {
    title: 'Control de Acceso en Arduino',
    technologies: 'Arduino',
    description: `Control de Acceso para el uso de una lavadora industrial en el
    albergue San Vicente. El sistema utiliza RFID para permitir el uso de las
    lavadoras sólo a personal autorizado, además mediante un API-Rest se encarga
    de llevar un registro de uso para8 posteriormente poder visualizarlo en la
    página web del albergue.`,
    imgUrl: ''
  }, {
    title: 'ToDo App',
    technologies: 'Android',
    description: `Aplicación de tareas que, mediante el tiempo que dispones en
    el día, la prioridad y la duración de las tareas, te dice cuales puedes
    realizar y en que orden.`,
    imgUrl: ''
  }, {
    title: 'Messenger Bot para encuesta de egresados del TecNM',
    technologies: 'ChatFuel (Messenger Bot), AngularJS, MongoDB',
    description: `Messenger Bot para realizar la encuesta de egresados de los
    institutos pertenecientes al Tecnológico Nacional de Mexico. Los datos
    obtenidos del bot se manejan con un API Rest y se visualizan en una página web.`,
    imgUrl: ''
  }
];

/*
  title: string;
  description: string;
  technologies: string;
  imgUrl: string;
 */

