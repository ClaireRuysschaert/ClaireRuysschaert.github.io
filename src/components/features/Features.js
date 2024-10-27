import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import { FaGlobe, FaServer } from "react-icons/fa";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="services"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="" des="Mes services" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="App Development"
          des="Conception et developpement d'applications web performantes et sécurisées avec Django."
          icon={<AiFillAppstore />}
        />
        <Card
          title="API Development"
          des="Création d'API REST avec Django Rest Framework. Documentation avec Swagger."
          icon={<FaServer />}
        />
        <Card
          title="Hosting Websites"
          des="Déploiement et gestion de sites web via des plateformes cloud comme Azure."
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
}

export default Features