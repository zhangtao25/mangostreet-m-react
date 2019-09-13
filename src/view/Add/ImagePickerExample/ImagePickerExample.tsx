import {ImagePicker, Button, InputItem, TextareaItem, ActivityIndicator, Toast} from 'antd-mobile';
import React from 'react'
import {withRouter} from 'react-router-dom'
import NoteService from './../../../service/Note'
// @ts-ignore
import {createForm} from 'rc-form';
import './ImagePickerExample.css'

export interface Props {
  form: any,
  history: any
}

export interface State {
  files: any,
  activityIndicatorStatus: any
}

const data: any = [];

function loadingToast() {
  Toast.info('都给我填满上!!!', 2, undefined, false);
}

class ImagePickerExampleX extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      files: data,
      activityIndicatorStatus: false
    };
  }

  onChange = (files: any, type: any, index: any) => {
    this.setState({
      files,
    });
  }


  // 将base64转换成file对象
  dataURLtoFile (dataurl:any, filename = 'file') {
    let arr = dataurl.split(',')
    let mime = arr[0].match(/:(.*?);/)[1]
    let suffix = mime.split('/')[1]
    let bstr = atob(arr[1])
    let n = bstr.length
    let u8arr = new Uint8Array(n)
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n)
    }
    return new File([u8arr], `${filename}.${suffix}`, {type: mime})
  }

  beforeAvatarUpload(file:any) {
    return new Promise((resolve, reject)=>{
      let me = this;
      let reader = new FileReader();
      let heizi = {}
      reader.readAsDataURL(file);
      reader.onload = function(e) {
        let img:any = new Image();
        img.src = this.result;
        img.onload = function() {
          let originWidth = img.width;
          let originHeight = img.height;
          let canvas = document.createElement("canvas");
          let context:any = canvas.getContext("2d");
          let timestamp=new Date().getTime()
          canvas.width = 512; //压缩后的宽度
          canvas.height = (originHeight * canvas.width) / originWidth;
          context.drawImage(img, 0, 0, canvas.width, canvas.height);
          heizi = me.dataURLtoFile(canvas.toDataURL("image/jpeg"),String(timestamp))
          resolve(heizi)
        };
      };
    })
  }

  uploadNotes() {
    let title = this.props.form.getFieldValue('title')
    let desc = this.props.form.getFieldValue('desc')
    if (!title || !desc || this.state.files.length === 0) {
      loadingToast()
      return
    }
    this.setState({activityIndicatorStatus: true})
    var formData: any = new FormData();
    this.state.files.forEach((file: any) => {
      this.beforeAvatarUpload(file.file).then((res:any)=>{
        formData.append('myfiles', res, res.name);
      })
    })
    formData.append('title', title);
    formData.append('desc', desc);
    setTimeout(()=>{
      NoteService.AddNote(formData).then(res => {
        this.setState({activityIndicatorStatus: false})
        this.props.history.push(`/home`)
      }).catch(res => {
        this.setState({activityIndicatorStatus: false})
      })
    },1000)
  }

  render() {
    const {files} = this.state;
    const {getFieldProps} = this.props.form;
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
             onClick={() => {
               this.uploadNotes()
             }}>发布笔记
        </div>
      </div>
    );
  }
}

const ImagePickerExample = createForm()(ImagePickerExampleX);
export default withRouter(ImagePickerExample)
