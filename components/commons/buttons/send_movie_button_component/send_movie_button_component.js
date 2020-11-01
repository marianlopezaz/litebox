import styles from './styles.module.scss';
import CircularProgress from "@material-ui/core/CircularProgress";
import { motion } from 'framer-motion';

const SendMovieButtonComponent = ({ disabled, successUpload }) => {
    return (
            <button className={styles.button_container} disabled={disabled}>
                {!disabled && !successUpload ? ' Subir Película' : !disabled && successUpload ? 'Cerrar' : 
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