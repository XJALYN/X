App({
    onLaunch: function () {
        console.log('App Launch')
        require("/zxy/sdk-v1.5.0.js")
        require("/common/router.js")
        require("/common/net.js")
        wx.BaaS.init("18a806728deb0c723cf6")
        this.testJS()
    },
    onShow: function () {
        console.log('App Show')
    },
    onHide: function () {
        console.log('App Hide')
    },
    globalData: {
        hasLogin: false
    },

    testJS(){
     
     let params = {'':123}
     for(let key in params){
       console.log({}.hasOwnProperty.call(params,key))
     }

      function factorial(n) {
        return !(n > 1) ? 1 : factorial(n - 1) * n;
      }

      let result = [1, 2, 3, 4, 5].map(factorial);
      console.log(result)
      
      let eslint = { name: "ESLint1" }
      let eslint2 = { name: "ESLint2" }
      var boundGetName = (function getName() {
        return this.name;
      }).bind(eslint, eslint2);

      console.log(boundGetName()); 
    },

 
  
});