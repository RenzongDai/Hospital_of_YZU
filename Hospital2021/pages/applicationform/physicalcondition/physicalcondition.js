// pages/applicationform/physicalcondition/physicalcondition.js
Page({

  /**
   * Page initial data
   */
  data: {
    dropweight:'',
    isacceptHP:2 ,
    personality: ['外向型', '混合型', '内向型'],
    Psychological:['不太紧张', '适中', '较紧张、压力大'],
    HPtreatment:["PPI+阿莫西林+甲硝唑+克拉霉素",
                 " PPI+铋剂+甲硝唑+四环素",
                 "PPI+克拉霉素+阿莫西林/甲硝唑",
                 "PPI+阿莫西林+甲硝唑",
                 "PPI+阿莫西林+左氧氟沙星",
                 "PPI+阿莫西林+克拉霉素+铋剂",
                 "其他",
                 "不清楚"
                ],
      index1:null
      ,index2:null
      ,index3:null
      
  

  },
  dropweight: function(e){
    const ifDropWeight = e.detail.value
    this.setData({
      dropweight: ifDropWeight
    });
  },
  bindcharacterChange: function (e){
      this.setData({
      
        index1:e.detail.value
      
    })
  },
  bindPsychologicalstressChange : function (e){
    this.setData({
   
      index2:e.detail.value
    
  })
},
bindHPtreatmentChange : function (e){
  this.setData({
 
    index3:e.detail.value
  
})
},
bindisacceptHP: function(e){
  console.log(e);
  
  this.setData({
 
    isacceptHP:e.detail.value
  
})
},
  submitPhysicalCondition:function(e){
  
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