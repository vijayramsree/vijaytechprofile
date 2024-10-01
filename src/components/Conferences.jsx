import { CONFERENCE } from "../contants"
import { motion, MotionConfig } from "framer-motion"

const Conferences = () => {
  return (
    <div className="border-b border-gray-100 pb-4">
      <h1 className="my-10 text-center text-2xl">Conferences</h1>
      <div className="lg:flex justify-center">
        {CONFERENCE.map((conf, index) => {
            return (
                <div key={index} className="m-8 flex flex-wrap lg:flex-nowrap lg:justify-center">
                <div className="w-full flex lg:justify-between justify-center items-center">
                <MotionConfig transition={{ duration: 1 }}>
                    <motion.div 
                         whileInView={{ opacity: 1, scale: 1 }}
                         initial={{ opacity: 0, scale: 0.5 }}
                         transition={{
                           duration: 0.8,
                           delay: 0.5,
                           ease: [0, 0.71, 0.2, 1.01]
                         }}
                        className="w-full">
                        <h6 className="mb-4 text-center">{conf.title}</h6>
                        <div className="w-full flex justify-center">
                            <img src={conf.image} alt={conf.title} className="w-96 object-cover rounded-lg" />
                        </div>
                    </motion.div>
                </MotionConfig>
                </div>
          </div>   
            )
        })}
      </div>
    </div>
  )
}

export default Conferences
