// X/multingKeyboard/index.js
var STATUS_FEE = 0
var STATUS_INPUT = 1
var STATUS_RECORDER = 2
var STATUS_ADD = 3

var RECORDER_UN = 20
var RECORDER_ING = 22
var RECORDER_WILLCANCLE = 23
var RECORDER_END = 24
var RECORDER_CANCLE = 25

var INPUT_ING = 10
var INPUT_END = 11

var functionList = [
  { title: "照片",src:"./images/image.png"},
  { title: "拍照", src:"./images/camera.png"},
  { title: "录像", src: "./images/vedio.png" },
  { title: "定位", src: "./images/location.png" },
  ]

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    inputFocus:{
      type:null,
      value:false
    },
    addList:{
      type:Array,
      value: functionList,
      observer:function(newValue,oldValue){
       
        var functionList = []
        console.log(newValue)
        var max = 8
        for (var i = 0; i < newValue.length  / max;i++){
          var num = (newValue.length - max * i) >= 8 ? max : newValue.length%8
          var list = []
          for (var j = 0; j < num ;j++){
              list.push(newValue[i*max+j])
          }
          functionList.push(list)
        }
     
        this.setData({
          functionList:functionList
        })
        console.log(this.data.functionList)
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    recordTitle:"按住 说话",
    showInput:true,
    showEmoj:false,
    showAdd:false,
    recordStatus: RECORDER_UN,
    functionList:[],
     recorderManager:'',
     inputText:""
  },
  ready(){
    console.log(functionList)
    this.setData({
      addList: functionList
    })
    this.data.addList =  functionList
  },
 

  /**
   * 组件的方法列表
   */
  methods: {

    bindtapAudioIcon(e){
        this.setData({
          showInput:false,
          showAdd: false
        })
    },
    bindTapInputIcon(e){
      this.setData({
        showInput: true,
        showEmoj: false,
        inputFocus:true,
         showAdd: false
      })
    },
    bindtapEmoj(e){
      this.setData({
        showEmoj:true,
        showAdd: false
      })
    },
    bindStartRecord(e){
       this.setData({
         recordTitle:"松开 结束",
         recordStatus: RECORDER_ING
       })
       if (this.data.recorderManager==''){
          this.data.recorderManager = wx.getRecorderManager()
          this.data.recorderManager.onStop((res) => {
            const { tempFilePath } = res
            if (this.data.recordStatus ==RECORDER_END){
              this.triggerEvent("recordfinish", { tempFilePath: tempFilePath })
            }
          })
       }
       const options = {
         duration: 10000,
         sampleRate: 44100,
         numberOfChannels: 1,
         encodeBitRate: 192000,
         format: 'aac',
         frameSize: 50
       }
       this.data.recorderManager.start(options)
    },
    bindInputConfirm(e){
      this.triggerEvent("inputfinish",{value:e.detail.value})
      this.setData({
        inputText:''
      })
      
    },
    bindStopRecord(e){
      console.log("正常停止")
      if (this.data.recordStatus == RECORDER_ING){
        this.setData({
         recordStatus: RECORDER_END
        })
        this.data.recorderManager.stop()
      }else{
        this.setData({
          recordStatus: RECORDER_CANCLE
        })
        this.data.recorderManager.stop()
      }
      this.setData({
        recordTitle: "按住 说话",
      })
      
    },
    bindCancleRecord(e){
      this.setData({
        recordTitle: "按住 说话",
        recordStatus: RECORDER_END
      })
      console.log("取消")
      this.data.recorderManager.stop()
    },
    bindWillCancle(e){
       console.log(e)
      var pageX = e.touches[0].pageX
      var pageY = e.touches[0].pageY
      console.log(pageY)
      var positionX = e.target.offsetLeft
      var positionY = e.target.offsetTop
      positionY = wx.getSystemInfoSync().screenHeight
      var offY = pageY - positionY 
       console.log(offY)
       if(offY < -160 )
{
         this.setData({
           recordStatus: RECORDER_WILLCANCLE
         })
} else{
         this.setData({
           recordStatus: RECORDER_ING
         })
}     
    },
    bindTapShowAdd(e){
      this.setData({
        showAdd:true
      })
    },
    bindTapFunction(e){
      var index = e.currentTarget.dataset.index
      this.triggerEvent("changefunction",{value:index})
    }
  }
})
