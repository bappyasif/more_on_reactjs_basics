import React, {Component} from "react";
import { TodoItem } from "./TodoItem";
import {todosData} from "../todosData";

export class ContainerForPhaseFive extends Component {
    constructor() {
        super();
        this.state = {
            todosData: todosData
        }
    }
    render() {
        // console.log("imported:",todosData, "state:",this.state.todosData);
        let todos = this.state.todosData.map(todo => <TodoItem key={todo.id} item={todo} />);
        return(
            <fieldset className="todo-list">
                {todos}        
            </fieldset>
        )
    }
}