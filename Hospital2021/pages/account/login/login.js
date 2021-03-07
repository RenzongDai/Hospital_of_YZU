// pages/account/login/login.js
let app = getApp().globalData.language;
Page({

  /**
   * Page initial data
   */
  data: {
    switchLanguage:app,
    languege:{
     
      login:"LogIn",
      enterInf:"Enter your login details to access your account",
      name:'Username',
      phone:'phone number',
      password:"Password",
      logSms:"Forgot Password or User name?",
      registre:"Registre",
      errorMassage:{
        pleaseName:"Please enter your username",
        plaesePassword:"Please enter your password",
        pleasePhone:"Please enter your phone",
      }

    }

  },
   //this languge function for the switch button where change between Englis and Chinese
   Languege:function(lang){
 
    if(lang)
    {
      this.setData({
        languege:{
     
          login:"登录",
          enterInf:"输入您的登录详细信息以访问您的帐户",
          name:'用户名',
          phone:'手机号',
          password:"密码",
          logSms:"忘记密码或用户名？",
          registre:"寄存器",
          errorMassage:{
            pleaseName:"请输入您的用户名",
            plaesePassword:"请输入您的密码",
            pleasePhone:"请输入您的手机号",
          }
    
        }
      });  
  }
  else{
    this.setData({
      languege:{
     
        login:"LogIn",
        enterInf:"Enter your login details to access your account",
        name:'Username',
        phone:'phone number',
        password:"Password",
        logSms:"Forgot Password or User name?",
        registre:"Registre",
        errorMassage:{
          pleaseName:"Please enter your username",
          plaesePassword:"Please enter your password",
          pleasePhone:"Please enter your phone",
        }
  
      }
    }); 

  }
  
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
   this.Languege(this.switchLanguage);
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