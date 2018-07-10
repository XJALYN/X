module.exports = {
  net_getArticle(){
    wx.net.getBlogDetail(this.data.contentGroupID, this.data.richTextID).then(res=>{
      this.setData({
        article: res.data
      })
      wx.setNavigationBarTitle({
        title: res.data.title,
      })
    })
  }
}