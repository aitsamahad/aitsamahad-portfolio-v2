import React, { useState } from "react";

import ReactMarkdown from "react-markdown";

import styles from "./styledtabs.module.css";

const StyledTabs = ({ tabs }) => {
  let isActive = 1;
  let isDisplayed = 1;

  const [company, setCompany] = useState({
    ...tabs[0],
  });

  const toggleHandler = value => {
    // console.log(value);
    const companyDetails = tabs.filter(tab => tab.id === value);
    // console.log(companyDetails[0].company);
    setCompany({ ...companyDetails[0] });
  };

  return (
    <div className={styles.container}>
      <aside className="side_tabs">
        <div className="lboard_tabs">
          <div className="tabs">
            <ul className="scrollmenu">
              {tabs.map(tab => (
                <li
                  key={tab.id}
                  data-tab-target={`#${tab.id}`}
                  data-li={tab.id}
                  className={`${isActive ? "active" : " "}`}
                  custom={(isActive = 0)}
                  onClick={() => toggleHandler(tab.id)}
                >
                  {tab.company}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>
      <div className="lboard_section">
        <section className="job_name">
          <h3>
            {company.title}{" "}
            <span style={{ color: "var(--pastel-accent-border)" }}>@</span>{" "}
            <u>
              <a
                href={company.url}
                style={{ color: "var(--background-pastel)" }}
                rel="noreferrer nofollow noopener"
              >
                {company.company}
              </a>
            </u>
          </h3>
          <span>
            <muted className="time_period">{company.range}</muted>
          </span>
        </section>
        <div className="lboard_wrap">
          {tabs.map(content => (
            <div
              key={content.id}
              className="lboard_item today"
              id={content.id}
              data-tab-content
              style={{ display: `${isDisplayed ? "active" : "none"}` }}
              custom={(isDisplayed = 0)}
            >
              <p className="job_desc">
                <ReactMarkdown source={content.content} />
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StyledTabs;
