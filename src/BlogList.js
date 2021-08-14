const BlogList = ({ blogPosts, title, handleDelete }) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {/* output each entry in blogs property */}
      {blogPosts.map((post) => (
        <div className="blog-preview" key={post.id}>
          <h2>{post.title}</h2>
          <p>Written by {post.author}</p>
          {/* handleDelete function is received from the props and called in the Home component. 
          doing this directly calls the function defined in the home component. */}
          <button onClick={() => handleDelete(post.id)}>Delete Blog</button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
