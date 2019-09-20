// pages/apply/apply.js
const app = getApp()
const util = require('../../utils/util.js')
import { postRequest } from '../../utils/httpRequest.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activity_id: '',
    token: '',
    itemObj: {}
  },

  // 获取详情
  getDetail () {
    let that = this
    let params = {
      activity_id: that.data.activity_id,
      token: that.data.token
    }
    postRequest('/activity/detail', params, true).then(res => {
      console.log(res)
      that.setData({ itemObj: res })
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    if (app.globalData.token == '') {
      that.setData({ token: app.globalData.fakeToken })
    } else {
      that.setData({ token: app.globalData.token })
    }
    that.setData({
      activity_id: options.id
    })
    that.getDetail()
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