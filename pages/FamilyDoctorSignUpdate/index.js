const DB = wx.cloud.database().collection("familyDocSignList")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // input变量定义
    usercode: '',
    signtime: '',
    signperson: '',
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
    isDisabled: false,
    id: ''
  },

  inputChangeHandle: function (e) {
    var prop = e.target.dataset['prop']
    var changed = {}
    changed[prop] = e.detail.value
    this.setData(changed)
  },

  updateRecordHandle(e) {
    var that = this;
    DB.doc(that.data.id).update({
        data: that.data,
        success(res) {
          wx.showToast({
            title: '更新成功',
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
      }),
      this.setData({
        isDisabled: true
      }),
      wx.redirectTo({
        url: '../FamilyDoctorSignMain/index',
      })
  },

  /**
   * 返回上一个页面
   * @param {*} e 
   */
  canceleHandle(e) {
    wx.redirectTo({
      url: '../FamilyDoctorSignMain/index',
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
        if (res.data.length == 0) {
          wx.showToast({
            title: '没有查询信息',
            duration: 2000,
            mask: true,
            success() {
              setTimeout(function () {
                wx.navigateBack({
                  url: '../FamilyDoctorSignMain/index',
                })
              }, 1000)
            }
          })
        }
        var data = res.data[0]
        that.setData({
          // input变量定义
          usercode: data.usercode,
          signtime: data.signtime,
          signperson: data.signperson,
          partya: data.partya,
          idcard: data.idcard,
          contractphone: data.contractphone,
          emergencycontact: data.emergencycontact,
          emergencycontactphone: data.emergencycontactphone,
          address: data.address,
          partybteam: data.partybteam,
          partybpersion: data.partybpersion,
          docgovsubsidies: data.docgovsubsidies,
          docpersonsubsidies: data.docpersonsubsidies,
          womengovsubsidies: data.womengovsubsidies,
          womenpersonsubsidies: data.womenpersonsubsidies,
          mengovsubsidies: data.mengovsubsidies,
          menpersonsubsidies: data.menpersonsubsidies,
          diabetesgovsubsidies: data.diabetesgovsubsidies,
          diabetespersonsubsidies: data.diabetespersonsubsidies,
          hypertensiongovsubsidies: data.hypertensiongovsubsidies,
          hypertensionpersonsubsidies: data.hypertensionpersonsubsidies,
          starttime: data.starttime,
          endtime: data.endtime,
          partasigntime: data.partasigntime,
          partbsigntime: data.partbsigntime,
          termination: data.termination,
          canceltime: data.canceltime,
          partaconfirm: data.partaconfirm,
          termination: data.termination,
          autotermination: data.autotermination,
          cancelreason: data.cancelreason,
          id: data._id
        })
      }
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