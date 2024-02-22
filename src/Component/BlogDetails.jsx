import React from 'react'
import { useParams, useNavigate  } from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetails = () => {
    const { id } = useParams();
    const {data: blog, error, IsPending } = useFetch("http://localhost:8000/blogs/" + id);
    const navigate  = useNavigate ();
    
    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE',
        }).then(() => {
            navigate('/');
        })
    }    
    
    
  return (
    <div className="blog-details">
      {IsPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && 
        <article>
          <h2>{blog.title}</h2>
          <p>writter by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>Delete Post </button>
        </article>
      }
    </div>
  );
}

export default BlogDetails