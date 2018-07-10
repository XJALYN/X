
var path = {
  blog:"/pages/blog/blog",
  blogDetail: "/pages/blogDetail/blogDetail",
  plugIn:"/pages/plugIn/plugIn"
}
wx.router  = {
  // 将json 编码成 urlEncoded 格式为key1=value1&key2=value2
  urlEncoded(e) {
    if (e instanceof Object) {
      var str = ""
      for (var i in e) {
        str += '&'
        str += i
        str += '='
        str += e[i]
      }
      return str.substr(1, str.length - 1)
    }
    return ''
  },

  // 跳转至页面
  pushToPath(path, params) {
    var paras = this.urlEncoded(params)
    wx.navigateTo({
      url: path + '?' + paras,
    })
  },
  redirectToPath(path, params) {
    var paras = this.urlEncoded(params)
    wx.redirectTo({
      url: path + '?' + paras,
    })
  },
  pushToBlogDetail(params){
    this.pushToPath(path.blogDetail,params)
  },
  pushToBlog(params){
    this.pushToPath(path.blog,params)
  },
  pushToPlugIn(params){
    this.pushToPath(path.plugIn, params)
  }
  
}
