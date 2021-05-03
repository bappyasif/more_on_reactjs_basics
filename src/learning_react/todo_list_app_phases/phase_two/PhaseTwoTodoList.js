import React from "react";
import { TodoItem } from "./TodoItem";

export function PhaseTwoTodoList() {
  return (
    <div>
      <fieldset>
        <legend>Todo List Phase Two</legend>
        <div className="todo-app-phase-two">
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
        </div>
      </fieldset>
    </div>
  );
}
