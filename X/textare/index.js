// X/textare/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    max:{
      type:String,
      value:150
    },
    placeholder:{
      type:String,
      value:"请输入内容"
    },
    fontSize:{
      type:String,
      value:"15"
    },
    color:{
      type:String,
      value:"rgb(70,70,70)"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    current:0
  },

 /**
  * 组件的方法列表
  */
  methods: {
    bindInput(e){
      var value = e.detail.value
      this.setData({
        current:value.length
      })
      this.triggerEvent("input",{value:value})
    }
  },

  bindConfirm(e){
    var value = e.detail.value
    this.triggerEvent("confirm", { value: value })
  },

  bindBlur(e){
    var value = e.detail.value
    this.triggerEvent("blur", { value: value })
  }
})
