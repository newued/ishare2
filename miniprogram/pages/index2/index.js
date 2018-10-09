//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '欢迎使用爱分享!',
    hasUserInfo: false,
    userInfo: {},
    uploadIcon: '/src/icon/upload_a.png',
    beginShare:true,//是否开始分享
    shareinfo:{
      url:'',
      title:'',
      desc:'',
      img:''
    },
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  goShare:function(){
    this.setData({
      beginShare:true
    })
  },
  switchChange:function(e){
    console.log('switch1 发生 change 事件，携带值为', e.detail.value)
    this.setData({
      'shareinfo.img': e.detail.value
    })
    if(e.detail.value){
      let that=this;
      wx.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        success (res) {
          // tempFilePath可以作为img标签的src属性显示图片
          const tempFilePaths = res.tempFilePaths
          console.log(tempFilePaths[0].toString())
          console.log( res.tempFiles)
          that.setData({
            'shareinfo.img': tempFilePaths[0]
          })
        }
      })
    }
  },
  formSubmit: function (e) {
    console.log(app.globalData.userInfo)
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },
  formReset:function(){
    console.log('form发生了reset事件')
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
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
