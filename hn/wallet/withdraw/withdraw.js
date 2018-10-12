// hn/wallet/withdraw/withdraw.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showPaymentList:false,
    showInputPassword:false,
    password:""
    
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
  bindShowPaymentList(e){
    this.setData({
      showPaymentList:true
    })
  },
  bindHidePaymentList(e){
    this.setData({
      showPaymentList: false
    })
  },
  bindPasswordInputConfirm(e){
    this.setData({
      password: e.detail.value
    })
    wx.showLoading({
      title: '',
      duration:3000
    })
    // 调用提现接口,提现完成后清理passowrd 和提现金额
  },

  // 点击提现按钮
  bindWithdraw(e){
    this.setData({
      showInputPassword:true
    })
  },
  bindHideInputPassword(){
    this.setData({
      showInputPassword: false
    })
    this.setData({
      password:""
    })
  }

})