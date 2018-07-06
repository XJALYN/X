// components/uploader/index.js
Component({
  /**
   * 组件的属性列表
   */

  properties: {
    url:{
      type:String,
      value:""
    },
    params:{
      type:Object,
      value:{}
    },
    src:{
      type:String,
      value:"./images/add.svg"
    },
    width:{
      type:String,
      value:"80px"
    },
    height:{
      type:String,
      value:"80px"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    src:"",
    uploadStatus:"-1", //-1未上传 // 0 上传中 1 上传完成 2 上传失败
    progress:0 
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindTapImage(e){
      this.setData({
        uploadStatus: -1
      })
       this.chooseImage().then(path=>{
         this.setData({
           uploadStatus:0
         })
         this.upload(this.data.url,path,this.data.params).then(res=>{
           this.setData({
             uploadStatus: 1
           })
           if(res.statusCode==200){
             this.triggerEvent("Success", { value: res.data })
           }else{
             this.triggerEvent("Error", { error: res.data})
           }
          
         }).catch(err=>{
           this.setData({
             uploadStatus: 2
           })
           this.triggerEvent("Error", { error: err})
         })
       }).catch(err=>{
         this.triggerEvent("Error", { error: err })
       })
    },
    chooseImage(){
      var promise = new Promise((resolve,reject)=>{
        wx.chooseImage({
          success: (res) =>{
            var path = res.tempFilePaths[0]
            this.setData({
              src:path
            })
            resolve(path)
          },
          fail:err=>{
            reject(err)
          }
        })
     })
     return promise
    },
    upload(url,path,params={}){
      var promise = new Promise((resolve,reject)=>{

       var uploadTask = wx.uploadFile({
          url: url,
          filePath: path,
          formData: params,
          name: 'file',
          success: (res) => {
            resolve(res)
          },fail:(err)=>{
            reject(err)
          }
        })
       wx.canIUse("onProgressUpdate")&&uploadTask.onProgressUpdate((res) => {
         this.setData({
           progress:res.progress
         })
        //  console.log('已经上传的数据长度', res.totalBytesSent)
        //  console.log('预期需要上传的数据总长度', res.totalBytesExpectedToSend)
       })
      })
      return promise
    }
  }
})
