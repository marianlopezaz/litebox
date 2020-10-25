import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import TitlePage from '../../commons/title_page/title_page';
import PopularMoviesHoverComponent from "./popular_movies_hover_component/popular_movies_hover_component";
import styles from './styles.module.scss';

const PopularMoviesComponent = ({ mobileStyle ,images }) => {

    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleHover = (e, index) => {
        console.log(index)
        setHoveredIndex(index)
    }

    const handleHoverOut = () => {
        setHoveredIndex(null);
    }

    return (
        <Row lg={12} md={12} sm={12} xs={12} className={styles.container}>
            <Col lg={12} md={12} sm={12} xs={12}>
                <TitlePage title="POPULARES DE LITEFLIX" color="var(--white)" fontSize={20} />
            </Col>
            <Col lg={12} md={12} sm={12} xs={12} className={`${styles.images_container} ${mobileStyle && styles.images_mobile_container}`}>
                {[1, 2, 3, 4].map((movie, index) => {
                    return (
                        <div className={`${styles.img_container} ${mobileStyle && styles.img_mobile_container}`} key={index} onMouseEnter={(e) => handleHover(e, index)}
                            onMouseLeave={handleHoverOut} >
                            <img src={`/images/large${index + 1}.jpg`} className={`${styles.img_container__movie_image} ${mobileStyle && styles.img_mobile_container__movie_image}`} />
                            {index === hoveredIndex &&
                                <div className={styles.hover_component_container}>
                                    <PopularMoviesHoverComponent />
                                </div>
                            }
                        </div>
                    )
                })}
            </Col>
        </Row>
    )
}


export default PopularMoviesComponent;