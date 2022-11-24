import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../constants/api";
import useAxios from "../../customHooks/useAxios";

export default function ListOfPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const http = useAxios();

  useEffect(function () {
    async function retrivePosts() {
      const post_url = BASE_URL + "social/posts";

      try {
        const response = await http.get(post_url);
        console.log("response", response);
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
    <ul className="posts">
      {posts.map((post) => {
        return (
          <li key={post.id}>
            <Link to={`/posts/edit/${post.id}`}>{post.title.rendered}</Link>
          </li>
        );
      })}
    </ul>
  );
}
