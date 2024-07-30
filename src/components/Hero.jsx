import { HERO_CONTENT } from "../constants";
import profile from "../assets/pic_passport_pan.png";
import { motion } from "framer-motion";

function Hero() {
  const slide = (direction, delay) => {
    const distance = direction === "left" ? -100 : 100;
    return {
      hidden: { x: distance, opacity: 0 },
      show: {
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          delay: delay,
        },
      },
    };
  };

  return (
    <div className="border-b border-neutral-900 pb-16">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={slide("left", 0.2)}
              initial="hidden"
              whileInView="show"
              className="pb-16 text-6xl font-extralight lg:mt-16"
            >
              Madhav <span className="text-neutral-500">Bansal</span>
            </motion.h1>
            <motion.span
              variants={slide("left", 0.4)}
              initial="hidden"
              whileInView="show"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent text-4xl tracking-tight"
            >
              Full Stack Developer
            </motion.span>
            {/* tracking tight is for reduce spacing between letters clip-text is to give gradient to text only */}
            <motion.p
              variants={slide("left", 0.7)}
              initial="hidden"
              whileInView="show"
              className="my-2 py-6 max-w-xl tracking-tighter font-light"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              variants={slide("right", 0.5)}
              initial="hidden"
              whileInView="show"
              src={profile}
              alt="profile"
              className="w-[300px] rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
