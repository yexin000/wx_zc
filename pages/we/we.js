// pages/we/we.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    awards: [
      { awardTitle: '国家级  2009-11-10', awardDesc: '一级安全生产标准化企业' },
      { awardTitle: '国家级  2009-01-11', awardDesc: '中国轨道交通促进联盟理事会专家理事单位' },
      { awardTitle: '国家级  2007-07-11', awardDesc: '国家高技术产业化示范工程' },
      { awardTitle: '国家级  2006-03-11', awardDesc: '国家认定企业技术中心' },
      { awardTitle: '国家级  2004-05-02', awardDesc: '国家火炬计划重点高新企业' },
      { awardTitle: '国家级  2003-12-03', awardDesc: '博士后科研工作站' },
      { awardTitle: '省级    2010-12-10', awardDesc: '湖南省2010届文明单位' },
      { awardTitle: '省级    2009-11-12', awardDesc: '湖南省科学技术进步二等奖' },
      { awardTitle: '省级    2009-05-17', awardDesc: '湖南省减震降噪材料工程技术研究中心' },
      { awardTitle: '省级    2008-12-20', awardDesc: '湖南省高新技术企业' },
      { awardTitle: '省级    2008-12-07', awardDesc: '湖南名牌' }
    ],
    phonesLeft: [
      { phonetype: '人资类', phonenum: '86-0731-22837728' },
      { phonetype: '市场类：铁路机车车辆', phonenum: '86-0731-22884741' },
      { phonetype: '市场类：高铁、普铁线路产品', phonenum: '86-0731-22837826' },
      { phonetype: '市场类：风电减振元件', phonenum: '86-0731-22837769' },
      { phonetype: '市场类：风电叶片', phonenum: '86-0731-22837948' },
      { phonetype: '市场类：桥梁建设', phonenum: '86-0731-22837719' }
    ],
    phonesRight: [
      { phonetype: '市场类：城轨铁路减振产品', phonenum: '86-0731-28445038' },
      { phonetype: '市场类：橡塑元件市场', phonenum: '86-0731-28491684' },
      { phonetype: '市场类：工程塑料', phonenum: '86-0731-28445089' },
      { phonetype: '市场类：薄膜市场', phonenum: '86-0731-22534008' },
      { phonetype: '市场类：芳纶市场', phonenum: '86-0731-22837934' },
      { phonetype: '　', phonenum: '　' }
    ],
    org: "",
    name: "",
    phone: "",
    email: "",
    content: ""
  },
  toMoreVideo: function() {
    wx.navigateTo({
      url: '../moreVideo/moreVideo'
    })
  },
  phoneCall: function(e) {
    var phonenum = e.currentTarget.dataset.phonenum;
    wx.makePhoneCall({
      phoneNumber: phonenum,
      success: function () {
        console.log("成功拨打电话:" + phonenum)
      }
    })
  },
  copyEmail: function(e) {
    var email = e.currentTarget.dataset.email;
    wx.setClipboardData({
      data: email,
      success: function (res) {
        console.log("邮箱地址复制成功");
      }
    })
  },
  submitMessage: function(e) {
    var that = this;
    if (!e.detail.value.org) {
      this.showDialog("请输入单位名称");
      return;
    }
    if (!e.detail.value.name) {
      this.showDialog("请输入姓名");
      return;
    }
    if (!e.detail.value.phone) {
      this.showDialog("请输入电话");
      return;
    }
    if (!e.detail.value.email) {
      this.showDialog("请输入邮箱");
      return;
    }
    if (!e.detail.value.content) {
      this.showDialog("请输入内容");
      return;
    }

    wx.showLoading({
      title: "加载中"
    });
    wx.request({
      url: app.globalData.interfaceUrl + 'message/save',
      data: {
        org: e.detail.value.org,
        name: e.detail.value.name,
        phone: e.detail.value.phone,
        email: e.detail.value.email,
        content: e.detail.value.content
      },
      method: 'POST',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (result) {
        wx.hideLoading();
        if (result) {
          if (result.data.errno == 0) {
            that.showDialog("提交成功");
          } else if (result.data.errno == 10001) {
            wx.showToast({
              title: '抱歉，操作失败',
              icon: 'none',
              duration: 2000
            })
          }
        } else {
          wx.showToast({
            title: '抱歉，操作失败',
            icon: 'none',
            duration: 2000
          })
        }
      },
      complete: function () {
        wx.hideLoading();
      }
    })
  },
  showDialog(content) {
    wx.showModal({
      title: "提示",
      content: content,
      showCancel: false
    });
  },

  playVideo: function() {
    wx.navigateTo({
      url: '../playVideo/playVideo'
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