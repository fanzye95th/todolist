import { guid } from "../utils";
import { race } from "core-js/fn/promise";
export const newTodo = label => ({
    done: false,
    id: guid(),
    label: (label || "").trim()
  });
  
export default {
    namespace : 'todoList',
    state : {
        newValue:'一起',
        todos : [
            {
                done: false,
                id: guid(),
                label: '开始了哦'
            }
        ]
    },
    reducers: {
        // Delete a todo by id
        deleteTodo (state, label) {
            let statedata = JSON.parse(JSON.stringify(state))   
            statedata.todos.forEach((element,key) => {
                if (element.id == label.payload ) {
                    statedata.todos.splice(key, 1);
                }             
            });
            return  statedata
        } ,

        // Create a new item
        addTodo (state, label) {
          let statedata = JSON.parse(JSON.stringify(state))   
          statedata.todos.push ({
            done: false,
            id: guid(),
            label: label.payload
          })
          return  statedata
        },

        // Set the done state of an item
        setDone (state, label) {
            let statedata = JSON.parse(JSON.stringify(state))   
            statedata.todos.forEach((element,key) => {
                statedata.todos[key].done = label.payload;          
            });
            return  statedata
        },
           

        // // Set the label of an item
        // setLabel: (state, id, label) =>
        //     state.map(i =>
        //     i.id === id
        //         ? {
        //             ...i,
        //             label
        //         }
        //         : i
        //     ),

        // Toggle an item done
        toggleDone (state, label) {
            let statedata = JSON.parse(JSON.stringify(state))   
            statedata.todos.forEach((element,key) => {
                if (element.id == label.payload ) {
                    statedata.todos[key].done = true;
                }             
            });
            return  statedata
        }
            
    },
    //用于处理异步操作和业务逻辑
    // effects: {},
    // subscriptions: {}

    
}