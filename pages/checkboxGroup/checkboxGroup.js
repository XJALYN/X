// pages/checkboxGroup/checkboxGroup.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {name:"中国🇨🇳"},
      { name: "美国🇺🇸" },
      { name: "德国🇩🇪" },
      { name: "日本🇯🇵" },
      ],
    activeIndexs:[0],
    disableIndexs:[1],
    doc:{
      title:"checkboxGroup",
      desc:"多选列表,支持投票选项限制"
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
    this.setData({
      activeIndexs:e.detail.value
    })
  }
})