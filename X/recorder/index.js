// X/recorder/recorder.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    recording:false,
    finish:false,
    result:{},
    animation:{}
  },
  ready(){
    this.data.recorderManager = wx.getRecorderManager()
    this.data.recorderManager.onStart(()=>{
        this.setData({
          recording:true,
          finish: false
        })
    })
    this.data.recorderManager.onStop((res)=>{
      this.setData({
        recording: false,
        finish:true
      })
      this.data.result = res
      this.triggerEvent("Finish",res)
    })

  },
  /**
   * 组件的方法列表
   */
  methods: {
    bindStartRecord(e){
      const options = {
        duration: 10000,
        sampleRate: 44100,
        numberOfChannels: 1,
        encodeBitRate: 192000,
        format: 'mp3',
        frameSize: 50
      }
      this.data.recorderManager.start(options)
    },

    // 停止录音
    bindStopRecord(e){
      this.data.recorderManager.stop()
    },

    // 取消事件
    bindCancle(e){
      this.setData({
        finish:false,
        recording:false,
        result:{}
      })
      this.triggerEvent('Cancle')
    },

    // 发送事件
    bindSend(e){
      
      this.triggerEvent('Send',this.data.result)
      this.setData({
        finish: false,
        recording: false,
        result: {}
      })
    },

    // 事件隐藏
    bindHide(e){
      this.triggerEvent('Hide',{})
    }
  }
})
