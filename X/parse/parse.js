// X/parse/parse.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    src:{
      type:String,
      value:""
    },
    html:{
      type: String,
      observer: function (newValue, oldValue) {
        this.parseData(newValue, "html")
      }
    },
    md:{
      type: String,
      string:"",
      observer:function(newValue,oldValue){
        this.parseData(newValue,"md")
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  ready(){
  
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    parseData(data,dataType){
      var WxParse = require('./wxParse/wxParse.js');
      var article = data;
      /**
      * WxParse.wxParse(bindName , type, data, target,imagePadding)
      * 1.bindName绑定的数据名(必填)
      * 2.type可以为html或者md(必填)
      * 3.data为传入的具体数据(必填)
      * 4.target为Page对象,一般为this(必填)
      * 5.imagePadding为当图片自适应是左右的单一padding(默认为0,可选)
      */
      var that = this;
      WxParse.wxParse('article', dataType, article, that, 5);
    }
  }
})
