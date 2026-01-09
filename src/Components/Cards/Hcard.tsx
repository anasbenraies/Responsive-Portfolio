import React from "react";
import { Card } from "semantic-ui-react";
//import { Fade } from "react-reveal";

type HCardProps = {
  header: string;
  meta?: string;
  description?: string;
};

const HCard: React.FC<HCardProps> = ({ header, meta, description }) => {
  const Header = <h2 style={{ color: "white" }}>{header}</h2>;
  const Meta = meta ? <p>{meta}</p> : null;
  const Description = description ? (
    <h3 style={{ color: "white" }}>{description}</h3>
  ) : null;

  return (
    //<Fade>
      <div>
        <Card
          color="yellow"
          href="#card-example-link-card"
          header={Header}
          meta={Meta}
          description={Description}
          style={{
            backgroundColor: "#232323",
            color: "white",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
          }}
        />
      </div>
    //</Fade>
  );
};

export default HCard;
