// import React, { useState, useEffect } from "react";

// function App() {
//   const url = "http://localhost:5000/users";
//   const [data, setData] = useState([]);

//   const fetchInfo = () => {
//     return fetch(url)
//       .then((res) => res.json())
//       .then((d) => setData(d))
//   }


//   useEffect(() => {
//     fetchInfo();
//   }, []);
//   console.log();

//   return (
//     <div className="App">
//         {data.map((dataObj, index) => {
//           return (
//               <table>
//                 <thead>
//                     <tr>
//                         <td style={{marginLeft:"15px"}}>Username</td>
//                         <td style={{marginLeft:"15px"}}>Mobile Number </td>
//                         <td style={{marginLeft:"15px"}}>Email</td>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <td>{dataObj.username}</td>
//                         <td>{dataObj.phone}</td>
//                         <td>{dataObj.email}</td>
//                     </tr>
//                 </tbody>
//               </table>

//           );
//         })}
//     </div>
//   );
// }

// export default App;

import React from "react";
// import "./App.css";
class App extends React.Component {
    // Constructor
    constructor(props) {
        super(props);
 
        this.state = {
            items: [],
            DataisLoaded: false,
        };
    }
 
    // ComponentDidMount is used to
    // execute the code
    componentDidMount() {
        fetch("http://localhost:5000/users")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true,
                });
            });
    }
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded)
            return (
                <div>
                    <h1> Pleses wait some time.... </h1>
                </div>
            );
 
        return (
            <div className="App">
               <h1 style={{textAlign:"center"}}>User Data</h1>
                <div className="container">
                    {items.map((item) => (
                        <div className="item">
                            <ol key={item.id}>
                                <div>
                                    <strong>
                                        {"User_Name: "}
                                    </strong>
                                    {item.username},
                                </div>
                                <div>
                                    phone: {item.phone},
                                </div>
                                <div>
                                    Email: {item.email}
                                </div>
                            </ol>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
 
export default App;