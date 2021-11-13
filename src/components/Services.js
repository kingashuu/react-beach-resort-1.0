import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaBeer, FaShuttleVan } from "react-icons/fa";
export default class Services extends Component {
  state = {
    Services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktail",
        info: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, harum?",
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, harum?",
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, harum?",
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, harum?",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.Services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h4>{item.title}</h4>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
