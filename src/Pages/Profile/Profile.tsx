import React from "react";
import HCard from "../../Components/Cards/Hcard";
import VCard from "../../Components/Cards/Vcard";
import "./Profile.css";
import AccordionExampleInverted from "../../Components/AccordionQ";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";

type Props = {
  name: string;
};

const Profile: React.FC<Props> = ({ name }) => {
  return (
    <div className="profile-page">
      <h2 className="profile-title">You are inside the Matrix , Enjoy 🚀</h2>
      <br />

      <div className="profile-content">
        {/* Left side */}
        <div className="profile-card">
          <VCard
            name={name}
            job="Software Engineer"
            description="Specialized in backend engineering."
          />
        </div>

        {/* Right side */}
        <div className="hcards-grid">
          <Link to={"/projects"}>
            <HCard
              header="Projects"
              meta="Many"
              description="Lorem ipsum testing this paragraph to see how it looks."
            />
          </Link>
          <HCard
            header="Experience"
            meta="Available"
            description="Lorem ipsum testing this paragraph to see how it looks."
          />
          <HCard
            header="Skills"
            meta="Variety"
            description="Lorem ipsum testing this paragraph to see how it looks."
          />
        </div>
      </div>
      <br />
      <Fade>
        <div className="AboutMe">
          <h2>Some questions </h2>
          <AccordionExampleInverted />
        </div>
      </Fade>
    </div>
  );
};

export default Profile;
