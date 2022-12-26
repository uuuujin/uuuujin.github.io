import React from "react";
import {
    addTimeline,
    removeTimeline,
    editTimeline,
    increaseNextPage
} from "./timeline/state";
import {
    addFriend, removeFriend, editFriend
} from "./friend/state";
import store from "./common/store";

store.dispatch(addTimeline({id: 1, desc : '코딩은 즐거워'}));
store.dispatch(addTimeline({id: 2, desc : '리덕스 좋지만 잘 모르겠음.'}));
store.dispatch(increaseNextPage());
store.dispatch(editTimeline({id : 2, desc: '리덕스 잘 알고 싶다.'}));
store.dispatch(removeTimeline({id : 1, desc : '코딩은 즐거워'}));

store.dispatch(addFriend({id : 1 , name : '브로콜리 너마저'}));
store.dispatch(addFriend({id : 2 , name : '검정치마'}));
store.dispatch(editFriend({ id : 2, name : '너드커넥션'}));
store.dispatch(removeFriend({id : 1 , name : '브로콜리 너마저'}));

export default function Index() {
    return <div> 리액트 리덕스 애플리케이션 테스트 </div>;
}
