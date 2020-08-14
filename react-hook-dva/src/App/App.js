import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "todomvc-app-css/index.css";

import Footer from "../components/Footer";
import TodoList from "../containers/TodoList";

export default function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <div className="todoapp">
          {/* <TodoList></TodoList> */}
          <Route path="/:filter?" component={TodoList} />
        </div>
        <Footer />
      </React.Fragment>
    </BrowserRouter>
  );
}
