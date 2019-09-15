import React from 'react';
import './Home.css';
import NoteCard from './../Home/NoteCard'
import NoteService from "./../../service/Note";
import {observer, inject} from 'mobx-react';
import {Badge,Tabs,SearchBar} from 'antd-mobile'
import renderRoutes from './../../router/renderRoutes'


export interface Props {
  history: any,
  store: any,
  route:any,
  match:any,
  location:any
}

export interface noteData {
  [index: number]: any,

  map(param: (item: any, index: number) => any): any;
}


export interface State {
  noteData: noteData,
  isRender: any
}

// 观察者
@inject('store')
@observer
class Home extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      noteData: [],
      isRender: 'block'
    };
  }

  goDetailPage: any = (id: string) => {
    this.props.history.push(`/home/note/${id}`)
    // this.props.store.changeIsShowHome('none')
  }
  goSearchPage(){
    this.props.history.push(`/home/searchpage`)
    // this.props.store.changeIsShowHome('none')
  }

  render() {
    const {routes} = this.props.route
    const tabs = [
      { title: <Badge>关注</Badge> },
      { title: <Badge>发现</Badge> },
    ];

    return (
      <div className={'home'}>
        <div className="home-top" style={{display: this.props.store.isShowHome}}>
          <div onClick={() => this.goSearchPage()}>
            <SearchBar className={'search-bar'} placeholder="Search" maxLength={8}/>
          </div>
          <Tabs tabs={tabs}
                initialPage={0}
                onChange={(tab, index) => { console.log('onChange', index, tab); }}
                onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                tabBarActiveTextColor={'#333'}
                tabBarInactiveTextColor={'#ccc'}
                tabBarUnderlineStyle={{borderColor: '#ff2742'}}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' ,paddingTop:'88px'}}>
              <div className={'wrap'}>
                {this.state.noteData.map((item, index) => {
                  return (
                    <div style={{backgroundColor: '#f5f5f9', paddingTop: '5px'}} key={index}
                         onClick={() => this.goDetailPage(item.id)}>
                      <NoteCard
                        key={index}
                        id={item.id}
                        title={item.title}
                        type={item.type}
                        desc={item.desc}
                        likes={item.likes}
                        cover={item.cover}
                        user_id={item.user_id}
                        user_account={item.user_account}
                        user_nickname={item.user_nickname}
                        noteId={item.noteId}
                        collects={item.collects}
                        images={item.images}/>
                    </div>
                  )
                })}
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' ,paddingTop:'88px'}}>
              Content of second tab
            </div>
          </Tabs>

        </div>
        {renderRoutes(routes,false)}
      </div>
    );
  }

  componentDidMount(): void {
    NoteService.getNotes().then((res: any) => {
      this.setState({noteData: res})
    })
  }
}

export default Home
