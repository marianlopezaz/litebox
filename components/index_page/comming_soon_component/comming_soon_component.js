import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import TitlePage from '../../commons/title_page/title_page';
import CommingSoonHoverComponent from "./comming_soon_hover_component/comming_soon_hover_component";
import styles from './styles.module.scss';

const CommingSoonComponent = ({ images, mobileStyle }) => {

    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleHover = (e, index) => {
        console.log(index)
        setHoveredIndex(index)
    }

    const handleHoverOut = () => {
        setHoveredIndex(null);
    }

    return (
        <>
            <Row lg={12} md={12} sm={12} xs={12} className={`${styles.container} ${ mobileStyle && styles.mobile_container}`}>
                <Col lg={12} md={12} sm={12} xs={12}>
                    <TitlePage title="Próximamente" color="var(--white)" fontSize={20} />
                </Col>
                <Col lg={12} md={12} sm={12} xs={12} className={`${styles.images_container} ${ mobileStyle && styles.mobile_images_container}`}>
                    {[1, 2, 3, 4].map((movie, index) => {
                        return (
                            <div className={styles.img_container} key={index} onMouseEnter={(e) => handleHover(e, index)}
                                onMouseLeave={handleHoverOut} >
                                <img src='/images/crown.jpg' className={styles.img_container__movie_image}/>
                                {index === hoveredIndex &&
                                    <div className={styles.hover_component_container}>
                                        <CommingSoonHoverComponent />
                                    </div>
                                }
                            </div>
                        )
                    })}

                </Col>
            </Row>
        </>
    )
}


export default CommingSoonComponent;
