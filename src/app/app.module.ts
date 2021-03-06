import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatIconModule,
  MatMenuModule,
  MatButtonModule } from '@angular/material';
import { ProjectCardComponent } from './project-card/project-card.component';
import { AchievementCardComponent } from './achievement-card/achievement-card.component';
import { SkillGraphComponent } from './skill-graph/skill-graph.component';
import { HeartComponent } from './heart/heart.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    SkillsComponent,
    ProjectsComponent,
    AchievementsComponent,
    ContactComponent,
    ProjectCardComponent,
    AchievementCardComponent,
    SkillGraphComponent,
    HeartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
