import { useState } from "react";

const Home = () => {
  // set the list of blog posts to blogs property
  const [blogs, setBlogs] = useState([
    {
      title: "First Post",
      body: "lorem ipsum dolor",
      author: "Isuru",
      id: 1,
    },
    {
      title: "Second Post",
      body: "Amet sit dolor lorem",
      author: "Isuru",
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
      {/* output each entry in blogs property */}
      {blogs.map((post) => (
        <div className="blog-preview" key={post.id}>
          <h2>{post.title}</h2>
          <p>Written by {post.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
