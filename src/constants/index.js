import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    ml,
    dayta,
    kaggle,
    FruitAPI,
    RefineDashboard,
    Motorventure,
    FigmaClone,
    openwebui,
    GoldenForest,
    ThornBaker
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "ML Developer",
      icon: ml,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Freelance Developer",
      company_name: "Golden Forest Jewelry Limited",
      icon: GoldenForest,
      iconBg: "white",
      date: "Sept 2024 - Nov 2024",
      points: [
        "Managed client projects from concept to completion, including creating technical documentation and maintaining clear stakeholder communication, while providing detailed comments in production code for improved clarity and future updates.",
        "Developed a warehouse management system using .NET (C#) integrated with SQL Server Express, optimizing database schema and ensuring efficient SQL operations.",
        "Configured and deployed a secure server for inventory management, including migrating existing data to a new SQL database with high accuracy.",
        "Implemented SAP Crystal Reports to generate real-time inventory reports, enhancing data visibility and improving management processes.",
        "Adapted quickly to new technologies and frameworks, delivering innovative solutions tailored to client needs."
      ],
    },
    {
      title: "Kaggle Contributor (Part time & Competitions)",
      company_name: "",
      icon: kaggle,
      iconBg: "white",
      date: "May 2023 - Nov 2024",
      points: [
        "Participated in machine learning competitions, demonstrating precision and analytical skills.",
        "Managed large datasets, providing insights and communicating results effectively to team members.",
        "Gained experience with large datasets, enhancing analytical and problem-solving skills."
      ],
    },
    {
      title: "Warehouse Assistant (Not related to IT but is here to fill in the career gap)",
      company_name: "Thorn Baker LTD",
      icon: ThornBaker,
      iconBg: "white",
      date: "Aug 2022 - Jan 2024",
      points: [
        "Efficiently managed inventory, processed orders, and ensured timely distribution of products.",
        "Handled document management tasks, including processing delivery notes and updating internal databases.",
        "Developed strong organizational skills by prioritizing tasks in a busy, fast-paced environment."
      ],
    },
    {
      title: "Summer Intern",
      company_name: "Dayta AI",
      icon: dayta,
      iconBg: "white",
      date: "Jul 2021 - Aug 2021",
      points: [
        "Engineered training dataset for machine learning model to track human age from visual images.",
        "Developed effective and transparent communications between stakeholders to cultivate team trust and efficiency.",
        "Gained insight on how big data influences marketing decisions.",
        
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "FruitAPI webpage",
      description:
        "A simple .NET web-app with fruit API implementations that allows full CRUD operations",
      tags: [
        {
          name: ".NET",
          color: "blue-text-gradient",
        },
        {
          name: "C#",
          color: "green-text-gradient",
        },
        {
          name: "API",
          color: "pink-text-gradient",
        },
      ],
      image: FruitAPI,
      source_code_link: "https://fruitapi2.azurewebsites.net/swagger",
    },
    {
      name: "Refine Dashboard",
      description:
        "Web application that enables users to manage their company's adminstration",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Refine",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: RefineDashboard,
      source_code_link: "https://refine-dashboard-drab.vercel.app/",
    },
    {
      name: "Motorventure blog-post clone",
      description:
        "A simple clone of Motorventure crafted using CraftCMS",
      tags: [
        {
          name: "CraftCMS",
          color: "blue-text-gradient",
        },
        {
          name: "Docker",
          color: "green-text-gradient",
        },
        {
          name: "PHP",
          color: "pink-text-gradient",
        },
      ],
      image: Motorventure,
      source_code_link: "https://tltommu.github.io/CraftCMSTest/",
    },
    {
      name: "Figma clone",
      description:
        "A Figma clone project I learnt side by side with JS Mastery video",
      tags: [
        {
          name: "NextJS",
          color: "blue-text-gradient",
        },
        {
          name: "Live-block",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "pink-text-gradient",
        },
      ],
      image: FigmaClone,
      source_code_link: "https://figma-clone-six-pied.vercel.app/",
    },
    {
      name: "Customized Gemma2 generative AI web app",
      description:
        "A self-hosted web app with offline inference and highly customizable prompt-engineering capabllities, with an unified chat interface integrating LLaVA, Stable Diffusion, and Gemma2.",
      tags: [
        {
          name: "Ollama",
          color: "blue-text-gradient",
        },
        {
          name: "Open WebUI",
          color: "green-text-gradient",
        },
        {
          name: "Docker",
          color: "pink-text-gradient",
        },
      ],
      image: openwebui,
      source_code_link: "https://another-3-dfolio.vercel.app/assets/Open%20webui-_CrFPRbz.png",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  