import TodoItem from "./TodoItem"
const TodoList=(props)=>{
    
    const act=props.act;
    const setact=props.setact;
    return(
            <div className="bg-[#9D94C2]  border rounded-md p-2 flex-grow">
                <h1 className="text-2xl font-medium">Today's Activity</h1>
                {
                    act.length==0? <p>You havent added anything yet</p>:""
                }
               {
                act.map(function(item,index){
                    return(
                       <TodoItem id={item.id} index={index} item={item} act={act} setact={setact}/>
                    )
                })
               }
                
            </div>
    );
}

export default TodoList;