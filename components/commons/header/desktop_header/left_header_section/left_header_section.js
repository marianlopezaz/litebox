import styles from './styles.module.scss';
import AddMovieButtonComponent from '../../../buttons/add_movie_button_component/add_movie_button_component';
import AddMovieForm from '../../../../movies/add_movie_form/add_movie_form';
import Modal from '../../../modal/modal';
import { useState, useEffect } from 'react';
import { useMediaQuery, useTheme } from '@material-ui/core';
import ExploreOptionsComponent from '../explore_option_component/explore_options_component';
import Link from "next/link";

const LeftHeaderSection = () => {

    const [hover, setHover] = useState();
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down(1065));

    const [exploreOptions, setExploreOptions] = useState();


    useEffect(() => {
        setExploreOptions(fullScreen);
    }, [fullScreen]);


    const handleHover = () => {
        setHover(!hover);
    }

    return (
        <>
            <ul className={styles.ul_container}>
                <li className={styles.container_li}>
                    <Link href="/">
                        <img src="/logo.svg" className={styles.logo} />
                    </Link>
                </li>
                <li className={styles.container_li}>
                    <Link href="/">
                        <span className={styles.item}>Inicio</span>
                    </Link>
                </li>
                <li className={styles.container_li}>
                    <span className={styles.item}>Series</span>
                </li>
                <li className={styles.container_li}>
                    <span className={styles.item}>Películas</span>
                </li>
                <li className={styles.container_li}>
                    <Link href="/recently">
                        <span className={styles.item}>Agregados recientemente</span>
                    </Link>
                </li>
                <li className={styles.container_li}>
                    <span className={styles.item}>Mi lista</span>
                </li>
                <li className={styles.container_li} onMouseEnter={handleHover} onMouseLeave={handleHover}>
                    <Modal
                        body={<AddMovieForm />}
                        button={<AddMovieButtonComponent />}
                    />
                </li>
            </ul>
            {exploreOptions &&
                <div className={styles.explore_options_container}>
                    <ExploreOptionsComponent />
                </div>
            }
        </>
    )
}

export default LeftHeaderSection;