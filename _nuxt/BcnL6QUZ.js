import{_ as G}from"./79oR7N23.js";import{r as E,_ as z}from"./CEWxzZIP.js";import{b as O,_ as j,a as J,c as H}from"./CM1XEINv.js";import{a as T,_ as L,v as D}from"./BHage6rK.js";import{_ as N}from"./3dfFjJBi.js";import{n as C,I as M,p as K,r as w,q as U,l as _,e as y,f as n,d as I,C as B,j as v,i as c,k as e,J as V,m as $,ak as Q,v as W,F as R,z as X,A,u as F,P as Z,al as Y,o as ee,s as te,t as se}from"./O2ooG4V0.js";import{e as q}from"./DwkAWi_Q.js";import"./CQUCfMQJ.js";import"./CjpztEmK.js";import"./CFPm5_iu.js";let ae=async d=>await $fetch(C+"/users/",{method:"GET",headers:M(),params:d}),oe=async(d,l,i,t)=>await $fetch(C+"/users/",{method:"POST",headers:M(),body:{first_name:d,last_name:l,username:i,password:t}}),le=async(d,l)=>await $fetch(C+"/users/change-password",{method:"POST",headers:M(),body:{user_id:d,new_password:l}}),ne=async(d,l)=>await $fetch(C+`/users/${d}`,{headers:M(),method:"POST",body:{user_id:l}});const S=K("user",()=>{let d=w([]),l=w(!1),i=w({prev:null,next:null,count:0});return{list:d,isDataReceived:l,nav:i,getList:a=>{U(ae,[a],{methodType:"list"},S)},newItem:async(a,s,p,h)=>{await U(oe,[a,s,p,h],{successMessage:`کاربر ${p} با موفقیت ساخته شد`}).catch(()=>{})},doActionOnItem:async(a,s)=>{await U(ne,[a,s],{successMessage:"عملیات با موفقیت انجام شد"}).catch(()=>{})},changeItemPass:async(a,s)=>{await U(le,[a,s],{successMessage:"رمز عبور کاربر با موفقیت تغییر یافت"}).catch(()=>{})}}});function re(d,l){return _(),y("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[n("path",{"fill-rule":"evenodd",d:"M8 3.5c-.771 0-1.537.022-2.297.066a1.124 1.124 0 0 0-1.058 1.028l-.018.214a.75.75 0 1 1-1.495-.12l.018-.221a2.624 2.624 0 0 1 2.467-2.399 41.628 41.628 0 0 1 4.766 0 2.624 2.624 0 0 1 2.467 2.399c.056.662.097 1.329.122 2l.748-.748a.75.75 0 1 1 1.06 1.06l-2 2.001a.75.75 0 0 1-1.061 0l-2-1.999a.75.75 0 0 1 1.061-1.06l.689.688a39.89 39.89 0 0 0-.114-1.815 1.124 1.124 0 0 0-1.058-1.028A40.138 40.138 0 0 0 8 3.5ZM3.22 7.22a.75.75 0 0 1 1.061 0l2 2a.75.75 0 1 1-1.06 1.06l-.69-.69c.025.61.062 1.214.114 1.816.048.56.496.996 1.058 1.028a40.112 40.112 0 0 0 4.594 0 1.124 1.124 0 0 0 1.058-1.028 39.2 39.2 0 0 0 .018-.219.75.75 0 1 1 1.495.12l-.018.226a2.624 2.624 0 0 1-2.467 2.399 41.648 41.648 0 0 1-4.766 0 2.624 2.624 0 0 1-2.467-2.399 41.395 41.395 0 0 1-.122-2l-.748.748A.75.75 0 1 1 1.22 9.22l2-2Z","clip-rule":"evenodd"})])}function ie(d,l){return _(),y("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[n("path",{"fill-rule":"evenodd",d:"M8 1a3.5 3.5 0 0 0-3.5 3.5V7A1.5 1.5 0 0 0 3 8.5v5A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 11.5 7V4.5A3.5 3.5 0 0 0 8 1Zm2 6V4.5a2 2 0 1 0-4 0V7h4Z","clip-rule":"evenodd"})])}function de(d,l){return _(),y("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[n("path",{"fill-rule":"evenodd",d:"M3.05 3.05a7 7 0 1 1 9.9 9.9 7 7 0 0 1-9.9-9.9Zm1.627.566 7.707 7.707a5.501 5.501 0 0 0-7.707-7.707Zm6.646 8.768L3.616 4.677a5.501 5.501 0 0 0 7.707 7.707Z","clip-rule":"evenodd"})])}const ue={class:"space-y-4"},me=I({__name:"changePass",props:{show:Boolean,id:Number},emits:["close"],setup(d,{emit:l}){let i=d,t=l,m=w(),u=w(!1),g=async()=>{T(["pass","pass-repeat"])&&(u.value=!0,await S().changeItemPass(i.id,m.value),u.value=!1,q([m]),t("close"))};return(a,s)=>{const p=O,h=L,b=N;return _(),B(b,{show:d.show,onClose:s[1]||(s[1]=x=>e(t)("close"))},{default:v(()=>[s[5]||(s[5]=n("p",{class:"text-xl"},"تغییر رمز عبور",-1)),n("div",ue,[c(p,{id:"pass",type:"password",modelValue:e(m),"onUpdate:modelValue":s[0]||(s[0]=x=>V(m)?m.value=x:m=x)},{default:v(()=>s[2]||(s[2]=[$("رمز عبور")])),_:1},8,["modelValue"]),c(p,{type:"password",id:"pass-repeat"},{default:v(()=>s[3]||(s[3]=[$("تکرار رمز عبور")])),_:1}),c(h,{loading:e(u),onSubmit:e(g)},{default:v(()=>s[4]||(s[4]=[$(" تغییر رمز عبور ")])),_:1},8,["loading","onSubmit"])])]),_:1},8,["show"])}}}),ce={class:"table"},pe={class:"tbody"},_e={class:"tr"},fe={class:"td font-mono"},we={class:"td"},ve={class:"td"},he={class:"td"},ge={key:0,class:"green-state"},ye={key:1,class:"red-state"},$e={key:0,class:"text-lg"},be={key:1,class:"text-lg"},Ve=I({__name:"user",setup(d){let l=S(),i=w(!1),t=w({id:0,action:{type:"",show:!1},changePass:!1}),m=Q(),u=async()=>{i.value=!0,await l.doActionOnItem(t.value.action.type,t.value.id),i.value=!1,t.value.action.show=!1,l.getList(F().query)};return(g,a)=>{const s=z,p=j,h=J,b=L,x=N,o=me;return _(),y(R,null,[n("table",ce,[a[3]||(a[3]=n("thead",{class:"thead"},[n("th",{class:"th"},"#"),n("th",{class:"th"},"نام"),n("th",{class:"th p-4"},"نام خانوادگی"),n("th",{class:"th"},"نام کاربری"),n("th",{class:"th"},"وضعیت"),n("th",{class:"th"})],-1)),e(l).isDataReceived?e(l).list.length?W("",!0):(_(),B(p,{key:1},{default:v(()=>a[2]||(a[2]=[$(" کاربری یافت نشد ")])),_:1})):(_(),B(s,{key:0})),n("tbody",pe,[(_(!0),y(R,null,X(e(l).list,(r,k)=>(_(),y("tr",_e,[n("td",fe,A(k+1),1),n("td",we,A(r.user.first_name?r.user.first_name:"کاربر"),1),n("td",ve,A(r.user.last_name?r.user.last_name:"ای آر استودیو"),1),n("td",he,A(r.user.username),1),n("td",null,[r.user.is_active?(_(),y("p",ge,"فعال")):(_(),y("p",ye,"غیر فعال"))]),n("td",null,[c(h,{actions:[{emit:"changePass",icon:e(ie),name:"تغییر رمز عبور",class:"*:fill-blue-500 w-[160px]"},{emit:"delete",icon:e(E),name:"حذف کاربر",class:r.user.id===e(m).data.id?"!hidden":"*:fill-red-600"},{emit:"deactivate",icon:e(de),name:"غیر فعال کردن",class:!r.user.is_active||r.user.id===e(m).data.id?"!hidden":"*:fill-yellow-400"},{emit:"activate",icon:e(re),name:"فعال کردن",class:r.user.is_active||e(m).data.id===r.user.id?"!hidden":"*:fill-green-500"}],onDelete:P=>(e(t).action.show=!0,e(t).action.type="delete",e(t).id=r.user.id),onDeactivate:P=>(e(t).action.show=!0,e(t).action.type="deactivate",e(t).id=r.user.id),onActivate:P=>(e(t).action.type="activate",e(t).action.show=!0,e(t).id=r.user.id),onChangePass:P=>(e(t).changePass=!0,e(t).id=r.user.id)},null,8,["actions","onDelete","onDeactivate","onActivate","onChangePass"])])]))),256))])]),c(x,{show:e(t).action.show,onClose:a[0]||(a[0]=r=>e(t).action.show=!1),class:"!max-w-[450px]"},{default:v(()=>[e(t).action.type==="delete"?(_(),y("p",$e," آیا مطمئن به حذف این کاربر هستید ? ")):(_(),y("p",be," آیا مطمئن به "+A(e(t).action.type==="deactivate"?"غیرفعال":"فعال")+" کردن این کاربر هستید ؟ ",1)),c(b,{class:"mt-4",onSubmit:e(u),loading:e(i)},{default:v(()=>a[4]||(a[4]=[$("تایید ")])),_:1},8,["onSubmit","loading"])]),_:1},8,["show"]),c(o,{show:e(t).changePass,id:e(t).id,onClose:a[1]||(a[1]=r=>e(t).changePass=!1)},null,8,["show","id"])],64)}}}),xe={class:"space-y-4"},Pe={class:"wrapper"},Ae={class:"wrapper"},Se=I({__name:"new",props:{show:Boolean},emits:["close"],setup(d,{emit:l}){let i=l,t=d,m=w(),u=S(),g=w(),a=w(),s=w(),p=w(),h=w(),b=async()=>{D("first-name")&&D("last-name")&&D("username")&&T(["password","password-repeat"])&&(m.value=!0,await u.newItem(g.value,a.value,s.value,p.value),m.value=!1,u.getList(F().query),i("close"))};return Z(()=>t.show,()=>{q([g,a,s,p,h])}),(x,o)=>{const r=O,k=L,P=N;return _(),B(P,{show:d.show,onClose:o[5]||(o[5]=f=>e(i)("close"))},{default:v(()=>[o[11]||(o[11]=n("p",{class:"title"},"کاربر جدید",-1)),n("div",xe,[n("div",Pe,[c(r,{id:"first-name",modelValue:e(g),"onUpdate:modelValue":o[0]||(o[0]=f=>V(g)?g.value=f:g=f),placeholder:"محمد"},{default:v(()=>o[6]||(o[6]=[$(" نام ")])),_:1},8,["modelValue"]),c(r,{id:"last-name",modelValue:e(a),"onUpdate:modelValue":o[1]||(o[1]=f=>V(a)?a.value=f:a=f),placeholder:"حسنی"},{default:v(()=>o[7]||(o[7]=[$(" نام خانوادگی ")])),_:1},8,["modelValue"])]),c(r,{id:"username",modelValue:e(s),"onUpdate:modelValue":o[2]||(o[2]=f=>V(s)?s.value=f:s=f),placeholder:"abolfazl_2031"},{default:v(()=>o[8]||(o[8]=[$(" نام کاربری")])),_:1},8,["modelValue"]),n("div",Ae,[c(r,{id:"password",modelValue:e(p),"onUpdate:modelValue":o[3]||(o[3]=f=>V(p)?p.value=f:p=f),placeholder:"********",type:"password"},{default:v(()=>o[9]||(o[9]=[$(" رمز عبور")])),_:1},8,["modelValue"]),c(r,{id:"password-repeat",modelValue:e(h),"onUpdate:modelValue":o[4]||(o[4]=f=>V(h)?h.value=f:h=f),placeholder:"********",type:"password"},{default:v(()=>o[10]||(o[10]=[$(" تکرار رمز عبور ")])),_:1},8,["modelValue"])]),c(k,{onSubmit:e(b),loading:e(m)},null,8,["onSubmit","loading"])])]),_:1},8,["show"])}}}),Ue={class:"table-wrapper"},Te=I({__name:"list",setup(d){let l=Y(),i=w(!1),t=S();return ee(()=>{Z(l,()=>{t.getList(l.query)},{immediate:!0})}),(m,u)=>{const g=G,a=Ve,s=H,p=Se,h=te("auto-animate");return _(),y("div",null,[c(g,{disabled:["filter","grid"],onNew:u[0]||(u[0]=b=>V(i)?i.value=!0:i=!0),onRefresh:u[1]||(u[1]=b=>e(t).getList(e(l).query))},{default:v(()=>u[3]||(u[3]=[$(" کاربر ")])),_:1}),n("div",Ue,[c(a)]),se((_(),y("div",null,[c(s,{show:e(t).isDataReceived,total:e(t).nav.count},null,8,["show","total"])])),[[h]]),c(p,{show:e(i),onClose:u[2]||(u[2]=b=>V(i)?i.value=!1:i=!1)},null,8,["show"])])}}});export{Te as default};
