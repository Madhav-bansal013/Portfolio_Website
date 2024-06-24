import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { motion } from "framer-motion";

const iconMovement = (duration) => ({
  initial: { y: -20 },
  show: {
    y: [20, -20],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

function Technologies() {
  return (
    <div className="border-b border-neutral-800 pb-28 ">
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 50 }}
        className="text-center my-20 text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconMovement(2)}
          initial="initial"
          animate="show"
          whileHover={{ scale: 1.1, originX: 0 }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaHtml5 className="text-6xl text-[#e34c26]" />
        </motion.div>

        <motion.div
          variants={iconMovement(3)}
          initial="initial"
          animate="show"
          whileHover={{ scale: 1.1 }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaCss3Alt className="text-6xl text-[#2965f1]" />
        </motion.div>
        <motion.div
          variants={iconMovement(5)}
          initial="initial"
          animate="show"
          whileHover={{ scale: 1.1 }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiTailwindCssFill className="text-6xl text-cyan-500" />
        </motion.div>

        <motion.div
          variants={iconMovement(4)}
          initial="initial"
          animate="show"
          whileHover={{ scale: 1.1 }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <IoLogoJavascript className="text-6xl text-yellow-300" />
        </motion.div>

        <motion.div
          variants={iconMovement(6)}
          initial="initial"
          animate="show"
          whileHover={{ scale: 1.1 }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaReact className="text-6xl text-cyan-400" />
        </motion.div>

        <motion.div
          variants={iconMovement(3)}
          initial="initial"
          animate="show"
          whileHover={{ scale: 1.1 }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaNodeJs className="text-6xl text-green-500" />
        </motion.div>

        <motion.div
          variants={iconMovement(2)}
          initial="initial"
          animate="show"
          whileHover={{ scale: 1.1 }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMongodb className="text-6xl text-green-500" />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Technologies;
