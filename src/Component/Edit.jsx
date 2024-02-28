import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditBlog = () => {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("yoshi");
  const [isPending, setIsPending] = useState(false);
  const { id } = useParams(); // Assuming your route has a parameter for the blog ID
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch blog data based on the ID when the component mounts
    fetch(`http://localhost:8000/blogs/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setImage(data.image);
        setTitle(data.title);
        setBody(data.body);
        setAuthor(data.author);
      })
      .catch((error) => {
        console.error("Error fetching blog:", error);
        // Handle error - Redirect or show an error message to the user
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const date = new Date();
    // const formData = new FormData();
    // formData.append("file", image);

    const updatedBlog = { title, body, author, date };

    setIsPending(true);

    fetch(`http://localhost:8000/blogs/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedBlog),
      // body: updatedBlog,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(() => {
        alert("Blog Updated Successfully!");
        setIsPending(false);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error updating blog:", error);
        setIsPending(false);
        // Handle error - Show user an error message
      });
  };

  return (
    <div className="create">
      <div className="form">
        <h2>Edit Blog</h2>
        <form onSubmit={handleSubmit}>
          {/* <div>
            <label htmlFor="title">Img: </label>
            <input type="file" onChange={(e) => setImage(e.target.files[0])} />
            {image && <img src={URL.createObjectURL(image)} alt="Preview" />}
          </div> */}
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
            {/* <button disabled={isPending} className="update">
              Update Blog
            </button>
            {isPending && <span className="updating">Updating Blog...</span>} */}
            {!isPending && <button className="add">Update Blog</button>}
            {isPending && <button className="adding">Updating Blog...</button>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBlog;
