import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-section">
      <h1>{title}</h1>
      <div className="blog-list">
        {blogs.map((blog) => (
          <div className="blog-preview" key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>
              <img src={blog.image} alt={blog.title} />
              <div className="body">
                <h2>{blog.title}</h2>
                <p>{blog.body.substring(0, 170)}</p>
                <span>Written by {blog.author}</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
