import React from "react";

import useChangAppState, {
    STATE_START,
    STATE_RUNNING
} from "./DebugValueTest";

export default function DebugValueTestApp() {

    const [state, next]  = useChangAppState(true);

    const message =
        state === STATE_START
    ? '앱 시작'
            : state === STATE_RUNNING
    ? "앱 실행 중"
            : "앱 종료";


    return (
        <div>
            <p>{message}</p>
            <button onClick={next}>NEXT!!!!!!</button>
        </div>
    );
}