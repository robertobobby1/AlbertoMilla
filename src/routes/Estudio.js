import { useContext, useEffect } from "react";
import { NavigationBarContext } from "../components/navigationbar/NavigationBarContext";
import ProjectGallery from "../components/ProjectGallery/ProjectGallery";
import { images } from "../imageimports/carrousel/Privado/EstudioDeArquitectura";

function Estudio() {
  const { secondLevelNav, setSecondLevelNav } =
    useContext(NavigationBarContext);
  useEffect(() => {
    setSecondLevelNav(false);
  }, []);

  return (
    <div>
      <ProjectGallery images={images} />
      <div class="flex justify-center mb-10 ml-5 mr-5">
        <div class="flex flex-col max-w-4xl text-justify">
          Nuestro estudio de arquitectura y urbanismo nace en el año 1981, y
          desde entonces hemos perseguido dotar de un valor excepcional a todos
          nuestros trabajos. La calidad en nuestra especialización ha sido el
          estandarte que ha encabezado siempre a nuestro estudio para acometer
          cada uno de los proyectos a los que nos hemos enfrentado. El grupo de
          profesionales que forman y colaboran con el estudio, siempre ha tenido
          como principal premisa la búsqueda de las necesidades del cliente para
          obtener la mayor calidad plástica y económica en el proyecto.
          <br />
          <br />
          Alberto Milla
        </div>
      </div>
    </div>
  );
}

export default Estudio;
