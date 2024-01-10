import { useContext, useEffect } from 'react';
import privadoImages from '../../imageimports/imagegrid/Privado';
import ResponsiveGrid from '../../components/ResponsiveGrid/ResponsiveGrid';
import { NavigationBarContext } from '../../components/navigationbar/NavigationBarContext';
  
function Privado() {
    const {secondLevelNav, setSecondLevelNav} = useContext(NavigationBarContext);
    useEffect(() => {
        setSecondLevelNav(true);    
    }, [])

    return (
        <ResponsiveGrid ReactImages={privadoImages}/>
    );
}

export default Privado;