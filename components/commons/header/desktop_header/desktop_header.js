import { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { IconButton, useMediaQuery, useTheme } from '@material-ui/core';
import ProfileMenu from '../profile_menu/profile_menu';


const DesktopHeader = () => {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down(1065));
    const [hover, setHover] = useState();
    const [exploreOptions, setExploreOptions] = useState();


    const handleHover = () => {
        setHover(!hover);
    }

    useEffect(()=>{
        setExploreOptions(fullScreen);
    },[fullScreen]);

    return (
        <div className={styles.header_container}>
 

            <div className={styles.secondary_nav}>
                <div className={styles.text_children_container}>
                    <span>Niños</span>
                </div>

                    <IconButton>
                        <NotificationsIcon style={{ color: 'var(--white)' }} />
                    </IconButton>
                    <div className={styles.new_notification_alert}></div>
                    <div className={styles.profile_container}>
                        <ProfileMenu />
                    </div>
            </div>
        </div>
    )
}

export default DesktopHeader;