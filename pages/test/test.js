// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    gif: ["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534829834997&di=3d5391f4c2a07978fc927d0415a8a1f1&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0127c0577e00620000012e7e12da0e.gif","/images/about.png"],
    image:"",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let count = 0
    setInterval(()=>{
     this.setData({
       image:this.data.gif[count%2]
     })
     count ++
    },200)
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