// pages/word/首页幽默笑话/laughs.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  //  页面的数据源信息
   dataArray:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    this.requestData("");
  },

  /**
 * 请求数据
 */
  requestData: function (a) {
    var that = this;
    console.log(that.data.maxtime)
    wx.request({
      url: 'http://apis.haoservice.com/lifeservice/Joke/ContentList?pagesize=20&page=1&key=59b449446b5e456ca57f3bd18d3e34ad',
      data: {
        s_sid: a,
      },
      method: 'GET',
      success: function (res) {
        console.log(res.data)
        that.setData({
          // 拼接数组
          dataArray: that.data.dataArray.concat(res.data.result),
          loadingHidden: true,
          //maxtime: res.data.info.maxtime
        })
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