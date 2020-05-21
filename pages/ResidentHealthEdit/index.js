const DB = wx.cloud.database().collection("residentHealthList")

Page({
  /**
   * 页面的初始数据
   */
  data: {
    // radio item定义
    genderItems: [{
        name: '男',
        value: 'man',
        gender: 0
      },
      {
        name: '女',
        value: 'woman',
        gender: 0
      }
    ],
    householdItems: [{
        name: '农业',
        value: 'ny',
        household: 0
      },
      {
        name: '非农业',
        value: 'unny',
        household: 0
      }
    ],
    livingConditionItems: [{
        name: '单独',
        value: 'dd',
        livingcond: 0
      },
      {
        name: '与子女同住',
        value: 'zv',
        livingcond: 0
      },
      {
        name: '与配偶同住',
        value: 'po',
        livingcond: 0
      },
      {
        name: '保姆看护',
        value: 'bm',
        livingcond: 0
      }
    ],

    isNoSmokeItems: [{
        name: '是',
        value: 'yes',
        nosmoke: 0
      },
      {
        name: '否',
        value: 'no',
        nosmoke: 0
      }
    ],

    isNoDrinkItems: [{
        name: '是',
        value: 'yes',
        nodrink: 0
      },
      {
        name: '否',
        value: 'no',
        nodrink: 0
      }
    ],

    //checkbox item 定义
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
    meal: '',
    // 按钮状态
    isDisabled: false,
    id: ''
  },

  inputChangeHandle(e) {
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
        },
      }),
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
              // 单选框
              genderItems: that.data.genderItems,
              householdItems: that.data.householdItems,
              livingConditionItems: that.data.livingConditionItems,
              isNoSmokeItems: that.data.isNoSmokeItems,
              isNoDrinkItems: that.data.isNoDrinkItems,
              // 输入框
              usercode: data.usercode,
              username: data.username,
              bloodtype: data.bloodtype,
              height: data.height,
              weight: data.weight,
              medicarecardNumber: data.medicarecardNumber,
              positionsospital: data.positionsospital,
              phone: data.phone,
              drugallergy: data.drugallergy,
              surgeryname: data.surgeryname,
              surgerytime: data.surgerytime,
              emergencycontact: data.emergencycontact,
              emergencycontactphone: data.emergencycontactphone,
              location: data.location,
              huji: data.huji,
              address: data.address,
              policestation: data.policestation,
              currentdisease: data.currentdisease,
              acigarette: data.acigarette,
              smokeage: data.smokeage,
              drinkage: data.drinkage,
              walkminute: data.walkminute,
              runminute: data.runminute,
              otherminute: data.otherminute,
              beer: data.beer,
              liquor: data.liquor,
              redwine: data.redwine,
              nation: data.nation,
              education: data.education,
              meal: data.meal,
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