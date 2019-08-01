
import React from 'react';
// import './index.css';
import NoteCard from './Home/NoteCard'
import NoteService from "../service/Note";
// import any = jasmine.any;

export interface Props {
}
export interface noteData {
    [index:number]:any,
    map(param: (item:any) => any): any;
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
                我是主页
                {this.state.noteData.map((item)=>{
                    return(
                        <NoteCard
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
        NoteService.getNotesBasicInfo().then(res=>{
            console.log(res)
            // console.log(res)
            // this.setState({noteData:res})
        })
    }
}

export default Home
