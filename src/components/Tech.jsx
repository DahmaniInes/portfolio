import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
      {/* Titre et sous-titre – Animation textVariant() intacte, juste trigger fixé pour mobile */}
      <motion.div 
        variants={textVariant()}  // ← Animation garde ici : slide up + spring
        initial={false}  // ← Fix : Skip hidden au load
        whileInView="show"  // ← Fix : Trigger fiable
        viewport={{ once: true, amount: 0.1 }}  // ← Fix : Dès 10% visible (mobile-friendly)
      >
        <p className={styles.sectionSubText}>My Technical Skills</p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </motion.div>

      {/* Grille des cards – Pas d'animation Framer ici, donc inchangée */}
      <div className="mt-20 flex flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div key={technology.name}>
            <BallCanvas icon={technology.icon} name={technology.name} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");