import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  // set the list of blog posts to blogs property
  const [blogPosts, setBlogPosts] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  const jsonServerEndpoints = {
    allBlogs: "http://localhost:8000/blogs",
  };

  useEffect(() => {
    fetch(jsonServerEndpoints.allBlogs)
      .then((res) => {
        // you can check for HTTP status codes like 200, 404, etc... here
        if (!res.status === 200) {
          throw Error("Could not fetch the data for that resource.");
        }
        return res.json();
      })
      .then((data) => {
        setBlogPosts(data);
        // set the isPending state to false so the loading message will be hidden
        setIsPending(false);
        // remove error message
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setIsPending(false);
      });
  }, []);

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {/* show the loading message only if the is pending is set to true. */}
      {isPending && <div>Loading...</div>}
      {/* output the BlogList component only after the blogPosts value
       is populated with the data fetched from the server. */}
      {blogPosts && <BlogList blogPosts={blogPosts} title="All Blog Posts" />}
    </div>
  );
};

export default Home;
