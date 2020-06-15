Page({
  /**
   * 页面的初始数据
   */
  data: {
    usercode: '',
    // 按钮状态
    isDisabled: true
  },

  confirmHandle(e) {
    var that = this;
    var usercode = that.data.usercode
    if (usercode.length == 0 ) {
      wx.showToast({
        title: '社保号码为空！',
        duration: 2000
      })
      return
    } 
    wx.setStorage({
      data: usercode,
      key: 'usercode',
    })
    that.setData({
      isDisabled: false
    })
  },

  inputChangeHandle(e) {
    var prop = e.target.dataset['prop']
    var changed = {}
    changed[prop] = e.detail.value
    this.setData(changed)
  },

  // 居民健康档案
  ResidentHealth(e) {
    wx.navigateTo({
      url: '../ResidentHealthMain/index'
    })
  },

  // 居民健康档案考核核查表
  ResidentHealthChecklistMain(e) {
    wx.navigateTo({
      url: '../ResidentHealthChecklistMain/index'
    })
  },

  // 家庭医师签约
  FamilyDoctorSign(e) {
    wx.navigateTo({
      url: '../FamilyDoctorSignMain/index'
    })
  },

  // 糖尿病管理核查表
  DiabetesHealthManage(e) {
    wx.navigateTo({
      url: '../DiabetesHealthManage/index'
    })
  },

  // 高血压管理核查表
  HypertensionManage(e) {
    wx.navigateTo({
      url: '../HypertensionManage/index'
    })
  },

  // 老年人中医药健康管理
  ElderlyChineseHealthManageChecklistMain(e) {
    wx.navigateTo({
      url: '../ElderlyChineseHealthManageChecklistMain/index'
    })
  },

  // 老年人健康管理核查表
  ElderlyHealthManageChecklistMain(e) {
    wx.navigateTo({
      url: '../ElderlyHealthManageChecklistMain/index'
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