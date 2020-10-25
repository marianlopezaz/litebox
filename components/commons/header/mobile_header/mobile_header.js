import styles from './styles.module.scss';
import MenuIcon from '@material-ui/icons/Menu';
import ResponsiveSidebar from '../../responsive_sidebar/responsive_sidebar';
import SidebarContentComponent from './sidebar_content_component/sidebar_content_component';

const MobileHeader = () => {

    return (
        <div className={styles.header_container}>
            <img src="/logo.svg" className={styles.logo} />
            <div className={styles.menu_container}>
                <ResponsiveSidebar
                    title={
                        <div style={{display:'flex', paddingLeft:'40px'}}>
                            <img src="/logo.svg" className={styles.logo} />
                        </div>
                        }
                    button={<MenuIcon />}
                    body={<SidebarContentComponent/>}
                />
            </div>
        </div>
    )
}

export default MobileHeader;