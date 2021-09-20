/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useState } from 'react'
import { Layout, Modal, Spin } from 'antd'
import 'antd/dist/antd.css'
import styles from './App.module.scss'
import { Content } from 'antd/lib/layout/layout'
import { PlayerCard } from './components/PlayerCard'

function App() {
    const handSelection = ['PAPER', 'SCISSORS', 'ROCK']
    const [isLoading, setIsLoading] = useState(false)

    const validateMatch = async (player1Hand: string) => {
        setIsLoading(true)
        await new Promise((r) => setTimeout(r, 1000))
        const player2Hand = handSelection[Math.floor(Math.random() * handSelection.length)]
        if (player1Hand === player2Hand) {
            displayMatchResult('You both choose ' + player1Hand + ". IT'S A DRAW!", 'DRAW')
        } else if (player1Hand === 'PAPER') {
            if (player2Hand === 'ROCK') {
                displayMatchResult('Paper wraps Rock. YOU WIN!', 'WIN')
            } else {
                displayMatchResult('Scissors cuts Paper. YOU LOSE!', 'LOSE')
            }
        } else if (player1Hand === 'SCISSORS') {
            if (player2Hand === 'PAPER') {
                displayMatchResult('Scissors cuts Paper. YOU WIN!', 'WIN')
            } else {
                displayMatchResult('Rock destroys Scissors. YOU LOSE!', 'LOSE')
            }
        } else if (player1Hand === 'ROCK') {
            if (player2Hand === 'SCISSORS') {
                displayMatchResult('Rock destroys Scissors. YOU WIN!', 'WIN')
            } else {
                displayMatchResult('Paper wraps Rock. YOU LOSE!', 'LOSE')
            }
        }
        setIsLoading(false)
    }

    const displayMatchResult = (message: string, result: string) => {
        if (result == 'WIN') {
            Modal.success({
                content: message,
                centered: true,
            })
        } else if (result == 'LOSE') {
            Modal.error({
                content: message,
                centered: true,
            })
        } else {
            Modal.warning({
                content: message,
                centered: true,
            })
        }
    }
    return (
        <div>
            <Layout>
                <Content className={styles.content}>
                    <PlayerCard username="Paul" validateMatch={validateMatch} />
                    {isLoading ? (
                        <Spin className={styles.container} size="large" />
                    ) : (
                        <h1 style={{ textAlign: 'center' }}> L vs Paul</h1>
                    )}
                    <PlayerCard
                        username="L"
                        profileUrl="https://scontent.fakl4-1.fna.fbcdn.net/v/t1.6435-9/240873839_4240953529353032_4313338147101475536_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=WYlKF4kcK8EAX_qaRB_&tn=DKCNYcCS9aa7OF0L&_nc_ht=scontent.fakl4-1.fna&oh=fe93d5490cdbedf6a3b6c1b89fa722b5&oe=616BC865"
                        validateMatch={validateMatch}
                    />
                </Content>
            </Layout>
        </div>
    )
}

export default App
