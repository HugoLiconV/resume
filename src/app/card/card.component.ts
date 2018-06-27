import { Component, OnInit , Input} from '@angular/core';
import { Project } from '../_models';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }
  @Input() project: Project;

  ngOnInit() {
  }

}
