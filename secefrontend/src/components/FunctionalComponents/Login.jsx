import{Link, Navigate} from 'react-router-dom';
import{useNavigate} from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import '../../css/Login.css'
const Login=()=>{
    var [username,setUserName]=useState('');
    var [password,setPassword]=useState('');
    var Navigate=useNavigate();
    const HandleSignup= async (event)=>{
        event.preventDefault();
        console.log("Event triggered")
        try{
             
        const req= await axios.post('http://localhost:3001/login',{
            
            userName:username,
           password: password
        })
        alert(req.data)
        // console.log(req)
        Navigate('/home')
    } catch(err){
        console.log(err)
    }
}
    return(
        <div>
            <h1 style={{ textAlign: "center" }}>Login</h1>
            <div className="container">
            <form method='POST' onSubmit={HandleSignup} >
    <div>
        <label for="username" required>Username: </label>
        <input type="text" id="username" onChange={(e)=>setUserName(e.target.value)}/>
        <br /><br />
        <label for="password">Password: </label>
        <input type="password" id="password" onChange={(e)=>setPassword(e.target.value)}/>
        <br /><br />
        <button type='submit'>Signup</button>
    </div>
</form>
            </div>
           
        </div>
    )
}
export default Login;