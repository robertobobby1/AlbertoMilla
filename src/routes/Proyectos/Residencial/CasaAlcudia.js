import { useContext, useEffect } from "react";
import { NavigationBarContext } from "../../../components/navigationbar/NavigationBarContext";
import { images } from "../../../imageimports/carrousel/Residencial/CasaAlcudia";
import ProjectGallery from "../../../components/ProjectGallery/ProjectGallery";

function CasaAlcudia() {
  const { secondLevelNav, setSecondLevelNav } =
    useContext(NavigationBarContext);
  useEffect(() => {
    setSecondLevelNav(true);
  }, []);

  return <ProjectGallery images={images} />;
}

export default CasaAlcudia;
