const TodoItem=(props)=>{
    const act=props.act;
    const setact=props.setact;
    const handleremove=(props1)=>{
      var temparr=act.filter(function(items){
        if(items.id===props1)
            {
                return false;
            }
            else{
                return true;
            }
      })
      setact(temparr);
      
    }
    return(
        <div className="flex  justify-between">
         <p>{props.index+1}.{props.item.name}</p>
         <button className="bg-red-700 border rounded-md w-12 m-1  text-white text-center text-xs" onClick={()=>{
            handleremove(props.id);
         }}>Delete</button>
        </div>
    );
}

export default TodoItem;