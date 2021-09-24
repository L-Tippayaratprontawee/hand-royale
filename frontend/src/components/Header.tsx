import { Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'

export const Header = () => {
    return (
        <div>
            <div className={styles.container}>
                <img src="logo3.png" className={styles.logo} />
            </div>
            <div className={styles.container}>
                <Button className={styles.button}>
                    <Link to="/">Battle Field</Link>
                </Button>
                <Button className={styles.button}>
                    <Link to="/match-history">Match History</Link>
                </Button>
            </div>
        </div>
    )
}
