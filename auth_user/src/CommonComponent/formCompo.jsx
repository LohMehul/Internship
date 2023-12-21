import React from "react";
import { useNavigate } from 'react-router-dom';
import "../CSS/form.css"
import axios from 'axios';


const Form = () => {

    const { useState } = React;
    const [card, setcard] = useState(false);
    const navigate = useNavigate();

    const [pass_eye, setpass_eye] = useState(true);
    const [signup_pass, setsignup_pass] = useState("password");

    const [conf_eye, setconf_eye] = useState(true);
    const [signup_confpass, setsignup_confpass] = useState("password");

    const [login_pass, setlogin_pass] = useState("password");


    const [formState, setFormState] = useState({
        email: "",
        password: ""
    })

    const [upinput, setupinput] = useState({
        fname: "",
        upemail: "",
        upnum: "",
        uppass: "",
        confpass: ""
    });
    const [wfname, setwfname] = useState(false);
    const [wmail, setwmail] = useState(false);
    const [wnum, setwnum] = useState(false);
    const [wpass, setwpass] = useState(false);
    const [wcpass, setwcpass] = useState(false);

    const login = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/users', {
            method: "post",
            credentials: "include",
            headers: {
                // needed so express parser says OK to read
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({upinput
            })
        })
        console.log("data", response);
    }
    
    const LoginPage = () => {
        if (card) {
            setcard(false);
        }
        else {
            setcard(true);
        }
    }
    const SignupPage = () => {
        if (card) {
            setcard(false);
        }
        else {
            setcard(true);
        }
    }

    const PassEye = () => {
        if (signup_pass === "password") {
            setsignup_pass("text");
            setpass_eye(false);
        }
        else {
            setsignup_pass("password");
            setpass_eye(true);
        }
    }

    const ConfPassEye = () => {
        if (signup_confpass === "password") {
            setsignup_confpass("text");
            setconf_eye(false);
        }
        else {
            setsignup_confpass("password");
            setconf_eye(true);
        }
    }

    const SignupEvent = (upe) => {
        const name = upe.target.name;
        const value = upe.target.value;
        setupinput((last) => {
            return {
                ...last,
                [name]: value
            }
        });
    }

    // const login1 = async (event) => {
    //     event.preventDefault();
    //     try {
    //         const response = await axios.get(`http://localhost:5000/users?upmail=${upinput.upemail}&uppass=${upinput.uppass}`).then((response) => {
    //             console.log("responce from login side", response);
    //             if (response.status === 201) {
    //                 console.log("server connected", response.data);
    //             } else {
    //                 console.log("error while connecting to the server");
    //             }

    //         }).catch((error) => {
    //             console.log("inside catch", error);
    //             if (error.response) {
    //                 console.log(error.response);
    //                 console.log("server responded");
    //             } else if (error.request) {
    //                 console.log("network error");
    //             } else {
    //                 console.log(error);
    //             }
    //         });
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    
    const SignupSubmit = (signupe) => {
        signupe.preventDefault();
        setwfname(false);
        setwmail(false);
        setwnum(false);
        setwpass(false);
        setwcpass(false);
        if (upinput.fname === "") {
            setwfname(true);
        }
        else if (upinput.wmail === "") {
            setwmail(true);
        }
        else if (upinput.upnum === "") {
            setwnum(true);
        }
        else if (upinput.uppass === "") {
            setwpass(true);
        }
        else if (upinput.confpass === "") {
            setwcpass(true);
        }
        else {
            alert("You have signed up successfully")
        }
        console.log("registration data", upinput);
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(upinput)
        }).then(response => { navigate("/"); console.log("this is log response", response); })
    }
    return (
        <>
            <div className="container">
                <div className={`card ${card ? "active" : ""}`}>
                    <div className="user signup_form">
                        <div className="form">
                            <div className="grovia_txt">
                                <h3>Sign up</h3>
                                <h5>Signup for a new account</h5>

                            </div>
                            <form onSubmit={SignupSubmit}>

                                <div className="input_div">
                                    <div className="input_text">
                                        <input className={` ${wfname ? "warning" : ""}`} type="text" name="fname" value={upinput.fname} onChange={SignupEvent} />
                                        <span>First Name</span>
                                    </div>
                                    <div className="input_text">
                                        <input type="text" />
                                        <span>Last Name</span>
                                    </div>
                                </div>
                                <div className="input_div">
                                    <div className="input_text">
                                        <input className={` ${wmail ? "warning" : ""}`} type="text" name="upemail" value={upinput.upemail} onChange={SignupEvent} />
                                        <span>Email</span>
                                    </div>
                                    <div className="input_text">
                                        <input className={` ${wnum ? "warning" : ""}`} type="number" name="upnum" value={upinput.upnum} onChange={SignupEvent} />
                                        <span>Phone Number</span>
                                    </div>
                                </div>
                                <div className="input_div">
                                    <div className="input_text">
                                        <input className={` ${wpass ? "warning" : ""}`} type={signup_pass} name="uppass" value={upinput.uppass} onChange={SignupEvent} />
                                        <span>Password</span>
                                        <i onClick={PassEye} className={`fa ${pass_eye ? "fa-eye-slash" : "fa-eye"}`}></i>
                                    </div>
                                    <div className="input_text">
                                        <input className={` ${wcpass ? "warning" : ""}`} type={signup_confpass} name="confpass" value={upinput.confpass} onChange={SignupEvent} />
                                        <span>Confirm Password</span>
                                        <i onClick={ConfPassEye} className={`fa ${conf_eye ? "fa-eye-slash" : "fa-eye"}`}></i>
                                    </div>
                                </div>
                                <div className="btn">
                                    <button type="submit">SIGN UP</button>
                                    <p>Already have an account? <a onClick={LoginPage} href="#">Login Now</a></p>
                                </div>

                            </form>

                        </div>
                        <div className="image_box">
                            <img src="https://imgur.com/uADvk7s.jpg" />
                        </div>
                    </div>
                    <div className="user signin_form">
                        <div className="image_box">
                            <img src="https://imgur.com/8averGS.jpg" />
                        </div>
                        <div className="form">

                            <div className="grovia_txt">
                                <h3>Login</h3>
                                <h5>Login to your account</h5>

                            </div>
                            <div className="input_text" onChange={(e) => {setFormState(e.target.value) }}>
                                <input type="text" />
                                <span>Email</span>
                            </div>
                            <div className="input_text">
                                <input type={login_pass} onChange={(e) => {setFormState(e.target.value) }} />
                                <span>Password</span>
                            </div>
                            <div className="btn">
                                <button onClick={login}>SIGN IN</button>
                                <p>Don't have an account yet? <a onClick={SignupPage} href="#">SignUp Now</a></p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>


        </>
    );
}


export default Form;