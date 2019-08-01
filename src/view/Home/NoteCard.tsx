import React from 'react';

export interface Props {
    noteCover:any,
    avatar:any,
    author:any,
    noteId:any,
    likeNum:any,
    noteTitle:any
}
interface State {
}


class NoteCard extends React.Component<Props, State> {
    constructor(props:Props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <div className={'note-card'}>
                <p>{this.props.avatar}</p>
                <p>{this.props.author}</p>
                <p>{this.props.noteId}</p>
                <p>{this.props.likeNum}</p>
                <p>{this.props.noteTitle}</p>
                <img src={this.props.noteCover} alt=""/>
            </div>
        );
    }
    componentDidMount(): void {
    }
}

export default NoteCard
