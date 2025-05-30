import React, { useState } from "react";

const playList = [
  { song: "Song1" },
  { song: "Song2" },
  { song: "Song3" },
  { song: "Song4" },
  { song: "Song5" },
];

const MusicPlay = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < playList.length - 1 ? prev + 1 : 0));
    setIsPlaying(false);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : playList.length - 1));
    setIsPlaying(false);
  };

  return (
    <div>
      <h2>
        {isPlaying
          ? `Now Playing: ${playList[currentIndex].song}`
          : `Selected: ${playList[currentIndex].song}`}
      </h2>

      <div>
        {playList.map((item, index) => (
          <p key={index}>
            {item.song}
            {index === currentIndex && (isPlaying ? "Playing..." : "Selected")}
          </p>
        ))}
      </div>

      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handlePlay}>Play</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default MusicPlay;
