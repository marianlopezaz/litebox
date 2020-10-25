import React, { useEffect } from "react";

/* Dependencies */
import Head from "next/head";
import { wrapper } from "../redux/store";
import Alert from "react-s-alert";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import esLocale from "date-fns/locale/es";
import NProgress from "nprogress";
import Router from "next/router";

/* Change the following import to change alerts animation.(Info in README) */
import "react-s-alert/dist/s-alert-css-effects/stackslide.css";

/* Styles */
import "./styles/globals.scss";
import "./styles/alerts.scss";
import "./styles/progress_bar.scss";

// Pages loader
Router.events.on("routeChangeStart", () => NProgress.inc());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

/* Functions */
import { validateLoginUser } from "../utils/auth";
import { Col, Row } from "react-bootstrap";
import Header from "../components/commons/header/header";
import { isMobile } from 'react-device-detect';
import { useDispatch } from "react-redux";


/* REDUX */
import * as types from '../redux/types';

function MyApp({ Component, pageProps }) {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: types.INIT_DEVICE, payload: isMobile});
  }, []);

  return (
    <>
      <Head>
        <title>Litebox</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossOrigin="anonymous"
        />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;1,200&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,700;1,200&display=swap" rel="stylesheet" />
      </Head>
      <Alert timeout={5000} stack={true} />
      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
        <Header /> 
        <Row className="component_container">
          <Col>
            <Component {...pageProps} />
          </Col>
        </Row>
      </MuiPickersUtilsProvider>
    </>
  );
}

export default wrapper.withRedux(MyApp);
