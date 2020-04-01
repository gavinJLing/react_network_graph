
import React from 'react';
import '../App.css'




function Todo( { todo,  index, completeTodo, removeTodo}) {
  return (
      <div style={{ textDecoration: todo.isCompleted ? ' line-through': '',  color: todo.isCompleted ? 'grey': ''}} className='todo' >{index}: {todo.id} - {todo.text}
        <div>
          <button className='complete-btn' onClick={ () => completeTodo(index)} >Compete</button>
          <button className='complete-btn' onClick={ () => removeTodo(index)} disabled={!todo.isCompleted} >Remove</button>
          
            </div>
      </div>
  );
}




export default Todo;
 