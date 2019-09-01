
import React from 'react';
import './Home.css';
import NoteCard from './../Home/NoteCard'
import NoteDetail from './NoteDetail/NoteDetail'
import NoteService from "./../../service/Note";
import {Route, Switch} from "react-router";
import {observer, inject} from 'mobx-react';

export interface Props {
    history:any,
    store:any
}
export interface noteData {
    [index:number]:any,
    map(param: (item:any,index:number) => any): any;
}

export interface Item {
    id:string
    title:string
    type:string
    desc:string
    likes:number
    cover:string
    user_id:string
    noteId:string
    collects:number
    images:string
}
export interface State {
    noteData:noteData,
    item:Item,
    isRender:any
}

// 观察者
@inject('store')
@observer
class Home extends React.Component<Props, State> {
    constructor(props:Props) {
        super(props);
        this.state = {
            noteData:[
            ],
            item:{
                id:"",
                title:"",
                type:"",
                desc:"",
                likes:0,
                cover:"",
                user_id:"",
                noteId:"",
                collects:0,
                images:"",
            },
            isRender:'block'
        };
    }

    goDetailPage:any = (id:string)=>{
        this.props.history.push(`/home/note/${id}`)
        this.props.store.changeIsShowHome('none')
    }

    render() {
        return (
            <div className={'home'}>
                <div className={'test'} style={{display:this.props.store.isShowHome}}>
                    {this.state.noteData.map((item,index)=>{
                        return(
                            <div style={{backgroundColor:'#f5f5f9',paddingTop:'5px'}} key={index} onClick={()=>this.goDetailPage(item.id)}>
                                <NoteCard
                                    key={index}
                                    id={item.id}
                                    title={item.title}
                                    type={item.type}
                                    desc={item.desc}
                                    likes={item.likes}
                                    cover={item.cover}
                                    user_id={item.user_id}
                                    noteId={item.noteId}
                                    collects={item.collects}
                                    images={item.images}/>
                            </div>
                        )
                    })}
                </div>
                <Switch>
                    <Route path="/home/note/:id" {...this.props} component={NoteDetail}/>
                </Switch>
            </div>
        );
    }
    componentDidMount(): void {
        NoteService.getNotes().then((res:any)=>{
            this.setState({noteData:res})
        })
    }
}

export default Home
