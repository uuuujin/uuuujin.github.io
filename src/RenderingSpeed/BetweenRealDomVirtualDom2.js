import React from "react";

export default function BetweenRealDomVirtualDom2() {
    return (
        <div>
            <p>사용자 상세 정보</p>
            <UserDetail key={user.id} user={user}/>
        </div>
    )
}

function UserDetail({user}) {

}

/*
* key를 이용해서 의도적으로 컴포넌트를 언마운트 시키는게 유용할때가 있음.
*
* UserDetail요 컴포넌트에서 관리하는 상태값이 있다고 할 때
* 그 상태값들은 사실 해당 유저에 대한 상태값일 것이다.
* 그래서 만약 유저 데이터가 변경 됐을때
*
* 사용자 자체가 변경 됐을때는
*
* UserDetail에서 유지하는 상태 값을 초기화 하고 싶을 수 있음.
*
* 그럴때는 이 컴포넌트의 key로 유저의 id를 입력하면
* <UserDetail key={user.id} user={user}/>
* 이 컴포넌트는 유저가 변경 됐을때,
* 상태값이 모두 초기화 됨.
*
*
*
* */