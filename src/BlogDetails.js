import { Link, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();

  const {
    data: post,
    error,
    isPending,
  } = useFetch("http://localhost:8000/blogs/" + id);

  return (
    <div>
      <p
        style={{
          marginBottom: "15px",
        }}
      >
        <Link to="/">Back to all blog posts</Link>
      </p>

      <div className="blog-details">
        <h2>Blog Details</h2>

        {isPending && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {post && (
          <article>
            <h2>{post.title}</h2>
            <p>Written by: {post.author}</p>
            <div>{post.body}</div>
          </article>
        )}
      </div>
    </div>
  );
};

export default BlogDetails;
