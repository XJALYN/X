App({
    onLaunch: function () {
        console.log('App Launch')
        require("/zxy/sdk-v1.5.0.js")
        require("/common/router.js")
        require("/common/net.js")
        wx.BaaS.init("18a806728deb0c723cf6")
    },
    onShow: function () {
        console.log('App Show')
    },
    onHide: function () {
        console.log('App Hide')
    },
    globalData: {
        hasLogin: false
    }
});