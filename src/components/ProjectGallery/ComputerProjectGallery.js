import { Carousel } from "react-carousel-minimal";
import * as React from "react";

function ComputerProjectGallery({ ReactImages }) {
  let data = [];
  for (let i = 0; i < ReactImages.length; i++) {
    data.push({ image: ReactImages[i], caption: "" });
  }

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };

  return (
    <div
      style={{
        margin: "30px 30px",
      }}
    >
      <Carousel
        data={data}
        time={2000}
        width="1344px"
        height="672px"
        captionStyle={captionStyle}
        radius="10px"
        slideNumber={true}
        slideNumberStyle={slideNumberStyle}
        captionPosition="bottom"
        automatic={true}
        dots={true}
        pauseIconColor="white"
        pauseIconSize="40px"
        slideBackgroundColor="darkgrey"
        slideImageFit="cover"
        thumbnails={true}
        thumbnailWidth="100px"
        style={{
          textAlign: "center",
          maxWidth: "1344px",
          maxHeight: "672px",
          margin: "40px auto",
          marginBottom: "100px",
        }}
      />
    </div>
  );
}

export default ComputerProjectGallery;
