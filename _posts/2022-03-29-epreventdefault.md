---
title: e.preventDefault() 이란
layout: post
subtitle: e.preventDefault() 을 알아보자
categories: script
tags:
- script
- javascript
- jquery
---

## e.preventDefault() 이란
html에서 고유의 동작을 중단 시킬 때 사용되는  

e.preventDefault는

보통 우리가 
```
<a href = '어쩌구 저쩌구 도메인'>
``` 
태그 나
```
<input type='submit'>
```

과 같은 태그들은 고유의 동작들을 중단시키는 역할을 한다.


```javascript
document.addEventListener('click', function (e) {
    e.preventDefault()
});
```
Copyright 
이런식으로 click event 에서 e로 사용하는데, 

여기서

## function (e) 란

```javascript
function (e) 
```


function 괄호 열고 e 괄호닫고는(^^) addEventListener에서 

이벤트가 발생했을떄 실행되는 함수에

click 이벤트가 발생하면 이벤트 객체가 생성되고, 

이 이벤트 객체가 e라는 파라미터에 할당 된다.

그래서 이벤트 객체가 필요한 이유는 발생항 이벤트에 관한

정보들이 담겨 우리가 그 정보들을 알 수 있기, 때문에 

이벤트 객체를 이용하여 이벤트 객체의 여러 부분들을 활용 할 수 있다.