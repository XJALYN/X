// X/pageDoc/pageDoc.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type:String,
      value:""
    },
    desc:{
      type:String,
      value:""
    },
    showReward:{
      type:Boolean,
      value:true
    }
  },
  methods:{
    bindPushToGeiZan(e){
      wx.navigateToMiniProgram({
        appId: 'wx18a2ac992306a5a4',
        path:"pages/apps/largess/detail?id=aQOaqQPzE6U%3D"
      })
    }
  }
})
