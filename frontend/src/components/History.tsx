import React from 'react'
import { gql, useQuery } from '@apollo/client'
import { Avatar, Table } from 'antd'

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

    const { loading, error, data } = useQuery(MATCH_HISTORY, { fetchPolicy: 'network-only' })
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>

    const columns = [
        {
            title: '',
            dataIndex: 'opponentImageURL',
            key: 'opponentImageURL',
            render: (opponentImageURL: string) => (
                <div>
                    <Avatar
                        shape="circle"
                        size={50}
                        style={{ margin: '5px' }}
                        src="https://scontent.fakl4-1.fna.fbcdn.net/v/t1.6435-9/240873839_4240953529353032_4313338147101475536_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=WYlKF4kcK8EAX_qaRB_&tn=DKCNYcCS9aa7OF0L&_nc_ht=scontent.fakl4-1.fna&oh=fe93d5490cdbedf6a3b6c1b89fa722b5&oe=616BC865"
                    />
                    <b>vs</b>
                    <Avatar shape="circle" size={50} src={opponentImageURL} style={{ margin: '5px' }} />
                </div>
            ),
        },
        {
            title: 'Result',
            dataIndex: 'result',
            key: 'result',
        },
        {
            title: 'Against',
            dataIndex: 'opponentName',
            key: 'opponentName',
        },
    ]
    return <Table columns={columns} dataSource={data.matches} size="small" />
}
