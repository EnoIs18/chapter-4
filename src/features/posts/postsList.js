import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../../components/Header";
import PostsExcerpt from "./PostsExcerpt";
import { fetchPosts } from "./postsSlice";
import { Link } from "react-router-dom";
const PostsList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const postStatus = useSelector((state) => state.posts.status);
  const postError = useSelector((state) => state.posts.error);

  useEffect(() => {
    postStatus === "idle" && dispatch(fetchPosts());
  }, [postStatus]);

  let content;
  if (postStatus === "loading") {
    content = <p>"Loading..."</p>;
  } else if (postStatus === "succeeded") {
    const orderedPosts = posts
      .slice()
      .sort((a, b) => a.date.localeCompare(b.date));
    content = orderedPosts.map((post) => (
      <PostsExcerpt key={post.id} post={post} />
    ));
  } else if (postStatus === "failed") {
    content = <p>{postError}</p>;
  }

  return (
    <>
      <Header />
      <section>{content}</section>
    </>
  );
};

export default PostsList;
