import React, { useState, useEffect } from "react";
import data from "../../assets/data.json";
import approveLeaveStyle from "./approveLeaveStyle";

function ApproveLeave() {
    const [leaveData, setLeaveData] = useState([]);

    useEffect(() => {
        setLeaveData(data);
    }, []);

    function handleApprove(id) {
        setLeaveData((prevData) =>
            prevData.map((leave) =>
                leave.id === id ? { ...leave, status: "Approved" } : leave
            )
        );
    }

    function handleReject(id) {
        setLeaveData((prevData) =>
            prevData.map((leave) =>
                leave.id === id ? { ...leave, status: "Rejected" } : leave
            )
        );
    }

    return (
        <div style={approveLeaveStyle.container}>
            <h1 style={approveLeaveStyle.heading}>Approve Leave</h1>
            <ul style={approveLeaveStyle.list}>
                {leaveData.map((leave) => (
                    <li key={leave.id} style={approveLeaveStyle.listItem}>
                        <p><strong>Name:</strong> {leave.name}</p>
                        <p><strong>Start Date:</strong> {leave.startDate}</p>
                        <p><strong>End Date:</strong> {leave.endDate}</p>
                        <p><strong>Reason:</strong> {leave.reason}</p>
                        <p><strong>Status:</strong> {leave.status}</p>
                        <button
                            style={approveLeaveStyle.approveButton}
                            onClick={() => handleApprove(leave.id)}
                        >
                            Approve
                        </button>
                        <button
                            style={approveLeaveStyle.rejectButton}
                            onClick={() => handleReject(leave.id)}
                        >
                            Reject
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ApproveLeave;
    