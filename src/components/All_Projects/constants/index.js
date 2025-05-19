import {
    mobile,
    backend,
    web,
    javascript,
    typescript,
    reactjs,
    tailwind,
    nodejs,
    git,
    docker,
    ml,
    dayta,
    kaggle,
    FruitAPI,
    RefineDashboard,
    Motorventure,
    FigmaClone,
    GoldenForest,
    ThornBaker,
    NeurlIPS,
    Ribonanza,
    WMS,
    Tester,
    Ibis,
    invideo_AI,
    Azure_AI,
    Google_ads,
    polyu,
    CourseApp,
    apprenticeship_project,
    python,
    pandas,
    numpy,
    angular,
    sklearn,
    github
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
  
  const MLtechnologies = [
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Pandas",
      icon: pandas,
    },
    {
      name: "Numpy",
      icon: numpy,
    },   
  ];

  const Webtechnologies = [
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
      name: "Angular JS",
      icon: angular,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    /*{
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    */
    {
      name: "git",
      icon: git,
    },
    {
      name: "github",
      icon: github,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Marketing Apprenticeship",
      company_name: "Ibis Consultancy & Kent Busniess College",
      icon: Ibis,
      iconBg: "white",
      date: "Jan 2025 - Apr 2025",
      points: [
        "Assisting in the creation and execution of marketing campaigns across digital channels",
        "Supporting market research activities to identify trends and inform strategy development",
        "Collaborating with internal teams to produce engaging content and ensure campaign alignment with client"
      ]
    },
    {
      title: "Freelance IT support & Developer",
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
    {
      name: "apprenticeship_project",
      description:
        "A basic web form that introduce me to Angular",
      tags: [
        {
          name: "Angular",
          color: "blue-text-gradient",
        },
        {
          name: "Typescript",
          color: "green-text-gradient",
        },
        {
          name: "Vercel",
          color: "pink-text-gradient",
        },
      ],
      image: apprenticeship_project,
      source_code_link: "https://apprenticeship-project.vercel.app/",
    }
    
    
  ];

  const projects = [
    {
      name: "CourseApp2.0",
      description:
        "A simple .NET website with full CRUD capabilities connected to SQL Server database and Google OAuth2.0. Allow visitor to leave their comments on the site.",
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
          name: "SQL-Server",
          color: "pink-text-gradient",
        },
      ],
      image: CourseApp,
      source_code_link: "https://courseapp2020250402024208.azurewebsites.net/",

    },

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
      name: "Video Presentation",
      description:
        "A video generated by AI and edited by me to present how AI is transforming the landscape in digital marketing",
      tags: [
        {
          name: "Invideo AI",
          color: "blue-text-gradient",
        },
        {
          name: "Storyblocks",
          color: "green-text-gradient",
        },
        {
          name: "iStock",
          color: "pink-text-gradient",
        },
      ],
      image: invideo_AI,
      source_code_link: "https://ai.invideo.io/watch/Uy_sX0KqHkx",
    },
  ]
  
  const certs =[
    {
      name: "Microsoft Certified: Azure AI Engineer Associate",
      description:
        "Demonstrated ability to design and implement an Azure AI solution using Azure AI services, Azure AI Search, and Azure Open AI",
      tags: [
        {
          name: "Azure AI Services",
          color: "blue-text-gradient",
        },
        {
          name: "Azure AI Search",
          color: "green-text-gradient",
        },
        {
          name: "Azure Open AI",
          color: "pink-text-gradient",
        },
      ],
      image: Azure_AI,
      source_code_link: "https://learn.microsoft.com/en-us/users/tommylam-7630/credentials/3665946c5028ef01",
    },
    {
      name: "Google Ads Video Certification",
      description:
        "Showcase your ability to get results from YouTube and Google Video advertising solutions. Certified users will demonstrate an understanding of how to drive successful campaign outcomes for awareness, consideration, and action goals using YouTube and Google Video advertising solutions",
      tags: [
        {
          name: "Google ads solutions",
          color: "blue-text-gradient",
        },
        {
          name: "Campaign Awareness",
          color: "green-text-gradient",
        },
        {
          name: "Action goals",
          color: "pink-text-gradient",
        },
      ],
      image: Google_ads,
      source_code_link: "https://skillshop.credential.net/72924d56-789d-48a7-86b3-6dc3811b8a52#acc.VKaiStOl",
    },
    {
      name: "The Hong Kong Polytechnic University : Higher Diploma in Chemical Technology",
      description:
        "A full-time 2 year programme that developed my creative thinking, analytical skills, independent learning/work skills and high levels of competitiveness",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Quantitative analysis",
          color: "green-text-gradient",
        },
        {
          name: "Qualitative analysis",
          color: "pink-text-gradient",
        },
      ],
      image: polyu,
      source_code_link: "https://www.acvp.hk/verification/sharelinks/34481edd-91f8-42ce-ac7d-b922186a9b09",
    },
  ]
  ;
  
  export { services, Webtechnologies, experiences, projects, Webprojects, BackendProjects, MLprojects, ReactNativeProjects, certs, MLtechnologies };
  