
import React from 'react';
import './Home.css';
import NoteCard from './../Home/NoteCard'
import NoteService from "./../../service/Note";

export interface Props {
}
export interface noteData {
    [index:number]:any,
    map(param: (item:any,index:number) => any): any;
}
export interface State {
    noteData:noteData
}

export interface sss {
    noteCover:number,
    avatar:number,
    author:number,
    noteId:number,
    likeNum:number,
    noteTitle:number
}


class Home extends React.Component<Props, State> {
    constructor(props:Props) {
        super(props);
        this.state = {
            noteData:[
            ]
        };
    }
    render() {
        return (
            <div className={'home'}>
                {/*我是主页*/}
                {this.state.noteData.map((item,index)=>{
                    return(
                        <NoteCard
                            key={index}
                            avatar={item.avatar}
                            author={item.author}
                            noteId={item.noteId}
                            likeNum={item.likeNum}
                            noteTitle={item.noteTitle}
                            noteCover={item.noteCover}/>
                    )
                })}

            </div>
        );
    }
    componentDidMount(): void {
        NoteService.getNotesBasicInfo().then((res:any)=>{
            this.setState({noteData:res})
        })
        console.log(this.props)
    }
}

export default Home
