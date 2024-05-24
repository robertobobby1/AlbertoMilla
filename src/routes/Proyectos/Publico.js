import { useContext, useEffect } from "react";
import publicoImages from "../../imageimports/imagegrid/Publico";
import ResponsiveGrid from "../../components/ResponsiveGrid/ResponsiveGrid";
import { NavigationBarContext } from "../../components/navigationbar/NavigationBarContext";

function Publico() {
  const { secondLevelNav, setSecondLevelNav } =
    useContext(NavigationBarContext);
  useEffect(() => {
    setSecondLevelNav(true);
  }, []);

  return <ResponsiveGrid ReactImages={publicoImages} />;
}

export default Publico;
