import React, { useState } from "react";
import { HeartIcon, SpinnerIcon } from "./icons";
import "./LikeButton.css";

const LikeButton = () => {
  const [liked, setLiked] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);

  const handleLikeUnlike = async () => {
    setError(null);
    setIsFetching(true);

    try {
      const response = await fetch(
        "https://questions.greatfrontend.com/api/questions/like-button",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            action: liked ? "unlike" : "like",
          }),
        }
      );

      if (response.ok) {
        setLiked(!liked);
      } else {
        const res = await response.json();
        setError(res.message || "Something went wrong.");
      }
    } catch (err) {
      setError("Failed to connect. Please try again.");
    } finally {
      setIsFetching(false);
    }
  };

  return (
    <div>
      <button
        onClick={handleLikeUnlike}
        className={`likeBtn ${liked ? "liked" : ""}`}
        aria-pressed={liked}
        disabled={isFetching}
      >
        {isFetching ? <SpinnerIcon /> : <HeartIcon />}
        {liked ? "Liked" : "Like"}
      </button>
      {error && (
        <div className="error" role="alert">
          {error}
        </div>
      )}
    </div>
  );
};

export default LikeButton;
