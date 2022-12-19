import React from "react";

export default function Top() {
    return (
        <div className="topArea">
            <div className="left">{/*제목, 코멘트 수정버튼*/}
                <div>Title</div>
                <div>Comment</div>
            </div>
            <div className="right">
                <img
                    src="https://avatars.githubusercontent.com/u/92841646?v=4"
                    alt="profile"/>
            </div>
        </div>
    )
}