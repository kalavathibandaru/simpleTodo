// Write your code here

import './index.css'

const TodoItem = props => {
  const {eachTodo, deleteTodo} = props
  const {title, id} = eachTodo

  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <li className="each-todo">
      <p className="title">{title}</p>
      <button type="button" className="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
