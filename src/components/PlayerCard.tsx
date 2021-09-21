import React from 'react'
import { Avatar, Button, Card } from 'antd'
import styles from './PlayerCard.module.scss'
import { UserOutlined } from '@ant-design/icons'

type PlayerCardProps = {
    username?: string
    profileUrl?: string
    validateMatch: (player1Hand: string) => void
    isLoading?: boolean
}

export const PlayerCard = ({ username, profileUrl, validateMatch, isLoading = false }: PlayerCardProps) => {
    return (
        <>
            <Card className={styles.playerCard} loading={isLoading}>
                <div className={styles.container}>
                    <Avatar
                        shape="circle"
                        size={100}
                        icon={<UserOutlined />}
                        className={styles.avatar}
                        src={profileUrl}
                    />
                </div>
                <h1 style={{ textAlign: 'center' }}>{username}</h1>
                <div className={styles.container}>
                    <Button size="large" shape="round" className={styles.button} onClick={() => validateMatch('PAPER')}>
                        PAPER
                    </Button>
                    <Button
                        size="large"
                        shape="round"
                        className={styles.button}
                        onClick={() => validateMatch('SCISSORS')}
                    >
                        SCISSORS
                    </Button>
                    <Button size="large" shape="round" className={styles.button} onClick={() => validateMatch('ROCK')}>
                        ROCK
                    </Button>
                </div>
            </Card>
        </>
    )
}
