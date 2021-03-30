// pages/applicationform/recentdrugsituation/recentdrugsituation.js
Page({

  /**
   * Page initial data
   */
  data: {
    aspirin:'',
    glucocorticoids:'',
    AspirinCR:["2-3次/月",
               "1-2次/周",
               "3-6次/周",
               "7次/周	"
    ],
    GlucocorticoidsCR:["2-3次/月",
               "1-2次/周",
               "3-6次/周",
               "7次/周	"
    ]
    ,
    index1:null,
    index2:null

  },
  Aspirin: function(e){
    
    this.setData({
      aspirin:e.detail.value
    })
  },
  Glucocorticoids: function(e){
    
    this.setData({
      glucocorticoids:e.detail.value
    })
  },
  bindAspirinCRChange : function (e){
    this.setData({
 
      index1:e.detail.value
    
  })
  },
  bindGlucocorticoidsCRChange : function (e){
    this.setData({
 
      index2:e.detail.value
    
  })
  },
  submitRecentdrugsituation:function(e){
  
    console.log(e)
  }
  ,

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