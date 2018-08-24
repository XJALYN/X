// X/text/text.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    showAll:{
      type:Boolean,
      value:false
    },
    value:{
       type:String,
       value:"",
       observer: function (newValue, oldValue) {
         var summary = newValue.substr(0, this.data.summaryMax)
         this.setData({
           summary,
           showFold: newValue.length > this.data.summaryMax
         })
       }
    },
    summaryMax:{
      type:Number,
      value:50,
      observer:function(newValue,oldValue){
        var summary = this.data.value.substr(0, newValue)
        this.setData({
          summary
        })
      }
    },
    color:{
      type:String,
      value:"rgb(50,50,50)"
    },
    fontSize:{
      type:String,
      value:"15px"
    },
    foldColor:{
      type: String,
      value: "rgb(83,145,236)"
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    summary:"",
    showFold:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindChangeUnfold(){
      this.setData({
        showAll: !this.data.showAll
      })
    }
  }
})
