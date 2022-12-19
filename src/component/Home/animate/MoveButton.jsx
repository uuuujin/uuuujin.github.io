import React from "react";
import "./Button.scss"

export default function MoveButton() {
    return (
        <div className="moveButtonDiv">
            {
                BUTTON_LIST.map(item => (
                    <button
                        key={item.id}
                        id={item.id}
                        className={item.id}
                        onClick={() => {
                            if (item.useYn) {
                                window.location.href = item.link;
                            } else {
                                alert("준비중입니다.");
                            }
                        }}
                    >
                        {item.txt}
                    </button>
                ))
            }
        </div>
    );
}


const BUTTON_LIST = [
    { id: 'photo', link: '/photo', txt: 'Photo', useYn: true},
    { id: 'goAndBack', link: '/goAndBack', txt: 'Go and Back', useYn: false},
    { id: 'test', link: '/test', txt: 'Test', useYn: true},
]