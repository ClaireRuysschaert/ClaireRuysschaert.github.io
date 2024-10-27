import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSchool } from '@fortawesome/free-solid-svg-icons';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2014 - 2024
          </p>
          <h2 className="text-3xl md:text-4xl font-bold"><FontAwesomeIcon icon={faSchool} /> Formations</h2>
        </div>
        <div className="border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <div className="w-3/4">
            <ResumeCard
              title="👩🏻‍💻 Alternance Développeur d'application - Python/Django"
              subTitle=
              {
                <>
                <strong>Openclassrooms - 2 ANS</strong> <br />
                Diplôme niveau 6 (bac+3/4) reconnu par l'Etat
                </>
              }
              result="( 2023 - 2024 )"
              des={
                <>
                <div>
                J'ai réalisé 13 projets en 2 ans en totale autonomie. 
                La force de cette formation est le fait qu'on apprend en application directe sur des projets concrets. 
                Un mentor est là pour nous guider et nous aider à progresser. Chaque projet est validé par un jury de professionnels.
                J'ai pu développer des compétences en python, django, drf, docker, postgresql, javascript, html, css, et bien d'autres (<a href="#projets"><u>voir partie "mes projets"</u></a>).
                </div><br />
                </>
              }
            />
          </div>
          <div className="w-3/4">
            <ResumeCard
              title="👩🏻‍💻 Formations en autodidacte"
              subTitle=
              {
                <>
                <strong>Livres & autres - 1 an</strong> <br />
                </>
              }
              result="( 2022 - 2023 )"
              des={
                <>
                <div>
                ★ Livre interface utilisateur : Refactoring UI <br />
                ★ Formations Openclassrooms/Udemy (Git/Github, HTML5, CSS3, javascript) <br />
                ★ Livre Django : Build websites with Python & Django <br />
                ★ Livre Automate The Boring Stuff With Python (re, PyInputPlus, Path, shutiln zipfile, HTML, CSS, bs4, selenium, openpyxl, multithreading, SMTP, IMAP, Twilio, Pillow)<br />
                </div><br />
                </>
              }
            />
          </div>
          <div className="w-3/4">
            <ResumeCard
              title="👩🏻‍🔬 Master Recherche Biologie Santé"
              subTitle=
              {
                <>
                <strong>Université de Lille - 2 an</strong> <br />
                Parcours génétique, microbiologie, immunité et infection
                </>
              }
              result="( 2018 - 2019 )"
              des={""}
            />
          </div>
        <div className="w-3/4">
            <ResumeCard
              title="👩🏻‍🔬 Licence sciences de la vie"
              subTitle=
              {
                <>
                <strong>Université de Lille - 3 an</strong> <br />
                Parcours Biologie cellulaire, moléculaire et physiologie
                </>
              }
              result="( 2014 - 2017 )"
              des={""}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
