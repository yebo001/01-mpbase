// // index.js
// Page({

//   handler(event){
//     console.log("事件触发了...");
//     console.log(event);
//   },

//   getInputVal(event){
//       console.log(event.detail.value)
//   },

//   parentHandler(){
//     console.log("父组件绑定的事件")
//   },

//   btnHandler(){
//     console.log("子组件绑定的事件")
//   }
  

// })
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: {}
  },

  // 获取数据
  getData(){

    //显示提示框
    wx.showLoading({
      title: '数据正在加载中...',
      mask: true
    })

    wx.request({
      url: 'https://jsonplaceholder.typicode.com/posts/1',
      method:"GET",
      data: {},
      header:{},
      success: (res) => {
        console.log(" seccess调用 ")
        console.log(res.data)
        if(res.statusCode === 200){
          this.setData({
            list: res.data
          })
        }
      },
      fail: (res) => {
        console.log(res)
      },
      complete: (res) => {
        console.log(" complete调用 ")
        wx.hideLoading()
      },
    })
  },

  // 删除商品
  async delHandler(){
    const { confirm } = await wx.showModal({
      title: '提示',
      content: '是否删除该商品？'
    })
    if(confirm){
      wx.showToast({
        title: '删除成功',
        icon: 'none',
        duration: 2000
      })
    }else{
      wx.showToast({
        title: '取消删除',
        icon: 'error',
        duration: 2000
      })
    }
  },

  setStorage(){
    wx.setStorageSync('num', 1)
    wx.setStorageSync('obj', {name:'tom',age:0})
  },
  getStorage(){
      const num = wx.getStorageSync('num')
      const obj = wx.getStorageSync('obj')
      console.log(num)
      console.log(obj)
  },
  removeStorage(){
    wx.removeStorageSync('num')
  },
  clearStorage(){
    wx.clearStorageSync()
  },
  // sync同步 不接sync结尾是异步

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("onLoad 生命周期函数--监听页面加载")
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onReady 生命周期函数--监听页面初次渲染完成")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("onShow 生命周期函数--监听页面显示")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("onHide 生命周期函数--监听页面隐藏")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("onUnload 生命周期函数--监听页面卸载")
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log("onPullDownRefresh 页面相关事件处理函数--监听用户下拉动作")
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("onReachBottom 页面上拉触底事件的处理函数")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log("onShareAppMessage 用户点击右上角分享")
  }
})