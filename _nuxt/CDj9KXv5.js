import{_ as H}from"./DFMyOoIw.js";import{_ as q}from"./3dfFjJBi.js";import{n as U,p as V,r as z,q as O,l as n,e as r,f as s,d as T,o as Z,s as G,t as I,k as a,i as u,v as w,x as R,j as g,y as P,F as N,z as S,A as W,c as M,B as _,C as y,D as L,E as X,G as D,H as J}from"./O2ooG4V0.js";import{r as F}from"./CjpztEmK.js";import{r as K}from"./CFPm5_iu.js";import{r as Q}from"./DbGqkg_q.js";import{_ as Y}from"./CQUCfMQJ.js";let ee=async m=>{let o=new FormData;return o.append("image",m),await $fetch(U+"/projects/search",{method:"POST",body:o})};const B=V("camera",()=>{let m=z(),o=z(!1),d=z();return{isTargetFound:m,loading:o,data:d,scan:async c=>{let b=await O(ee,[c]);d.value=b.data.project},pauseNplay:c=>{let b=c.target.attributes.index.value,v=d.value.objects_data.objects[b],l;v.type==="audio"?l=c.target.querySelector("audio"):l=document.getElementById(`id-${Number(b)+1}`),v.content.options.autoplay?l.pause():l.play(),v.content.options.autoplay=!v.content.options.autoplay}}});function te(m,o){return n(),r("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[s("path",{d:"M9.5 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"}),s("path",{"fill-rule":"evenodd",d:"M2.5 5A1.5 1.5 0 0 0 1 6.5v5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 13.5 5h-.879a1.5 1.5 0 0 1-1.06-.44l-1.122-1.12A1.5 1.5 0 0 0 9.38 3H6.62a1.5 1.5 0 0 0-1.06.44L4.439 4.56A1.5 1.5 0 0 1 3.38 5H2.5ZM11 8.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z","clip-rule":"evenodd"})])}function ae(m,o){return n(),r("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[s("path",{d:"M3 3.732a1.5 1.5 0 0 1 2.305-1.265l6.706 4.267a1.5 1.5 0 0 1 0 2.531l-6.706 4.268A1.5 1.5 0 0 1 3 12.267V3.732Z"})])}function se(m,o){return n(),r("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[s("rect",{width:"10",height:"10",x:"3",y:"3",rx:"1.5"})])}const oe={key:0,class:"flex-center absolute inset-0 z-[1000000000] gap-2 bg-black/65 text-lg"},le={class:"flex-center shine w-[clamp(300px,90%,700px)] gap-5 rounded-lg p-12 text-black"},ne={class:"absolute bottom-5 flex w-full items-center justify-between px-2 lg:px-5"},ie={class:"flex-center size-full rounded-full bg-slate-200"},re={class:"relative"},de={key:0,class:"flex-center absolute inset-0 z-[10000]"},ce={class:"flex-center top-3 h-[80%] w-[80%] rounded-md bg-black/70 text-white"},ue={class:"flex flex-col gap-2 text-white"},pe=["onClick"],me=T({__name:"scan",setup(m){let o=z(),d=z({error:!1,cameras:!1}),i=B(),k=z(),c=z(),b=async l=>{setTimeout(()=>{if(c.value===l){c.value=!1,M().add({title:"مشکلی در تغییر دوربین به وجود آمد",color:"red"});return}},5e3),c.value=l;let t=await navigator.mediaDevices.getUserMedia({video:{deviceId:l.deviceId,groupId:l.groupId},audio:!1}).catch(()=>{c.value=!1,M().add({title:"مشکلی در تغییر دوربین به وجود آمد",color:"red"})});t&&(c.value=!1,o.value.srcObject=t,d.value.cameras=!1)},v=()=>{let l=document.createElement("canvas");l.width=o.value.videoWidth,l.height=o.value.videoHeight,l.getContext("2d").drawImage(o.value,0,0,o.value.videoWidth,o.value.videoHeight);let t=l.toDataURL().split(","),j=t[0].match(/:(.*?);/)[1],$=atob(t[t.length-1]),f=$.length,p=new Uint8Array(f);for(;f--;)p[f]=$.charCodeAt(f);i.loading=!0,i.scan(new File([p],"target.jpg",{type:j})).then(()=>{i.loading=!1,i.data.objects_data&&setTimeout(()=>{const e=document.querySelector("#example-target");e.addEventListener("targetFound",x=>{i.isTargetFound=!0,document.querySelectorAll("#audio-entity , #video-entity").forEach(h=>{h.addEventListener("click",i.pauseNplay);let A=h.attributes.index.value,E=i.data.objects_data.objects[A],C;E.type==="audio"?C=h.querySelector("audio"):C=document.getElementById(`id-${Number(A)+1}`),E.content.options.autoplay&&C.play()})}),e.addEventListener("targetLost",x=>{i.isTargetFound=!1,document.querySelectorAll("#audio-entity , #video-entity").forEach(h=>{h.removeEventListener("click",i.pauseNplay);let A=h.attributes.index.value,E=i.data.objects_data.objects[A],C;E.type==="audio"?C=h.querySelector("audio"):C=document.getElementById(`id-${Number(A)+1}`),C.pause()})})},500)}).catch(()=>{i.loading=!1})};return Z(()=>{navigator.mediaDevices.enumerateDevices().then(l=>{k.value=l.filter(t=>t.kind==="videoinput")}),navigator.mediaDevices.getUserMedia({video:{facingMode:{exact:"environment"}},audio:!1}).then(l=>{o.value.srcObject=l}).catch(()=>{d.value.error=!0})}),(l,t)=>{const j=H,$=q,f=G("auto-animate");return n(),r(N,null,[I((n(),r("div",null,[s("video",{ref_key:"cameraStream",ref:o,class:"absolute size-full",autoplay:"",playsinline:"",muted:""},null,512),a(i).loading?(n(),r("div",oe,[s("div",le,[u(a(F),{class:"size-7 animate-spin"}),t[4]||(t[4]=s("p",null,"درحال جستجو...",-1))])])):w("",!0),t[6]||(t[6]=R('<p class="absolute z-10 w-full bg-white p-3 text-center text-lg text-black"> شی مورد نظر خود را درون باکس قرار دهید </p><div class="absolute flex size-full flex-col"><div class="size-full h-[calc(50%-150px)] bg-black/65"></div><div class="flex"><div class="size-full bg-black/65"></div><div class="relative max-h-[300px] min-h-[300px] min-w-[300px] max-w-[300px] overflow-hidden rounded border-[6px] border-white"><div class="animate-translate absolute top-0 w-full border-[3px] border-white"></div></div><div class="size-full bg-black/65"></div></div><div class="h-[calc(50%-150px)] w-full bg-black/65"></div></div>',2)),s("div",ne,[t[5]||(t[5]=s("div",{class:"w-[40px]"},null,-1)),a(i).loading?w("",!0):(n(),r("button",{key:0,onClick:t[0]||(t[0]=(...p)=>a(v)&&a(v)(...p)),class:"size-[80px] rounded-full border-[6px] p-1 lg:size-[90px]"},[s("div",ie,[u(a(K),{class:"size-9 fill-black"})])])),s("button",{onClick:t[1]||(t[1]=p=>a(d).cameras=!0),class:"flex items-center gap-2 rounded-md bg-slate-200 p-2 text-sm text-black"},[u(a(te),{class:"size-6"})])])])),[[f]]),u($,{show:a(d).error,class:"flex flex-col items-center gap-10"},{default:g(()=>[t[7]||(t[7]=s("p",{class:"text-[22px]"},"دستگاه شما دارای دوربین مناسب برای اسکن اشیا نیست",-1)),u(j,{icon:a(Q),text:"بازگشت به صفحه اصلی",onClick:t[2]||(t[2]=p=>("navigateTo"in l?l.navigateTo:a(P))("/"))},null,8,["icon"])]),_:1},8,["show"]),u($,{show:a(d).cameras,onClose:t[3]||(t[3]=p=>a(d).cameras=!1)},{default:g(()=>[I((n(),r("div",re,[t[10]||(t[10]=s("p",{class:"title !mb-0"},"لیست دوربین های دستگاه شما",-1)),t[11]||(t[11]=s("p",{class:"mb-6 mt-2 text-sm"},"برای انتخاب کلیک کنید",-1)),a(c)?(n(),r("div",de,[s("div",ce,[u(a(F),{class:"size-6 animate-spin gap-2"}),t[8]||(t[8]=s("p",null,"در حال عوض کردن دوربین...",-1))])])):w("",!0),s("div",ue,[(n(!0),r(N,null,S(a(k),(p,e)=>(n(),r("div",{class:"flex cursor-pointer items-center justify-end gap-2 rounded-md bg-dark-second p-2 px-4",onClick:x=>a(b)(p)},[s("p",null,W(p.label?p.label:`camera ${e+1}`),1),t[9]||(t[9]=s("span",{class:"size-3 animate-bounce rounded-full bg-green-600"},null,-1))],8,pe))),256))])])),[[f]])]),_:1},8,["show"])],64)}}}),ve={key:0},fe=["src","id","autoplay","onEnded"],he={class:"flex w-full"},ge=["index"],be=["src","onEnded"],xe=["innerHTML"],_e={class:"flex-center group absolute bottom-2 right-2 z-[1000000] size-[120px] cursor-help overflow-hidden rounded-lg border opacity-80"},ye=["src"],we={key:1,class:"flex-center dark:bg-dark-main"},ke={class:"space-y-2 text-center"},$e=T({__name:"aframe",setup(m){let o=B();return(d,i)=>{const k=_("a-assets"),c=_("a-camera"),b=_("a-image"),v=_("MusicalNoteIcon"),l=_("a-entity"),t=_("a-video"),j=_("a-scene"),$=_("XCircleIcon"),f=Y,p=H;return a(o).data.objects_data?(n(),r("div",ve,[u(j,{"mindar-image":`imageTargetSrc:https://api.ar.hadem.ir/${a(o).data.mind};`,"color-space":"sRGB",renderer:"colorManagement: true, physicallyCorrectLights","vr-mode-ui":"enabled: false","device-orientation-permission-ui":"enabled: false"},{default:g(()=>[u(k,null,{default:g(()=>[(n(!0),r(N,null,S(a(o).data.objects_data.objects,(e,x)=>(n(),r("div",null,[e.type==="video"&&!e.disabled?(n(),r("video",{key:0,src:e.content.src.replace("http","https"),id:`id-${x+1}`,crossorigin:"anonymous",autoplay:a(o).isTargetFound&&e.content.options.autoplay,onEnded:h=>e.content.options.autoplay=!1},null,40,fe)):w("",!0)]))),256))]),_:1}),u(c,{position:"0 0 0","look-controls":"enabled: false",cursor:"fuse: false; rayOrigin: mouse;",raycaster:"far: 10000; objects: .clickable"}),u(l,{"mindar-image-target":"targetIndex: 0",id:"example-target"},{default:g(()=>[(n(!0),r(N,null,S(a(o).data.objects_data.objects,(e,x)=>(n(),y(l,null,{default:g(()=>[e.type==="img"&&!e.disabled?(n(),y(b,{key:0,src:e.content.src.replace("http","https"),position:`${e.Cx} ${e.Cy} 0`,width:e.Cw,height:e.Ch,class:"clickable",visible:"true"},null,8,["src","position","width","height"])):w("",!0),e.type==="audio"&&!e.disabled?(n(),y(l,{key:1,htmlembed:"",width:e.Cw,height:e.Ch,position:`${e.Cx} ${e.Cy} 0`,class:"clickable"},{default:g(()=>[s("div",{style:L(`width :${e.Cw*300}px;height :${e.Ch*300}px;`)},[s("div",he,[s("div",{class:"flex h-[45px] w-full items-center justify-between rounded-md bg-black px-1 *:size-8 *:fill-white",id:"audio-entity",index:x},[(n(),y(X(e.content.options.autoplay&&a(o).isTargetFound?a(se):a(ae)))),u(v),s("audio",{src:e.content.src.replace("http","https"),onEnded:h=>e.content.options.autoplay=!1},null,40,be)],8,ge)])],4)]),_:2},1032,["width","height","position"])):w("",!0),e.type==="video"&&!e.disabled?(n(),y(t,{key:2,src:`#id-${x+1}`,position:`${e.Cx} ${e.Cy} 0`,width:e.Cw,height:e.Ch,class:"clickable",id:"video-entity",index:x},null,8,["src","position","width","height","index"])):w("",!0),e.type==="text"&&!e.disabled?(n(),y(l,{key:3,htmlembed:"",position:`${e.Cx} ${e.Cy} 0`,width:e.Cw,height:e.Ch,class:"clickable"},{default:g(()=>[s("div",{class:"whitespace-nowrap",style:L(`width :${e.Cw*300}px;height :${e.Ch*300}px;`),innerHTML:e.content.src},null,12,xe)]),_:2},1032,["position","width","height"])):w("",!0)]),_:2},1024))),256))]),_:1})]),_:1},8,["mindar-image"]),u(f,{text:"خروج از صفحه اسکن",class:"absolute left-5 top-5 z-[10000]"},{default:g(()=>[u($,{class:"size-10 cursor-pointer",onClick:i[0]||(i[0]=e=>("reloadNuxtApp"in d?d.reloadNuxtApp:a(D))())})]),_:1}),s("div",_e,[s("img",{src:`https://api.ar.hadem.ir/${a(o).data.target}`,class:"absolute size-full"},null,8,ye),i[2]||(i[2]=s("p",{class:"z-[10] hidden text-black group-hover:block"},"تارگت مورد نظر",-1))])])):(n(),r("div",we,[s("div",ke,[i[3]||(i[3]=s("p",{class:"text-lg"},"شی برای تارگت مورد نظر یافت نشد",-1)),u(p,{class:"w-[350px] p-2",text:"بازگشت به صفحه اسکن",onClick:i[1]||(i[1]=e=>("reloadNuxtApp"in d?d.reloadNuxtApp:a(D))())})])]))}}}),Ce={class:"relative h-[100dvh] *:h-full"},Be=T({__name:"camera.client",setup(m){let o=B();return J({script:[{src:"https://supereggbert.github.io/aframe-htmlembed-component/dist/build.js",crossorigin:"",tagPosition:"head"}]}),(d,i)=>{const k=me,c=$e;return n(),r("div",Ce,[a(o).data?(n(),y(c,{key:1})):(n(),y(k,{key:0}))])}}});export{Be as default};
