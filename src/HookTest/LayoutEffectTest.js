import React, {useLayoutEffect, useRef, useState} from "react";

export default function LayoutEffectTest(){
    const [width, setWidth] = useState(100);
    const boxRef = useRef();

    // useEffect(() => {//너비가 500 을 초과하면 500을 입력하도록 설정
    //     if (width > 500) {
    //         setWidth(500);
    //     }
    // }, [width]);


     useLayoutEffect(() => {//너비가 500 을 초과하면 500을 입력하도록 설정
         console.log(boxRef.current.getBoundingClientRect().width)
        if (width > 500) {
            setWidth(500);
        }
        let v = 0;
        for (let i = 0; i < 1000000000; i++) {
            v += i * 2 + i;
        }// => 이렇게 연산량이 많은 작업을 useLayoutEffect 안에서 실행하면 사용자는 버벅이는 느낌을 받을 수 있음.
         //그래서 성능상 useEffect 사용하는게 좋음.
        console.log(v);
    }, [width]);



    return (
        <div>
            <div ref={boxRef}
                 style={{ width, height : 100, backgroundColor: 'greenyellow'}}>
                test
            </div>

            <button
                onClick={() => {
                    const value = Math.floor(Math.random() * 499 + 1);
                    setWidth(value);
                }}
            > 500 이하</button>
            
            <button
                onClick={() => {
                    const value = Math.floor(Math.random() * 500 + 501);
                    setWidth(value)
            }}> 500 이상</button>

        </div>
    );
}

/*
*  useEffect(() => {//너비가 500 을 초과하면 500을 입력하도록 설정
        if (width > 500) {
            setWidth(500);
        }
    }, [width]);
   -> 이렇게 사용하면 500 이상을 누르면서 깜빡거리는 현상이 발생하는데,
   * 그 이유는
   * 500보다 큰 값이 입력 됐을 때 그 값이 렌더링이 된 후에
   * useEffect가 실행이 되면서 500으로 다시 한번 렌더링을 하기 때문에
   * 500보다 큰값으로 렌더링을 했다가 다시 500으로 렌더링을 하는 과정에서 깜빡이는 것!!!!
   *
   * 이럴때 useLayoutEffect를 사용하면 이 문제를 해결 할 수 있음.
*
*
*
*
* useLayoutEffect(() => {//너비가 500 을 초과하면 500을 입력하도록 설정
        if (width > 500) {
            setWidth(500);
        }
    }, [width]);
    *
    * 실행되는 시점 !!!
    *  => 리액트가 렌더링을 하고 실제 돔에 반영은 했지만
    * 브라우저가 화면을 그리기 전에 이 코드가 실행 됨 => 동기로 실행됨.
    * 그때 리액트느 500으로 다시 렌더링을 하고,
    * 그때서야 브라우저가 화면을 그리게 됨.
    *
    *
* */