import { CONTACT } from "../contants"
import { motion } from "framer-motion"
import { BiLogoGmail, BiSolidPhoneCall  } from "react-icons/bi";
const Contact = () => {
  return (
    <div className="border-b border-gray-100 pb-4">
      <motion.h1 
      whileInView={{ opacity: 1, y: 0}}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.5 }}
      className="my-10 text-center text-2xl">Get in Touch</motion.h1>
      <div className="text-center tracking-tighter">
        <motion.p 
        whileInView={{ opacity: 1, x: 0}}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="my-2">{CONTACT.address}</motion.p>
        <motion.div 
        whileInView={{ opacity: 1, x: 0}}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        className="my-2 flex justify-center items-center">
          <BiSolidPhoneCall className="mr-2" />
          <p><a href={`tel:${CONTACT.phoneNo}`}>{CONTACT.phoneNo}</a></p>
        </motion.div>
        <motion.div 
        whileInView={{ opacity: 1, x: 0}}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="my-2 flex justify-center items-center">
            <BiLogoGmail className="mr-2"/>
            <p><a href={`mailto:${CONTACT.email}`} className="underline underline-offset-8">{CONTACT.email}</a></p>
        </motion.div>
      </div>
      <div id="contact" />
    </div>
  )
}

export default Contact
