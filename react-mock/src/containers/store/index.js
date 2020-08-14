import { observable,action} from "mobx";
import { guid } from "../../utils";

class AppStore {
    @observable inputValue = ''
    @observable todos = [
        {
            done: false,
            id: guid(),
            label: '开始了哦'
        }
    ]
    //增加
    @action  addTodolist (Ttodo) {
        this.todos.push ({
            done: false,
            id: guid(),
            label: Ttodo
          })
    }
    //删除
    @action  deleteTodo (Ttodo) {
        this.todos.forEach((element,key) => {
            if (element.id == Ttodo ) {
                this.todos.splice(key, 1);
            }             
        });
    }
    //解决一个
    @action  toggleDone (Ttodo) {
        this.todos.forEach((element,key) => {
            if (element.id == Ttodo ) {
                this.todos[key].done = true;
            }             
        });
    }

     //全选
     @action  setDone (Ttodo) {
        this.todos.forEach((element,key) => {
            this.todos[key].done = Ttodo;          
        });
    }
}


class testApp {
    @observable  testvalue = '试一下'
}

const store = new AppStore()
const testStore = new testApp()

export default {
    testStore,
    store
}