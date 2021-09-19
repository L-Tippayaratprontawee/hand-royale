import React from 'react'
import { Avatar, Button, Card } from 'antd'
import styles from './PlayerCard.module.scss'
import { UserOutlined } from '@ant-design/icons'

type PlayerCardProps = {
    username: string
    profileUrl?: string
}

export const PlayerCard = ({ username, profileUrl }: PlayerCardProps) => {
    return (
        <>
            <Card className={styles.playerCard}>
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
                    <Button size="large" shape="round" className={styles.button}>
                        PAPER
                    </Button>
                    <Button size="large" shape="round" className={styles.button}>
                        SCISSORS
                    </Button>
                    <Button size="large" shape="round" className={styles.button}>
                        ROCK
                    </Button>
                </div>
            </Card>
        </>
    )
}
