Page({
  /**
   * 页面的初始数据
   */
  data: {
    password: '',
    // 按钮状态
    isDisabled: true
  },

  inputChangeHandle(e) {
    var prop = e.target.dataset['prop']
    var changed = {}
    changed[prop] = e.detail.value
    this.setData(changed)
  },

  patientHandle(e) {
    wx.navigateTo({
      url: '../PatientMain/index',
    })
  },

  doctorHandle(e) {
    var that = this;
    var password = that.data.password
    if (password.length <= 0) {
      wx.showToast({
        title: '请输入验证码',
        image: '/images/close.png',
        duration: 2000
      })
      return
    }
    if (password != '123456') {
      wx.showToast({
        title: '验证码输入错误！',
        image: '/images/close.png',
        duration: 2000
      })
      return
    }
    wx.navigateTo({
      url: '../DoctorMain/index',
    })
  },

  patientHandle1(e) {
    var that = this;
    var userID = that.data.userID
    var usercode = that.data.usercode
    if (userID.length == 0) {
      wx.showToast({
        title: '身份证号为空！',
        duration: 2000
      })
      return
    }
    if (usercode.length == 0) {
      wx.showToast({
        title: '社保号码为空！',
        duration: 2000
      })
      return
    }
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