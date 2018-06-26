// pages/multingKeyboard/multingKeyboard.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     doc:{
       title:"多功能键盘",
       desc:"1.支持选择本地图片\n2.支持系统键盘输入\n3.支持表情功能\n 4.支持更多功能"
     },
     addList: [
       { title: "照片", src: "./images/image.png" },
       { title: "拍照", src: "./images/camera.png" },
       { title: "录像", src: "./images/vedio.png" },
       { title: "定位", src: "./images/location.png"},
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
  bindInputFinish(e){
    console.log(e)
  },
  bindRecordFinish(e){
    console.log(e)
  },
  bindChangeFunction:function(e){
   
    switch (e.detail.value){
      case 0 : wx.chooseImage({
        sourceType:["album"],
        success: function(res) {},
      });break;
      case 1: wx.chooseImage({
        sourceType: ["camera"],
        success: function (res) { },
      }); break;
      case 2 : wx.chooseVideo({
        sourceType: ["camera"],
        success: function (res) { }
      }); break;
      case 3 : wx.getLocation({
        success: function(res) {

        },
      }); break;

    }
  }
})