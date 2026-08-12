export type ProjectStatus = "production" | "stable";

export interface ProjectRepository {
  label: string;
  url: string;
}

export interface ProjectObjective {
  id: string;
  title: string;
  description: string;
}

export interface ProjectChallenge {
  id: string;
  title: string;
  description: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
  variant?: "tertiary" | "primary";
}

export interface ProjectGalleryImage {
  src: string;
  alt: string;
  caption: string;
}

export interface ProjectData {
  slug: string;
  status: ProjectStatus;
  refId: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  cardMetrics: ProjectMetric[];
  icon: string;
  hero: {
    description: string;
    security: string;
    deployment: string;
  };
  objectives: ProjectObjective[];
  challenges: ProjectChallenge[];
  metrics: {
    uptime: string;
    stack: string;
    arch: string;
    containers: string;
  };
  resources: ProjectRepository[];
  gallery: ProjectGalleryImage[];
  terminal: {
    lines: string[];
  };
}

export const projects: ProjectData[] = [
  {
    slug: "payflow-platform",
    status: "production",
    refId: "REF_ID: 006 // E-COMMERCE",
    title: "Payflow Platform",
    subtitle: "NEXT.JS // MICROSERVICIOS // API_GATEWAY",
    description:
      "Desarrollo de una plataforma e-commerce full-stack distribuida en microservicios. El backend implementa Diseño Guiado por el Dominio (DDD) y Arquitectura Hexagonal en Node.js, orquestado mediante un API Gateway para el enrutamiento centralizado. El frontend fue construido con Next.js y Tailwind CSS, gestionando flujos complejos de carritos de compra y pagos de forma segura.",
    tags: ["Next.js", "Node.js", "Microservicios", "SQL Server"],
    cardMetrics: [
      { label: "ESTRELLAS:", value: "—" },
      { label: "FORKS:", value: "—" },
      { label: "ESTADO:", value: "PRODUCCIÓN" },
    ],
    icon: "api",
    hero: {
      description:
        "Plataforma e-commerce de alta disponibilidad diseñada para transacciones de alto volumen. Sistema distribuido en microservicios con comunicación asíncrona via mensajería, persistencia transaccional y frontend SSR optimizado para conversión.",
      security: "AES-256-GCM",
      deployment: "PRODUCCIÓN // V.1.0",
    },
    objectives: [
      {
        id: "01",
        title: "Flujo de Pagos Seguro",
        description:
          "Implementación de un pipeline de transacciones con encriptación de extremo a extremo y validación asíncrona para garantizar la integridad financiera en cada operación.",
      },
      {
        id: "02",
        title: "Carrito de Compras en Tiempo Real",
        description:
          "Gestión de estado global del carrito con sincronización entre pestañas y persistencia en servidor, soportando miles de productos concurrentes.",
      },
      {
        id: "03",
        title: "Arquitectura de Microservicios",
        description:
          "Servicios desacoplados basados en DDD con comunicación asíncrona via colas de mensajes, permitiendo escalado independiente por dominio.",
      },
      {
        id: "04",
        title: "Frontend SSR Optimizado",
        description:
          "Server-Side Rendering con Next.js para SEO y performance, combinado con Tailwind CSS para una interfaz responsiva y rápida.",
      },
    ],
    challenges: [
      {
        id: "01",
        title: "Consistencia Transaccional Distribuida",
        description:
          "Manejo de transacciones que cruzan múltiples servicios de pago e inventario. Implementación de patrones Saga y compensación para asegurar atomicidad sin acoplamiento fuerte.",
      },
      {
        id: "02",
        title: "Enrutamiento de API Gateway",
        description:
          "Diseño de un gateway centralizado que maneja autenticación, rate limiting y balanceo de carga entre más de 8 microservicios con latencia sub-50ms.",
      },
      {
        id: "03",
        title: "Sincronización de Inventario",
        description:
          "Mantenimiento de consistencia del stock en tiempo real durante eventos de alta concurrencia. Implementación de locking optimista y caché distribuida.",
      },
    ],
    metrics: {
      uptime: "99.99%",
      stack: "Next.js / Node.js / SQL",
      arch: "Hexagonal / DDD",
      containers: "8 Microservicios",
    },
    resources: [
      {
        label: "SOURCE_CODE_FRONTEND",
        url: "https://github.com/DevBelzebubs/Payflow-Frontend",
      },
      {
        label: "SOURCE_CODE_BACKEND",
        url: "https://github.com/DevBelzebubs/Payflow-Backend",
      },
      {
        label: "LIVE_DEMO",
        url: "https://payflow-f0p.pages.dev/",
      },
    ],
    gallery: [
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBAWMkc--xLRtMq8XjzOUw_DlJwOUu_Xx6tzTHOC-ZshI4bk1kbxX2Vrv4HJSmgyFnmD8_nm5-MVytP4b1d0J4ySEZWoW2PlLEhQ1diH0JmokUkxo4tjE8HSE1p0BLSOuKoOwTwZEinQFPfz-9ufZBeWkh2f9N05qCLkDVsMemjXpSTfi0qgnz4QjF071eY1HbiD0y0PzzIbTjbIR8Zr0XVrG0wySm7A5RWB40Yu9yTy3toFwFRpZmRuPcwGsOevOavknmPjxoI-g",
        alt: "Arquitectura de microservicios de Payflow",
        caption: "DSN_MOD: PAYFLOW_TOPOLOGY_01",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBp_9YzBji8MmEi8TDPLc0cexJ-ybd3k8ay5MaO7Rzwwbs0RxaLswiQ1hqPRp3ckr-Mzv_RhLLwKUwv-80jyjj2QERlHP0CDEk5pEtsKbO_kz--IbqpI2n_UMAmSHr0pFH0rpYjUGMAUUTvYRiL-ZGj2yLqtjz6EcLtzHza6RehN7YX_13oRWPT5zp3LqCDPQF5IMbtfxa1YJxmTujurda0pR4ieBB-ah9gYhqLjBJqS2aEljEmos12SqJI5qDiY876PSiCH1h50g",
        alt: "Infraestructura de servidor de Payflow",
        caption: "PHYS_INF: PAYFLOW_INSTANCE_A1",
      },
    ],
    terminal: {
      lines: [
        "> INIT_PAYFLOW_SERVICES... [OK]",
        "> CONNECTING_API_GATEWAY... [OK]",
        "> POLLING_MICROSERVICES...",
        "> SYNC_INVENTORY_STATE... [DONE]",
        "> PAYMENT_PIPELINE_READY",
        "> LOAD_BALANCER: 8 NODES ACTIVE",
        "> PAYFLOW_ECOMMERCE_V1_LOADED.",
      ],
    },
  },
  {
    slug: "pgt-warehouse-system",
    status: "stable",
    refId: "REF_ID: 005 // SISTEMA_EMPRESARIAL",
    title: "PGT Warehouse System",
    subtitle: "SPRING_CLOUD // ANGULAR // KARDEX",
    description:
      "Arquitecturé y desarrollé un sistema empresarial integral para la gestión de inventario (Kardex) y rutas de picking. El backend es un ecosistema robusto en Spring Boot orquestado con Eureka Discovery, Config Server y API Gateway, aplicando Arquitectura Hexagonal estricta. El frontend modular en Angular implementa seguridad basada en roles (RBAC), interceptores JWT y control de flujos logísticos en tiempo real.",
    tags: ["Spring Cloud", "Angular", "Arq. Hexagonal", "Microservicios"],
    cardMetrics: [
      { label: "ESTRELLAS:", value: "—" },
      { label: "FORKS:", value: "—" },
      { label: "ESTADO:", value: "PRODUCCIÓN" },
    ],
    icon: "dns",
    hero: {
      description:
        "Sistema empresarial de alta disponibilidad diseñado para gestión logística y almacén a gran escala. Ecosistema Spring Cloud con orquestación de servicios, persistencia transaccional y frontend modular para operaciones de inventario en tiempo real.",
      security: "JWT / RBAC",
      deployment: "ESTABLE // V.2.1",
    },
    objectives: [
      {
        id: "01",
        title: "Gestión de Inventario Kardex",
        description:
          "Sistema completo de control de inventario con trazabilidad de entradas, salidas y movimientos internos. Cálculo automático de costos promedios y reportes de rotación de stock.",
      },
      {
        id: "02",
        title: "Rutas de Picking Optimizadas",
        description:
          "Algoritmos de optimización de rutas de picking que reducen el tiempo de preparación de pedidos en almacenes de alta complejidad.",
      },
      {
        id: "03",
        title: "Seguridad Basada en Roles",
        description:
          "RBAC completo con interceptores JWT en Angular y validación de permisos en cada microservicio. Control granular de acceso por módulo y operación.",
      },
      {
        id: "04",
        title: "Orquestación Spring Cloud",
        description:
          "Ecosistema orquestado con Eureka Discovery para registro de servicios, Config Server para configuración centralizada y API Gateway para enrutamiento.",
      },
    ],
    challenges: [
      {
        id: "01",
        title: "Ecosistema de Microservicios Spring",
        description:
          "Configuración y orquestación de más de 6 microservicios con Spring Cloud, incluyendo discovery, config centralizado, gateway y circuit breakers para resiliencia.",
      },
      {
        id: "02",
        title: "Consistencia de Inventario Distribuido",
        description:
          "Mantenimiento de consistencia ACID en operaciones de inventario que cruzan múltiples servicios. Implementación de transacciones distribuidas y bloqueo pesimista.",
      },
      {
        id: "03",
        title: "Integración Frontend-Backend Modular",
        description:
          "Comunicación eficiente entre el frontend Angular modular y el backend de microservicios, con manejo de errores, retry automático y caché de datos estáticos.",
      },
    ],
    metrics: {
      uptime: "99.95%",
      stack: "Spring Boot / Angular / SQL",
      arch: "Hexagonal / Microservices",
      containers: "6 Active Clusters",
    },
    resources: [
      {
        label: "SOURCE_CODE_FRONTEND",
        url: "https://github.com/DevBelzebubs/pgt-frontend",
      },
      {
        label: "SOURCE_CODE_BACKEND",
        url: "https://github.com/DevBelzebubs/pgt-backend/tree/develop",
      },
      {
        label: "LIVE_DEMO",
        url: "portfolio.pgt-frontend.pages.dev",
      },
    ],
    gallery: [
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBAWMkc--xLRtMq8XjzOUw_DlJwOUu_Xx6tzTHOC-ZshI4bk1kbxX2Vrv4HJSmgyFnmD8_nm5-MVytP4b1d0J4ySEZWoW2PlLEhQ1diH0JmokUkxo4tjE8HSE1p0BLSOuKoOwTwZEinQFPfz-9ufZBeWkh2f9N05qCLkDVsMemjXpSTfi0qgnz4QjF071eY1HbiD0y0PzzIbTjbIR8Zr0XVrG0wySm7A5RWB40Yu9yTy3toFwFRpZmRuPcwGsOevOavknmPjxoI-g",
        alt: "Arquitectura de microservicios de PGT",
        caption: "DSN_MOD: PGT_CLUSTER_TOPOLOGY_01",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBp_9YzBji8MmEi8TDPLc0cexJ-ybd3k8ay5MaO7Rzwwbs0RxaLswiQ1hqPRp3ckr-Mzv_RhLLwKUwv-80jyjj2QERlHP0CDEk5pEtsKbO_kz--IbqpI2n_UMAmSHr0pFH0rpYjUGMAUUTvYRiL-ZGj2yLqtjz6EcLtzHza6RehN7YX_13oRWPT5zp3LqCDPQF5IMbtfxa1YJxmTujurda0pR4ieBB-ah9gYhqLjBJqS2aEljEmos12SqJI5qDiY876PSiCH1h50g",
        alt: "Infraestructura de servidor de PGT",
        caption: "PHYS_INF: SERVER_INSTANCE_B4",
      },
    ],
    terminal: {
      lines: [
        "> INIT_PGT_SERVICES... [OK]",
        "> EUREKA_DISCOVERY: REGISTERED... [OK]",
        "> CONFIG_SERVER: LOADED... [OK]",
        "> API_GATEWAY: ROUTING...",
        "> SPRING_CLOUD_V2_LOADED.",
        "> HEXAGONAL_ARCH: STRICT_MODE",
        "> SYSTEM_READY.",
      ],
    },
  },
  {
    slug: "flare-social-app",
    status: "stable",
    refId: "REF_ID: 007 // MOBILE_APP",
    title: "Flare Social App",
    subtitle: "KOTLIN // CLEAN_ARCH // COMPOSE",
    description:
      "Desarrollo de una aplicación móvil nativa para redes sociales en Android. Diseñada siguiendo estrictamente los principios de Clean Architecture (capas de Presentación, Dominio y Datos) y el patrón MVVM con Jetpack Compose. Implementa persistencia local robusta con Room Database y gestión de medios en la nube vía Cloudinary.",
    tags: ["Kotlin", "Clean Architecture", "Jetpack Compose", "Room DB"],
    cardMetrics: [
      { label: "ESTRELLAS:", value: "—" },
      { label: "FORKS:", value: "—" },
      { label: "ESTADO:", value: "ESTABLE" },
    ],
    icon: "terminal",
    hero: {
      description:
        "Aplicación móvil nativa para redes sociales con arquitectura limpia y persistencia híbrida. Diseñada para escalabilidad y mantenibilidad con separación estricta de capas, patrón MVVM y composición declarativa de UI.",
      security: "Firebase Auth",
      deployment: "ESTABLE // V.1.0",
    },
    objectives: [
      {
        id: "01",
        title: "Clean Architecture Estricta",
        description:
          "Implementación de las tres capas fundamentales (Presentación, Dominio, Datos) con dependencias unidireccionales y uso de interfaces para el desacoplamiento.",
      },
      {
        id: "02",
        title: "UI Declarativa con Compose",
        description:
          "Interfaz construida completamente con Jetpack Compose, aprovechando recomposición, state hoisting y animaciones para una experiencia nativa fluida.",
      },
      {
        id: "03",
        title: "Persistencia Híbrida",
        description:
          "Room Database para caché local con sincronización inteligente, combinado con Cloudinary para gestión y optimización de medios en la nube.",
      },
      {
        id: "04",
        title: "Patrón MVVM",
        description:
          "ViewModels reactivos con Kotlin Coroutines y Flow, gestionando el estado de la UI de forma predecible y testable.",
      },
    ],
    challenges: [
      {
        id: "01",
        title: "Sincronización Offline-Online",
        description:
          "Implementación de estrategias de caché con Room Database que permitan uso completo de la app sin conexión, con sincronización automática al recuperar conectividad.",
      },
      {
        id: "02",
        title: "Gestión de Medios en la Nube",
        description:
          "Integración con Cloudinary para upload, transformación y delivery optimizado de imágenes y videos, con compresión adaptativa según tipo de red.",
      },
      {
        id: "03",
        title: "Arquitectura de Navegación",
        description:
          "Diseño de un sistema de navegación complejo con Compose Navigation que soporte rutas anidadas, deep linking y transiciones animadas entre pantallas.",
      },
    ],
    metrics: {
      uptime: "99.90%",
      stack: "Kotlin / Compose / Room",
      arch: "Clean Arch / MVVM",
      containers: "N/A (Native)",
    },
    resources: [
      {
        label: "SOURCE_CODE",
        url: "https://github.com/DevBelzebubs/Flare",
      },
    ],
    gallery: [
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBAWMkc--xLRtMq8XjzOUw_DlJwOUu_Xx6tzTHOC-ZshI4bk1kbxX2Vrv4HJSmgyFnmD8_nm5-MVytP4b1d0J4ySEZWoW2PlLEhQ1diH0JmokUkxo4tjE8HSE1p0BLSOuKoOwTwZEinQFPfz-9ufZBeWkh2f9N05qCLkDVsMemjXpSTfi0qgnz4QjF071eY1HbiD0y0PzzIbTjbIR8Zr0XVrG0wySm7A5RWB40Yu9yTy3toFwFRpZmRuPcwGsOevOavknmPjxoI-g",
        alt: "Arquitectura de Flare Social App",
        caption: "DSN_MOD: FLARE_APP_ARCH_01",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBp_9YzBji8MmEi8TDPLc0cexJ-ybd3k8ay5MaO7Rzwwbs0RxaLswiQ1hqPRp3ckr-Mzv_RhLLwKUwv-80jyjj2QERlHP0CDEk5pEtsKbO_kz--IbqpI2n_UMAmSHr0pFH0rpYjUGMAUUTvYRiL-ZGj2yLqtjz6EcLtzHza6RehN7YX_13oRWPT5zp3LqCDPQF5IMbtfxa1YJxmTujurda0pR4ieBB-ah9gYhqLjBJqS2aEljEmos12SqJI5qDiY876PSiCH1h50g",
        alt: "Infraestructura de Flare Social App",
        caption: "PHYS_INF: FLARE_BUILD_INSTANCE",
      },
    ],
    terminal: {
      lines: [
        "> INIT_FLARE_APP... [OK]",
        "> ROOM_DB: CONNECTED... [OK]",
        "> CLOUDINARY: MEDIA_READY... [OK]",
        "> FIREBASE_AUTH: INITIALIZED",
        "> COMPOSE_UI: RECOMPOSITION_READY",
        "> CLEAN_ARCH: LAYERS_VALIDATED",
        "> FLARE_SOCIAL_V1_LOADED.",
      ],
    },
  },
];

export function getProjectBySlug(slug: string): ProjectData | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
