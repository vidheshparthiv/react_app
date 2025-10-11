import React, { useState } from 'react';
function PropsDemo(){//when using class we dontt need to use props
     const [islogin,setIslogin]=useState(false)
     let msg;
     if(!islogin){
        msg="guest"
     }
     else {
        msg="kdd"
     }
     //we can also do that dhoni thing with random()
     let x= Math.floor(Math.random()*10);
     let lucky=7;
    return(
        <div>
            <h1>student message</h1>
            {islogin && <h2>welcome to the portal {msg} </h2>}
            <button onClick={()=>setIslogin(!islogin)}>
                {islogin?'hide message':'show message'}
            </button>
            { x==lucky ?
        </div>
    )
}
export default PropsDemo;    

