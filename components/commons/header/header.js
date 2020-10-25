import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import DesktopHeader from './desktop_header/desktop_header';
import MobileHeader from './mobile_header/mobile_header';

const Header = () => {

    const isMobile = useSelector((store) => store.device.isMobile);
    const [mobileStyle, setMobileStyle] = useState();

    useEffect(()=>{
        setMobileStyle(isMobile);
    },[isMobile]);

    return (
        mobileStyle ? 
        <MobileHeader /> :
        <DesktopHeader />
    )
} 

export default Header;