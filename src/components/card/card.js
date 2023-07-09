import React from 'react'
import styles from "./Card.module.scss";
const card = ({childern} , {cardClass}) => {
  return (
    <div>
      <div className={`${styles.card} ${cardClass}`}>
        {childern}
    </div>
    </div>
  )
}

export default card;
