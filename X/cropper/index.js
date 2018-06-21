// X/cropper/cropper.js

// 注意事项 src 必须要在后台配置的域名下 或者本地图片才能使用

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    src:{
      type:String,
      value:"",
      observer:function(newValue,oldValue){
        this.showImage(newValue)
      }
    },
    mode:{
      type:String,
      value: "rectangle",//quadrangle
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    cropper:'',
  },

  created(){
    this.data.cropper = require('./utils/welCropper.js');
    const device = wx.getSystemInfoSync()
    const W = device.windowWidth
    const H = device.windowHeight - 50
    var that = this
    this.data.cropper.init.apply(that, [W, H]);
   
    // 隐藏视图 that.hideCropper()
    this.showImage = function(path){
      that.showCropper({
        src: path,
        mode: that.data.mode,
        sizeType: ['original'],   //'original'(default) | 'compressed'
        callback: (res) => {
          if (that.data.mode == 'rectangle') {
            console.log("crop callback:" + res)
            that.triggerEvent("Success", { tmp: res, mode: that.data.mode })
          }
          else {
            that.triggerEvent("Success", { value: res, mode: that.data.mode })
          }
        }
      })
    }

  },
  ready(){
    // this.showImage()
  },

  /**
   * 组件的方法列表
   */
  methods: {
    
  },
  
})
