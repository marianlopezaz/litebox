import { Col, Row } from "react-bootstrap";
import TitlePage from '../../commons/title_page/title_page';
import styles from './styles.module.scss';

const CommingSoonComponent = ({images}) =>{

    return(
        <Row  lg={12} md={12} sm={12} xs={12} className={styles.info_container}>
            <Col  lg={12} md={12} sm={12} xs={12} className={styles.info_container}>
                <TitlePage title="Próximamente" color="var(--white)" fontSize={20}/>
            </Col>
            <Col  lg={12} md={12} sm={12} xs={12} className={styles.images_container}>
                <div className={styles.img_container} style={{backgroundImage:'url("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/440px-Image_created_with_a_mobile_phone.png")'}}/>           
                <div className={styles.img_container} style={{backgroundImage:'url("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/440px-Image_created_with_a_mobile_phone.png")'}}/>           
                <div className={styles.img_container} style={{backgroundImage:'url("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/440px-Image_created_with_a_mobile_phone.png")'}}/>           
                <div className={styles.img_container} style={{backgroundImage:'url("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/440px-Image_created_with_a_mobile_phone.png")'}}/>           
                <div className={styles.img_container} style={{backgroundImage:'url("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/440px-Image_created_with_a_mobile_phone.png")'}}/>           
                <div className={styles.img_container} style={{backgroundImage:'url("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/440px-Image_created_with_a_mobile_phone.png")'}}/>           
                <div className={styles.img_container} style={{backgroundImage:'url("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/440px-Image_created_with_a_mobile_phone.png")'}}/>           

            </Col>
        </Row>
    )
}


export default CommingSoonComponent;