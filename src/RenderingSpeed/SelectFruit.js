import {useMemo} from "react";

function SelectFruit( {selectedFruit, onChange}) {
    const fruits = useMemo(() =>
        FRUITS.filter(item=> item.price <= maxPrice), [
            maxPrice,
        ]);
    return (
        <div>
            <Select
                options={fruits}
                seleted={selectedFruit}
                onChange={onChange}
            />
        </div>
    );
}

const FRUITS = [
                    {name : 'apple', price: 500},
                    {name : 'banana', price: 1000},
                    {name : 'orange', price: 300},
                    {name : 'kiwi', price: 1500},
                ];

/*근데 filter 를 쓰면 또다른 배열이 만들어 지면서 계속 렌더링 되게됨
* 그러땐 useMemo 훅을 이용하면 됨.
* 그렇게 되면 Select박스의 options도 필요할때만 변경이 되는 건데
* useMemo(() =>
        FRUITS.filter(item=> item.price <= maxPrice), [
            maxPrice,
        ]);
  이 안에서 사용하는 속성값이나 상태값을 의존성 배열에 입력하면 됨.
  
  * 여기서는 masPrice라는 상태값을 사용했기 때문에
  * 이값을 의존성 배열에 입력했고, 따라서 masPrice가 변경될때만
  * fruits라는 겂이 변경됨.
  * 
  * 지금 까지 설명한 useMemo나 useCallbck, React.memo같은 것은
  * 미리 성능을 걱정해서 사용하는 것을 추천하진 않음.
  * 성능을 최적화 하는 코드는 가독성이 안좋고
  * 유지보수 비용도 증가함.
  * 성능이슈가 발생했으때 해당하는 부분의 코드만 최적화 하는 것을 추천함.
  * 
  * 지금까지는 값이 너무 자주 변경돼서 성능에 안좋은 영향을 미친
  * 경우를 설명했다면
  * 다음은 값이 변경되야 하는데 변경되지 않아서 문제가 되는 경우 성명
* */


/*
*
* function SelectFruit( {selectedFruit, onChange}) {
    return (
        <div>
            <Select
                options={[
                    {name : 'apple', price: 500},
                    {name : 'banana', price: 1000},
                    {name : 'orange', price: 300},
                    {name : 'kiwi', price: 1500},
                ]}
                seleted={selectedFruit}
                onChange={onChange}
            />
        </div>
    );
}
* */