import React, { useEffect, useState } from 'react';
function UseEffectMethod(){
    //use rffect is similar to did mount in class life cycle
    const [time,settime]=useState()
    useEffect(()=>{
        console.log("Component is created")
    },[])//we can give dependency array anf useeffect runs every time that values changes []only one time

    return(
        <div>
            <h1>use Effect method</h1>
            <h2>count:{time}</h2>
            <button onClick={()=>{settime((prev)=>prev+1)}}>increase</button>
            <button onClick={()=>settime(time-1)}>decrease</button>
            <button onClick={()=>settime(0)}>reset</button>
        </div>
    )
}
export default UseEffectMethod;




