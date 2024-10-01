import { EXPERIENCES } from "../contants"
import { motion } from "framer-motion"

const Experience = () => {
  return (
    <div className="border-b border-gray-100 pb-4">
      <motion.h1 
      whileInView={{ opacity: 1, y: 0}}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.5 }}
      className="my-10 text-center text-2xl">Experience</motion.h1>
      <div>
        {EXPERIENCES.map((experience, index) => (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                <motion.div 
                whileInView={{ opacity: 1, x: 0}}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="w-full lg:w-1/4">
                    <p className="mb-2 text-sm text-gray-400">{experience.year}</p>
                </motion.div>
                <motion.div 
                whileInView={{ opacity: 1, x: 0}}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className="w-full lg:max-w-xl lg:w-3/4">
                    <h6 className="mb-2 font-semibold tracking-tight">{experience.role} - <span className="text-green-800 px-2">{experience.company}</span></h6>
                    {experience.description.map((desc, idx) => (
                        <p key={idx} className="mb-4 text-gray-400">{desc}</p>
                    ))}
                    <div className="flex flex-wrap">
                        {experience.technologies.map((technology, index) => (
                            <span key={index} className="mr-4 text-xs p-2 my-2 bg-blue-100 rounded-lg text-gray-400">{technology}</span>
                        ))}
                    </div>
                </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
