import React from "react";


function ListBox(list){
    return (
        <div style={{
            backgroundColor: 'beige'
        }}>
            <b style={{
                color: "red",
            }}>
                {list.post.id}
            </b>

            <p id={list.post.id}>title : <b>{list.post.title}</b></p>

            <div>
                <blockquote>{list.post.body}</blockquote>
            </div>

        </div>
    )
}

export default ListBox;