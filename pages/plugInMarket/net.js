module.exports = {
  net_getPlugInCategory(){
    wx.net.getPlugInCategory().then(res=>{
      if(res.statusCode==200){
        this.setData({
          menuList:res.data.objects
        })
        this.net_getPlugInList()
      }
    }).catch(err=>{

    })
  },
  net_getPlugInList(catogoryId){
   
    this.setData({
      loaded:false,
      noMore:false,
      offset:0
    })
    wx.showNavigationBarLoading()
    wx.net.getPlugInList(catogoryId).then(res=>{
      this.setData({
        loaded: true
      })
      wx.hideNavigationBarLoading()
      var list = res.data.objects.map(res=>{
        res.created_at = new Date(res.created_at * 1000).toLocaleDateString()
        return res
      })
      this.setData({
        plugInList: list
      })
    }).catch(err=>{
     
    })
  },
  net_getMorePlugInList(){
    if(this.data.noMore){
      return
    }
    this.data.offset = this.data.plugInList.length
    wx.net.getPlugInList(catogoryId,this.data.limit.this.data.offset).then(res => {
      this.setData({
        loaded: true
      })
   
      var list = res.data.objects.map(res => {
        res.created_at = new Date(res.created_at).toLocaleDateString()
        return res
      })
      if(list.length < this.data.limit){
       this.setData({
         noMore:true
       })
      }
      this.data.plugInList = this.data.plugInList.concat(list)
      this.setData({
        plugInList: this.data.plugInList
      })
    }).catch(err => {

    })

  }
}