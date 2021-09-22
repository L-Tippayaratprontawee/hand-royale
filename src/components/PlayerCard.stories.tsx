import React from 'react'
import 'antd/dist/antd.css'
import { Meta } from '@storybook/react'
import { PlayerCard } from './PlayerCard'

export default {
    component: PlayerCard,
    title: 'Component/PlayerCard',
} as Meta

export const Basic: React.VFC<{}> = () => (
    <PlayerCard
        username="Player 1"
        profileUrl="https://avatars.dicebear.com/api/bottts/:paper.svg"
        validateMatch={() => console.log()}
    ></PlayerCard>
)
export const Loading: React.VFC<{}> = () => (
    <PlayerCard
        username="Player 1"
        profileUrl="https://avatars.dicebear.com/api/bottts/:scissors.svg"
        validateMatch={() => console.log()}
        isLoading={true}
    ></PlayerCard>
)
export const Score: React.VFC<{}> = () => (
    <PlayerCard
        username="Player 1"
        profileUrl="https://avatars.dicebear.com/api/bottts/:rock.svg"
        validateMatch={() => console.log()}
        score={3}
    ></PlayerCard>
)
