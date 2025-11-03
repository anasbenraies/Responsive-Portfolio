import React, { FC } from "react";
import "./CardProj.css";
import { Label } from "semantic-ui-react";
import { Slide } from "react-reveal";

interface CardProjProps {
  title: string;
  ProjectType: string;
  TagArrays: string[];
}

const CardProj: FC<CardProjProps> = ({ title, ProjectType, TagArrays }) => {
  const randomColors = [
    "red",
    "green",
    "blue",
  ];
  return (
    <Slide right>
      <div className="box">
        <Label
          as="a"
          color={randomColors[Math.floor(Math.random() * randomColors.length)]}
          ribbon
        >
          {ProjectType}
        </Label>
        <div style={{ paddingTop: "6%" }}>
          <h3>{title}</h3>
        </div>
        <div style={{ overflowWrap: "break-word", paddingTop: "14%" }}>
          {TagArrays.map((Tag, i) => (
            <Label
              key={i}
              color={
                randomColors[Math.floor(Math.random() * randomColors.length)]
              }
            >
              {Tag}
            </Label>
          ))}
        </div>
      </div>
    </Slide>
  );
};

export default CardProj;

