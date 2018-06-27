import { Component, OnInit } from '@angular/core';
import { Project } from '../_models';
import { PROJECTS } from '../_data';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Project[];
  constructor() {
  }
  ngOnInit() {
    this.projects = PROJECTS;
  }

}
