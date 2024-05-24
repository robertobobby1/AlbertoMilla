import { useContext, useEffect } from "react";
import { NavigationBarContext } from "../../../components/navigationbar/NavigationBarContext";
import { images } from "../../../imageimports/carrousel/Privado/CentroLogisticoConsum";
import ProjectGallery from "../../../components/ProjectGallery/ProjectGallery";

function CentroLogisticoCosum() {
  const { secondLevelNav, setSecondLevelNav } =
    useContext(NavigationBarContext);
  useEffect(() => {
    setSecondLevelNav(true);
  }, []);

  return <ProjectGallery images={images} />;
}

export default CentroLogisticoCosum;
