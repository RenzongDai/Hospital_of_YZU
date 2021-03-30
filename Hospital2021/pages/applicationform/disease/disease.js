// pages/applicationform/disease/disease.js
Page({

  /**
   * Page initial data
   */
  data: {
    disease:null,
    gastric:null,
    allergy:null,
    Hptherapy:null
  },
  bindDiseaseChange: function(e) { 
    this.setData({
      disease:e.detail.value
    });

  },
  bindGastricChange: function(e) { 
    this.setData({
      gastric:e.detail.value
    });

  },
  bindAllergyChange: function(e) { 
    this.setData({
      allergy:e.detail.value
    });

  },
  bindHptherapyChange: function(e) { 
    this.setData({
     Hptherapy:e.detail.value
    });

  },
  submitDisease: function(e){
    console.log(e);

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})