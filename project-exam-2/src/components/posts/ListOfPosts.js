import { useState, useEffect } from "react";
import { BASE_URL } from "../../constants/api";
import axios from "axios";
import PostCard from "./PostCard";
import { token } from "../../utils/storage";

export default function ListOfPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function retrivePosts() {
      const post_url = BASE_URL + "social/posts/?_author=true&_reactions=true";

      const options = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const response = await axios.get(post_url, options);
        console.log(response.data);
        setPosts(response.data);
      } catch (error) {
        console.log(error);
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }
    retrivePosts();
  }, []);
  if (loading) return <div>Loading posts...</div>;

  if (error) return <div>{}</div>;

  return (
    <div className="post-list">
      {posts.map((post) => (
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
          reactions={post.reactions}
        />
      ))}
    </div>
  );
}
