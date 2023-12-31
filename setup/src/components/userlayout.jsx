import React from 'react';
import { Layout } from 'antd';
import { Link } from 'react-router-dom';
import "./layout.css"



const { Header} = Layout;

const App = () => {
  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
        <Link to="/" className=""><i className="fa-solid fa-house nav-logo"></i></Link>
        <Link to="/login" className='font-color'> Login</Link>&nbsp;&nbsp;
        <Link to="/register" className='font-color'> SignUp</Link>
        <Link to="/login" className='font-color btn-right'> LogOut</Link>
      </Header>     
    </Layout>
  );
};
export default App;