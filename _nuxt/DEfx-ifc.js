import{r as q,_ as A}from"./CEWxzZIP.js";import{_ as G,a as P,b as M,c as z}from"./CM1XEINv.js";import{v as B,_ as V}from"./BHage6rK.js";import{_ as N}from"./3dfFjJBi.js";import{n as $,I as C,p as J,r as g,q as w,d as R,l as f,e as y,f as s,k as t,C as j,j as c,m as _,v as O,F,z as H,y as K,A as v,g as Q,i as u,J as b,u as h,o as W}from"./O2ooG4V0.js";import{g as X}from"./DwkAWi_Q.js";import{r as Y}from"./Cyg6GNl7.js";import"./CjpztEmK.js";let Z=async m=>await $fetch($+"/projects/categories",{params:m,method:"GET",headers:C()}),ee=async m=>await $fetch($+"/projects/categories",{method:"POST",headers:C(),body:{name:m}}),te=async(m,a)=>await $fetch($+`/projects/categories/${m}`,{method:"PUT",headers:C(),body:{name:a}}),se=async m=>await $fetch($+`/projects/categories/${m}`,{headers:C(),method:"DELETE"});const L=J("category",()=>{let m=g([]),a=g({prev:null,next:null,count:0}),d=g(!1);return{list:m,nav:a,isDataReceived:d,getList:o=>{w(Z,[o],{methodType:"list"},L)},updateItem:async(o,e)=>{await w(te,[o,e],{successMessage:"دسته بندی با موفقیت بروزرسانی شد"}).catch(()=>{})},newItem:async o=>{await w(ee,[o],{successMessage:`دسته بندی ${o} با موفقیت ساخته شد`}).catch(()=>{})},Delete:async o=>{await w(se,[o],{successMessage:"دسته بندی با موفقیت حذف شد"})}}}),ae={class:"table"},oe={class:"tbody"},le=["onClick"],ne={class:"td font-mono"},re={class:"td"},de={class:"td"},ie={class:"td"},ue={class:"blue-state"},me={key:0},pe={key:1},ce=R({__name:"category",setup(m){let a=L(),d=g(!1),l=g({showUpdate:!1,showDelete:!1,data:{}}),p=()=>{let o=B("name");o&&(d.value=!0,a.updateItem(l.value.data.id,o).then(()=>{d.value=!1,l.value.showUpdate=!1,a.getList(h().query)}))},i=g(),r=async()=>{d.value=!0,await a.Delete(l.value.data.id),d.value=!1,l.value.showDelete=!1,a.getList(h().query)};return(o,e)=>{const D=A,k=G,S=P,x=M,I=V,T=N;return f(),y(F,null,[s("table",ae,[e[6]||(e[6]=s("thead",{class:"thead"},[s("th",{class:"th"},"#"),s("th",{class:"th"},"عنوان"),s("th",{class:"th p-4"},"سازنده"),s("th",{class:"th"},"تاریخ ایجاد"),s("th",{class:"th p-4"},"تعداد پروژه‌های موجود"),s("th")],-1)),t(a).isDataReceived?t(a).list.length?O("",!0):(f(),j(k,{key:1},{default:c(()=>e[5]||(e[5]=[_(" دسته بندی ای یافت نشد ")])),_:1})):(f(),j(D,{key:0})),s("tbody",oe,[(f(!0),y(F,null,H(t(a).list,(n,E)=>(f(),y("tr",{class:"tr cursor-pointer",onClick:U=>("navigateTo"in o?o.navigateTo:t(K))(`/data/project/list?category=${n.id}`)},[s("td",ne,v(E+1),1),s("td",re,v(n.name),1),s("td",de,v(("getFullName"in o?o.getFullName:t(X))(n.user.first_name,n.user.last_name)),1),s("td",ie,v(new Date(n.created_at).toLocaleString("fa-IR")),1),s("td",null,[s("p",ue,v(n.projects_count),1)]),s("td",{onClick:e[0]||(e[0]=Q(()=>{},["stop"]))},[u(S,{actions:[{name:"بروزرسانی",emit:"update",icon:t(Y),class:"*:fill-blue-500"},{name:"حذف",emit:"delete",icon:t(q),class:"*:fill-red-600"}],onUpdate:U=>(t(l).data=n,t(l).showUpdate=!0,b(i)?i.value=n.name:i=n.name),onDelete:U=>(t(l).data=n,t(l).showDelete=!0)},null,8,["actions","onUpdate","onDelete"])])],8,le))),256))])]),u(T,{show:t(l).showUpdate,onClose:e[2]||(e[2]=n=>t(l).showUpdate=!1)},{default:c(()=>[e[9]||(e[9]=s("p",{class:"text-xl"},"بروزرسانی دسته بندی",-1)),u(x,{type:"text",id:"name",modelValue:t(i),"onUpdate:modelValue":e[1]||(e[1]=n=>b(i)?i.value=n:i=n)},{default:c(()=>e[7]||(e[7]=[_(" نام ")])),_:1},8,["modelValue"]),u(I,{class:"mt-3",loading:t(d),onSubmit:t(p)},{default:c(()=>e[8]||(e[8]=[_("بروزرسانی ")])),_:1},8,["loading","onSubmit"])]),_:1},8,["show"]),u(T,{show:t(l).showDelete,onClose:e[4]||(e[4]=n=>t(l).showDelete=!1)},{default:c(()=>[t(l).data.projects_count?(f(),y("div",pe,[e[13]||(e[13]=s("p",{class:"title"}," برای حذف این دسته بندی ,ابتدا باید پروژه هایش را حذف کنید ",-1)),u(I,{onSubmit:e[3]||(e[3]=n=>t(l).showDelete=!1)},{default:c(()=>e[12]||(e[12]=[_(" بستن ")])),_:1})])):(f(),y("div",me,[e[11]||(e[11]=s("p",{class:"title !mt-2"},"آیا مطمئن به حذف این دسته بندی هستید ؟",-1)),u(I,{class:"font-bold *:bg-red-600 *:!ring-0 *:hover:bg-red-600",loading:t(d),onSubmit:t(r)},{default:c(()=>e[10]||(e[10]=[_(" حذف ")])),_:1},8,["loading","onSubmit"])]))]),_:1},8,["show"])],64)}}}),fe={class:"flex items-center justify-between bg-gray-300 p-4 dark:bg-gray-900"},ge={class:"table-wrapper"},De=R({__name:"categories",setup(m){let a=L(),d=g(!1),l=()=>{let i=B("name");i&&(d.value=!0,a.newItem(i).then(()=>{d.value=!1,p.value=!1,a.getList(h().query)}))},p=g(!1);return W(()=>{a.getList(h().query)}),(i,r)=>{const o=ce,e=z,D=M,k=V,S=N;return f(),y("div",null,[s("div",fe,[r[2]||(r[2]=s("p",{class:"text-xl font-bold"},"دسته بندی پروژه را انتخاب کنید",-1)),s("button",{class:"rounded-lg bg-main-600 p-2.5 text-sm text-black",onClick:r[0]||(r[0]=x=>b(p)?p.value=!0:p=!0)}," اضافه کردن دسته بندی جدید ")]),s("div",ge,[u(o)]),u(e,{show:t(a).isDataReceived,total:t(a).nav.count},null,8,["show","total"]),u(S,{show:t(p),onClose:r[1]||(r[1]=x=>b(p)?p.value=!1:p=!1)},{default:c(()=>[r[5]||(r[5]=s("p",{class:"text-xl"},"دسته بندی جدید",-1)),u(D,{id:"name",placeholder:"عنوان دسته بندی"},{default:c(()=>r[3]||(r[3]=[_(" عنوان ")])),_:1}),u(k,{class:"mt-5",loading:t(d),onSubmit:t(l)},{default:c(()=>r[4]||(r[4]=[_("ساخت دسته بندی ")])),_:1},8,["loading","onSubmit"])]),_:1},8,["show"])])}}});export{De as default};
