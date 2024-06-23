import {useState} from "react";
const AddTodoForm=(props)=>{

    const act=props.act;
    const setact=props.setact;
    const [newact,setnewact]=useState("");
    const handleChange=(event)=>{
        setnewact(event.target.value)
    }
    const handleadd=()=>{
        setact([...act,{id:act.length+1,name:newact}]);
        setnewact("");
    }

    return(
        <div>
             <div className="flex flex-col gap-3 ">
                <h1 className="text-xl">Manage Activities</h1>
               <div >
               <input type="text" className="border border-black rounded-sm bg-transparent p-1" onChange={handleChange} value={newact}/>
                <button className="border rounded-sm border-black bg-black text-white p-1 " onClick={handleadd}>Add</button>
               </div>
            </div>
        </div>
    );
}

export default AddTodoForm;