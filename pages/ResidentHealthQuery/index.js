const DB = wx.cloud.database().collection("residentHealthList")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    usercode: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.setData({
      usercode: options.usercode
    })
    console.log(this.data.usercode)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onReady "+this.data.usercode)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this;
    console.log("onShow " + that.data.usercode)
    DB.where({
        usercode: that.data.usercode
      })
      .get({
        success: function (res) {
          console.log(res.data)
          if (res.data === null) {
            wx.showToast({
              title: '没有查询到该用户的信息',
              duration: 2000
            })
          }
          that.setData({
            data: res.data
          })
        }
      })
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