// pages/chart/chart.js
Page({

  /**
   * 页面的初始数据
   */

  data: {
    doc:{
     title: "chart图标工具",
     desc: "图一使用canvas绘制出来,图二使用组件进行拼接"
    },
    premiumMaxScale: 1000,
    premiumTypes: [
      {
        title: "线上支付",
        color: "rgb(255,98,0)",
        textColor: "rgb(50,50,50)"
      }
    ],
    premiumList: [
      {
        name: "4月",
        color: "rgba(100,100,100,0.5)",
        values: [
          {
            value: 33,
            color: "rgba(255,98,0,0.5)"
          }
        ]
      },
      {
        name: "5月",
        color: "rgba(100,100,100,0.5)",
        values: [
          {
            value: 6,
            color: "rgba(255,98,0,0.5)"
          }
        ]
      },
      {
        name: "6月",
        color: "rgba(100,100,100,0.5)",
        values: [
          {
            value: 500,
            color: "rgba(255,98,0,0.5)"
          }
        ]
      },
      {
        name: "7月",
        color: "rgb(100,100,100)",
        values: [
          {
            value: 100,
            color: "rgb(255,98,0)"
          },
        ]
      }
    ],


    incomeTypes: [
      {
        title: "线上支付",
        color: "rgb(255,98,0)",
        textColor: "rgb(50,50,50)"
      },
      {
        title: "线下支付",
        color: "rgb(0,115,221)",
        textColor: "rgb(50,50,50)"
      },
    ],
    incomeList: [
      {
        name: "4月",
        color: "rgba(100,100,100,0.5)",
        values: [
          {
            value: 33,
            color: "rgba(255,98,0,0.5)"
          },
          {
            value: 600,
            color: "rgba(0,115,221,0.5)",
          }
        ]
      },
      {
        name: "5月",
        color: "rgba(100,100,100,0.5)",
        values: [
          {
            value: 6,
            color: "rgba(255,98,0,0.5)"
          },
          {
            value: 600,
            color: "rgba(0,115,221,0.5)",
          }
        ]
      },
      {
        name: "6月",
        color: "rgba(100,100,100,0.5)",
        values: [
          {
            value: 500,
            color: "rgba(255,98,0,0.5)"
          },
          {
            value: 600,
            color: "rgba(0,115,221,0.5)",
          }
        ]
      },
      {
        name: "7月",
        color: "rgb(100,100,100)",
        values: [
          {
            value: 100,
            color: "rgb(255,98,0)"
          },
          {
            value: 600,
            color: "rgb(0,115,221)",
          }
        ]
      }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})