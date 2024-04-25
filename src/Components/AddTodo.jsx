import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, updateTodo } from '../features/todo/todoSlice';

const AddTodo = () => {

  const dispatch = useDispatch();

  const [value, setValue] = useState('')
  const isEdit = useSelector(state => state.isEdit);
  const existingTodo = useSelector(state => state.todoText)

  const handleForm = (e) => {
    e.preventDefault();
    if (isEdit) {
      dispatch(updateTodo(value))
    } else {
      dispatch(addTodo(value))
    }
    setValue('')
  }


  useEffect(() => { isEdit ? setValue(existingTodo) : setValue('')  }, [isEdit,existingTodo])
  

  return (
    <form onSubmit={handleForm} className='my-4'>
      <div className="mb-3">
        <label htmlFor="exampleInputTodo1" className="form-label">Add Todo</label>

        <input
          type="Todo"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="form-control"
          id="exampleInputTodo1"
          placeholder='Enter Your Todo Here'
          aria-describedby="TodoHelp"
          autoComplete='off' />

      </div>
      <button type="submit" className="btn btn-primary">
        {
          isEdit ? 'edit' : 'submit'
        }
      </button>
    </form>

  )
}

export default AddTodo