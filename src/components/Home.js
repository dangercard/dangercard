import React from "react";
import "../App.css";
import { Jumbotron, Button } from "reactstrap";

function Home() {
  return (
    <Jumbotron className="jumb">
      <h1 className="home-title">Welcome!</h1>

      <p className="lead home-text">
        This is a simple portfolio page built using React and Reactstrap.
        Besides my information, you can find a variety of random things to play
        with.
      </p>

      <hr className="my-2" style={{ backgroundColor: "#6b6e70" }} />

      <p className="home-text">
        If you're interested in seeing the code for this page, click the button
        below to see the repo.
      </p>

      <p className="lead">
        <Button className="btn-green">Learn More</Button>
      </p>
    </Jumbotron>
  );
}

export default Home;
