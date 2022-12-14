import PropTypes from "prop-types";

MyComponent.propTypes = {
    //리액트 요소
    // <div>hello</div> => 참
    // <SomeComponent /> => 참
    // 123 => 거짓
    menu : PropTypes.element,
    /* element는 리액트 요소를 의미 함
    * */


    //컴포넌트 함수가 반환 할수 있는 모든 것
    // number, string, array, element, ...
    // <SomeComponent /> => 참
    // 123 => 참
    description : PropTypes.node,
    /* node 는 리액트 요소 뿐만 아니라 리액트 컴포넌트가 반환 할 수 있는 모든 값을 의미
    * */

    
    // Message 클래스 생성된 모든 객체
    // new Message() => 참
    // new Car() => 거짓
    message : PropTypes.instanceOf(Message),
    /* instanceOf는 특정 클래스의 객체인지 검사 함.
    * */
    
    
    //배열에 포함된 타입중 하나를 만족
    // 'jone' => 참
    // 'messy' => 거짓
    name : PropTypes.oneOf(['jone', 'mike']),

    
    //배열에 포함된 타입중 하나를 만족
    // 123 => 참
    // 'messy' => 참
    width : PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    
    
    // 특정 타입만 포함하는 배열
    // [1, 5, 7] => 참
    // ['a', 'b'] => 거짓
    ages: PropTypes.arrayOf(PropTypes.number),
    /* arrayOf는 이 타임으로 이루어진 array
    * */

    
    // 객체의 속성값 타입을 정의
    // {color: 'red', weight : 123} => 참
    // {color : 'red', weight: '123kg'} => 거짓
    info: PropTypes.shape({
        color : PropTypes.string,
        weight: PropTypes.number,
    }),
    /* shape은 객체 타입을 의미.
    * */


    // 객체에서 모든 속성값의 타입이 같은 경우
    // {prop1 : 123, prop2 : 456} => 참
    // {prop1 : 'red', prop2: 123}=> 거짓
    infos : PropTypes.objectOf(PropTypes.number),
    /* objectOf는 속성 이름에는 관심이 없고, 각 속성의 value 타입이 number 이다
    라고 정의 한것이다.
    * */
    
};