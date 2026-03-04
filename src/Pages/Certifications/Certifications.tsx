import type { FC } from "react";
import { SkillsTable as TableX } from "../../Components/SkillsTable";
import "../Skills/Skills.css";

interface CertificationsProps { }

const Certifications: FC<CertificationsProps> = () => {
    return (
        <div className="skills-page">
            <h2 className="skills-title">My Certifications & Awards</h2>
            <div className="skills-container">
                <div className="skills-section">
                    <h3 className="skills-subtitle">Frameworks and Libraries</h3>
                    <TableX
                        Color="purple"
                        headers={["Skill", "Details"]}
                        body={[
                            ["Frensh", "DELF B2"],
                            ["English", "IELTS B2"],
                            ["IT Specialist - JavaScript", "Certiport 2024"],
                            ["IT Specialist - Databases", "Certiport 2024"],
                            ["IT Specialist - Software Development", "Certiport 2023"],
                            ["IT Specialist - Java", "Certiport 2022"],
                            ["First Place in the Agile Hackathon", "2022"],
                        ]}
                    />
                </div>

                {/* <div className="skills-section">
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
        </div> */}
            </div>
        </div>
    );
};

export default Certifications;






