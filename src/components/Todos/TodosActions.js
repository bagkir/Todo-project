import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'
import React from 'react'
import Button from '../UI/Button'
import styles from './TodosActions.module.css'

const TodosActions = ({ deleteCompleted, resetTodo, completedTodosExist }) => {
  console.log(completedTodosExist)
  return (
    <div className={styles.todosActionsContainer}>
      <Button onClick={resetTodo} title="Reset Todos">
        <RiRefreshLine />
      </Button>
      <Button
        onClick={deleteCompleted}
        disabled={!completedTodosExist}
        title="Clear Completed Todos"
      >
        <RiDeleteBin2Line />
      </Button>
    </div>
  )
}

export default TodosActions
