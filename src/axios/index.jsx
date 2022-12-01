import React, {useEffect} from "react";
import axios from 'axios';
import ListBox from "./TextBox/ListBox";

function Axios(props) {
    const getTest = (callback) =>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(
                res => {
                    if (res.status === 200) callback(res.data);
                }
            )
            .catch(
                err => console.log(err)
            )
    }

    useEffect(() => {
        getTest(makeTextInput);
    });

    return getTest(makeTextInput);
}

function makeTextInput(list) {
    console.log({list});
    return (
        <div>
            {list.map((post, index) => {
                return <ListBox key={post.id} post={post}/>
            })}
        </div>
    );
}


export default Axios;