import React from 'react'
import ReactDOM from 'react-dom'

const Header =(props)=>{
    return(
        <>
            <h1>The course name is {props.name}</h1>
        </>
    )
}

const Part =(props)=> {
    return(
        <>
           <p> This is {props.name} and it has {props.exercises} numbers of exercise </p>
        </>
    )
}

const Content =(props)=>{
  console.log(props.parts[0].name)
  console.log(props.parts[0].exercises)
    return(
        <>
           <Part name={props.parts[0].name} exercises={props.parts[0].exercises}/>
           <Part name={props.parts[1].name} exercises={props.parts[1].exercises}/>
           <Part name={props.parts[2].name} exercises={props.parts[2].exercises}/>

            
        </>
    )
}

const Total =(props)=>{
    return(
        <>
            <p>The total number of Exercise is: {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
        </>
    )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
      
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))