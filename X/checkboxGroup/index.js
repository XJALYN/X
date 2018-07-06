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
      value:2
    },
    activeIndexs:{
      type:Array,
      value:[],
      observer:function(newValue){
        console.log(newValue)
        this.setup(newValue)
      }
    },
    disableIndexs:{
      type: Array,
      value: [],
      observer:function(newValue){
        this.disableItems(newValue)
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

    setup(activeIndexs){
       for (var i = 0; i < this.data.list.length; i++) {
         activeIndexs = activeIndexs.map(res=>{
           return parseInt(res)
         })
         if (activeIndexs.indexOf(i) > -1) {
           console.log("yddd")
           this.data.list[i].checked = true
         } else {
           this.data.list[i].checked = false
         }
       }
       this.setData({
         list: this.data.list
       })
     },
    disableItems(disableList){
      for (var i = 0; i < this.data.list.length; i++) {
        disableList = disableList.map(res => {
          return parseInt(res)
        })
        if (disableList.indexOf(i) > -1) {
          console.log("yddd")
          this.data.list[i].disable = true
        } else {
          this.data.list[i].disable = false
        }
      }
      this.setData({
        list: this.data.list
      })
    },

     checkboxChange(e){
       if (e.detail.value.length <= this.data.limit){
         this.triggerEvent("Change", { value: e.detail.value })
       }else{
         this.triggerEvent("Change", { value: this.data.activeIndexs })
       }
     }
  }
})
