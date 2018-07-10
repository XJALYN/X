module.exports = {
  bindPushToBlogDetail(e){
    var params = {
      id:this.data.course_id,
      groupId: this.data.content_group_id,
      title:this.data.title,
      created_at:this.data.created_at,
      author:this.data.author
    }
    wx.router.pushToBlogDetail(params)
  }
  
}