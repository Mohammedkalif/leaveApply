import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginPageStyle from "./loginPageStyle";

function LoginPage({ setRole }) {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin(e) {
        e.preventDefault();
        let userRole = "";

        if (username === "admin" && password === "admin") {
            userRole = "admin";
        } else if (username === "student" && password === "student") {
            userRole = "student";
        } else {
            alert("Invalid username or password");
            return;
        }

        localStorage.setItem("role", userRole);
        setRole(userRole);

        // Redirect after setting role
        navigate(userRole === "admin" ? "/approveLeave" : "/applyLeave");
    }

    return (
        <div style={loginPageStyle.loginContainer}>
            <div style={loginPageStyle.loginCard}>
                <h1 style={loginPageStyle.heading}>Login</h1>
                <form onSubmit={handleLogin} style={loginPageStyle.formStyle}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        style={loginPageStyle.inputStyle}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={loginPageStyle.inputStyle}
                    />
                    <button type="submit" style={loginPageStyle.buttonStyle}>Login</button>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
