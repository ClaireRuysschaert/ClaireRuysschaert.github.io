import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - 2024
          </p>
          <h2 className="text-3xl md:text-4xl font-bold"><FontAwesomeIcon icon={faBriefcase} /> Expériences professionnelles</h2>
        </div>
        <div className="border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <div className="w-5/6">
            <ResumeCard
              title="👩🏻‍💻 Developpeuse Python/Django, Django Rest Framework (DRF)"
              subTitle=
              {
                <>
                <strong>YESCAPA - ALTERNANCE 2 ANS (Reconversion professionnelle)</strong> <br />
                N°1 de la location de camping-cars et vans aménagés entre particuliers en Europe à + d'1 million d'utilisateurs. 
                </>
              }
              result="( 2023 - Présent )"
              des={
                <>
                <div>
                  ✳ Création et amélioration de l'API DRF <br />
                  <div className="ml-10">➤ Développement d'une nouvelle api dans un contexte de fusion d'entreprises</div>
                  <div className="ml-10">➤ Mise en place de l'authentification et de la sécurité : PASETO, API keys</div>
                  <div className="ml-10">➤ Synchronisation des calendriers des utilisateurs des 2 plateformes, amélioration de la search ...</div>
                  <div className="ml-10">➤ Gestion du mapping et migration des annonces et des utilisateurs</div>
                  <div className="ml-10">➤ Rédaction de documentation technique pour les fonctionnalités développées avec SWAGGER</div>
                </div><br />

                <div>
                  ✳ Création de nouvelles Features
                  <div className="ml-10">➤ Permettre aux propriétaires de mieux gérer leurs réservations instantanées</div>
                  <div className="ml-10">➤ Ajout de périodes iCal dans les calendriers</div> <br />
                </div>

                <div>
                  ✳ Résolution de bugs et maintenance
                  <div className="ml-10">➤ Amélioration (tests, typing, documentation) et refactorisation du code existant pour garantir la stabilité et les performances de l’application</div>
                  <div className="ml-10">➤ Création et amélioration de tests unitaires, d’intégrations avec TestCase</div>
                  <div className="ml-10">➤ Interactions avec la base de données et optimisation des performances via les querysets</div> <br />
                </div>

                <div>
                  ✳ Augmentation du taux de conversion et récupération de données
                  <div className="ml-10">➤ Création et gestion de mails  (second conducteur, assurances…)</div>
                  <div className="ml-10">➤ Mise en place d’un webhook sur Looker pour récupérer les data quotidiennes de performance de l’entreprise. Formatter les data et les envoyer sous forme de notification via l’API Slack en utilisant Postman.</div> <br />
                </div>

                <div>
                  ✳ Communication et collaboration
                  <div className="ml-10">➤ Participation à des cérémonies agiles : daily, rétrospectives, sprint review. Mise en place de la méthode shape up.</div>
                  <div className="ml-10">➤ Proactive, collaboration avec les équipes produit et opérationel pour la clarification des exigences.</div>
                  <div className="ml-10">➤ Communique en anglais avec l'équipe néérlandaise et participe à la mise en place du cadre de travail (outils collaboratifs).</div> <br />
                </div>

                Technologies utilisées : <br />
                ★ <strong>Git</strong> : gestion de version, gestion de branches, MR, review, résolution de conflits <br />
                ★ <strong>Docker</strong> pour le développement en local <br />
                ★ <strong>Jira</strong> pour la gestion de projet (gestion des tickets, suivi des sprints, tâches)<br />
                ★ <strong>Postman</strong> pour les tests <br />
                ★ <strong>Sentry</strong> et papertrail pour le monitoring des erreurs <br />
                ★ <strong>Slack</strong> pour la communication <br />
                ★ <strong>Tuple</strong> pour la communication avec l'équipe néérlandaise<br />
                ★ <strong>Looker</strong> pour la récupération de données <br />
                ★ <strong>Poeditor</strong> pour les traductions <br />
                ★ <strong>Celery</strong> pour la gestion des tâches <br />
                </>
              }
            />
          </div>
          <div className="w-5/6">
            <ResumeCard
              title="👩🏻‍🔬 Ingénieure d’étude sur les sarcomes des tissus mous (cancer)"
              subTitle=
              {
                <>
                <strong>INSERM U1218 à l’institut Bergonié de Bordeaux - 3 ANS</strong> <br />
                Projet MULTIPLI
                </>
              }
              result="( 2020 - 2023 )"
              des={
                <>
                <div>
                ★ Gestion des prélèvements à visée de recherche dans le respect de l’éthique et de la réglementation <br />
                ★ Rédaction de modes opératoires, de documents qualité <br />
                ★ Participation au choix et à la validation de la technique de méthodes <br />
                ★ Compétences techniques en anapath et biologie moléculaire <br />
                </div><br />
                </>
              }
            />
          </div>
          <div className="w-5/6">
            <ResumeCard
              title="👩🏻‍🔬 Assistante de recherche sur la malaria"
              subTitle=
              {
                <>
                <strong>CIIL à l’institut Pasteur de Lille - 8 mois</strong> <br />
                </>
              }
              result="( 2018 - 2019 )"
              des={
                <>
                <div>
                ★ Optimisation de protocoles <br />
                ★ Tenue d’un cahier de laboratoire, traçabilité, présentation des résultats en anglais, rédaction d’un mémoire de recherche <br />
                ★ Compétences techniques biochimie et microbiologie <br />
                </div><br />
                </>
              }
            />
          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default Experience;