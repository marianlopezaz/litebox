import { useSelector } from 'react-redux';
import DesktopHeader from './desktop_header/desktop_header';
import MobileHeader from './mobile_header/mobile_header';

const Header = () => {

    const isMobile = useSelector((store) => store.device.isMobile);

    return (
        isMobile ? 
        <MobileHeader /> :
        <DesktopHeader />
    )
}

export default Header;