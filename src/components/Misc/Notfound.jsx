import React from 'react';
import nfound from '../../Config/store/images/notfound.png'
import styles from './Misc.module.css'


function NotFound() {
    return (
        <div className={styles.nfDiv}>
            <img src={nfound} alt="" width='70%' height='auto' />

        </div>
    );
}

export default NotFound;