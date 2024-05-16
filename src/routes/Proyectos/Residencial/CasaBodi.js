import { useEffect, useContext } from "react";
import {
  computerImages,
  phoneImages,
} from "../../../imageimports/carrousel/Residencial/CasaBodi";
import { NavigationBarContext } from "../../../components/navigationbar/NavigationBarContext";
import ProjectGallery from "../../../components/ProjectGallery/ProjectGallery";

function CasaBodi() {
  const { secondLevelNav, setSecondLevelNav } =
    useContext(NavigationBarContext);
  useEffect(() => {
    setSecondLevelNav(true);
  }, []);

  return (
    <ProjectGallery computerImages={computerImages} phoneImages={phoneImages} />
  );
}

export default CasaBodi;
