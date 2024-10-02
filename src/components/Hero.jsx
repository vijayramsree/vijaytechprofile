import { HERO_CONTENT } from "../contants"
import vijayProfilePic from "../assets/vijay.png"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const container = delay => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay }
    }
})

const Hero = () => {

  const handleDownload = () => {
    window.open('/Senior-Fullstack-Engineer-Vijayakumar.pdf', '_blank');
  }

  return (
    <div className="mt-10 border-b border-gray-100 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full order-2 lg:order-1 lg:w-1/2">
            <div className="flex flex-col font-thin lg:items-start">
                <motion.h1 
                variants={container(0)}
                initial="hidden"
                animate="visible"
                className="pb-4 text-4xl font-thin tracking-tight lg: mt-8 lg:text-4xl">
                    Vijayakumar Chandrasekar
                </motion.h1>
                <motion.span variants={container(0.5)}
                initial="hidden"
                animate="visible"
                 className="bg-clip-text text-2xl tracking-tight text-shadow-md">Full Stack Developer</motion.span>
                <motion.p variants={container(1)}
                initial="hidden"
                animate="visible" className="my-6 lg:max-w-xl font-light tracking-tighter">{HERO_CONTENT}</motion.p>
                <motion.div variants={container(1)}
                initial="hidden"
                animate="visible" 
                className="mb-6 flex items-center lg:justify-center gap-4 text-2xl">
                    <a href="https://www.linkedin.com/in/vijayakumar-chandrasekar-84864778/" target="_blank"><FaLinkedin /></a>
                    {/* <a href="https://github.com/vijayramsree" target="_blank"><FaGithub /></a> */}
                    <button className="border p-2 border-gray-500 rounded-full text-sm hover:bg-slate-800 hover:text-gray-200 hover:border-gray-100 cursor-pointer" onClick={handleDownload}>Grab My Resume</button>
                    <button className="border p-2 px-3 border-gray-200 bg-slate-800 text-gray-100 rounded-full text-sm hover:bg-white hover:text-slate-800 hover:border-slate-800 cursor-pointer"><a href="#contact">Contact Me</a></button>
                </motion.div>
            </div>
        </div>
        <div className="w-full order-1 lg:order-2 lg:w-1/2 lg:p-8">
            <div className="flex justify-center w-5/12">
                <motion.img initial={{ x:100, opacity: 0}} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 1.2 }} src={vijayProfilePic} alt="Vijay" className="w-full h-full shadow-xl object-cover rounded-xl" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
