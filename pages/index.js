// pages/index.js
const list = require("./event.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    doc:{
      title:"X",
      desc:"X组件提供了丰富的小程序开发组件,能够帮助开发更快的开发小程序,下面是各个组件的演示"
    },
   list:list,
    showLeft:true,
    bar: {
      text: '加群[783921168]获取源码 <-------- 加群[783921168]获取源码 <--------   加群[783921168]获取源码   <-------- 重要事情说三遍!',
      leftIcon: 'https://img.yzcdn.cn/public_files/2017/8/10/6af5b7168eed548100d9041f07b7c616.png',
      mode: '',//closeable
      scrollable: true,
      speed: 10
    }
   
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
  },
  bindPushGeiZan(){
    wx.navigateToMiniProgram({
      appId: 'wx18a2ac992306a5a4',
      path: 'pages/apps/largess/detail?id=aQOaqQPzE6U%3D',
      extraData: {
        foo: 'bar'
      },
      envVersion: 'release',
      success(res) {
        // 打开成功
      }
    })
  },
  bindStart(e){
   this.setData({
     showLeft:false
   })
  },
  bindEnd(e){
    this.setData({
      showLeft: true
    })
  }
})