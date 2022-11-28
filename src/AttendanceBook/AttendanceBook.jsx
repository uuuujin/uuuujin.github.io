import React from "react";

const students = [
    {
        id: 1,
        name: "Steve"
    },
    {
        id: 2,
        name: "Jeff"
    },
    {
        id: 3,
        name: "Jenny"
    },
    {
        id: 4,
        name: "Rose"
    },
    {
        id: 5,
        name: "Jini"
    },
];

function AttendanceBook(props) {
    return (
        <ul>
            {students.map((std, idx) =>{
                return <li key={`student-id${std.id}`} data-index={idx}>{std.name}</li>
            })}
        </ul>
    )
}

export default AttendanceBook;