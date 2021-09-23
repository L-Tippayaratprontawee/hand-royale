import React from 'react'
import { gql, useQuery } from '@apollo/client'
// import styles from '../App.module.scss'

export const MatchHistory = () => {
    const MATCH_HISTORY = gql`
        query GetMatchHistory {
            matches {
                player {
                    name
                }
            }
        }
    `
    const { loading, error, data } = useQuery(MATCH_HISTORY)
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>

    return data.rates.map(({ currency, rate }: { currency: string; rate: number }) => (
        <div key={currency}>
            <p>
                {currency}: {rate}
            </p>
        </div>
    ))
}
// return (
//     <div className={styles.container}>
//         <h1> This is your match history </h1>
//     </div>
// )
