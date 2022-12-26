import React from "react";
import {createStore, applyMiddleware} from "redux";

const saveToLocalStorage = store => next => action => {
    if (action.meta?.localStorageKey) {
        localStorage.setItem(action.meta?.localStorageKey, JSON.stringify(action));
    }
    return next(action);
}

const myReducer = (state = {name : 'ujin'}, action) => {
    console.log('myReducer');

    if (action.type === 'someAction') {
        return {name : 'ujin2'}
    }
    return state;
}

const store = createStore(myReducer, applyMiddleware(saveToLocalStorage));
store.dispatch({
    type: 'someAction', 
    title : '따이툴',
    meta : {localStorageKey: 'MY_KEY'}
});

export default function middlewareStorage() {
    return <div>미들웨어 로컬 스토리지 </div>;
}