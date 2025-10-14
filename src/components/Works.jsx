import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  date, // Ajout du paramètre date
}) => {
  return (
    <motion.div
      // Changement : Supprimez le délai index * 0.5 (géré par le stagger du parent)
      // et forcez un délai initial à 0 pour que le stagger prenne le relais
      variants={fadeIn("up", "spring", 0, 0.75)} // Délai à 0
      initial="hidden" // Ajout explicite pour forcer l'état initial
      whileInView="show" // Déclencheur individuel en backup
      viewport={{ once: true, amount: 0.1 }}
      whileHover={{ scale: 1.05, rotate: 5 }}
      className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full cursor-pointer'
    >
      <div className='relative w-full h-[230px]'>
        <img
          src={image}
          alt='project_image'
          className='w-full h-full object-cover rounded-2xl'
        />

        <div className='absolute inset-0 flex justify-between m-3 card-img_hover'>
          {/* Date à gauche */}
          <div className='bg-black bg-opacity-70 px-3 py-1 rounded-full flex items-center h-fit'>
            <p className='text-white text-[12px] font-semibold'>{date}</p>
          </div>

          {/* Icône GitHub à droite */}
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
          >
            <img
              src={github}
              alt='source code'
              className='w-1/2 h-1/2 object-contain'
            />
          </div>
        </div>
      </div>

      <div className='mt-5'>
        <h3 className='text-white font-bold text-[24px]'>{name}</h3>
        <p className='mt-2 text-secondary text-[14px]'>{description}</p>
      </div>

      <div className='mt-4 flex flex-wrap gap-2'>
        {tags.map((tag) => (
          <p
            key={`${name}-${tag.name}`}
            className={`text-[14px] ${tag.color}`}
          >
            #{tag.name}
          </p>
        ))}
      </div>
      
    </motion.div>
  );
};

const Works = () => {
  // Ajout : Variantes pour le conteneur avec staggerChildren
  const containerVariants = {
    hidden: { opacity: 1 }, // Pas d'opacité 0 pour le conteneur, juste pour les enfants
    show: {
      transition: {
        staggerChildren: 0.07, // Décalage de 70ms entre chaque carte
      },
    },
  };

  return (
    <>
      {/* Fix : Ajout initial={false} et whileInView pour trigger indépendant sur mobile */}
      <motion.div 
        variants={textVariant()}
        initial={false}
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        <p className={`${styles.sectionSubText} `}>My Academic Highlights</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        {/* Fix : Même ajout pour le paragraphe */}
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          initial={false}
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          These academic projects demonstrate the skills and knowledge I acquired during my studies. Each project highlights practical applications of technologies, problem-solving abilities, and my capacity to implement innovative solutions, often through effective collaboration in team settings.
        </motion.p>
      </div>

      {/* Changement principal : Enveloppez dans motion.div avec stagger */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }} // Déclenche tôt sur mobile
        className='mt-20 flex flex-wrap gap-7'
      >
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(Works, "");