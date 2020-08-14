
import React , { useCallback, useMemo,useEffect } from 'react';
import { NavLink } from "react-router-dom";
import useRouter from "use-react-router";
import {observer,inject} from 'mobx-react'

import useInput from "../hooks/useInput";
import useOnEnter from "../hooks/useOnEnter";
import TodoItem from "./TodoItem";
import store from  './store/index.js'


function TodoList(props) {
  const todos =  JSON.parse(JSON.stringify(store.todos))
  const router = useRouter();

  const left = useMemo(() => todos.reduce((p, c) => p + (c.done ? 0 : 1), 0), [
    todos
  ]);
  const visibleTodos = useMemo(
    () =>
      router.match.params.filter
        ? todos.filter(i =>
            router.match.params.filter === "active" ? !i.done : i.done
          )
        : todos,
    [todos, router.match.params.filter]
  );

  const anyDone = useMemo(() => todos.some(i => i.done), [todos]);
  const allSelected = useMemo(() => visibleTodos.every(i => i.done), [
    visibleTodos
  ]);
  const onToggleAll = useCallback(
    () => {
      store.setDone(!allSelected)
    },
    [visibleTodos, allSelected]
  );


  //清楚已完成
  const onClearCompleted = useCallback(
    () => {
      todos.forEach(i => {
        if (i.done) {
         store.deleteTodo(i.id);
        }
      });
    },
    [todos]
  );


  //新增todo
  const [newValue, onNewValueChange, setNewValue] = useInput();
  const onAddTodo = useOnEnter(
    () => {
      if (newValue) {
        store.addTodolist(newValue)
        setNewValue("");
      }
    },
    [newValue]
  );


    return (
      <div store={store}>
          <header className="header">
            <h1>todos</h1>
            <input
              className="new-todo"
              placeholder="What needs to be done?"
              onKeyPress={onAddTodo}
              value={newValue}
              onChange={onNewValueChange}
            />
          </header>
          <section className="main">
            <input
              id="toggle-all"
              type="checkbox"
              className="toggle-all"
              checked={allSelected}
              onChange={onToggleAll}
            />
            <label htmlFor="toggle-all" />
            <ul className="todo-list">
              {visibleTodos.map(todo => (
                <TodoItem key={todo.id} todo={todo} props={props} />
              ))}
            </ul>
          </section>

          <footer className="footer">
              <span className="todo-count">
                <strong>{left}</strong> items left
              </span>
              <ul className="filters">
                <li>
                  <NavLink exact={true} to="/" activeClassName="selected">
                    All
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/active" activeClassName="selected">
                    Active
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/completed" activeClassName="selected">
                    Completed
                  </NavLink>
                </li>
              </ul>
              {anyDone && (
                <button className="clear-completed" onClick={onClearCompleted}>
                  Clear completed
                </button>
              )}
          </footer>

      </div>
   
    );
  
}

export default  observer(TodoList);

