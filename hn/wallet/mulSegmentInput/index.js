// hn/wallet/withdraw/mulSegmentInput/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isPlain:{
      type:Boolean,
      value:true
    },
    value: {
      type:String,
      value:""
    },
    focus:{
      type:Boolean,
      value:false
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    nums:[],
   
  },

  /**
   * 组件的方法列表
   */
  methods: {
    inputPassword(e){
      this.setData({
        value:e.detail.value
      })
      console.log(e)
      if(this.data.value.length==6){
        this.triggerEvent("finish",{value:this.data.value})
      }
    }
  }
})
