module.exports = {
  bindPushToBlogDetail(e){
    var value = e.currentTarget.dataset.value
    wx.router.pushToBlogDetail(value)
  }
}