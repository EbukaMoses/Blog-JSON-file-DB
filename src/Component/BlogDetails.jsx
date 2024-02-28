import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://localhost:8000/blogs/" + id);
  const navigate = useNavigate();

  const handleClick = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };
  const handleEdit = () => {
    navigate("/edit/" + id);
  };

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <img src={blog.image} alt={blog.title} />
          <div className="detailbody">
            <h2>{blog.title}</h2>
            <p>writter by {blog.author}</p>
            <div>{blog.body}</div>
            <button onClick={handleClick}>Delete Post </button>
            <button className="edit" onClick={handleEdit}>
              Edit Post
            </button>
          </div>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
