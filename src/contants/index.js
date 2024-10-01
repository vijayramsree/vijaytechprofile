
import w3c from "../assets/w3c.png";
import microsoft from "../assets/microsoft.png";
import linkedin from "../assets/LinkedIn.png";
import connectTech from "../assets/ConnectTech.jpg";
import reactConf from "../assets/ReactConf.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With +12 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, PHP, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `Senior Full Stack Engineer with over 12+ years of comprehensive experience in designing and implementing both frontend and backend solutions. Skilled in a range of technologies and frameworks, with a strong emphasis on creating efficient, scalable, and maintainable applications.`

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Engineer",
    company: "PMG",
    description: ['Developed micro frontend applications using Single Page Application (SPA) frameworks, breaking down a monolithic frontend into smaller, autonomous modules. On the backend, designed and implemented microservices, enabling independent development and deployment of services.', 'Created a reusable component library using React and TypeScript integrated with Storybook. This library facilitated component reuse across all application levels (pillars), promoting consistency and efficiency in frontend development. On the backend, developed reusable modules and services to streamline backend processes.', 'Led the recent migration of our platform\'s frontend applications from React 16 to React 18. This involved planning, testing, and execution to ensure that we were utilizing React 18\'s latest features and enhancements, ensuring increased performance, security, and maintainability.'],
    technologies: ["Javascript", "ReactJS", "NextJS", "Redux", "TypeScript", "StoryBook", "Micro Frontend"],
  },
  {
    year: "2019 - 2023",
    role: "Senior Full Stack Engineer",
    company: "PayPal",
    description: ['Worked as a full stack engineer in PayPal Messaging Team in customer success platform and build the chat application for global PayPal customer support.', 'Directly working with IBM Watson tool and genesis routing development team to integrate the chat bot in our chat application.', 'Implemented various experimentation in the application level also monitoring and logging the user feedback based on the treatment to make sure provide the best experience to customers.'],
    technologies: ["HTML5", "CSS3", "ReactJS", "NodeJS", "ExpressJS", "GraphQL", "MongoDB"],
  },
  {
    year: "2014 - 2019",
    role: "Tech Lead",
    company: "NESS (Client - PayPal)",
    description: ['Managed both US and Canada Marketing development team to deliver all of the regional PayPal campaigns and promotions and ensure the quality of the product.', 'Participated on XOOM.Com integration with MPP platform. In MPP side we showed the corresponding bank charges and XOOM fees based sending and receiving countries. Also integrated XOOM Fee Calculator in Send Money Marketing page.', ' As the lead engineer for North America, I serve as the primary point of contact for all US & Canada marketing stakeholders and am responsible for analyzing and refining all project requirements, advising on solutions, devising architectural plan for my engineering team, setting milestones and ensuring deadlines are met.', 'I am also actively involved in the implementation of Click-to-Chat, a chat service that connects users to customer service reps, that is scheduled to be rolled out across all markets that PayPal operates in. In this implementation, my responsibility is to closely work with PayPal analytical team and web tracking (FPTI) team in order to help them capture and record the user actions on Click-to-Chat widget.'],
    technologies: ["ReactJS", "DustJS", "D3.js", "Experimentation", "A/B Testing"],
  },
  {
    year: "2013 - 2014",
    role: "Frontend Engineer",
    company: "TCS (HomeDepot)",
    description: ['Act as a Module Lead for THD SCM (The Home Depot).', 'Provide status reporting of team activities against the program plan or schedule', 'Ensure deliverables are prepared to satisfy the project requirements and schedule'],
    technologies: ["JavaScript", "HTML5", "JQuery Mobile", "JQuery"],
  },
  {
    year: "2011 - 2013",
    role: "Javascript Developer",
    company: "CTS (Walgreens)",
    description: ['Communicated with back-end developers, system engineers and web designers to receive data needed for development.', 'Interacted and coordinated with technical teams and creative designers to integrate front end design with back-end technology.'],
    technologies: ["JavaScript", "HTML5", "JSP", "JQuery", "JAVA", "Angular"],
  },
  {
    year: "2008 - 2011",
    role: "Javascript Developer",
    company: "Synamen Technologies",
    description: ['Creating, updating, and maintaining multiple web sites, portal.', 'Handling web development projects which include requirement analysis, design, development and database creation and maintenance.', 'Web Programming, script development.', 'Cloud hosting and MySQL database performance tuning'],
    technologies: ["HTML", "CSS", "PHP", "JavaScript", "PhotoShop", "MySQL"],
  },
];

export const CERTIFICATIONS = [
    {
        title: "W3C JavaScript Developer Certification",
        image: w3c,
    },
    {
        title: "Microsoft HTML5, CSS3 Certification",
        image: microsoft,
    },
    {
        title: "W3C jQuery Developer Certification.",
        image: w3c,
    },
    {
        title: "ChatGPT for Web Developer",
        image: linkedin,
    },
    {
        title: "Building Single Page Applications (SPAs) in React",
        image: linkedin,
    },
];

export const CONFERENCE = [
    {
        title: "Connect Tech Conference - 2023",
        image: connectTech,
    },
    {
        title: "React Conf - 2024",
        image: reactConf
    }
]

export const CONTACT = {
  address: "Leander, Texas - 78641 ",
  phoneNo: "+1 (408) 250 7449 ",
  email: "vijayramsree@gmail.com",
};