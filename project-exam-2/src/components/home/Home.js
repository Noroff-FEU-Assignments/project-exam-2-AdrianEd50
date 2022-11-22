import React from "react";
import Heading from "../layout/Heading";
import Card from "../cardContent/Card";
//import TextArea from "./TextArea";

function Home() {
  return (
    <>
      <div className="white-background-container">
        <Heading content="Home" />
        <Card />
      </div>
    </>
  );
}

export default Home;
