import React from "react";
import TimelineMain from "./timeline/container/TimeLineMain";
import FriendMain from "./friend/container/FriendMain";
import {Provider} from "react-redux";
import store from './common/store';

export default function Index() {
    return (
        <Provider store={store}>
            <div>
              <FriendMain />
              <TimelineMain />
            </div>
        </Provider>
    );
}


/*
* Provider 컴포넌트에서는 리액트에서 액션이 처리가 됐을때
* 이벤트를 받아서 하위에 있는 다른 컴포넌트가 다시 렌더링 될 수 있도록 도와줌.
* */