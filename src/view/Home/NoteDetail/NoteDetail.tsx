import React from 'react';
import NoteService from './../../../service/Note'
import './NoteDetail.css'
import {Carousel, WingBlank, Icon} from 'antd-mobile';
import {observer, inject} from 'mobx-react';
import NoteCard from "../NoteCard";

export interface Props {
  match: any,
  store: any,
  history:any
}


export interface Data {
  [index: number]: any,
  map(param: (item: any, index: number) => any): any;
}

export interface Item {
  desc:any,
  title:any,
  id:any
}
// id={item.id}
// title={item.title}
// type={item.type}
// desc={item.desc}
// likes={item.likes}
// cover={item.cover}
// user_id={item.user_id}
// user_account={item.user_account}
// user_nickname={item.user_nickname}
// noteId={item.noteId}
// collects={item.collects}
// images={item.images}
// user_img={item.user_img}/>

export interface State {
  item: Item,
  data: Data,
  imgHeight: any
}

// 观察者
@inject('store')
@observer
class Note extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      item: {
        desc:'',
        title:'',
        id:''
      },
      data: [],
      imgHeight: 10,
    };
  }

  render() {
    return (
      <div className={'note'}>
        <div className="nav-bar">
          <div className={'l'}>
            <Icon type="left"  style={{height:'100%'}} onClick={() => {this.props.history.goBack();}}/>
            {/*<img src={`/api/static/users/${this.state.item.user_account}/${this.state.item.user_img}`} alt=""/>*/}
            {/*<span className={'nickname'}>{this.state.item.user_nickname}</span>*/}
          </div>
          <div className={'r'}>
            <span>关注</span>
          </div>
        </div>
        <WingBlank>
          <Carousel
            autoplay={false}
            infinite
          >
            {this.state.data.map(val => (
              <div
                key={val}
                style={{display: 'inline-block', width: '100%', height: this.state.imgHeight}}
              >
                {/*<img*/}
                {/*  src={'/api/static/notes/' + this.state.item.id + '/images/' + val}*/}
                {/*  alt=""*/}
                {/*  style={{width: '100%', verticalAlign: 'top'}}*/}
                {/*  onLoad={() => {*/}
                {/*    window.dispatchEvent(new Event('resize'));*/}
                {/*    this.setState({imgHeight: 'auto'});*/}
                {/*  }}*/}
                {/*/>*/}
                <img
                  src={`https://ci.xiaohongshu.com/${val.replace('http://192.168.0.100:8000/notes/' + this.state.item.id ,'')}`}
                  alt=""
                  style={{width: '100%', verticalAlign: 'top'}}
                  onLoad={() => {
                    window.dispatchEvent(new Event('resize'));
                    this.setState({imgHeight: 'auto'});
                  }}
                />
              </div>
            ))}
          </Carousel>
        </WingBlank>
        <div className="content">
          <p>{this.state.item.title}</p>
          <p dangerouslySetInnerHTML={{__html: this.state.item.desc.replace(/\n/g,'<br/>')}} ></p>
          <p>8-15</p>
        </div>
      </div>
    );
  }

  componentDidMount(): void {
    let id = this.props.match.params.id
    NoteService.getNoteById(id).then((res: any) => {
      // console.log(res,111)
      res = [res]
      this.setState({item: res[0]})
      setTimeout(() => {
        this.setState({
          data: res[0].images.split("%2C"),
        });
      }, 100);
    })
  }
}

export default Note
