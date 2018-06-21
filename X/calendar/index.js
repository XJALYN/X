// components/XJCalendar/XJCalendar.js
var extend = require("extend.js")
var bindEvent = require("bindEvent")
var utils = require("utils")
var options = {
  /**
   * 组件的属性列表
   */
  properties: {
    selectedDateList:{
      type:Array(),
      observer:function(newValue,oldValue){
        this.data.selectedDates = newValue
        this.markCourseDates()
      }
    },
    monthNum:{
      type:Number,
      value:3
    },
    headerBackgroundColor:{
      type:String,
      value:"white"
    },
    backgroundColor:{
      type:String,
      value:"white"
    },
    headerTextColor:{
      type:String,
      value:"rgb(100,100,100)"
    },
    headerActiveTextColor:{
      type:String,
      value:"rgb(255,24,2)"
    },
    ignoreOld:{
      type:String,
      value:false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
   selectedDates:[],
   monthList:[],
   selectedMonthIndex:0,
   weekList: ["日", "一", "二", "三", "四", "五", "六"],
   dates:[],
   userSelectedDate:{},
   month:'',
   year:'',
   lastEmptyGrids:[],
   empytGrids:[]
  },

  /**
   * 组件的方法列表
   */
  methods: extend(utils,bindEvent),
  ready(){
    var now = new Date()
    this.setData({
      'year': now.getFullYear(),
      'month': now.getMonth()+1
    })
    this.setData({
      'userSelectedDate.year': now.getFullYear(),
      'userSelectedDate.month': now.getMonth() + 1,
      'userSelectedDate.day':now.getDate()+1,
      'userSelectedDate.week':now.getDay()
    })

    // 生成月份表格
    this.generateMonthList(this.data.year, this.data.month)
    // 生成日期表格
    this.generateDateTables(this.data.monthList[this.data.selectedMonthIndex].year, this.data.monthList[this.data.selectedMonthIndex].month)
    // 标记被选择的日期
    this.markCourseDates()
    this.triggerEvent('SelectedMonth', { "year": this.data.userSelectedDate.year, "month": this.data.userSelectedDate.month}, {})
    this.triggerEvent('SelectedDate', this.data.userSelectedDate, {})
   
  }

}

Component(extend(options))
