import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Translations {
  [key: string]: string;
}

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguageSubject = new BehaviorSubject<string>('es');
  public currentLanguage$ = this.currentLanguageSubject.asObservable();

  private translations: { [lang: string]: Translations } = {
    es: {
      'nav.home': 'Inicio',
      'nav.about': 'Acerca de',
      'nav.skills': 'Habilidades',
      'nav.projects': 'Proyectos',
      'nav.contact': 'Contacto',
      
      'hero.greeting': 'Hola, soy',
      'hero.title': 'Desarrollador Full-Stack Junior',
      'hero.description': 'Apasionado por crear experiencias web increíbles con tecnologías modernas. Actualmente buscando oportunidades de prácticas para crecer y contribuir a proyectos innovadores.',
      'hero.viewWork': 'Ver Mi Trabajo',
      'hero.getInTouch': 'Contáctame',
      
      'about.title': 'Acerca de Mí',
      'about.description1': 'Soy un desarrollador full-stack junior apasionado con experiencia en tecnologías web modernas. Actualmente busco oportunidades para aplicar mis habilidades en proyectos del mundo real y continuar aprendiendo en un entorno colaborativo.',
      'about.description2': 'Mi viaje en el desarrollo web comenzó con curiosidad sobre cómo funcionan los sitios web, y ha evolucionado hacia una profunda apreciación tanto del desarrollo frontend como backend. Disfruto resolviendo problemas complejos y creando aplicaciones fáciles de usar.',
      'about.projectsCompleted': 'Proyectos Completados',
      'about.technologiesMastered': 'Tecnologías Dominadas',
      'about.yearsLearning': 'Años Aprendiendo',
      
      'skills.title': 'Habilidades Técnicas',
      'skills.frontend': 'Frontend',
      'skills.backend': 'Backend',
      
      'projects.title': 'Proyectos Destacados',
      'projects.hospital.title': 'Sistema de gestión de citas médicas',
      'projects.hospital.description': 'Sistema de gestión de citas médicas con autenticación de usuarios, registro de horarios e integración de pagos.',
      'projects.poglotech.title': 'App de Gestión de inventario para la venta y gestión de repuestos de laptops',
      'projects.poglotech.description': 'Aplicación web responsiva para la gestión de inventario y ventas de repuestos de laptops, con funcionalidades de búsqueda y filtrado.',
      'projects.weather.title': 'Dashboard del Clima',
      'projects.weather.description': 'Aplicación de clima en tiempo real con pronósticos basados en ubicación y gráficos interactivos.',
      'projects.blog.title': 'CMS de Blog',
      'projects.blog.description': 'Sistema de gestión de contenido para bloggers con editor de texto enriquecido y optimización SEO.',
      'projects.liveDemo': 'Demo en Vivo',
      'projects.github': 'GitHub',
      
      'contact.title': 'Ponte en Contacto',
      'contact.subtitle': 'Conectemos',
      'contact.description': 'Siempre estoy abierto a discutir nuevas oportunidades y proyectos emocionantes.',
      'contact.email': 'juandiego.gr05@email.com',
      'contact.phone': '+51 960 662 079',
      'contact.location': 'Lima, PE',
      'contact.form.name': 'Tu Nombre',
      'contact.form.email': 'Tu Email',
      'contact.form.message': 'Tu Mensaje',
      'contact.form.send': 'Enviar Mensaje',
      'contact.form.success': '¡Gracias por tu mensaje! Te responderé pronto.',
      'contact.form.error': 'Por favor, completa todos los campos del formulario.',
      'footer.rights': 'Todos los derechos reservados.'
    },
    en: {
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.skills': 'Skills',
      'nav.projects': 'Projects',
      'nav.contact': 'Contact',
      
      'hero.greeting': 'Hi, I\'m',
      'hero.title': 'Junior Full-Stack Developer',
      'hero.description': 'Passionate about creating amazing web experiences with modern technologies. Currently seeking internship opportunities to grow and contribute to innovative projects.',
      'hero.viewWork': 'View My Work',
      'hero.getInTouch': 'Get In Touch',
      
      'about.title': 'About Me',
      'about.description1': 'I\'m a passionate junior full-stack developer with experience in modern web technologies. Currently pursuing opportunities to apply my skills in real-world projects and continue learning in a collaborative environment.',
      'about.description2': 'My journey in web development started with curiosity about how websites work, and has evolved into a deep appreciation for both frontend and backend development. I enjoy solving complex problems and creating user-friendly applications.',
      'about.projectsCompleted': 'Projects Completed',
      'about.technologiesMastered': 'Technologies Mastered',
      'about.yearsLearning': 'Years Learning',
      
      'skills.title': 'Technical Skills',
      'skills.frontend': 'Frontend',
      'skills.backend': 'Backend',
      
      'projects.title': 'Featured Projects',
      'projects.hospital.title': 'Medical appointment management system',
      'projects.hospital.description': 'Medical appointment management system with user authentication, time registration and payment integration.',
      'projects.poglotech.title': 'Inventory management app for the sale and management of laptop spare parts',
      'projects.poglotech.description': 'Responsive web application for inventory management and sales of laptop parts, with search and filtering functionalities.',
      'projects.weather.title': 'Weather Dashboard',
      'projects.weather.description': 'Real-time weather application with location-based forecasts and interactive charts.',
      'projects.blog.title': 'Blog CMS',
      'projects.blog.description': 'Content management system for bloggers with rich text editor and SEO optimization.',
      'projects.liveDemo': 'Live Demo',
      'projects.github': 'GitHub',
      
      'contact.title': 'Get In Touch',
      'contact.subtitle': 'Let\'s Connect',
      'contact.description': 'I\'m always open to discussing new opportunities and exciting projects.',
      'contact.email': 'juandiego.gr05@email.com',
      'contact.phone': '+51 960 662 079',
      'contact.location': 'Lima, PE',
      'contact.form.name': 'Your Name',
      'contact.form.email': 'Your Email',
      'contact.form.message': 'Your Message',
      'contact.form.send': 'Send Message',
      'contact.form.success': 'Thank you for your message! I\'ll get back to you soon.',
      'contact.form.error': 'Please fill out all fields in the form.',
      'footer.rights': 'All rights reserved.'
    }
  };

  constructor() {
    const savedLang = localStorage.getItem('language') || 'es';
    this.currentLanguageSubject.next(savedLang);
  }

  getCurrentLanguage(): string {
    return this.currentLanguageSubject.value;
  }

  setLanguage(lang: string): void {
    this.currentLanguageSubject.next(lang);
    localStorage.setItem('language', lang);
  }

  translate(key: string): string {
    const currentLang = this.getCurrentLanguage();
    return this.translations[currentLang]?.[key] || key;
  }

  toggleLanguage(): void {
    const currentLang = this.getCurrentLanguage();
    const newLang = currentLang === 'es' ? 'en' : 'es';
    this.setLanguage(newLang);
  }
}