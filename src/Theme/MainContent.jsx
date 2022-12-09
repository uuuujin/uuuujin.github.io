import {useContext} from "react";
import ThemeContext from "./ThemeContext";

function MainContent(props) {
    const {theme, toggleTheme} = useContext(ThemeContext);

    return (
        <div
            style={{
                width : "100vw",
                height : "100vh",
                padding : "1.5rem",
                backgroundColor: theme === "light" ? "white" : "#010080",
                color: theme === "light" ? "#010080" : "white"
            }}
        >
            <p> Hello this is uuuujin github nice to meet you</p>
            <button
                style={{
                    width : "200px",
                    height : "200px",
                    backgroundColor: "#D4D0C7",
                    fontSize:"50px",
                    color: theme === "light" ? "#010080" : "white"
                }}
                onClick={toggleTheme}>change</button>
        </div>
    );
}

export default MainContent;