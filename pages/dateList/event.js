module.exports = {
  bindShow(e) {
    this.setData({
      show: true
    })
  },
  bindSelectedDate(e) {
    let date = e.detail
    if (!(this.data.beginDate instanceof Object) || (this.data.endDate instanceof Object)) {
      this.setData({
        beginDate: date,
        endDate: null
      })
    } else {
      this.data.endDate = date
      if (this.data.beginDate.date > this.data.endDate.date) {
        date = this.data.beginDate
        this.data.beginDate = this.data.endDate
        this.data.endDate = date
        this.setData({
          beginDate: this.data.beginDate,
          endDate: this.data.endDate
        })
      } else if (this.data.beginDate.date == this.data.endDate.date) {
        this.data.endDate = null
      } else {
        this.setData({
          endDate: this.data.endDate
        })
      }
    }
  },
  bindShowDateList(e) {
    this.setData({
      showDateList: true,
      showStatusList: false
    })
  },
  bindShowStatusList(e) {
    this.setData({
      showDateList: false,
      showStatusList: true
    })
  },
  bindHideStatusList(e) {
    this.setData({
      showStatusList: false
    })
  },
  bindResetDate(e) {
    this.setData({
      beginDate: null,
      endDate: null
    })
  },
  bindConfirmDate(e) {
    this.setData({
      show: false
    })
  }
}