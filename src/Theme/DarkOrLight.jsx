import {useState, useCallback} from "react";
import ThemeContext from "./ThemeContext";
import MainContent from "./MainContent";

function DarkOrLight(props){
     const [theme, setTheme] = useState("light");

     const toggleTheme = useCallback(() => {
        if (theme === "light") {
            setTheme("dark");
        } else if (theme === "dark") {
            setTheme("light")
        }
     }, [theme]);

     return (
         <ThemeContext.Provider value={{ theme, toggleTheme}}>
             <MainContent />
         </ThemeContext.Provider>
     );
}

export default DarkOrLight;
//DarkORLight 함수 컴포넌트는  MainContent 컴포넌트를 자식으로 갖고 있는데,
//이를 ThemeContext.Provider로 깜싸서 Context의 값을 하위 컴포넌트들이
//사용할 수 있도록 해줌.

// 만약 ThemeContext.Provider로 감싸주지 않으면 하위 컴포넌트들이 ThemeContext의 값을 가져올수 없음.

