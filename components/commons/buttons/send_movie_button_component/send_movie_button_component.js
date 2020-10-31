import styles from './styles.module.scss';
import CircularProgress from "@material-ui/core/CircularProgress";
import { motion } from 'framer-motion';

const SendMovieButtonComponent = ({ disabled, successUpload }) => {
    return (
        successUpload ?
            <motion.span 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className={styles.success_upload_text}>
                Película cargada correctamente
            </motion.span>

            :

            <button className={styles.button_container} disabled={disabled}>
                {!disabled ? ' Subir Película' :
                    <>
                        <CircularProgress
                            size={18}
                            color="primary"
                            className={styles.circular_progress}
                        />
                        {" "} Subiendo...
                </>
                }
            </button>
    )
}

export default SendMovieButtonComponent;