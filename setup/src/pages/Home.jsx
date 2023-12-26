import React from 'react';
import{ Link} from "react-router-dom";
function Home(props) {
    return (
        <div>
           <h1 className='text-center'>Home page </h1>
        <Link to="/login"> login</Link>
        </div>
    );
}

export default Home;