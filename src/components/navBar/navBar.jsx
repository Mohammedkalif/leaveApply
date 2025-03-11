import React from "react";
import { useNavigate } from "react-router-dom";
import navbarStyle from "./navBarStyle";

function Navbar({ setRole }) {
    const navigate = useNavigate();
    const role = localStorage.getItem("role");

    function handleLogout() {
        localStorage.removeItem("role");
        setRole(""); 
        navigate("/");
    }

    return (
        <nav style={navbarStyle.navbar}>
            <h1 style={navbarStyle.logo}>Leave Management</h1>
            <div style={navbarStyle.navLinks}>
                {role === "student" && (
                    <a href="/applyLeave" style={navbarStyle.link}>Apply Leave</a>
                )}
                {role === "admin" && (
                    <a href="/approveLeave" style={navbarStyle.link}>Approve Leave</a>
                )}
                <button 
                    style={navbarStyle.logoutButton} 
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
