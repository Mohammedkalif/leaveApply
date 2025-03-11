import React, { useState } from "react";
import applyLeaveStyle from "./applyLeaveStyle";

function ApplyLeave() {
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [reason, setReason] = useState("");
    const [status] = useState("Pending");
    const [leaveRecords, setLeaveRecords] = useState([]);

    function handleApplyLeave(e) {
        e.preventDefault();
        const newLeave = { startDate, endDate, reason, status };
        setLeaveRecords([...leaveRecords, newLeave]);

        console.log(startDate, endDate, reason, status);
        alert("Leave applied successfully!");

        setStartDate("");
        setEndDate("");
        setReason("");
    }

    return (
        <div style={applyLeaveStyle.container}>
            <div style={applyLeaveStyle.card}>
                <h1 style={applyLeaveStyle.heading}>Apply for Leave</h1>
                <form onSubmit={handleApplyLeave} style={applyLeaveStyle.form}>
                    <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        style={applyLeaveStyle.input}
                    />
                    <input
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        style={applyLeaveStyle.input}
                    />
                    <input
                        type="text"
                        placeholder="Reason"
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                        style={applyLeaveStyle.input}
                    />
                    <button
                        type="submit"
                        style={applyLeaveStyle.button}
                        onMouseOver={(e) => (e.target.style.backgroundColor = applyLeaveStyle.buttonHover.backgroundColor)}
                        onMouseOut={(e) => (e.target.style.backgroundColor = applyLeaveStyle.button.backgroundColor)}
                    >
                        Apply
                    </button>
                </form>
            </div>
            <div style={applyLeaveStyle.tableContainer}>
                <h2 style={applyLeaveStyle.heading}>Leave Summary</h2>
                <table style={applyLeaveStyle.table}>
                    <thead>
                        <tr>
                            <th style={applyLeaveStyle.th}>Start Date</th>
                            <th style={applyLeaveStyle.th}>End Date</th>
                            <th style={applyLeaveStyle.th}>Reason</th>
                            <th style={applyLeaveStyle.th}>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                            <tr style={applyLeaveStyle.trHover}>
                                <td style={applyLeaveStyle.td}>25/03/2025</td>
                                <td style={applyLeaveStyle.td}>02/04/2025</td>
                                <td style={applyLeaveStyle.td}>Ramadan purcheses</td>
                                <td style={applyLeaveStyle.td}>Approved</td>
                            </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ApplyLeave;
