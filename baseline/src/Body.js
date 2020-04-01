
import React, { useState } from 'react';
import Todo from './components/Todo';
import './App.css'

function TodoForm({addToDo}){
  const [value,setValue] = useState('')

  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
    addToDo(value);
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type='text'  
        className='input' 
        placeholder="Enter new ToDo"
        value={value} 
        onChange={e => setValue(e.target.value)}
      />
    </form>
  )
}





function Body() {
  const [ todos, setTodos ] = useState([
    { id : 1, text : "take out the trash", isCompleted : false},
    { id : 2, text : "Dinner with family", isCompleted : false},
    { id : 3, text : "go shopping", isCompleted : true},
    { id : 4, text : "wash up", isCompleted : false}
  ]);

  const addToDo = text => {
      const newTodos = [...todos, { text}];
      setTodos(newTodos);
  }

  const competeToDo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true
    setTodos(newTodos);
  }

  const removeToDo = index => {
    console.log("remove index:" + index)
    if (! todos[index].isCompleted )  return;
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
   <div className='app'>
      <div className='todo-list'>
        {todos.map((todo, index)  =>  (
          <Todo key={index} index={index}  todo={todo} completeTodo={competeToDo} removeTodo={removeToDo} />
        ))}
         <TodoForm addToDo={addToDo} />
      </div>
      <div>
       
      </div>
    </div>
  );
}

export default Body;
