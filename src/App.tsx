/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useState } from 'react'
import { Button } from 'antd'
import 'antd/dist/antd.css'
import styles from './App.module.css'

function App() {
    const handSelection = ['PAPER', 'SCISSORS', 'ROCK']

    ///const player2Hand = 'PAPER'
    ///const [player1Hand, setPlayer1Hand] = useState('')
    const [matchResult, setMatchResult] = useState('')
    const validateMatch = (player1Hand: string) => {
        const randomIndex = Math.floor(Math.random() * handSelection.length)
        const player2Hand = handSelection[randomIndex]
        ///console.log({ player2Hand })
        if (player1Hand === player2Hand) {
            setMatchResult("It's a tie!")
        } else if (player1Hand === 'PAPER') {
            if (player2Hand === 'ROCK') {
                setMatchResult('YOU WIN!')
            } else {
                setMatchResult('YOU LOSE!')
            }
        } else if (player1Hand === 'SCISSORS') {
            if (player2Hand === 'PAPER') {
                setMatchResult('YOU WIN!')
            } else {
                setMatchResult('YOU LOSE!')
            }
        } else if (player1Hand === 'ROCK') {
            if (player2Hand === 'SCISSORS') {
                setMatchResult('YOU WIN!')
            } else {
                setMatchResult('YOU LOSE!')
            }
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
