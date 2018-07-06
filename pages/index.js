// pages/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    doc:{
      title:"X",
      desc:"X组件提供了丰富的小程序开发组件,能够帮助开发更快的开发小程序,下面是各个组件的演示"
    },

   list:[
     { name: "about", url: "/pages/about/about", icon:"/images/about.png"},
     { name: "audio", url: "/pages/audio/audio", icon: "/images/audio.png"},
     { name: "animate", url: "/pages/animate/animate", icon: "/images/animate.png" },
     { name: "badge", url: "/pages/badge/badge", icon: "/images/badge.png" },
     { name: "calendar", url: "/pages/calendar/calendar", icon: "/images/calendar.png"},
     { name: "cell", url: "/pages/cell/cell", icon: "/images/cell.png"},
     { name: "circleProgress", url: "/pages/circleProgress/circleProgress", icon: "/images/circle_progress.png" },
     { name: "capsule", url: "/pages/capsule/capsule", icon: "/images/capsule.png" },
     { name: "countdown", url: "/pages/countdown/countdown", icon: "/images/countdown.png"},
     { name: "cropper", url: "/pages/cropper/cropper", icon: "/images/cropper.png" },
     { name: "error", url: "/pages/error/error", icon: "/images/error.png" },
     { name: "footer", url: "/pages/footer/footer", icon: "/images/footer.png"},
     { name: "grid", url: "/pages/grid/grid", icon: "/images/grid.png"},
     { name: "live-player", url: "/pages/livePlayer/livePlayer", icon: "/images/live-player.png" },
     { name: "loadmore", url: "/pages/loadmore/loadmore", icon: "/images/loadmore.png"},
     { name: "moments", url: "/pages/moments/moments", icon: "/images/moments.png"},
     { name: "plane", url: "/pages/plane/plane", icon: "/images/plane.png" },
     { name: "recorder", url: "/pages/recorder/recorder", icon: "/images/recorder.png" },
     { name: "searchbar", url: "/pages/searchbar/searchbar", icon: "/images/searchbar.png"},
     { name: "tabpage", url: "/pages/tabpage/tabpage", icon: "/images/tabpage.png" },
     { name: "timeline", url: "/pages/timeline/timeline", icon: "/images/timeline.png"},
     { name: "vote", url: "/pages/vote/vote", icon: "/images/vote.png"},
     { name: "qrcode", url: "/pages/qrcode/qrcode", icon: "/images/qrcode.png"},
     { name: "loading", url: "/pages/loading/loading", icon: "/images/loading.png"},
     { name: "imageloader", url: "/pages/imageloader/imageloader", icon: "/images/about.png"},
     { name: "icon",url:"/pages/icon/icon",icon:"/images/icon.png"},
     { name: "parse", url: "/pages/parse/parse", icon: "/images/parse.png"},
     { name: "noticebar", url: "/pages/noticebar/noticebar", icon: "/images/noticebar.png"},
     { name: "steps", url: "/pages/steps/steps", icon: "/images/steps.png"},
     { name: "switch", url: "/pages/switch/switch", icon: "/images/switch.png"},
     { name: "uploader", url: "/pages/uploader/uploader", icon:"/images/uploader.png"},
     
     { name: "popup", url: "/pages/popup/popup", icon: "/images/popup.png"},
    
     { name: "multingKeyboard", url:"/pages/multingKeyboard/multingKeyboard",icon:"/images/keyboard.png"},
     { name: "menuImage", url: "/pages/menuImage/menuImage", icon:"/images/menu.png"},
     { name: "gradualNumber", url: "/pages/gradualNumber/gradualNumber", icon:"/images/gradual_number.png"},
     
     { name: "weather", url:"/pages/weather/weather",icon:"/images/weather.png"},
     { name: "radioGroup", url: "/pages/radioGroup/radioGroup", icon:"/images/radio.png"},
     { name: "checkboxGroup", url:"/pages/checkboxGroup/checkboxGroup",icon:"/images/check.png"}
   ]
   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  bindChange(e){
    console.log(e)
    wx.navigateTo({
      url: e.detail.value.url,
    })
  },
  bindScan(e){
    wx.scanCode({
      success:res=>{
        wx.showModal({
          title: '',
          content: res.result,
        })
      }
    })
  }
})