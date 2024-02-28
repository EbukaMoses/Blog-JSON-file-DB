import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  // const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("yoshi");
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();
  // const [status, setStatus] = useState < "initial" | "Upload" | "Success" | "Failed" > ("initial");

  const handleSubmit = (e) => {
    e.preventDefault();

    const date = new Date();
    // const formData = new FormData();
    // formData.append("file", image.name);

    const blog = { image: formData, title, body, author, date };

    setIsPending(true);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      alert("Post Added Success!");
      setIsPending(false);
      navigate("/");
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
              // accept=".json,.csv,.txt,.text,application/json,text/csv,text/plain"
              onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
            />
            {/* {image && <img src={URL.createObjectURL(image)} alt="Preview" />} */}
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
