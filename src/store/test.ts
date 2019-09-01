import {observable, action} from 'mobx';

class TestStore {
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
const test = new TestStore()
export default test
