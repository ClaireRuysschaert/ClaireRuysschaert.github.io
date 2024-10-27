import React, {  useState } from 'react'
import Title from '../layouts/Title';
import Education from './Education';
import HardSkills from './HardSkills';
import SoftSkills from './SoftSkills';
import Experience from "./Experience"

const Resume = () => {
   const [educationData, setEducationData] = useState(false);
   const [HardskillData, setHardskillData] = useState(false);
   const [experienceData, setExperienceData] = useState(true);
   const [SoftskillData, setSoftskillData] = useState(false);
  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="Expériences et Compétences" des="MON PARCOURS" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          
          <li
            onClick={() =>
              setEducationData(false) &
              setHardskillData(false) &
              setExperienceData(true) &
              setSoftskillData(false)
            }
            className={`${
              experienceData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Expériences
          </li>

          <li
            onClick={() =>
              setEducationData(true) &
              setHardskillData(false) &
              setExperienceData(false) &
              setSoftskillData(false)
            }
            className={`${
              educationData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Formations
          </li>

          <li
            onClick={() =>
              setEducationData(false) &
              setHardskillData(true) &
              setExperienceData(false) &
              setSoftskillData(false)
            }
            className={`${
              HardskillData ? "border-designColor rounded-lg" : "border-transparent"
            } resumeLi`}
          >
            Hard skills
          </li>

          <li
            onClick={() =>
              setEducationData(false) &
              setHardskillData(false) &
              setExperienceData(false) &
              setSoftskillData(true)
            }
            className={`${
              SoftskillData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Soft skills
          </li>
        </ul>
      </div>
      {educationData && <Education />}
      {HardskillData && <HardSkills />}
      {SoftskillData && <SoftSkills />}
      {experienceData && <Experience />}
 
    </section>
  );
}

export default Resume