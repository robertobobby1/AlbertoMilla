import { useContext, useEffect } from 'react';
import urbanismoImages from '../../imageimports/imagegrid/Urbanismo';
import ResponsiveGrid from '../../components/ResponsiveGrid/ResponsiveGrid';
import { NavigationBarContext } from '../../components/navigationbar/NavigationBarContext';
  
function Urbanismo() {
    const {secondLevelNav, setSecondLevelNav} = useContext(NavigationBarContext);
    useEffect(() => {
        setSecondLevelNav(true);    
    }, [])

    return (
        <ResponsiveGrid ReactImages={urbanismoImages}/>
    );
}

export default Urbanismo;