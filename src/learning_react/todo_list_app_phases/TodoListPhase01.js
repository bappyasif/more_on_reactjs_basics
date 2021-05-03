import React from "react";

export function TodoListPhase01() {
  return (
    <div>
      <fieldset className="testTodo">
          <legend>Todo List Phase 01</legend>
        <p>
          <input type="checkbox" /> <span>list Item</span>
        </p>
        <div>
          <input type="checkbox" /> <span>list Item</span>
        </div>
        <p>
          <input type="checkbox" /> <span>list Item</span>
        </p>
        <div>
          <input type="checkbox" /> <span>list Item</span>
        </div>
      </fieldset>
    </div>
  );
}
