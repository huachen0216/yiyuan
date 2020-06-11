const DB = wx.cloud.database().collection("diabetesHealthManageList")

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
    s_2_1: [{
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
        name: '其他（失访，结束问卷）',
        value: '2_1_3',
        gender: 0
      }
    ],
    s_2_2: [{
        name: '糖尿病',
        value: '2_2_1',
        gender: 0
      },
      {
        name: '糖尿病和高血压',
        value: '2_2_2',
        gender: 0
      },
      {
        name: '糖尿病和其他疾病',
        value: '2_2_3',
        gender: 0
      },
      {
        name: '否认糖尿病 ',
        value: '2_2_4',
        gender: 0
      },
      {
        name: '不知道 ',
        value: '2_2_5',
        gender: 0
      }
    ],
    s_2_3: [{
        name: '体检过（进行了血压、血糖测量和心肺听诊）（跳转到2.5）',
        value: '2_3_1',
        gender: 0
      },
      {
        name: '没有体检',
        value: '2_3_2',
        gender: 0
      },
      {
        name: '记不清（失访，结束问卷）',
        value: '2_3_3',
        gender: 0
      }
    ],
    s_2_5: [{
        name: '大约每月随访一次（含不到一个月）',
        value: '2_5_1',
        gender: 0
      },
      {
        name: '大约每两个月随访一次',
        value: '2_5_2',
        gender: 0
      },
      {
        name: '大约每季度随访一次',
        value: '2_5_3',
        gender: 0
      },
      {
        name: '大约每半年随访一次',
        value: '2_5_4',
        gender: 0
      },
      {
        name: '大约每年随访一次',
        value: '2_5_5',
        gender: 0
      },
      {
        name: '仅电话随访过',
        value: '2_5_6',
        gender: 0
      },
      {
        name: '没随访过（跳转到2.7）',
        value: '2_5_7',
        gender: 0
      },
      {
        name: '记不清（失访，结束问卷）',
        value: '2_5_8',
        gender: 0
      }
    ],
    s_2_4: [{
        name: '体检过（进行了血压、血糖测量和心肺听诊）（跳转到2.5）',
        value: '2_4_1',
        gender: 0
      },
      {
        name: '没有体检',
        value: '2_4_2',
        gender: 0
      },
      {
        name: '记不清（失访，结束问卷）',
        value: '2_4_3',
        gender: 0
      }
    ],
    s_2_7: [{
        name: '不知道有随访，没接到通知',
        value: '2_7_1',
        gender: 0
      },
      {
        name: '知道有随访，但没时间或觉得没必要',
        value: '2_7_2',
        gender: 0
      },
      {
        name: '其他原因',
        value: '2_7_3',
        gender: 0
      }
    ],
    s_3_1: [{
        name: '有（为不真实，跳转到3.3）',
        value: '3_1_1',
        gender: 0
      },
      {
        name: '没有',
        value: '3_1_2',
        gender: 0
      }
    ],
    s_3_3: [{
        name: '真实',
        value: '3_3_1',
        gender: 0
      },
      {
        name: '不真实（同时判定为不规范）',
        value: '3_3_2',
        gender: 0
      }
    ],
    s_4_3: [{
        name: '达到国家规范要求频次（3次及以上）',
        value: '4_3_1',
        gender: 0
      },
      {
        name: '未达到国家规范要求频次（视为不规范）',
        value: '4_3_2',
        gender: 0
      }
    ],
    s_4_5: [{
        name: '是',
        value: '4_5_1',
        gender: 0
      },
      {
        name: '否（未按国家规范要求做追加随访视为不规范）',
        value: '4_5_2',
        gender: 0
      }
    ],
    s_4_6: [{
        name: '规范',
        value: '4_6_1',
        gender: 0
      },
      {
        name: '不规范',
        value: '4_6_2',
        gender: 0
      }
    ],
    s_5_1: [{
        name: '是',
        value: '5_1_1',
        gender: 0
      },
      {
        name: '否',
        value: '5_1_2',
        gender: 0
      }
    ],
    // checkbox item 定义
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
        name: '缺少肝功能结果报告单',
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
    checkServiceCheckBoxItems: [{
        name: '测量血压',
        value: '2-6-1',
        status: 0
      },
      {
        name: '询问您近期身体情况',
        value: '2-6-2',
        status: 0
      },
      {
        name: '询问您的生活方式（如吸烟、饮酒、运动、饮食等）',
        value: '2-6-3',
        status: 0
      },
      {
        name: '询问您服药情况',
        value: '2-6-4',
        status: 0
      },
      {
        name: '对您进行健康指导（如生活方式指导）',
        value: '2-6-5',
        status: 0
      },
      {
        name: '测量血糖',
        value: '2-6-6',
        status: 0
      },
      {
        name: '检查足背动脉（按压足背）',
        value: '2-6-7',
        status: 0
      },
      {
        name: '没有提供以上服务',
        value: '2-6-8',
        status: 0
      }
    ],
    recordListCheckBoxItems: [{
        name: '访谈情况与健康档案相符：体检和随访服务提供情况与档案记录一致',
        value: '3-2-1',
        status: 0
      },
      {
        name: '访谈情况与健康档案不符：否认体检，有体检记录',
        value: '3-2-2',
        status: 0
      },
      {
        name: '访谈情况与健康档案不符：否认随访，有随访记录',
        value: '3-2-3',
        status: 0
      },
      {
        name: '访谈情况与健康档案不符：随访中未测量血糖，有血糖记录',
        value: '3-2-4',
        status: 0
      },
      {
        name: '访谈情况与健康档案不符：电话随访，记录为门诊/家庭随访',
        value: '3-2-5',
        status: 0
      }
    ],
    noServiceListCheckBoxItems: [{
        name: '未提供年度健康体检',
        value: '4-1-1',
        status: 0
      },
      {
        name: '未提供随访服务',
        value: '4-1-2',
        status: 0
      },
      {
        name: '随访中未测量血糖',
        value: '4-1-3',
        status: 0
      },
      {
        name: '随访中未测量血压',
        value: '4-1-4',
        status: 0
      },
      {
        name: '仅进行电话随访',
        value: '4-1-5',
        status: 0
      },
      {
        name: '随访中未了解生活方式',
        value: '4-1-6',
        status: 0
      },
      {
        name: '访中未了解服药情况',
        value: '4-1-7',
        status: 0
      },
      {
        name: '随访中未进行健康指导',
        value: '4-1-8',
        status: 0
      },
      {
        name: '未检查足背动脉搏动',
        value: '4-1-9',
        status: 0
      },
      {
        name: '上述各项不规范均不存在',
        value: '4-1-10',
        status: 0
      }
    ],
    errorRecordCheckBoxItems: [{
        name: '无体检表',
        value: '4-2-1',
        status: 0
      },
      {
        name: '血糖/血压未填写',
        value: '4-2-2',
        status: 0
      },
      {
        name: '现存主要健康问题未填写',
        value: '4-2-3',
        status: 0
      },
      {
        name: '健康指导未纳入慢性病管理',
        value: '4-2-4',
        status: 0
      },
      {
        name: '现存主要健康问题填写错误',
        value: '4-2-5',
        status: 0
      },
      {
        name: '超重/肥胖未评价',
        value: '4-2-6',
        status: 0
      },
      {
        name: '腹型肥胖未评价',
        value: '4-2-7',
        status: 0
      },
      {
        name: '血压高以及辅助检查异常结果未评价',
        value: '4-2-8',
        status: 0
      },
      {
        name: '危险因素控制不正确',
        value: '4-2-9',
        status: 0
      },
      {
        name: '健康指导不正确',
        value: '4-2-10',
        status: 0
      },
      {
        name: '体格检查和生活方式填写不全',
        value: '4-2-11',
        status: 0
      },
      {
        name: '无空项、错项或漏项',
        value: '4-2-12',
        status: 0
      }
    ],
    latestFollowUpRecordCheckBoxItems: [{
        name: '随访日期',
        value: '4-4-1',
        status: 0
      },
      {
        name: '症状',
        value: '4-4-2',
        status: 0
      },
      {
        name: '血压',
        value: '4-4-3',
        status: 0
      },
      {
        name: '生活方式指导',
        value: '4-4-4',
        status: 0
      },
      {
        name: '服药依从性',
        value: '4-4-5',
        status: 0
      },
      {
        name: '此次随访分类',
        value: '4-4-6',
        status: 0
      },
      {
        name: '用药情况',
        value: '4-4-7',
        status: 0
      },
      {
        name: '血糖',
        value: '4-4-8',
        status: 0
      },
      {
        name: '足背动脉搏动',
        value: '4-4-9',
        status: 0
      },
      {
        name: '无空项、错项或漏项',
        value: '4-4-10',
        status: 0
      }
    ],
    // input变量定义
    assessedunit: '',
    usercode: '',
    name: '',
    phone: '',
    bloodlevel: '',
    examiner: '',
    examinerdate: '',
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
        url: '../DiabetesHealthManage/index',
      })
  },

  /**
   * 返回上一个页面
   * @param {*} e 
   */
  canceleHandle(e) {
    wx.redirectTo({
      url: '../DiabetesHealthManage/index',
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
                    url: '../DiabetesHealthManage/index',
                  })
                }, 1000)
              }
            })
          }
          var data = res.data[0]
          //checkbox 变量设定
          if (data.checkService !== undefined) {
            that.data.checkServiceCheckBoxItems.forEach(item => {
              data.checkService.forEach(checkServiceItem => {
                if (checkServiceItem == item.value) {
                  item.status = 1
                }
              })
            })
          }
          that.setData({
            checkServiceCheckBoxItems: that.data.checkServiceCheckBoxItems,
          })

          if (data.checkRecordList !== undefined) {
            that.data.recordListCheckBoxItems.forEach(item => {
              data.checkRecordList.forEach(checkRecordListItem => {
                if (checkRecordListItem == item.value) {
                  item.status = 1
                }
              })
            })
          }
          that.setData({
            recordListCheckBoxItems: that.data.recordListCheckBoxItems,
          })

          if (data.noServiceList !== undefined) {
            that.data.noServiceListCheckBoxItems.forEach(item => {
              data.noServiceList.forEach(noServiceListItem => {
                if (noServiceListItem == item.value) {
                  item.status = 1
                }
              })
            })
          }
          that.setData({
            noServiceListCheckBoxItems: that.data.noServiceListCheckBoxItems,
          })

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

          if (data.latestFollowUpRecord !== undefined) {
            that.data.latestFollowUpRecordCheckBoxItems.forEach(item => {
              data.latestFollowUpRecord.forEach(latestFollowUpRecordItem => {
                if (latestFollowUpRecordItem == item.value) {
                  item.status = 1
                }
              })
            })
          }
          that.setData({
            latestFollowUpRecordCheckBoxItems: that.data.latestFollowUpRecordCheckBoxItems,
          })

          //radio 变量设置
          that.data.genderItems.forEach(item => {
            if (data.gender == item.name) {
              item.gender = 1
            }
          })

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

            that.data.s_2_7.forEach(item => {
              if (data.s_2_7 == item.name) {
                item.s_2_7 = 1
              }
            }),

            that.data.s_3_1.forEach(item => {
              if (data.s_3_1 == item.name) {
                item.s_3_1 = 1
              }
            }),

            that.data.s_3_3.forEach(item => {
              if (data.s_3_3 == item.name) {
                item.s_3_3 = 1
              }
            }),

            that.data.s_4_3.forEach(item => {
              if (data.s_4_3 == item.name) {
                item.s_4_3 = 1
              }
            }),

            that.data.s_4_5.forEach(item => {
              if (data.s_4_5 == item.name) {
                item.s_4_5 = 1
              }
            }),

            that.data.s_4_6.forEach(item => {
              if (data.s_4_6 == item.name) {
                item.s_4_6 = 1
              }
            }),

            that.data.s_5_1.forEach(item => {
              if (data.s_5_1 == item.name) {
                item.s_5_1 = 1
              }
            }),

            that.setData({
              // 单选框
              genderItems: that.data.genderItems,
              s_2_1: that.data.s_2_1,
              s_2_2: that.data.s_2_2,
              s_2_3: that.data.s_2_3,
              s_2_4: that.data.s_2_4,
              s_2_5: that.data.s_2_5,
              s_2_7: that.data.s_2_7,
              s_3_1: that.data.s_3_1,
              s_3_3: that.data.s_3_3,
              s_4_3: that.data.s_4_3,
              s_4_5: that.data.s_4_5,
              s_4_6: that.data.s_4_6,
              s_5_1: that.data.s_5_1,
              // 输入框
              usercode: data.usercode,
              assessedunit: data.assessedunit,
              name: data.name,
              phone: data.phone,
              examiner: data.examiner,
              examinerdate: data.examinerdate,
              bloodlevel: data.bloodlevel,
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