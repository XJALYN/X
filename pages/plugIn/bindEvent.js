module.exports = {
  bindPushToBlogDetail(e){
    var params = {
      id:this.data.course_id,
      groupId: this.data.content_group_id,
      title:this.data.title,
      created_at:this.data.created_at,
      author:this.data.author
    }
    if (this.data.wx_article_id != '' && this.data.wx_article_id != null) {
      wx.router.pushToWeb({ "url": "https://mp.weixin.qq.com/s/" + this.data.wx_article_id })
    } else {
      wx.router.pushToBlogDetail(params)
    }
   
  }
  
}