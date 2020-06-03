import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button =({onClick, text})=>(
    <button onClick={onClick}>
        {text}
    </button>
)

const StatsOfStatistics =({good, neutral, bad})=>{
    let first = good  + bad + neutral
    let average = 0
    let positive  =0
  
    if(good > 0){
       average = ((good * 1) + (bad * -1))/ first
       positive = (100 * good)/ first
    }
    return(
        <>
          <h2>Statistics</h2>
          {first ? (
            <table>
              <tbody>
              <Statistics text='good' stat={good} />
              <br />
              <Statistics text='bad' stat={bad} />               
              <br />
              <Statistics text='neutral' stat={neutral} />
              <br />
              <Statistics text='all' stat={first} />
              <br />
              <Statistics text='average' stat={average} />
              <br />
              <Statistics text='positive' stat={positive} />
              </tbody>
            </table>
          ):(
            <p>No feedback yet</p>
          )}
        </>
      
    )
}

const Statistics = ({text, stat}) => (
      <>
        <tr>
          <td>{text}</td>
          <td>{stat}</td>
        </tr>
      </>
)
 





const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] =useState(0)
  

 
  

  const handleBad =()=>(
      setBad(bad + 1),
      setAll(all + 1)
  )

  const handleGood =()=>(
    setGood(good + 1),
    setAll(all + 1)
)

const handleNeutral =()=>(
    setNeutral(neutral + 1),
    setAll(all + 1)
)





  return (
    <div>
      <h2>give feedback</h2>
       
        <Button onClick={handleGood} 
        text='good' />
        <Button onClick={handleNeutral} 
        text='neutral' />
        <Button onClick={handleBad} 
        text='bad' />
        <StatsOfStatistics good={good} bad={bad} neutral={neutral} />

    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)