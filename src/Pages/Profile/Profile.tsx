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
      <h2 className="profile-title">You are inside the Matrix , Have Fun 🚀</h2>
      <br />

      <div className="profile-content">
        {/* Left side */}
        <div className="profile-card">
          <VCard
            name={name}
            job="Full-Stack Engineer"
            description="Specialized in backend engineering."
          />
        </div>

        {/* Right side */}
        <div className="hcards-grid">
          <Link to={"/projects"}>
            <div className="stylish-shadow">
              <HCard
                header="Projects"
                meta="Results-oriented"
                description="Efficient , Scalable , Creative"
              />
            </div>
          </Link>
          <Link to={"/Experience"}>
            <div className="stylish-shadow">
              <HCard
                header="Experience"
                meta="Implies depth and foundation."
                description="Methodical , Strategic , Collaborative "
              />
            </div>
          </Link>

          <Link to={"/skills"}>
            <div className="stylish-shadow">
              <HCard
                header="Skills"
                meta=" high-level knowledge"
                description="Modern , Analytical , Proficient "
              />
            </div>
          </Link>

          <Link to={"/skills"}>
            <div className="stylish-shadow">
              <HCard
                header="Certifications and Awards"
                meta="Variety"
                description="Specialized , Recognized , Verified."
              />
            </div>
          </Link>

        </div>
      </div>
      <br />
      <Fade>
        <div className="AboutMe">
          <h2 className="questions">Some questions </h2>
          <AccordionExampleInverted />
        </div>
      </Fade>
    </div>
  );
};

export default Profile;
