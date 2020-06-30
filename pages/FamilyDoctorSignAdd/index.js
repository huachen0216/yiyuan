const DB = wx.cloud.database().collection("familyDocSignList")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // radio
    serviceItems: [{
        name: '年轻人',
        value: 'young',
        index: 0
      },
      {
        name: '年轻人(慢病)',
        value: 'young1',
        index: 0
      },
      {
        name: '老年人',
        value: 'old',
        index: 0
      },
      {
        name: '老年热(慢病)',
        value: 'old1',
        index: 0
      },
    ],
    // checkbox
    pagesCheckboxItems: [{
        name: '(1) 建立更新相应健康档案',
        value: 'item1',
        index: 0
      },
      {
        name: '(2) 健康评估及计划（1次/年）',
        value: 'item2',
        index: 0
      },
      {
        name: '(3) 主动告知健康信息（1次/年）',
        value: 'item3',
        index: 0
      },
      {
        name: '(4) 健康通服务',
        value: 'item4',
        index: 0
      },
      {
        name: '(5) 随访',
        value: 'item5',
        index: 0
      },
      {
        name: '(6) 自理能力评估',
        value: 'item6',
        index: 0
      },
      {
        name: '(7) 免费物理检查：身高、体重、腰围、臀围、血压',
        value: 'item7',
        index: 0
      },
      {
        name: '(8) 饮食、运动与用药指导',
        value: 'item8',
        index: 0
      },
      {
        name: '(9) 心理咨询、心理辅导服务',
        value: 'item9',
        index: 0
      },
      {
        name: '(10) 健康技能我指导',
        value: 'item10',
        index: 0
      },
      {
        name: '(11) 预防接种',
        value: 'item11',
        index: 0
      },
      {
        name: '(12) 家庭保健员培养',
        value: 'item12',
        index: 0
      },
      {
        name: '(13) 免费义诊（1次/年）',
        value: 'item13',
        index: 0
      },
      {
        name: '(14) 免费体检（1次/年）',
        value: 'item14',
        index: 0
      },
      {
        name: '(15) 就医指导',
        value: 'item15',
        index: 0
      },
      {
        name: '(16) 社区康复',
        value: 'item16',
        index: 0
      },
      {
        name: '(17) 慢性病自我管理小组',
        value: 'item17',
        index: 0
      },
      {
        name: '(18) 对孕妇进行孕期指导服务',
        value: 'item18',
        index: 0
      },
      {
        name: '(19) 对残疾人开展康复训练指导',
        value: 'item19',
        index: 0
      },
      {
        name: '(20) 贴心服务我上门',
        value: 'item20',
        index: 0
      },
      {
        name: '(21) 对产妇和新生儿提供上门访视和体检服务',
        value: 'item21',
        index: 0
      },
      {
        name: '(22) 对确有需求的进行定期上门访视',
        value: 'item22',
        index: 0
      },
      {
        name: '(23) 转诊及预约服务',
        value: 'item23',
        index: 0
      },
      {
        name: '(24) 中医养生保健服务',
        value: 'item24',
        index: 0
      },
      {
        name: '(25) 传染病防治',
        value: 'item25',
        index: 0
      },
      {
        name: '(26) 避孕药具发放',
        value: 'item26',
        index: 0
      },
      {
        name: '(27) 知己健康管理',
        value: 'item27',
        index: 0
      },
    ],

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
    isDisabled: false
  },

  inputChangeHandle: function (e) {
    var prop = e.target.dataset['prop']
    var changed = {}
    changed[prop] = e.detail.value
    this.setData(changed)
  },

  changePagesHandle(e) {
    var that = this
    var prop = e.target.dataset['prop']
    var changed = {}
    changed[prop] = e.detail.value
    that.setData(changed)
    var newPagesCheckboxItems = []
    if (that.data.service == '年轻人') {
      newPagesCheckboxItems =  [{
          name: '(1) 建立更新相应健康档案',
          value: 'item1',
          index: 0
        },
        {
          name: '(2) 健康评估及计划（1次/年）',
          value: 'item2',
          index: 0
        },
        {
          name: '(3) 主动告知健康信息（1次/年）',
          value: 'item3',
          index: 0
        },
        {
          name: '(4) 健康通服务',
          value: 'item4',
          index: 0
        },
        {
          name: '(7) 免费物理检查：身高、体重、腰围、臀围、血压',
          value: 'item7',
          index: 0
        },
        {
          name: '(10) 健康技能我指导',
          value: 'item10',
          index: 0
        },
        {
          name: '(15) 就医指导',
          value: 'item15',
          index: 0
        },
        {
          name: '(25) 传染病防治',
          value: 'item25',
          index: 0
        },
        {
          name: '(27) 知己健康管理',
          value: 'item27',
          index: 0
        },
      ]
    }
    that.setData({
      pagesCheckboxItems: newPagesCheckboxItems
    })
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
      wx.navigateBack({
        url: '../FamilyDoctorSignMain/index',
      })
  },

  /**
   * 返回上一个页面
   * @param {*} e 
   */
  canceleHandle(e) {
    wx.navigateBack({
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
        if (res.data.length > 0) {
          wx.showToast({
            title: '用户已存在',
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