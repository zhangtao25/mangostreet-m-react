import React from 'react';
// @ts-ignore
import AvatarEditor from 'react-avatar-editor'
import {Modal,Slider} from 'antd-mobile'
import './UploadAvatar.css'
// import sss from './../../../assets/images/touxiang.jpg'
import UserService from './../../../service/User'

export interface Props {
}

export interface listArr {
  [index: number]: any

  map(param: (item: any, index: any) => any): any;
}

export interface State {
  modal1:any,
  scaleVal:any,
  sss:any
}


class UploadAvatar extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      modal1: false,
      scaleVal: 1,
      sss: null
    };
  }

  onChange(e:any){
    console.log(e.target.files[0])
    this.setState({modal1:true,sss:e.target.files[0]})
  }
  onClose() {
    this.setState({
      modal1: false,
    });
  }

  log = (name:any) => {
    return (value:any) => {
      console.log(`${name}: ${value}`);
      this.setState({scaleVal:(value+100)/100})
    };
  }
  editor:any = {}
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

  onClickSave = () => {
    if (this.editor) {

      const canvas = this.dataURLtoFile(this.editor.getImage().toDataURL())
      this.beforeAvatarUpload(canvas).then((res:any)=>{
        UserService.updateUserInfo({user_img:res}).then(res=>{
          console.log(res)
          window.location.reload()
        })
      })

      console.log(canvas)
    }
  }

  setEditorRef = (editor:any) => this.editor = editor


  render() {
    let scaleVal = this.state.scaleVal;
    return (
      <div className={'upload-avatar'}>
        <input className={'upload-btn'} type='file' onChange={(e)=>{this.onChange(e)}}/>

        <Modal

          visible={this.state.modal1}
          transparent
          closable={true}
          maskClosable={true}
          onClose={()=>{this.onClose()}}
          title="裁剪头像"
          footer={[{ text: '确认上传', onPress: () => { this.onClickSave() } }]}
        >
          <div>
            <AvatarEditor
              ref={this.setEditorRef}
              image={this.state.sss}
              width={100}
              height={100}
              border={50}
              color={[255, 255, 255, 0.6]} // RGBA
              scale={scaleVal}
              rotate={0}
            />
            <Slider
              defaultValue={0}
              min={0}
              max={200}
              onChange={this.log('change')}
              onAfterChange={this.log('afterChange')}
            />
          </div>
        </Modal>
      </div>
    );
  }

  componentDidMount(): void {

  }
}

export default UploadAvatar
