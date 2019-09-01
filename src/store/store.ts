import {observable, action} from 'mobx';

class Store {
  @observable isShowHome:any;
  @observable age:any;

  @action
  changeIsShowHome = (i:any) => {
    this.isShowHome = i
  }

  constructor() {
    this.isShowHome = 'block'
    this.age = 25
  }
}
const store = new Store()
export default store
