// X/audio/audio.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    backgroundColor:{
      type:String,
      value:'rgb(26,173,25)'
    },
    src:{
      type: String,
      value: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46'
    },
    playing:{
      type:Boolean,
      value:false
    },
    progress:{
      type:Number,
      value:0
    },
    autoplay:{
      type:Boolean,
      value:false
    },
    play:{
      type:Boolean,
      value:true,
      observer:function(newValue,oldValue){
        if (this.data.innerAudioContext){
          if(newValue==true){
            this.data.innerAudioContext.play()
          }else{
            this.data.innerAudioContext.pause()
          }
        }
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    innerAudioContext:'',
    currentTime:'00:00',
    duration:'00:00'
  },

  /**
   * 组件的方法列表
   */
  methods: {

    bindPlay(e){
      this.data.innerAudioContext.play()
    },

    bindStop(e){
      this.data.innerAudioContext.pause()
    },

    bindStartChangeProgress(e){
      this.data.innerAudioContext.pause()
    },

    bindChangeProgress(e){
      this.data.progress = parseFloat(e.detail.value)
      this.data.innerAudioContext.seek(this.data.progress * this.data.innerAudioContext.duration)
    },

    bindFinishChangeProgress(e){
      this.data.innerAudioContext.play()
    },

    formatTime(e) {
      var num = parseInt(e)
      var minute = parseInt(num / 60);
      var s = parseInt(num % 60);
      minute = minute < 10 ? '0' + minute : minute
      s = s < 10 ? '0' + s : s
      return minute + ':' + s
    }
  },

  attached(){
    const innerAudioContext = wx.createInnerAudioContext()
    this.data.innerAudioContext = innerAudioContext
    innerAudioContext.autoplay = this.data.autoplay
    innerAudioContext.src = this.data.src
    innerAudioContext.obeyMuteSwitch = false
    
     this.setData({
       'duration': this.formatTime(innerAudioContext.duration),
       'currentTime': this.formatTime(innerAudioContext.currentTime)
     })
    
    innerAudioContext.onPlay(() => {
      this.setData({
        playing: true
      })
    })
   
    innerAudioContext.onCanplay((res)=>{
      innerAudioContext.duration
      setTimeout(res=>{
        this.setData({
          'duration': this.formatTime(innerAudioContext.duration)
        })
      },500)
     
      
      
    })
    innerAudioContext.onError((res) => {
      console.log(res.errMsg)
      console.log(res.errCode)
      this.data.innerAudioContext.pause()
    })

    innerAudioContext.onTimeUpdate((res)=>{
      this.setData({
        'duration': this.formatTime(innerAudioContext.duration),
        'currentTime': this.formatTime(innerAudioContext.currentTime),
        'progress': innerAudioContext.currentTime / innerAudioContext.duration
      })
    })
    innerAudioContext.onEnded((res)=>{
      this.setData({
        playing: false,
        progress:0,
        currentTime:"00:00"
      })
    })

   
       innerAudioContext.onSeeking((res)=>{
       this.setData({
         'duration': this.formatTime(innerAudioContext.duration),
         'currentTime': this.formatTime(innerAudioContext.currentTime),
       })
       })
      innerAudioContext.onSeeked(res=>{
      
       
         
       
      })
      innerAudioContext.onPause(res=>{
        this.setData({
          playing: false
        })
      })
  },

  detached(){
    this.data.innerAudioContext.destroy()
  }

  
})
