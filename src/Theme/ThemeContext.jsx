import React from "react";

const ThemeContext = React.createContext();
ThemeContext.displayName="ThemeContext";

export default ThemeContext;

//여기에서는 context의 초깃값을 별도로 설정하지 않았고, 
//이후 provider에서는 값을 설정할 예정