import React from 'react'
import { Avatar, Badge, Button, Card } from 'antd'
import styles from './PlayerCard.module.scss'
import { UserOutlined } from '@ant-design/icons'
import classnames from 'classnames'

type PlayerCardProps = {
    username?: string
    profileUrl?: string
    validateMatch: (player1Hand: string) => void
    isLoading?: boolean
    buttonDisable?: boolean
    score?: number
}

export const PlayerCard = ({
    username,
    profileUrl,
    validateMatch,
    isLoading,
    buttonDisable,
    score,
}: PlayerCardProps) => {
    return (
        <>
            <Card className={styles.playerCard} loading={isLoading}>
                <div className={classnames(styles.container, styles.avatar)}>
                    <Badge count={score} offset={[-15, 10]} color="green">
                        <Avatar shape="circle" size={100} icon={<UserOutlined />} src={profileUrl} />
                    </Badge>
                </div>
                <h1 style={{ textAlign: 'center' }}>{username}</h1>
                <div className={styles.container}>
                    <Button
                        disabled={buttonDisable}
                        size="large"
                        shape="round"
                        className={styles.button}
                        onClick={() => validateMatch('PAPER')}
                    >
                        PAPER
                    </Button>
                    <Button
                        disabled={buttonDisable}
                        size="large"
                        shape="round"
                        className={styles.button}
                        onClick={() => validateMatch('SCISSORS')}
                    >
                        SCISSORS
                    </Button>
                    <Button
                        disabled={buttonDisable}
                        size="large"
                        shape="round"
                        className={styles.button}
                        onClick={() => validateMatch('ROCK')}
                    >
                        ROCK
                    </Button>
                </div>
            </Card>
        </>
    )
}
