import * as React from "react";
import MediaQuery from "react-responsive";
import PhoneProjectGallery from "./PhoneProjectGallery";
import ComputerPojectGallery from "./ComputerProjectGallery";

function ProjectGallery({ images }) {
  const mobileMenu = <PhoneProjectGallery ReactImages={images} />;
  const computerMenu = <ComputerPojectGallery ReactImages={images} />;

  return (
    <div>
      <MediaQuery minWidth={701}>{computerMenu}</MediaQuery>
      <MediaQuery maxWidth={700}>{mobileMenu}</MediaQuery>
    </div>
  );
}

export default ProjectGallery;
