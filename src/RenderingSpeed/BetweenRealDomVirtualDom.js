//가상돔과 실제 돔 부분에서 성능을 최적화 하는 방법을 알아보자


import React, {useEffect, useState} from "react";

export default function BetweenRealDomVirtualDom() {
    const [flag, setFlag] = useState(true);

    useEffect(() => {   //flag라는 상태값을 1초마다 변경
        setTimeout(() => {
            setFlag(prev => !prev);
            console.log(flag);
        }
        , 1500);
    });

    // return (
    //     <div className={flag ? 'yes' : 'no'}
    //          style={{color : 'black', backgroundColor: flag ? '#ffaaaa' : '#aaffaa'}}
    //     >
    //           <Counter/>
    //           <p>사과</p>
    //           <p>바나나</p>
    //     </div>
    // )

    // if (flag) {
    //     return (
    //         <div>
    //             <Counter/>
    //             <p>사과</p>
    //             <p>바나나</p>
    //         </div>
    //     );
    // } else {
    //     return (
    //         <span>
    //             <Counter/>
    //             <p>사과</p>
    //             <p>바나나</p>
    //         </span>
    //     );
    // }

    if (flag) {
        return (
            <div>
                <p key="apple">사과</p>
                <p key="banana">바나나</p>
            </div>
        );
    } else {
        return (
            <div>
                <p key="apple">사과</p>
                <p key="pineapple">파인애플</p>
                <p key="banana">바나나</p>
            </div>
        );
    }
}

function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const id = setTimeout(() => setCount(prev => prev + 1 ), 100);
        return () => clearTimeout(id);
    });

    return <p>count : {count}</p>;
}

/*
* flag 에 따라서 div, span 이렇게 렌더링을 하고 있음.
* children 부부은 같고 부모의 tag가 다름.
* 이렇게 요소의 타입을 변경하면 해당 요소의 모든 자식 요소도 같이 변경됨.
* 자식 요소가 컴포넌트라면 (ex : <Counter/>) 해당 컴포넌트는 언마운트 되고 다시 마운트가 됨.
* 그러면서 상태값도 초기화가 됨. -> const [count, setCount] = useState(0); 요부분 처럼.
* 그리고 자식 요소가 돔 요소라면 이 돔 요소가 실제 돔에서 삭제되고 다시 추가 될 것임.
* 따라서 자식 요소가 많은 요소의 타입을 변경하면 화면이 끊기는 느낌이 들수 있음.
*
* */



/*
    if (flag) {
        return (
            <div>
                <p>사과</p>
                <p>바나나</p>
            </div>
        );
    } else {
        return (
            <div>
                <p>사과</p>
                <p>파인애플</p>
                <p>바나나</p>
            </div>
        );
    }
    -> 이렇게 파인애플을 중간에 추가하면 아래 바나나까지 영향을 받음
    리액트는 중간에 요소를 추가하면 그뒤에 있는 요소가 변경되지 않았다는 것을 알지 못함.
    바나나가 변경되지 않았다는 것을 알기 위해서는 모든 값을 비교해야 하는데
    그러면 연산량이 꽤 많게 됨.
    
    그렇게 되면 수많은 비교 연산 때문에 배보다 배꼽이 더 커질 수 있음.
    
    리액트는 효율적으로 연산하기 위해서 순서 정보를 이용함.

    처음에 if 문 상태에서 else 문 상태로 변경될 때

    첫번째 요소는 변함이 없고

    두번째 요소는 <p>바나나</p> 가 <p>파인애플</p>로 된 것임.
    
    그래서 리액트는 바나나문구를 파인애플로 변경함

    그 다음에 바나나를 추가하는 것이다.

    하지만 가장 좋은건 사과와 바나나 사이에 파인애플을 추가하는 것인데, key 속성값을 이용하면
    파인애플만 실제 돔에 추가 할수 있음.

    우리가 key 속성 값을 입력하면 리액트는 같은 key를 갖는 요소끼리만 비교함.
    따라서 리액트는 바나나 요소가 변경되지 않았다는 것을 알고 있음.

    파인애플 요소는 새로 추가 되었으므로 실제 돔에는 파인애플 요소만 추가됨.

    key 속성값은 react가 렌더링을 효율적으로 할 수 있도록 우리가 제공하는 추가 정보이다.
    대부분의 데이터는 id 값이 있는데, 그 값을 key 속성값에 입력하는 것이 좋음.

    만약 key 속성값에 입력할 만한 값이 없다면 차선책으로 배열내에서의 순서 정보를 입력해야함.
    하지만 배열 중간에 원소를 추가하거나 삭제하는 경우 또는 원소의 순서를 변경하는 경우에는
    비율적으로 렌더링하게 됨.
    -> 따라서 key 속성값에 순서 정볼를 입력하는 것은 배열의 끝에서만 원소를 추가하거나 삭제하면서
    원소의 순서를 변경하지 않는 경우에만 적합함.


        
*/