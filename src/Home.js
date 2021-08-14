import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  // set the list of blog posts to blogs property
  const [blogPosts, setBlogPosts] = useState(null);

  const jsonServerEndpoints = {
    allBlogs: "http://localhost:8000/blogs",
  };

  useEffect(() => {
    fetch(jsonServerEndpoints.allBlogs)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBlogPosts(data);
      });
  }, []);

  return (
    <div className="home">
      {/* output the BlogList component only after the blogPosts value
       is populated with the data fetched from the server */}
      {blogPosts && <BlogList blogPosts={blogPosts} title="All Blog Posts" />}
    </div>
  );
};

export default Home;
