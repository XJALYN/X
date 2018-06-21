
var lunar = require("lunar")
var holidays = require("holidays")

module.exports = {
 
 /**
 * 计算指定月份共多少天
 * @param {number} year 年份
 * @param {number} month  月份
 */
  getThisMonthDays(year, month) {
    return new Date(year, month, 0).getDate();
  },

  /**
  * 计算当前月份前后两月应占的格子
  * @param {number} year 年份
  * @param {number} month  月份
  */
  calculateEmptyGrids(year, month) {
    this.calculatePrevMonthGrids.call(this, year, month);
    this.calculateNextMonthGrids.call(this, year, month);
  },

  /**
  * 计算指定月份第一天星期几
  * @param {number} year 年份
  * @param {number} month  月份
  */
  getFirstDayOfWeek(year, month) {
    return new Date(Date.UTC(year, month - 1, 1)).getDay();
  },

  /**
 * 计算上月应占的格子
 * @param {number} year 年份
 * @param {number} month  月份
 */
  calculatePrevMonthGrids(year, month) {
    const prevMonthDays = this.getThisMonthDays(year, month - 1);
    const firstDayOfWeek = this.getFirstDayOfWeek(year, month);
    let empytGrids = [];
    if (firstDayOfWeek > 0) {
      const len = prevMonthDays - firstDayOfWeek;
      for (let i = prevMonthDays; i > len; i--) {
        empytGrids.push(i);
      }
      this.setData({
        'empytGrids': empytGrids.reverse(),
      });
    } else {
      this.setData({
        'empytGrids': []
      });
    }
  },

  /**
	 * 计算下月应占的格子
	 * @param {number} year 年份
	 * @param {number} month  月份
	 */
  calculateNextMonthGrids(year, month) {
    const thisMonthDays = this.getThisMonthDays(year, month);
    const lastDayWeek = new Date(`${year}-${month}-${thisMonthDays}`).getDay();
    let lastEmptyGrids = [];
    if (+lastDayWeek !== 6) {
      const len = 7 - (lastDayWeek + 1);
      for (let i = 1; i <= len; i++) {
        lastEmptyGrids.push(i);
      }
      this.setData({
        'lastEmptyGrids': lastEmptyGrids,
      });
    } else {
      this.setData({
        'lastEmptyGrids':[],
      });
    }
  },
  /**
   * 生成月份列表
   * @param {num} year 年份
   * @param {num} currentMonth 当月日期
   */
  generateMonthList(year,currentMonth){
    var monthList = []
    for (var i = 0; i < this.data.monthNum; i++) {
      var month = currentMonth + i
      var year = year
      if (month > 12) {
        year += 1
        month = month % 12
      }
      var monthData = {
        year: year,
        month: month
      }
      monthList.push(monthData)
    }
    this.setData({
      monthList: monthList
    })
  },

  /**
   * 生成日期表格
   * @param {num} year
   * @param {month} month
   */
   generateDateTables(year,month){
     var days = this.getThisMonthDays(year, month)
     var dates = []
     var currentMonth = (new Date()).getMonth()+1
     var currentDay = (new Date()).getDate()
    
   
     for(var i=0;i<days;i++){
       // 获取阴历的
       var week = new Date(Date.UTC(year, month-1, i)).getDay()
       var lunarDay = lunar.getLunarDay(year, month, i + 1)
       
       var date = {
         'year': year,
         'month': month,
         'day': i+1,
         'lunarDay': lunarDay,
         'week':week
       }
       // 检测是不是节假日
   
       var day = i+1 < 10 ? "0"+(i+1):i+1
       var dateString = [year, month < 10 ? "0" + month : month,day].join("-")
       var holiday = holidays[dateString]
       if(holiday != null){
         date["holiday"] = holiday
       } 
       // 抛去过去的天数
       if (this.data.ignoreOld){
         if (currentMonth == month) {
           if (i + 1 <= currentDay) {
             date["lose"] = true
           }
         }
       }
       dates.push(date)
     }
     this.setData({
       dates: dates
     })
     this.calculateEmptyGrids(year, month)
     this.calculatePrevMonthGrids(year, month)
   },
  /**
   * 标记已经被老师选择的日期
   */
   markCourseDates(){
     for (var i in this.data.dates) {
       var date = this.data.dates[i]
       this.setData({
         [`dates[${i}].courseSelected`]: false
       })
       for (var j in this.data.selectedDates) {
         var dateString = this.data.selectedDates[j]
         var array = (dateString + "").split("-")
         var year = parseInt(array[0])
         var month = parseInt(array[1])
         var day = parseInt(array[2])
         if (date.year == year && date.month == month && date.day == day) {
           this.setData({
             [`dates[${i}].courseSelected`]: true
           })
          break;
         }
       }
     }
   }
 
}