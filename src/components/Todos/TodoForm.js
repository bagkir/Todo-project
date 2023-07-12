import React, { useState } from 'react'
import Style from './TodoForm.module.css'
import Button from '../UI/Button'

const TodoForm = ({ addtodo }) => {
  const [inputValue, setInputValue] = useState('')

  function handleInputChange(e) {
    setInputValue([e.target.value])
  }

  function handleSubmit(event) {
    event.preventDefault()
    addtodo(inputValue)
    setInputValue('') // очистить значение после отправки
  }
  return (
    <div className={Style.todoFormContainer}>
      <form className={Style.form} onSubmit={handleSubmit}>
        <input
          name="todo"
          placeholder="Enter new todo"
          className={Style.input}
          value={inputValue}
          onChange={(e) => {
            handleInputChange(e)
          }}
        />
        <Button type="submit" title="submit" className={Style.button}>
          Submit
        </Button>
      </form>
    </div>
  )
}

export default TodoForm
