// X/chart1/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: {
      type: Array,
      value: []
    },
    scale:{
      type:Number,
      value:15000,
      observer:function(newValue){
        let a = parseInt(newValue / 3)
        let list = [newValue,a*2,a,0]
        this.setData({
          scaleList:list,
          factor: 204.0 / newValue
        })
      }
    },


    types: {
      type: Array,
      value: [
        {
          title: "线上支付",
          color: "rgb(255,98,0)",
          textColor: "rgb(50,50,50)"
        },
        {
          title: "线下支付",
          color: "rgb(21,100,255)",
          textColor: "rgb(50,50,50)"
        }
      ]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    scaleList: [15000, 10000, 5000, 0],
    factor:0.0161333,

 
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
