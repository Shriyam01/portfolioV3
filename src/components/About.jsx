import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import me from "../assets/my_pic.png"; 

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt={title}
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <div className='mt-8 flex flex-col md:flex-row items-center gap-10'>
        {/* Overview Text */}
        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className='flex-1 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          <p>
            I'm a passionate machine learning enthusiast and developer with hands-on experience in Python, C++, 
            and cutting-edge frameworks like Streamlit, LlamaIndex, LangChain, and OpenCV. I specialize in building 
            intelligent systems using Generative AI, RAG, and computer vision to solve real-world problems. 
            From crafting semantic search engines to developing game-based detection systems, I turn complex 
            challenges into user-friendly, scalable solutions. Let’s build something impactful together!
          </p>
        </motion.div>

        {/* Profile Picture */}
        <div className='flex-shrink-0 group relative'>
          <img
            src={me} // Replace with the actual path to your profile picture
            alt='Profile'
            className='w-64 h-64 rounded-full object-cover shadow-lg border-4 border-[#915eff] transition-transform duration-500 ease-in-out hover:scale-125 hover:rotate-3 group-hover:shadow-[0_0_30px_10px_rgba(145,94,255,0.6)]'
          />
        </div>
      </div>

      {/* Uncomment this section if you want to display services */}
      {/* <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}
    </>
  );
};

export default SectionWrapper(About, "about");
