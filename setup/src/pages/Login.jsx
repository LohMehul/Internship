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

const Login = () => {

    const [usename, updateUsername] = useState("");
    const [password, updatePassword] = useState("");


    const proceedlogin = () => {

    }
    return (
        <>
            <div className='offset-lg-3 col-lg-6'>
                <form onSubmit={proceedlogin} className="container">
                    <div className="card ">
                        <div className="card-header">
                            <h1 className='text-center'>Login Page</h1>
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <label>User Name <span style={{ color: "red" }}>*</span></label>
                                <input type="text" value={usename} onChange={e => updateUsername(e.target.value)} className='form-control' />
                            </div>
                            <div className="form-group">
                                <label>Password <span style={{ color: "red" }}>*</span></label>
                                <input value={password} onChange={e => updatePassword(e.target.value)} type="password" className='form-control' />
                            </div>
                        </div>
                        <div className="card-footer">
                            <button type='submit' className='btn btn-primary'> Register</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Login;