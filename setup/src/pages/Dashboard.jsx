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
import "./pages.css"
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
        console.log(items);


        const handelDelete = (id) => {
            var index = items.map(function (e) {
                return e.id;

            }).indexOf(id);

            items.splice(index, 1);


        }
        if (!DataisLoaded)
            return (
                <div>
                    <h1> Pleses wait some time.... </h1>
                </div>
            );

        return (
            <div className="container">
                <div className="mt-3">
                    <h1>User Data</h1>
                    <table className="table-user">
                        <thead >
                            <tr>
                                <th className="th">#</th>
                                <th className="th">Usrename</th>
                                <th className="th">Mobile Number</th>
                                <th className="th">Email</th>
                                <th className="th">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                items.map((user, index) => {
                                    return <tr key={index}>
                                        <td className="br">{user.id}</td>
                                        <td className="br">{user.username}</td>
                                        <td className="br">{user.phone}</td>
                                        <td className="br">{user.email}</td>
                                        <td className="br">
                                            <button className="button">Edit</button>&nbsp;&nbsp;&nbsp;
                                            <button className="button" onClick={() => { handelDelete(user.id)}}>Delete</button>
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>


            // <div className="App">
            //    <h1 style={{textAlign:"center"}}>User Data</h1>
            //     <div className="container hr-card">
            //         {items.map((item) => (
            //             <div className="item">
            //                 <ol key={item.id}>
            //                     <div>
            //                         <strong>
            //                             {"User_Name: "}
            //                         </strong>
            //                         {item.username},
            //                     </div>
            //                     <div>
            //                         phone: {item.phone},
            //                     </div>
            //                     <div>
            //                         Email: {item.email}
            //                     </div>
            //                     <div>
            //                        <button className="button"> Edit</button>&nbsp;&nbsp;&nbsp;
            //                        <button className="button"> Delete</button>
            //                     </div>
            //                 </ol>
            //             </div>
            //         ))}
            //     </div>
            // </div>
        );
    }
}

export default App;