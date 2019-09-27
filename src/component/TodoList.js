import {observer,inject} from "mobx-react";
import React from "react";
import TodoView from "./TodoView";


@inject("store") @observer 
class TodoList extends React.Component{
    handleClick = () =>{
        const num = Math.floor(Math.random()*10 + 1);
        this.props.store.addTodo(num);
    }
    render(){
       const todos = this.props.store.todos;
       return (
           <div className="todoList">
               <span>come from todoList</span>
               <button onClick={this.handleClick}>add todos</button>
               <TodoView todos={todos} dispatch={this.props.store.completeTask}/>
           </div>
       );
    }
}
export default TodoList;