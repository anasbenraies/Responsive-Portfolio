import React from "react";
import { Button } from "semantic-ui-react";
import MatrixAnimation from "../../Components/MatrixAnimation/MatrixAnimation";
import "./Home.css";
import { Link, Links } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div>
      <MatrixAnimation timeout={70} />
      <div className="overlay"></div>
      <div className="main">
        <h2 style={{ color: "#ccff33" }}>Hello !</h2>
        <p style={{ color: "#d9fb00ff" }}>
          Welcome to the matrix , Please choose a pill 💊
        </p>
      </div>
      <div className="buttons">
        <Link to={"/hack"}>
          <Button color="red" className="matrix-btn">
            Red
          </Button>
        </Link>
        <Link to={"/hack"}>
          <Button color="blue" className="matrix-btn">
            Green
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
