// X/countdown/countdown.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

    // 最终的时间
    time:{
      type: Number,
      value: 0,
      observer:function(newValue,oldValue){
      
      }
    },

    // 变化时间检测
    interval:{
      type: Number,
      value: 1000
    },

    // 模板
    tpl:{
      type:String,
      value:'{SS}s',
      observer: function (newValue, oldValue) {
        console.log(newValue)
        var units = newValue.match(/(}.{)|(}.$)/g).map(str => {
          return str.replace("{", '').replace("}", '')
        })
        var timeFlags = newValue.match(/{..}/g).map(str => {
          return str.replace("{", '').replace("}", '')
        })

        this.setData({
          units: units,
          timeFlags: timeFlags
        })
        if (timeFlags.indexOf("yy") != -1) {
          this.data.maxUnit = 'yy'
          return
        }
        if (timeFlags.indexOf("mm") != -1) {
          this.data.maxUnit = 'mm'
          return
        }

        if(timeFlags.indexOf("dd") != -1){
          this.data.maxUnit = 'dd'
          return
        }
        if (timeFlags.indexOf("HH") != -1){
          this.data.maxUnit = 'HH'
          return
        }
        if (timeFlags.indexOf("MM") != -1) {
          this.data.maxUnit = 'MM'
          return
        }
        if (timeFlags.indexOf("SS") != -1) {
          this.data.maxUnit = 'SS'
          return
        }
      }
      
    },

    // 容器样式
    timeWrapStyle:{
      type:String,
      value:""
    },

    // 时间文字样式
    timeTextStyle:{
      type: String,
      value: "background-color:rgb(70,70,70);padding-left:4px;padding-right:4px;color:rgb(162,130,70);font-size:12px;line-height:16px;"
    },

 

    // 点文字样式
    dotTextStyle:{
      type: String,
      value: "padding:0px 2px;color:black;font-size:13px"
    }
    
  },

  /**
   * 组件的初始数据
   */
  data: {
    units:[],
    timeFlags:[],
    year:'00',
    month: '00',
    day: '00',
    hour: '00',
    minute: '00',
    second: '00',
    maxUnit:'SS',
    timer:'',
  },

  ready(){
    Number.prototype.twoBit = function (e) {
      return this > 10 ? this : '0' + this
    }
    this.data.timer =   setInterval(res=>{
      this.countDown()
    }, this.data.interval)
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
     countDown(){
        var lastDate = new Date(this.data.time)
        var startDate = new Date()
        
        if(startDate >= lastDate){
          this.triggerEvent("Complete", {})
          clearInterval(this.data.timer)
          return
        }

        var year = lastDate.getFullYear() - startDate.getFullYear()
        var month = lastDate.getMonth() - startDate.getMonth()
        var day = lastDate.getDay() - startDate.getDay()
        var hour =lastDate.getHours() - startDate.getHours()
        var minute = lastDate.getMinutes() - startDate.getMinutes()
        var second = lastDate.getSeconds() - startDate.getSeconds()
       if(second<0){
         second += 60
         minute -= 1
       }
       if(minute <0){
         minute += 60
         hour -= 1
       }
       if(hour <0){
         hour += 60
         month -= 1
       }
       if(day<0){
         day+=30
         month -= 1
       }
       if(month <0){
         month += 12
         year -= 1
       }
       if(year <0){
         this.triggerEvent("Event",{error:"日期出现错误了"})
       }

        this.setData({
          'year':year,
          'month':month,
          'day':day,
          'hour': hour.twoBit(),
          'minute': minute.twoBit(),
          'second': second.twoBit()
        })
       
         var o = 3
        o.twoBit()

        switch (this.data.maxUnit){
         
          case 'mm': { 
            this.setData({
              'month': month + year*12,
            })
          };break;
          case 'dd': { 
            this.setData({
              'day': (month + year * 12)*30,
            })
          }; break;
          case 'HH': { 
            this.setData({
              'hour': ((month + year * 12) * 30 * 24 + hour).twoBit(),
            })
          }; break;
          case 'MM': { 
            this.setData({
              'minute': ((month + year * 12) * 30 * 24 * 60 + hour * 60 + minute).twoBit(),
            })
          }; break;
          case 'SS': { 
            this.setData({
              'minute': ((month + year * 12) * 30 * 24 * 60 * 60 + hour * 60 * 60 + minute * 60).twoBit(),
            })
          }; break;
          default:break;
        }
        
     
     }
  }
})
