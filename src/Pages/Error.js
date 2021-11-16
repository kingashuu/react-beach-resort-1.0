import React, { Component } from "react";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import ErrorHero from "../components/StyledHero";
import errorImg from "../images/404.jpg";
export default class error extends Component {
  render() {
    return (
      <ErrorHero img={errorImg} height="calc(100vh - 66px)">
        <Banner title="404" subtitle="page not found">
          <Link to="/" className="btn-primary">
            {" "}
            return to home
          </Link>
        </Banner>
      </ErrorHero>
    );
  }
}
