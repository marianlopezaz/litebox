import styles from './styles.module.scss';
import LiteflixAvatar from '../../../liteflix_avatar_component/liteflix_avatar_component';
import AddMovieButtonComponent from '../../../buttons/add_movie_button_component/add_movie_button_component';
import AddMovieForm from '../../../../movies/add_movie_form/add_movie_form';
import Modal from '../../../modal/modal';
import { IconButton } from '@material-ui/core';
import { motion } from 'framer-motion';


const list = {
    visible: {
        opacity: 1,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.1,
        },
    },
    hidden: {
        opacity: 0,
        transition: {
            when: "afterChildren",
        },
    },
};

const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
};

const SidebarContentComponent = () => {
    return (
        <>
            <motion.span
                initial="hidden"
                animate="visible"
                variants={list}
                style={{ listStyleType: "none", marginLeft: "0" }}
            >
                <motion.li variants={item} className={styles.config_list_item}>
                    <div className={`${styles.users_list_item}`}>
                        <LiteflixAvatar
                            iconColor='#f5a623'
                            iconWidth={15}
                            containerColor='#ce00ff'
                            containerWidth={25}
                        />
                        <span className={styles.users_list_text}>Ernesto García</span>
                    </div>
                </motion.li>

                <ul className={styles.config_list}>
                    <motion.li variants={item} className={styles.config_list_item}>
                        Cambiar Usuario
                    </motion.li>
                    <motion.li variants={item} className={styles.config_list_item}>
                        Configuración
                    </motion.li>
                    <motion.li variants={item} className={styles.config_list_item}>
                        Ayuda
                    </motion.li>
                </ul>

                <ul className={styles.header_list}>
                    <motion.li variants={item} className={styles.config_list_item}>
                        <IconButton style={{ width: '10px' }}>
                            <img src="/icons/bell.svg" />
                        </IconButton>
                        <div className={styles.new_notification_alert}></div>
                    Novedades
                </motion.li>
                    <motion.li variants={item} className={styles.config_list_item}>
                        Series
                </motion.li>
                    <motion.li variants={item} className={styles.config_list_item}>
                        Películas
                </motion.li>
                    <motion.li variants={item} className={styles.config_list_item}>
                        Mi lista
                </motion.li>
                    <motion.li variants={item} className={styles.config_list_item}>
                        Niños
                </motion.li>
                    <motion.li variants={item} className={styles.config_list_item}>
                        <Modal
                            body={<AddMovieForm />}
                            button={<AddMovieButtonComponent hovered />}
                        />
                    </motion.li>
                    <motion.li variants={item} className={styles.config_list_item}>
                        Log Out
                </motion.li>
                </ul>
            </motion.span>
        </>
    )
}

export default SidebarContentComponent;