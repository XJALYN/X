// pages/moments/moments.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    doc: {
      title: "moments",
      desc: "微信朋友圈组件"
    },
    images: ['http://img18.3lian.com/d/file/201708/03/423916be7c2cd70208107aafe6572ba0.jpg', 'http://img18.3lian.com/d/file/201708/03/423916be7c2cd70208107aafe6572ba0.jpg'],
    likeUsers: [{ nickName: "块来" }, { nickName: "王天一" }, { nickName: "山河上" }],
    comments: [{ nickName: "张飒", text: "不可以", commentNickName: "33" }, { nickName: "张飒", text: "不可以", commentNickName: "33", type: 1 }]
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
  
  }
})