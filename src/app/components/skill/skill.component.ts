import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Skill } from 'src/app/models/skill';

@Component({
  standalone: true,
  selector: 'skill',
  imports: [CommonModule],
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent {
  @Input() skill!: Skill;
}