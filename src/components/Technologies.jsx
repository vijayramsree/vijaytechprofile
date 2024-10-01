import { FaHtml5 , FaNodeJs} from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { DiCss3, DiJira } from "react-icons/di";
import { GrLaunch } from "react-icons/gr";
import { TbBrandNextjs } from "react-icons/tb";
import { VscVscodeInsiders, VscGithubAction } from "react-icons/vsc";
import { AiOutlineDeploymentUnit } from "react-icons/ai";
import { BiLogoJavascript, BiLogoTypescript, BiLogoVuejs, BiLogoRedux, BiLogoAngular, BiLogoNodejs, BiLogoPhp, BiLogoPython, BiLogoGraphql, BiLogoMongodb } from "react-icons/bi";
import { RiReactjsLine, RiNextjsLine  } from "react-icons/ri";
import { SiExpress, SiJest, SiCypress, SiPlaywright, SiJenkins, SiGrafana, SiSplunk, SiDatadog, SiMongodb } from "react-icons/si";
import { motion } from 'framer-motion';

const iconVariants = duration => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatype: "reverse",
        }
    }
}) 

const Technologies = () => {
  return (
    <div className="border-b border-gray-200 pb-24">
        <motion.h1 
        whileInView={{ opacity: 1, y: 0}}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-10 text-center text-2xl">Technologies</motion.h1>
        <div className='flex flex-wrap justify-center gap-4'>
            <motion.div 
            whileInView={{ opacity: 1, x: 0}}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }} 
            className='border p-4 border-gray-300 rounded-md shadow-md w-full lg:w-1/4 md:2/4'>
                <h6 className="underline mb-4 text-center">Frontend Technologies</h6>
                <div className="flex flex-wrap w-full">
                    <div className="w-1/2 justify-end">
                        <ul className="mr-2">
                            <li><div className="flex items-center justify-end"><p>HTML5</p><FaHtml5 className="ml-2" /></div></li>
                            <li><div className="flex items-center justify-end"><p>CSS3</p><DiCss3 className="ml-2" /></div></li>
                            <li><div className="flex items-center justify-end"><p>ReactJS</p><RiReactjsLine className="ml-2" /></div></li>
                            <li><div className="flex items-center justify-end"><p>JavaScript</p><BiLogoJavascript className="ml-2" /></div></li>
                        </ul>
                    </div>
                    <div className="w-1/2 justify-start">
                        <ul className="ml-2">
                            <li><div className="flex items-center justify-start"><BiLogoTypescript className="mr-2" /><p>TypeScript</p></div></li>
                            <li><div className="flex items-center justify-start"><BiLogoVuejs className="mr-2" /><p>VueJS</p></div></li>
                            <li><div className="flex items-center justify-start"><BiLogoRedux className="mr-2" /><p>Redux</p></div></li>
                            <li><div className="flex items-center justify-start"><BiLogoAngular className="mr-2" /><p>AngularJS</p></div></li>
                        </ul>
                    </div>
                </div>
            </motion.div>
            <motion.div 
            whileInView={{ opacity: 1, x: 0}}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}  
            className='border p-4 border-gray-300 rounded-md shadow-md w-full lg:w-1/4 md:2/4'>
                <h6 className="underline mb-4 text-center">Backend Technologies</h6>
                <div className="flex flex-wrap w-full">
                    <div className="w-1/2 justify-end">
                        <ul className="mr-2">
                        <li><div className="flex items-center justify-end"><p>Node JS</p><BiLogoNodejs className="ml-2" /></div></li>
                        <li><div className="flex items-center justify-end"><p>Next JS</p><RiNextjsLine className="ml-2" /></div></li>
                        <li><div className="flex items-center justify-end"><p>ExpressJS</p><SiExpress className="ml-2" /></div></li>
                        <li><div className="flex items-center justify-end"><p>PHP</p><BiLogoPhp className="ml-2" /></div></li>
                        </ul>
                    </div>
                    <div className="w-1/2 justify-start">
                        <ul className="ml-2">
                            <li><div className="flex items-center"><BiLogoPython className="mr-2" /><p>Python</p></div></li>
                            <li><div className="flex items-center"><FaGear className="mr-2" /><p>REST API</p></div></li>
                            <li><div className="flex items-center"><BiLogoGraphql className="mr-2" /><p>GraphQL</p></div></li>
                            <li><div className="flex items-center"><BiLogoMongodb className="mr-2" /><p>MongoDB</p></div></li>
                        </ul>
                    </div>
                </div>
            </motion.div>
        </div>
        <div className='flex flex-wrap justify-center gap-4 mt-8'>
            <motion.div 
            whileInView={{ opacity: 1, x: 0}}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5 }}  
            className='border p-4 border-gray-300 rounded-md shadow-md w-full lg:w-1/4 md:2/4'>
                <h6 className="underline mb-4 text-center">Testing Frameworks & Tools</h6>
                <div className="flex flex-wrap w-full">
                    <div className="w-1/2 justify-end">
                        <ul className="mr-2">
                            <li><div className="flex items-center justify-end"><p>JEST</p><SiJest className="m1-2" /></div></li>
                            <li><div className="flex items-center justify-end"><p>Cypress</p><SiCypress className="ml-2" /></div></li>
                            <li><div className="flex items-center justify-end"><p>Playwrite</p><SiPlaywright className="ml-2" /></div></li>
                        </ul>
                    </div>
                    <div className="w-1/2 justify-start">
                        <ul className="ml-2">
                        <li><div className="flex items-center justify-start"><GrLaunch className="mr-2" /><p>LaunchDarkly</p></div></li>
                        <li><div className="flex items-center justify-start"><DiJira className="mr-2" /><p>JIRA</p></div></li>
                        <li><div className="flex items-center justify-start"><VscVscodeInsiders className="mr-2" /><p>VS Code</p></div></li>
                        </ul>
                    </div>
                </div>
            </motion.div>
            <motion.div whileInView={{ opacity: 1, x: 0}}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1.5 }}  
            className='border p-4 border-gray-300 rounded-md shadow-md w-full lg:w-1/4 md:2/4'>
                <h6 className="underline mb-4 text-center">Devops & Observability</h6>
                <div className="flex flex-wrap w-full">
                    <div className="w-1/2 justify-end">
                        <ul className="mr-2">
                            <li><div className="flex items-center justify-end"><p>Jenkins</p><SiJenkins className="ml-2" /></div></li>
                            <li><div className="flex items-center justify-end"><p>CI/CD Pipeline</p><AiOutlineDeploymentUnit className="ml-2" /></div></li>
                            <li><div className="flex items-center justify-end"><p>GitHub Actions</p><VscGithubAction className="ml-2" /></div></li>
                        </ul>
                    </div>
                    <div className="w-1/2 justify-start">
                        <ul className="ml-2">
                            <li><div className="flex items-center justify-start"><SiGrafana className="mr-2" /><p>Grafana</p></div></li>
                            <li><div className="flex items-center justify-start"><SiSplunk className="mr-2" /><p>Splunk</p></div></li>
                            <li><div className="flex items-center justify-start"><SiDatadog className="mr-2" /><p>DataDog</p></div></li>
                        </ul>
                    </div>
                </div>
            </motion.div>
        </div>
        {/* <div className="flex flex-wrap justify-center gap-4">
            <motion.div 
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate" 
                className="rounded-xl border-4 border-gray-200 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400" />
            </motion.div>
            <motion.div variants={iconVariants(3)}
                initial="initial"
                animate="animate"  
                className="rounded-xl border-4 border-gray-200 p-4">
                <TbBrandNextjs className="text-7xl" />
            </motion.div>
            <motion.div variants={iconVariants(5)}
                initial="initial"
                animate="animate"  
                className="rounded-xl border-4 border-gray-200 p-4">
                <SiMongodb className="text-7xl text-green-500" />
            </motion.div>
            <motion.div variants={iconVariants(2)}
                initial="initial"
                animate="animate" 
                className="rounded-xl border-4 border-gray-200 p-4">
                <FaNodeJs className="text-7xl text-green-500" />
            </motion.div> */}
            {/* <motion.div variants={iconVariants(6)}
                initial="initial"
                animate="animate" 
                className="rounded-xl border-4 border-gray-200 p-4">
                <BiLogoPostgresql className="text-7xl text-cyan-400" />
            </motion.div> */}
        {/* </div> */}
    </div>
  )
}

export default Technologies
