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
    personcode: '',
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
      })
      .get({
        success: function (res) {
          if (res.data.length == 0) {
            wx.showToast({
              title: '没有查询信息',
              duration: 2000,
              mask: true,
              success() {
                setTimeout(function () {
                  wx.redirectTo({
                    url: '../ResidentHealthMain/index',
                  })
                }, 1000)
              }
            })
          }
          var data = res.data[0]
          //checkbox 变量设定
          if (data.father !== undefined) {
            that.data.fatherCheckboxItems.forEach(item => {
              data.father.forEach(fatherItem => {
                if (fatherItem == item.value) {
                  item.status = 1
                }
              })
            })
          }
          that.setData({
            fatherCheckboxItems: that.data.fatherCheckboxItems,
          })

          if (data.mother !== undefined) {
            that.data.motherCheckboxItems.forEach(item => {
              data.mother.forEach(motherItem => {
                if (motherItem == item.value) {
                  item.status = 1
                }
              })
            })
          }
          that.setData({
            motherCheckboxItems: that.data.motherCheckboxItems,
          })

          if (data.child !== undefined) {
            that.data.childCheckboxItems.forEach(item => {
              data.child.forEach(childItem => {
                if (childItem == item.value) {
                  item.status = 1
                }
              })
            })
          }
          that.setData({
            childCheckboxItems: that.data.childCheckboxItems,
          })

          if (data.brothers !== undefined) {
            that.data.brothersCheckboxItems.forEach(item => {
              data.brothers.forEach(brothersItem => {
                if (brothersItem == item.value) {
                  item.status = 1
                }
              })
            })
          }
          that.setData({
            brothersCheckboxItems: that.data.brothersCheckboxItems,
          })

          //radio 变量设置
          that.data.genderItems.forEach(item => {
            if (data.gender == item.name) {
              item.gender = 1
            }
          })

          that.data.householdItems.forEach(item => {
              if (data.household == item.name) {
                item.household = 1
              }
            }),

            that.data.livingConditionItems.forEach(item => {
              if (data.livingcond == item.name) {
                item.livingcond = 1
              }
            }),

            that.data.isNoSmokeItems.forEach(item => {
              if (data.nosmoke == item.name) {
                item.nosmoke = 1
              }
            }),

            that.data.isNoDrinkItems.forEach(item => {
              if (data.nodrink == item.name) {
                item.nodrink = 1
              }
            }),

            that.setData({
              // 输入框
              usercode: data.usercode,
              signtime: data.signtime,
              partya: data.partya,
              personcode: data.personcode,
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
              autotermination: data.autotermination,
              cancelreason: data.cancelreason
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