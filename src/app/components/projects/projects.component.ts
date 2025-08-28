import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { TranslatePipe } from '../../pipes/translate.pipe';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Project[] = [];

  constructor(private languageService: LanguageService) {
    this.updateProjects();
    this.languageService.currentLanguage$.subscribe(() => {
      this.updateProjects();
    });
  }

  private updateProjects() {
    this.projects = [
      {
        title: this.languageService.translate('projects.hospital.title'),
        description: this.languageService.translate('projects.hospital.description'),
        image: 'assets/img/hospital.png',
        technologies: ['Angular', 'Spring Boot', 'MySQL'],
        github: 'https://github.com/DevBelzebubs/NovaSalud'
      },
      {
        title: this.languageService.translate('projects.poglotech.title'),
        description: this.languageService.translate('projects.poglotech.description'),
        image: 'assets/img/poglotech.png',
        technologies: ['Laravel', 'MySQL'],
        github: 'https://github.com/DevBelzebubs/Poglotech'
      },
    ];
  }
}