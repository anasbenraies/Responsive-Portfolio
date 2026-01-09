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
    if (ProjectTitle === "Authentication API") {
      setDescription(
        "This project implements an authentication system using Node.js, Express, and JWT for secure API access management."
      );
      setTechStack("JavaScript • Node.js • JWT • Express");
      setGithubRepo("https://github.com/example/auth-api");
    } else if (ProjectTitle === "Crypto Bot") {
      setDescription(
        'A crypto trading bot based on the "break and retest" strategy, leveraging the Binance API for live market data.'
      );
      setTechStack("HTML • JavaScript • CSS • Binance API");
      setGithubRepo("https://github.com/example/crypto-bot");
    } else {
      setDescription("Select a project to view its details!");
      setTechStack("");
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
          <h4 className="sectionTitle">GitHub Repository</h4>
          <a
            href={GithubRepo}
            className="repoLink"
            target="_blank"
            rel="noopener noreferrer"
          >
            {GithubRepo}
          </a>
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
