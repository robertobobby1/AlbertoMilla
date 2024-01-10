import { useContext, useEffect } from 'react';
import { NavigationBarContext } from '../../../components/navigationbar/NavigationBarContext';
import {
    computerImages,
   // phoneImages,
  } from '../../../imageimports/carrousel/Privado/ComedorConsum';
import ProjectGallery from '../../../components/ProjectGallery/ProjectGallery';
  
function ComedorConsum() {
    const {secondLevelNav, setSecondLevelNav} = useContext(NavigationBarContext);
    useEffect(() => {
        setSecondLevelNav(true);    
    }, [])

    return (
        <ProjectGallery computerImages={computerImages}/>
    );
}

export default ComedorConsum;