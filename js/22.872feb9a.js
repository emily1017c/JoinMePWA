(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[22],{"013f":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[t._m(0),a("div",{staticClass:"btngroup q-pa-lg"},[a("q-btn",{staticClass:"fb btn q-ma-md",staticStyle:{width:"180px"},attrs:{unelevated:""},on:{click:t.facebooklogin}},[a("q-icon",{staticClass:"fab fa-facebook-f q-pa-md q-pr-lg",attrs:{size:"sm"}}),a("label",{staticClass:"q-px-sm"},[t._v("Facebook")])],1),a("br"),a("q-btn",{staticClass:"g btn q-ma-md",staticStyle:{width:"180px"},attrs:{color:"red-8",unelevated:"",type:"submit"},on:{click:t.googlelogin}},[a("q-icon",{staticClass:"fab fa-google q-pa-md q-pr-lg",attrs:{size:"sm"}}),a("label",{staticClass:"q-px-sm"},[t._v("Google")])],1),a("q-separator",{staticClass:"q-ma-md",attrs:{inset:""}}),a("q-btn",{staticClass:"em btn q-ma-md",staticStyle:{width:"180px"},attrs:{to:"/email",color:"blue-8",unelevated:""}},[a("q-icon",{staticClass:"q-pa-md q-pr-lg far fa-envelope",attrs:{size:"sm"}}),a("label",{staticClass:"q-px-sm"},[t._v("Email")])],1),a("br"),a("br"),a("div",{staticClass:"text"},[a("span",{staticClass:"signin"},[t._v("還沒有帳號嗎？")]),a("router-link",{attrs:{to:"signin"}},[a("span",[t._v("註冊")])])],1)],1)])},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"logo"},[e("img",{staticClass:"img",attrs:{src:a("cf05")}})])}],o=a("8aa5"),n=a.n(o),c=a("fc1b"),r={name:"Login",data(){return{user:{},isAuth:!1}},created(){c["c"].onAuthStateChanged(t=>{t?(this.user=t,this.isAuth=!0):(this.user={},this.isAuth=!1)})},methods:{googlelogin(){const t=new n.a.auth.GoogleAuthProvider;c["c"].signInWithPopup(t).then(t=>{this.user=t.user,this.isAuth=!0,this.$router.replace("/form")}).catch(t=>console.error(t))},facebooklogin(){const t=new n.a.auth.FacebookAuthProvider;c["c"].signInWithPopup(t).then(t=>{this.user=t.user,this.isAuth=!0,this.$router.replace("/home")}).catch(t=>console.error(t))},logout(){c["c"].signOut().then(()=>{this.user={},this.isAuth=!1}).catch(t=>console.log(t))}}},l=r,u=(a("da41"),a("2877")),h=a("9c40"),p=a("0016"),m=a("eb85"),g=a("eebe"),b=a.n(g),d=Object(u["a"])(l,e,i,!1,null,null,null);s["default"]=d.exports;b()(d,"components",{QBtn:h["a"],QIcon:p["a"],QSeparator:m["a"]})},da41:function(t,s,a){"use strict";var e=a("e196"),i=a.n(e);i.a},e196:function(t,s,a){}}]);