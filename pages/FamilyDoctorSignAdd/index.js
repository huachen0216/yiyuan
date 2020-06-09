const DB = wx.cloud.database().collection("familyDocSignList")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // input变量定义
    usercode: '',
    signtime: '',
    partya: '',
    idcard: '',
    contractphone: '',
    emergencycontact: '',
    emergencycontactphone: '',
    address: '',
    partybteam: '',
    partybpersion: '',
    docgovsubsidies: '',
    docpersonsubsidies: '',
    womengovsubsidies: '',
    womenpersonsubsidies: '',
    mengovsubsidies: '',
    menpersonsubsidies: '',
    diabetesgovsubsidies: '',
    diabetespersonsubsidies: '',
    hypertensiongovsubsidies: '',
    hypertensionpersonsubsidies: '',
    starttime: '',
    endtime: '',
    partasigntime: '',
    partbsigntime: '',
    termination: '',
    canceltime: '',
    partaconfirm: '',
    termination: '',
    autotermination: '',
    cancelreason: '',
    // 按钮状态
    isDisabled: false
  },

  inputChangeHandle: function (e) {
    var prop = e.target.dataset['prop']
    var changed = {}
    changed[prop] = e.detail.value
    this.setData(changed)
  },

  addRecordHandle(e) {
    var that = this;
    DB.add({
        data: that.data,
        success(res) {
          wx.showToast({
            title: '成功',
            icon: 'success',
            duration: 2000
          })
        },
        fail(res) {
          wx.showToast({
            title: '失败',
            icon: 'none',
            duration: 2000
          })
        }
      }, ),
      this.setData({
        isDisabled: true
      }),
      wx.redirectTo({
        url: '../FamilyDoctorSign/index',
      })
  },

  /**
   * 返回上一个页面
   * @param {*} e 
   */
  canceleHandle(e) {
    wx.redirectTo({
      url: '../FamilyDoctorSign/index',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    DB.where({
      usercode: options.usercode
    }).get({
      success(res) {
        if (res.data.length > 0) {
          wx.showToast({
            title: '用户已存在',
            duration: 2000,
            mask: true,
            success() {
              setTimeout(function () {
                wx.redirectTo({
                  url: '../FamilyDoctorSign/index',
                })
              }, 1000)
            }
          })
        }
      }
    })
    that.setData({
      usercode: options.usercode
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