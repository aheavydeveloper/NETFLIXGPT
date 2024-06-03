import React from "react";

const MainMovie = () => {
  return (
    <div className="h-lvh  w-lvw z-[-2] bg-gradient-to-b from-black">
          <iframe
        className="w-screen aspect-video"
        src="https://www.youtube.com/embed/hXzcyx9V0xw?&autoplay=1&mute=1"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default MainMovie;
