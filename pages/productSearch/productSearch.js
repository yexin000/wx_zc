// pages/productSearch/productSearch.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,  //对应样式变化
    scrollTop: 0,  //用作跳转后右侧视图回到顶部
    allproducttypes: [
      { producttype: '1', productname: '空气弹簧' },
      { producttype: '2', productname: '抗侧滚扭杆' },
      { producttype: '3', productname: '连杆组件' },
      { producttype: '4', productname: '牵引装置' },
      { producttype: '5', productname: '球铰关节' },
      { producttype: '6', productname: '橡胶垫' },
      { producttype: '7', productname: '止挡' },
      { producttype: '8', productname: '橡胶堆' },
      { producttype: '9', productname: '锥形簧' },
      { producttype: '10', productname: 'V形簧' },
      { producttype: '11', productname: '沙漏簧' },
      { producttype: '12', productname: '线路产品' },
      { producttype: '13', productname: '悬挂系列' },
      { producttype: '14', productname: '桥建产品' },
      { producttype: '15', productname: '风电产品' }
    ], //左侧导航栏内容
    producttype: "",  //后台查询需要的字段
    productPropList: [
      { productPropName: '小曲囊(Rolling lobe Airspring)', 
        productlist: [
          { productId: '1', productName: 'Φ390空气弹簧(Φ390 Air Spring)' },
          { productId: '2', productName: 'Φ420D空气弹簧(Φ420D Air Spring)' },
          { productId: '3', productName: 'Φ470A空气弹簧(Φ470A Air Spring)' },
          { productId: '4', productName: 'Φ530A空气弹簧(Φ530A Air Spring)' },
          { productId: '5', productName: 'Φ530F空气弹簧(Φ530F Air Spring)' }
        ] },
      { productPropName: '腰带式(Belted Air Spring)', 
        productlist: [
          { productId: '6', productName: 'Φ390空气弹簧(Φ390 Air Spring)' },
          { productId: '7', productName: 'Φ420D空气弹簧(Φ420D Air Spring)' },
          { productId: '8', productName: 'Φ470A空气弹簧(Φ470A Air Spring)' },
          { productId: '9', productName: 'Φ530A空气弹簧(Φ530A Air Spring)' },
          { productId: '10', productName: 'Φ530F空气弹簧(Φ530F Air Spring)' }
        ] }
      ] //右侧内容
  },
  navbarTap: function (e) {
    var that = this;
    this.setData({
      currentTab: e.currentTarget.id,   //按钮CSS变化
      producttype: e.currentTarget.dataset.producttype,
      scrollTop: 0,   //切换导航后，控制右侧滚动视图回到顶部
    })
    //刷新右侧内容的数据
    /*var screenId = this.data.screenId;
    request.sendRrquest(API_queryClassify, 'POST', { flag: 1, screenId: screenId }, )
      .then(function (res) {
        console.log("返回数据：");
        that.setData({
          childrenArray: res.data.data.screenArray[0],
        })
        console.log(that.data.childrenArray);
      }, function (error) { console.log("返回失败"); });*/
  },
  toProductDetail: function(e) {
    wx.navigateTo({
      url: '../productDetail/productDetail'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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