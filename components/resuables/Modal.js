import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from "react-markdown";

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modal = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    y: "100px",
    scale: 1,
    opacity: 1,
    transition: { delay: 0.5 },
  },
};

const Modal = ({ showModal, setShowModal, content }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          className="backdrop"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div
            className="modal"
            variants={modal}
            initial="hidden"
            animate="visible"
          >
            <span
              className="close_modal"
              onClick={() => setShowModal(!showModal)}
            >
              &rarr;
            </span>
            <div className="modal_header">
              <div className="modal_img">
                <img src={content.image} alt={content.title} />
              </div>

              <div className="modal_info">
                <h1>{content.title}</h1>
                <h2 style={{ display: "inline" }}>Type: </h2>{" "}
                <h3
                  style={{
                    display: "inline",
                    color: "var(--pastel-accent-border)",
                  }}
                >
                  {content.category}
                </h3>{" "}
                <br />
                <h2>Summary </h2>
                <p>{content.summary}</p>
                <br />
                <h2 style={{ display: "inline" }}>Techs: </h2>
                {content.tech.map(tech => (
                  <span>#{tech}, </span>
                ))}
                <br />
                <h2 style={{ display: "inline" }}>URL: </h2>
                <a
                  href={content.url}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  {content.url}
                </a>
              </div>
            </div>
            <div className="modal_desc">
              <h2>Details </h2>
              <p>
                <ReactMarkdown source={content.content} />
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
