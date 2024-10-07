import './index.css'

const TodoItem = props => {
  const {todoList, onDeleteTodo} = props
  const {title, id} = todoList
  const onDelete = () => {
    onDeleteTodo(id)
  }
  return (
    <li className="user-card-container">
      <p className="user-name"> {title} </p>
      <button className="delete-button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
