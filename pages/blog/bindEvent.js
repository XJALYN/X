module.exports = {
  bindPushToBlogDetail(e){
    var value = e.currentTarget.dataset.value
    console.log(value)
    if (value.wx_article_id != '' && value.wx_article_id != null){
      wx.router.pushToWeb({ "url": "https://mp.weixin.qq.com/s/" + value.wx_article_id})
    }else{
      wx.router.pushToBlogDetail(value)
    }
    
    
  }
}