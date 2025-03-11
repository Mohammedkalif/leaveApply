const navbarStyle = {
    navbar: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 30px",
        background: "#1e293b",
        color: "#fff",
        boxShadow: "0px 4px 6px rgba(0,0,0,0.2)",
    },
    logo: {
        fontSize: "22px",
        fontWeight: "bold",
        color: "#facc15",
    },
    navLinks: {
        display: "flex",
        alignItems: "center",
        gap: "20px",
    },
    link: {
        textDecoration: "none",
        color: "#fff",
        fontSize: "16px",
        transition: "color 0.3s",
    },
    logoutButton: {
        padding: "8px 15px",
        fontSize: "14px",
        borderRadius: "6px",
        border: "none",
        backgroundColor: "#dc2626",
        color: "#fff",
        cursor: "pointer",
        transition: "0.3s",
    },
    logoutHover: {
        backgroundColor: "#b91c1c",
    },
};

export default navbarStyle;
