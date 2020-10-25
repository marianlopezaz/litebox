import styles from './styles.module.scss';

const LeftHeaderSection = () => {
    return (
        <ul className={styles.ul_container}>
            <li className={styles.container_li}>
                <img src="/logo.svg" className={styles.logo} />
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
                <Modal
                    title={"Agregar nueva película"}
                    body={<AddMovieForm />}
                    button={<AddMovieButtonComponent />}
                />
            </li>
        </ul>
    )
}

export default LeftHeaderSection;