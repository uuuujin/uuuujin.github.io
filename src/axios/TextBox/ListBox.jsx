import React from "react";

function ListBox(props){
    return (
        <div>
            <p id={props.id}>제목 : {props.title}</p>
            <input value={props.body} />
        </div>
    )
}

export default ListBox;