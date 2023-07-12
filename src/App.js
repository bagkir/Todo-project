import React from 'react'
import { useState } from 'react'
import './App.css'
import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'
import { v4 as uuidv4 } from 'uuid'
import TodosActions from './components/Todos/TodosActions'

function App() {
  const [todos, setTodos] = useState([])

  const addtodoHandler = (text) => {
    const newTodo = {
      text: text,
      isCompleted: false,
      id: uuidv4(),
    }
    console.log(newTodo)
    setTodos([...todos, newTodo])
  }

  const resetTodoHandler = () => {
    setTodos([])
  }

  const deleteCompletedHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted))
  }

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const toggleTodoHander = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      })
    )
  }

  const completedTodosCount = todos.filter((elem) => elem.isCompleted).length

  return (
    <div className="App">
      <h1 style={{ color: 'white' }}>Todo App</h1>
      <TodoForm addtodo={addtodoHandler} />
      {!!todos.length && (
        <TodosActions
          deleteCompleted={deleteCompletedHandler}
          resetTodo={resetTodoHandler}
          todos={todos}
          completedTodosExist={!!completedTodosCount}
        />
      )}

      <TodoList
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHander}
        todos={todos}
      />
      {completedTodosCount > 0 && (
        <h3>{`You have completed ${completedTodosCount} ${
          completedTodosCount > 1 ? 'todos' : 'todo'
        }`}</h3>
      )}
    </div>
  )
}

export default App
