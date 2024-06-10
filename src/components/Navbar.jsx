import logo from "../assets/mb-white.png"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
      <div className="flex items-center">
        <motion.img 
        drag
        dragConstraints= {{ left:0 , right: 0 , top: 0 , bottom: 0}}
        dragElastic={0.5}
        whileInView={{rotate: 0 , opacity:1}}
        initial={{rotate:180 , opacity:0}}
        transition={{duration:0.4}}
        className="mx-2 w-12 h-13 cursor-pointer" src={logo} alt="logo"/>
      </div>

      <motion.div 
      whileInView={{x:0 , opacity:1}}
      initial={{x:100 , opacity:0}}
      transition={{duration:0.5}}
      className="flex items-center m-8 gap-4 text-2xl text-white">
        <a href="https://www.linkedin.com/in/madhav-bansal-08355822b" target="_blank">
          <FaLinkedin/>
        </a>
        <a href="https://github.com/Madhav-bansal013" target="_blank">
          <FaGithub/>
        </a>
        <a href="mailto:madhavbsnl013@gmail.com" target="_blank">
          <IoMdMail/>
        </a>
      </motion.div>
    </nav>
  )
}

export default Navbar
