import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { findTodoById, removeTodo } from '../features/todo/todoSlice';

const Todos = () => {

    const dispatch = useDispatch();

    const todos = useSelector(state => state.todos)

    return (
        <div className='mt-4'>
            <h4>Your Todos:-</h4>
            <table className="table table-dark table-hover">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Todo</th>
                        <th scope="col">Updated At</th>
                        <th scope="col">Action</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map((todo, i) => (
                            <tr key={todo.id}>
                                <th scope="row">{i = i + 1}</th>
                                <td>{todo.text}</td>
                                <td>{todo.date}</td>

                                <td className='d-flex justify-content-start align-items-center gap-3'>
                                    <button
                                        className='btn btn-warning'
                                        onClick={() => dispatch(findTodoById(todo.id))}
                                    >edit</button>
                                    <button
                                        className='btn btn-danger'
                                        onClick={() => dispatch(removeTodo(todo.id))}
                                    >delete</button>

                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Todos