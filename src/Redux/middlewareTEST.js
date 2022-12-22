
/*
* 미들웨어를 알아보자!!!
*
* 하나의 미들웨어는 아래와 같이 함수이다.
* 
* 화살표 함수가 여러번 사용이 돼서 복잡해 보일 수도 있는데,
* store를 실행하면 뒤에 있는
* next => action => next(action);
* 얘네 들이 반환 됨.
*
* 또 실행하면 최종적으로
* action => next(action);
* 요 함수가 나와서
* next() 라는 것을 호출함.
*
* 이렇게 3번 감싸진 이유는 
* 
* action => next(action); 
* 이쪽 함수에서
*
* store와 next라는 것을 사용하기 위함이다.
*
* 미들웨어를 작성할때 스토어가 필요한 경우가 많이 있음.
* 그래서 이것을 받아서 사용하려고 store => 이렇게 되어있고,
*
* 그리고 next 라는 것도
* 리덕스에서 만들어서 넘겨주는데
* 다음에 호출될 어떤 함수를 넘겨줌.
* 그것을 next(action) 이렇게 호출하도록 되어있음.
*
* */

const myMiddleware = store => next => action => next(action);
