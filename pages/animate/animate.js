// pages/animate/animate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    doc:{
      title:"动画组件",
      desc:"使用动画组件很方便的实现各种炫酷的动画效果"
    },
    animates:[],
    list:[
      "bounce",
      "flash",
      "pulse",
      "rubberBand",
      "shake",
      "swing",
      "tada",
      "wobble",
      "jello",
      "bounceIn",
      "bounceInDown",
      "bounceInLeft",
      "bounceInRight",
      "bounceInUp",
      "bounceOut",
      "bounceOutDown",
      "bounceOutUp",
      "bounceOutRight",
      "bounceOutLeft",
      "fadeIn",
      "fadeInDown",
      "fadeInUp",
      "fadeInLeft",
      "fadeInRight",
      "fadeInUpBig",
      "fadeInDownBig",
      "fadeInRightBig",
      "fadeInLeftBig",
      "fadeOut",
      "fadeOutDown",
      "fadeOutUp",
      "fadeOutLeft",
      "fadeOutRight",
      "fadeOutUpBig",
      "fadeOutDownBig",
      "fadeOutRightBig",
      "fadeOutLeftBig",
      "flip",
      "flipInX",
      "flipInY",
      "flipOutX",
      "flipOutY",
      "lightSpeedIn",
      "lightSpeedOut",
      "rotateOut",
      "rotateOutDownLeft",
      "rotateOutDownRight",
      "rotateOutUpLeft",
      "rotateOutUpRight",
      "slideInUp",
      "slideInDown",
      "slideInLeft",
      "slideInRight",
      "slideOutUp",
      "slideOutDown",
      "slideOutLeft",
      "slideOutRight",
      "zoomIn",
      "zoomInDown",
      "zoomInLeft",
      "zoomInRight",
      "zoomOut",
      "zoomOutDown",
      "zoomOutLeft",
      "zoomOutRight",
      "zoomOutUp",
      "hinge",
      "jackInTheBox",
      "rollIn",
      "rollOut"
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
  bindTapAnimate(e){
   var index = e.currentTarget.dataset.index
   console.log(index)
   this.setData({
     [`animates[${index}]`]:this.data.list[index]
   })
  }
})