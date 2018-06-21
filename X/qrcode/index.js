import drawQrcode from './utils/weapp.qrcode.min.js'

Component({
  behaviors: [],
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    icon:{
     type:String,
     value:""
    },
    length:{
      type:Number,
      value:150
    },
    text:{
      type:String,
      value:"",
      observer:function(newValue,oldValue){
        this.drawQrcode(this.data.text)
      }
    },
    foreground:{
      type:String,
      value:"black"
    },
    background:{
      type: String,
      value: "white"
    }
  },
  data: {
  },

  attached: function () {
  },
  ready: function () {
    this.drawQrcode(this.data.text)
  },
  
  moved: function () { },
  detached: function () { },

  methods: {
    drawQrcode(text){
      drawQrcode({
        width: this.data.length,
        height: this.data.length,
        canvasId: 'qrcodePro',
        foreground: this.data.foreground,
        background:this.data.background,
        text: text,
        _this: this
      })
    }
  }
})
