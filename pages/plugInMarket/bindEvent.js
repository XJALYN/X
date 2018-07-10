module.exports = {
  bindSelectedMenu(e){
    var index = e.currentTarget.dataset.index
    var value = e.currentTarget.dataset.value
    this.setData({
      activeIndex:index
    })
    console.log(value)
    this.net_getPlugInList(value._id)
  },
  bindPushToPlugIn(e){
    var value = e.currentTarget.dataset.value

    value.cover &&(value.cover = value.cover.path)
    value.display_image &&(value.display_image = value.display_image.path) 
    wx.router.pushToPlugIn(value)
  }
}