const DB = wx.cloud.database().collection("elderlyHealthManageChecklist")

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
        name: '本人',
        value: '2_1_1',
        gender: 0
      },
      {
        name: '家属（含保姆）',
        value: '2_1_2',
        gender: 0
      },
      {
        name: '其他（失访）',
        value: '2_1_3',
        gender: 0
      }
    ],
    s_2_2Items: [{
        name: '体检过',
        value: '2_2_1',
        gender: 0
      },
      {
        name: '没有体检',
        value: '2_2_2',
        gender: 0
      },
      {
        name: '在外院体检且报告单交医生了',
        value: '2_2_3',
        gender: 0
      },
      {
        name: '记不清（失访）',
        value: '2_2_4',
        gender: 0
      }
    ],
    s_2_4Items: [{
        name: '有通知',
        value: '2_4_1',
        gender: 0
      },
      {
        name: '通知了，是口头通知',
        value: '2_4_2',
        gender: 0
      },
      {
        name: '通知了，有体检报告（电子报告或纸质版报告）',
        value: '2_4_3',
        gender: 0
      }
    ],
    s_3_1Items: [{
        name: '有（为不真实）',
        value: '3_1_1',
        gender: 0
      },
      {
        name: '没有',
        value: '3_1_2',
        gender: 0
      }
    ],
    s_3_2Items: [{
        name: '访谈记录与档案记录项目相符，有查体（血压、体重）和辅助查体记录。',
        value: '3_2_1',
        gender: 0
      },
      {
        name: '访谈记录与档案记录项目不相符，未做查体（血压、体重），有查体记录。  ',
        value: '3_2_2',
        gender: 0
      },
      {
        name: '访谈记录与档案记录项目不相符，未做心电图，有相应记录。',
        value: '3_2_3',
        gender: 0
      },
      {
        name: '访谈记录与档案记录项目不相符，未做B超，有相应记录。',
        value: '3_2_4',
        gender: 0
      },
      {
        name: '访谈记录与档案记录项目不相符，未做体检有体检记录。',
        value: '3_2_5',
        gender: 0
      }
    ],
    s_3_3Items: [{
        name: '真实',
        value: '3_3_1',
        gender: 0
      },
      {
        name: '不真实',
        value: '3_3_2',
        gender: 0
      }
    ],
    s_4_1Items: [{
        name: '建立健康档案,健康档案封面和个人基本信息表填写完整',
        value: '4_1_1',
        gender: 0
      },
      {
        name: '未建立健康档案 ',
        value: '4_1_2',
        gender: 0
      },
      {
        name: '建立健康档案,健康档案封面填写不全 ',
        value: '4_1_3',
        gender: 0
      },
      {
        name: '建立健康档案,个人基本信息表填写不全 ',
        value: '4_1_4',
        gender: 0
      }
    ],
    s_4_3Items: [{
        name: '健康指导正确、无漏项',
        value: '4_3_1',
        gender: 0
      },
      {
        name: '健康指导错误',
        value: '4_3_2',
        gender: 0
      },
      {
        name: '健康指导漏项',
        value: '4_3_3',
        gender: 0
      },
      {
        name: '无健康指导',
        value: '4_3_4',
        gender: 0
      }
    ],
    s_4_5Items: [{
        name: '完整',
        value: '4_5_1',
        gender: 0
      },
      {
        name: '不完整',
        value: '4_5_2',
        gender: 0
      }
    ],
    // checkbox item 定义
    checklistCheckBoxItems: [{
        name: '测量血压',
        value: '2-3-1',
        status: 0
      },
      {
        name: '体重',
        value: '2-3-2',
        status: 0
      },
      {
        name: '抽血',
        value: '2-3-3',
        status: 0
      },
      {
        name: '心电图',
        value: '2-3-4',
        status: 0
      },
      {
        name: '腹部B超',
        value: '2-3-5',
        status: 0
      },
      {
        name: '记不清(失访)',
        value: '2-3-6',
        status: 0
      }
    ],
    healthGuidanceCheckBoxItems: [{
        name: '饮食、运动',
        value: '2-5-1',
        status: 0
      },
      {
        name: '戒烟、限酒',
        value: '2-5-2',
        status: 0
      },
      {
        name: '药物使用',
        value: '2-5-3',
        status: 0
      },
      {
        name: '药物使用',
        value: '2-5-4',
        status: 0
      },
      {
        name: '其他',
        value: '2-5-5',
        status: 0
      },
      {
        name: '记不清（失访）',
        value: '2-5-6',
        status: 0
      }
    ],
    healthCheckBoxItems: [{
        name: '症状',
        value: '4-2-1',
        status: 0
      },
      {
        name: '血压',
        value: '4-2-2',
        status: 0
      },
      {
        name: '身高、体重、腰围',
        value: '4-2-3',
        status: 0
      },
      {
        name: '老年人生活自理能力评估（有评估表）',
        value: '4-2-4',
        status: 0
      },
      {
        name: '生活方式',
        value: '4-2-5',
        status: 0
      },
      {
        name: '口腔、视力、听力和运动功能',
        value: '4-2-6',
        status: 0
      },
      {
        name: '心、肺、腹部检查',
        value: '4-2-7',
        status: 0
      },
      {
        name: '血常规',
        value: '4-2-8',
        status: 0
      },
      {
        name: '尿常规',
        value: '4-2-9',
        status: 0
      },
      {
        name: '肝功能 (血清谷草转氨酶、血清谷丙转氨酶、总胆红素)',
        value: '4-2-10',
        status: 0
      },
      {
        name: '肾功能（血清肌酐、血尿素氮）',
        value: '4-2-11',
        status: 0
      },
      {
        name: '血脂（总胆固醇、甘油三酯、高密度脂蛋白胆固醇、低密度脂蛋白胆固醇）',
        value: '4-2-12',
        status: 0
      },
      {
        name: '空腹血糖',
        value: '4-2-13',
        status: 0
      },
      {
        name: '心电图',
        value: '4-2-14',
        status: 0
      },
      {
        name: '危险因素控制（无危险因素可空项）',
        value: '4-2-15',
        status: 0
      },
      {
        name: '腹部B超',
        value: '4-2-16',
        status: 0
      },
      {
        name: '超重肥胖（包括腹型肥胖）以及辅助检查异常结果未评价',
        value: '4-2-17',
        status: 0
      },
      {
        name: '无空项、漏项或错项',
        value: '4-2-18',
        status: 0
      }
    ],
    healthReportCheckBoxItems: [{
        name: '有',
        value: '4-4-1',
        status: 0
      },
      {
        name: '缺少尿常规结果报告单',
        value: '4-4-2',
        status: 0
      },
      {
        name: '缺少血常规结果报告单',
        value: '4-4-3',
        status: 0
      },
      {
        name: '①缺少肝功能结果报告单',
        value: '4-4-4',
        status: 0
      },
      {
        name: '缺少肾功能结果报告单',
        value: '4-4-5',
        status: 0
      },
      {
        name: '缺少血脂结果报告单 ',
        value: '4-4-6',
        status: 0
      },
      {
        name: '缺少空腹血糖结果报告单',
        value: '4-4-7',
        status: 0
      },
      {
        name: '缺少心电图报告单',
        value: '4-4-8',
        status: 0
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
        url: '../ElderlyHealthManageChecklistMain/index',
      })
  },

  /**
   * 返回上一个页面
   * @param {*} e 
   */
  canceleHandle(e) {
    wx.navigateBack({
      url: '../ElderlyHealthManageChecklistMain/index',
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
                  url: '../ElderlyHealthManageChecklistMain/index',
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