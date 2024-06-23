import Header from "../components/Header"
import Card from "../components/Card"
import TodoContainer from "../components/TodoContainer"
import {useLocation, useNavigate} from "react-router-dom"
const Landing=()=>{
    const data=useLocation();
    return (
        <div className="bg-black p-16">
         <div className="bg-[#EFEFEF] p-10 border rounded-md ">
          {/* Header */}
          <Header name={data.state.user}></Header>
          {/* Card */}
          <div className="flex justify-between gap-7 my-5 flex-wrap">
          <Card bgcolor={"#8272DA "} title={"23"} subtitle={"Chennai"}/>
          <Card bgcolor={"#FD6663"} title={"21-06-2024"} subtitle={"12:04:08"}/>
          <Card bgcolor={"#FCA201"} title={"Built Using"} subtitle={"React"}/>
          </div>
          {/* Todo Container */}
          <TodoContainer/>
    
         
         
         </div>
        </div>
      );
    }


export default Landing;