// pages/word/美食推荐/food.js
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
    this.requestData("");
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
     * 请求数据
     */
  requestData: function (a) {
    var that = this;

    console.log(that.data.maxtime)
    wx.request({
      url: 'http://apis.juhe.cn/cook/query.php?menu=%E5%9C%9F%E8%B1%86&dtype=&pn=&rn=&albums=&=&key=ae284ba4919f40373c019a770a06bdf1',
      data: {
        page: 1,
        a: a,
        c: 'data',
        maxtime: that.data.maxtime,
        type: '29',
      },
      method: 'GET',
      success: function (res) {
        console.log(res.data.result.data)
        that.setData({
          // 拼接数组
          list: that.data.list.concat(res.data.result.data),
          loadingHidden: true,
          //maxtime: res.data.info.maxtime
        })
      }
    })
  },
  ItemTapAction: function (a) {

  var app = getApp();
  app.globalData.foodData = a.currentTarget.dataset.data.steps;
  console.log(app.globalData.foodData)
    wx.navigateTo({
      url: '../美食推荐详情页/foodDetail?id=' + '&name=' + a.currentTarget.dataset.data.title,
    })

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