import React from "react";
import PostsList from "./features/posts/postsList";
import AddPostForm from "./features/posts/AddPostForm";
import SinglePostPage from "./features/posts/SinglePostPage";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/post/:postId" element={<SinglePostPage />} />
      <Route path="/post" index element={<AddPostForm />} />
      <Route index element={<PostsList />} />
    </Routes>
  );
}

export default App;
