import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaEnvelope,
  FaLinkedinIn,
  FaPython,
  FaGithub,
} from "react-icons/fa";
import { SiPostgresql, SiDjango, SiJavascript, SiHtml5, SiCss3, SiDocker } from "react-icons/si";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Développeuse Python.", "Développeuse Django.", "Créatrice d'API REST (DRF).", "Curieuse de tout.", "Cat mom."],
    loop: true,
    typeSpeed: 25,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">Bienvenue sur mon portfolio en ligne</h4>
        <h1 className="text-6xl font-bold text-white">
          Bonjour, moi c'est <span className="text-designColor capitalize">Claire Ruysschaert</span>
        </h1>
        <h2 className="text-4xl font-bold text-white text-justify">
          une <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide text-justify">
          Je code en python avec le framework Django depuis 3 ans. J'ai un attrait pour le développement web et les apis.
          Venant du milieu scientifique, j'ai une approche rigoureuse et méthodique du code.
          Je suis curieuse de tout et j'aime découvrir de nouvelles choses.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Contactez-moi
          </h2>
          <div className="flex gap-4">
            <a href="https://github.com/ClaireRuysschaert" target="blank">
              <span className="bannerIcon">
                <FaGithub />
              </span>
            </a>
            <a href="https://www.linkedin.com/in/claire-ruysschaert-2a254a260/" target="blank">
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
            <a href="mailto:netclaire@hotmail.fr" target="_blank" rel="noopener noreferrer">
              <span className="bannerIcon">
                <FaEnvelope />
              </span>
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Technologies de prédilection
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaPython className="mr-1" />
              <SiDjango />
            </span>
            <span className="bannerIcon">
              <SiHtml5 className="mr-1" />
              <SiCss3 className="mr-2" />
              <SiJavascript />
            </span>
            <span className="bannerIcon">
              <SiDocker />
            </span>
            <span className="bannerIcon">
              <SiPostgresql />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
