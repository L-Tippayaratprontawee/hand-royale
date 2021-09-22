import React from 'react'
import { gql, useQuery } from '@apollo/client'
// import styles from '../App.module.scss'

export const MatchHistory = () => {
    const EXCHANGE_RATES = gql`
        query GetExchangeRates {
            rates(currency: "USD") {
                currency
                rate
            }
        }
    `
    const { loading, error, data } = useQuery(EXCHANGE_RATES)
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
