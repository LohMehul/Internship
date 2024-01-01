import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./pages.css";

function UserPage() {
    const url = "http://localhost:5000/users";
    const [data, setData] = useState([]);

    const fetchInfo = () => {
        return fetch(url)
            .then((res) => res.json())
            .then((d) => setData(d))
    }

    let history = useNavigate();


    const handelDelete = (id) => {
        var index = data.map(function (e) {
            return e.id;
        }).indexOf(id);

        
        console.log(data);
        console.log("indexof",index)
        console.log("ID",id)
        // setData(data);
        // setData(data);
        data.splice(index, 1);
        history("/user");
    }

    useEffect(() => {
        fetchInfo();
    }, [data]);
    return (
        <>
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
                                data.map((user, index) => {
                                    return <tr key={index}>
                                        <td className="br">{user.id}</td>
                                        <td className="br">{user.username}</td>
                                        <td className="br">{user.phone}</td>
                                        <td className="br">{user.email}</td>
                                        <td className="br">
                                            <button className="button">Edit</button>&nbsp;&nbsp;&nbsp;
                                            <button className="button" onClick={() => { handelDelete(user.id) }}>Delete</button>
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default UserPage;
