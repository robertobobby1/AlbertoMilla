import { useContext, useEffect } from 'react';
import { NavigationBarContext } from '../../../components/navigationbar/NavigationBarContext';
import {
    computerImages,
    phoneImages,
  } from '../../../imageimports/carrousel/Residencial/CasaLaBega';
import ProjectGallery from '../../../components/ProjectGallery/ProjectGallery';
  
function CasaLaBega() {
    const {secondLevelNav, setSecondLevelNav} = useContext(NavigationBarContext);
    useEffect(() => {
        setSecondLevelNav(true);    
    }, [])

    return (
        <ProjectGallery computerImages={computerImages} phoneImages={phoneImages}/>
    );
}

export default CasaLaBega;