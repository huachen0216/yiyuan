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
        if (res.data.length == 0) {
          wx.showToast({
            title: '没有查询信息',
            duration: 2000,
            mask: true,
            success() {
              setTimeout(function () {
                wx.navigateBack({
                  url: '../ElderlyTCMIdentifyMain/index',
                }, 2000)
              }, 1000)
            }
          })
        }
        var data = res.data[0]
        //radio 变量设置
        that.data.q1Items.forEach(item => {
          if (data.q1 == item.name) {
            item.gender = 1
          }
        })

        that.data.q2Items.forEach(item => {
          if (data.q2 == item.name) {
            item.gender = 1
          }
        })

        that.data.q3Items.forEach(item => {
          if (data.q3 == item.name) {
            item.gender = 1
          }
        })

        that.data.q4Items.forEach(item => {
          if (data.q4 == item.name) {
            item.gender = 1
          }
        })

        that.data.q5Items.forEach(item => {
          if (data.q5 == item.name) {
            item.gender = 1
          }
        })

        that.data.q6Items.forEach(item => {
          if (data.q6 == item.name) {
            item.gender = 1
          }
        })

        that.data.q7Items.forEach(item => {
          if (data.q7 == item.name) {
            item.gender = 1
          }
        })

        that.data.q8Items.forEach(item => {
          if (data.q8 == item.name) {
            item.gender = 1
          }
        })

        that.data.q9Items.forEach(item => {
          if (data.q9 == item.name) {
            item.gender = 1
          }
        })

        that.data.q10Items.forEach(item => {
          if (data.q10 == item.name) {
            item.gender = 1
          }
        })

        that.data.q11Items.forEach(item => {
          if (data.q11 == item.name) {
            item.gender = 1
          }
        })

        that.data.q12Items.forEach(item => {
          if (data.q12 == item.name) {
            item.gender = 1
          }
        })

        that.data.q13Items.forEach(item => {
          if (data.q13 == item.name) {
            item.gender = 1
          }
        })

        that.data.q14Items.forEach(item => {
          if (data.q14 == item.name) {
            item.gender = 1
          }
        })

        that.data.q15Items.forEach(item => {
          if (data.q15 == item.name) {
            item.gender = 1
          }
        })

        that.data.q16Items.forEach(item => {
          if (data.q16 == item.name) {
            item.gender = 1
          }
        })

        that.data.q17Items.forEach(item => {
          if (data.q17 == item.name) {
            item.gender = 1
          }
        })

        that.data.q18Items.forEach(item => {
          if (data.q18 == item.name) {
            item.gender = 1
          }
        })

        that.data.q19Items.forEach(item => {
          if (data.q19 == item.name) {
            item.gender = 1
          }
        })

        that.data.q20Items.forEach(item => {
          if (data.q20 == item.name) {
            item.gender = 1
          }
        })

        that.data.q21Items.forEach(item => {
          if (data.q21 == item.name) {
            item.gender = 1
          }
        })

        that.data.q22Items.forEach(item => {
          if (data.q22 == item.name) {
            item.gender = 1
          }
        })

        that.data.q23Items.forEach(item => {
          if (data.q23 == item.name) {
            item.gender = 1
          }
        })

        that.data.q24Items.forEach(item => {
          if (data.q24 == item.name) {
            item.gender = 1
          }
        })

        that.data.q25Items.forEach(item => {
          if (data.q25 == item.name) {
            item.gender = 1
          }
        })

        that.data.q26Items.forEach(item => {
          if (data.q26 == item.name) {
            item.gender = 1
          }
        })

        that.data.q27Items.forEach(item => {
          if (data.q27 == item.name) {
            item.gender = 1
          }
        })

        that.data.q28Items.forEach(item => {
          if (data.q28 == item.name) {
            item.gender = 1
          }
        })

        that.data.q29Items.forEach(item => {
          if (data.q29 == item.name) {
            item.gender = 1
          }
        })

        that.data.q30Items.forEach(item => {
          if (data.q30 == item.name) {
            item.gender = 1
          }
        })

        that.data.q31Items.forEach(item => {
          if (data.q31 == item.name) {
            item.gender = 1
          }
        })

        that.data.q32Items.forEach(item => {
          if (data.q32 == item.name) {
            item.gender = 1
          }
        })

        that.data.q33Items.forEach(item => {
          if (data.q33 == item.name) {
            item.gender = 1
          }
        })

        that.setData({
          q1Items: that.data.q1Items,
          q2Items: that.data.q2Items,
          q3Items: that.data.q3Items,
          q4Items: that.data.q4Items,
          q5Items: that.data.q5Items,
          q6Items: that.data.q6Items,
          q7Items: that.data.q7Items,
          q8Items: that.data.q8Items,
          q9Items: that.data.q9Items,
          q10Items: that.data.q10Items,
          q11Items: that.data.q11Items,
          q12Items: that.data.q12Items,
          q13Items: that.data.q13Items,
          q14Items: that.data.q14Items,
          q15Items: that.data.q15Items,
          q16Items: that.data.q16Items,
          q17Items: that.data.q17Items,
          q18Items: that.data.q18Items,
          q19Items: that.data.q19Items,
          q20Items: that.data.q20Items,
          q21Items: that.data.q21Items,
          q22Items: that.data.q22Items,
          q23Items: that.data.q23Items,
          q24Items: that.data.q24Items,
          q25Items: that.data.q25Items,
          q26Items: that.data.q26Items,
          q27Items: that.data.q27Items,
          q28Items: that.data.q28Items,
          q29Items: that.data.q29Items,
          q30Items: that.data.q30Items,
          q31Items: that.data.q31Items,
          q32Items: that.data.q32Items,
          q33Items: that.data.q33Items,
          // 输入框
          usercode: data.usercode,
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