import React, {useEffect, useReducer} from "react";
import store from "../../common/store";
import {getNextTimeline} from "../../common/mockData";
import {addTimeline} from "../state";
import TimeLineList from "../component/TimeLineList";

export default function TimeLineMain() {
    const [, forceUpdate] = useReducer((v) => v +1, 0);

    useEffect(() => {
        let prevTimelines = store.getState().timeline.timelines;
        const unsubscribe = store.subscribe(() => {
            const timelines = store.getState().timeline.timelines;
            if (prevTimelines !== timelines) { // 다를때만 렌더링
                forceUpdate();    
            }
            prevTimelines = timelines; // 이전 타임라인 데이터를 갱신.
        });
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