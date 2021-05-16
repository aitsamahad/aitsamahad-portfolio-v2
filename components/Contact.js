import React, { useState } from "react";

import { IntersectionObserver } from "./resuables/IntersectionObserver";
import { ScaleBox } from "./resuables/ScaleBox.js";

const Contact = () => {
  const [status, setStatus] = useState("");

  const submitForm = ev => {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus("SUCCESS");
      } else {
        setStatus("ERROR");
      }
    };
    xhr.send(data);
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-heading">
          <h1>Contact</h1>
          <h6>Let's Work Together!</h6>
        </div>
        <IntersectionObserver>
          <ScaleBox action="fadeInUp">
            <div className="form_design">
              <form
                action="https://formspree.io/xknqqnre"
                method="POST"
                autoComplete="off"
                className="formStyle"
              >
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  name="name"
                  required
                />
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  name="email"
                  required
                />
                <label htmlFor="services">Services</label>
                <select name="service" id="service">
                  <option value="Web Development">Web Development</option>
                  <option value="Android Application">
                    Android Application
                  </option>
                  <option value="iOS Application">iOS Application</option>
                  <option value="Other" selected>
                    Other
                  </option>
                </select>
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  cols="10"
                  rows="10"
                ></textarea>
                {status === "SUCCESS" ? (
                  <p>Thanks!</p>
                ) : (
                  <button type="submit" className="custom_btn btn_primary">
                    Shoot the message!
                  </button>
                )}
                {status === "ERROR" && <p>Ooops! There was an error.</p>}
              </form>
            </div>
          </ScaleBox>
        </IntersectionObserver>
      </div>
    </section>
  );
};

export default Contact;
