import { useState } from 'react';
import Modal from '../../modal/modal';
import styles from './styles.module.scss';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { IconButton } from '@material-ui/core';

import ProfileMenu from '../profile_menu/profile_menu';
import AddMovieButtonComponent from '../../buttons/add_movie_button_component/add_movie_button_component';
import AddMovieForm from '../../../movies/add_movie_form/add_movie_form';

const DesktopHeader = () => {

    const [hover, setHover] = useState();

    const handleHover = () => {
        setHover(!hover);
    }

    return (
        <div className={styles.header_container}>

            <ul className={styles.ul_container}>
                <li className={styles.container_li}>
                    <img src="/logo.svg" className={styles.logo} />
                </li>
                <li className={styles.container_li}>
                    <span className={styles.item}>Inicio</span>
                </li>
                <li className={styles.container_li}>
                    <span className={styles.item}>Series</span>
                </li>
                <li className={styles.container_li}>
                    <span className={styles.item}>Películas</span>
                </li>
                <li className={styles.container_li}>
                    <span className={styles.item}>Agregador recientemente</span>
                </li>
                <li className={styles.container_li}>
                    <span className={styles.item}>Mi lista</span>
                </li>
                <li className={styles.container_li} onMouseEnter={handleHover} onMouseLeave={handleHover}>
                    <Modal
                        title={"Agregar nueva película"}
                        body={<AddMovieForm />}
                        button={<AddMovieButtonComponent />}
                    />
                </li>
            </ul>

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