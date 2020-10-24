import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import TitlePage from '../../commons/title_page/title_page';
import CommingSoonHoverComponent from "./comming_soon_hover_component/comming_soon_hover_component";
import styles from './styles.module.scss';

const CommingSoonComponent = ({ images }) => {

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
            <Row lg={12} md={12} sm={12} xs={12} className={styles.container}>
                <Col lg={12} md={12} sm={12} xs={12}>
                    <TitlePage title="Próximamente" color="var(--white)" fontSize={20} />
                </Col>
                <Col lg={12} md={12} sm={12} xs={12} className={styles.images_container}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((movie, index) => {
                        return (
                            <div key={index} className={styles.img_container}
                                style={{ backgroundImage: 'url(/images/crown.jpg)' }}
                                onMouseEnter={(e) => handleHover(e, index)}
                                onMouseLeave={handleHoverOut}
                            >
                                {index === hoveredIndex && <CommingSoonHoverComponent />}
                            </div>
                        )
                    })}

                </Col>
            </Row>
        </>
    )
}


export default CommingSoonComponent;
