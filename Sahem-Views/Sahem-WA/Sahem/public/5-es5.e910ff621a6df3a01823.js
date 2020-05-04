function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass(t,n,e){return n&&_defineProperties(t.prototype,n),e&&_defineProperties(t,e),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{Yj9t:function(t,n,e){"use strict";e.r(n);var r=e("ofXK"),o=e("tyNb"),i=e("3Pt+"),a=e("fXoL"),s=e("7Bak");function c(t,n){if(1&t&&(a.Ub(0,"div",10),a.Ac(1),a.Tb()),2&t){var e=a.gc();a.Cb(1),a.Cc(" ",e.formError," ")}}var l,u=function(){return["/auth/register"]},d=((l=function(){function t(n,e,r){_classCallCheck(this,t),this.router=n,this.formBuilder=e,this.auth=r,this.loginForm=new i.f({username:new i.d("",[i.q.required,i.q.minLength(10)]),password:new i.d("",[i.q.required,i.q.minLength(10),i.q.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")])}),this.formError="",this.credentials={_id:"",username:"",email:"",password:"",confirmPassword:"",exp:0,iat:0}}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"onSubmit",value:function(t){console.log(t)}},{key:"onLoginSubmit",value:function(){this.formError="",this.loginForm.get("username").value&&this.loginForm.get("password").value?(console.log(this.credentials),this.formError="All good",this.credentials.username=this.loginForm.get("username").value,this.credentials.password=this.loginForm.get("password").value,this.doLogin()):this.formError="All fields are required, please try again"}},{key:"doLogin",value:function(){var t=this;this.auth.login(this.credentials).then((function(){return t.router.navigateByUrl("/")})).catch((function(n){t.formError=n}))}}]),t}()).\u0275fac=function(t){return new(t||l)(a.Ob(o.a),a.Ob(i.c),a.Ob(s.a))},l.\u0275cmp=a.Ib({type:l,selectors:[["app-login"]],decls:17,vars:4,consts:[[1,"login-form",3,"formGroup","ngSubmit"],["role","alert",4,"ngIf"],[1,"txtb"],["for","username"],["type","username","id","username","formControlName","username","required",""],["for","Password"],["type","password","id","password","formControlName","password","required",""],["type","submit","value","Login",1,"logbtn"],[1,"bottom-text"],["routerLinkActive","router-link-active",3,"routerLink"],["role","alert"]],template:function(t,n){1&t&&(a.Ub(0,"form",0),a.cc("ngSubmit",(function(t){return n.onLoginSubmit()})),a.Ub(1,"h1"),a.Ac(2,"Login"),a.Tb(),a.zc(3,c,2,1,"div",1),a.Ub(4,"div",2),a.Ub(5,"label",3),a.Ac(6,"Username"),a.Tb(),a.Pb(7,"input",4),a.Tb(),a.Ub(8,"div",2),a.Ub(9,"label",5),a.Ac(10,"Password"),a.Tb(),a.Pb(11,"input",6),a.Tb(),a.Pb(12,"input",7),a.Ub(13,"div",8),a.Ac(14," Don't have account? "),a.Ub(15,"a",9),a.Ac(16,"Register"),a.Tb(),a.Tb(),a.Tb()),2&t&&(a.lc("formGroup",n.loginForm),a.Cb(3),a.lc("ngIf",n.formError),a.Cb(12),a.lc("routerLink",a.mc(3,u)))},directives:[i.r,i.m,i.g,r.k,i.b,i.l,i.e,i.p,o.d,o.c],styles:['.login-form[_ngcontent-%COMP%]{width:360px;background:rgba(0,0,0,.38);height:580px;padding:80px 40px;border-radius:10px;position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.login-form[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{text-align:center;margin-bottom:60px}.txtb[_ngcontent-%COMP%]{border-bottom:2px solid #adadad;position:relative;margin:30px 0}.txtb[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{font-size:15px;color:#ddd;border:none;width:100%;outline:none;background:none;padding:0 5px;height:40px}.txtb[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before{content:attr(data-placeholder);top:50%;left:5px;color:#adadad;-webkit-transform:translateY(-50%);transform:translateY(-50%);z-index:-1}.txtb[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after, .txtb[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before{position:absolute;-webkit-transition:.5s;transition:.5s}.txtb[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after{content:"";width:0;height:2px;background:linear-gradient(120deg,#3498db,#8e44ad)}.txtb[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus + span[_ngcontent-%COMP%]:before{top:-5px}.input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus + span[_ngcontent-%COMP%]:after, .logbtn[_ngcontent-%COMP%]{width:100%}.logbtn[_ngcontent-%COMP%]{display:block;height:50px;border:none;background:linear-gradient(120deg,#3498db,#8e44ad,#3498db);background-size:200%;color:#fff;outline:none;cursor:pointer;-webkit-transition:.5s;transition:.5s}.logbtn[_ngcontent-%COMP%]:hover{background-position:100%}.bottom-text[_ngcontent-%COMP%]{margin-top:60px;text-align:center;font-size:13px}']}),l);function g(t,n){if(1&t&&(a.Ub(0,"div",13),a.Ac(1),a.Tb()),2&t){var e=a.gc();a.Cb(1),a.Cc(" ",e.formError," ")}}var b,m,p=function(){return["/auth/login"]},f=[{path:"",component:d},{path:"login",component:d},{path:"register",component:(b=function(){function t(n,e,r){_classCallCheck(this,t),this.router=n,this.formBuilder=e,this.auth=r,this.formError="",this.credentials={_id:"",username:"",email:"",password:"",confirmPassword:"",exp:0,iat:0}}return _createClass(t,[{key:"ngOnInit",value:function(){this.registerForm=new i.f({username:new i.d("",[i.q.required,i.q.minLength(10)]),email:new i.d("",[i.q.required,i.q.email]),password:new i.d("",[i.q.required,i.q.minLength(10),i.q.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")]),confirmPassword:new i.d("",[i.q.required,i.q.minLength(10)])})}},{key:"onSubmit",value:function(t){console.log(t)}},{key:"onRegisterSubmit",value:function(){this.formError="",this.registerForm.get("username").value&&this.registerForm.get("email").value&&this.registerForm.get("password").value&&this.registerForm.get("confirmPassword").value?this.registerForm.get("password").value!==this.registerForm.get("confirmPassword").value?this.formError="Password doesn't match":(this.formError="All good",this.credentials.username=this.registerForm.get("username").value,this.credentials.email=this.registerForm.get("email").value,this.credentials.password=this.registerForm.get("password").value,this.credentials.confirmPassword=this.registerForm.get("confirmPassword").value,this.doRegister()):this.formError="All fields are required, please try again"}},{key:"doRegister",value:function(){var t=this;this.auth.register(this.credentials).then((function(){return t.router.navigateByUrl("/")})).catch((function(n){return t.formError=n}))}}]),t}(),b.\u0275fac=function(t){return new(t||b)(a.Ob(o.a),a.Ob(i.c),a.Ob(s.a))},b.\u0275cmp=a.Ib({type:b,selectors:[["app-register"]],decls:25,vars:4,consts:[[1,"login-form",3,"formGroup","ngSubmit"],["role","alert",4,"ngIf"],[1,"txtb"],["for","Username"],["type","text","id","username","name","username","formControlName","username","required",""],["for","Email"],["type","email","id","email","formControlName","email","required",""],["for","Password"],["type","password","id","password","formControlName","password","required",""],["type","password","id","confirmPassword","formControlName","confirmPassword","required",""],["type","submit","value","Register",1,"logbtn"],[1,"bottom-text"],["routerLinkActive","router-link-active",3,"routerLink"],["role","alert"]],template:function(t,n){1&t&&(a.Ub(0,"form",0),a.cc("ngSubmit",(function(t){return n.onRegisterSubmit()})),a.Ub(1,"h1"),a.Ac(2,"Register"),a.Tb(),a.zc(3,g,2,1,"div",1),a.Ub(4,"div",2),a.Ub(5,"label",3),a.Ac(6,"Username"),a.Tb(),a.Pb(7,"input",4),a.Tb(),a.Ub(8,"div",2),a.Ub(9,"label",5),a.Ac(10,"Email"),a.Tb(),a.Pb(11,"input",6),a.Tb(),a.Ub(12,"div",2),a.Ub(13,"label",7),a.Ac(14,"Password"),a.Tb(),a.Pb(15,"input",8),a.Tb(),a.Ub(16,"div",2),a.Ub(17,"label",7),a.Ac(18,"Confirm Password"),a.Tb(),a.Pb(19,"input",9),a.Tb(),a.Pb(20,"input",10),a.Ub(21,"div",11),a.Ac(22," Already have an account? "),a.Ub(23,"a",12),a.Ac(24,"Login"),a.Tb(),a.Tb(),a.Tb()),2&t&&(a.lc("formGroup",n.registerForm),a.Cb(3),a.lc("ngIf",n.formError),a.Cb(20),a.lc("routerLink",a.mc(3,p)))},directives:[i.r,i.m,i.g,r.k,i.b,i.l,i.e,i.p,o.d,o.c],styles:['.login-form[_ngcontent-%COMP%]{width:50vh;color:var(--text);background:var(--bg-secondary);height:100vh;padding:80px 40px;border-radius:10px;position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.login-form[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{text-align:center;margin-bottom:60px}.txtb[_ngcontent-%COMP%]{border-bottom:2px solid var(--border-color);position:relative;margin:30px 0}.txtb[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{font-size:15px;color:var(--text);border:none;width:100%;outline:none;background:none;padding:0 5px;height:40px}.txtb[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before{content:attr(data-placeholder);top:50%;left:5px;color:#adadad;-webkit-transform:translateY(-50%);transform:translateY(-50%);z-index:-1}.txtb[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after, .txtb[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before{position:absolute;-webkit-transition:.5s;transition:.5s}.txtb[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after{content:"";width:0;height:2px;background:linear-gradient(120deg,#3498db,#8e44ad)}.txtb[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus + span[_ngcontent-%COMP%]:before{top:-5px}.input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus + span[_ngcontent-%COMP%]:after, .logbtn[_ngcontent-%COMP%]{width:100%}.logbtn[_ngcontent-%COMP%]{display:block;height:50px;border:none;background:linear-gradient(120deg,#3498db,#8e44ad,#3498db);background-size:200%;color:var(--text);outline:none;cursor:pointer;-webkit-transition:.5s;transition:.5s}.logbtn[_ngcontent-%COMP%]:hover{background-position:100%}.bottom-text[_ngcontent-%COMP%]{margin-top:60px;text-align:center;font-size:13px}']}),b)}],h=((m=function t(){_classCallCheck(this,t)}).\u0275mod=a.Mb({type:m}),m.\u0275inj=a.Lb({factory:function(t){return new(t||m)},imports:[[o.e.forChild(f)],o.e]}),m),C=e("vvyD");e.d(n,"AuthModule",(function(){return v}));var P,v=((P=function t(){_classCallCheck(this,t)}).\u0275mod=a.Mb({type:P}),P.\u0275inj=a.Lb({factory:function(t){return new(t||P)},imports:[[r.c,h,C.a,i.h,i.o]]}),P)}}]);