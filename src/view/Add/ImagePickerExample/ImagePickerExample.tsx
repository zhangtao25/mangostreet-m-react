import {ImagePicker, Button, InputItem, TextareaItem, ActivityIndicator,Toast} from 'antd-mobile';
import React from 'react'
import {withRouter} from 'react-router-dom'
import NoteService from './../../../service/Note'
// @ts-ignore
import { createForm } from 'rc-form';
import './ImagePickerExample.css'

export interface Props {
  form:any,
  history:any
}

export interface State {
  files:any,
  activityIndicatorStatus:any
}

const data:any=[];
function loadingToast() {
  Toast.info('都给我填满上!!!', 2, undefined, false);
}

class ImagePickerExampleX extends React.Component<Props, State> {
  constructor(props:Props) {
    super(props);
    this.state = {
      files:data,
      activityIndicatorStatus:false
    };
  }
  onChange = (files:any, type:any, index:any) => {
    this.setState({
      files,
    });
  }
  uploadNotes(){

    let title = this.props.form.getFieldValue('title')
    let desc = this.props.form.getFieldValue('desc')
    if (!title || !desc || this.state.files.length === 0){
      loadingToast()
      return
    }
    this.setState({activityIndicatorStatus:true})
    var formData:any = new FormData();
    this.state.files.forEach((file:any)=> {
      formData.append('myfiles', file.file, file.file.name);
    })
    formData.append('title', title);
    formData.append('desc', desc);
    NoteService.AddNote(formData).then(res=>{
      this.setState({activityIndicatorStatus:false})
      console.log(this.props)
      this.props.history.push(`/home`)
      // this.props.
    }).catch(res=>{
      this.setState({activityIndicatorStatus:false})
    })
  }
  render() {
    const { files } = this.state;
    const { getFieldProps } = this.props.form;
    return (
        <div>
          <ActivityIndicator toast animating={this.state.activityIndicatorStatus} text="正在加载"/>
          <ImagePicker
              files={files}
              onChange={this.onChange}
              onImageClick={(index, fs) => console.log(index, fs)}
              selectable={files.length < 5}
          />
          <InputItem
              {...getFieldProps('title')}
              clear
              placeholder="添加标题会有更多的赞哦~"
          >标题</InputItem>
          <TextareaItem
              title={'正文'}
              {...getFieldProps('desc')}
              rows={3}
              placeholder="添加正文"
          />
          <div className={'push-note-btn'}
               onClick={()=>{this.uploadNotes()}}>发布笔记</div>
        </div>
    );
  }
}

const ImagePickerExample = createForm()(ImagePickerExampleX);
export default withRouter(ImagePickerExample)
