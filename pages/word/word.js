Page({
  data: {
    list: [],
    page:1,
    imgUrl: [
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1514459268090&di=82b1d50e6314de86c5153c96387ce7ee&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F38dbb6fd5266d0166db6c40d9d2bd40735fa3563.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1514459268090&di=77ae1125bce74419ac1a1a5138fda8a6&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F14%2F27%2F36%2F87Z58PICK7c_1024.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1514459268089&di=ccb59398c1128957154809a54dafe953&imgtype=0&src=http%3A%2F%2Fwww.taopic.com%2Fuploads%2Fallimg%2F120520%2F159368-1205201s12790.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1514459268089&di=03e1c2e95d573ad4db28b002bc605101&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F7c1ed21b0ef41bd51b2dc86a5bda81cb39db3d35.jpg'
    ],
    maxtime: '',
    loadingHidden: false
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    //加载最新
    this.requestData('newlist');
  },

  /**
   * 上拉刷新
   */
  bindscrolltoupper: function () {
    //加载最新
    // this.requestData('newlist');
  },
  ItemTapAction: function (a){
    console.log(a.currentTarget.dataset.data.s_id); 
    wx.navigateTo({
      url: '../word/首页详情页/homedetail?id=' + a.currentTarget.dataset.data.s_sid + '&name=' + a.currentTarget.dataset.data.s_name,
    })

  },
  // 跳转热门推荐页面
  hotRecommendedAction: function () {

    wx.navigateTo({
      url: '../word/热门推荐/hot',
    })
  },

  /**
   * 加载更多
   */
  bindscrolltolower: function () {
    console.log('到底部')
    //加载更多
    this.requestData('list');
  },
  laughTapAction:function(){
    console.log("幽默笑话按钮被点击")
    wx.navigateTo({
      url: '../word/homeLaugh/laughs',
    })

  },

  foodTapAction:function(){
    console.log('没事推荐')
    wx.navigateTo({
      url: '../word/美食推荐/food',
    })

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
        page: that.data.page,
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
        that.data.page++;
      }
    })
    
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})