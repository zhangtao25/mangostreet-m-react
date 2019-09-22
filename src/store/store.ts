import {observable, action} from 'mobx';

class Store {
  @observable isShowHome:any;
  @observable isShowMine:any;
  @observable age:any;
  @observable activityIndicatorStatus:any

  @action
  changeIsShowHome = (i:any) => {
    this.isShowHome = i
  }
  changeIsShowMine = (i:any) => {
    this.isShowMine = i
  }
  changeActivityIndicatorStatus = (i:any) => {
    this.activityIndicatorStatus = i
  }

  constructor() {
    this.isShowHome = 'block'
    this.isShowMine = 'block'
    this.age = 25
    this.activityIndicatorStatus = false
  }
}
const store = new Store()
export default store
