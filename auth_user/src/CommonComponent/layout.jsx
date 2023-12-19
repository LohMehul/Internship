import React from 'react';
import {Layout,} from 'antd';
import FormCompo from "./formCompo"
// const { Header, Content, Footer } = Layout;

// const items = new Array(10).fill(null).map((_, index) => ({
//     key: index + 1,
//     label: `nav ${index + 1}`,
// }));

// const App: React.FC = () => {
//   const {
//     token: { colorBgContainer, borderRadiusLG },
//   } = theme.useToken();


// };

// export default App;

// import React from 'react';

const layout = () => {

    return (
        <Layout>
            <FormCompo />
        </Layout>
    );
};

export default layout;