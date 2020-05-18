const DB = wx.cloud.database().collection("residentHealthList")

Page({
  /**
   * 页面的初始数据
   */
  data: {
    // radio item定义
    genderItems: [{
        name: '男',
        value: 'man'
      },
      {
        name: '女',
        value: 'woman'
      }
    ],
    householdItems: [{
        name: '农业',
        value: 'ny'
      },
      {
        name: '非农业',
        value: 'unny'
      }
    ],
    livingConditionItems: [{
        name: '单独',
        value: 'dd'
      },
      {
        name: '与子女同住',
        value: 'zv'
      },
      {
        name: '与配偶同住',
        value: 'po'
      },
      {
        name: '保姆看护',
        value: 'bm'
      }
    ],

    isNoSmokeItems: [{
        name: '是',
        value: 'yes'
      },
      {
        name: '否',
        value: 'no'
      }
    ],

    isNoDrinkItems: [{
        name: '是',
        value: 'yes'
      },
      {
        name: '否',
        value: 'no'
      }
    ],

    // checkbox item 定义
    familyHistoryCheckboxItems: [{
        name: '高血压',
        value: 'gxy'
      },
      {
        name: '糖尿病',
        value: 'tlb'
      },
      {
        name: '冠心病',
        value: 'gxb'
      },
      {
        name: '慢性阻塞型疾病',
        value: 'mxzs'
      },
      {
        name: '恶性肿瘤',
        value: 'exzl'
      },
      {
        name: '脑卒中',
        value: 'ngz'
      },
      {
        name: '肝炎',
        value: 'gy'
      },
    ],

    // input变量定义
    usercode: '',
    username: '',
    bloodtype: '',
    height: '',
    weight: '',
    medicarecardNumber: '',
    positionsospital: '',
    phone: '',
    drugallergy: '',
    surgeryname: '',
    surgerytime: '',
    emergencycontact: '',
    emergencycontactphone: '',
    location: '',
    huji: '',
    address: '',
    policestation: '',
    currentdisease: '',
    acigarette: '',
    smokeage: '',
    drinkage: '',
    walkminute: '',
    runminute: '',
    otherminute: '',
    beer: '',
    liquor: '',
    redwine: '',
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
    console.log(this.data)
    DB.add({
        data: this.data,
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
        url: '../ResidentHealthMain/index',
      })
  },
  /**
   * 返回上一个页面
   * @param {*} e 
   */
  canceleHandle(e) {
    wx.redirectTo({
      url: '../ResidentHealthMain/index',
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
    var that = this
    wx.getStorage({
      key: 'usercode',
      success: (res) => {
        that.setData({
          usercode: res.data
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