import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { getMovieService } from "../../../utils/movie/services/movie_services";
import { MOVIE_TYPES } from "../../../utils/movie/types/movie_types";
import UpcomingSkeleton from "../../commons/skeletons/upcoming_skeleton";
import TitlePage from '../../commons/title_page/title_page';
import CommingSoonHoverComponent from "./comming_soon_hover_component/comming_soon_hover_component";
import styles from './styles.module.scss';

const CommingSoonComponent = ({ mobileStyle }) => {

    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [upcomingMovies, setUpcomingMovies] = useState();

    const handleHover = (e, index) => {
        setHoveredIndex(index)
    }

    const handleHoverOut = () => {
        setHoveredIndex(null);
    }

    useEffect(() => {
        getMovieService(MOVIE_TYPES.upcoming).then((result) => {
            setUpcomingMovies(result.result);
        })
    }, [])

    return (
        <>
            <Row lg={12} md={12} sm={12} xs={12} className={`${styles.container} ${mobileStyle && styles.mobile_container}`}>
                <Col lg={12} md={12} sm={12} xs={12}>
                    <TitlePage title="Próximamente" color="var(--white)" fontSize={20} />
                </Col>
                <Col lg={12} md={12} sm={12} xs={12} className={`${styles.images_container} ${mobileStyle && styles.mobile_images_container}`}>
                    {upcomingMovies ? upcomingMovies.map((movie, index) => {
                        return (
                            <div className={styles.img_container} key={index} onMouseEnter={(e) => handleHover(e, index)}
                                onMouseLeave={handleHoverOut} >
                                <img src={movie.image} className={styles.img_container__movie_image} />
                                {index === hoveredIndex &&
                                    <div className={styles.hover_component_container}>
                                        <CommingSoonHoverComponent movieData={movie} />
                                    </div>
                                }
                            </div>
                        )
                    })
                        :
                        <UpcomingSkeleton mobileStyle={mobileStyle}/>
                    }

                </Col>
            </Row>
        </>
    )
}


export default CommingSoonComponent;
