
import React from 'react';
import './Add.css';

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


class Add extends React.Component<Props, State> {
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
                我是add
            </div>
        );
    }
    componentDidMount(): void {
    }
}

export default Add
