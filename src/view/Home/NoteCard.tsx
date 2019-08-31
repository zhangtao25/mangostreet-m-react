import React from 'react';

export interface Props {
    id:string
    title:string
    type:string
    desc:string
    likes:number
    cover:string
    user_id:number
    noteId:string
    collects:string
    images:string
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
                <img className={'note-cover'} src={'/api/static/notes/'+this.props.id+'/cover/'+this.props.cover.split(",")[0]} alt=""/>
                <p className={'note-title'}>{this.props.title}</p>
                <div className={'card-bottom'}>
                    <div>
                        <img src={this.props.cover} alt=""/>
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
        console.log(this.props)
    }
}

export default NoteCard
