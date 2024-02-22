import React, { useState } from "react";
import { useNavigate  } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("yoshi");
  const [isPending, setIsPending] = useState(false);
  const navigate  = useNavigate ();

  const handleSubmit = (e) => {
    e.preventDefault();

    const blog = { title, body, author };

    setIsPending(true);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      alert("Post Added Success!");
      setIsPending(false);
      navigate("/");
      // navigate .go(-1)
    });
  };
  return (
    <div className="create">
      <h2>Create a Post</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Blog Title: </label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="body">Blog Body: </label>
        <input
          type="text"
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="author">Blog Author: </label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">Mario</option>
          <option value="yoshi">Yoshi</option>
        </select>
        <br />
        <br />
        {!isPending && <button>Add Blog</button>}
        {isPending && <button>Adding Blog...</button>}
      </form>
    </div>
  );
};

export default Create;
