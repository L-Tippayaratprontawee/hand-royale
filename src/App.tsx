/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useState } from 'react'
import { Avatar, Button } from 'antd'
import 'antd/dist/antd.css'
import styles from './App.module.css'
import { UserOutlined } from '@ant-design/icons'

function App() {
    const handSelection = ['PAPER', 'SCISSORS', 'ROCK']

    ///const player2Hand = 'PAPER'
    ///const [player1Hand, setPlayer1Hand] = useState('')
    const [matchResult, setMatchResult] = useState('')
    const validateMatch = (player1Hand: string) => {
        const randomIndex = Math.floor(Math.random() * handSelection.length)
        const player2Hand = handSelection[randomIndex]
        console.log({ player2Hand })
        if (player1Hand === player2Hand) {
            setMatchResult('You both choose ' + player1Hand + ". IT'S A DRAW")
        } else if (player1Hand === 'PAPER') {
            if (player2Hand === 'ROCK') {
                setMatchResult('Paper wraps Rock. YOU WIN!')
            } else {
                setMatchResult('Scissors cut Paper. YOU LOSE!')
            }
        } else if (player1Hand === 'SCISSORS') {
            if (player2Hand === 'PAPER') {
                setMatchResult('Scissors cut Paper. YOU WIN!')
            } else {
                setMatchResult('Rock destroys Scissors. YOU LOSE!')
            }
        } else if (player1Hand === 'ROCK') {
            if (player2Hand === 'SCISSORS') {
                setMatchResult('Rock destroys Scissors. YOU WIN!')
            } else {
                setMatchResult('Paper wraps Rock. YOU LOSE!')
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

            <div>
                <Avatar
                    shape="circle"
                    size={64}
                    icon={<UserOutlined />}
                    src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fc26be893-1c94-48a3-b3e1-6e2c7409f07e%2FIMG_8825.jpg?table=block&id=6da5bea8-5fac-4bca-87ec-1ee329fe691c&spaceId=9c5958aa-96c4-4ffb-853d-fd1c1b2a4a4f&width=250&userId=358dff24-baa1-4893-8192-e15f1f93689c&cache=v2"
                />
                <p>NAME</p>
            </div>

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
