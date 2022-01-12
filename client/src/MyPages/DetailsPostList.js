import React from "react";
import DetailsPostCard from "./Details.postCard";


const DetailsPostList = ({posts}) => {



  return (
    <div>
      {posts
        ? posts
            .map((post, i) => <DetailsPostCard key={i} body={post.body} video={post.video} />)
        : null}
    </div>
  );
};

export default DetailsPostList;
