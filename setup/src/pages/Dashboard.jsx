

import React from "react";
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
        

        function handelDelete(id){
            var index = items.map(function (e) {
                return e.id;

            }).indexOf(id);

            // var data = new Array;
            // data = items.filter(!index)
            // console.log("new data in saperate array",data);


            // console.log("is is : ",id);
            // console.log("indexis : ", index);
            // console.log(" before delete array is :",items);
            // items.splice(index, 1);
            // console.log("after Delete array is :",items);



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
        );
    }
}

export default App;