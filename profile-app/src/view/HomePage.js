import React from "react";
import {Link} from "react-router-dom"

const HomePage = () => {
    return ( 
        <main>
            <h1>IronProfile</h1>
            <p>Today we will create an app with authoritation, adding some cool styles!</p>
            <div>
                <button><Link to="/signup">Sign up</Link></button>
                <button><Link to="/login">Log in</Link></button>
            </div>
        </main>
     );
}

export default HomePage;