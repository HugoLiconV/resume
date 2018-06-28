import { Component, OnInit } from '@angular/core';
import { Skill } from '../_models';
import { SKILLS } from '../_data';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills: Skill[];
  constructor() {
    this.skills = SKILLS;
  }

  ngOnInit() {
  }

}
