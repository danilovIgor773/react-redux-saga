import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Post } from "./Post";
import { Loader } from "./Loader";
import { fetchPosts } from "../redux/actions";

export const FetchedPosts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.allPosts.fetchedPosts);
  const loading = useSelector((state) => state.app.loading);

  console.log("[FetchedPosts] loading", loading);

  if (loading) {
    return <Loader />;
  }

  const loadPostsButton = (
    <button className="btn btn-primary" onClick={() => dispatch(fetchPosts())}>
      Load Posts
    </button>
  );

  if (!posts?.length) return loadPostsButton;

  const postsToRender = posts.map((post, idx) => (
    <Post key={post.id} post={post} />
  ));

  return <div>{postsToRender}</div>;
};
