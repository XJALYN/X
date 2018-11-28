
const event = require('payment_event');
const app = getApp()

const options = {
  ...event,
  /**
   * 页面的初始数据
   */
  data: {
    list: [
      { name: "建设银行", num: "2345", offsetY: 0,index:0 },
      { name: "工商银行", num: "9987", offsetY: 0, index: 1},
      { name: "工商银行", num: "9987", offsetY: 0, index: 2}],
    handleAnimated: false,
    timer:null
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

  
}
Page(options)
