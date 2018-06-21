// X/live-player/live-player.js

// properites
// @fullScreen(Boolean是否全屏)            默认为false
// @showControl(Boolean是否显示菜单)        默认为true
// @autoCloseControl(Boolean自动关闭控制器) 默认为true

// @title(String视频标题) 默认为''
// @hideControlDuration(Number隐藏控件间隔) 默认为false 
// @routes(Array直播线路) 默认为[] [{name:"高清",src:"直播地址"}]
// @onlineCount(Number 在线人数) 默认为0
// @showOnlineCount(Number 是否显示在线人数) 默认为false
// @showBarrage(Boolean) 是否开启显示弹幕功能 默认为true
// @barrages(弹幕数组)




Component({
  /**
   * 组件的属性列表
   */
  properties: {
    
    fullScreen:{
      type:Boolean,
      value:false
    },
    showControl:{
      type:Boolean,
      value:true
    },
    autoCloseControl:{
      type: Boolean,
      value: true
    },
    title:{
      type:String,
      value:""
    },
    hideControlDuration:{
      type:Number,
      value:10000
    },
    routes:{
      type:Array,
      value:[]
    },
    routeIndex:{
      type:Number,
      value:0
    },
    onlineCount:{
      type: Number,
      value: 0
    },
    showOnlineCount:{
      type:Boolean,
      value:false
    },
    showBarrage:{
      type:Boolean,
      value:true
    },
    barrages:{
      type:Array,
      value:false,
      observer:function(newValue,oldValue){
        clearTimeout(this.data.barrageTimer)
         this.barrageHandle(newValue)
      }
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    showRoutes:false,
    barrageOpen:true,
    timer:'',
    barrageTimer:'',
    barrageList:[]
  },

  ready(res) {
    // 第二个组件必须要写的
    this.ctx = wx.createLivePlayerContext('player',this)
  },

  /**
   * 组件的方法列表
   */
  methods: {

    // 隐藏显示菜单
    bindShowHideMenu(e){
      this.data.showControl = !this.data.showControl
      this.setData({
        showControl:this.data.showControl,
        showRoutes: false
      })
      clearTimeout(this.data.timer)
      if (this.data.showControl && this.data.autoCloseControl){
       this.timer = setTimeout(() => {
          this.setData({
            showControl:false
          })
        }, this.data.hideControlDuration)
      }
    },

    // 反馈按钮事件
    bindFeedBack(e){
      this.triggerEvent("FeedBack",e)
    },

    bindShowHideRoutes(e){
      clearTimeout(this.data.timer)
      this.data.showRoutes = !this.data.showRoutes
      this.setData({
        showRoutes: this.data.showRoutes
      })
    },

    bindShowHideBarrage(e){
      clearTimeout(this.data.timer)
      this.data.barrageOpen = !this.data.barrageOpen
      this.setData({
        barrageOpen: this.data.barrageOpen
      })
    },

    bindFullScreen(e){
      this.setData({
        fullScreen:true
      })
      this.ctx.requestFullScreen({ direction: 90 })
    },

    bindZoomScreen(e){
      this.setData({
        fullScreen: false
      })
      this.ctx.exitFullScreen()
    },

    bindChangeRoute(e){
      var index = e.currentTarget.dataset.index
      this.setData({
        routeIndex:index
      })
    },

    statechange(e) {
      console.log('live-player code:', e.detail.code)
    },

    error(e) {
      console.error('live-player error:', e.detail.errMsg)
    },

    bindPlay() {
      this.ctx.play({
        success: res => {
          console.log('play success')
        },
        fail: res => {
          console.log('play fail')
        }
      })
    },

    bindPause() {
      this.ctx.pause({
        success: res => {
          console.log('pause success')
        },
        fail: res => {
          console.log('pause fail')
        }
      })
    },

    bindStop() {
      this.ctx.stop({
        success: res => {
          console.log('stop success')
        },
        fail: res => {
          console.log('stop fail')
        }
      })
    },
    bindResume() {
      this.ctx.resume({
        success: res => {
          console.log('resume success')
        },
        fail: res => {
          console.log('resume fail')
        }
      })
    },
    bindMute() {
      this.ctx.mute({
        success: res => {
          console.log('mute success')
        },
        fail: res => {
          console.log('mute fail')
        }
      })
    },

    bindStatus(e) {
      console.log(e)
    },

    // 添加弹幕
    barrageHandle(list) {
      for (var i in list) {
        var text = list[i]
        var top = Math.random() * 80+20
        var right = text.length * 30 + 110 * Math.random() 
        var barrage = { "text": text, top: top, right: -right }
        this.data.barrageList.push(barrage)
      }
      this.setData({
        'barrageList': this.data.barrageList
      })

      this.data.barrageTimer =  setTimeout(() => {
        this.clearBarrage()
      }, 8000)

    },

    clearBarrage(){
      this.setData({
        'barrageList': []
      })
    }
  }
})
