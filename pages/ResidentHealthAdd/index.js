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
      },
      {
        name: '父母',
        value: 'fm'
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
        value: 'yes',
      },
      {
        name: '否',
        value: 'no',
      }
    ],

    // checkbox item 定义
    fatherCheckboxItems: [{
        name: '高血压',
        value: 'gxy',
        status: 0
      },
      {
        name: '糖尿病',
        value: 'tlb',
        status: 0
      },
      {
        name: '冠心病',
        value: 'gxb',
        status: 0
      },
      {
        name: '慢性阻塞型疾病',
        value: 'mxzs',
        status: 0
      },
      {
        name: '恶性肿瘤',
        value: 'exzl',
        status: 0
      },
      {
        name: '脑卒中',
        value: 'ngz',
        status: 0
      },
      {
        name: '肝炎',
        value: 'gy',
        status: 0
      },
    ],

    motherCheckboxItems: [{
        name: '高血压',
        value: 'gxy',
        status: 0
      },
      {
        name: '糖尿病',
        value: 'tlb',
        status: 0
      },
      {
        name: '冠心病',
        value: 'gxb',
        status: 0
      },
      {
        name: '慢性阻塞型疾病',
        value: 'mxzs',
        status: 0
      },
      {
        name: '恶性肿瘤',
        value: 'exzl',
        status: 0
      },
      {
        name: '脑卒中',
        value: 'ngz',
        status: 0
      },
      {
        name: '肝炎',
        value: 'gy',
        status: 0
      },
    ],

    childCheckboxItems: [{
        name: '高血压',
        value: 'gxy',
        status: 0
      },
      {
        name: '糖尿病',
        value: 'tlb',
        status: 0
      },
      {
        name: '冠心病',
        value: 'gxb',
        status: 0
      },
      {
        name: '慢性阻塞型疾病',
        value: 'mxzs',
        status: 0
      },
      {
        name: '恶性肿瘤',
        value: 'exzl',
        status: 0
      },
      {
        name: '脑卒中',
        value: 'ngz',
        status: 0
      },
      {
        name: '肝炎',
        value: 'gy',
        status: 0
      },
    ],

    brothersCheckboxItems: [{
        name: '高血压',
        value: 'gxy',
        status: 0
      },
      {
        name: '糖尿病',
        value: 'tlb',
        status: 0
      },
      {
        name: '冠心病',
        value: 'gxb',
        status: 0
      },
      {
        name: '慢性阻塞型疾病',
        value: 'mxzs',
        status: 0
      },
      {
        name: '恶性肿瘤',
        value: 'exzl',
        status: 0
      },
      {
        name: '脑卒中',
        value: 'ngz',
        status: 0
      },
      {
        name: '肝炎',
        value: 'gy',
        status: 0
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
    acigarette: '',
    smokeage: '',
    drinkage: '',
    walkminute: '',
    runminute: '',
    otherminute: '',
    beer: '',
    liquor: '',
    redwine: '',
    meal: '',
    // 新增加的字段
    employer: '',
    hypertensionYear: '',
    hypertensionInstructions: '',
    hypertensionDosage: '',
    bloodPressure: '',
    hypertensionState: '',
    hypertensionMedication: '',
    diabetesYear: '',
    diabetesInstructions: '',
    diabetesDosage: '',
    bloodSugarPressure: '',
    diabetesState: '',
    diabetesMedication: '',
    heartDiseaseYear: '',
    heartDiseaseInstructions: '',
    heartDiseaseDosage: '',
    nosmketime: '',
    nodrinktime: '',
    monthlyIncome: '',
    cars: '',
    realEstate: '',
    financialProduct: '',
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
      wx.navigateBack({
        url: '../ResidentHealthMain/index',
      })
  },
  
  /**
   * 返回上一个页面
   * @param {*} e 
   */
  canceleHandle(e) {
    wx.navigateBack({
      url: '../ResidentHealthMain/index',
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
                wx.navigateBack({
                  url: '../ResidentHealthMain/index',
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