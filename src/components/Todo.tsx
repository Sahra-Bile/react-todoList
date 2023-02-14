import { useState } from 'react'
import { ITodo } from '../models/ITodo'
import { AddTodo } from './AddTodo';
import { Todos } from './Todos';

 export const Todo = () =>{

 const [todos,setTodos] = useState <ITodo[]>([]);

 const addTask = (task: string) => {
    setTodos ([...todos, {name:task,done:false}]);
 };

 const  deleteTask =(i:number)=>{
  
    let p = [...todos];
    p.splice(i, 1);

    setTodos(p);
 
   
 
 };
 
  return(<div className='container'>
   <AddTodo addTask ={addTask}/>
   <Todos todos = {todos} removeTask ={deleteTask}/>
  </div>)
}
