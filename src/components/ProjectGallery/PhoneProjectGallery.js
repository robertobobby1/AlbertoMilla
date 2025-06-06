import ResponsiveGallery from "react-responsive-gallery";
import * as React from "react";

const widthSizes = {
  xs: "1060",
  s: "1060",
  m: "1060",
  l: "1060",
  xl: "1060",
};

const imagePaddings = {
  xs: 10,
  s: 10,
  m: 10,
  l: 10,
  xl: 10,
  xxl: 10,
};

function PhoneProjectGallery({ ReactImages }) {
  let data = [];
  for (let i = 0; i < ReactImages.length; i++) {
    data.push({ src: ReactImages[i] });
  }

  return (
    <div
      style={{
        padding: "10px 10px 0px 10px",
      }}
    >
      <ResponsiveGallery
        imagesPaddingBottom={imagePaddings}
        screenWidthSizes={widthSizes}
        imagesStyle={"centerImage"}
        images={data}
      />
    </div>
  );
}

export default PhoneProjectGallery;
