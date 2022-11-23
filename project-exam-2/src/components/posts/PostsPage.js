import React from "react";
import Heading from "../layout/Heading";
import Card from "../cardContent/Card";
import { Link } from "react-router-dom";
import ListOfPosts from "./ListOfPosts";

function Posts() {
  return (
    <>
      <div className="white-background-container">
        <Heading content="Posts" />
        <Card />
        <p>
          <Link to="/posts/posts/add">Add Post</Link>
        </p>
        <ListOfPosts />
      </div>
    </>
  );
}

export default Posts;
