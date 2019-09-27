import {observable,computed,autorun,action,configure} from "mobx";
configure({enforceActions:'always'});

export default class ObservableTodoStore {
    @observable todos = [];
    @observable pendingRequests  = 0;
    constructor(){
        autorun(() => {
            console.log(this.report)
        });
    }
    @computed get completedTodosCount(){
        return this.todos.filter(todo => todo.completed === true).length;
    }
    @computed get report(){
        if(this.todos.length === 0){
            return `<none>`
        }
        return `next todo: ${this.todos[0].task}.Progress: ${this.completedTodosCount}/${this.todos.length}`;
    }
    @action.bound addTodo(task){
        this.todos.push({
            task: task,
            completed: false,
            assignee: null
        });
    }
    @action completeTask(index,bool){
        this.todos[index].completed = bool;
    }
}