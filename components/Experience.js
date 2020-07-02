import React from "react";
import StyledTabs from "./resuables/StyledTabs";

import { IntersectionObserver } from "./resuables/IntersectionObserver";
import { ScaleBox } from "./resuables/ScaleBox.js";

const Experience = ({ tabs }) => {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <div className="section-heading">
          <h1>Work Experience</h1>
          <h6>Past and Current Jobs</h6>
        </div>
        <IntersectionObserver>
          <ScaleBox>
            <StyledTabs tabs={tabs} />
          </ScaleBox>
        </IntersectionObserver>
      </div>
    </section>
  );
};

export default Experience;
