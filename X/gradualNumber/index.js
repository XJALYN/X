// X/gradualNumber/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    startNumber:{
      type:null,
      value:0,
      observer:function(newValue,oldValue){

      }
    },
    endNumber:{
      type:null,
      value:0,
      observer:function(newValue,oldValue){
        this.startGradual(parseInt(newValue))
      }
    },
    fontSize:{
      type:String,
      value:18
    },
    color:{
      type:String,
      value:"black"
    },
    speed:{
      type:null,
      value:50
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentValue:0
  },
  
  /**
   * 组件的方法列表
   */
  methods: {
    startGradual(newValue){
      var minus = this.data.currentValue < newValue
        var timer = setInterval(() => {
          console.log(this.data.currentValue)
          this.setData({
            currentValue: minus ? ++this.data.currentValue : --this.data.currentValue
          })
          if (this.data.currentValue == newValue) {
            clearInterval(timer)
          }
        }, 100/ this.data.speed)
      }
  }
})
