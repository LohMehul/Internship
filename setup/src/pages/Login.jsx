// import React,{ useEffect, useState } from 'react'
// import axios from 'axios'
// import { Link, useNavigate } from "react-router-dom"
// import Layout from "../components/Layout"

// function Login() {
//     const navigate = useNavigate();
//     const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("")
//     const [validationErrors, setValidationErrors] = useState({});
//     const [isSubmitting, setIsSubmitting] = useState(false);

//     useEffect(()=>{
//         if(localStorage.getItem('token') != "" && localStorage.getItem('token') != null){
//             navigate("/dashboard");
//         }
//         console.log("local storage log",localStorage.getItem('token'))
//     },[])

//     const loginAction = (e) => {
//         setValidationErrors({})
//         e.preventDefault();
//         setIsSubmitting(true)
//         let payload = {
//             email:email,
//             password:password,
//         }
//         axios.post('/api/login', payload)
//         .then((r) => {
//             setIsSubmitting(false)
//             localStorage.setItem('token', r.data.token)
//             navigate("/dashboard");
//             console.log("login local token",localStorage.setItem('token', r.data.token));
//         })
//         .catch((e) => {
//             setIsSubmitting(false)
//             if (e.response.data.errors != undefined) {
//                 setValidationErrors(e.response.data.errors);
//             }
//             if (e.response.data.error != undefined) {
//                 setValidationErrors(e.response.data.error);
//             }
//         });
//     }


//     return (
//         <Layout>
//             <div className="row justify-content-md-center mt-5">
//                 <div className="col-4">
//                     <div className="card">
//                         <div className="card-body">
//                             <h5 className="card-title mb-4">Sign In</h5>
//                             <form onSubmit={(e)=>{loginAction(e)}}>
//                                 {Object.keys(validationErrors).length != 0 &&
//                                      <p className='text-center '><small className='text-danger'>Incorrect Email or Password</small></p>
//                                 }

//                                 <div className="mb-3">
//                                     <label 
//                                         htmlFor="email"
//                                         className="form-label">
//                                             Email address
//                                     </label>
//                                     <input 
//                                         type="email"
//                                         className="form-control"
//                                         id="email"
//                                         name="email"
//                                         value={email}
//                                         onChange={(e)=>{setEmail(e.target.value)}}
//                                     />
//                                 </div>
//                                 <div className="mb-3">
//                                     <label 
//                                         htmlFor="password"
//                                         className="form-label">Password
//                                     </label>
//                                     <input 
//                                         type="password"
//                                         className="form-control"
//                                         id="password"
//                                         name="password"
//                                         value={password}
//                                         onChange={(e)=>{setPassword(e.target.value)}}
//                                     />
//                                 </div>
//                                 <div className="d-grid gap-2">
//                                     <button 
//                                         disabled={isSubmitting}
//                                         type="submit"
//                                         className="btn btn-primary btn-block">Login</button>
//                                     <p className="text-center">Don't have account? <Link to="/register">Register here</Link></p>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </Layout>
//     );
// }

// export default Login;





// **********------------new page for login--------------*************


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import loginForm from "./loginfrom"
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [username, updateUsername] = useState("");
    const [password, updatePassword] = useState("");

    const history = useNavigate();


    const proceedlogin = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log("processing");
            // fetch("http://localhost:5000/users/").then((res) => {
            //     return res.json();
            // }).then((respo) => {
            //     console.log("login data responce is",respo);
            //     let data = JSON.stringify(respo);
            //     console.log("data log is", data.name);
            //     // if (data.name===username && data.password===password) {
            //     //     history("/")                    
            //     // }
            //     // else{
            //     //     alert("enter valid username or password")
            //     // }

            // }).catch((err) => {
            //     alert("error due to" + err.message)
            // }
            // )
            fetch("http://localhost:5000/users/")
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(userData => {
                    // Process the retrieved user data
                    console.log('User Data:', userData);
                    console.log(userData.length);
                    console.log("userdata at api", userData[0].username);
                    if (status==200) {
                        for (let i = 0; i <= userData.length; i++) {
                            if (userData[i].username == username && userData[i].password == password) {
                                history("/");
                                console.log("inside a for loop user");
                                break;
                            }
                        }
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }
    }
    // console.log(username);
    // console.log(password);

    const validate = () => {
        let result = true;
        // const errormsg = "please Enter "
        if (username === "" || username === null) {
            result = false
            // errormsg += " username"
            alert("please Enter User name")
            // alert (errormsg);
        }
        if (password === "" || password === null) {
            alert("please Enter Password")
            result = false
            // errormsg += " password"
            // alert (errormsg);
        }
        return result;
    }
    return (
        <>
            <div className='offset-lg-3 col-lg-6'>
                <form onSubmit={proceedlogin} className="container">
                    <div className="card ">
                        <div className="card-header">
                            <span><Link to="/" className='text-muted display-6'><i className="fa-solid fa-house"></i></Link></span>
                            <h1 className='text-center d-inline'>Login Page</h1>
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <label>User Name <span style={{ color: "red" }}>*</span></label>
                                <input type="text" value={username} onChange={e => updateUsername(e.target.value)} className='form-control' />
                            </div>
                            <div className="form-group">
                                <label>Password <span style={{ color: "red" }}>*</span></label>
                                <input value={password} onChange={e => updatePassword(e.target.value)} type="password" className='form-control' />
                            </div>
                        </div>
                        <div className="card-footer">
                            <button type='submit' className='btn btn-primary'>Login</button> &nbsp;
                            <Link to="/register"><button type='text' className='btn btn-success'>Sign UP</button></Link>
                        </div>
                    </div>
                </form>
                <loginForm/>
            </div>
        </>
    );
};

export default Login;