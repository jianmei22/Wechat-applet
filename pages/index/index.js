// page/index/index.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg: '小崽崽',
    userInfo: {},
    isShow: false,
    startShow: false
  },
  handleClick() {
    // 点击跳转到list页面
    wx.navigateTo({
      url: '/pages/list/list',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 调用函数判断用户是否授权
    this.getUserInfo();
  },

  // 判断用户是否授权
  getUserInfo() {
    wx.getSetting({
      success: (data) => {
        if (data.authSetting['scope.userInfo']) {
          // 已经授权
          this.setData({
            isShow: false,
            startShow: true
          });
        } else {
          // 没有授权
          this.setData({
            isShow: true,
            startShow: false
          });
        }
      }
    })
    // 获取用户信息
    wx.getUserInfo({
      success: (data) => {
        // 更新data中的userInfo
        this.setData({
          userInfo: data.userInfo,
        });
      },
      // 用户信息获取失败的时候
      fail: () => {
        console.log('获取登录失败')
      }
    })
  },

  // 判断用户点击的是允许还是拒绝
  handleGetUserInfo(data) {
    // 点击的是允许
    if (data.detail.rawData) {
      this.getUserInfo();
    } else {
      console.log('失败');
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})