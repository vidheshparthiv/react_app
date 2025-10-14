import React,{useState} from 'react'

function Signup() {
    // state={
    //     name:"",
    //     email:"",
    //     password:"",
    //     confirmpassword:""
    // }dont use this in functional component instead use usestate cbj
    let [data,setdata]=useState({
        name:"",
        email:"",
        password:"",
        confirmpassword:""    })
    //for error handling
    let[error,setError]=useState({}); //next stage i got 2 errors but only one is showing so passing a obj
    let[SubmitData,setSubmitData]=useState(null);
    function handleSubmit(e){
        e.preventDefault();//to prrevent the reloading thing
        const{name,email,password,confirmpassword}=data;
        // <<if (!name || !email || !password || !confirmpassword) {
        // setError("All fields are mandatory");
        // return; // Prevent form submission
        // }

        // // Check if password and confirm password match
        // if (password !== confirmpassword) {
        // setError("Passwords do not match");
        // return; // Prevent form submission
        // }

        // // Clear error if validation passes
        // setError(""); >>
        let newError={}
        if(!email){
            newError.email="Email is req";
            return
        }
        else if(!email.includes("@")){
            newError.email="Email is req invalid";
            return
        }
        if (!confirmpassword){
            newError.confirmpassword="confirm password is req";
        }
        else if(password!==confirmpassword){
            newError.confirmpassword="password ot matching";
        }
        if(Object.keys(newError).length>0){
            setError(newError);}
        setSubmitData(data);
        localStorage.setItem("userData",JSON.stringify(data))
        let saveData= JSON.parse(localStorage.getItem("userData"))
        setdata({
            name:"",
            email:"",
            password:"",
            confirmpassword:""})
    }
    //Then to update only the password, you must copy the old object and replace the password field:for that weuse spread operator(...data)
    function handleChange(e){//e.target.name gives the name of the input field and e.target.value gives the value of the input field
        const {name,value}=e.target
        //e.target is an object which has name and value property 
        setdata((prev)=>({...prev,[name]:value}))
        //setdata({...data,[name]:value})

    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Name:</label>
            <input type="text" id="username" value={data.name} name='name' onChange={handleChange}/>
            <br />
            <label htmlFor="useremail">email:</label>
            {/* htmlfor is used to link the label with input field id */}
            <input type="email" id="useremail" value={data.email} name='email'onChange={handleChange}
            />
            <br/>
            <label htmlFor="userpassword" >password</label>
            <input type="password" id="userpassword" name="password" value={data.password} onChange={handleChange}/>
            <br />
            <label htmlFor="userconfirmpassword" >confirm password</label>
            <input type="password" id="userconfirmpassword" name='confirmpassword' value={data.confirmpassword} onChange={handleChange}/>
            <br/>       
            <button type="submit">submit</button>
            {SubmitData && (
                <div>
                    <h3>user data</h3>
                    <p>name:{SubmitData.name}</p>
                    <p>pass:{SubmitData.password}</p>
                    <p>email:{SubmitData.email}</p>
                    
                </div>
            )}
        </form>
    </div>
  )
}

export default Signup