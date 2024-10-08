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
    openwebui
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
    {
      title: "Competition: ICR-Identifying Age-Related Condition (Rank 2004/6430)",
      company_name: "Kaggle",
      icon: kaggle,
      iconBg: "white",
      date: "May 2023 - Aug 2023",
      points: [
        "Developed a RandomForestRegression Model with sklearn module to predict age-related condition.",
        "Adjusted model parameters to hyperparameters to avoid over-fitting.",
        "Implemented KFOLD to evaluate the model on multiple set of data to detect issues related to underfitting or overfitting.",
        "Handled imbalanced data by weight-sampling to achieve more accurate results.",
      ],
    },
    {
      title: "Competition: Stanford Ribonanza RNA Folding (Rank 354/755)",
      company_name: "Kaggle",
      icon: kaggle,
      iconBg: "white",
      date: "Sept 2023 - Dec 2023",
      points: [
        "Developed Sinusoidal positional embedding module to incorporate positional information into RNA module with pytorch to predict RNA structure.",
        "Utilized K-fold to cross validate RNA model to improve prediction result.",
        "Tracked training process with a simple process bar created with python tqdm module.",
        "Organized and diversified workload for a team of 3 to deliver the project within deadlines.",
      ],
    },
    {
      title: "Competition: Regression with an Abalone Dataset (Rank 1206/2606)",
      company_name: "Kaggle",
      icon: kaggle,
      iconBg: "white",
      date: "Apr 2024 - May 2024",
      points: [
        "Developed two Linear Regression models using two different algorithms (LightGBM and XGBOOST) and compare them to predict the number of ring present in abalone based on their physical features.",
        "Adjusted model parameters based on data feedback to achieve more accurate results.",
        "Extracted data insights using matplotlib and seaborn library to illustrate correlation between ring present in the abalone and their corresponding physical features such as biological sex and weight etc.",
        "Organized workload and communicated effectively to deliver the project within deadlines.",
      ],
    },
    {
      title: "NeurIPS - Ariel Data Challenge 2024 (Current Rank 34/675)",
      company_name: "Kaggle",
      icon: kaggle,
      iconBg: "white",
      date: "August 2024 - Sept 2024",
      points: [
        "Loaded and cleaned raw sensor data, applied linear correction using calibration data, and corrected for exposure time, dark frames, and dead/hot pixels.",
        "Applied signal binning, polynomial fitting, and key phase detection to enhance signal calibration, reduce noise, and improve processing efficiency.",
        "Utilized Ridge regression and ensembled solutions to predict test results from processed signals for enhanced accuracy.",
        "Dynamically tuned polynomial fitting and optimized hyperparameters to enhance model performance."
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
  