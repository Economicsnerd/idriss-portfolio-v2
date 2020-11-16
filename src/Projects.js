import React from "react";
import Card from "./Card.js";
import logo from "./logo.svg";

// Import all icons as variables
// use `$ to display them all`

const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
      <div class="row row-cols-1 row-cols-md-2">
        <div class="col mb-4">
          <Card
            image={logo}
            title="This is the title"
            description="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
            category="React"
          />
        </div>
        <div class="col mb-4">
          <Card
            image={logo}
            title="This is the title"
            description="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
            category="React"
          />
        </div>
        <div class="col mb-4">
          <Card
            image={logo}
            title="This is the title"
            description="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
            category="React"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
