import React, { useState } from "react";
import { motion } from "framer-motion";

import { IntersectionObserver } from "./resuables/IntersectionObserver";
import { ScaleBox } from "./resuables/ScaleBox";
import Modal from "./resuables/Modal.js";

import Tag from "./resuables/Tag";

const content = {
  title: "ROY App",
  category: "Web Development",
  summary:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, impedit qui? Ratione cupiditate dolores assumenda animi laboriosam illo ipsam consequuntur sit, impedit, accusantium voluptatum iure minima neque voluptas fuga quam.",
  tags: ["nodejs", "restapi", "firebase", "mongodb"],
  detail:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sint tempore dolores totam adipisci magnam at omnis ea impedit, dolorum libero necessitatibus. Itaque officiis possimus animi asperiores reiciendis aspernatur dignissimos. Quasi nulla reprehenderit soluta accusamus tempora tempore excepturi? Placeat cupiditate fugit molestiae aliquid laborum excepturi illo, suscipit repudiandae corrupti a saepe beatae sit assumenda exercitationem. Praesentium tempora sequi non pariatur nulla, distinctio consequatur atque velit iure porro ea cupiditate eum, totam, deleniti harum! Voluptatibus molestiae maiores vitae illum ad pariatur accusantium facilis fuga quasi, consectetur ab temporibus necessitatibus praesentium ipsum, voluptate cum ullam adipisci. Dicta exercitationem vel nesciunt vero consequatur assumenda sint omnis a minima nihil quas, repellat laudantium aliquam unde iusto saepe aut nisi consectetur! Obcaecati quo asperiores amet sequi cum possimus beatae qui a nobis ullam, omnis est dolorem, natus, ipsum inventore rerum ex? Possimus, excepturi saepe sint maiores quod officia voluptate doloremque quo inventore enim molestiae ipsum?",
  image: "/images/portitem1.jpeg",
  url: "https://www.google.com",
};

const Portfolio = ({ data }) => {
  const portfolioItems = data.filter(data => data.featured == 1);
  const [showModal, setShowModal] = useState(false);
  const [portfolioItem, setPortfolioItem] = useState({});
  let isRight = true;

  const modalHandler = content => {
    setPortfolioItem({ ...content });
    setShowModal(true);
  };

  return (
    <>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        content={portfolioItem}
      />
      <motion.section
        initial="initial"
        animate="animate"
        className="portfolio"
        id="portfolio"
      >
        <div className="container">
          <div className="section-heading">
            <h1>Portfolio</h1>
            <h6>Some of my recent work</h6>
          </div>
          {portfolioItems.map(data => {
            if (isRight) {
              return (
                <IntersectionObserver>
                  <ScaleBox action="fadeInLeft">
                    <div className="portfolio-item">
                      <div
                        className="portfolio-img has-margin-right"
                        key={data.id}
                        custom={(isRight = !isRight)}
                      >
                        <img src={data.image} alt={data.title} />
                      </div>
                      <div className="portfolio-description">
                        <h6>{data.category}</h6>
                        <h1>{data.title}</h1>
                        <p>{data.summary}</p>
                        <Tag techs={data.tech} />
                        <a className="cta" onClick={() => modalHandler(data)}>
                          View Details &rarr;
                        </a>
                      </div>
                    </div>
                  </ScaleBox>
                </IntersectionObserver>
              );
            } else {
              return (
                <IntersectionObserver>
                  <ScaleBox action="fadeInRight">
                    <div
                      className="portfolio-item"
                      key={data.id}
                      custom={(isRight = !isRight)}
                    >
                      <div className="portfolio-description has-margin-right">
                        <h6>{data.category}</h6>
                        <h1>{data.title}</h1>
                        <p>{data.summary}</p>
                        <Tag techs={data.tech} />
                        <a className="cta" onClick={() => modalHandler(data)}>
                          View Details &rarr;
                        </a>
                      </div>
                      <div className="portfolio-img">
                        <img src={data.image} alt={data.title} />
                      </div>
                    </div>
                  </ScaleBox>
                </IntersectionObserver>
              );
            }
          })}

          {/* <IntersectionObserver>
            <ScaleBox action="fadeInLeft">
              <div className="portfolio-item">
                <div className="portfolio-img has-margin-right">
                  <img src="/images/portitem3.jpeg" alt="" />
                </div>
                <div className="portfolio-description">
                  <h6>iOS Application</h6>
                  <h1>Mobile Application</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam minus neque in laboriosam qui sunt consequatur
                    consequuntur esse! Dolor, corrupti?
                  </p>
                  <a href="#" className="cta">
                    View Details &rarr;
                  </a>
                </div>
              </div>
            </ScaleBox>
          </IntersectionObserver> */}
        </div>
        <IntersectionObserver>
          <ScaleBox>
            <a href="#" className="custom_btn btn_primary more_projects">
              More Projects
            </a>
          </ScaleBox>
        </IntersectionObserver>
      </motion.section>
    </>
  );
};

export default Portfolio;
