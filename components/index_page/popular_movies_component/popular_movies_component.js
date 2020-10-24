import { Col, Row } from "react-bootstrap";
import TitlePage from '../../commons/title_page/title_page';
import styles from './styles.module.scss';

const PopularMoviesComponent = ({images}) =>{

    return(
        <Row  lg={12} md={12} sm={12} xs={12}  className={styles.container}>
            <Col lg={12} md={12} sm={12} xs={12}>
                <TitlePage title="POPULARES DE LITEFLIX" color="var(--white)" fontSize={20}/>
            </Col>
            <Col  lg={12} md={12} sm={12} xs={12} className={styles.images_container}>
            {[1, 2, 3, 4,5,6,7,8,9,10,11,12].map((movie,index) => {
                        return (
                            <>
                                <div key={index} className={styles.img_container} 
                                     style={{backgroundImage:'url(/images/large1.jpg)'}}
                                     /* onMouseEnter={(e) => handleHover(e,index)}  */
                                    /*  onMouseLeave={handleHoverOut}  */
                                >
                                    {/* {index === hoveredIndex && <CommingSoonHoverComponent />} */}
                                </div>
                               
                            </>
                        )
                    })}       
            </Col>
        </Row>
    )
}


export default PopularMoviesComponent;