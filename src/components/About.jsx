import { ABOUT_TEXT } from "../contants"
import { motion } from "framer-motion"

const About = () => {
  return (
    <div className="border-b border-gray-100 pb-4">
      <motion.h1 
      whileInView={{ opacity: 1, y: 0}}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 1.5 }}
      className="my-10 text-center text-2xl">Professional Summary</motion.h1>
      <div className="flex flex-wrap">
        <div className="w-full font-light tracking-tighter">
            {ABOUT_TEXT}
            <ul className="pt-5 font-light tracking-tighter">
                <motion.li 
                whileInView={{ opacity: 1, x: 0}}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }} 
                className="pb-4">
                    <strong><i>Frontend Expertise:</i></strong> &nbsp;Proficient in developing frontend applications with <strong>React.js</strong> and <strong>Vue.js</strong>, utilizing <strong>JSX</strong>, <strong>TypeScript</strong>, and <strong>ES6</strong> for reusable component definition and managing component lifecycles, state, DOM events, and forms. Experienced in <strong>React Query</strong> for efficient data fetching, caching, and synchronization, <strong>Redux Toolkit (RTK)</strong> for simplified and efficient Redux state management, <strong>Redux-Saga</strong> for handling complex side effects and asynchronous actions and <strong>React Router</strong> for implementing dynamic and nested routing in single-page applications.
                </motion.li>
                <motion.li 
                whileInView={{ opacity: 1, x: 0}}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.75 }} 
                className="pb-4">
                    <strong><i>Backend Proficiency:</i></strong> &nbsp;Experienced with <strong>Node.js</strong>, <strong>NextJS</strong> and <strong>Express.js</strong> for building scalable server-side applications, <strong>RESTful</strong> API design, and <strong>GraphQL</strong> for efficient data querying and manipulation.
                </motion.li>
                <motion.li  
                whileInView={{ opacity: 1, x: 0}}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }} 
                className="pb-4">
                    <strong><i>Micro Frontend Architecture:</i></strong> &nbsp;Successfully implemented micro frontend architecture using SPA frameworks, enabling modular development and independent deployment of frontend components, improving scalability and maintainability.
                </motion.li>
                <motion.li  
                whileInView={{ opacity: 1, x: 0}}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1.25 }} 
                className="pb-4">
                    <strong><i>AI Tools for Code Standard and Optimization:</i></strong> &nbsp;Proficient in using AI tools such as <strong>GitHub Copilot</strong> and <strong>Tabnine</strong> to enhance coding standards and quality, and <strong>CoderabbitAI</strong> for PR review, providing real-time suggestions, automated code generation, and debugging assistance.
                </motion.li>
                <motion.li 
                whileInView={{ opacity: 1, x: 0}}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }} 
                className="pb-4">
                    <strong><i>Tooling and Optimization:</i></strong>&nbsp;Utilized Babel, Grunt, <strong>Webpack</strong> and <strong>ViteJS</strong> for bundling, minification, compilation, and code cleaning, ensuring high performance and maintainability of frontend code.
                </motion.li>
                <motion.li 
                whileInView={{ opacity: 1, x: 0}}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1.75 }} 
                className="pb-4">
                    <strong><i>CI/CD and DevOps:</i></strong>&nbsp;Experienced in CI/CD processes using <strong>Git</strong>, <strong>Jenkins</strong>, <strong>Docker</strong>, and <strong>GitHub Actions</strong>, and proficient in using issue tracking tools like JIRA and Trello for efficient project management.
                </motion.li>
                <motion.li 
                whileInView={{ opacity: 1, x: 0}}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 2 }} 
                className="pb-4">
                    <strong><i>Observability:</i></strong>&nbsp;Experienced with observability tools such as <strong>Datadog</strong>, <strong>Splunk</strong>, and <strong>Grafana</strong> for monitoring application performance, logging, and enhancing system observability.
                </motion.li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default About
