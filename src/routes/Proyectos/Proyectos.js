import { useContext, useEffect } from 'react';
import proyectosImages from '../../imageimports/imagegrid/Proyectos';
import ResponsiveGrid from '../../components/ResponsiveGrid/ResponsiveGrid';
import { NavigationBarContext } from '../../components/navigationbar/NavigationBarContext';
  
function Proyectos() {
    const {secondLevelNav, setSecondLevelNav} = useContext(NavigationBarContext);
    useEffect(() => {
        setSecondLevelNav(true);    
    }, [])

    return (
        <ResponsiveGrid ReactImages={proyectosImages}/>
    );
}

export default Proyectos;