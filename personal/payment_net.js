module.exports = {
  net_mycard(){
    wx.fetch({
      url: wx.api.queryMyCards
    }).then(res=>{
      
      this.data.list = res.data.map(item=>{
        let cardNo = item.cardNo
        let length = item.cardNo.length
        item.cardNumLast = cardNo.substring(length-4,length)
        item.carNumFirst = cardNo.substring(0, 3)
        return item
      })
      this.setData({
        list:this.data.list
      })
      console.log(this.data.list)
    })
  }
}