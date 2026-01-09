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
            <div onClick={() => setProjectName("Crypto Bot")}>
              <CardProj
                title="Crypto Bot"
                ProjectType="Chrome Extension"
                TagArrays={["Python", "Binance", "Chrome Extension"]}
              />
            </div>
            <div onClick={() => setProjectName("Authentication API")}>
              <CardProj
                title="Authentication API"
                ProjectType="Backend"
                TagArrays={["Authentication", "JWT", "APIs", "Node.js"]}
              />
            </div>
            <div onClick={() => setProjectName("Messaging App")}>
              <CardProj
                title="Messaging App"
                ProjectType="Full Stack"
                TagArrays={["React", "Node.js", "Socket.io", "JWT"]}
              />
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Projects;