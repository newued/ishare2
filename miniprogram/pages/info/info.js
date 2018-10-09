//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },
  onShareAppMessage: function () {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target, res.webViewUrl)
    } else {

    }
    return {
      title: '爱分享-快速分享您的应用',
      imageUrl: '/src/ishare_logo.png',
      path: '/pages/index'
    }
  },
})
