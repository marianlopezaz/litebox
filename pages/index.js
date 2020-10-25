// Import components
import styles from "./index.module.scss";
import { Col, Row } from "react-bootstrap";
import InfoComponent from "../components/index_page/info_component/info_component";
import CommingSoonComponent from "../components/index_page/comming_soon_component/comming_soon_component";
import PopularMoviesComponent from "../components/index_page/popular_movies_component/popular_movies_component";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";


export default function Home() {
  const isMobile = useSelector((store) => store.device.isMobile);
  const [mobileStyle, setMobileStyle] = useState();

  useEffect(()=>{
    setMobileStyle(isMobile);
  },[isMobile])

  return (
    <>
      <Row lg={12} md={12} sm={12} xs={12} className={styles.container} >
        <Col lg={12} md={12} sm={12} xs={12} className={styles.top_container}>
          <InfoComponent mobileStyle={mobileStyle} />
        </Col>

        <Col lg={12} md={12} sm={12} xs={12} className={`${mobileStyle ? styles.comming_soon_mobile : styles.comming_soon_container}`}>
          <CommingSoonComponent mobileStyle={mobileStyle}/>
        </Col>

        <Col lg={12} md={12} sm={12} xs={12} className={`${styles.popular_movies_container} ${mobileStyle && styles.popular_movies_mobile}`}>
          <PopularMoviesComponent mobileStyle={mobileStyle}/>
        </Col>

      </Row>
    </>
  );
}
