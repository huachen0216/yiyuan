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
        gender:0
      },
      {
        name: '女',
        value: 'woman',
        gender:0
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
          console.log(res.data)
          if (res.data === null) {
            wx.showToast({
              title: '没有查询到该用户的信息',
              duration: 2000
            })
          }
          var data = res.data[0]
          that.data.genderItems.forEach(item => {
            if (data.gender == item.name) {
              item.gender = 1
            }
          })
          that.setData({
            // 单选框
            genderItems: that.data.genderItems,
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
          })
          console.log(that.data.genderItems)
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