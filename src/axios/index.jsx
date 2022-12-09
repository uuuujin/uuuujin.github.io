import React, {useEffect, useState} from "react";
import axios from 'axios';
import ListBox from "./TextBox/ListBox";

function Axios(props) {
    let [lists, setLists] = useState([]);

    useEffect(() => {
        getTest();
    },[]);

    const getTest = () =>{
        //axios.get("http://stothej.dothome.co.kr/api/searchstudy.php?keyword=Web")
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(
                res => {
                    if (res.status === 200)
                        console.log(res.data)
                        setLists(res.data);
                        //makeTextInput();
                }
            )
            .catch(
                err => console.log(err)
            )
    }

    return (
        <div>
            {lists.map((post, index) => {
                return <ListBox key={post.id} post={post}/>
            })}
        </div>
    );

}


//
// function makeTextInput(list) {
//     console.log('make text 왜 안됨.')
//     console.log({list});
//     return (
//         <div>
//             {lists.map((post, index) => {
//                 return <ListBox key={post.id} post={post}/>
//             })}
//         </div>
//     );
// }


export default Axios;