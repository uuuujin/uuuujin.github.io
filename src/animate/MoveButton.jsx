import React from "react";
import "./Button.scss"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function MoveButton() {

     const clickEvent = () =>  {
        //window.location.replace('/' + link);

         //window.location.replace('/link');
         //Router.push('/');
    }

    return (
        <div className="moveButtonDiv">
            {
                BUTTON_LIST.map(item => (
                    <button
                        key={item.id}
                        id={item.id}
                        className={item.id}
                        onClick={clickEvent(item.link)}
                    >
                        {item.txt}
                    </button>
                ))
            }
            {/*<button className="photo">photo</button>*/}
            {/*<button className="goAndBack">go and back</button>*/}
        </div>
    );


}

const BUTTON_LIST = [
    { id: 'photo', link: '/photo', txt: 'Photo'},
    { id: 'goAndBack', link: '/goAndBack', txt: 'Go and Back'},
    { id: 'test', link: '/test', txt: 'Test'},
]