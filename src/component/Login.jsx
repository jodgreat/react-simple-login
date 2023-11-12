import React from "react";


function Login(){
    return <div className="log-in">
                <h1>Login</h1>
                <input type="text" placeholder="Email" required/>
                <input type="password" placeholder="Password" />
                <button>Login</button>
                <p>Forgot <a href="/forgot">Password?</a></p>
                <p>Don't have a account? <a href="/signup">Sign Up</a></p>
    </div>
}

export default Login;