import React from 'react'
import {ContextBox} from 'instructure-ui'

import styles from './ContextBox.example.css'
import image from './example-image.jpg'

export default function ContextBoxExample () {
  return (
    <div>
      <div className={styles.example}>
        <ContextBox>
          <div className={styles.text}>
            positioned above (default)
          </div>
        </ContextBox>
      </div>
      <div className={styles.example}>
        <ContextBox position="left">
          <div className={styles.text}>
            positioned left
          </div>
        </ContextBox>
      </div>
      <div className={styles.example}>
        <ContextBox position="right">
          <div className={styles.text}>
            positioned right
          </div>
        </ContextBox>
      </div>
      <div className={styles.example}>
        <ContextBox position="below">
          <div className={styles.text}>
            positioned below
          </div>
        </ContextBox>
      </div>
      <div className={styles.example}>
        <ContextBox position="below" animate={false}>
          <div className={styles.text}>
            positioned below, no animation
          </div>
        </ContextBox>
      </div>
      <div className={styles.example}>
        <ContextBox position="right" showCaret={false}>
          <div className={styles.image}>
            <img src={image} alt="Image of flowers" />
          </div>
          <div className={styles.text}>
            positioned right, no caret, containing an image
          </div>
        </ContextBox>
      </div>
    </div>
  )
}