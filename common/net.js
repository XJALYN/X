// 1.获取博客列表
// 2.获取插件分类
// 3.获取插件列表

wx.net = {
  //  1
  getBlogList(contentGroupID,limit=20,offset=0){
    let MyContentGroup = new wx.BaaS.ContentGroup(contentGroupID)
    var promise = new Promise((resolve,reject)=>{
      MyContentGroup.select(['cover', 'created_at', 'id', 'group_id', 'title', 'author']).limit(limit).offset(offset).find().then(res=>{
         resolve(res)
      }).catch(err=>{
         reject(err)
      })
    })
    return promise
    
  },
  // 2
  getPlugInCategory(){
    var tableId = 43135
    var PlugInCategory = new wx.BaaS.TableObject(tableId)
    var promise = new Promise((resolve,reject)=>{
      PlugInCategory.find().then(res=>{
         resolve(res)
      }).catch(err=>{
         resolve(err)
      })
    })
    return promise
  },
  // 3
  getPlugInList(plugInCategoryId='',limit=20,offset=0){
    var tableId = 43134
    var PlugIn= new wx.BaaS.TableObject(tableId)
    var query = new wx.BaaS.Query()
    if (plugInCategoryId == "5b40569c5f51350cdd6444f2" || plugInCategoryId ==''){
      query.compare('plug_category_id', '!=', plugInCategoryId)
    }else{
      query.compare('plug_category_id', '=', plugInCategoryId)
    }
    
    var promise = new Promise((resolve, reject) => {
      PlugIn.setQuery(query).limit(limit).offset(offset).find().then(res => {
        resolve(res)
      }).catch(err => {
        resolve(err)
      })
    })
    return promise
  },

  getBlogDetail(contentGroupID, richTextID) {
    var promise = new Promise((resolve,reject)=>{
      let MyContentGroup = new wx.BaaS.ContentGroup(contentGroupID)
      MyContentGroup.getContent(richTextID).then(res => {
        resolve(res)
      }, err => {
       reject(err)
      })
    })
    return promise
  }
}