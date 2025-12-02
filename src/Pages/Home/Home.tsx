import React from "react";
import { Button } from "semantic-ui-react";
import MatrixAnimation from "../../Components/MatrixAnimation/MatrixAnimation";
import "./Home.css";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div>
      <MatrixAnimation timeout={70} />
      <div className="overlay"></div>
      <div className="main">
        <h2 style={{ color: "#ccff33" }}>Hi Neo !</h2>
        <p style={{ color: "#d9fb00ff" }}>
          Welcome to the matrix , Please choose a pill 💊
        </p>
      </div>
      <div className="buttons">
        <Link to={"/hack"}>
          <Button  className="matrix-btn pill-btn red">
            Red
          </Button>
        </Link>
        <Link to={"/hack"}>
          <Button  className="matrix-btn pill-btn blue" >
            Blue
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
