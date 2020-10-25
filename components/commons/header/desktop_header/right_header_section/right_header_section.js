import ProfileMenu from '../../profile_menu/profile_menu';
import { IconButton } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import styles from './styles.module.scss';


const RightHeaderSection = () => {
    return (
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
    )
}

export default RightHeaderSection;