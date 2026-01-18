import { useEffect, useState, useContext, useRef } from "react";
import { dataContext } from "./Home";

 function Counter(){

    const [count, setCount] = useState(0);

    let refCount = useRef(0);
    
    const data = useContext(dataContext);

    function inc(){
        // setCount(count+1);
        // setCount(count => count+1);
        refCount.current += 1
    }

    useEffect(()=>{
        // console.log(count);
        console.log(refCount)
 });

    return (
        <>
        <h2>{data}</h2>
        <h2 className="m-5">{refCount.current}</h2>
        <button className="btn btn-primary mx-5" onClick={inc}>Up</button>
        <button className="btn btn-secondary mx-5" onClick={()=>{setCount(refCount.current)}}>Update</button>
        </>
    );
 }

 export default Counter