// miniprogram/pages/blog/blog.js
let datas = require('../../datas/list_data.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    blogObj: {},
    index: null,
    isCollected: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取参数值
    let index = options.index;
    // 更新data中的dataBlog的状态值
    this.setData({
      blogObj: datas.list_data[index],
      index
    });
  },
  handleCollect() {
    // 初始化为取消收藏状态
    let isCollected = !this.data.isCollected;
    // 更新状态
    this.setData({
      isCollected
    });
    // 提示用户
    var title = isCollected?'收藏成功':'取消收藏';
    wx.showToast({
      title,
      icon: 'success'
    });
    // 缓存数据到本地
    // {1: true, 2: false}
    let {index} = this.data;
    let obj = {};
    obj[index] = isCollected;
    wx.setStorage({
      key: 'isCollected',
      data: obj,
      success: () => {
        console.log("缓存成功");
      }
    });
    

  },
  // 处理点击分享
  handleShare() {
    wx.showActionSheet({
      itemList: ['分享到微信', '分享到QQ', '分享到微博'],
      success(res) {
        console.log(res.tapIndex)
      },
      fail(res) {
        console.log(res.errMsg)
      }
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