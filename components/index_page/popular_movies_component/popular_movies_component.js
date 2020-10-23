import { Col, Row } from "react-bootstrap";
import TitlePage from '../../commons/title_page/title_page';
import styles from './styles.module.scss';

const PopularMoviesComponent = ({images}) =>{

    return(
        <Row  lg={12} md={12} sm={12} xs={12}>
            <Col  lg={12} md={12} sm={12} xs={12}>
                <TitlePage title="POPULARES DE LITEFLIX" color="var(--white)" fontSize={20}/>
            </Col>
            <Col  lg={12} md={12} sm={12} xs={12} className={styles.images_container}>
                <div className={styles.img_container} style={{backgroundImage:'url(/images/large1.jpg)'}}/>           
                <div className={styles.img_container} style={{backgroundImage:'url(/images/large2.jpg)'}}/>           
                <div className={styles.img_container} style={{backgroundImage:'url(/images/large3.jpg)'}}/>           
                <div className={styles.img_container} style={{backgroundImage:'url(/images/large4.jpg)'}}/>           
            </Col>
        </Row>
    )
}


export default PopularMoviesComponent;