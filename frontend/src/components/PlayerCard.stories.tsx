import React from 'react'
import 'antd/dist/antd.css'
import { Meta, Story } from '@storybook/react'
import { PlayerCard } from './PlayerCard'
import { PlayerCardProps } from './PlayerCard'

export default {
    component: PlayerCard,
    title: 'Component/PlayerCard',
} as Meta

const Template: Story<PlayerCardProps> = (args) => <PlayerCard {...args}></PlayerCard>
export const Basic = Template.bind({})
Basic.args = {
    username: 'Player 1',
    profileUrl: 'https://avatars.dicebear.com/api/bottts/:paper.svg',
    buttonDisable: false,
    isLoading: false,
    score: 1,
}

export const Default: React.VFC<{}> = () => (
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
