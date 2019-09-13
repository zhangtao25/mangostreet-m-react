import {observable, action} from 'mobx';

class Store {
  @observable isShowHome:any;
  @observable isShowMine:any;
  @observable age:any;

  @action
  changeIsShowHome = (i:any) => {
    this.isShowHome = i
  }
  changeIsShowMine = (i:any) => {
    this.isShowMine = i
  }

  constructor() {
    this.isShowHome = 'block'
    this.isShowMine = 'block'
    this.age = 25
  }
}
const store = new Store()
export default store
