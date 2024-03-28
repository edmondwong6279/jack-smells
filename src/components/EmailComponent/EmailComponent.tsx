import styles from "./EmailComponent.module.scss";
import React, { FormEvent, useRef, useState } from "react";
import { ComponentType } from "types";

const EmailComponent: React.FunctionComponent<ComponentType> = ({ ref }) => {
  const [showForm, setShowForm] = useState(true);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("in handle submit");
    // do some validation
    setShowForm(false);
  };

  return (
    <div ref={ref} className={styles.container}>
      <h2 className={styles.header}>Emotive Call to Action</h2>
      <div className={styles.gridWrapper}>
        <div className={styles.leftItem}>
          <p className={styles.CTAText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          {showForm ? (
            <form onSubmit={handleSubmit}>
              <label htmlFor="email" />
              <input
                className={styles.input}
                type="text"
                id="email"
                name="email"
                required
              />
              <button className={styles.button} type="submit">
                Join in
              </button>
            </form>
          ) : (
            <p>Thanks for submitting your email.</p>
          )}
        </div>
        <iframe
          className={styles.iframe}
          // width="795"
          // height="596"
          src="https://www.youtube.com/embed/ujAm8AS-Mpw"
          title="The People Versus- Ocean Family"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default EmailComponent;
