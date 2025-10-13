import React,{useState} from 'react';
function LoginUser(){
    const [formdata,setformdata]=useState({
        name:"",
        email:"",
        password:"",
        confirm:""
    })
    const[error,seterror]=useState({})
    const[submitdata,setsubmitdata]=useState(null);
    function handleChange(e){
        const {name,value}=e.target;
        setformdata((prev)=>({
            ...prev,[name]:value
        }))
    }
    function handleSubmit(e){
        e.preventDefault();
        let {name,email,password,confirm}=formdata;
        let newerror={};
        if(!name){
            newerror.name="name is required"
        }
        if(!email){
            newerror.email="Email is required"
        }
        else if(!email.includes("@")) {
            newerror.email="enter a valid email"
        }
        if(!password){
            newerror.password="enter the password"
        }
        if(!confirm){
            newerror.confirm="enter the confirm password"
        }
        else if(password!==confirm){
            newerror.confirm="password and confirm password should be same"; 
        }
        if(Object.keys(newerror).length>0){
            seterror(newerror)
            return;
        }
        setsubmitdata(formdata);
        seterror({})
        setformdata({
             name:"",
            email:"",
            password:"",
            confirm:""
        })
        
    }
    
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">username:</label>
                <input type="text" id="username" name="name" 
                // we use name to store the key of object
                value={formdata.name} placeholder="enter your name"
                onChange={handleChange}
                />
                {error.name && <p style={{ color: 'red' }}>{error.name}</p>}
                <br/>
                <label htmlFor="useremail">email:</label>
                <input type="email" name="email" id="useremail" value={formdata.email} placeholder="enter your email"
                onChange={handleChange}/>
                {error.email && <p style={{ color: 'red' }}>{error.email}</p>}
                <br/>
                <label htmlFor="userpassword">password:</label>
                <input type="password" name="password" id="password" value={formdata.password} placeholder="enter your password"
                onChange={handleChange}/>
                {error.password && <p style={{ color: 'red' }}>{error.password}</p>}
                <br/>
                <label htmlFor="confirm">password:</label>
                <input type="password" name="confirm" id="confirm" value={formdata.confirm} placeholder="enter your confirm password"
                onChange={handleChange}/>
                {error.confirm && <p style={{ color: 'red' }}>{error.confirm}</p>}
                <br/>
                <button type="submit">signup</button>   
            </form>
            {submitdata &&(
                    <div>
                        <h2>{submitdata.name}</h2>
                        <h2>{submitdata.email}</h2>
                    </div>
                )}
        </div>
    )
} 
export default LoginUser;


//portal
import React, { useState } from 'react';

const currentUsers = [
  { email: 'user1@example.com', userId: 'user1' },
  { email: 'user2@example.com', userId: 'user2' },
  { email: 'user3@example.com', userId: 'user3' }
];

function FeedbackForm() {
  const [formdata, setformdata] = useState({
    name: "",
    email: "",
    phone: "",
    userid: "",
    message: ""
  });

  const [error, seterror] = useState("");
  const [success, setsuccess] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setformdata((prev) => ({
      ...prev,
      [name]: value
    }));
    seterror("");
  }

  function handleSubmit(e) {
    e.preventDefault();

    const user = currentUsers.find((u) => u.email === formdata.email);

    if (!user) {
      seterror("You are not registered, sign up to continue");
      setsuccess("");
    } else if (user.userId !== formdata.userid) {
      seterror("User ID does not match the provided email");
      setsuccess("");
    } else {
      setsuccess("Feedback submitted successfully!");
      seterror("");
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formdata.name}
          onChange={handleChange}
        />
        <br />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formdata.email}
          onChange={handleChange}
        />
        <br />

        <label htmlFor="phone">Phone:</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={formdata.phone}
          onChange={handleChange}
        />
        <br />

        <label htmlFor="userid">User ID:</label>
        <input
          type="text"
          id="userid"
          name="userid"
          value={formdata.userid}
          onChange={handleChange}
        />
        <br />

        <label htmlFor="message">Message:</label>
        <input
          type="text"
          id="message"
          name="message"
          value={formdata.message}
          onChange={handleChange}
        />
        <br />

        <button type="submit">Submit</button>

        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}
      </form>
    </div>
  );
}

//export default FeedbackForm;
