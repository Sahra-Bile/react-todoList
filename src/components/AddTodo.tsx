import { ChangeEvent, FormEvent, useState } from 'react';


 interface IAddTodosProps{
  addTask(task:string):void;  
 }


export const AddTodo = (props:IAddTodosProps) =>{
  const [task,setTask] = useState<string>("");
   
   const changeHandler = (e:ChangeEvent<HTMLInputElement>) =>{
    setTask(e.target.value);
   }
    const handleSubmit = (e:FormEvent) =>{
     e.preventDefault();
     props.addTask(task);
    }
   return (
    <form onSubmit={handleSubmit}>
     <input
        type="text"
        name="name"
        value={task}
        onChange={changeHandler}
        />
        <button type="submit">lägg till</button>
    </form>
)
 }

