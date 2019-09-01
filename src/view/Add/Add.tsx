import React from 'react';
import './Add.css';
import ImagePickerExample from './ImagePickerExample/ImagePickerExample'

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
            <div className={'add'}>
                <ImagePickerExample/>
            </div>
        );
    }
}

export default Add
