import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Isuru");

  return (
    <div className="create">
      <h2>Add New Blog Post</h2>
      <form>
        <div>
          <label>Post Title</label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Post Body</label>
          <textarea
            cols="30"
            rows="10"
            onChange={(e) => setBody(e.target.value)}
          >
            {body}
          </textarea>
        </div>
        <div>
          <label>Author</label>
          <select value={author} onChange={(e) => setAuthor(e.target.value)}>
            <option value="Isuru">Isuru</option>
            <option value="Chamikara">Chamikara</option>
          </select>
        </div>
        <div>
          <button>Add Blog</button>
        </div>
      </form>
    </div>
  );
};

export default Create;
