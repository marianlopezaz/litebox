import { useEffect } from "react";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { getMovieService } from "../../../utils/movie/services/movie_services";
import TitlePage from '../../commons/title_page/title_page';
import PopularMoviesHoverComponent from "./popular_movies_hover_component/popular_movies_hover_component";
import styles from './styles.module.scss';
import { MOVIE_TYPES } from "../../../utils/movie/types/movie_types";

const PopularMoviesComponent = ({ mobileStyle ,images }) => {

    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [popularMovies, setPopularMovies] = useState();

    const handleHover = (e, index) => {
        setHoveredIndex(index)
    }

    const handleHoverOut = () => {
        setHoveredIndex(null);
    }

    useEffect(()=>{
        getMovieService(MOVIE_TYPES.popular).then((result)=>{
          setPopularMovies(result.result);
        })
      },[])

    return (
        <Row lg={12} md={12} sm={12} xs={12} className={styles.container}>
            <Col lg={12} md={12} sm={12} xs={12}>
                <TitlePage title="POPULARES DE LITEFLIX" color="var(--white)" fontSize={20} />
            </Col>
            <Col lg={12} md={12} sm={12} xs={12} className={`${styles.images_container} ${mobileStyle && styles.images_mobile_container}`}>
                {popularMovies?.map((movie, index) => {
                    return (
                        <div className={`${styles.img_container} ${mobileStyle && styles.img_mobile_container}`} key={index} onMouseEnter={(e) => handleHover(e, index)}
                            onMouseLeave={handleHoverOut} >
                            <img src={movie.image} className={`${styles.img_container__movie_image} ${mobileStyle && styles.img_mobile_container__movie_image}`} />
                            {index === hoveredIndex &&
                                <div className={styles.hover_component_container}>
                                    <PopularMoviesHoverComponent movieData = {movie}/>
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