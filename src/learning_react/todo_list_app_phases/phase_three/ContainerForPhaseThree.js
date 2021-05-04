import React from "react";
import { TodoItem } from "./TodoItem";
import { todosData } from "../todosData";

export function ContainerForPhaseThree() {
  let todos = todosData.map((todo) => (
    // <TodoItem key={todo.id} text={todo.text} done={todo.completed} />
    <TodoItem key={todo.id} item={todo} />
  ));
  return (
    <div>
      <p>Todo List Phase Three</p>
      <div className="todo-list">{todos}</div>
    </div>
  );
}
