import React from "react";
import store from "../../common/store";
import {getNextFriend} from "../../common/mockData";
import {addFriend} from "../state";
import FriendList from "../component/FriendList";
import {useDispatch, useSelector} from "react-redux";

export default function FriendMain() {
    const friends = useSelector(state => state.friend.friends);
    const dispatch = useDispatch();

    function onAdd() {
        const friend = getNextFriend();
        store.dispatch(addFriend(friend));
    }

    console.log("FriendMain render");

    return (
        <div>
            <button onClick={onAdd}>친구 추가</button>
            <FriendList friends={friends} />
        </div>
    )
}

/*

리덕스에서 데이터를 가져올때는 useSelector 훅을 사용
여기에 선택자 함수를 입력.

선택자 함수는 리덕스의 상태값이 매개변수로 넘어오고
여기서 우리가 사용하려고 하는 데이터를 가져오면 됨.

const friends = useSelector(state => state.friend.friends);
이 함수가 반환하는 값이 그대로 이 훅의 반환값이 됨.

그리고 기존에 dispatch를 호출할때
스토어를 가져와서 호출을 했음.
이제는 useDispatch 훅을 이용하면 됨.

dispatch를 훅으로 가져온다는 건 const dispatch = useDispatch();
이값이 변할 수도 있다는 얘기 기도 함.

사실 거의 변할 일은 없지만,
중간에 미들웨어를 새로 추가하거나 하면 아마 dispatch가 변경 될 엔테

* */