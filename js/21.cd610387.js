(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[21],{2818:function(t,a,s){"use strict";var e=s("ab35"),i=s.n(e);i.a},"28f5":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"q-mt-xl q-ml-lg"},[s("h6",[t._v("登入您的帳號")]),s("br"),s("q-form",{on:{submit:t.loginWithEmailPassword}},[s("q-input",{staticClass:"q-pr-lg q-mb-md",attrs:{type:"email",label:"電子信箱",dense:t.dense},model:{value:t.email,callback:function(a){t.email="string"===typeof a?a.trim():a},expression:"email"}}),s("q-input",{staticClass:"q-pr-lg q-mb-md",attrs:{type:t.isPwde?"password":"text",label:"密碼"},scopedSlots:t._u([{key:"append",fn:function(){return[s("q-icon",{staticClass:"cursor-pointer",attrs:{name:t.isPwde?"visibility_off":"visibility"},on:{click:function(a){t.isPwde=!t.isPwde}}})]},proxy:!0}]),model:{value:t.password,callback:function(a){t.password="string"===typeof a?a.trim():a},expression:"password"}}),s("q-btn",{staticClass:"btn q-ma-md",staticStyle:{width:"180px"},attrs:{color:"blue-8",unelevated:"",label:"登入",type:"submit"}})],1),s("q-dialog",{attrs:{persistent:""},model:{value:t.confirm,callback:function(a){t.confirm=a},expression:"confirm"}},[s("q-card",[s("q-card-section",{staticClass:"row items-center"},[s("span",{staticClass:"q-ml-sm"},[t._v("是否要匯入行事曆")])]),s("q-card-actions",{attrs:{align:"right"}},[s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{to:"home",flat:"",label:"不允許",color:"secondary"}}),s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{to:"home",flat:"",label:"允許",color:"secondary"}})],1)],1)],1)],1)])},i=[],r=s("59ca"),n=s.n(r),o={name:"Email",data(){return{name:"",email:"",password:"",isPwde:!0,errors:[],loading:!1,user:"",alert:!1,confirm:!1,prompt:!1,address:""}},methods:{SignUp:function(){n.a.auth().createUserWithEmailAndPassword(this.email,this.password).then(t=>{t.user.updateProfile({displayName:this.name}).then(()=>{})}).catch(t=>{this.error=t.message})},loginWithEmailPassword:function(){n.a.auth().signInWithEmailAndPassword(this.email,this.password).then(t=>{t.user&&this.$router.replace("/list")}).catch(t=>{this.error=t.message})}}},l=o,c=(s("2818"),s("2877")),p=s("0378"),d=s("27f9"),m=s("0016"),u=s("9c40"),f=s("24e8"),b=s("f09f"),h=s("a370"),w=s("4b7e"),q=s("7f67"),v=s("eebe"),g=s.n(v),y=Object(c["a"])(l,e,i,!1,null,null,null);a["default"]=y.exports;g()(y,"components",{QForm:p["a"],QInput:d["a"],QIcon:m["a"],QBtn:u["a"],QDialog:f["a"],QCard:b["a"],QCardSection:h["a"],QCardActions:w["a"]}),g()(y,"directives",{ClosePopup:q["a"]})},ab35:function(t,a,s){}}]);