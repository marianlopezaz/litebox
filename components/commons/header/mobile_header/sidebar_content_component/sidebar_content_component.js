import styles from './styles.module.scss';
import LiteflixAvatar from '../../../liteflix_avatar_component/liteflix_avatar_component';
import AddMovieButtonComponent from '../../../buttons/add_movie_button_component/add_movie_button_component';
import AddMovieForm from '../../../../movies/add_movie_form/add_movie_form';
import Modal from '../../../modal/modal';
import { IconButton } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';


const SidebarContentComponent = () => {
    return (
        <>

            <div className={`${styles.users_list_item}`}>
                <LiteflixAvatar
                    iconColor='#f5a623'
                    iconWidth={15}
                    containerColor='#ce00ff'
                    containerWidth={25}
                />
                <span className={styles.users_list_text}>Ernesto García</span>
            </div>

            <ul className={styles.config_list}>
                <li className={styles.config_list_item}>
                    Cambiar Usuario
                </li>
                <li className={styles.config_list_item}>
                    Configuración
                </li>

                <li className={styles.config_list_item}>
                    Ayuda
                </li>
            </ul>

            <ul className={styles.header_list}>
                <li className={styles.header_list_item}>
                    <IconButton style={{width:'10px'}}>
                       <img src="/icons/bell.svg" />
                    </IconButton>
                    <div className={styles.new_notification_alert}></div>
                    Novedades
                </li>
                <li className={styles.header_list_item}>
                    Series
                </li>
                <li className={styles.header_list_item}>
                    Películas
                </li>
                <li className={styles.header_list_item}>
                    Mi lista
                </li>
                <li className={styles.header_list_item}>
                    Niños
                </li>
                <li className={styles.header_list_item} id={styles.new_movie_li}>
                    <Modal
                        title={"Agregar nueva película"}
                        body={<AddMovieForm />}
                        button={<AddMovieButtonComponent hovered />}
                    />
                </li>
                <li className={styles.header_list_item}>
                    Log Out
                </li>
            </ul>
        </>
    )
}

export default SidebarContentComponent;