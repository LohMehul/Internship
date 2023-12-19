// import React, { useState } from 'react';
// import { PlusOutlined } from '@ant-design/icons';
// import {
//     Button,
//     DatePicker,
//     Form,
//     Input,
//     InputNumber,
//     Radio,
//     Select,
//     Slider,
//     Switch,
//     TreeSelect,
//     Upload,
// } from 'antd';

// const { RangePicker } = DatePicker;
// const { TextArea } = Input;
// // const normFile = (e) => {
// //     if (Array.isArray(e)) {
// //         return e;
// //     }
// //     return e?.fileList;
// // };
// const FormDisabledDemo = () => {


//     const handlesubmit = () => {

//     }
//     // const [componentDisabled, setComponentDisabled] = useState(false);
//     return (
//         <>

//             <Form labelCol={{span: 4,}} wrapperCol={{span: 14, }} layout="horizontal"
//                 // disabled={componentDisabled}
//                 style={{
//                     maxWidth: 600,
//                 }}
//             >


//                 <Form.Item label="UserName">
//                     <Input placeholder='Username'/>
//                 </Form.Item>
//                 <Form.Item label="Password">
//                     <Input type='password' placeholder='Password'/>
//                 </Form.Item>
//                 <Button onClick={handlesubmit}>submit</Button>
//             </Form>
//         </>
//     );
// };
// export default () => <FormDisabledDemo />;

import React from "react";
import "../CSS/form.css"


const Form = () => {

    const { useState } = React;
    const [card, setcard] = useState(false);

    const [pass_eye, setpass_eye] = useState(true);
    const [signup_pass, setsignup_pass] = useState("password");
    const [passwo_eye, setpasswo_eye] = useState(false);

    const [conf_eye, setconf_eye] = useState(true);
    const [signup_confpass, setsignup_confpass] = useState("password");
    const [confpass_eye, setconfpass_eye] = useState(false);

    const [login_eye, setlogin_eye] = useState(true);
    const [login_pass, setlogin_pass] = useState("password");
    const [logeye, setlogeye] = useState(false);

    const [agree, setagree] = useState(false);

    const [remtick, setremtick] = useState(false);

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
        if (signup_pass == "password") {
            setsignup_pass("text");
            setpass_eye(false);
            setpasswo_eye(true);
        }
        else {
            setsignup_pass("password");
            setpass_eye(true);
            setpasswo_eye(false);
        }
    }

    const ConfPassEye = () => {
        if (signup_confpass == "password") {
            setsignup_confpass("text");
            setconf_eye(false);
            confpass_eye(true);
        }
        else {
            setsignup_confpass("password");
            setconf_eye(true);
            confpass_eye(false);
        }
    }

    const LoginEye = () => {
        if (login_pass == "password") {
            setlogin_pass("text");
            setlogin_eye(false);
            setlogeye(true);
        }
        else {
            setlogin_pass("password");
            setlogin_eye(true);
            setlogeye(false);
        }
    }

    const AgreeTick = () => {
        if (agree) {
            setagree(false);
        }
        else {
            setagree(true);
        }
    }

    const RemTick = () => {
        if (remtick) {
            setremtick(false);
        }
        else {
            setremtick(true);
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

    const SignupSubmit = (signupe) => {
        signupe.preventDefault();
        setwfname(false);
        setwmail(false);
        setwnum(false);
        setwpass(false);
        setwcpass(false);
        if (upinput.fname === "a") {
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
    }
    return (
        <>
            <div className="container">
                <div className={`card ${card ? "active" : ""}`}>
                    <div className="user signup_form">
                        <div className="form">
                            <div className="grovia">
                                <img src="https://imgur.com/RK0ywdZ.jpg" />
                                <h2>Grovia</h2>
                            </div>
                            <div className="grovia_txt">
                                <h3>Sign up</h3>
                                <h5>Signup for a new account</h5>
                                <p>Thank you for connecting with us Grovia,lets access our best recommendation contact for you.</p>
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
                                <div className="agree">
                                    <span onClick={AgreeTick} className={` ${agree ? "agree_green" : ""}`} ><i className="fa fa-check"></i></span>
                                    <p>Agree to the <a>Terms and Condition</a> of Grovia</p>
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
                            <div className="grovia">
                                <img src="https://imgur.com/RK0ywdZ.jpg" />
                                <h2>Grovia</h2>
                            </div>
                            <div className="grovia_txt">
                                <h3>Login</h3>
                                <h5>Login to your account</h5>
                                <p>Thank you for get back to Grovia,lets access our best recommendation contact for you.</p>
                            </div>
                            <div className="input_text">
                                <input type="text" />
                                <span>Email</span>
                            </div>
                            <div className="input_text">
                                <input type={login_pass} />
                                <span>Password</span>
                                <i onClick={LoginEye} className={`fa ${login_eye ? "fa-eye-slash" : "fa-eye"}`}></i>
                            </div>
                            <div className="remember">
                                <div className="agree">
                                    <span onClick={RemTick} className={` ${remtick ? "rem_green" : ""}`} ><i className="fa fa-check"></i></span>
                                    <p>Remember Me</p>
                                </div>
                                <a href="#">Reset Password?</a>
                            </div>
                            <div className="btn">
                                <button>SIGN IN</button>
                                <p>Don't have an account yet? <a onClick={SignupPage} href="#">Join Grovia Now</a></p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>


        </>
    );
}

// ReactDOM.render(<Form/>,document.getElementById("root"));

export default Form;