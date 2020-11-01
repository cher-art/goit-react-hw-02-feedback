import React from 'react'
import styled from './Statistics.module.css'
import PropTypes from 'prop-types'

const Statistics = ({ good, neutral, bad, goodState, neutralState, badState }) => {
    let total = good + neutral + bad
    let positiveFeedback = Math.round((good / total) * 100)
    return (
        <section className={styled.container}>
            <h2>Please leave feedback</h2>
            <button className={styled.btn} name="good" onClick={goodState}>Good</button>
            <button className={styled.btn} name="neutral" onClick={neutralState}>Neutral</button>
            <button className={styled.btn} name="bad" onClick={badState}>Bad</button>

            <h2>Statistics</h2>

            {total !== 0
             ? 
            <ul className={styled.list}>
                <li>Good: {good}</li>
                <li>Neutral: {neutral}</li>
                <li>Bad: {bad}</li>
                <li>Total: {total}</li>
                <li>Positive feedback: {positiveFeedback ? positiveFeedback : "0"}%</li>
            </ul>
             : 
            <p>No feedback given</p>}

        </section>
    );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  goodState: PropTypes.func.isRequired,
  neutralState: PropTypes.func.isRequired,
  badState: PropTypes.func.isRequired,
}

export default Statistics