import React from 'react';
// import './index.css';
import {NavBar, Icon, List, Modal, Toast, Radio} from 'antd-mobile'
import UserService from '../../../service/User'

export interface Props {
}

interface State {
  modal1: any,
  value2: any,
  info: any
}


class EditAccountInfo extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      modal1: false,
      value2: 0,
      info: {}
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
    })

  }

  showModal = () => {
    console.log(111)
    this.setState({
      modal1: true,
    });
  }
  onWrapTouchStart = (e: any) => {
    // fix touch to scroll background page on iOS
    // if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
    //   return;
    // }
    // const pNode = closest(e.target, '.am-modal-content');
    // if (!pNode) {
    //   e.preventDefault();
    // }
  }
  onChange = (value2: any) => {
    console.log('checkbox');
    this.setState({
      value2,
    });
  };

  render() {
    const Item = List.Item;
    const Brief = Item.Brief;
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
          onLeftClick={() => console.log('onLeftClick')}
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
                  })
                  Toast.info('修改成功', 1);
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
          <Item arrow="horizontal" extra="1995-10-24" onClick={() => {
          }}>生日</Item>
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
  }
}

export default EditAccountInfo
