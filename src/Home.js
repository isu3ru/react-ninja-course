import { useEffect, useState } from "react";
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

  const [name, setName] = useState("Isuru");

  const handleDelete = (id) => {
    // filter through the blog posts entries and return the entries without the given id
    const filteredBlogPosts = blogPosts.filter(
      (blogPost) => blogPost.id !== id
    );
    // in a real world application, we can remove the item from db too, at this moment.
    // set the filtered list as the blogPosts
    setBlogPosts(filteredBlogPosts);
  };

  useEffect(() => {
    console.log("use effect triggered");
  }, [name]);

  return (
    <div className="home">
      <BlogList
        blogPosts={blogPosts}
        title="All Blog Posts"
        // passing the handleDelete function as a prop
        handleDelete={handleDelete}
      />
      <BlogList
        // get only the list of posts authored by Isuru
        blogPosts={blogPosts.filter((post) => post.author === "Isuru")}
        title="Isuru's Blog Posts"
        handleDelete={handleDelete}
      />
      <BlogList
        // get only the list of posts authored by Chamikara
        blogPosts={blogPosts.filter((post) => post.author === "Chamikara")}
        title="Chamikara's Blog Posts"
        handleDelete={handleDelete}
      />
      <button onClick={() => setName("Isuru Ranawaka")}>Change Name</button>
      <p>{name}</p>
    </div>
  );
};

export default Home;
