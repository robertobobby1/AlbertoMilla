import { useContext, useEffect } from "react";
import { NavigationBarContext } from "../../../components/navigationbar/NavigationBarContext";
import { images } from "../../../imageimports/carrousel/Publico/CentroMultifuncionalCarmenValero";
import ProjectGallery from "../../../components/ProjectGallery/ProjectGallery";

function CentroMultifuncionalCarmenValero() {
  const { secondLevelNav, setSecondLevelNav } =
    useContext(NavigationBarContext);
  useEffect(() => {
    setSecondLevelNav(true);
  }, []);

  return <ProjectGallery images={images} />;
}

export default CentroMultifuncionalCarmenValero;
