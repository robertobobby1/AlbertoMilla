import { useContext, useEffect } from "react";
import { NavigationBarContext } from "../../../components/navigationbar/NavigationBarContext";
import { images } from "../../../imageimports/carrousel/Residencial/CasaCentreHistoric";
import ProjectGallery from "../../../components/ProjectGallery/ProjectGallery";

function CasaCentreHistoric() {
  const { secondLevelNav, setSecondLevelNav } =
    useContext(NavigationBarContext);
  useEffect(() => {
    setSecondLevelNav(true);
  }, []);

  return <ProjectGallery images={images} />;
}

export default CasaCentreHistoric;
