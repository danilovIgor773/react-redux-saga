import React from "react";
import { useSelector } from "react-redux";
import { Post } from "./Post";

export const Posts = () => {
  const posts = useSelector((state) => state?.allPosts?.posts);
  console.log("[POSTS] posts", posts);
  const noPostsMessage = "No posts yet available";

  if (!posts.length) return <p className="text-center">{noPostsMessage}</p>;

  const postsToRender = posts.map((post) => <Post key={post.id} post={post} />);

  return <div>{postsToRender}</div>;
};
