import React from "react";
import Heading from "../layout/Heading";
import { Link } from "react-router-dom";
import ListOfPosts from "./ListOfPosts";

function Posts() {
  return (
    <>
      <div className="white-background-container">
        <Heading content="Posts" />
        <button className="add-btn">
          <Link to="/posts/posts/add" className="add-btn">
            Add Post
          </Link>
        </button>

        <ListOfPosts />
      </div>
    </>
  );
}

export default Posts;
