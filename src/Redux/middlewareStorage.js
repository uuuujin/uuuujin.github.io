import React from "react";
import {createStore, applyMiddleware} from "redux";

const saveToLocalStorage = store => next => action => {
    if (action.meta?.localStorage) {
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
const cancel = store.dispatch({type: 'someAction', meta : {localStorageKey: ''} });
cancel();

export default function middlewareStorage() {
    return <div>미들웨어 로컬 스토리지 </div>;
}