// pages/word/热门推荐/hot.js
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  // this.data.list.length = 4;
    this.requestData("");
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
   * 请求数据
   */
  requestData: function (a) {
    var that = this;
    
    console.log(that.data.maxtime)
    wx.request({
      url: 'http://1.suzhouy.applinzi.com/home/index/Testone',
      data: {
        page: 1,
        a: a,
        c: 'data',
        maxtime: that.data.maxtime,
        type: '29',
      },
      method: 'GET',
      success: function (res) {
        // console.log(res)
        console.log(res.data)
        that.setData({
          // 拼接数组
          list: that.data.list.concat(res.data),
          loadingHidden: true,
          //maxtime: res.data.info.maxtime
        })
      }
    })
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  ItemTapAction: function (a) {
    console.log(a.currentTarget.dataset.data.s_id);
    wx.navigateTo({
      url: '../热门推荐详情页/hotDetail?id=' + a.currentTarget.dataset.data.s_sid + '&name=' + a.currentTarget.dataset.data.s_name,
    })

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