import React, { Component } from "react";
import Banner from "../components/Banner";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
export default class error extends Component {
  render() {
    return (
      <Hero>
        <Banner title="404" subtitle="page not found">
          <Link to="/" className="btn-primary">
            {" "}
            return to home
          </Link>
        </Banner>
      </Hero>
    );
  }
}
