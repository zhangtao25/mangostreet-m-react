import React from 'react';
// import './index.css';
import {NavBar, Icon, List, Modal, Toast, Radio} from 'antd-mobile'
import UserService from '../../../service/User'
// @ts-ignore
import {createForm} from 'rc-form';
import {inject, observer} from "mobx-react";

export interface Props {
  form:any,
  history:any,
  store:any
}

interface State {
  modal1: any,
  value2: any,
  info: any,
  dpValue:any
}


// 观察者
@inject('store')
@observer
class EditAccountInfo extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      modal1: false,
      value2: 0,
      info: {},
      dpValue:''
    };
  }

  onClose = () => {
    this.setState({
      modal1: false,
    });
    let data = {
      user_sex: this.state.value2
    }
    UserService.updateUserInfo(data).then(res => {
      console.log(res)
      Toast.info('修改成功', 1);
      window.location.reload()
    })
  }

  showModal = () => {
    console.log(111)
    this.setState({
      modal1: true,
    });
  }
  onWrapTouchStart = (e: any) => {
  }
  onChange = (value2: any) => {
    console.log('checkbox');
    this.setState({
      value2,
    });
  };

  validateDatePicker = (rule:any, date:any, callback:any) => {
    if (date && date.getMinutes() !== 15) {
      callback();
    } else {
      callback(new Error('15 is invalid'));
    }
  }
  goBack(){
    this.props.history.goBack();
  }

  render() {
    const Item = List.Item;
    const prompt = Modal.prompt;
    const RadioItem = Radio.RadioItem;
    const data = [
      {value: 0, label: '女'},
      {value: 1, label: '男'},
    ];

    return (
      <div>
        <NavBar
          mode="light"
          icon={<Icon type="left"/>}
          onLeftClick={() => {this.goBack()}}
          rightContent={[
            <Icon key="0" type="search" style={{marginRight: '16px'}}/>,
            <Icon key="1" type="ellipsis"/>,
          ]}
        >编辑资料</NavBar>
        <List className="my-list">
          <Item arrow="horizontal" extra={this.state.info.user_nickname} onClick={() => prompt('修改昵称', '请输入你的昵称',
            [
              {
                text: '取消',
                onPress: value => new Promise((resolve) => {
                  setTimeout(() => {
                    resolve();
                    console.log(`value:${value}`);
                  }, 0);
                }),
              },
              {
                text: '确认',
                onPress: value => new Promise((resolve, reject) => {
                  let data = {user_nickname: value}
                  UserService.updateUserInfo(data).then(res => {
                    console.log(res)
                    Toast.info('修改成功', 1);
                    window.location.reload()
                  })

                  setTimeout(() => {
                    resolve();
                    console.log(`value:${value}`);
                  }, 0);
                }),
              },
            ], 'default', undefined, ['输入昵称'])}>昵称</Item>
          <Item arrow="horizontal" extra={this.state.info.user_id} onClick={() => {
          }}>小红书号</Item>
          <Item arrow="horizontal" extra={this.state.info.user_sex ? '男' : '女'} onClick={() => {
            this.showModal()
          }}>性别</Item>
          {/*<DatePicker*/}
            {/*{...getFieldProps('dp', {*/}
              {/*initialValue: this.state.dpValue,*/}
              {/*rules: [*/}
                {/*{ required: true, message: 'Must select a date' },*/}
                {/*{ validator: this.validateDatePicker },*/}
              {/*],*/}
            {/*})}*/}
          {/*>*/}
            {/*<List.Item arrow="horizontal">Date</List.Item>*/}
          {/*</DatePicker>*/}
        </List>

        <Modal
          visible={this.state.modal1}
          transparent
          maskClosable={false}
          onClose={this.onClose}
          title="选择性别"
          footer={[{
            text: '确认', onPress: () => {
              console.log('确认');
              this.onClose();
            }
          }]}
        >
          <div>
            <List>
              {data.map(i => (
                <RadioItem key={i.value} checked={this.state.value2 === i.value}
                           onChange={() => this.onChange(i.value)}>
                  {i.label}
                </RadioItem>
              ))}
            </List>
          </div>
        </Modal>
      </div>
    );
  }

  componentDidMount(): void {
    UserService.getUserInfo().then((res: any) => {
      console.log(res)
      this.setState({info: res.response})
    })
    console.log(this.props)
  }
}

export default createForm()(EditAccountInfo)
