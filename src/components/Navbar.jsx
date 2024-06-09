import logo from "../assets/mb-white.png"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

function Navbar() {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
      <div className="flex items-center">
        <img className="mx-2 w-11 h-12" src={logo} alt="logo"/>
      </div>

      <div className="flex items-center m-8 gap-4 text-2xl text-white">
        <a href="https://www.linkedin.com/in/madhav-bansal-08355822b" target="_blank">
          <FaLinkedin/>
        </a>
        <a href="https://github.com/Madhav-bansal013" target="_blank">
          <FaGithub/>
        </a>
        <a href="mailto:madhavbsnl013@gmail.com" target="_blank">
          <IoMdMail/>
        </a>
      </div>
    </nav>
  )
}

export default Navbar
