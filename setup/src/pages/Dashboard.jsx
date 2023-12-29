import React, { useState, useEffect } from "react";

function App() {
  const url = "http://localhost:5000/users";
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d))
  }


  useEffect(() => {
    fetchInfo();
  }, []);
  console.log();

  return (
    <div className="App">
        {data.map((dataObj, index) => {
          return (
            <div
              style={{
                width: "50em",
                backgroundColor: "#35D841",
                padding:2,
                marginRight:"25em",
                borderRadius: 10,
                marginBlock: 10,
              }}
            >
              <table>
                <thead>
                    <tr>
                        <td style={{marginLeft:"15px"}}>Username</td>
                        <td style={{marginLeft:"15px"}}>Mobile Number </td>
                        <td style={{marginLeft:"15px"}}>Email</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{dataObj.username}</td>
                        <td>{dataObj.phone}</td>
                        <td>{dataObj.email}</td>
                    </tr>
                </tbody>
              </table>
            </div>
          );
        })}
    </div>
  );
}

export default App;