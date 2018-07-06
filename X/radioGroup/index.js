// X/input/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    activeIndex:{
      type:Number,
      value:'0'
    },
    radioItems:{
      type:Array,
      value:[]
    },
    value:{
      type:String,
      value:''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    showTopTips: false,

   
    checkboxItems: [
      { name: 'standard is dealt for u.', value: '0', checked: true },
      { name: 'standard is dealicient for u.', value: '1' }
    ],

    date: "2016-09-01",
    time: "12:01",

    countryCodes: ["+86", "+80", "+84", "+87"],
    countryCodeIndex: 0,

    countries: ["中国", "美国", "英国"],
    countryIndex: 0,

    accounts: ["微信号", "QQ", "Email"],
    accountIndex: 0,

    isAgree: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    radioChange(e){
    
      this.setData({
        activeIndex: e.detail.value
      });
      console.log(e.detail)
      this.triggerEvent("radioChange", { value: this.data.activeIndex})
    }
  }
})
