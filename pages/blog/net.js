module.exports = {
  net_getArticleList(isRefresh){
  
    if(!isRefresh){
      wx.showNavigationBarLoading()
    }
    this.setData({
      offset:0,
      noMore:true
    })
    wx.net.getBlogList(this.data.contentGroupID,this.data.limit,this.data.offset).then(res => {
      if(isRefresh){
        wx.stopPullDownRefresh()
      }else{
        wx.hideNavigationBarLoading()
      }
    
      var list = res.data.objects.map(res=>{
        console.log(res)
        res.created_at = new Date(res.created_at * 1000).toLocaleString()
        return res
      })
      this.setData({
        list: list
      })
      console.log(res)
    }, err => {
      wx.hideNavigationBarLoading()
    })
  },
  net_getMoreArticleList(){

    if(this.data.noMore){
      return
    }
    this.data.offset = this.data.list.length
    wx.net.getBlogList(this.data.contentGroupID, this.data.limit, this.data.offset).then(res => {
      var list = res.data.objects.map(res => {
        console.log(res)
        res.created_at = new Date(res.created_at * 1000).toLocaleString()
        return res
      })
      if(list.length < this.data.limit){
        this.setData({
          noMore:true
        })
      }
      this.data.list = this.data.list.concat(list)
      this.setData({
        list: this.data.list
      })
      console.log(res)
    }, err => {

    })
  }
}