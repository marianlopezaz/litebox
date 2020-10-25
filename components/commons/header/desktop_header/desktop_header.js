import styles from './styles.module.scss';
import LeftHeaderSection from './left_header_section/left_header_section';
import RightHeaderSection from './right_header_section/right_header_section';

const DesktopHeader = () => {

    return (
        <div className={styles.header_container}>
            <LeftHeaderSection />
            <RightHeaderSection />
        </div>
    )
}

export default DesktopHeader;