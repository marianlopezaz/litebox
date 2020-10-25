import { Col, Row } from "react-bootstrap";
import ButtonLiteflix from "../../commons/buttons/common_button_component/button_component";
import styles from './styles.module.scss';
import AddIcon from '@material-ui/icons/Add';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const InfoComponent = ({isMobile}) => {

    const [mobileStyle, setMobileStyle] = useState();

    useEffect(()=>{
        setMobileStyle(isMobile);
    },[isMobile])

    return (
        <Row lg={12} md={12} sm={12} xs={12} className={styles.container} style={mobileStyle ? {justifyContent:'center'} : {}}>

            <Col lg={12} md={12} sm={12} xs={12} className={styles.info_container} style={mobileStyle ? {textAlign:'center'} : {}}>
                <span className={styles.first_title}>ORIGINAL DE <strong>LITEFLIX</strong></span>
                <span className={styles.second_title}>Kids at school</span>
                <Col lg={12} md={12} sm={12} xs={12} className={styles.buttons_container} style={mobileStyle ? {justifyContent:'center'} : {}}>
                    <ButtonLiteflix btnText="Reproducir" btnIcon={<PlayArrowIcon />} />
                    {isMobile ?
                        <img src="/images/add-list.svg" className={styles.image} /> :
                        <ButtonLiteflix btnText="Mi lista" btnIcon={<AddIcon />} />
                    }
                </Col>
                {!isMobile &&
                <>
                <span className={styles.little_title}>Ver temporada 1</span>
                <span>
                        Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
                        Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,
                        cuando un impresor (N. del T. persona que se dedica a la imprenta).
                </span>
                </>
                }
            </Col>

        </Row>
    )

}

export default InfoComponent;