import React from "react";
import { useState } from "react";
const PostCard = ({
  postImage,
  title,
  description,
  likeButton,
  numberOfLikes,
}) => {
  const [counter, setCounter] = useState(0);
  const addOne = () => {
    setCounter(counter + 1);
  };
  return (
    <div className="post">
      <img src={postImage} width={"100%"} />
      <h4>{title}</h4>
      <h6>{description}</h6>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        <div className="likeBox">
          <h3>{counter}</h3>
          <button className="buttonStyle" onClick={addOne}>
            <img src={likeButton} width={"30px"} />
          </button>
        </div>
      </div>
    </div>
  );
};
export default PostCard;
