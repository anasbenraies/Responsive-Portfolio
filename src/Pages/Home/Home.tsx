import React from "react";
import { Button } from "semantic-ui-react";
import MatrixAnimation from "../../Components/MatrixAnimation/MatrixAnimation";
import "./Home.css";


const Home: React.FC = () => {
  return (
    <div style={{ backgroundColor: "red" }}>
      <MatrixAnimation timeout={70} />
      <div className="main">
        <h2 style={{ color: "#ccff33" }}>Hello !</h2>
        <p style={{ color: "#d9fb00ff" }}>
          Welcome to the matrix , Please choose a pill 💊
        </p>
      </div>
      <div className="buttons">
        <Button color="red" className="matrix-btn">
          Red
        </Button>
        <Button color="blue" className="matrix-btn">
          Green
        </Button>
      </div>
    </div>
  );
};

export default Home;
