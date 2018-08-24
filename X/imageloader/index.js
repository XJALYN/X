// X/imageloader/imageloader.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    src:{
      type:String,
      value:"",
      observer:function(newValue,oldValue){
        
        if(this.data.cache){
          wx.setStorage({
            key: newValue,
            data: newValue,
          })
        }
      }
    },
    showLoading:{
      type:null,
      value:true
    },
    lazyLoad:{
    type: Boolean,
    value: false
    },
    mode:{
      type: String,
      value:"widthFix"
    },
    cache:{
      type:Boolean,
      value:false
    },
    longtapSave:{
      type:Boolean,
      value:false
    },
    preview:{
      type: Boolean,
      value: false
    },
    previewImages:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    loaded:false,
    error:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindload(e){
      this.setData({
        loaded:true
      })
      console.log(e)
    },
    bindError(e){
      console.log("失败")
      this.setData({
        error:true
      })
    },
    bindTapPreview(e){
      this.data.previewImages.length == 0 &&(this.data.previewImages = [this.data.src])
       wx.previewImage({
         current:this.data.src,
         urls: this.data.previewImages,
       })
    },
    bindlongtapSave(e){
      wx.showActionSheet({
        itemList: ["保存图片至相册"],
        success:res=>{
          if(res.tapIndex==0){
            saveToLocal(this.data.src)
          }
        }
      })

      function saveToLocal(url) {
        wx.showLoading({
          title: '',
        })
        wx.downloadFile({
          url: url,
          success: function (res) {
            var tempFilePath = res.tempFilePath
            console.log(tempFilePath)
            wx.saveImageToPhotosAlbum({
              filePath: tempFilePath,
              success: res => {
                wx.showToast({
                  title: '图片保存成功',
                })
              }, fail: res => {
                console.log(res)
                wx.showModal({
                  title: '',
                  content: '图片下载失败' + JSON.parse(res),
                })
                // wx.showToast({
                //   title: '图片保存失败',
                // })
              }, complete: res => {
                
              }
            })
          }, fail: function (error) {
            console.log(error)
            wx.showModal({
              title: '',
              content: '图片下载失败' + JSON.parse(error),
            })
            // wx.showToast({
            //   title: "图片下载失败" ,
            // })
          },complete:function(res){
           
          }
        })
      }
    }
  }
})
