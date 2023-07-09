import React from 'react'
import styles from "./Loader.module.scss";
import reactDom from 'react-dom';
const Loader = () => {
  return reactDom.createPortal (
    <div className={styles.wrapper}>
      <div className={styles.loader}>
        <img src="../../asserts/loader.png" alt="Loading..." />
      </div>
    </div>,
    document.getElementById("loader")
  )
};

export default Loader;
