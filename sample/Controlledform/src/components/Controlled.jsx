import React from 'react'
function Controlled(){
    let [name, setName]=React.useState("");
    let [Email, setEmail]=React.useState("");
    let [password, setPassword]=React.useState("");
    function handleSubmit(e){
        e.preventDefault();
        console.log(name, Email,password);}
    function myFirstName(e){
        setName(e.target.value);
    
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            firstname:
            <input type="text" value={name} onChange={myFirstName}/>
            <br />
            Email:
            <input type="email" value={Email} onChange={(e)=>setEmail(e.target.value)}/>
            <br />
            password:
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <br />
            
            <button type='submit'>submit</button>

        </form>
    </div>
  )
}
export default Controlled;
