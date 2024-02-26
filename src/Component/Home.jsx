import React from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
import SwiperCard from "./SwiperCard";

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div>
      <SwiperCard imgs={blogs} />
      <div className="Home">
        {error && <div className="error">{error}</div>}
        {isPending && <div>Loading...</div>}
        {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
      </div>
    </div>
  );
};

export default Home;
