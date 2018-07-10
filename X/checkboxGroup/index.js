// X/checkboxGroup/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list:{
      type:Array,
      value: [],
      observer:function(newValue){
      }
    },
    value:{
     type:String,
     value:[]
    },
    limit:{
      type:Number,
      value:1000
    },
    disableKey:{
       type:String,
       value:"disable"
    },
    checkedKey:{
      type:String,
      value:"checked"
    },
    countKey:{
      type:String,
      value:"count"
    },
    disable:{
      type:Boolean,
      value:false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    activeIndexs:[]
  },

  /**
   * 组件的方法列表
   */
  methods: {

     checkboxChange(e){
       if (e.detail.value.length <= this.data.limit){
         this.data.activeIndexs = e.detail.value
       }
         this.triggerEvent("Change", { value: this.data.activeIndexs })
       
     }
  }
})
