import React from 'react'

import styles from './footer.module.scss'

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.row}>
                <div>With <span role="img" aria-label="love">❤️</span> Pier Roberto Lucisano 2019</div>
                <div><a href="https://github.com/pierroberto">Github</a></div>
            </div>
        </footer>
    )
}

export default Footer