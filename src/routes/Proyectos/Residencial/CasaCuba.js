import { useEffect, useContext } from "react";
import { images } from "../../../imageimports/carrousel/Residencial/CasaCuba";
import { NavigationBarContext } from "../../../components/navigationbar/NavigationBarContext";
import ProjectGallery from "../../../components/ProjectGallery/ProjectGallery";

function CasaCuba() {
  const { secondLevelNav, setSecondLevelNav } =
    useContext(NavigationBarContext);
  useEffect(() => {
    setSecondLevelNav(true);
  }, []);

  return <ProjectGallery images={images} />;
}

export default CasaCuba;
