Page({

  /**
   * 页面的初始数据
   */
  data: {
    usercode: ''
  },

  // 新增档案
  addRecord: function () {
    wx.navigateTo({
      url: '../DiabetesHealthManageChecklistAdd/index?usercode=' + this.data.usercode,
    })
  },

  // 查询档案
  queryRecord: function () {
    wx.navigateTo({
      url: '../DiabetesHealthManageChecklistQuery/index?usercode=' + this.data.usercode,
    })
  },

  // 修改档案
  updateRecord: function () {
    wx.navigateTo({
      url: '../DiabetesHealthManageChecklistUpdate/index?usercode=' + this.data.usercode,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    try {
      var value = wx.getStorageSync('usercode')
      if (value) {
        that.setData({
          usercode: value
        })
      }
    } catch (e) {
      wx.showToast({
        title: '没有找到usercode，请重新输入',
        duration: 2000
      })
    }
    wx.setNavigationBarTitle({
      title: '糖尿病管理核查表',
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