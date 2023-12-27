// import React,{ useState, useEffect } from 'react'
// import axios from 'axios'
// import { Link, useNavigate } from "react-router-dom"
// import Layout from "../components/Layout"

// function Register() {
//     const navigate = useNavigate();
//     const [name, setName] = useState("")
//     const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("")
//     const [confirmPassword, setConfirmPassword] = useState("")
//     const [validationErrors, setValidationErrors] = useState({});
//     const [isSubmitting, setIsSubmitting] = useState(false);

//     useEffect(()=>{
//         if(localStorage.getItem('token') != "" && localStorage.getItem('token') != null){
//             navigate("/");
//         }
//     },[])

//     const registerAction = (e) => {
//         e.preventDefault();
//         setIsSubmitting(true)
//         let payload = {
//             name: name,
//             email:email,
//             password:password,
//             password_confirmation:confirmPassword
//         }
//         axios.post('/api/register', payload)
//         .then((r) => {
//             setIsSubmitting(false)
//             localStorage.setItem('token', r.data.token)
//             navigate("/");
//             console.log("data from register",r.data);
//         })
//         .catch((e) => {
//             setIsSubmitting(false)
//             if (e.response.data.errors != undefined) {
//                 setValidationErrors(e.response.data.errors);
//             }
//         });
//     }

//     return (
//         <Layout>
//             <div className="row justify-content-md-center mt-5">
//                 <div className="col-4">
//                     <div className="card">
//                         <div className="card-body">
//                             <h5 className="card-title mb-4">Register</h5>
//                             <form onSubmit={(e)=>registerAction(e)}>
//                                 <div className="mb-3">
//                                     <label 
//                                         htmlFor="name"
//                                         className="form-label">Name
//                                     </label>
//                                     <input 
//                                         type="text"
//                                         className="form-control"
//                                         id="name"
//                                         name="name"
//                                         value={name}
//                                         onChange={(e)=>{setName(e.target.value)}}
//                                     />
//                                     {validationErrors.name != undefined &&
//                                         <div className="flex flex-col">
//                                             <small  className="text-danger">
//                                             {validationErrors.name[0]}
//                                             </small >
//                                         </div>
//                                     }

//                                 </div>
//                                 <div className="mb-3">
//                                     <label 
//                                         htmlFor="email"
//                                         className="form-label">Email address
//                                     </label>
//                                     <input 
//                                         type="email"
//                                         className="form-control"
//                                         id="email"
//                                         name="email"
//                                         value={email}
//                                         onChange={(e)=>{setEmail(e.target.value)}}
//                                     />
//                                     {validationErrors.email != undefined &&
//                                         <div className="flex flex-col">
//                                             <small  className="text-danger">
//                                             {validationErrors.email[0]}
//                                             </small >
//                                         </div>
//                                     }

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
//                                         onChange={(e)=>setPassword(e.target.value)}
//                                     />
//                                     {validationErrors.password != undefined &&
//                                         <div className="flex flex-col">
//                                             <small  className="text-danger">
//                                             {validationErrors.password[0]}
//                                             </small >
//                                         </div>
//                                     }
//                                 </div>
//                                 <div className="mb-3">
//                                     <label 
//                                         htmlFor="confirm_password"
//                                         className="form-label">Confirm Password
//                                     </label>
//                                     <input 
//                                         type="password"
//                                         className="form-control"
//                                         id="confirm_password"
//                                         name="confirm_password"
//                                         value={confirmPassword}
//                                         onChange={(e)=>setConfirmPassword(e.target.value)}
//                                     />
//                                 </div>
//                                 <div className="d-grid gap-2">
//                                     <button 
//                                         disabled={isSubmitting}
//                                         type="submit"
//                                         className="btn btn-primary btn-block">Register Now
//                                     </button>
//                                     <p 
//                                         className="text-center">Have already an account <Link to="/">Login here</Link>
//                                     </p>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </Layout>
//     );
// }

// export default Register;



// import { Toast } from 'bootstrap';   
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { Button, Checkbox, Form, Input } from 'antd';

const Register = () => {

    const [username, namechange] = useState("");
    const [password, passwordchange] = useState("");
    const [email, emailchange] = useState("");
    const [phone, phonechange] = useState("");

    const history = useNavigate();


    const Isvalidate = () => {
        let Isproceed = true;
        let errormsg = "please Enter the value of"
        if (username === "" || username === null) {
            Isproceed = false;
            errormsg += " username"
            // alert (errormsg);
        }
        if (password === "" || password === null) {
            Isproceed = false;
            errormsg += " password"
            // alert (errormsg);
        }
        if (phone === "" || phone === null) {
            Isproceed = false;
            errormsg += " Mobile Number"
            // alert (errormsg);
        }
        if (email === "" || email === null) {
            Isproceed = false;
            errormsg += " Email"
            // alert (errormsg);
        }
        if(!Isproceed){
            alert(errormsg)
        }
        return Isproceed;
    }

    const handlesubmit = (e) => {
        e.preventDefault();
        let payload = { username, password, email, phone };
        if (Isvalidate()) {
            console.log(payload);
            fetch("http://localhost:5000/users", {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(payload)
            }).then((res) => {
                console.log("Registered Successfully");
                alert("Registered Successfully");
                history("/login")
            }).catch((err) => {
                toast.success("Failed :", err.message);
            });
        }
    }
    return (
        <div>
            <div className='offset-lg-3 col-lg-6'>
                <form className='container' onSubmit={handlesubmit}>
                    <div className="card">
                        <div className="card-header">
                        {/* <FontAwesomeIcon icon="fa-solid fa-house" /> */}
                        <span><Link to="/" className='text-muted display-6'><i className="fa-solid fa-house"></i></Link></span>
                            <h2 className='mr-4'>User Registration</h2>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>User Name <span style={{ color: "red" }}>*</span></label>
                                        <input type="text" value={username} onChange={e => namechange(e.target.value)} className='form-control' />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Password <span style={{ color: "red" }}>*</span></label>
                                        <input value={password} onChange={e => passwordchange(e.target.value)} type="password" className='form-control' />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Mobile No. <span style={{ color: "red" }}>*</span></label>
                                        <input value={phone} onChange={e => phonechange(e.target.value)} type="tel" className='form-control' />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Email <span style={{ color: "red" }}>*</span></label>
                                        <input value={email} onChange={e => emailchange(e.target.value)} type="email" className='form-control' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <Button type='submit' className='btn btn-primary'> Register</Button> &nbsp;
                            <Link to="/login"><Button type='text' className='btn btn-success'>Login</Button></Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;