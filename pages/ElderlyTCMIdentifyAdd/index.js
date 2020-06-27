const DB = wx.cloud.database().collection("elderlyTCMIdentifyList")

Page({
  data: {
    // radio item定义
    q1Items: [{
        name: '没有（或不）',
        value: 'q1-1',
        gender: 0
      },
      {
        name: '很少',
        value: 'q1-2',
        gender: 0
      },
      {
        name: '有时',
        value: 'q1-3',
        gender: 0
      },
      {
        name: '经常',
        value: 'q1-4',
        gender: 0
      },
      {
        name: '总是',
        value: 'q1-5',
        gender: 0
      }
    ],

    q2Items: [{
        name: '没有（或不）',
        value: 'q2-1',
        gender: 0
      },
      {
        name: '很少',
        value: 'q2-2',
        gender: 0
      },
      {
        name: '有时',
        value: 'q2-3',
        gender: 0
      },
      {
        name: '经常',
        value: 'q2-4',
        gender: 0
      },
      {
        name: '总是',
        value: 'q2-5',
        gender: 0
      }
    ],

    q3Items: [{
        name: '没有（或不）',
        value: 'q3-1',
        gender: 0
      },
      {
        name: '很少',
        value: 'q3-2',
        gender: 0
      },
      {
        name: '有时',
        value: 'q3-3',
        gender: 0
      },
      {
        name: '经常',
        value: 'q3-4',
        gender: 0
      },
      {
        name: '总是',
        value: 'q3-5',
        gender: 0
      }
    ],

    q4Items: [{
        name: '没有（或不）',
        value: 'q4-1',
        gender: 0
      },
      {
        name: '很少',
        value: 'q4-2',
        gender: 0
      },
      {
        name: '有时',
        value: 'q4-3',
        gender: 0
      },
      {
        name: '经常',
        value: 'q4-4',
        gender: 0
      },
      {
        name: '总是',
        value: 'q4-5',
        gender: 0
      }
    ],

    q5Items: [{
        name: '没有（或不）',
        value: 'q5-1',
        gender: 0
      },
      {
        name: '很少',
        value: 'q5-2',
        gender: 0
      },
      {
        name: '有时',
        value: 'q5-3',
        gender: 0
      },
      {
        name: '经常',
        value: 'q5-4',
        gender: 0
      },
      {
        name: '总是',
        value: 'q5-5',
        gender: 0
      }
    ],

    q6Items: [{
        name: '没有（或不）',
        value: 'q6-1',
        gender: 0
      },
      {
        name: '很少',
        value: 'q6-2',
        gender: 0
      },
      {
        name: '有时',
        value: 'q6-3',
        gender: 0
      },
      {
        name: '经常',
        value: 'q6-4',
        gender: 0
      },
      {
        name: '总是',
        value: 'q6-5',
        gender: 0
      }
    ],

    q7Items: [{
        name: '没有（或不）',
        value: 'q7-1',
        gender: 0
      },
      {
        name: '很少',
        value: 'q7-2',
        gender: 0
      },
      {
        name: '有时',
        value: 'q7-3',
        gender: 0
      },
      {
        name: '经常',
        value: 'q7-4',
        gender: 0
      },
      {
        name: '总是',
        value: 'q7-5',
        gender: 0
      }
    ],

    q8Items: [{
        name: '没有（或不）',
        value: 'q8-1',
        gender: 0
      },
      {
        name: '很少',
        value: 'q8-2',
        gender: 0
      },
      {
        name: '有时',
        value: 'q8-3',
        gender: 0
      },
      {
        name: '经常',
        value: 'q8-4',
        gender: 0
      },
      {
        name: '总是',
        value: 'q8-5',
        gender: 0
      }
    ],

    q9Items: [{
        name: '没有（或不）(BMI＜24)',
        value: 'q9-1',
        gender: 0
      },
      {
        name: '很少 24≤BMI＜25)',
        value: 'q9-2',
        gender: 0
      },
      {
        name: '有时 (25≤BMI＜26)',
        value: 'q9-3',
        gender: 0
      },
      {
        name: '经常（26≤BMI＜28）',
        value: 'q9-4',
        gender: 0
      },
      {
        name: '总是 (BMI≥28)',
        value: 'q9-5',
        gender: 0
      }
    ],

    q10Items: [{
        name: '没有（或不）',
        value: 'q10-1',
        gender: 0
      },
      {
        name: '很少',
        value: 'q10-2',
        gender: 0
      },
      {
        name: '有时',
        value: 'q10-3',
        gender: 0
      },
      {
        name: '经常',
        value: 'q10-4',
        gender: 0
      },
      {
        name: '总是',
        value: 'q10-5',
        gender: 0
      }
    ],

    q11Items: [{
        name: '没有（或不）',
        value: 'q11-1',
        gender: 0
      },
      {
        name: '很少',
        value: 'q11-2',
        gender: 0
      },
      {
        name: '有时',
        value: 'q11-3',
        gender: 0
      },
      {
        name: '经常',
        value: 'q11-4',
        gender: 0
      },
      {
        name: '总是',
        value: 'q11-5',
        gender: 0
      }
    ],

    q12Items: [{
        name: '没有（或不）',
        value: 'q12-1',
        gender: 0
      },
      {
        name: '很少',
        value: 'q12-2',
        gender: 0
      },
      {
        name: '有时',
        value: 'q12-3',
        gender: 0
      },
      {
        name: '经常',
        value: 'q12-4',
        gender: 0
      },
      {
        name: '总是',
        value: 'q12-5',
        gender: 0
      }
    ],

    q13Items: [{
        name: '没有（或不）',
        value: 'q13-1',
        gender: 0
      },
      {
        name: '很少',
        value: 'q13-2',
        gender: 0
      },
      {
        name: '有时',
        value: 'q13-3',
        gender: 0
      },
      {
        name: '经常',
        value: 'q13-4',
        gender: 0
      },
      {
        name: '总是',
        value: 'q13-5',
        gender: 0
      }
    ],

    q14Items: [{
        name: '总是 (BMI≥28)',
        value: 'q14-1',
        gender: 0
      },
      {
        name: '很少: 2-4次',
        value: 'q14-2',
        gender: 0
      },
      {
        name: '有时: 5-6次',
        value: 'q14-3',
        gender: 0
      },
      {
        name: '经常: 8次以上',
        value: 'q14-4',
        gender: 0
      },
      {
        name: '总是',
        value: 'q14-5',
        gender: 0
      }
    ],

    q15Items: [{
        name: '没有（或不）',
        value: 'q15-1',
        gender: 0
      },
      {
        name: '很少',
        value: 'q15-2',
        gender: 0
      },
      {
        name: '有时',
        value: 'q15-3',
        gender: 0
      },
      {
        name: '经常',
        value: 'q15-4',
        gender: 0
      },
      {
        name: '总是',
        value: 'q15-5',
        gender: 0
      }
    ],

    q16Items: [{
        name: '没有（或不）',
        value: 'q16-1',
        gender: 0
      },
      {
        name: '很少',
        value: 'q16-2',
        gender: 0
      },
      {
        name: '有时',
        value: 'q16-3',
        gender: 0
      },
      {
        name: '经常',
        value: 'q16-4',
        gender: 0
      },
      {
        name: '总是',
        value: 'q16-5',
        gender: 0
      }
    ],

    q17Items: [{
        name: '没有（或不）',
        value: 'q17-1',
        gender: 0
      },
      {
        name: '很少',
        value: 'q17-2',
        gender: 0
      },
      {
        name: '有时',
        value: 'q17-3',
        gender: 0
      },
      {
        name: '经常',
        value: 'q17-4',
        gender: 0
      },
      {
        name: '总是',
        value: 'q17-5',
        gender: 0
      }
    ],

    q18Items: [{
        name: '没有（或不）',
        value: 'q18-1',
        gender: 0
      },
      {
        name: '很少',
        value: 'q18-2',
        gender: 0
      },
      {
        name: '有时',
        value: 'q18-3',
        gender: 0
      },
      {
        name: '经常',
        value: 'q18-4',
        gender: 0
      },
      {
        name: '总是',
        value: 'q18-5',
        gender: 0
      }
    ],

    q19Items: [{
        name: '没有（或不）',
        value: 'q19-1',
        gender: 0
      },
      {
        name: '很少',
        value: 'q19-2',
        gender: 0
      },
      {
        name: '有时',
        value: 'q19-3',
        gender: 0
      },
      {
        name: '经常',
        value: 'q19-4',
        gender: 0
      },
      {
        name: '总是',
        value: 'q19-5',
        gender: 0
      }
    ],

    q20Items: [{
        name: '没有（或不）',
        value: 'q20-1',
        gender: 0
      },
      {
        name: '很少',
        value: 'q20-2',
        gender: 0
      },
      {
        name: '有时',
        value: 'q20-3',
        gender: 0
      },
      {
        name: '经常',
        value: 'q20-4',
        gender: 0
      },
      {
        name: '总是',
        value: 'q20-5',
        gender: 0
      }
    ],

    q21Items: [{
        name: '没有（或不）',
        value: 'q21-1',
        gender: 0
      },
      {
        name: '很少',
        value: 'q21-2',
        gender: 0
      },
      {
        name: '有时',
        value: 'q21-3',
        gender: 0
      },
      {
        name: '经常',
        value: 'q21-4',
        gender: 0
      },
      {
        name: '总是',
        value: 'q21-5',
        gender: 0
      }
    ],

    q22Items: [{
        name: '没有（或不）',
        value: 'q22-1',
        gender: 0
      },
      {
        name: '很少',
        value: 'q22-2',
        gender: 0
      },
      {
        name: '有时',
        value: 'q22-3',
        gender: 0
      },
      {
        name: '经常',
        value: 'q22-4',
        gender: 0
      },
      {
        name: '总是',
        value: 'q22-5',
        gender: 0
      }
    ],

    q23Items: [{
        name: '没有（或不）',
        value: 'q23-1',
        gender: 0
      },
      {
        name: '很少',
        value: 'q23-2',
        gender: 0
      },
      {
        name: '有时',
        value: 'q23-3',
        gender: 0
      },
      {
        name: '经常',
        value: 'q23-4',
        gender: 0
      },
      {
        name: '总是',
        value: 'q23-5',
        gender: 0
      }
    ],

    q24Items: [{
        name: '没有（或不）',
        value: 'q24-1',
        gender: 0
      },
      {
        name: '很少',
        value: 'q24-2',
        gender: 0
      },
      {
        name: '有时',
        value: 'q24-3',
        gender: 0
      },
      {
        name: '经常',
        value: 'q24-4',
        gender: 0
      },
      {
        name: '总是',
        value: 'q24-5',
        gender: 0
      }
    ],

    q25Items: [{
        name: '没有（或不）',
        value: 'q25-1',
        gender: 0
      },
      {
        name: '很少',
        value: 'q25-2',
        gender: 0
      },
      {
        name: '有时',
        value: 'q25-3',
        gender: 0
      },
      {
        name: '经常',
        value: 'q25-4',
        gender: 0
      },
      {
        name: '总是',
        value: 'q25-5',
        gender: 0
      }
    ],

    q26Items: [{
        name: '没有（或不）',
        value: 'q26-1',
        gender: 0
      },
      {
        name: '很少',
        value: 'q26-2',
        gender: 0
      },
      {
        name: '有时',
        value: 'q26-3',
        gender: 0
      },
      {
        name: '经常',
        value: 'q26-4',
        gender: 0
      },
      {
        name: '总是',
        value: 'q26-5',
        gender: 0
      }
    ],

    q27Items: [{
        name: '没有（或不）',
        value: 'q27-1',
        gender: 0
      },
      {
        name: '很少',
        value: 'q27-2',
        gender: 0
      },
      {
        name: '有时',
        value: 'q27-3',
        gender: 0
      },
      {
        name: '经常',
        value: 'q27-4',
        gender: 0
      },
      {
        name: '总是',
        value: 'q27-5',
        gender: 0
      }
    ],

    q28Items: [{
        name: '没有(或不（腹围<80cm相当2.4尺）)',
        value: 'q28-1',
        gender: 0
      },
      {
        name: '很少 80-85cm',
        value: 'q28-2',
        gender: 0
      },
      {
        name: '有时 86-90cm',
        value: 'q28-3',
        gender: 0
      },
      {
        name: '经常 91-105cm',
        value: 'q28-4',
        gender: 0
      },
      {
        name: '总是 >105cm或3.15尺',
        value: 'q28-5',
        gender: 0
      }
    ],

    q29Items: [{
        name: '没有（或不）',
        value: 'q29-1',
        gender: 0
      },
      {
        name: '很少',
        value: 'q29-2',
        gender: 0
      },
      {
        name: '有时',
        value: 'q29-3',
        gender: 0
      },
      {
        name: '经常',
        value: 'q29-4',
        gender: 0
      },
      {
        name: '总是',
        value: 'q29-5',
        gender: 0
      }
    ],

    q30Items: [{
        name: '没有（或不）',
        value: 'q30-1',
        gender: 0
      },
      {
        name: '很少',
        value: 'q30-2',
        gender: 0
      },
      {
        name: '有时',
        value: 'q30-3',
        gender: 0
      },
      {
        name: '经常',
        value: 'q30-4',
        gender: 0
      },
      {
        name: '总是',
        value: 'q30-5',
        gender: 0
      }
    ],

    q31Items: [{
        name: '没有（或不）',
        value: 'q31-1',
        gender: 0
      },
      {
        name: '很少',
        value: 'q31-2',
        gender: 0
      },
      {
        name: '有时',
        value: 'q31-3',
        gender: 0
      },
      {
        name: '经常',
        value: 'q31-4',
        gender: 0
      },
      {
        name: '总是',
        value: 'q31-5',
        gender: 0
      }
    ],

    q32Items: [{
        name: '没有（或不）',
        value: 'q32-1',
        gender: 0
      },
      {
        name: '很少',
        value: 'q32-2',
        gender: 0
      },
      {
        name: '有时',
        value: 'q32-3',
        gender: 0
      },
      {
        name: '经常',
        value: 'q32-4',
        gender: 0
      },
      {
        name: '总是',
        value: 'q32-5',
        gender: 0
      }
    ],

    q33Items: [{
        name: '没有（或不）',
        value: 'q33-1',
        gender: 0
      },
      {
        name: '很少',
        value: 'q33-2',
        gender: 0
      },
      {
        name: '有时',
        value: 'q33-3',
        gender: 0
      },
      {
        name: '经常',
        value: 'q33-4',
        gender: 0
      },
      {
        name: '总是',
        value: 'q33-5',
        gender: 0
      }
    ],
    usercode: '',
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
        url: '../ElderlyTCMIdentifyMain/index',
      })
  },

  /**
   * 返回上一个页面
   * @param {*} e 
   */
  canceleHandle(e) {
    wx.navigateBack({
      url: '../ElderlyTCMIdentifyMain/index',
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
                  url: '../ElderlyTCMIdentifyMain/index',
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