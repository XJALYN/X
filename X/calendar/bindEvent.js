var utils = require("utils.js")

module.exports = {

  
  bindSelectedDay(e){
    var date = e.currentTarget.dataset.value
    this.setData({
      'userSelectedDate.year': date.year,
      'userSelectedDate.month':date.month,
      'userSelectedDate.day': date.day,
      'userSelectedDate.week':date.week
    })
    this.triggerEvent('SelectedDate', this.data.userSelectedDate, {})
  },

  bindSelectedMonth(e){
    var monthData = e.currentTarget.dataset.value
    var index = e.currentTarget.dataset.index
    this.setData({
      selectedMonthIndex:index
    })
    this.setData({
      'userSelectedDate.year': monthData.year,
      'userSelectedDate.month': monthData.month,
    })
    // 
    var currentMonth = (new Date()).getMonth()+1
    var day = (new Date()).getDate()
    if (monthData.month == currentMonth){
      var week = new Date(Date.UTC(monthData.year, monthData.month-1 , day )).getDay()
      this.setData({
        'userSelectedDate.day': day+1,
        'userSelectedDate.week': week
      })
    }else{
      var week = new Date(Date.UTC(monthData.year, monthData.month-1 , 0)).getDay()
      this.setData({
        'userSelectedDate.day': 1,
        'userSelectedDate.week': week
      })
    }
    
    this.triggerEvent('SelectedMonth', monthData, {})

    this.generateDateTables(this.data.monthList[this.data.selectedMonthIndex].year, this.data.monthList[this.data.selectedMonthIndex].month)

    // 标记被选择的日期
    this.markCourseDates()
    this.triggerEvent('SelectedDate', this.data.userSelectedDate, {})
  }
}