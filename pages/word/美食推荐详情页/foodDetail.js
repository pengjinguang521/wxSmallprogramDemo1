// pages/word/美食推荐详情页/foodDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataArray:[]
  },

  /**
  * 生命周期函数--监听页面加载
  */
  onLoad: function (options) {

    wx.setNavigationBarTitle({
      title: options.name//页面标题为路由参数
    })
    var app = getApp();
    var that = this;
    that.setData({
      // 拼接数组
      dataArray: that.data.dataArray.concat(app.globalData.foodData),
      loadingHidden: true,
      //maxtime: res.data.info.maxtime
    })
    console.log('页面间传值过来并显示');
    console.log(this.data.dataArray);
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