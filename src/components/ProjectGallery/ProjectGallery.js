import * as React from 'react';
import MediaQuery from 'react-responsive';
import PhoneProjectGallery from './PhoneProjectGallery';
import ComputerPojectGallery from './ComputerProjectGallery';

function ProjectGallery({ computerImages, phoneImages }) {
  const mobileMenu = (
    <PhoneProjectGallery ReactImages={phoneImages}/>
  );
  const computerMenu = (
    <ComputerPojectGallery ReactImages={computerImages}/>
  );

  return (
    <div>
      <MediaQuery minWidth={601}>{computerMenu}</MediaQuery>
      <MediaQuery maxWidth={600}>{mobileMenu}</MediaQuery>
    </div>
  );
}

export default ProjectGallery;
