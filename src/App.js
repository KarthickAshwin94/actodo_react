// import Header from "./components/Header"
// import Card from "./components/Card"
// import TodoContainer from "./components/TodoContainer"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Landing from "./pages/Landing"
import { BrowserRouter,Link,Route,Routes } from "react-router-dom"
import {useState} from "react"
function App() {
  const[users,setusers]=useState(
    [
        {
            username:"Karthick Ashwin",
            password:"Ashwin@1234"
        }
    ]
)
  return (
    <div>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Login users={users} setusers={setusers}/>}></Route>
    <Route path="/signup" element={<Signup users={users} setusers={setusers}/>}></Route>
    <Route path="/landing" element={<Landing />}></Route>
   </Routes>
   </BrowserRouter>
    </div>
    
  );
}

export default App;
