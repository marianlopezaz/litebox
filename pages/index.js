// Import components
import styles from "./index.module.scss";
import { Col, Row } from "react-bootstrap";
import InfoComponent from "../components/index_page/info_component/info_component";
import CommingSoonComponent from "../components/index_page/comming_soon_component/comming_soon_component";
import PopularMoviesComponent from "../components/index_page/popular_movies_component/popular_movies_component";
import { useSelector } from "react-redux";


export default function Home() {
  const isMobile = useSelector((store) => store.device.isMobile);

  return (
    <>
      <Row lg={12} md={12} sm={12} xs={12} className={styles.container} >
        <Col lg={12} md={12} sm={12} xs={12} className={styles.top_container}>
          <InfoComponent isMobile={isMobile} />
        </Col>

        <Col lg={12} md={12} sm={12} xs={12} className={`${styles.comming_soon_container}`}>
            <CommingSoonComponent />
        </Col>

        <Col lg={12} md={12} sm={12} xs={12} className={`${styles.bottom_container} ${styles.popular_movies_container}`}>
          <PopularMoviesComponent />
        </Col>

      </Row>
    </>
  );
}
