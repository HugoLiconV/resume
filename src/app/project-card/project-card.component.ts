import { Component, OnInit , Input} from '@angular/core';
import { Project } from '../_models';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  constructor() { }
  @Input() project: Project;

  ngOnInit() {
  }

  getImageUrl(): string {
    return `url('${this.project.imgUrl}')`;
  }

  onNavigate() {
    window.open(this.project.projectUrl, '_blank');
  }
}
