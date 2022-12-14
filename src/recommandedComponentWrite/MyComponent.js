/*
MyComponent.propsTypes = {
    // prop-types -> 패키지가 있음
};
//-> 속성값 타입 정보를 입력하기!
// 컴포넌트를 사용하는 입장에서 생각해보면 컴포넌트를 사용하는 사람 입장에서는 사용할때
// 속성값을 입력해야함.
// 그때 올바른 값을 입력하려면 타입 정보를 제대로 알아야함.
// 그래서 컴포넌트 파일을 열었을 때 가장 상단에 있는게 빠르게 확인 할 수 있는 좋으 방법이다.
// 그리고 컴포넌트 작성자 입장에서도 속성값 타입은 다른 어떤 코드 못지 않게 중요하다.
// 따라서 이렇게 속성 값 타입 정보를 파일 상단에 작성해 줌.

// ({ prop1, prop2})  -> 명명된 매개변수로 작성하는게 좋음.
export default function MyComponent ({ prop1, prop2}) {

}

// 컴포넌트 바깥에 있는 변수와 함수는 파일의 가장 밑에 정의하는게 좋음.
// 중요도에서 속성갑 타입과 컴포넌트 코드 보다는 밀리기 때문.
// 그리고 변수명은 대문자로 작성하는게 좋음 -> 그래야 컴포넌트 코드 안에서 다른 코드와 섞여 있을때 외부 변수라는 것이 한눈에 파악됨.

const COLUMNES = [
    {id : 1, name: 'phoneNumber', width: 200, color: 'white'},
    {id : 1, name: 'city', width: 100, color: 'grey'}
];

const URL_PRODUCT_LIST = '/api/products';

function getTotalPrice({price, total}) {

}


*/

/*
type의 중요성!!
가능하면 정적 타입 언어를 사용하는게 좋음.
*/
