
import { ITodo } from '../models/ITodo';

interface ITodosProps{
  todos: ITodo[];
  removeTask(i: number): void;
}

export const Todos = (props:ITodosProps) =>{
    const handleClick = (i: number) => {
        props.removeTask(i);
    }
    
    let html = props.todos.map((task, i)=>{
        return(<div className='todos' key={i}>
        <h2>{task.name}</h2>
        <button onClick={() => {handleClick(i);}}>Klar</button>
        </div>)
    
    });

    
    return (<>
    {html}
    </>)




}
