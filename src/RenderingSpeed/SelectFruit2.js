import {useMemo, useState} from "react";

function SelectFruit( {selectedFruit, onChange}) {
    const [fruits, setFruits] = useState(['apple', 'banana', 'orange']);
    const [newFruit, setNewFruits] = useState('');

    function addNewFruit() {
        fruits.push(newFruit); //-> 이 코드에 의해서 렌더링이 되진 않음.
        //setNewFruits(fruits) -> 이렇게 상태값 변경 함수를 호출해도 렌더링이 되지 않음.
        //왜냐하면 fruits 의 레퍼런스가 변경되지 않았기 때문. 리액트 입장에서는 fruits이 상태값은 변경되지 않은것으로 봄.
        setFruits([...fruits, newFruit]);
        setNewFruits(''); //-> 이 코드에 의해서 렌더링이 됨. 위에 push만 있으면 렌더링이 되지 않음.
    }

    return (
        <div>
            <Select
                options={fruits}
                seleted={selectedFruit}
                onChange={onChange}
            />
            <input
                type="text"
                value={newFruit}
                onChange={e => setNewFruits(e.target.value)}
            />
            <button onClick={addNewFruit}>추가하기</button>
        </div>
    );
}

const FRUITS = [
                    {name : 'apple', price: 500},
                    {name : 'banana', price: 1000},
                    {name : 'orange', price: 300},
                    {name : 'kiwi', price: 1500},
                ];

/*
  * 지금까지는 값이 너무 자주 변경돼서 성능에 안좋은 영향을 미친
  * 경우를 설명했다면
  * 다음은 값이 변경되야 하는데 변경되지 않아서 문제가 되는 경우 성명
  *
  * 만약 select 컴포넌트에서 React.memo를 사용했다면
  * fruits 값이 실제로는 변경 됐음에도 이 값의 레퍼런스는 지금 변경되지 않았기 때문에
  *  <Select
        options={fruits}
        seleted={selectedFruit}
        onChange={onChange}
    /> -> 해당 컴포넌트의 렌더링 결과는 이전 렌더링 결과를 사용하게 됨.
    *
    * 따라서 새로 추가 된 과일이 반영이 안된 상태를 사용하게됨.
    *
    * 따라서 상태값은 이렇게 변경하면 안되고,
    * setFruits([...fruits, newFruit]);
    * 이렇게 새로운 배열을 만들어 줘야 함.
    *
    *
    *
* */

