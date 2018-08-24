// X/chart/chart.js

let MAX_Y = 120
let MAX_X = 286
let DIAGRAM_WIDTH = 20
let ORIGIN_X = 63
let OROGIN_Y = 30
let OFFSET_Y = 30
let CHARR_BOTTOM = 50
let TITILT_COLOR = "rgb(50,50,50)" // 月份标题的颜色
let ASPECT = 1.0

Component({
  /**
   * 组件的属性列表
   */
  properties: {
     list:{
       type:Array,
       value: [],
       observer:function(){
         this.setUp()
       }
     },

     scale:{
      type:Number,
      value:15000,
      observer:function(){
        this.setUp()
      }
     },

    showChart:{
      type:Boolean,
      value:true,
      observer: function(newValue){
        if(!newValue){

        }else{
          this.setUp()
        }
      }
    },
     scaleCount:{
      type:Number,
      value:4
     },
     scaleColor:{
       type:String,
       value:"#D3D3D3"
     },

     types:{
       type:Array,
       value:[
         {
           title: "线上支付",
           color:"rgb(255,98,0)",
           textColor:"rgb(50,50,50)"
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
    chartHeight: OFFSET_Y + OROGIN_Y + MAX_Y ,
    maskImageUrl:"",
  },
  
  ready(){
    // this.setUp()
    var that = this
    wx.createSelectorQuery().in(this).select('.chart').boundingClientRect(function (rect) {
      let num = (that.data.scale+"").length 
      MAX_Y = 121
      ORIGIN_X = 25 + num * 7
      MAX_X = 375 - ORIGIN_X - 25
      DIAGRAM_WIDTH = 20
      OROGIN_Y = 30
      OFFSET_Y = 30
      CHARR_BOTTOM = 50
      TITILT_COLOR = "#6D6D6D" // 月份标题的颜色
      ASPECT = 1.0
      
      ASPECT = rect.width / 375.0
      MAX_X *= ASPECT
      MAX_Y *= ASPECT
      DIAGRAM_WIDTH *= ASPECT 
      ORIGIN_X *= ASPECT
      OROGIN_Y *= ASPECT
      OFFSET_Y *= ASPECT
      CHARR_BOTTOM *= ASPECT
      that.setData({
        chartHeight: OFFSET_Y + OROGIN_Y + MAX_Y
      })
      that.setUp()
    }).exec()
  },

  /**
   * 组件的方法列表
   */
  methods: {
    setUp(){
      const ctx = wx.createCanvasContext('myCanvas', this)
      // 先把背景弄黑色
      ctx.setFillStyle("white");
      ctx.fillRect(0, 0, ORIGIN_X + MAX_X + 50, MAX_Y + OROGIN_Y + OFFSET_Y)
      ctx.translate(0, MAX_Y + OROGIN_Y)
      this.initCoordinateSystem(ctx)
      this.initScale(ctx)
      this.initList(ctx)
      // this.initExplain(ctx)
      ctx.draw(false,()=>{
        wx.canvasToTempFilePath({
          x: 0,
          y: 0,
          canvasId: 'myCanvas',
          success: (res) => {
            console.log(res)
            this.setData({
              maskImageUrl: res.tempFilePath,
            })
            setTimeout(res=>{
              this.setData({
                showChart: false
              })
            },100)
          }, fail: err => {
            console.log(err)
          }
        }, this)
      })
    
   
    },
    /**************/
    // 初始化坐标系
    /**************/
    initCoordinateSystem(ctx){
      ctx.beginPath()
      // ctx.setStrokeStyle("rgb(150,150,150)")
      // ctx.moveTo(ORIGIN_X, 0)
      // ctx.lineTo(ORIGIN_X, -MAX_Y - 10)
      // ctx.moveTo(ORIGIN_X, 0)
      // ctx.lineTo(ORIGIN_X + MAX_X, 0);
      // ctx.stroke()
      ctx.setFillStyle(this.data.scaleColor)
      ctx.setTextAlign("right")
      ctx.setTextBaseline('middle')
      // ctx.setFontSize(13)
      // ctx.fillText(this.data.unitY, ORIGIN_X,-MAX_Y-10)


    },
    /**************/
    // 初始化比例尺和虚线
    /**************/
    initScale(ctx){

      // ctx.setLineDash([5, 10], 0);
      ctx.setStrokeStyle("rgb(240,240,240)")
      for (var i = 0; i < this.data.scaleCount; i++) {
        var deltaHeight = MAX_Y / (this.data.scaleCount - 1);
        ctx.beginPath();
        ctx.setLineWidth(1)
        ctx.moveTo(ORIGIN_X, -(i * deltaHeight));
        ctx.lineTo(ORIGIN_X + MAX_X, -(i * deltaHeight));
        ctx.stroke();
        ctx.setFillStyle(this.data.scaleColor)
        ctx.setTextAlign("right")
        ctx.setTextBaseline('middle')
        ctx.setFontSize(11 * ASPECT)
        ctx.fillText(Math.floor(this.data.scale / (this.data.scaleCount - 1)) * i, ORIGIN_X - 10, -(i * deltaHeight))
      }
    },
    /**************/
    // 初始化柱形图
    /**************/
    initList(ctx){
      ctx.setLineDash([10,0]);
      ctx.save()
      ctx.translate(ORIGIN_X,0)
      for (var i in this.data.list) {
        var item = this.data.list[i]
        var deltaWidth = (MAX_X) / this.data.list.length 
        var offset = 20;

        // 单项多个柱状图
        for (var j in item.values) {
          let value = item.values[j]
          let delta =  j * 30
          ctx.beginPath()
          ctx.setLineWidth(DIAGRAM_WIDTH)
          ctx.setStrokeStyle(value.color)
          ctx.moveTo(offset + i * deltaWidth + delta, 0)
          ctx.lineTo(offset + i * deltaWidth  + delta, - (MAX_Y * 1.0 / this.data.scale * value.value))
          
          ctx.stroke()
        }
       
         // 绘制旋转的数字
        for (var z in item.values) {
          let value = item.values[z]
          let deltaX =  z*30
          ctx.save()
          console.log(offset + i * deltaWidth + deltaX)
          ctx.translate(offset/2.0 + i * deltaWidth + deltaX, - (MAX_Y * 1.0 / this.data.scale * value.value) )
          ctx.rotate(-30 * Math.PI / 180)
          ctx.setFillStyle(value.color)
          ctx.setTextAlign("left")
          ctx.setTextBaseline("bottom")
          ctx.fillText("¥" + value.value, 0, 0)
          ctx.setTextAlign("right")
          ctx.restore()
        }
       

        ctx.setFontSize(11 *ASPECT)
        ctx.setFillStyle(item.color)
        ctx.setTextAlign("right")
        ctx.setTextBaseline("top")
        let center = (DIAGRAM_WIDTH * item.values.length + (item.values.length-1)*10.0 )/2.0
        ctx.fillText(item.name, offset + center + i * deltaWidth, 10 * ASPECT)
      }
      ctx.restore()
    },

    initExplain(ctx){
      for (var i in this.data.types){
        // 计算上一个项文字的长度
        var textLength = 0
        var fontSize = 13
        if(i > 0){
           textLength = this.data.types[i-1].title.length
        }
        var item = this.data.types[i]
        ctx.setFillStyle(item.color)
        ctx.fillRect(MAX_X - i * textLength * fontSize*1.5, 44.5, 13, 13)
        ctx.setFontSize(fontSize)
        ctx.setFillStyle(item.textColor)
        ctx.setTextAlign("right")
        ctx.setTextBaseline("middle")
        ctx.fillText(item.title, MAX_X - i * textLength * fontSize*1.5 - 5, 50)
      }
    }
  }
})
