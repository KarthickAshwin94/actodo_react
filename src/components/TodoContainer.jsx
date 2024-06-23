import AddTodoForm from "./AddTodoForm"
import TodoList from "./TodoList"
import {useState} from "react"
const TodoContainer=()=>{
    const [act,setact]=useState([
        {
            id:1,
            name:"Go for a walk"
        },
        {
            id:2,
            name:"Read a book"
        }
    ])
    return(
        <div >
            <div className="flex gap-5 flex-wrap  ">
           <AddTodoForm act={act} setact={setact}/>
           <TodoList act={act} setact={setact}/>
            </div>
           
        </div>
    );
}

export default TodoContainer;