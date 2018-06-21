// XComponents/searchbar/searchbar.js

// @props
// placehold 占位符
// textList 传入搜索文本列表

// @event
// bindClear 单击取消按钮
// bindChange     选择了项
// bindInput      绑定了输入


Component({
  /**
   * 组件的属性列表
   */
  properties: {

    textList:{
      type:Array,
      value:[]
    },

    placehold:{
      type:String,
      value:"搜索"
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    inputShowed: false,
    inputVal: ""
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showInput: function () {
      this.setData({
        inputShowed: true
      });
    },
    hideInput: function () {
      this.setData({
        inputVal: "",
        inputShowed: false
      });
      this.triggerEvent("Clear", {})
    },
    clearInput: function () {
      this.setData({
        inputVal: ""
      });
      this.triggerEvent("Clear", {})
    },
    inputTyping: function (e) {
      this.setData({
        inputVal: e.detail.value
      });
      this.triggerEvent("Input", { 'value': e.detail.value })
    },
    bindSelectedText:function(e){
      var value = e.currentTarget.dataset.value
      this.triggerEvent("Change", { 'value': value})
    }
  }
})
