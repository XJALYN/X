// XComponents/footer/footer.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
   title:{
     type:String,
     value:"下标通过title设置"
   },
   links:{
     type:Array,
     value:[]
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
    bindSelected(e){
      var value = e.currentTarget.dataset.value
      this.triggerEvent('Selected',{'value':value})
    }
  }
})
