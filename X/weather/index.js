// X/weather/weather.js
var bmap = require('./bmap-wx.js'); 
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    ak:"eROxYelmfW1sGP5s3vOBB2IgsKpQwQE0",
 
    weatherData:"",
    city:"", 
    pm25:"",
    date:"",
    temperature:"",
    weatherDesc:"",
    wind:"",
    loaded:false,
    iconName:"",
    timer:""

  },

  /**
   * 组件的方法列表
   */
  ready(){
    this.requestWeatherData()
   this.data.timer = setInterval(()=>{
      this.requestWeatherData()
    },60000)
  },
  detached() {
    clearInterval(this.data.timer)
  },
  
  methods: {
    requestWeatherData(){
      var that = this;
      // 新建百度地图对象 
      var BMap = new bmap.BMapWX({
        ak: this.data.ak
      });
      BMap.weather({
        success: res=>{
          var weatherData = res.currentWeather[0];
          var city = weatherData.currentCity
          var pm25 = weatherData.pm25
          var date = weatherData.date
          var temperature = weatherData.temperature
          var weatherDesc = weatherData.weatherDesc
          var wind = weatherData.wind
          var iconName = ""
          if(weatherDesc.indexOf("微风")){
             iconName = "微风"
          }else{
            weatherDesc.split("转")[0]
          }
          

          this.setData({
            weatherData, city, pm25, date, temperature, weatherDesc, wind,
            loaded: true,
            iconName: iconName
          })

          
      
        },
        fail: err=>{
          console.log(err)
        }
      }); 
    }
  }
})
