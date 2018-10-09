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
  onReachBottom:function(obj){
    //拉到底部弹窗提示
    wx.showModal({
      title: '提示',
      content: '已经拉到底部',
      success: function (res) {
        if (res.confirm) {//这里是点击了确定以后
          console.log('用户点击确定')
        } else {//这里是点击了取消以后
          console.log('用户点击取消')
        }

      }

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
