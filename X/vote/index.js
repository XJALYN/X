// X/vote/vote.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
     type:String,
     value:"请进行投票(单选)"
    },
    list:{
      type:Array,
      value:[]
    },
    activeIndex:{
       type:Number,
       value:-1
    },
    checked:{
      type:null,
      value:false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
     voteItem:'',
     index:''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindChange(e){
      var index = e.detail.value
      var data = this.data.list[index]
      data["index"] = index
      this.data.index = index
      this.setData({
        voteItem: data,
        activeIndex:index
      })
     this.triggerEvent("Change",e.detail.value)
    },

    bindVote(e){
      this.triggerEvent("Submit", this.data.voteItem)
    }
  }
})
