import React from "react";

export default function TimeLineList({timelines}) {
    return (
        <ul>
            {timelines.map(timeline => (
                <li key={timeline.id}>{timeline.desc}</li>
            ))}
        </ul>
    )
}