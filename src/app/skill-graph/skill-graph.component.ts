import { Component, OnInit, Input } from '@angular/core';
import { Skill } from '../_models';

@Component({
  selector: 'app-skill-graph',
  templateUrl: './skill-graph.component.html',
  styleUrls: ['./skill-graph.component.scss']
})
export class SkillGraphComponent implements OnInit {

  constructor() { }
  @Input() skill: Skill;

  ngOnInit() {
    const bars = [].slice.call(document.querySelectorAll('.bar-inner'));
    const percent = `${this.skill.percent}%`;
    console.log(`${this.skill.name} = ${percent}`);
    bars.map(function(bar, index) {
      setTimeout(function() {
          bar.style.width = bar.dataset.percent;
        }, index * 1000);
    });
  }
}
