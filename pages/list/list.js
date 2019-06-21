// miniprogram/pages/list/list.js
// 引入数据
let datas = require('../../datas/list_data.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listArr:[]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      listArr: datas.list_data
    })
  },
  // 跳转到博客详情页
  toBlog(event) {
    // 获取点击跳转的对应下标
    let index = event.currentTarget.dataset.index;
    wx.navigateTo({
      // 会传参到blog.js
      // 字符串连接中间不可以有空格
      url: '/pages/blog/blog?index=' + index,
    })
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