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
    ThornBaker,
    NeurlIPS,
    Ribonanza,
    WMS,
    Tester
  } from "../assets";
  
  export const navLinks = [
    {
      id: "#about",
      title: "About",
      target:""
    },
    {
      id: "#work",
      title: "Work",
      target:""
    },
    {
      id: "#contact",
      title: "Contact",
      target:""
    },
    {
      id: "https://github.com/tltommu",
      title: "Github",
      target:"_blank"
    },
    {
      id: "https://learn.microsoft.com/en-us/users/tommylam-7630/transcript/7x09iw2055r9wn7",
      title: "Microsoft-Learn",
      target:"_blank"
    },
    {
      id: "https://www.kaggle.com/tltommu",
      title: "Kaggle",
      target:"_blank"
    },
  ];

  export const navLinks2 = [
    {
      id: "#about",
      title: "About",
      target:""
    },
    {
      id: "#work",
      title: "Work",
      target:""
    },
    {
      id: "#contact",
      title: "Contact",
      target:""
    }
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
      link: '/Webproject'
    },
    {
      title: "React Native Developer",
      icon: mobile,
      link: '/ReactNativeProject'
    },
    {
      title: "Backend Developer",
      icon: backend,
      link: 'BackendProject'
    },
    {
      title: "ML Developer",
      icon: ml,
      link: 'MLproject'
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

  const BackendProjects=[
    {name: "Simple Warehouse Mangement system",
      description:
        "A demo of my freelance project of developing a simple warehouse management system connected to SQL server database",
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
          name: "SQL Server database",
          color: "pink-text-gradient",
        },
        {
          name:"SQL Server Management Studio",
          color:"violet-text-gradient"
        }
      ],
      image: WMS,
      source_code_link: "https://github.com/tltommu/Demo",
    },
  ];

  const ReactNativeProjects=[
    {name: "React-Native Mobile App",
      description:
        "A React-Native Mobile App with basic CRUD operations and video streaming capabilities.",
      tags: [
        {
          name: "EXPO",
          color: "blue-text-gradient",
        },
        {
          name: "Appwrite",
          color: "green-text-gradient",
        },
        {
          name: "React-Native",
          color: "pink-text-gradient",
        },
      ],
      image: Tester,
      source_code_link: "https://github.com/tltommu/Tester",
    },
  ];

  const MLprojects=[
    {name: "NeurIPS - Ariel Data Challenge 2024",
      description:
        " Developing machine learning models to extract faint exoplanetary signals from simulated observations of the upcoming ESA Ariel Mission",
      tags: [
        {
          name: "Numpy",
          color: "blue-text-gradient",
        },
        {
          name: "Tensorflow",
          color: "green-text-gradient",
        },
        {
          name: "Matplotlib",
          color: "pink-text-gradient",
        },
        {
          name: "Ridge Model",
          color: "violet-text-gradient",
        },
      ],
      image: NeurlIPS,
      source_code_link: "https://github.com/tltommu/NeurIPS",
    },

    {name: "Stanford Ribonanza RNA Folding",
      description:
        "Creating a model that predicts the structures of any RNA molecule and the resulting chemical mapping profile, which can be compared to data collected for each position in the RNA.",
      tags: [
        {
          name: "Numpy",
          color: "blue-text-gradient",
        },
        {
          name: "Pandas",
          color: "green-text-gradient",
        },
        {
          name: "KFold",
          color: "pink-text-gradient",
        },
        {
          name: "Sinusoidal positional embedding",
          color: "violet-text-gradient",
        },
      ],
      image: Ribonanza,
      source_code_link: "https://github.com/tltommu/NeurIPS",
    },
  ];

  const Webprojects=[
    {name: "FruitAPI webpage",
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
  
  export { services, technologies, experiences, testimonials, projects, Webprojects, BackendProjects, MLprojects, ReactNativeProjects };
  