import React, { useState, useRef } from "react";
import { Grid } from "semantic-ui-react";
import DisplayCard from "../../Components/Cards/DisplayCard";
import CardProj from "../../Components/Cards/CardProj";
import "./Projects.css";

const Projects: React.FC = () => {
  const [ProjectName, setProjectName] = useState(
    "Click on Projects to Visualize them"
  );
  const displayRef = useRef<HTMLDivElement | null>(null);

  const handleClick = (name: string) => {
    setProjectName(name);
    // Only scroll into view on small/mobile screens
    // Use matchMedia so the behavior adapts if the user resizes the window
    if (typeof window !== "undefined" && window.matchMedia) {
      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      if (isMobile) {
        displayRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <div className="projects-page">
      <Grid stackable columns={2} divided className="projects-grid">
        <Grid.Row stretched>
          {/* Left side - Display */}
          <Grid.Column width={8} className="display-section">
            <div ref={displayRef}>
              <DisplayCard ProjectTitle={ProjectName} />
            </div>
          </Grid.Column>

          {/* Right side - List of Projects */}
          <Grid.Column width={8} className="projects-list">
            <div onClick={() => handleClick("Software Module Generator")}>
              <CardProj
                title="Software Module Generator"
                ProjectType="AI Powered Software"
                TagArrays={["Automation", "AI", "FullStack"]}
              />
            </div>
            <div onClick={() => handleClick("Imonitor Backend")}>
              <CardProj
                title="Imonitor Backend"
                ProjectType="Backend"
                TagArrays={["IoT", "Spring Boot", "MQTT Broker"]}
              />
            </div>
            <div onClick={() => handleClick("This Portfolio")}>
              <CardProj
                title="This Portfolio"
                ProjectType="FrontEnd"
                TagArrays={["React", "Css","Responsiveness"]}
              />
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Projects;