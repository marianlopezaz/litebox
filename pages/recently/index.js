import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import useSWR from "swr";
import config from "../../utils/config";
import { getMovieService } from "../../utils/movie/services/movie_services";
import { MOVIE_TYPES } from "../../utils/movie/types/movie_types";
import styles from './styles.module.scss';
import BackgroundLoader from '../../components/commons/background_loader/background_loader'


const url = `${config.api_url}/movies`
const Recently = () => {
    const [uploadadedMovies, setUploadadedMovies] = useState();
    const [isLoading, setIsLoading] = useState();

    const formDate = (date) => {
        const newDate = new Date(date);
        const day = newDate.getDate();
        const month = newDate.getMonth();
        const year = newDate.getFullYear();
        return `${day}/${month}/${year}`
    }


    useEffect(() => {
        getMovieService(MOVIE_TYPES.uploaded).then((result) => {
            setUploadadedMovies(result.result);
        })
    }, [])

    useSWR(url, () => {
        setIsLoading(true);
        getMovieService(MOVIE_TYPES.uploaded).then((result) => {
            setIsLoading(false);
            setUploadadedMovies(result.result);
        })
    });

    return (
        <>
            {isLoading && <BackgroundLoader show={isLoading} />}
            <Row lg={12} md={12} sm={12} xs={12} className={styles.container}>
                    {
                        uploadadedMovies?.map((movie) => {
                            return (
                                <Col lg={4} md={12} sm={12} xs={12} style={{ margin: '10px 0px', maxHeight: '250px' }}>
                                    <div className={styles.movie_container}>
                                        <img src={movie.image} className={styles.img} />
                                        <div className={styles.info_container}>
                                            Nombre: <span className={styles.movie_name}>{movie.name}</span>
                                    Categoría: <span className={styles.movie_name}>{movie.category.name}</span>
                                    Creado el día: <span className={styles.movie_name}>{formDate(movie.createdAt)}</span>
                                        </div>
                                    </div>

                                </Col>
                            )
                        })
                    }
            </Row>
        </>
    )
}

export default Recently; 