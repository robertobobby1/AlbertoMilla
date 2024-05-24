import { useEffect, useContext } from "react";
import { images } from "../../../imageimports/carrousel/Residencial/CasaBodi";
import { NavigationBarContext } from "../../../components/navigationbar/NavigationBarContext";
import ProjectGallery from "../../../components/ProjectGallery/ProjectGallery";

function CasaBodi() {
  const { secondLevelNav, setSecondLevelNav } =
    useContext(NavigationBarContext);
  useEffect(() => {
    setSecondLevelNav(true);
  }, []);

  return <ProjectGallery images={images} />;
}

export default CasaBodi;
