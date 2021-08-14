import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  // set the list of blog posts to blogs property
  const [blogPosts, setBlogPosts] = useState([
    {
      title: "First Post",
      body: "lorem ipsum dolor",
      author: "Isuru",
      id: 1,
    },
    {
      title: "Second Post",
      body: "Amet sit dolor lorem",
      author: "Chamikara",
      id: 2,
    },
    {
      title: "Third Post",
      body: "ipsum dolor lorem sit amet",
      author: "Isuru",
      id: 3,
    },
  ]);
  return (
    <div className="home">
      <BlogList blogPosts={blogPosts} title="All Blog Posts" />
      <BlogList
        blogPosts={blogPosts.filter((post) => post.author === "Isuru")}
        title="Isuru's Blog Posts"
      />
      <BlogList
        blogPosts={blogPosts.filter((post) => post.author === "Chamikara")}
        title="Chamikara's Blog Posts"
      />
    </div>
  );
};

export default Home;
