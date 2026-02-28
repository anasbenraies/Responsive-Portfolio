import React from "react";
import { Card } from "semantic-ui-react";

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
    // ✏️ Change 3: width 100% so it fills the .stylish-shadow wrapper
    <div style={{ width: "100%" }}>
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
          width: "100%",           // ✏️ Change 1: fill parent
          minHeight: "160px",      // ✏️ Change 2: uniform height
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxSizing: "border-box",
        }}
      />
    </div>
  );
};

export default HCard;