import { Component, OnInit } from '@angular/core';
import { Achievement } from '../_models';
import { ACHIEVEMENTS } from '../_data';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss']
})
export class AchievementsComponent implements OnInit {

  achievements: Achievement[];
  constructor() {
    this.achievements = ACHIEVEMENTS;
  }

  ngOnInit() {
  }

}
