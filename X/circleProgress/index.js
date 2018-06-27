// X/circleProgress/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    progress:{
      type:null,
      value:0,
      observer:function(newValue,oldValue){
        var value = parseFloat(oldValue)
        if(this.data.animated){
          var timer = setInterval(()=>{
             value += 0.01
             this.draw(parseFloat(value))
             if (value >= parseFloat(newValue)||value >1){
                console.log("内存释放了")
                clearInterval(timer)
             }
          },10)

        }else{
          this.draw(parseFloat(newValue))
        }
        
      }
    },

    radius:{
      type:Number,
      value:100,
      observer:function(newValue,oldValue){
        this.draw(parseFloat(this.data.progress))
      }
    },
    animated:{
      type:Boolean,
      value:false
    },

   lineWidth: {
    type: Number,
    value: 10
   },
   tintColor:{
     type:String,
     value:"#00ff00"
   },

   bgColor:{
     type:String,
     value:"rgb(247,247,247)",
     observer: function (newValue, oldValue) {
       this.draw(parseFloat(this.data.progress))
     }
   },
   gradientStartColor:{
     type:String,
     value:"red",
     observer: function (newValue, oldValue) {
       this.draw(parseFloat(this.data.progress))
     }
   },
   gradientStopColor:{
     type: String,
     value: "yellow",
     observer: function (newValue, oldValue) {
       this.draw(parseFloat(this.data.progress))
     }
   },
   gradient:{
     type:null,
     value:false,
     observer: function (newValue, oldValue) {
       this.draw(parseFloat(this.data.progress))
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
    draw(progress){
      console.log(progress)
      var context = wx.createCanvasContext('circle-progress',this)
      if (this.data.gradient||this.data.gradient=='true'){
        var gradient = context.createCircularGradient(this.data.radius + this.data.lineWidth, this.data.radius + this.data.lineWidth, this.data.radius + this.data.lineWidth / 2.0)
        gradient.addColorStop(0.9, this.data.gradientStartColor)
        gradient.addColorStop(1, this.data.gradientStopColor)
        context.setStrokeStyle(gradient)
      }else{
        context.setStrokeStyle(this.data.tintColor)
      }
      context.setLineWidth(this.data.lineWidth)
      context.arc(this.data.radius + this.data.lineWidth, this.data.radius + this.data.lineWidth, this.data.radius + this.data.lineWidth/2.0, Math.PI * 1.5, Math.PI * 1.5 - progress*2 * Math.PI, true)
      context.stroke()
      context.draw()
    }
  }
})
