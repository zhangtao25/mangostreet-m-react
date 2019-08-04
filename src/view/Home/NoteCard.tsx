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
                {/*<p>{this.props.avatar}</p>*/}
                {/*<p>{this.props.author}</p>*/}
                {/*<p>{this.props.noteId}</p>*/}
                {/*<p>{this.props.likeNum}</p>*/}
                {/*<p>{this.props.noteTitle}</p>*/}
                <img className={'note-cover'} src={this.props.noteCover} alt=""/>
                <p className={'note-title'}>{this.props.noteTitle}</p>
                <div className={'card-bottom'}>
                    <div>
                        <img src={this.props.avatar} alt=""/>
                        <span>张温柔</span>
                    </div>
                    <div>
                        <i className={'iconfont icon-love'}></i>
                        <span>234</span>
                    </div>
                </div>
            </div>
        );
    }
    componentDidMount(): void {
    }
}

export default NoteCard
