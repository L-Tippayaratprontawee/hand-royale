/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useState } from 'react'
import { Avatar, Button, Card, Layout } from 'antd'
import 'antd/dist/antd.css'
import styles from './App.module.scss'
import { UserOutlined } from '@ant-design/icons'
import { Content, Header } from 'antd/lib/layout/layout'
import classnames from 'classnames'

function App() {
    const size = 'large'
    const handSelection = ['PAPER', 'SCISSORS', 'ROCK']
    const [matchResult, setMatchResult] = useState('')
    const validateMatch = (player1Hand: string) => {
        const player2Hand = handSelection[Math.floor(Math.random() * handSelection.length)]
        console.log({ player2Hand })
        if (player1Hand === player2Hand) {
            setMatchResult('You both choose ' + player1Hand + ". IT'S A DRAW!")
        } else if (player1Hand === 'PAPER') {
            if (player2Hand === 'ROCK') {
                setMatchResult('Paper wraps Rock. YOU WIN!')
            } else {
                setMatchResult('Scissors cuts Paper. YOU LOSE!')
            }
        } else if (player1Hand === 'SCISSORS') {
            if (player2Hand === 'PAPER') {
                setMatchResult('Scissors cuts Paper. YOU WIN!')
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

    return (
        <div>
            <Layout>
                <Header>Header</Header>
                <Content className={styles.content}>
                    <Card className={styles.playerCard}>
                        <div className={styles.container}>
                            <Avatar
                                shape="circle"
                                size={80}
                                icon={<UserOutlined />}
                                className={styles.avatar}
                                src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fc26be893-1c94-48a3-b3e1-6e2c7409f07e%2FIMG_8825.jpg?table=block&id=6da5bea8-5fac-4bca-87ec-1ee329fe691c&spaceId=9c5958aa-96c4-4ffb-853d-fd1c1b2a4a4f&width=250&userId=358dff24-baa1-4893-8192-e15f1f93689c&cache=v2"
                            />
                        </div>
                        <h1 style={{ textAlign: 'center' }}>NAME</h1>
                        <div className={styles.container}>
                            <Button
                                size={size}
                                shape="round"
                                className={styles.button}
                                onClick={() => validateMatch('PAPER')}
                            >
                                PAPER
                            </Button>
                            <Button
                                size={size}
                                shape="round"
                                className={styles.button}
                                onClick={() => validateMatch('SCISSORS')}
                            >
                                SCISSORS
                            </Button>
                            <Button
                                size={size}
                                shape="round"
                                className={styles.button}
                                onClick={() => validateMatch('ROCK')}
                            >
                                ROCK
                            </Button>
                        </div>
                    </Card>
                    <Card className={styles.playerCard}>
                        <div className={styles.container}>
                            <Avatar
                                shape="circle"
                                size={80}
                                icon={<UserOutlined />}
                                className={styles.avatar}
                                src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fc26be893-1c94-48a3-b3e1-6e2c7409f07e%2FIMG_8825.jpg?table=block&id=6da5bea8-5fac-4bca-87ec-1ee329fe691c&spaceId=9c5958aa-96c4-4ffb-853d-fd1c1b2a4a4f&width=250&userId=358dff24-baa1-4893-8192-e15f1f93689c&cache=v2"
                            />
                        </div>
                    </Card>
                </Content>
            </Layout>
        </div>
    )
}

export default App
