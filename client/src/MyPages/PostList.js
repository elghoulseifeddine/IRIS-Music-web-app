import React from "react";
import { useSelector } from "react-redux";
import PostCard from "./PostCard";

const PostList = () => {
  const userPosts = useSelector((state) => state.userReducer.userPosts);


  return (
    <div>
      {userPosts
        ? userPosts
            .map((post, i) => <PostCard key={i} body={post.body} video={post.video} id={post._id} />)
        : null}
    </div>
  );
};

export default PostList;
