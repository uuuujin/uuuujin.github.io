import React, {useEffect, useReducer} from "react";
import store from "../../common/store";
import {getNextFriend} from "../../common/mockData";
import {addFriend} from "../state";
import FriendList from "../component/FriendList";

export default function FriendMain() {
    const [, forceUpdate] = useReducer(v => v +1, 0);

    /*여기서 friends 데이터가 변경 됐을때만 호출 되도록 변경해야함.
    * 안그래서 친구 추가해도 타임라인 쪽도 같이 렌더링 되고 있음.
    * 이전 프렌즈 데이터를 저장*/
    useEffect(() => {
        let prevFriends = store.getState().friend.friends;

        const unsubscribe = store.subscribe(() => {
            const friends = store.getState().friend.friends;
            if (prevFriends !== friends) {
                forceUpdate();
            }
            prevFriends = friends; //이전 데이터를 갱신
        });
        return () => unsubscribe();
    }, []);

    function onAdd() {
        const friend = getNextFriend();
        store.dispatch(addFriend(friend));
    }

    console.log("FriendMain render");

    const friends = store.getState().friend.friends;

    return (
        <div>
            <button onClick={onAdd}>친구 추가</button>
            <FriendList friends={friends} />
        </div>
    )
}