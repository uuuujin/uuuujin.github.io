import React, {createContext, useContext, useState} from "react";


const UserContext = createContext('unknown');
const ThemeContext = createContext('dark');

export default function ContextTest() {
    const [name, setName] = useState('context test 초기값');
    const [age, setAge] = useState(0);
    const [count, setCount] = useState(0);
    console.log("constext test rendeer");

    return (
        <div>
           <ThemeContext.Provider value="light">
               <UserContext.Provider value={name}>
                <div> 상단 메뉴 </div>
                <Profile />
               <button onClick={() => setCount(count + 1)}>증가</button>
                <div> 하단 메뉴 </div>
                <input
                    type="text"
                    value={name}
                    onChange={e=> setName(e.target.value)}
                />
            </UserContext.Provider>
           </ThemeContext.Provider>
        </div>
    )
}

const Profile = React.memo(function() {
    console.log("profile render");
    return (
        <div>
            <Greeting/>
        </div>
    )
});

function Greeting () {
    // ... 여기서는 username 값을 사용할 수 없음. 훅을 이용하면 간편하게 쓸수 있음.
    const username = useContext(UserContext);
    const theme = useContext(ThemeContext);
    return (
        <p style={{
            color: theme === "dark" ? "gray" : "green"
        }}>
            {`${username}님 안녕하세요.`}
        </p>
    );
        // <UserContext.Consumer>
        //     { (username) => <p>{`${username}님 안녕하세요.`}</p>}
        // </UserContext.Consumer>

}

//이 때 Profile 컴포넌트가 렌더링 되지 않아도 실제로 Consumer 컴포넌트가 잘 렌더링이 되는지 확인해보면
