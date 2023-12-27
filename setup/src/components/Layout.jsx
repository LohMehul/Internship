import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Home from '../pages/Home';
import { Link } from 'react-router-dom';
import "./layout.css"



const { Header, Content, Footer } = Layout;
const items = new Array(15).fill(null).map((_, index) => ({
  key: index + 1,
  label: `nav ${index + 1}`,
}));
const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
        <span><Link to="/" className=""><i className="fa-solid fa-house nav-logo"></i></Link></span>
        <Link to="/login" className='font-color'> login</Link>&nbsp;&nbsp;
        <Link to="/register" className='font-color'> SignUp</Link>
      </Header>     
    </Layout>
  );
};
export default App;