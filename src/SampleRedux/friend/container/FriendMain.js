import React from "react";
import store from "../../common/store";
import {getNextFriend} from "../../common/mockData";
import {addFriend, setAgeLimit, setShowLimit} from "../state";
import FriendList from "../component/FriendList";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import NumberSelect from "../component/NumberSelect";
import {MAX_AGE_LIMIT, MAX_SHOW_LIMIT} from "../common";

export default function FriendMain() {
    const [
        ageLimit,
        showLimit,
        friendsWithAgeLimit,
        friendsWithAgeShowLimit
    ] = useSelector(state => {
        const {ageLimit, showLimit, friends} = state.friend;
        const friendsWithAgeLimit = friends.filter(item => item.age <= ageLimit);
        return [
            ageLimit,
            showLimit,
            friendsWithAgeLimit,
            friendsWithAgeLimit.slice(0, showLimit)
        ];
    }, shallowEqual);

    const dispatch = useDispatch();

    function onAdd() {
        const friend = getNextFriend();
        store.dispatch(addFriend(friend));
    }

    console.log("FriendMain render");

    return (
        <div>
            <button onClick={onAdd}>친구 추가</button>

            <NumberSelect
                onChange={v => dispatch(setAgeLimit(v))}
                value={ageLimit}
                options={AGE_LIMIT_OPTIONS}
                postfix="세 이하만 보기"
            />
            <FriendList friends={friendsWithAgeLimit}/>
            <NumberSelect
                onChange={v => dispatch(setShowLimit(v))}
                value={showLimit}
                options={SHOW_LIMIT_OPTIONS}
                postfix="명 이하만 보기 (연량 제한 적용)"
            />
            <FriendList friends={friendsWithAgeShowLimit}/>
        </div>
    )
}

const AGE_LIMIT_OPTIONS = [40, 51, 60, MAX_AGE_LIMIT];
const SHOW_LIMIT_OPTIONS = [2, 4, 6, MAX_SHOW_LIMIT];

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