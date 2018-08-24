// pages/refresh/refresh.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loading:false,
    doc:{
      title:"下拉刷新组件",
      desc:"能够自定义系统的下拉样式"
    },
    selectedIndex:1
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
    this.setData({
      loading:true
    })
    setTimeout(res => {
      wx.stopPullDownRefresh()
      this.setData({
        loading: false
      })
    }, 3000)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
   
  },
  bindSelected(e){
   this.setData({
     selectedIndex:e.currentTarget.dataset.index
   })
  }
})