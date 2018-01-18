// pages/word/热门推荐详情页/hotDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: "0",
    name: "",
    dataArray: []
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id: options.id,
      name: options.name
    });
    //  这边参数传递过来后 需要进行网络请求
    console.log('页面之间的值传递，参数传递' + options.id);

    this.requestData(options.id);
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
      url: 'http://1.suzhouy.applinzi.com/home/index/DidClickScenic',
      data: {
        s_sid: a,
      },
      method: 'GET',
      success: function (res) {
        console.log(res.data)
        that.setData({
          // 拼接数组
          dataArray: that.data.dataArray.concat(res.data.data),
          loadingHidden: true,
          //maxtime: res.data.info.maxtime
        })
        wx.setNavigationBarTitle({
          title: that.data.name//页面标题为路由参数
        })
      }
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