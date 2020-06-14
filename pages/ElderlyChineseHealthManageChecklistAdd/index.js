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
    assessedunit: '',
    // 按钮状态
    isDisabled: false,
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
      wx.redirectTo({
        url: '../ElderlyChineseHealthManageChecklistMain/index',
      })
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
                  url: '../ElderlyChineseHealthManageChecklistMain/index',
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