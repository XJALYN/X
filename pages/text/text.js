// pages/text/text.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    doc:{
      title:"text",
      desc:"有折叠功能的文字显示text,可自定义文字大小 颜色,折叠按钮的颜色"
    },
    value: "当查询的数据页如果在Buffer pool里找到了，则没有任何等待。否则就会发出一个异步io操作，将页面读入到buffer pool,没做完之前，连接会保持在PageIoLatch_ex(写)或PageIoLatch_sh(读)的等待状态，是Buffer pool与磁盘之间的等待"
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