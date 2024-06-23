const Card=(props)=>{
    return(
       <div style={{backgroundColor:props.bgcolor}} className="px-10 py-10 border rounded-md flex-grow text-center">
        <h1 className="text-xl font-medium">{props.title}</h1>
        <p>{props.subtitle}</p>
       </div>
    );
}

export default Card;


{/* <div className="bg-[#8272DA] px-10 py-10 border rounded-md flex-grow">
<h1 className="font-medium text-xl">23</h1>
<h1>Chennai</h1>
</div>
<div className="bg-[#FD6663] px-10 py-10 border rounded-md flex-grow">
<h1 className="font-medium text-xl">21.6.24</h1>
<h1>12:04:08</h1>
</div>
<div className="bg-[#FCA201] px-10 py-10 border rounded-md flex-grow">
<h1 className="font-medium text-xl">Built Using</h1>
<h1>React</h1>
</div> */}