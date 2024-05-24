import { useContext, useEffect } from "react";
import { NavigationBarContext } from "../../../components/navigationbar/NavigationBarContext";
import {
  computerImages,
  phoneImages,
} from "../../../imageimports/carrousel/Publico/CentroDeFormacionSilla";
import ProjectGallery from "../../../components/ProjectGallery/ProjectGallery";

function CentroDeFormacionSilla() {
  const { secondLevelNav, setSecondLevelNav } =
    useContext(NavigationBarContext);
  useEffect(() => {
    setSecondLevelNav(true);
  }, []);

  return (
    <ProjectGallery computerImages={computerImages} phoneImages={phoneImages} />
  );
}

export default CentroDeFormacionSilla;
