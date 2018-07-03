import { Project } from '../_models';

export const PROJECTS: Project[] = [
  {
    title: 'SAN VICENTE SHELTER WEB PAGE',
    technologies: 'Angular, Node, MongoDB',
    description: ` Website for San Vicente de Paul Shelter which have the objective
    of showing the projects, donations and events of the shelter. Angular was used in
    the front-end and an API Rest was created with Node.js for the management of the
    information as well as for the authentication, through JWT, in the administration module.`,
    imgUrl: './assets/vicentinas.png',
    projectUrl: 'https://vicentinaschihuahua.herokuapp.com/#/home'
  }, {
    title: 'Job Board',
    technologies: 'Node.JS, MongoDB, Angular, Android',
    description: `JobBoard is a platform that allows students to search for companies
    to perform their professional residencies.

    The platform consists of: an API Rest responsible for managing the profiles of
    students and companies, vacancies, and the login using JWT; An application on Android so
    students can visualize vacancies, companies and manage their profile; and a website
    for companies to publish vacancies.`,
    imgUrl: './assets/jobboard.png',
    projectUrl: 'https://github.com/HugoLiconV/JobBoard-API-Rest'
  }, {
    title: 'Arduino RFID Access Control System',
    technologies: 'Arduino',
    description: `Access Control for the use of an industrial washing machine in
    San Vicente Shelter. The system uses RFID to allow the use of washing machines
    to only authorized personnel, also through an API-Rest, it is responsible for
    keeping a record of use to later be able to view it on the shelter website.`,
    imgUrl: './assets/arduino.jpg',
    projectUrl: 'https://github.com/HugoLiconV/cerradura-arduino'
  }, {
    title: 'ToDo App',
    technologies: 'Android',
    description: `A ToDo App that, through the time you have available in the day,
    the priority, and the duration of the tasks, tells you what you can do and in what order.`,
    imgUrl: './assets/todo.png',
    projectUrl: 'https://bitbucket.org/HugoLiconV/todo_project/src/master/'
  }, {
    title: 'MESSENGER BOT FOR TECNM GRADUATE SURVEY',
    technologies: 'ChatFuel (Messenger Bot), AngularJS, MongoDB',
    description: `A Messenger Bot that has as objective survey the graduates of
    the institutes belonging to the Tecnológico Nacional de México. The data obtained
    from the bot are handled with an API Rest and displayed on a web page.`,
    imgUrl: './assets/egresados.png',
    projectUrl: 'https://peaceful-mesa-57140.herokuapp.com/#!/'
  }
];

/*
  title: string;
  description: string;
  technologies: string;
  imgUrl: string;
 */

