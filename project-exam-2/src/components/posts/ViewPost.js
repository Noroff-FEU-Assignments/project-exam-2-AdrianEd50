import React from "react";
import PostCard from "./PostCard";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/api";
import { token } from "../../utils/storage";
import axios from "axios";
import DeletePost from "./DeletePost";

function ViewPost() {
  const SINGLE_POST = {
    id: "",
    title: "",
    body: "",
    media: "",
    created: "",
    _count: {
      comments: "",
      reactions: "",
    },
  };
  const [post, setPost] = useState(SINGLE_POST);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let { id } = useParams();

  const post__url =
    BASE_URL + `social/posts/${id}?_author=true&_comments=true&_reactions=true`;

  useEffect(function () {
    async function retrivePost() {
      const options = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const response = await axios.get(post__url, options);
        setPost(response.data);
      } catch (error) {
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
    <>
      <div className="white-background-container">
        <Link to="/posts" className="goBack-link">
          Go back
        </Link>
        <PostCard
          key={post.id}
          title={post.title}
          body={post.body}
          src={post.media}
          comment_count={post._count.comments}
          reaction_count={post._count.reactions}
          created={post.created}
          href={post.id}
          author={post.author.name}
        />
        <DeletePost />
        <button className="edit_button">
          <Link to={`/posts/${post.id}/edit`} className="edit_link">
            Update post
          </Link>
        </button>
      </div>
    </>
  );
}

export default ViewPost;
