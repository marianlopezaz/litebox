import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import styles from './styles.module.scss';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar, IconButton } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const Header = () => {

    const [hover, setHover] = useState();


    const handleHover = () => {
        setHover(!hover);
    }

    return (
        <div className={styles.header_container}>

            <ul className={styles.ul_container}>
                <li className={styles.container_li}>
                    <img src="/logo.svg" />
                </li>
                <li className={styles.container_li}>
                    <span className={styles.item}>Inicio</span>
                </li>
                <li className={styles.container_li}>
                    <span className={styles.item}>Series</span>
                </li>
                <li className={styles.container_li}>
                    <span className={styles.item}>Películas</span>
                </li>
                <li className={styles.container_li}>
                    <span className={styles.item}>Agregador recientemente</span>
                </li>
                <li className={styles.container_li}>
                    <span className={styles.item}>Mi lista</span>
                </li>
                <li className={styles.container_li} onMouseEnter={handleHover} onMouseLeave={handleHover}>
                    <div className={`${styles.item} ${styles.new_list}`}>
                        <img src="/icons/plus.svg" className={styles.add_movie_img}/>
                        <span className={styles.add_movie_txt}>Agregar película</span>
                    </div>
                </li>
            </ul>

            <Row lg={12} md={12} sm={12} xs={12} className={styles.secondary_nav}>
                <Col lg={4} md={4} sm={4} xs={4}>
                    <span>Niños</span>
                </Col>

                <Col lg={4} md={4} sm={4} xs={4}>
                    <IconButton>
                        <NotificationsIcon style={{color:'var(--white)'}}/>
                    </IconButton>
                </Col>
                <Col lg={4} md={4} sm={4} xs={4} className={styles.profile_container}>
                    <Avatar />
                    <KeyboardArrowDownIcon style={{color:'var(--white)'}}/>
                </Col>
            </Row>
        </div>
    )
}

export default Header;