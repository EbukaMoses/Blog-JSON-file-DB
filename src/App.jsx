import React from "react";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home";
import NavBar from "./Component/NavBar";
import Create from "./Component/Create";
import BlogDetails from "./Component/BlogDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Routes>
             <Route exact path="/" element={<Home />} />
             <Route path="/create" element={<Create />} />
             <Route path="/blogs/:id" element={<BlogDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
