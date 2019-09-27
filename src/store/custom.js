import {observable,configure,action,autorun,computed} from "mobx";
configure({ enforceActions:'always'});

export default class CustomStore {
    @observable cacheViewList = [];
    constructor(){
        autorun(() => {
            console.log(this.report);
        })
    }
    @computed get cacheView(viewName){
        return this.cacheViewList.filter(item => item === viewName);
    } 
    @computed get report(){
       return this.cacheViewList.length;
    }
    @action addCacheView(viewName){
        this.cacheViewList.push(viewName);
    }
}