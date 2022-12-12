import React, {useRef} from "react";
import textBox from "../axios/TextBox/TextBox";

export default function ManyDomRefTest() {
    const boxListRef = useRef({});
    //boxListRef.current = 123;

    function onClickRect() {
        let maxRight = 0;
        let maxId = '';
        for(const box of BOX_LIST) {
            const ref = boxListRef.current[box.id];
            if ( ref ) {
                const rect = ref.getBoundingClientRect();// 그 요소의 사각형의 정보를 알 수 있음.
                console.log(rect);
                if (maxRight < rect.right) {
                    maxRight = rect.right;
                    maxId = box.id;
                }
            }
        }
        alert(`오른쪽 끝 요소는 ${maxId}입니다.`);
    }

    return (
        <div>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                width: '100vw',
                height:'100%'
            }}>
                {BOX_LIST.map(item => (
                    <div
                        key={item.id}
                        ref={ref => (boxListRef.current[item.id] = ref)}
                        style={{
                        flex : '0 0 auto',
                        width: item.width,
                        height: 100,
                        backgroundColor: 'yellow',
                        border: 'solid 1px red',
                    }}>
                        {`box_${item.id}`}
                    </div>
                ))}
            </div>
            <button onClick={onClickRect}> 오른쪽 끝 요소는?</button>
        </div>
    )
}

const BOX_LIST = [
    {id: 1, width: 70},
    {id: 2, width: 100},
    {id: 3, width: 80},
    {id: 4, width: 100},
    {id: 5, width: 90},
    {id: 6, width: 60},
    {id: 7, width: 120},
];

// box list를 렌더링 boxlist는 동적일수 있다고 생각해보자.
// 그럴떈 useRef를 사용하기가 애매함.
//  useRef()를 계속 늘릴수 없음.
// 그리고 훅 규칙에서도 있다 시피 훅을 사용하는 개수를 같아야함.
// 지금까지는 ref 객체에 실제 돔의 요소나 아니면 컴포넌트의 인스턴스를 참조하는 용도로 사용을 했는데,
// 사실 이 ref 객체에는 원하는 값이면 어떤값이든 저장 할 수 있다.
// 그리고 useRef를 호출 할때 매개변수에 이렇게 useRef(123); 초기밧을 넣어 줄 수도 있다.
// 그러면 current 에 기본적으로 초기값이 들어가 있다. ex -> 123;


