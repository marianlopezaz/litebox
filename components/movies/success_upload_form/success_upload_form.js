import { motion } from "framer-motion";
import { Col, Row } from "react-bootstrap";
import SendMovieButtonComponent from "../../commons/buttons/send_movie_button_component/send_movie_button_component";
import styles from './styles.module.scss';

const SuccessUploadForm = ({ movie, succesUpload, handleClose }) => {
    const handleCloseModal = () =>{
        handleClose(false);
    }
    return (
        <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
        >
            <Row lg={12} md={12} sm={12} xs={12} className={styles.container}>
                <Col lg={12} md={12} sm={12} xs={12}>
                    <img src="/logo.svg" className={styles.logo} />
                </Col>
                <Col lg={12} md={12} sm={12} xs={12} className={styles.text_container}>
                    <span className={styles.congrats_text}>Felicitaciones! </span>
                    <span className={styles.text}>{movie.name} </span>  fue correctamente subido a la categoría
                <span className={styles.text}> {movie.category}</span>
                </Col>
                <Col lg={12} md={12} sm={12} xs={12} onClick={handleCloseModal}>
                    <SendMovieButtonComponent successUpload={succesUpload} />
                </Col>
            </Row>
        </motion.div>

    )

}

export default SuccessUploadForm;