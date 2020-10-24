import { motion } from 'framer-motion';
import styles from './styles.module.scss';

const CommingSoonHoverComponent = () => {
    return (
        <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className={styles.container}>

            <div className={styles.button_container}>
                <img src="/images/add-list.svg" className={`${styles.image} ${styles.play_image}`} />
                <img src="/images/ok.svg" className={styles.image} />
            </div>
            <div className={styles.play_button_container}>
                <img src="/images/play.svg" className={styles.middle_image} />
            </div>
            <div className={styles.bottom_container}>
                <span className={styles.title}>Black Mirror</span>
                <span className={styles.description}>
                    98% de coincidencia <span className={styles.movie_year}>+16</span> 1h 30 min
                </span>
                <span className={styles.movie_type}>Suspenso</span>
            </div>
        </motion.div>
    )
}

export default CommingSoonHoverComponent;