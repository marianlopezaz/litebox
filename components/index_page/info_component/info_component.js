import { Col, Row } from "react-bootstrap";
import ButtonLiteflix from "../../commons/buttons/common_button_component/button_component";
import styles from './styles.module.scss';
import AddIcon from '@material-ui/icons/Add';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

const InfoComponent = () => {


    return (
        <Row lg={3} md={3} sm={12} xs={12} className={styles.container}>

            <Col lg={12} md={12} sm={12} xs={12} className={styles.info_container}>
                <span className={styles.first_title}>ORIGINAL DE <strong>LITEFLIX</strong></span>
                <span className={styles.second_title}>Kids at school</span>
                <Col lg={12} md={12} sm={12} xs={12} className={styles.buttons_container}>
                    <ButtonLiteflix btnText="Reproducir" btnIcon={<PlayArrowIcon />} />
                    <ButtonLiteflix btnText="Mi lista" btnIcon={<AddIcon />} />
                </Col>

            </Col>

            <Col lg={12} md={12} sm={12} xs={12}>
                <span className={styles.little_title}>Ver temporada 1</span>
                <span>
                    Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
                    Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,
                    cuando un impresor (N. del T. persona que se dedica a la imprenta).
                </span>
            </Col>

        </Row>
    )

}

export default InfoComponent;