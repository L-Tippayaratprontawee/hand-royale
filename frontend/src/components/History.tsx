import React from 'react'
import { gql, useQuery } from '@apollo/client'
import { Avatar } from 'antd'

export const MatchHistory = () => {
    const MATCH_HISTORY = gql`
        query GetMatchHistory {
            matches {
                id
                result
                player {
                    name
                    imageURL
                }
            }
        }
    `
    type MatchHistoryProps = {
        id: number
        result: string
        player: {
            name: string
            imageURL: string
        }
    }
    const { loading, error, data } = useQuery(MATCH_HISTORY)
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>

    return data.matches.map(({ id, result, player }: MatchHistoryProps) => (
        <div key={id}>
            <p>
                <Avatar shape="circle" size={50} src={player.imageURL} />
                You {result} against {player.name}
            </p>
        </div>
    ))

    // const columns = [
    //     {
    //         title: 'Result',
    //         dataIndex: 'result',
    //         key: 'result',
    //     },
    // ]

    // return <Table columns={columns} dataSource={data.matches} />
}
