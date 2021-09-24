/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useEffect, useState } from 'react'
import { Layout, Modal, Spin } from 'antd'
import 'antd/dist/antd.css'
import styles from './App.module.scss'
import { Content } from 'antd/lib/layout/layout'
import { PlayerCard } from './components/PlayerCard'
import { Route, Switch } from 'react-router-dom'
import { MatchHistory } from './components/History'
import { Header } from './components/Header'
import { AddMatch } from './components/AddMatch'

function App() {
    const handSelection = ['PAPER', 'SCISSORS', 'ROCK']
    const [isPlayer2Thinking, setIsPlayer2Thinking] = useState(false)
    const [isDataLoaded, setIsDataLoaded] = useState(true)
    const [isRefresh, setIsRefresh] = useState<boolean>(false)
    const [score, setScore] = useState(0)
    //const [, setAddMatch] = useState(false)

    const [randomPlayer, setRandomPlayer] = useState<RandomPlayer>()
    type RandomPlayer = {
        name: {
            first: string
            last: string
        }
        picture: {
            large: string
        }
    }
    useEffect(() => {
        fetch('https://randomuser.me/api/')
            .then((res) => res.json())
            .then(
                (json) => {
                    const randomPlayer: RandomPlayer = json.results[0]
                    setRandomPlayer(randomPlayer)
                    setIsDataLoaded(false)
                },
                (error) => {
                    console.log(error)
                },
            )
    }, [isRefresh])

    const validateMatch = async (player1Hand: string) => {
        setIsPlayer2Thinking(true)
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
        setIsPlayer2Thinking(false)
    }

    const displayMatchResult = (message: string, result: string) => {
        if (result == 'WIN') {
            Modal.success({
                content: message,
                centered: true,
                onOk: () => setIsRefresh(!isRefresh),
            })
            setScore((prevScore) => prevScore + 1)
        } else if (result == 'LOSE') {
            Modal.error({
                content: message,
                centered: true,
                onOk: () => setIsRefresh(!isRefresh),
            })
            setScore(0)
        } else {
            Modal.warning({
                content: message,
                centered: true,
                onOk: () => setIsRefresh(!isRefresh),
            })
        }
    }

    return (
        <div>
            <Layout>
                <Content className={styles.content}>
                    <Header></Header>
                    <Switch>
                        <Route exact path="/">
                            <PlayerCard
                                username={`${randomPlayer?.name.first} ${randomPlayer?.name.last}`}
                                profileUrl={randomPlayer?.picture.large}
                                validateMatch={validateMatch}
                                isLoading={isDataLoaded}
                                buttonDisable={true}
                            />
                            {isPlayer2Thinking || isDataLoaded ? (
                                <Spin className={styles.container} size="large" />
                            ) : (
                                <h1 style={{ textAlign: 'center', fontFamily: 'monospace' }}>
                                    L vs {randomPlayer?.name.first}
                                </h1>
                            )}
                            <PlayerCard
                                username="L"
                                profileUrl="https://scontent.fakl4-1.fna.fbcdn.net/v/t1.6435-9/240873839_4240953529353032_4313338147101475536_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=WYlKF4kcK8EAX_qaRB_&tn=DKCNYcCS9aa7OF0L&_nc_ht=scontent.fakl4-1.fna&oh=fe93d5490cdbedf6a3b6c1b89fa722b5&oe=616BC865"
                                validateMatch={validateMatch}
                                score={score}
                            />
                            <AddMatch />
                        </Route>
                        <Route path="/match-history">
                            <MatchHistory />
                        </Route>
                    </Switch>
                </Content>
            </Layout>
        </div>
    )
}

export default App
