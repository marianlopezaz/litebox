import styles from './styles.module.scss';

const AddMovieButtonComponent = () => {

    return (
        <button className={`${styles.item} ${styles.new_list}`}>
            <img src="/icons/plus.svg" className={styles.add_movie_img} />
            <span className={styles.add_movie_txt}>Agregar película</span>
        </button>
    )
}

export default AddMovieButtonComponent;