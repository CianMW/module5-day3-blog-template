import React from "react";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./views/home";
import Blog from "./views/blog";
import NewBlogPost from "./views/new";
import { BrowserRouter, Route } from "react-router-dom";
import CreateProfile from "./views/profiles/CreateProfile";
import "./App.css"
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Route path="/" exact component={Home} />
      <Route path="/blog/:id" exact component={Blog} />
      <Route path="/new" exact component={NewBlogPost} />
      <Route path="/signup" exact component={CreateProfile} />
      <Route path="/login" exact component={CreateProfile} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
