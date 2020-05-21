Page({

  /**
   * 页面的初始数据
   */
  data: {
    usercode: ''
  },

   // 修改档案
   editRecord: function () {
    wx.navigateTo({
      url: '../ResidentHealthEdit/index?usercode='+this.data.usercode,
    })
  },

  // 新增档案
  addRecord: function () {
    wx.navigateTo({
      url: '../ResidentHealthAdd/index?usercode='+this.data.usercode,
    })
  },

  // 扫描档案
  scanRecord: function () {
    var that = this
    wx.scanCode({
      success: function(res) {
        // console.log(res);
        that.setData({
          usercode: res.result
        });
        
        wx.showToast({
          title: '扫描成功, ' + that.data.usercode,
          duration: 2000
        })
      }
    })
  },

  // 查询档案
  queryRecord: function() {
    wx.navigateTo({
      url: '../ResidentHealthQuery/index?usercode='+this.data.usercode,
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