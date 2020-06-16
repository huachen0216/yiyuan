const DB = wx.cloud.database().collection("residentHealthChecklist")

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
    s_2_1Items: [{
        name: '联系上，接受访谈（不失访，继续问卷）',
        value: '2_1_1',
        gender: 0
      },
      {
        name: '联系上，不接受访谈（失访，结束问卷）',
        value: '2_1_2',
        gender: 0
      },
      {
        name: '未联系上（失访，结束问卷）',
        value: '2_1_3',
        gender: 0
      },
      {
        name: '未联系上，电话错号/电话不存在/地址错误（失访，结束问卷）',
        value: '2_1_4',
        gender: 0
      }
    ],
    s_2_2Items: [{
        name: '本人',
        value: '2_2_1',
        gender: 0
      },
      {
        name: '家属（含保姆）',
        value: '2_2_2',
        gender: 0
      },
      {
        name: '其他（失访，结束问卷）',
        value: '2_2_3',
        gender: 0
      }
    ],
    s_2_3Items: [{
        name: '就诊过',
        value: '2_3_1',
        gender: 0
      },
      {
        name: '从没有去过',
        value: '2_3_2',
        gender: 0
      }
    ],
    s_2_4Items: [{
        name: '知道，并且有健康档案',
        value: '2_4_1',
        gender: 0
      },
      {
        name: '不知道/不清楚，有健康档案',
        value: '2_5_2',
        gender: 0
      }
    ],
    s_2_5Items: [{
        name: '身体健康，无疾病',
        value: '2_5_1',
        gender: 0
      },
      {
        name: '是否有药物过敏：⑴无  ⑵过敏药物',
        value: '2_5_2',
        gender: 0
      },
      {
        name: '本人既往患病',
        value: '2_5_3',
        gender: 0
      },
      {
        name: '父母身体是否健康：⑴是  ⑵否',
        value: '2_5_4',
        gender: 0
      }
    ],
    s_3_1Items: [{
        name: '不失访',
        value: '3_1_1',
        gender: 0
      },
      {
        name: '失访（结束问卷）',
        value: '3_1_2',
        gender: 0
      },
      {
        name: '失访，电话错号/不存在（结束问卷）',
        value: '3_1_3',
        gender: 0
      }
    ],
    s_4_1Items: [{
        name: '有（为不真实，跳转到4.3）',
        value: '4_4_1',
        gender: 0
      },
      {
        name: '没有',
        value: '4_4_2',
        gender: 0
      }
    ],
    s_4_3Items: [{
        name: '真实',
        value: '4_3_1',
        gender: 0
      },
      {
        name: '不真实（同时判定为不规范）',
        value: '4_3_2',
        gender: 0
      }
    ],
    s_5_1Items: [{
        name: '是',
        value: '5_1_1',
        gender: 0
      },
      {
        name: '否（视为不规范）',
        value: '5_1_2',
        gender: 0
      }
    ],
    s_5_4Items: [{
        name: '规范（合格）',
        value: '5_4_1',
        gender: 0
      },
      {
        name: '不规范（不合格）',
        value: '5_4_2',
        gender: 0
      }
    ],
    // checkbox item 定义
    errorRecordCheckBoxItems: [{
        name: '访谈情况与档案记录相符：个人基本信息情况与档案记录一致',
        value: '4-2-1',
        status: 0
      },
      {
        name: '访谈情况与档案记录不符：从未到机构就诊过（被建档）',
        value: '4-2-2',
        status: 0
      },
      {
        name: '访谈情况与档案记录不符：既往史疾病',
        value: '4-2-3',
        status: 0
      },
      {
        name: '访谈情况与档案记录不符：药物过敏史',
        value: '4-2-4',
        status: 0
      }
    ],
    residentHealtherrorRecordCheckBoxItems: [{
        name: '编号（不规范视为空项）',
        value: '5-2-1',
        status: 0
      },
      {
        name: '姓名',
        value: '5-2-2',
        status: 0
      },
      {
        name: '现住址',
        value: '5-2-3',
        status: 0
      },
      {
        name: '户籍地址',
        value: '5-2-4',
        status: 0
      },
      {
        name: '联系电话（号码错误视为空项）',
        value: '5-2-5',
        status: 0
      },
      {
        name: '乡镇（街道）名称、村（居）委会名称 ',
        value: '5-2-6',
        status: 0
      },
      {
        name: '建档单位',
        value: '5-2-7',
        status: 0
      },
      {
        name: '建档人',
        value: '5-2-8',
        status: 0
      },
      {
        name: '责任医生',
        value: '5-2-9',
        status: 0
      },
      {
        name: '建档日期',
        value: '5-2-10',
        status: 0
      }
    ],
    basicInfoerrorRecordCheckBoxItems: [{
        name: '性别',
        value: '5-3-1',
        status: 0
      },
      {
        name: '出生日期',
        value: '5-3-2',
        status: 0
      },
      {
        name: '身份证号',
        value: '5-3-3',
        status: 0
      },
      {
        name: '工作单位',
        value: '5-3-4',
        status: 0
      },
      {
        name: '联系电话（号码错误视为空项）',
        value: '5-3-5',
        status: 0
      },
      {
        name: '血型',
        value: '5-3-6',
        status: 0
      },
      {
        name: '文化程度',
        value: '5-3-7',
        status: 0
      },
      {
        name: '职业',
        value: '5-3-8',
        status: 0
      },
      {
        name: '婚姻状况',
        value: '5-3-9',
        status: 0
      },
      {
        name: '药物过敏史',
        value: '5-3-10',
        status: 0
      },
      {
        name: '疾病',
        value: '5-3-11',
        status: 0
      },
      {
        name: '手术',
        value: '5-3-12',
        status: 0
      },
      {
        name: '外伤',
        value: '5-3-13',
        status: 0
      },
      {
        name: '输血',
        value: '5-3-14',
        status: 0
      },
      {
        name: '家族史',
        value: '5-3-15',
        status: 0
      },
      {
        name: '遗传病史',
        value: '5-3-16',
        status: 0
      },
      {
        name: '残疾情况',
        value: '5-3-17',
        status: 0
      }
    ],
    // input变量定义
    usercode: '',
    name: '',
    phone: '',
    examiner: '',
    examinerdate: '',
    assessedunit: '',
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
        url: '../ResidentHealthChecklistMain/index',
      })
  },

  /**
   * 返回上一个页面
   * @param {*} e 
   */
  canceleHandle(e) {
    wx.redirectTo({
      url: '../ResidentHealthChecklistMain/index',
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
                    url: '../ResidentHealthChecklistMain/index',
                  })
                }, 1000)
              }
            })
          }
          var data = res.data[0]
          //checkbox 变量设定
          if (data.errorRecord !== undefined) {
            that.data.errorRecordCheckBoxItems.forEach(item => {
              data.errorRecord.forEach(errorRecordItem => {
                if (errorRecordItem == item.value) {
                  item.status = 1
                }
              })
            })
          }
          that.setData({
            errorRecordCheckBoxItems: that.data.errorRecordCheckBoxItems,
          })

          if (data.residentHealtherrorRecord !== undefined) {
            that.data.residentHealtherrorRecordCheckBoxItems.forEach(item => {
              data.residentHealtherrorRecord.forEach(residentHealtherrorRecordItem => {
                if (residentHealtherrorRecordItem == item.value) {
                  item.status = 1
                }
              })
            })
          }
          that.setData({
            residentHealtherrorRecordCheckBoxItems: that.data.residentHealtherrorRecordCheckBoxItems,
          })

          if (data.basicInfoerrorRecord !== undefined) {
            that.data.basicInfoerrorRecordCheckBoxItems.forEach(item => {
              data.basicInfoerrorRecord.forEach(basicInfoerrorRecordItem => {
                if (basicInfoerrorRecordItem == item.value) {
                  item.status = 1
                }
              })
            })
          }
          that.setData({
            basicInfoerrorRecordCheckBoxItems: that.data.basicInfoerrorRecordCheckBoxItems,
          })

          //radio 变量设置
          that.data.genderItems.forEach(item => {
            if (data.gender == item.name) {
              item.gender = 1
            }
          })

          that.data.s_2_1Items.forEach(item => {
              if (data.s_2_1 == item.name) {
                item.gender = 1
              }
            }),

            that.data.s_2_2Items.forEach(item => {
              if (data.s_2_2 == item.name) {
                item.gender = 1
              }
            }),

            that.data.s_2_3Items.forEach(item => {
              if (data.s_2_3 == item.name) {
                item.gender = 1
              }
            }),

            that.data.s_2_4Items.forEach(item => {
              if (data.s_2_4 == item.name) {
                item.gender = 1
              }
            }),

            that.data.s_2_5Items.forEach(item => {
              if (data.s_2_5 == item.name) {
                item.gender = 1
              }
            }),

            that.data.s_3_1Items.forEach(item => {
              if (data.s_3_1 == item.name) {
                item.gender = 1
              }
            }),

            that.data.s_4_1Items.forEach(item => {
              if (data.s_4_1 == item.name) {
                item.gender = 1
              }
            }),

            that.data.s_4_3Items.forEach(item => {
              if (data.s_4_3 == item.name) {
                item.gender = 1
              }
            }),

            that.data.s_5_1Items.forEach(item => {
              if (data.s_5_1 == item.name) {
                item.gender = 1
              }
            }),

            that.data.s_5_4Items.forEach(item => {
              if (data.s_5_4 == item.name) {
                item.gender = 1
              }
            }),

            that.setData({
              // 单选框
              genderItems: that.data.genderItems,
              s_2_1Items: that.data.s_2_1Items,
              s_2_2Items: that.data.s_2_2Items,
              s_2_3Items: that.data.s_2_3Items,
              s_2_4Items: that.data.s_2_4Items,
              s_2_5Items: that.data.s_2_5Items,
              s_3_1Items: that.data.s_3_1Items,
              s_4_1Items: that.data.s_4_1Items,
              s_4_3Items: that.data.s_4_3Items,
              s_5_1Items: that.data.s_5_1Items,
              s_5_4Items: that.data.s_5_4Items,
              // 输入框
              usercode: data.usercode,
              name: data.name,
              phone: data.phone,
              examiner: data.examiner,
              examinerdate: data.examinerdate,
              assessedunit: data.assessedunit,
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