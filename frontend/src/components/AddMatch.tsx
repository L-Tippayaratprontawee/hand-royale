import { gql, useMutation } from '@apollo/client'
import React from 'react'

export const AddMatch = () => {
    const ADD_MATCH = gql`
        mutation addMatch($result: String!, $opponentName: String!, $opponentImageURL: String!) {
            addMatch(input: { result: $result, opponentName: $opponentName, opponentImageURL: $opponentImageURL }) {
                id
                result
                opponentName
                opponentImageURL
            }
        }
    `
    // let result: string, opponentName: string, opponentImageURL: string
    const [addMatch] = useMutation(ADD_MATCH)

    return (
        <div>
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    addMatch({
                        variables: {
                            result: 'DRAW',
                            opponentName: 'Eve',
                            opponentImageURL: 'https://avatars.dicebear.com/api/bottts/:eve.svg',
                        },
                    })
                }}
            >
                <button type="submit">Add Match</button>
            </form>
        </div>
    )
}
