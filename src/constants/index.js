import project1 from "../assets/projects/project-1.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 3 years of hands-on experience, I have honed my skills in front-end technologies like React, JavaScript, Tailwind, HTML, CSS,
Bootstrap as well as back-end technologies like Node.js, Express, MySQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 3 years of experience, I have worked with a variety of technologies, including React, JavaScript, Tailwind, HTML, CSS, Bootstrap, Node.js, Express, MySQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;


export const PROJECTS = [
  {
    title: "Memories",
    image: project1,
    description:
      "A fully functional socialmedia platform to share memories and user authentication.",
    technologies: ["React", "Tailwind", "Express", "MongoDB"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact form to get in touch.",
    technologies: ["React", "Tailwind" , "Framer" , "Emailjs"],
  },
  {
    title: "AuraBooks",
    image: project4,
    description:
      "A bookstore website with courses as protected routes and login signup authentication",
    technologies: ["React", "Tailwind",  "Express", "MongoDB",],
  },
];
