// pages/applicationform/personalhistory/personalhistory.js
Page({

  /**
   * Page initial data
   */
  data: {
    whetherDrinkingAlcohol:["从不饮或几乎从不喝",
                    "只在特殊场合下（如喜庆、聚会或节假日）偶尔喝",
                    "每个月都喝，但频度不到每周一次",
                    "1次/周",
                    "2-3次/周",
                    "4次及以上/周（选1/2/3转至问题B14)"
    ],
    whetherSmoking:["从不",
                    "已戒烟（不吸烟三个月以上",
                    "吸烟（每天>= 1支，持续6个月以上)"
    ],
    drinkingReaction:["喝上—两口就会出现",
                    "少量饮酒后会出现",
                    "大量饮酒后才会出现",
                    "不会出现类似反应"
    ],
    eatingRegularly:["规律",
                    "较规律/偶尔不规律",
                    "经常不规律"
    ],
    whetherDrinkTeaRegularly:["否",
                    "是,但现在已不饮",
                    "是,且现在仍在饮用"
    ],
    index1:null,
    index2:null,
    index3:null,
    index4:null,
    index5:null

  },
  bindWhetherSmokingChange: function(e){
    this.setData({
       index1:e.detail.value
    }
    )
  },
  bindWhetherDrinkingAlcoholChange: function(e){
    this.setData({
       index2:e.detail.value
    }
    )
  },
   bindDrinkingReactionChange: function(e){
    this.setData({
       index3:e.detail.value
    }
    )
  },
  bindEatingRegularlyChange: function(e){
    this.setData({
       index4:e.detail.value
    }
    )
  },
  bindWhetherDrinkTeaRegularlyChange: function(e){
    this.setData({
       index5:e.detail.value
    }
    )
  },
  submitPersonalhistory: function(e){
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