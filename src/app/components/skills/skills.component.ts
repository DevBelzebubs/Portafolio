import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../pipes/translate.pipe';

interface Skill {
  name: string;
  icon: string;
  level: number;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skillCategories: SkillCategory[] = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML/CSS', icon: '🌐', level: 65 },
        { name: 'JavaScript', icon: '⚡', level: 60 },
        { name: 'TypeScript', icon: '📘', level: 55 },
        { name: 'Angular', icon: '🅰️', level: 55 },
        { name: 'React', icon: '⚛️', level: 45 },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Java', icon: '☕', level: 60 },
        { name: 'Spring', icon: '🍃', level: 50 },
        { name: 'PHP', icon: '🐘', level: 45 },
        { name: 'Laravel', icon: '🔺', level: 40 }
      ]
    }
  ];
}