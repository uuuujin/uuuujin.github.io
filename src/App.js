//import logo from './logo.svg';
import React, {Component} from "react";
import TodoListTemplate from "./component/TodoListTemplate";
import './App.css';
import {render} from "react-dom";


class App extends Component {
  render() {
      return (
       <TodoListTemplate>
         template 완성
       </TodoListTemplate>

      );
    }
}

export default App;
