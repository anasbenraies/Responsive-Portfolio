import React, { FC } from "react";
import { SkillsTable as TableX } from "../../Components/SkillsTable";
import "./Skills.css";

interface SkillsProps {}

const Skills: FC<SkillsProps> = () => {
  return (
    <div className="skills-page">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-container">
        <div className="skills-section">
          <h3 className="skills-subtitle">Hard Skills</h3>
          <TableX
            Color="orange"
            headers={["Skill", "Level"]}
            body={[
              ["JavaScript", "Expert"],
              ["React", "Intermediate"],
              ["Node.js", "Intermediate"],
              ["TypeScript", "Intermediate"],
            ]}
          />
        </div>

        <div className="skills-section">
          <h3 className="skills-subtitle">Soft Skills & Utilities</h3>
          <TableX
            Color="black"
            headers={["Skill", "Level"]}
            body={[
              ["Teamwork", "Advanced"],
              ["Communication", "Advanced"],
              ["Problem Solving", "Expert"],
              ["Time Management", "Advanced"],
            ]}
          />
        </div>

        <div className="skills-section">
          <h3 className="skills-subtitle">Certifications</h3>
          <TableX
            Color="purple"
            headers={["Certification", "Level"]}
            body={[
              ["English", "Expert"],
              ["Spanish", "Intermediate"],
              ["Web Dev Bootcamp", "Completed"],
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
