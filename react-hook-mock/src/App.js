import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import {Provider} from 'mobx-react'
import "todomvc-app-css/index.css";


import Footer from "./compoents/Footer";
import TodoList from "./containers/TodoList";
import store from  './containers/store/index.js'


const  App = () => {
    return(
        <BrowserRouter>
            <React.Fragment>
            <div  className="todoapp" store={store}>
                <Provider>
                  <Route path="/:filter?" component={TodoList} />                
                </Provider>
            </div>
            <Footer />
            </React.Fragment>
        </BrowserRouter>
    )
}

export default App