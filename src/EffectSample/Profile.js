import React, {useEffect, useId, useReducer, useState} from "react";

export default function Profile() {

    return (
        <div>
            <Profilefhdskfljdksa/>
            실전 리액트 <ProfileFuc  />
        </div>
    )
}
function ProfileFuc( {userId}) {
    const [user, setUser] = useState();
    const [needDetail, setNeedDetail] = useState(false);

    useEffect(() => {
        fetchUser(userId, needDetail).then(data=> setUser(data));
    }, [userId, needDetail]);

    useEffect(() => {
        async function fetchAndSetUser(needDetail) {
            const data = await fetchUser(userId, needDetail);
            setUser(data);
        }
        fetchAndSetUser(fetchAndSetUser())
    },[userId]);

    console.log(user, needDetail);

    return  null;
}

function fetchUser(){

}


// 부수효과 함수 안에서 사용된 상태값이나 속성값 또느 그 두가지 값으로 계산된 어떤 값이 있을때
// 그것을 부수 효과 함수 안에서 사용했다면 항상 그 값은 의존성 배열에 나열을 해줘야 함.
// 예를 들어 fetchUser의 매개 변수가 userId 말고 다른 값이 추가 되었다고 쳤을때,
// 그 매개변수를 useState 상태값으로 관리한다고 치면,
// 상태값이기 때문에 의존성배열에 추가해야하는데,
// 기존에 있는 부분을 추가할때는 의존성 배열에 입력하는 것을 깜빡하는 경우가 종종 발생함.
// 리액트 팀에서는 이 문제를 해겷하기 위해
// eslint 에서 사용할수 있는 룰을 만들어서 제공.
// 그 룰을 사용하면 잘못 사용된 의존성 배열을 찾아서 자동으로 알려줌.
// 의존성 배열에서 실수하는 경우가 많기 때문에 그 부분을 사용하는걸 추천한다고 함.
// create-react-app에는 기본적으로 추가되어있음.

// async await 함수는 Promise 객체를 반환하기 때문에 부수효과 함수가 될수 없음.
// 부수효과 함수는 함수만 반환할 수 있음.
// 반환된 함수는 부수효과 함수가 호출되기 직전과 컴포넌트가 사라지기 직전에 호출 됨.
// 함수를 하나 만들어서 호출해 주는 방식을 사용해야함.


//가능하면 의존성배열을 사용하지 않는 것이 좋음. -> 의존성 배열을 관리하는데 생각보다 많은 시간과 노력이 들어감.
// 속성값으로 전달되는 함수를 의존성 배열에 넣는 순간 
// 그 함수는 부모 컴포넌트에서 useCallback 등을 사용해서
// 자주 변경되지 않도록 신경써서 관리를 해야하기 때문.

// 의존성 배열을 입력하지 않는 대신 부수효과 함수 내에서 실행 시점을 조절할 수 있음.
/*
useEffect(() => {
   if (!user || user.id !== userId) {
       fetchAndSetUser(false);
   }
});
*/
// 이렇게 부수효과 함수 내에서 실행 시점을 조절 할 수 있다.
// 함수의 실행 시점을 의존성 배열로 관리 하지 않고 부수효과 함수 내에서 처리를 하면
// 부수효과 함수 내에서 사용하느 모든 변수는 최신화된 값을 참조하므로 안심할 수 있음.
// fetchAndSetUser 는 useCallback 과 같은 함수를 사용하지 않아도 됨.


/* 예제 코드 시간의 세가지 부분을 상태값으로 관리 , 시 분 초*/
function Timer ( {initialTotalSeconds}) {
    const [hour, setHour] = useState(Math.floor(initialTotalSeconds / 3600));
    const [minute, setMinute] = useState(
        Math.floor((initialTotalSeconds % 3600) / 60),
    );
    const [second, setSecond] = useState(initialTotalSeconds % 60);

    useEffect(() => {
        const id = setInterval(() => {
           if (second) {
               setSecond(second - 1);
           } else if ( minute) {
               setMinute(minute - 1);
               setSecond(59);
           } else if (hour) {
               setHour(hour - 1);
               setMinute(59);
               setSecond(59);
           }
        }, 1000);
        return () => clearInterval(id);
    }, [hour, minute, second]);
}

// useEffect 부수 효과 함수 안에서 1초에 한번씩 시간을 업데이트 하고 있음.
// 의존성 배열에 [hour, minute, second] 3가지 상태값을 넣음.
// 여기서 setInterval 을 사용한게 무색하게
// 1초마다 clearInterval 이 호출되고,
// 다시 setInterval을 호출 하게 됨.
// 왜냐하면 매초마다 업데이트 되기 때문에.
// => 이런 경우 효율적으로 변경하기 위해서는 (여러 상태값을 보면서 변경할때는)
// useReducer 훅을 사용하는게 좋음.
// dispatch 함수는 변하지 않는 값이므로 의존성 배열로 빈 배열을 입력했다고 생각할 수 있음.

/* useReducer를 사용하여 다시 예저 코드 작성*/

function TimerBetter ( {initialTotalSeconds}) {
    const [state, dispatch] = useReducer(reducer, {
        hour : Math.floor(initialTotalSeconds / 3600),
        minute : Math.floor((initialTotalSeconds % 3600) / 60),
        second : initialTotalSeconds % 60,
    })
    const { hour, minute, second} = state;
    useEffect(() => {
        const id = setInterval(dispatch, 1000);
        return () => clearInterval(id);
    });
}

function reducer (state) {
    const { hour, minute, second} = state;
     if (second) {
           return {...state, second: second - 1};
     } else if ( minute) {
         return {...state, minute: minute - 1, second: 59};
    } else if (hour) {
         return { hour : hour - 1, minute: 59, second : 59};
    } else {
         return state;
     }
}



