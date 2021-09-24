import React from 'react'
import { gql, useQuery } from '@apollo/client'
import { Avatar } from 'antd'

export const MatchHistory = () => {
    const MATCH_HISTORY = gql`
        query GetMatchHistory {
            matches {
                id
                result
                opponentName
                opponentImageURL
            }
        }
    `
    type MatchHistoryProps = {
        id: number
        result: string
        opponentName: string
        opponentImageURL: string
    }

    const { loading, error, data } = useQuery(MATCH_HISTORY)
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>

    return data.matches.map(({ id, result, opponentName, opponentImageURL }: MatchHistoryProps) => (
        <div key={id}>
            <p>
                <Avatar shape="circle" size={50} src={opponentImageURL} />
                You {result} against {opponentName}
            </p>
        </div>
    ))
}

// const columns = [
//     {
//         title: 'Result',
//         dataIndex: 'result',
//         key: 'result',
//     },
// ]

// return <Table columns={columns} dataSource={data.matches} />
