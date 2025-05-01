import { RiCheckboxCircleLine } from 'react-icons/ri';
import { CgUndo } from 'react-icons/cg';

const Todo = ({ todo, removeTodo, completeTodo }) => {

  const isMobile = window.matchMedia('(max-width: 768px)').matches;

  return (
    <div className="todo" style={{textDecoration: todo.isCompleted ? "line-through" : ""}}>
      <div className="content">
        <p>{todo.text}</p>
        <p className="category">({todo.category})</p>
      </div>
      <div className='options'>
        {isMobile ? (
          <button className={`${todo.isCompleted ? "complete" : "incomplete"}`} onClick={() => completeTodo(todo.id)}><CgUndo id='undo' /><RiCheckboxCircleLine id='complete' /></button>
        ) : (
          <button className="incomplete" onClick={() => completeTodo(todo.id)}>Completar</button>
        )}
        <button className="remove" onClick={() => removeTodo(todo.id)}>X</button>
      </div>
    </div>
  );
};

export default Todo;
