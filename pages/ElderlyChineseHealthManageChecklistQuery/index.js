const DB = wx.cloud.database().collection("elderlyChineseHealthManageChecklist")

Page({
  /**
   * 页面的初始数据
   */
  data: {
    // radio item定义
    filetypeItems: [{
        name: '纸质档案',
        value: 'p-record',
        gender: 0
      },
      {
        name: '电子档案',
        value: 'e-record',
        gender: 0
      }
    ],
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
    s_2_1: [{
        name: '是',
        value: '2_1_yes',
        gender: 0
      },
      {
        name: '否（视为不合格）',
        value: '2_1_no',
        gender: 0
      }
    ],
    s_2_2: [{
        name: '是',
        value: '2_2_yes',
        gender: 0
      },
      {
        name: '否（视为不合格）',
        value: '2_2_no',
        gender: 0
      }
    ],
    s_2_3: [{
        name: '是',
        value: '2_3_yes',
        gender: 0
      },
      {
        name: '否（视为不合格）',
        value: '2_3_no',
        gender: 0
      }
    ],
    s_2_4: [{
        name: '是',
        value: '2_4_yes',
        gender: 0
      },
      {
        name: '否（视为不合格）',
        value: '2_4_no',
        gender: 0
      }
    ],
    s_2_5: [{
        name: '合格',
        value: '2_5_yes',
        gender: 0
      },
      {
        name: '不合格',
        value: '2_5_no',
        gender: 0
      }
    ],
    s_3_0: [{
        name: '联系上，接受访谈（不失访，继续问卷）',
        value: '3_0_1',
        gender: 0
      },
      {
        name: '联系上，不接受访谈（失访，结束问卷）',
        value: '3_0_2',
        gender: 0
      },
      {
        name: '未联系上（失访，结束问卷））',
        value: '3_0_3',
        gender: 0
      },
      {
        name: '未联系上，电话错号/不存在（失访，结束问卷）',
        value: '3_0_4',
        gender: 0
      }
    ],
    s_3_1: [{
        name: '本人',
        value: '3_1_1',
        gender: 0
      },
      {
        name: '家属',
        value: '3_1_2',
        gender: 0
      }
    ],
    s_3_2: [{
        name: '做过',
        value: '3_2_1',
        gender: 0
      },
      {
        name: '没做过',
        value: '3_2_2',
        gender: 0
      },
      {
        name: '记不清',
        value: '3_2_3',
        gender: 0
      }
    ],
    s_3_3: [{
        name: '是',
        value: '3_3_1',
        gender: 0
      },
      {
        name: '否',
        value: '3_3_2',
        gender: 0
      }
    ],
    s_3_4: [{
        name: '真实',
        value: '3_4_1',
        gender: 0
      },
      {
        name: '不真实',
        value: '3_4_2',
        gender: 0
      }
    ],

    // input变量定义
    usercode: '',
    name: '',
    phone: '',
    examiner: '',
    examinerdate: '',
    principal: '',
    assessedunit: ''
  },

  /**
   * 返回上一个页面
   * @param {*} e 
   */
  canceleHandle(e) {
    wx.redirectTo({
      url: '../ElderlyChineseHealthManageChecklistMain/index',
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
                  wx.navigateBack({
                    url: '../ElderlyChineseHealthManageChecklistMain/index',
                  })
                }, 1000)
              }
            })
          }
          var data = res.data[0]
          //radio 变量设置
          that.data.genderItems.forEach(item => {
            if (data.gender == item.name) {
              item.gender = 1
            }
          })

          that.data.filetypeItems.forEach(item => {
              if (data.filetype == item.name) {
                item.filetype = 1
              }
            }),

            that.data.s_2_1.forEach(item => {
              if (data.s_2_1 == item.name) {
                item.s_2_1 = 1
              }
            }),

            that.data.s_2_2.forEach(item => {
              if (data.s_2_2 == item.name) {
                item.s_2_2 = 1
              }
            }),

            that.data.s_2_3.forEach(item => {
              if (data.s_2_3 == item.name) {
                item.s_2_3 = 1
              }
            }),

            that.data.s_2_4.forEach(item => {
              if (data.s_2_4 == item.name) {
                item.s_2_4 = 1
              }
            }),

            that.data.s_2_5.forEach(item => {
              if (data.s_2_5 == item.name) {
                item.s_2_5 = 1
              }
            }),

            that.data.s_3_0.forEach(item => {
              if (data.s_3_0 == item.name) {
                item.s_3_0 = 1
              }
            }),

            that.data.s_3_1.forEach(item => {
              if (data.s_3_1 == item.name) {
                item.s_3_1 = 1
              }
            }),

            that.data.s_3_2.forEach(item => {
              if (data.s_3_2 == item.name) {
                item.s_3_2 = 1
              }
            }),

            that.data.s_3_3.forEach(item => {
              if (data.s_3_3 == item.name) {
                item.s_3_3 = 1
              }
            }),

            that.data.s_3_4.forEach(item => {
              if (data.s_3_4 == item.name) {
                item.s_3_4 = 1
              }
            }),

            that.setData({
              // 单选框
              genderItems: that.data.genderItems,
              filetypeItems: that.data.filetypeItems,
              s_2_1: that.data.s_2_1,
              s_2_2: that.data.s_2_2,
              s_2_3: that.data.s_2_3,
              s_2_4: that.data.s_2_4,
              s_2_5: that.data.s_2_5,
              s_3_0: that.data.s_3_0,
              s_3_1: that.data.s_3_1,
              s_3_2: that.data.s_3_2,
              s_3_3: that.data.s_3_3,
              s_3_4: that.data.s_3_4,
              // 输入框
              usercode: data.usercode,
              name: data.name,
              phone: data.phone,
              examiner: data.examiner,
              examinerdate: data.examinerdate,
              principal: data.principal,
              assessedunit: data.assessedunit,
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