const loginPageStyle = {
    loginContainer:{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width:"100vw",
        height: "100vh",
        background: "#0f172a", 
    },
    loginCard: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "15px",
        padding: "30px",
        background: "rgba(255, 255, 255, 0.3)", 
        borderRadius: "12px",
        width: "100%",
        maxWidth: "350px",
        textAlign: "center",
    },
    heading: {
        textAlign: 'center',
        marginBottom: '20px',
        fontSize: '24px',
        color: '#333',
    },
    formStyle: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
    },
    inputStyle: {
        marginBottom: '15px',
        padding: '10px',
        fontSize: '16px',
        borderRadius: '4px',
        border: '1px solid #ccc',
    },
    buttonStyle: {
        padding: '10px',
        fontSize: '16px',
        borderRadius: '4px',
        border: 'none',
        backgroundColor: '#007BFF',
        color: '#fff',
        cursor: 'pointer',
    },
}



export default loginPageStyle;