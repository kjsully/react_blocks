import React, {Component} from 'react';
import styles from './Blocks.module.css';


const Display = props => {
    return (
        <div className={styles.container}>
        <div className= {styles.topNav}></div>
        <div className={styles.row}>
            <div className={styles.sideNav}></div>
            <div className={styles.main}>
                <div className={styles.row}>
                    <div className={styles.subContent}></div>
                    <div className={styles.subContent}></div>
                    <div className={styles.subContent}></div>
                </div>
                <div className={styles.advertisement}></div>
            </div>
        </div>
    </div>
    )
}

export default Display