import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './sections/home/home.component';
import { AboutComponent } from './sections/about/about.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { SkillsComponent } from './sections/skills/skills.component';
import { SocialComponent } from './sections/social/social.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [HeaderComponent, HomeComponent, AboutComponent, ProjectsComponent, SkillsComponent, SocialComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
}
