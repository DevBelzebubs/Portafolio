import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Translations {
  [key: string]: string;
}

export interface Language {
  code: string;
  name: string;
  flag: string;
}
@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguageSubject = new BehaviorSubject<string>('es');
  public currentLanguage$ = this.currentLanguageSubject.asObservable();

  public availableLanguages: Language[] = [
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' }
  ];

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
      'contact.form.error.email': 'Por favor, ingresa un correo electrónico válido',
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
      'contact.form.error.email': 'Please enter a valid email address',
      'footer.rights': 'All rights reserved.'
    },
    fr: {
      'nav.home': 'Accueil',
      'nav.about': 'À propos',
      'nav.skills': 'Compétences',
      'nav.projects': 'Projets',
      'nav.contact': 'Contact',
      
      'hero.greeting': 'Salut, je suis',
      'hero.title': 'Développeur Full-Stack Junior',
      'hero.description': 'Passionné par la création d\'expériences web incroyables avec des technologies modernes. Actuellement à la recherche d\'opportunités de stage pour grandir et contribuer à des projets innovants.',
      'hero.viewWork': 'Voir Mon Travail',
      'hero.getInTouch': 'Me Contacter',
      
      'about.title': 'À Propos de Moi',
      'about.description1': 'Je suis un développeur full-stack junior passionné avec de l\'expérience dans les technologies web modernes. Je recherche actuellement des opportunités pour appliquer mes compétences dans des projets réels et continuer à apprendre dans un environnement collaboratif.',
      'about.description2': 'Mon parcours dans le développement web a commencé par la curiosité de savoir comment fonctionnent les sites web, et a évolué vers une profonde appréciation du développement frontend et backend. J\'aime résoudre des problèmes complexes et créer des applications conviviales.',
      'about.projectsCompleted': 'Projets Terminés',
      'about.technologiesMastered': 'Technologies Maîtrisées',
      'about.yearsLearning': 'Années d\'Apprentissage',
      
      'skills.title': 'Compétences Techniques',
      'skills.frontend': 'Frontend',
      'skills.backend': 'Backend',
      
      'projects.title': 'Projets en Vedette',
      'projects.hospital.title': 'Système de gestion des rendez-vous médicaux',
      'projects.hospital.description': 'Système de gestion des rendez-vous médicaux avec authentification des utilisateurs, enregistrement des horaires et intégration des paiements.',
      'projects.poglotech.title': 'App de gestion d\'inventaire pour la vente et la gestion de pièces détachées d\'ordinateurs portables',
      'projects.poglotech.description': 'Application web responsive pour la gestion d\'inventaire et la vente de pièces détachées d\'ordinateurs portables, avec des fonctionnalités de recherche et de filtrage.',
      'projects.github': 'GitHub',
      
      'contact.title': 'Entrer en Contact',
      'contact.subtitle': 'Connectons-nous',
      'contact.description': 'Je suis toujours ouvert à discuter de nouvelles opportunités et de projets passionnants.',
      'contact.email': 'juandiego.gr05@email.com',
      'contact.phone': '+51 960 662 079',
      'contact.location': 'Lima, PE',
      'contact.form.name': 'Votre Nom',
      'contact.form.email': 'Votre Email',
      'contact.form.message': 'Votre Message',
      'contact.form.send': 'Envoyer le Message',
      'contact.form.success': 'Merci pour votre message ! Je vous répondrai bientôt.',
      'contact.form.error': 'Veuillez remplir tous les champs du formulaire.',
      'contact.form.error.email': 'Veuillez entrer une adresse email valide',
      'footer.rights': 'Tous droits réservés.'
    },
    de: {
      'nav.home': 'Startseite',
      'nav.about': 'Über mich',
      'nav.skills': 'Fähigkeiten',
      'nav.projects': 'Projekte',
      'nav.contact': 'Kontakt',
      
      'hero.greeting': 'Hallo, ich bin',
      'hero.title': 'Junior Full-Stack Entwickler',
      'hero.description': 'Leidenschaftlich daran interessiert, erstaunliche Web-Erfahrungen mit modernen Technologien zu schaffen. Derzeit auf der Suche nach Praktikumsmöglichkeiten, um zu wachsen und zu innovativen Projekten beizutragen.',
      'hero.viewWork': 'Meine Arbeit Ansehen',
      'hero.getInTouch': 'Kontakt Aufnehmen',
      
      'about.title': 'Über Mich',
      'about.description1': 'Ich bin ein leidenschaftlicher Junior Full-Stack-Entwickler mit Erfahrung in modernen Web-Technologien. Derzeit suche ich nach Möglichkeiten, meine Fähigkeiten in realen Projekten anzuwenden und in einer kollaborativen Umgebung weiter zu lernen.',
      'about.description2': 'Meine Reise in der Webentwicklung begann mit der Neugier darauf, wie Websites funktionieren, und hat sich zu einer tiefen Wertschätzung sowohl für Frontend- als auch Backend-Entwicklung entwickelt. Ich löse gerne komplexe Probleme und erstelle benutzerfreundliche Anwendungen.',
      'about.projectsCompleted': 'Abgeschlossene Projekte',
      'about.technologiesMastered': 'Beherrschte Technologien',
      'about.yearsLearning': 'Jahre des Lernens',
      
      'skills.title': 'Technische Fähigkeiten',
      'skills.frontend': 'Frontend',
      'skills.backend': 'Backend',
      
      'projects.title': 'Ausgewählte Projekte',
      'projects.hospital.title': 'Medizinisches Terminverwaltungssystem',
      'projects.hospital.description': 'Medizinisches Terminverwaltungssystem mit Benutzerauthentifizierung, Zeitregistrierung und Zahlungsintegration.',
      'projects.poglotech.title': 'Inventarverwaltungs-App für den Verkauf und die Verwaltung von Laptop-Ersatzteilen',
      'projects.poglotech.description': 'Responsive Webanwendung für Inventarverwaltung und Verkauf von Laptop-Teilen, mit Such- und Filterfunktionen.',
      'projects.github': 'GitHub',
      
      'contact.title': 'Kontakt Aufnehmen',
      'contact.subtitle': 'Lass uns Verbinden',
      'contact.description': 'Ich bin immer offen für Diskussionen über neue Möglichkeiten und aufregende Projekte.',
      'contact.email': 'juandiego.gr05@email.com',
      'contact.phone': '+51 960 662 079',
      'contact.location': 'Lima, PE',
      'contact.form.name': 'Ihr Name',
      'contact.form.email': 'Ihre E-Mail',
      'contact.form.message': 'Ihre Nachricht',
      'contact.form.send': 'Nachricht Senden',
      'contact.form.success': 'Vielen Dank für Ihre Nachricht! Ich werde Ihnen bald antworten.',
      'contact.form.error': 'Bitte füllen Sie alle Felder des Formulars aus.',
      'contact.form.error.email': 'Bitte geben Sie eine gültige E-Mail-Adresse ein',
      'footer.rights': 'Alle Rechte vorbehalten.'
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

  getLanguageName(code: string): string {
    const language = this.availableLanguages.find(lang => lang.code === code);
    return language ? language.name : code;
  }

  getLanguageFlag(code: string): string {
    const language = this.availableLanguages.find(lang => lang.code === code);
    return language ? language.flag : '';
  }
}