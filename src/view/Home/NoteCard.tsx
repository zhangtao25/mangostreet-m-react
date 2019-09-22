import React from 'react';
import './NoteCard.css'

export interface Props {
  id: string
  title: string
  type: string
  desc: string
  likes: number
  cover: string
  user_id: number
  noteId: string
  collects: string
  images: string
  user_nickname: string
  user_account:string,
  user_img:string
}

interface State {
}

class NoteCard extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={'note-card'}>
        <img className={'note-cover'}
             src={'/api/static/notes/' + this.props.id + '/cover/' + this.props.cover.split(",")[0]} alt=""/>
        <p className={'note-title'}>{this.props.title}</p>
        <div className={'card-bottom'}>
          <div>
            <img style={{marginRight: '5px'}} src={`/api/static/users/${this.props.user_account}/${this.props.user_img}`} alt=""/>
            <span className={'nickname'}>{this.props.user_nickname}</span>
          </div>
          <div>
            <i style={{marginRight: '5px'}} className={'iconfont icon-love'}/>
            <span>0</span>
          </div>
        </div>
      </div>
    );
  }
}

export default NoteCard
