import React, {useEffect, useRef, useState} from "react";

function Clock(props) {
    let [time, setTimer] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        setInterval(() => {
            setTimer(new Date().toLocaleTimeString());
        }, 1000);
    },[]);

    const innerColckStyle = {
        backgroundColor: "#282c34",
        minHeight: "154px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "calc(10px + 2vmin)",
        color: "white",
    };

    return (
        <div style={innerColckStyle}>
            <h1>{time}</h1>
        </div>
    );

}

//setInterval(Clock, 1000);

export default Clock;