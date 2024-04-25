import React from 'react'
import AddTodo from './AddTodo'
import Todos from './Todos'

const Main = () => {
  return (
    <div className='container'>
        <AddTodo/>
        <Todos/>
    </div>
  )
}

export default Main