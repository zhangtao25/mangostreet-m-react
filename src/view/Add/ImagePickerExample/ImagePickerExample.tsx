import { ImagePicker,Button,InputItem,TextareaItem} from 'antd-mobile';
import React from 'react'
import NoteService from './../../../service/Note'
// @ts-ignore
import { createForm } from 'rc-form';


export interface Props {
  form:any
}

export interface State {
  files:any
}






const data:any=[]

class ImagePickerExampleX extends React.Component<Props, State> {
  constructor(props:Props) {
    super(props);
    this.state = {
      files:data
    };
  }
  onChange = (files:any, type:any, index:any) => {
    console.log(files, type, index);
    this.setState({
      files,
    });
  }

  uploadNotes(){
    let title = this.props.form.getFieldValue('title')
    let desc = this.props.form.getFieldValue('desc')
    var formData:any = new FormData();
    //循环添加到formData中
    this.state.files.forEach((file:any)=> {
      formData.append('myfiles', file.file, file.file.name);
    })
    formData.append('title', title);
    formData.append('desc', desc);
    NoteService.AddNote(formData).then(res=>{
      console.log(res)
    })
  }
  handleSubmit = (e:any) => {
    e.preventDefault();
    this.props.form.validateFields((err:any, values:any) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  render() {
    const { files } = this.state;
    const { getFieldProps } = this.props.form;
    return (
        <div>
          <ImagePicker
              files={files}
              onChange={this.onChange}
              onImageClick={(index, fs) => console.log(index, fs)}
              selectable={files.length < 5}
              accept="image/gif,image/jpeg,image/jpg,image/png"
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
          < Button onClick={()=>{this.uploadNotes()}}>上传</Button>
        </div>
    );
  }
}

const ImagePickerExample = createForm()(ImagePickerExampleX);
export default ImagePickerExample
