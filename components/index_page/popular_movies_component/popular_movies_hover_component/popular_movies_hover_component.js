import { motion } from 'framer-motion';
import styles from './styles.module.scss';

const PopularMoviesHoverComponent = () => {
    return (
        <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className={styles.container}>

            <div className={styles.play_button_container}>
                <img src="/images/play.svg" className={styles.middle_image} />
            </div>
            <div className={styles.info_container}>
                <div>
                    <span className={styles.title}>Black Mirror</span>
                    <span className={styles.description}>98% de coincidencia</span>
                    <span className={styles.description}><span className={styles.movie_year}>+16 </span> 1h 30 min</span>
                    <span className={styles.movie_type}>Suspenso</span>
                </div>
                <div className={styles.info_container__image}>
                    <img src="/images/ok.svg" className={`${styles.image} ${styles.play_image}`} />
                </div>
                
            </div>

            <div className={styles.arrow_image_container}>
                    <img src="/images/arrow.svg" className={`${styles.image} ${styles.play_image}`} />
                </div>
        </motion.div>
    )
}

export default PopularMoviesHoverComponent;