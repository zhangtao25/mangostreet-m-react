
import React from 'react';
import './Home.css';
import NoteCard from './../Home/NoteCard'
import Note from './Note/Note'
import NoteService from "./../../service/Note";
import {Route, Switch} from "react-router";

export interface Props {
    history:any
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
    item:Item
}

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
            }
        };
    }

    fn:any = (id:string)=>{
        this.props.history.push(`/home/test/${id}`)
    }

    render() {

        return (
            <div className={'home'}>
                <div className={'test'}>
                    {this.state.noteData.map((item,index)=>{
                        return(
                            <div key={index} onClick={()=>this.fn(item.id)}>
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
                    <Route path="/home/test/:id" component={Note}/>
                </Switch>
            </div>
        );
    }
    componentDidMount(): void {
        console.log(this.props)
        NoteService.getNotes().then((res:any)=>{
            this.setState({noteData:res})
        })
    }
}

export default Home
