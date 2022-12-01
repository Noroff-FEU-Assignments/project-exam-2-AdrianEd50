import React from "react";
import PostCard from "./PostCard";
import { useState, useEffect } from "react";
import { BASE_URL } from "../../constants/api";
import { token } from "../../utils/storage";
import axios from "axios";

function viewPost() {
  function ListOfPost() {
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(function () {
      async function retrivePost() {
        const post__url =
          BASE_URL + "social/posts/?_author=true&_reactions=true";

        const options = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        try {
          const response = await axios.get(post__url, options);
          console.log(response.data);
          setPost(response.data);
        } catch (error) {
          console.log(error);
          setError(error.toString());
        } finally {
          setLoading(false);
        }
      }
      retrivePost();
    }, []);
    if (loading) return <div>Loading post...</div>;

    if (error) return <div>{}</div>;

    return (
      <div className="post-list">
        <PostCard />
      </div>
    );
  }
}

export default viewPost;
