---
title: Laravel에서 Trying to get property 'headers' of non-object 에러
layout: post
subtitle: 라라벨에서 headers non-objectd 에러 에 대해서 알아보자
categories:
- laravel
- php
tags:
- php
- laravel
- laravel middleware
- jekyll
- 라라벨
- 미들웨어
---

## Laravel middleware returning (Trying to get property 'headers' of non-object) error

## Trying to get property 'headers' of non-object
미들웨어에서는 모든 경우를 처리하고, 그에 따라 어디로 어떻게 값을 보낼지 return 시킬지, 그에 따라 redirection을 반환하거나 중단하는 것이 중요하다고 들었다.

return $next($request); 
시스템이 요청을 계속 처리 하도록 허용하는 경우 수행한다.

public function handle의 내부의 
Auth::check()의 조건이 맞지 않을 경우에는
시스템이 어떻게 작동해야 하는지 예외처리를 걸지 않은 경우가 많다.

이때 
Laravel middleware returning 
(Trying to get property 'headers' of non-object) error)
이러한 오류가 나는 경우가 더러 발생한다.


## abort(403)   
를 사용할 수 있는데,

abort()는

HTTP 예외-exception는
서버에서 발생하는 HTTP 에러 코드를 나타낸다. 
예를 들어서 404 같은 페이지 로드에 실패한 오류나 
401-인증오류
500-서버 오류 등이 있고, 
애플리케이션의 어느곳에서든 이같으 응답을 반환하려면 
abort(404); 와 같이 사용 할 수 있다.

선택적으로 응답의 텍스트를 지정할 수 도 있다.
