import React from "react";

//const root = ReactDOM.createRoot(document.getElementById('root'));

function Clock(props) {
    // const thisTime = setInterval(() => {
    // Clock.render(
    //         <Clock/>
    //     );
    // }, 1000);
    const innerColckStyle = {
        backgroundColor: "#282c34",
        minHeight: "154px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "calc(10px + 2vmin)",
        color: "white",
    }
    const time =  (
        <div style={innerColckStyle}>
            <h1>{new Date().toLocaleTimeString()}</h1>
        </div>
    );

    return (
        <div style={innerColckStyle}>
            <h1>{new Date().toLocaleTimeString()}</h1>
        </div>
    );

    //root.render(time);
}

//setInterval(Clock, 1000);

export default Clock;