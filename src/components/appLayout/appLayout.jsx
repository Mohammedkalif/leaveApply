import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import LoginPage from "../loginPage/loginPage";
import ApplyLeave from "../applyLeave/applyLeave";
import ApproveLeave from "../approveLeave/approveLeave";
import Navbar from "../navBar/navBar";

function AppLayout() {
    const navigate = useNavigate();
    const [role, setRole] = useState(localStorage.getItem("role") || "");

    useEffect(() => {
        const handleStorageChange = () => {
            setRole(localStorage.getItem("role") || "");
        };

        window.addEventListener("storage", handleStorageChange);

        return () => {
            window.removeEventListener("storage", handleStorageChange);
        };
    }, []);

    useEffect(() => {
        if (!role) navigate("/");
    }, [role, navigate]);

    return (
        <>
            {role && <Navbar setRole={setRole} />}
            <Routes>
                <Route path="/" element={<LoginPage setRole={setRole} />} />
                {role === "student" && <Route path="/applyLeave" element={<ApplyLeave />} />}
                {role === "admin" && <Route path="/approveLeave" element={<ApproveLeave />} />}
                <Route path="*" element={<LoginPage setRole={setRole} />} />
            </Routes>
        </>
    );
}

export default AppLayout;
