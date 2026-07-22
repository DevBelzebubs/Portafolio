const en: Record<string, any> = {
  header: {
    brand: "ARCH_OS // JDGR_PORTFOLIO",
    status: "SYSTEM_STATUS: ACTIVE",
  },
  sidebar: {
    name: "JUAN DIEGO",
    version: "V_4.0.2_STABLE",
    infrastructure: "HOME",
    schematics: "SKILLS",
    logs: "EXPERIENCE",
    coreInit: "BACKGROUND",
    connectNodes: "CONNECT_NODES",
  },
  footer: {
    copyright: "© 2025 JDGR_ARCH_OFFICE // KERNEL_VER: 8.4.1-LTS",
    github: "GITHUB_REPO",
    docs: "DOCS_STDLIB",
    debug: "DEBUG_MODE",
  },
  hero: {
    ref: "REF_001 // SYSTEM_BOOT",
    title1: "Scalable",
    title2: "Systems",
    title3: "Engineering",
    description: "Computer Systems Engineer and FullStack Developer specializing in modular System Architecture and high-performance backends. Building robust digital infrastructure and immersive interfaces since init().",
    btnDeploy: "Execute Deployment",
    btnLogs: "View Logs",
  },
  statusCard: {
    title: "SYSTEM_METRICS",
    online: "ONLINE",
    uptime: "UPTIME:",
    uptimeVal: "2+ YEARS",
    arch: "ARCHITECTURE:",
    archVal: "HEXAGONAL / DDD",
    role: "ROLE:",
    roleVal: "CO-FOUNDER",
    queryOpt: "QUERY_OPT:",
    queryOptVal: "-40%",
    deploy: "DEPLOY:",
    deployVal: "DOCKER / CI-CD",
  },
  statsCard: {
    title: "QUICK",
    experience: { label: "EXPERIENCE", value: "2+ YEARS" },
    projects: { label: "PROJECTS", value: "5+ DELIVERED" },
    stack: { label: "MAIN STACK", value: "JAVA / TS / SPRING / NEST" },
    languages: { label: "LANGUAGES", value: "ES (NATIVE) / EN (B1)" },
  },
  logs: {
    header: {
      command: "> EXECUTE: QUERY_EXPERIENCE",
      title1: "WORK_",
      title2: "EXPERIENCE",
      description: "WORK HISTORY AND FEATURED PROJECTS. PROVEN EXPERIENCE IN FULLSTACK DEVELOPMENT AND SOFTWARE ARCHITECTURE. STATUS: NOMINAL.",
    },
    statusStable: "STATUS: STABLE",
    status: "STATUS:",
    work: {
      ref1: "REF_ID: 001 // STARTUP",
      title1: "Solvegrades Technology",
      sub1: "ERP_SYSTEM // MICROSERVICES",
      desc1: "Led the design and development of an ERP system from scratch for logistics and commercial management. Implemented Hexagonal Architecture and Microservices to isolate core business logic. Optimized databases, reducing query times by 40%, with real-time synchronization via WebSockets. Developed Role-Based Access Control (RBAC) and integrated the SUNAT API for automatic taxpayer RUC validation.",
      tags1: ["NestJS", "Angular", "Microservices", "Hexagonal", "WebSockets"],
      metrics1: [
        { label: "QUERY_OPT:", value: "-40%" },
        { label: "SYNC:", value: "REAL-TIME" },
        { label: "ROLE:", value: "CO-FOUNDER" },
      ],
      ref2: "REF_ID: 002 // INTERNSHIP",
      title2: "GC Negocios Generales",
      sub2: "WEB_SYSTEM // REACT_OPTIMIZATION",
      desc2: "Developed a comprehensive web system for product management and automated stock control. Improved client acquisition by optimizing the main platform's load time by 25% through React component refactoring and client-side rendering optimization.",
      tags2: ["React", "State Management", "DOM Optimization"],
      ref3: "REF_ID: 003 // VOLUNTEER",
      title3: "AESI",
      sub3: "WEB_PLATFORM // AGILE_TEAM",
      desc3: "Collaborated in a multidisciplinary agile team to architect and deliver the frontend of a corporate volunteering platform. Implemented key user flows for seamless registration and navigation, ensuring a highly maintainable frontend architecture.",
      tags3: ["Next.js", "UI Architecture", "Agile"],
    },
    projects: {
      sectionRef: "REF_ID: 004 // OPEN_SOURCE",
      sectionTitle: "Personal Projects",
      sectionSub: "EXTERNAL_REPOS // GITHUB",

      ref1: "REF_ID: 005 // ENTERPRISE_SYSTEM",
      title1: "PGT Warehouse System",
      sub1: "SPRING_CLOUD // ANGULAR // KARDEX",
      desc1: "Architected and developed a comprehensive enterprise system for inventory management (Kardex) and picking routes. The backend is a robust Spring Boot ecosystem orchestrated with Eureka Discovery, Config Server, and an API Gateway, strictly applying Hexagonal Architecture. The modular Angular frontend implements Role-Based Access Control (RBAC), JWT interceptors, and real-time logistics flow management.",
      tags1: ["Spring Cloud", "Angular", "Hexagonal Arch", "Microservices"],
      metrics1: [
        { label: "STARS:", value: "—" },
        { label: "FORKS:", value: "—" },
        { label: "STATUS:", value: "STABLE" },
      ],

      ref2: "REF_ID: 006 // E-COMMERCE",
      title2: "Payflow Platform",
      sub2: "NEXT.JS // MICROSERVICES // API_GATEWAY",
      desc2: "Development of a full-stack e-commerce platform distributed across microservices. The backend implements Domain-Driven Design (DDD) and Hexagonal Architecture in Node.js, orchestrated via an API Gateway for centralized routing. The frontend was built with Next.js and Tailwind CSS, securely managing complex shopping cart and payment flows.",
      tags2: ["Next.js", "Node.js", "Microservices", "SQL Server"],

      ref3: "REF_ID: 007 // MOBILE_APP",
      title3: "Flare Social App",
      sub3: "KOTLIN // CLEAN_ARCH // COMPOSE",
      desc3: "Development of a native Android social media application. Architected strictly following Clean Architecture principles (Presentation, Domain, and Data layers) and the MVVM pattern using Jetpack Compose. Implements robust local persistence with Room Database and cloud media management via Cloudinary.",
      tags3: ["Kotlin", "Clean Architecture", "Jetpack Compose", "Room DB"],
    },
    research: {
      sectionRef: "REF_ID: 009 // RESEARCH",
      sectionTitle: "Research",
      sectionSub: "RESEARCH // ACADEMIC",
      ref: "REF_ID: 009 // RESEARCH",
      title: "Academic Research",
      sub: "RESEARCH // ERP_SCALABILITY",
      desc: "Lead author of research on the impact of software architectures on ERP system scalability, based on experimental comparison of different architectural approaches and their effect on long-term performance and maintainability.",
      tags: ["Research", "Software Architecture", "ERP", "Scalability"],
    },
  },
  schematics: {
    header: {
      title: "Technical Skills",
      ref: "SYS.REF: JDGR_SKILLS_MATRIX // ENV: PRODUCTION",
    },
    coreInfra: {
      title: "CORE_INFRA",
      tier: "ARCH_TIER_1",
      card1Title: "Hexagonal Architecture",
      card1Desc: "Ports & Adapters pattern implementing strict isolation between domain logic and external systems.",
      card2Title: "Microservices & DDD",
      card2Desc: "Decoupled services based on Domain-Driven Design, optimizing for scale and fault isolation.",
      card3Title: "API Gateway & Cloud",
      card3Desc: "Centralized routing, service discovery (Eureka), and load balancing for distributed ecosystems.",
    },
    stackV1: {
      title: "STACK_V1",
      skills: [
        { name: "NestJS [Node.js]", level: 95 },
        { name: "Spring Boot [Java]", level: 88 },
        { name: "Angular [TS]", level: 90 },
        { name: "Next.js [React]", level: 85 },
        { name: "Kotlin [Android]", level: 80 },
        { name: "Tailwind CSS v4", level: 92 },
      ],
    },
    databaseNodes: {
      title: "DATABASE_NODES",
      node1Title: "PostgreSQL / MySQL",
      node1Sub: "RDBMS // MAIN_CLUSTERS",
      node2Title: "SQL Server / Supabase",
      node2Sub: "ENTERPRISE_DATA // CLOUD_BAAS",
      online: "ONLINE",
    },
    toolChain: {
      title: "TOOL_CHAIN_EXEC",
      cmd1: "docker pull jdgr/workspace:latest",
      out1: "Status: Image is up to date for jdgr/workspace:latest",
      cmd2: "git status",
      out2: "On branch master. Working tree clean.",
      cmd3: "sys.init --tools",
      tools: ["DOCKER", "GIT", "CI/CD PIPELINES", "SPRING CLOUD"],
    },
  },
  core: {
    header: {
      title: "Education & Contact",
      module: "MODULE: BACKGROUND // HANDSHAKE_PROTOCOL",
    },
    education: {
      title: "Knowledge Architecture",
      dataLoaded: "[DATA_LOADED]",
      uni1: "Universidad Privada del Norte (UPN)",
      degree1: "DEGREE: Computer Systems Engineering",
      cycle: "EXECUTION_CYCLE: 09",
      percentage: "90%",
      uni2: "Universidad Nacional de Ingeniería (UNI)",
      cert2: "CERTIFICATION: SQL Server – Database II + AI (Nov-Dec 2025)",
      status2: "> STATUS: VERIFIED_VALID",
      ref: "REF_EDU_01 // SYS_ARCH",
    },
    blueprint: {
      label: "PATTERN_RECOGNITION_ACTIVE",
    },
    terminalForm: {
      title: "SYSTEM_INPUT.EXE",
      prompt1: "> INITIALIZE_COMMUNICATION_PROTOCOL",
      prompt2: "> WAITING_FOR_USER_INPUT...",
      nameLabel: "IDENTIFIER [Name]",
      namePlaceholder: "Enter string...",
      emailLabel: "REPLY_ADDRESS [Email]",
      emailPlaceholder: "user@domain.com",
      msgLabel: "PAYLOAD [Message]",
      msgPlaceholder: "Write parameters...",
      submit: "Execute Handshake",
    },
    externalNodes: {
      title: "EXTERNAL_NODES // NETWORK",
      linkedin: "LinkedIn",
      linkedinSub: "PROFESSIONAL_GRAPH",
      github: "GitHub",
      githubSub: "CODE_REPOSITORY",
    },
  },
  projectDetail: {
    back: "BACK_TO_LOGS",
    objectives: "CORE_OBJECTIVES",
    challenges: "TECHNICAL_CHALLENGES",
    metrics: "PROJECT_METRICS",
    resources: "RESOURCES",
    sourceCode: "SOURCE_CODE",
    liveDemo: "LIVE_DEMO",
    statusProduction: "STATUS: PRODUCTION",
    statusStable: "STATUS: STABLE",
    healthNominal: "NOMINAL_OPERATIONS",
    healthStatus: "HEALTH_STATUS",
    terminalRecv: "TERMINAL_RECV",
    cpuUsage: "CPU_USAGE",
    systemSpec: "SYSTEM_SPEC",
    securityProtocol: "SECURITY_PROTOCOL",
    deployment: "DEPLOYMENT",
    uptime: "UPTIME",
    stack: "STACK",
    arch: "ARCHITECTURE",
    containers: "CONTAINERS",
    topology: "Visualizing Core Infrastructure Topology",
    projects: {
      "payflow-platform": {
        heroDescription:
          "High-availability e-commerce platform designed for high-volume transactions. Distributed microservices system with asynchronous messaging, transactional persistence, and SSR frontend optimized for conversion.",
        deployment: "PRODUCTION // V.1.0",
        objectives: [
          {
            id: "01",
            title: "Secure Payment Flow",
            description:
              "Implementation of an end-to-end encrypted transaction pipeline with asynchronous validation to guarantee financial integrity in every operation.",
          },
          {
            id: "02",
            title: "Real-Time Shopping Cart",
            description:
              "Global cart state management with cross-tab synchronization and server persistence, supporting thousands of concurrent products.",
          },
          {
            id: "03",
            title: "Microservices Architecture",
            description:
              "Decoupled services based on DDD with asynchronous messaging via message queues, enabling independent domain scaling.",
          },
          {
            id: "04",
            title: "Optimized SSR Frontend",
            description:
              "Server-Side Rendering with Next.js for SEO and performance, combined with Tailwind CSS for a responsive and fast interface.",
          },
        ],
        challenges: [
          {
            id: "01",
            title: "Distributed Transactional Consistency",
            description:
              "Handling transactions that span multiple payment and inventory services. Implementation of Saga patterns and compensation to ensure atomicity without tight coupling.",
          },
          {
            id: "02",
            title: "API Gateway Routing",
            description:
              "Design of a centralized gateway handling authentication, rate limiting, and load balancing across 8+ microservices with sub-50ms latency.",
          },
          {
            id: "03",
            title: "Inventory Synchronization",
            description:
              "Maintaining real-time stock consistency during high-concurrency events. Implementation of optimistic locking and distributed caching.",
          },
        ],
        metrics: {
          uptime: "99.99%",
          stack: "Next.js / Node.js / SQL",
          arch: "Hexagonal / DDD",
          containers: "8 Microservices",
        },
        terminalLines: [
          "> INIT_PAYFLOW_SERVICES... [OK]",
          "> CONNECTING_API_GATEWAY... [OK]",
          "> POLLING_MICROSERVICES...",
          "> SYNC_INVENTORY_STATE... [DONE]",
          "> PAYMENT_PIPELINE_READY",
          "> LOAD_BALANCER: 8 NODES ACTIVE",
          "> PAYFLOW_ECOMMERCE_V1_LOADED.",
        ],
      },
      "pgt-warehouse-system": {
        heroDescription:
          "High-availability enterprise system designed for large-scale logistics and warehouse management. Spring Cloud ecosystem with service orchestration, transactional persistence, and modular frontend for real-time inventory operations.",
        deployment: "STABLE // V.2.1",
        objectives: [
          {
            id: "01",
            title: "Kardex Inventory Management",
            description:
              "Comprehensive inventory control system with full traceability of entries, exits, and internal movements. Automatic average cost calculation and stock rotation reports.",
          },
          {
            id: "02",
            title: "Optimized Picking Routes",
            description:
              "Picking route optimization algorithms that reduce order preparation time in high-complexity warehouses.",
          },
          {
            id: "03",
            title: "Role-Based Security",
            description:
              "Full RBAC with JWT interceptors in Angular and permission validation in every microservice. Granular access control per module and operation.",
          },
          {
            id: "04",
            title: "Spring Cloud Orchestration",
            description:
              "Orchestrated ecosystem with Eureka Discovery for service registration, Config Server for centralized configuration, and API Gateway for routing.",
          },
        ],
        challenges: [
          {
            id: "01",
            title: "Spring Microservices Ecosystem",
            description:
              "Configuration and orchestration of 6+ microservices with Spring Cloud, including discovery, centralized config, gateway, and circuit breakers for resilience.",
          },
          {
            id: "02",
            title: "Distributed Inventory Consistency",
            description:
              "Maintaining ACID consistency in inventory operations across multiple services. Implementation of distributed transactions and pessimistic locking.",
          },
          {
            id: "03",
            title: "Modular Frontend-Backend Integration",
            description:
              "Efficient communication between the modular Angular frontend and the microservices backend, with error handling, automatic retry, and static data caching.",
          },
        ],
        metrics: {
          uptime: "99.95%",
          stack: "Spring Boot / Angular / SQL",
          arch: "Hexagonal / Microservices",
          containers: "6 Active Clusters",
        },
        terminalLines: [
          "> INIT_PGT_SERVICES... [OK]",
          "> EUREKA_DISCOVERY: REGISTERED... [OK]",
          "> CONFIG_SERVER: LOADED... [OK]",
          "> API_GATEWAY: ROUTING...",
          "> SPRING_CLOUD_V2_LOADED.",
          "> HEXAGONAL_ARCH: STRICT_MODE",
          "> SYSTEM_READY.",
        ],
      },
      "flare-social-app": {
        heroDescription:
          "Native Android social media application with clean architecture and hybrid persistence. Designed for scalability and maintainability with strict layer separation, MVVM pattern, and declarative UI composition.",
        deployment: "STABLE // V.1.0",
        objectives: [
          {
            id: "01",
            title: "Strict Clean Architecture",
            description:
              "Implementation of the three fundamental layers (Presentation, Domain, Data) with unidirectional dependencies and interface-based decoupling.",
          },
          {
            id: "02",
            title: "Declarative UI with Compose",
            description:
              "Interface built entirely with Jetpack Compose, leveraging recomposition, state hoisting, and animations for a fluid native experience.",
          },
          {
            id: "03",
            title: "Hybrid Persistence",
            description:
              "Room Database for local caching with intelligent synchronization, combined with Cloudinary for cloud media management and optimization.",
          },
          {
            id: "04",
            title: "MVVM Pattern",
            description:
              "Reactive ViewModels with Kotlin Coroutines and Flow, managing UI state in a predictable and testable way.",
          },
        ],
        challenges: [
          {
            id: "01",
            title: "Offline-Online Synchronization",
            description:
              "Implementation of caching strategies with Room Database enabling full app usage offline, with automatic synchronization upon connectivity recovery.",
          },
          {
            id: "02",
            title: "Cloud Media Management",
            description:
              "Integration with Cloudinary for upload, transformation, and optimized delivery of images and videos, with adaptive compression based on network type.",
          },
          {
            id: "03",
            title: "Navigation Architecture",
            description:
              "Design of a complex navigation system with Compose Navigation supporting nested routes, deep linking, and animated transitions between screens.",
          },
        ],
        metrics: {
          uptime: "99.90%",
          stack: "Kotlin / Compose / Room",
          arch: "Clean Arch / MVVM",
          containers: "N/A (Native)",
        },
        terminalLines: [
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
  },
  language: {
    label: "LANGUAGE:",
    es: "ES",
    en: "EN",
    fr: "FR",
  },
};

export default en;