import { useContext, useEffect } from 'react';
import residencialImages from '../../imageimports/imagegrid/Residencial';
import ResponsiveGrid from '../../components/ResponsiveGrid/ResponsiveGrid';
import { NavigationBarContext } from '../../components/navigationbar/NavigationBarContext';
  
function Residencial() {
    const {secondLevelNav, setSecondLevelNav} = useContext(NavigationBarContext);
    useEffect(() => {
        setSecondLevelNav(true);    
    }, [])

    return (
        <ResponsiveGrid ReactImages={residencialImages}/>
    );
}

export default Residencial;