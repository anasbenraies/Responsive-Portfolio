import React, { useState, useEffect } from "react";
//import { Slide } from "react-reveal";
import "./DisplayCard.css";

interface DisplayProps {
  ProjectTitle: string;
}

const DisplayCard: React.FC<DisplayProps> = ({ ProjectTitle }) => {
  const [Description, setDescription] = useState(
    "Click on projects to change their colors!"
  );
  const [TechStack, setTechStack] = useState("");
  const [GithubRepo, setGithubRepo] = useState("");
  const [Feedback, setFeedback] = useState("");
  const [Submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (ProjectTitle === "Software Module Generator") {
      setDescription(
        "You draw the workflow , AI writes the code , you got your running software Yeah, it's exactly what you think it is."
      );
      setTechStack("React • Node/express • JWT • Supabase • AI");
      setGithubRepo("https://github.com/anasbenraies/Workflow-Application");
    } else if (ProjectTitle === "Imonitor Backend") {
      setDescription(
        'Spring Boot backend to supervise a simulated IoT environment in real time, leveraging the MQTT protocol for lightweight, event-driven device communication .'
      );
      setTechStack("Java • SpringBoot • SpringSecurity-JWT • MQTT Broker • PostgreSQL");
      setGithubRepo("https://github.com/anasbenraies/iMonitor_Backend");
    }
     else if (ProjectTitle === "This Portfolio") {
      setDescription("This is mainly a Frontend Project . Made in my free time.");
      setTechStack("vite • React • typescript");
      setGithubRepo("https://github.com/anasbenraies/Responsive-Portfolio");
    }else{
      setDescription(
        "These are Frontend , Backend and Fullstack Projects , made in my free time , not really 😄."
      );
      setTechStack("i used many technologies over the years");
      setGithubRepo("");
    }
  }, [ProjectTitle]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (Feedback.trim() === "") return;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFeedback("");
  };

  return (
    //<Slide left>
    <div className="boxDisplay">
      <h3 className="projectTitle">{ProjectTitle}</h3>

      <div className="section">
        <h4 className="sectionTitle">Description</h4>
        <p className="sectionContent">{Description}</p>
      </div>

      <div className="section">
        <h4 className="sectionTitle">Tech Stack & Technologies</h4>
        <p className="sectionContent">{TechStack}</p>
      </div>

      <div className="section">
        <h4 className="sectionTitle">GitHub Repository & Demo</h4>
        <a
          href={GithubRepo}
          className="repoLink"
          target="_blank"
          rel="noopener noreferrer"
        >
          {GithubRepo}
        </a>
        <br/>
        --
        <br/>
        {ProjectTitle === "Software Module Generator" ?
          <a
            href={"https://shorturl.at/Px47X"}
            className="repoLink"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://shorturl.at/Px47X
          </a>
          :
          null
        }

      </div>

      {/* Feedback Section */}
      <div className="feedbackSection">
        <h4 className="sectionTitle">Your Feedback</h4>
        <form onSubmit={handleSubmit} className="feedbackForm">
          <input
            type="text"
            value={Feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Share your thoughts about this project..."
            className="feedbackInput"
          />
          <button type="submit" className="feedbackButton">
            Submit
          </button>
        </form>

        {Submitted && (
          <p className="feedbackSuccess">✅ Thank you for your feedback!</p>
        )}
      </div>
    </div>
    //</Slide>
  );
};

export default DisplayCard;
