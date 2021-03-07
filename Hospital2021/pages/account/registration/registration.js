// pages/account/registration/registration.js
let app = getApp().globalData.language;
Page({

  /**
   * Page initial data
   */
  data: {
    switchLanguage:app,
    userType:"0"// where 0 patient 1 doctor 2 administrator 
    ,ifEmptey:{
      name:false,
      password:false,
      phone:false,
      nickName:false,
      id:{
        lessThan:false,
        empty:false
      },
      sex:false 
    },
   // Languge opject is content all text inside the registration page Defult language is English 
    languege:{
     
      registration:"Registration",
      enterInf:"Enter your Information",
      name:'name',
      id:'ID',
      phone:'phone',
      sex:{
        male:"Male",
        femal:"Female"
      },
      nickName:"Nick Name",
      password:"password",
      registre:"registre",
      errorMassage:{
        pleaseName:"Please enter your name",
        plaesePassword:"Please enter your password",
        pleasePhone:"Please enter your phone",
        pleaseNick:"Please enter your nickname",
        pleaseId:{
          empty:"Please enter your ID number",
          lessThan:"The identity number consists of 14 numbers"
        }
        ,pleaseSex:"Please select a gender"
      }

    }

  }
  ,//Here the submit form function of the registration page
  registre:function(e){
    const information = e.detail.value;
    //Error massage when the user didn't fill the form is showning an error massge 
    this.errorMassage(information.name,information.password,information.phone,information.nickName,information.id,information.sex);

    console.log(this.data.ifEmptey);
    console.log(e)
  }
  ,
  //this languge function for the switch button where change between Englis and Chinese
  Languege:function(e){
    console.log(e);
    console.log(e.detail.value);
     app= e.detail.value;
    console.log( app)
    if(app){
      this.setData({
        languege:{
          registration:"注册",
          enterInf:"输入您的信息",
          name:'名字',
          id:'ID',
          phone:'手机号',
          sex:{
            male:"男",
            femal:"女"
          },
          nickName:"昵称",
          password:"密码",
          registre:"寄存器",
          errorMassage:{
            pleaseName:"请输入你的名字",
            plaesePassword:"请输入您的密码",
            pleasePhone:"请输入您的手机",
            pleaseNick:"请输入您的昵称",
            pleaseId:{
              empty:"请输入您的身份证号码",
              lessThan:"身份证号码由14个数字组成"
            }
            ,pleaseSex:"请选择性别"
          }
        }
      });  
  }
  else{
    this.setData({
      languege:{
        registration:"Registration",
      enterInf:"Enter your Information",
        name:'name',
        id:'ID',
        phone:'phone',
        sex:{
          male:"Male",
          femal:"Female"
        },
        nickName:"Nick Name",
        password:"password",
        registre:"registre",
        errorMassage:{
          pleaseName:"Please enter your name",
          plaesePassword:"Please enter your password",
          pleasePhone:"Please enter your phone",
          pleaseNick:"Please enter your nickname",
          pleaseId:{
            empty:"Please enter your ID number",
            lessThan:"The identity number consists of 14 numbers"
          }
          ,pleaseSex:"Please select a gender"
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
 //Error massage when the user didn't fill the form is showning an error massge
  ,errorMassage: function(name,password,phone,nickName,id,sex){
    if(name === ""){
      this.setData({
        ifEmptey:{
          name:true
        }
      })
    }
    else if (password === ""){
      this.setData({
        ifEmptey:{
          password:true
        }
      })
    }

    else if (phone === ""){
      this.setData({
        ifEmptey:{
          phone:true
        }
      })
    }
    else if (nickName === ""){
      this.setData({
        ifEmptey:{
          nickName:true
        }
      })
    }
    
    else if (id === ""){
      this.setData({
        ifEmptey:{
          id:{
            empty:true
          }
        }
      })
      
    }

    else if (id.lenthg > 0 && id.lenthg < 14){
      this.setData({
        ifEmptey:{
          id:{
            lessThan:true
          }
        }
      })}

      else if (sex === ""){
        this.setData({
          ifEmptey:{
            sex:true
          }
        })
      }


  }
})