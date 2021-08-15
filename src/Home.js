import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  // use the useFetch hook by sending in the url
  const {
    data: blogs, // allows to use the data property 'AS' 'blogs'
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs"); // the url as a parameter for the hook function

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {/* show the loading message only if the is pending is set to true. */}
      {isPending && <div>Loading...</div>}
      {/* output the BlogList component only after the blogPosts value
       is populated with the data fetched from the server. */}
      {blogs && <BlogList blogPosts={blogs} title="All Blog Posts" />}
    </div>
  );
};

export default Home;
