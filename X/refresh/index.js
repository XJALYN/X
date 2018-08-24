// X/refresh/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

    // 设置为true 还是加载 false 加载结束,回复初始样式
    loading:{
      type:Boolean,
      value:false,
      observer:function(newValue){
       if(newValue){
         this.loadingAnimated()
       }else{
         this.stopAnimated()
       }
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
   timer:"",
   images:["./images/about.png"],
    displayImage:'./images/12.png'
  },
  ready(){
   
  },
  
  detached(){
    this.stopAnimated()
  },
  

  /**
   * 组件的方法列表
   */
  methods: {
    loadingAnimated() {
      clearInterval(this.data.timer)
      let count = 0
      this.data.timer = setInterval(res => {
        this.setData({
          displayImage: "./images/" + (count % 21 + 1) + ".png"
        })
        count++
      }, 50)
    },
    stopAnimated() {
      this.setData({
        displayImage: './images/12.png'
      })
      clearInterval(this.data.timer)
    },
  },

})
