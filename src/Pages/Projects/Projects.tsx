import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
import DisplayCard from "../../Components/Cards/DisplayCard";
import CardProj from "../../Components/Cards/CardProj";
import "./Projects.css";

const Projects: React.FC = () => {
  const [ProjectName, setProjectName] = useState(
    "Click on Projects to Visualize them"
  );

  return (
    <div className="projects-page">
      <Grid stackable columns={2} divided className="projects-grid">
        <Grid.Row stretched>
          {/* Left side - Display */}
          <Grid.Column width={8} className="display-section">
            <DisplayCard ProjectTitle={ProjectName} />
          </Grid.Column>

          {/* Right side - List of Projects */}
          <Grid.Column width={8} className="projects-list">
            <div onClick={() => setProjectName("Software Module Generator")}>
              <CardProj
                title="Software Module Generator"
                ProjectType="AI Powered Software"
                TagArrays={["Automation", "AI", "FullStack"]}
              />
            </div>
            <div onClick={() => setProjectName("Imonitor Backend")}>
              <CardProj
                title="Imonitor Backend"
                ProjectType="Backend"
                TagArrays={["IoT", "Spring Boot", "MQTT Broker"]}
              />
            </div>
            <div onClick={() => setProjectName("This Portfolio")}>
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