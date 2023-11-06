/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design_desk.jpg";

const imageAltText = "Pen and paper on table";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Crack the Code: Mastering Logic in Programming",
    description:
     "A medium article that focuses on improving logic in programming",
    url: "https://medium.com/@kashyapshreyash826/crack-the-code-mastering-logic-in-programming-6cb79336b18e",
  },
  {
    title: "House Prices Prediction program",
    description:
      "A machine learning model that use Decision Tree Regression to predict House Prices from a given set of data.",
    url: "https://github.com/SYK-08/FirstMLModel",
  },
  {
    title: "Machine Learning Model validation",
    description:
      "A machine learning model that computes Mean Absolute Error from validation data and predicts house prices using Decision Tree Regression given a set of data.",
    url: "https://github.com/SYK-08/ML-Model-Validation",
  },

  {
    title: "Real Time Data Plotting",
    description:
      "A python program to plot graph from data generated in real time.",
    url: "https://github.com/SYK-08/Real-time-data-plot",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
              animation: "1s ease-out 0s 1 slideIn",
            }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
