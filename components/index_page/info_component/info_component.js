import { Col, Row } from "react-bootstrap";
import ButtonLiteflix from "../../commons/buttons/common_button_component/button_component";
import styles from './styles.module.scss';
import AddIcon from '@material-ui/icons/Add';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const InfoComponent = ({mobileStyle, movieData}) => {

    return (
        <Row lg={12} md={12} sm={12} xs={12} className={`${styles.container} ${mobileStyle && styles.mobile_container}`}>

            <Col lg={12} md={12} sm={12} xs={12} className={`${styles.info_container} ${mobileStyle && styles.mobile_info_container}`}>
                <span className={styles.first_title}>ORIGINAL DE <strong>LITEFLIX</strong></span>
                <span className={styles.second_title}>{movieData?.title}</span>
                <Col lg={12} md={12} sm={12} xs={12} className={`${styles.buttons_container} ${mobileStyle && styles.buttons_mobile_container}`}>
                    <ButtonLiteflix btnText="Reproducir" btnIcon={<PlayArrowIcon />} />
                    {mobileStyle ?
                        <img src="/images/add-list.svg" className={styles.image} /> :
                        <ButtonLiteflix btnText="Mi lista" btnIcon={<AddIcon />} />
                    }
                </Col>
                {!mobileStyle &&
                <>
                <span className={styles.little_title}>Ver temporada 1</span>
                <span>
                       {movieData?.overview}
                </span>
                </>
                }
            </Col>

        </Row>
    )

}

export default InfoComponent;