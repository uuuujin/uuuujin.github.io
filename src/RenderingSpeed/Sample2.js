/*컴포넌트 함수 내부에서 생성되는
* 함수와 객체에 대해서 알아보기*/

import {useCallback, useState} from "react";

function Parent() {
    const [selectedFruit, setSelectedFruit] = useState('apple');
    const [count, setCount] = useState(0);

    const onChangeFruit = useCallback(fruit => {
        setSelectedFruit(fruit);
        sendLog({
            type : 'fruit change',
            value : fruit
        });
    }, []);

    return (
        <div>
            <p>{`count :  ${count}`}</p>
            <button onClick={() => setCount(count + 1)}>
                increase count
            </button>
            <SelectFruit
                selected = {selectedFruit}
                /*onChange={fruit => setSelectedFruit(fruit)}*/
                /*onChange={setSelectedFruit}*/
                onChange={v => {
                    //...
                    setSelectedFruit(v);
                }}
            />
        </div>
    )
}

/*
Parent 컴포넌트가 상태값 변경에 의해서 렌더링을 할때 자식 컴포넌트도 렌더링을 함.
이 자식 컴포넌트에서 리액트 memo 함수를 사용했다고 했을때.
만약 selected 속성값이 변경되지 않으면 자식 컴포넌트는 렌더링이 되지 않을거라고 생각하기 쉬움
하지만 이렇게 onChange={fruit => setSelectedFruit(fruit)} 함수를 작성하면,
매번 렌더링을 할 때마다 새로운 값이 입력되기 때문에
리액트 memo를 사용했다고 하더라도 이 컴포넌트는 렌더링이 됨.

onChange={setSelectedFruit}
위와 같이 상태값 변경이 주 목적이라면 그냥 상태값 변경 함수를 넣으면 간단하게 해결됨.

onChange={v => {
        //...
        setSelectedFruit(v);
    }}
하지만 이렇게 간단하게 처리하는 것으로 끝나지 않고 뭔가 다른 처리도 더 있다고 하면,
onChange={setSelectedFruit} 이렇게만 쓰긴 어려움
그러땐 useCallback을 사용해서 작성해주면,
이 함수가 필요할때만 변경이 됨.
const onChangeFruit = useCallback(fruit => {
        setSelectedFruit(fruit);
        sendLog({
            type : 'fruit change',
            value : fruit
        });
    }, []);
여기서는 속성값이나 상태값이 사용되지 않았기 때문에 빈배열을 입력했고,
따라서 이함수는 한번 생성된 값으로 고정이 됨.



* */