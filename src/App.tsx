/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useState } from 'react'
import { Button } from 'antd'
import 'antd/dist/antd.css'
import styles from './App.module.css'

function App() {
    const player2Hand = 'ROCK'
    ///const [player1Hand, setPlayer1Hand] = useState('')
    const [matchResult, setMatchResult] = useState('')
    const validateMatch = (player1Hand: string) => {
        if (player1Hand === player2Hand) {
            setMatchResult('DRAW!')
        } else if (player1Hand === 'PAPER') {
            setMatchResult('WIN!')
        } else {
            setMatchResult('LOSE!')
        }
    }
    const size = 'large'
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <h1>{matchResult}</h1>

            <Button type="primary" size={size} className={styles.button} onClick={() => validateMatch('PAPER')}>
                PAPER
            </Button>
            <Button type="primary" size={size} className={styles.button} onClick={() => validateMatch('SCISSORS')}>
                SCISSORS
            </Button>
            <Button type="primary" size={size} className={styles.button} onClick={() => validateMatch('ROCK')}>
                ROCK
            </Button>
        </div>
    )
}

export default App
