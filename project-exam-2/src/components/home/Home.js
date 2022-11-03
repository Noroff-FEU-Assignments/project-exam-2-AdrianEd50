import React from "react";
import Heading from "../layout/Heading";
import Card from "../cardContent/Card";

function Home() {
  return (
    <>
      <div className="container">
        <Heading content="Home Page" />
        <Card />
      </div>
    </>
  );
}

export default Home;
