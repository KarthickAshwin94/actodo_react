import {Link} from "react-router-dom"
import { useNavigate } from "react-router-dom";
import {useState} from "react"
const Login=(props)=>{
    const navigate=useNavigate();
    const [entereduname,setentereduname]=useState("");
    const [enteredupass,setenteredupass]=useState("");
    const [ruser,setruser]=useState(true);
   const users=props.users;
    const handleuname=(event)=>{
        setentereduname(event.target.value);
    }
    const handleupass=(event)=>{
        setenteredupass(event.target.value);
    }
    const checkuser=()=>{
        var userfound=false;
       console.log(users);
        users.forEach(function(items){
            if((items.username==entereduname)&&(items.password==enteredupass))
                {
                    userfound=true;
                    navigate("/landing", {
                        state:{
                         user:entereduname
                        }
                    });
                }
            
        })
        if(userfound==false){
            setruser(false);
        }
    }
    
    return(
        <div className="bg-black p-10">
           <div className="bg-white p-8 border rounded-md">
            <div>
                <h1 className="text-2xl font-bold">Login</h1>
            </div>
            {
                ruser?<h1>I help you manage your activities</h1>:<h1 className="text-red-500">Sign  Up first</h1>
            }
            <div>
                <input value={entereduname} type="text" placeholder="Username" className=" my-2 border-2 border-black rounded-md" onChange={handleuname} />
                <br />
                <input value={enteredupass}type="passowword" placeholder="Password" className="border-2 my-2 border-black rounded-md " onChange={handleupass}/>
                <br />
            </div>
            <div>
                <button className="px-2 py-1 bg-[#8272D8] border rounded-md " onClick={checkuser}>Login</button>
                <br />
            </div>
            <div>
                <p>Don't have an account? <Link to={"/signup"} className="underline">Sign Up</Link></p>
            </div>
           </div>
        </div>
    );
}
export default Login;