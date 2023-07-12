import React from 'react'
import Todo from './Todo'
import styles from './TodoList.module.css'

const TodoList = ({ todos, deleteTodo, toggleTodo }) => {
  return (
    <div className={styles.todoListContainer}>
      {todos.length ? (
        todos.map((todo) => (
          <Todo
            deleteTodo={deleteTodo}
            key={todo.id}
            id={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
          />
        ))
      ) : (
        <h2>Todo list is empty</h2>
      )}
    </div>
  )
}

export default TodoList
