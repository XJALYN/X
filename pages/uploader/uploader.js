// pages/uploader/uploader.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    doc:{
      title:"uploader",
      desc:"图片上传组件,只需要设置上传的路径,自动完成图片选取,图像上传功能,组件有回调函数自动检测服务器返回的结果"
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
  bindUploadFail(e){
    console.log(e)
  },
  bindUploadSuccess(e){
    console.log(e)
  }
})