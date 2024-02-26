import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [img, setImg] = useState(null);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("yoshi");
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

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
      <div className="form">
        <h2>Create a Post</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Img: </label>
            <input
              type="file"
              required
              value={img}
              onChange={(e) => setImg(e.target.files[0])}
            />
          </div>
          <div>
            <label htmlFor="title">Title: </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="body">Post: </label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              required
              value={body}
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
          </div>
          <div>
            <label htmlFor="author">Author: </label>
            <select value={author} onChange={(e) => setAuthor(e.target.value)}>
              <option value="mario">Mario</option>
              <option value="yoshi">Yoshi</option>
            </select>
          </div>
          <div className="button">
            {!isPending && <button className="add">Add Blog</button>}
            {isPending && <button className="adding">Adding Blog...</button>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
