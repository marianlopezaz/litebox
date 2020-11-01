import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import styles from './styles.module.scss';
import { useState } from 'react';
import LiteflixAvatar from '../../../liteflix_avatar_component/liteflix_avatar_component';
import { Collapse } from '@material-ui/core';
import Modal from '../../../modal/modal';
import AddMovieForm from '../../../../movies/add_movie_form/add_movie_form';
import AddMovieButtonComponent from '../../../buttons/add_movie_button_component/add_movie_button_component';

const ExploreOptionsComponent = () => {

    const [moreOptions, setMoreOptions] = useState();

    const handleMoreOptions = () => {
        setMoreOptions(!moreOptions);
    }

    return (
        <>
            <div className={styles.container} onClick={handleMoreOptions}>
                <span className={styles.explore_text}>Explorar</span>
                {!moreOptions ?
                    <KeyboardArrowDownIcon style={{ color: 'var(--white)' }} /> :
                    <KeyboardArrowUpIcon style={{ color: 'var(--white)' }} />}
            </div>

            <Collapse in={moreOptions} className={styles.collapse_container}>
                <div className={styles.top_adornment}></div>
                <ul className={styles.explore_list}>
                    <li className={styles.explore_list_item}>
                        Inicio
                    </li>
                    <li className={styles.explore_list_item}>
                        Series
                    </li>
                    <li className={styles.explore_list_item}>
                        Películas
                    </li>
                    <li className={styles.explore_list_item}>
                        Agregados recientemente
                    </li>
                    <li className={styles.explore_list_item}>
                        Mi lista
                    </li>
                    <li className={styles.container_li}>
                        <Modal
                            body={<AddMovieForm/>}
                            button={<AddMovieButtonComponent />}
                        />
                    </li>
                </ul>
            </Collapse>
        </>
    )

}

export default ExploreOptionsComponent;