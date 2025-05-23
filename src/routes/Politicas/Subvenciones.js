import { useContext, useEffect } from "react";
import { NavigationBarContext } from "../../components/navigationbar/NavigationBarContext";

import ESFinanciadoUE from "../../images/other/ESFinanciadoUE.png";
import LogoSubvencion from "../../images/other/LogoSubvencion.png";
import MITECO_IDAE from "../../images/other/MITECO_IDAE.jpg";
import PlanRecTransRes from "../../images/other/PlanRecTransRes.jpg";
import FotovoltaicaGenerica from "../../images/other/FotovoltaicaGenerica.png";

export default function Subvenciones() {
  const { setSecondLevelNav, setHideNavBar } = useContext(NavigationBarContext);

  useEffect(() => {
    setSecondLevelNav(false);
    setHideNavBar(true);

    return () => {
      setHideNavBar(false);
    };
  }, []);

  return (
    <>
      <div className="flex flex-wrap justify-between gap-4 w-full my-7">
        <img className="object-fill max-h-12" src={ESFinanciadoUE} />
        <img className="object-fill max-h-12" src={LogoSubvencion} />
        <img className="object-fill max-h-12" src={MITECO_IDAE} />
        <img className="object-fill max-h-12" src={PlanRecTransRes} />
      </div>
      <img
        className="max-h-72 w-full object-cover"
        src={FotovoltaicaGenerica}
      />
      <div className="m-7">
        <h2>
          INSTALACIÓN SOLAR FOTOVOLTAICA DE AUTOCONSUMO DE 4KW CON VERTIDO DE
          EXCEDENTES
        </h2>
        Proyecto acogido al programa de incentivos ligados al autoconsumo y
        almacenamiento, con fuentes de energía renovable, así como a la
        implantación de sistemas térmicos renovables en el sector residencial en
        el marco del Plan de Recuperación, Transformación y Resiliencia,
        financiado por la Unión Europea - NextGenerationEU
      </div>
    </>
  );
}
