import React, {useEffect, useReducer} from "react";
import store from "../../common/store";
import {getNextTimeline} from "../../common/mockData";
import {addTimeline} from "../state";
import TimeLineList from "../component/TimeLineList";

export default function TimeLineMain() {
    const [, forceUpdate] = useReducer((v) => v +1, 0);

    useEffect(() => {
        const unsubscribe = store.subscribe(() => forceUpdate());
        return () => unsubscribe();
    }, []);

    function onAdd() {
        const timeline = getNextTimeline();
        store.dispatch(addTimeline(timeline));
    }

    console.log("TimelineMain render");

    const timelines = store.getState().timeline.timelines;

    return (
        <div>
            <button onClick={onAdd}>타임라인 추가</button>
            <TimeLineList timelines={timelines} />
        </div>
    )
}