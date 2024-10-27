import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix, projectSeven, projectEight, projectNine, projectTen } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projets"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="N'hésitez pas à jeter un coup d'oeil, tout feedback est le bienvenu!"
          des="Mes projets"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title=
          {
            <>
            Budget Mate<br></br>(en cours)
            </>
          }
          des={
            <>
            <div className="border p-1 rounded-md text-center">
            Django, DRF, Docker, Postgresql, React ...
            </div>
            <br />
            💰 Permettre le partage de dépenses entre amis ou en couple de manière simple et efficace selon le revenu de chaque personne. <br />
            🧮 L'utilisateur pourra ajouter un relevé de compte en l'important afin de calculer automatiquement le partage des charges.   <br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </>
          }
          src={projectTen}
          githubLink="https://github.com/ClaireRuysschaert/BudgetMate"
        />
        <ProjectsCard
          title=
          {
            <>
            Orange County Lettings <br></br>(Openclassrooms)
            </>
          }
          des={
            <>
            <div className="border p-1 rounded-md text-center">
            Django, SQLite, Docker, Docker Hub, GitHub Actions, Sentry, ReadTheDocs, Azure
            </div>
            <br />
            ⚙️ Refactorisation d'une app pour améliorer sa maintenabilité, performance et scalabilité. <br />
            📝 Correction des points faibles du code pour optimiser les performances. <br />
            🧪 Tests unitaires et d'intégrations <br /> <br />
              <ul className="list-disc list-inside ">
                <li className="mb-1"><strong>Sentry</strong>: surveillance, détection des erreurs</li>
                <li className="mb-1"><strong>Read The Docs</strong>: documentation (sur <u><a href="https://p13-orange-county-lettings-rtd-tutorial.readthedocs.io/fr/latest/index.html">ce lien</a></u>)</li>
                <li className="mb-1"><strong>GitHub Actions</strong>: gestion de la production du code avec pipelines CI/CD (qualité et couverture du code, tests, push image)</li>
                <li className="mb-1"><strong>Azure</strong>: déploiement automatique via webhook qui récupère la dernière image sur Docker Hub</li>
              </ul>
            </>
          }
          src={projectOne}
          githubLink="https://github.com/ClaireRuysschaert/P13-Orange-County-Lettings"
        />
        <ProjectsCard
          title=
          {
            <>
            SoftDesk : API DRF <br></br>(Openclassrooms)
            </>
          }
          des={
            <>
            <div className="border p-1 rounded-md text-center">
            Django, DjangoRestFramework, OAUTH2, JWT, Postman, Poetry
            </div>
            <br />
            🛠️ Créer une API sécurisée RESTful avec DRF. (normes OWASP / RGPD / Green Code) <br />
            🔐 Gestion de l’authentification, l’autorisation et l’accès avec OAUTH2 et JWT. <br />
            📈 Conception de la mise en oeuvre via des diagrammes UML. <br />
            👩🏻‍💻 Optimisation des performances. 
            <br /><br />
            <ul className="list-disc list-inside ">
                <li className="mb-1"><strong>Django REST Framework</strong>: Boite à outils pour la création d'API Web </li>
                <li className="mb-1"><strong>Postman</strong>: Test des endpoints</li>
                <li className="mb-1"><strong>Poetry</strong>: Gestion des versions des dépendances</li>
            </ul>
            <br />
            </>
          }
          src={projectFour}
          githubLink="https://github.com/ClaireRuysschaert/P10_SoftDesk"
        />
        <ProjectsCard
          title=
          {
            <>
            epic Events <br></br>(Openclassrooms)
            </>
          }
          des={
            <>
            <div className="border p-1 rounded-md text-center">
            SQL Alchemy, Postgresql, PgAdmin, JWT, PyJWT, argon2, click, Sentry, unittest
            </div>
            <br />
            👩🏻‍💻 Développement et sécurisation de BDD relationnelles avec SQL Alchemy et SQL. <br />
            🔐 Authentification et permissions.<br />
            📈 Conception de la mise en oeuvre via des diagrammes UML. <br />
            🔧 CRUD sur les tables de la BDD via CLI.
            <br /> <br />
            <ul className="list-disc list-inside ">
                <li className="mb-1"><strong>Sentry</strong>: surveillance, détection des erreurs</li>
                <li className="mb-1"><strong>Postgresql</strong>: moteur de base de données</li>
                <li className="mb-1"><strong>SQL Alchemy</strong>: utilisation de l'ORM</li>
                <li className="mb-1"><strong>argon2</strong>: mots de passes salés et hachés</li>
                <li className="mb-1"><strong>JSON Web Token</strong>: authentification via tokens ayant une date d'expiration</li>
              </ul>
            </>
          }
          src={projectTwo}
          githubLink="https://github.com/ClaireRuysschaert/P12_EpicEvents"
        />
        <ProjectsCard
          title=
          {
            <>
            Güdlft : Flask app <br></br>(Openclassrooms)
            </>
          }
          des={
            <>
            <div className="border p-1 rounded-md text-center">
            Flask, venv, pytest, flake8, isort, black, Git, GitHub, Locust
            </div>
            <br />
            🛠️ Améliorer une app développée avec Flask. <br />
            🐞 Déboguer le code et gérer les erreurs et exceptions. <br />
            🧪 Développer avec la méthode TDD : tests unitaires et d'intégrations avec pytest. <br />
            🔧 Préparer des rapports de performances avec Locust <br />
            🌿 Gestion de différentes versions de l'app avec des branches Git.
            <br /><br /><br /><br /><br /><br />
            </>
          }
          
          src={projectThree}
          githubLink="https://github.com/ClaireRuysschaert/P11_GUDLFT"
        />
        <ProjectsCard
          title=
          {
            <>
            LITRevu : Django app <br></br>(Openclassrooms)
            </>
          }
          des={
            <>
            <div className="border p-1 rounded-md text-center">
            Django, sqlite, Lighthouse
            </div>
            <br />
            🛠️ Créer une application avec Django <br />
            🕸️ Gestion de l'inscription, connexion, flux d'activité, commentaires et abonnements. <br />
            🔐 Authentification des utilisateurs. 
            <br /><br />
            <ul className="list-disc list-inside ">
                <li className="mb-1"><strong>Django</strong>: Permet une conception propre et pragmatique d'app web</li>
                <li className="mb-1"><strong>Lighthouse </strong>: Bonnes pratiques d'accessibilité WCAG</li>
            </ul>
            <br /><br /><br /><br /><br /><br />
            </>
          }
          
          src={projectFive}
          githubLink="https://github.com/ClaireRuysschaert/P9_OC_LITReview"
        />
        <ProjectsCard
          title=
          {
            <>
            AlgoInvest & Trade : Python app <br></br>(Openclassrooms)
            </>
          }
          des={
            <>
            <div className="border p-1 rounded-md text-center">
            Python, timeit, cProfile, pstats
            </div>
            <br />
            🔨 Répondre à une problématique de stratégie d'investissement avec un solution brute-force vs optimisée <br />
            📈 Comparaison du temps d'exécution des deux programmes avec timeit, cProfile, pstats (notation Big-O, complexité temporelle et analyse de la mémoire) <br /> 
            </>
          }
          
          src={projectSix}
          githubLink="https://github.com/ClaireRuysschaert/OC_P7_AlgoInvestAndTrade"
        />
        <ProjectsCard
          title=
          {
            <>
            Books online scrapper<br></br>(Openclassrooms)
            </>
          }
          des={
            <>
            <div className="border p-1 rounded-md text-center">
            Python, ETL, requests, BeautifulSoup, CSV, venv
            </div>
            <br />
            ⚙️ ETL depuis un site web de vente de livres en ligne, les transformer pour les exploiter de manière utile et les charger dans un CSV. <br />
            <br /><br /><br />
            </>
          }
          
          src={projectNine}
          githubLink="https://github.com/ClaireRuysschaert/OC_P2_BooksOnlineScrapper"
        />
        <ProjectsCard
          title=
          {
            <>
            Chess Tournament cli<br></br>(Openclassrooms)
            </>
          }
          des={
            <>
            <div className="border p-1 rounded-md text-center">
            Python, PEP8, OOP, MVC, flake8
            </div>
            <br />
            🔨 Structurer un programme en MVC sans framework. <br />
            🛠️ Utiliser la programmation orientée objet. <br /> 
            <br /><br /><br /><br />
            </>
          }
          
          src={projectEight}
          githubLink="https://github.com/ClaireRuysschaert/OC_P4_MVC_Chess_Tournament"
        />
        <ProjectsCard
          title=
          {
            <>
            Just stream it <br></br>(Openclassrooms)
            </>
          }
          des={
            <>
            <div className="border p-1 rounded-md text-center">
            HTML, CSS, Javascript, Bootstrap, Postman, API REST
            </div>
            <br />
            🔨 Créer une interface utilisateur dynamique et responsive. <br />
            🛠️ Interagir avec une API REST existante. <br /> 
            <br /><br /><br />
            </>
          }
          
          src={projectSeven}
          githubLink="https://github.com/ClaireRuysschaert/P6_JustStreamIt"
        />
        


      </div>
    </section>
  );
}

export default Projects