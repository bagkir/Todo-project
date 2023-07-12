import React from 'react'
import styles from './Todo.module.css'
import { RiDeleteBack2Line, RiTodoFill } from 'react-icons/ri'
import { FaCheck } from 'react-icons/fa'

const Todo = ({ todo, id, deleteTodo, toggleTodo }) => {
  return (
    <div
      className={`${styles.todo} ${
        todo.isCompleted ? styles.completedTodo : ''
      }`}
    >
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{todo.text}</div>
      <RiDeleteBack2Line
        className={styles.deleteIcon}
        onClick={() => {
          deleteTodo(id)
        }}
      />
      <FaCheck
        className={styles.checkIcon}
        onClick={() => {
          toggleTodo(todo.id)
        }}
      />
    </div>
  )
}

export default Todo
