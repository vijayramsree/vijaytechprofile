import { CERTIFICATIONS } from "../contants"
import { motion } from "framer-motion"

const Certification = () => {
  return (
    <div className="border-b border-gray-100 pb-4">
      <motion.h1 
      whileInView={{ opacity: 1, y: 0}}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.5 }}
      className="my-10 text-center text-2xl">Ceritfication</motion.h1>
      <div>
        {CERTIFICATIONS.map((certification, index) => (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                <div className="w-full flex lg:max-w-xl justify-between items-center">
                    <motion.div
                    whileInView={{ opacity: 1, x: 0}}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className="w-1/4">
                        <img src={certification.image} alt={certification.title} className="w-14 h-14 object-cover rounded-lg" />
                    </motion.div>
                    <motion.div
                    whileInView={{ opacity: 1, x: 0}}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                    className="w-3/4">
                        <h6 className="mb-2 font-semibold tracking-tight">{certification.title}</h6>
                    </motion.div>
                </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Certification
