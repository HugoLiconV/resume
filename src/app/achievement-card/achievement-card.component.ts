import { Component, OnInit, Input } from '@angular/core';
import { Achievement } from '../_models';

@Component({
  selector: 'app-achievement-card',
  templateUrl: './achievement-card.component.html',
  styleUrls: ['./achievement-card.component.scss']
})
export class AchievementCardComponent implements OnInit {

  constructor() { }

  @Input() achievement: Achievement;
  ngOnInit() {
  }

}
