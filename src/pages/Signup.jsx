import {useState} from "react";
import { Link,BrowserRouter,Route,Routes  } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Signup=(props)=>{
    const navigate=useNavigate();
    const users=props.users;
    const setusers=props.setusers;
    const[uname,setuname]=useState("");
    const[upassword,setupassword]=useState("");
    const handleuname=(event)=>{
        setuname(event.target.value);
    }
    const handleupassword=(event)=>{
        setupassword(event.target.value);
    }
    const handlesubmit=()=>{
        setusers([...users,{
               username: uname,
               password:upassword
            }
        ])
        navigate("/");
    }
    return(
        <div className="bg-black p-10 ">
            <div className="bg-white p-8 border rounded-md ">
                <div className="Info">
                <h1 className="font-bold text-xl">Hey Hi</h1>
                <p>Sign Up here</p>
                </div>
                <div className="flex-col gap-2">
                    <input type="text" placeholder="Username" className="my-1 border-2 border-black rounded-md" value={uname} onChange={handleuname} />
                    <br />
                    <input type="password" placeholder="Password" className="border-2 border-black rounded-md my-2" value={upassword} onChange={handleupassword}/>
                    <br />
                    <input type="password" placeholder="Confirm Password" className="border-2 border-black rounded-md my-2"/>
                    <br />
                    <button className="px-2 py-1 bg-[#D08501] text-sm border rounded-md" onClick={handlesubmit}>Signup</button>
                </div>
                <div>
                  <p>Already have an account ? <Link to={"/"} className="underline">Login</Link></p>
                </div>

            </div>
        </div>
    );
}
export default Signup;