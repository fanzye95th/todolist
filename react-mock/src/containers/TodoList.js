import React, { Component,useMemo } from 'react';
import { NavLink } from "react-router-dom";
import useRouter from "use-react-router";
import {observer,inject} from 'mobx-react'


// import store from  './store/index.js'
import TodoItem from "./TodoItem";




@inject('store','testStore')
@observer
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newValue : '',
        }


    }
    
    
    //改变input框输入值
    onNewValueChange =  (event) => {
        this.setState({
            newValue:event.target.value
        })
    } 
    //增加
     onAddTodo = ()=> {
         console.log(this.props,'this.props')
         this.props.store.addTodolist(this.state.newValue)
         this.setState({
            newValue: ''
         })
    }

    //全选
    // onToggleAll = (allSelected)=> {
    //   store.setDone(!allSelected)
    // }


    
    render() {
       let {store} = this.props 
  
        return (
            <div >
                <header className="header">
                    <h1>todos</h1>
                    <input
                        className="new-todo"
                        placeholder="What needs to be done?"
                        onKeyPress={this.onAddTodo}
                        value = {this.state.newValue}
                        onChange={this.onNewValueChange}
                    />
                </header>
                    <section className="main">
                    <input
                        id="toggle-all"
                        type="checkbox"
                        className="toggle-all"
                        onChange={this.onToggleAll}
                    />
                    <label htmlFor="toggle-all" />
                    <ul className="todo-list">
                        {store.todos.map(todo => (
                        <TodoItem key={todo.id} todo={todo} props={this.props} />
                        ))}
                    </ul>
                    </section>       
                    <footer className="footer">
                        <span className="todo-count">
                        {/* <strong>{left}</strong> items left */}
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
                        {/* {anyDone && (
                        <button className="clear-completed" onClick={onClearCompleted}>
                            Clear completed
                        </button>
                        )} */}
                    </footer>      
             </div>
        );
    }
}

export default TodoList;


