import{d as p,r as b,o as m,aa as k,e as _,aP as y,h as f,aQ as v,x as g,aR as T,aS as j,aM as O}from"./O2ooG4V0.js";const $=Symbol.for("nuxt:client-only"),M=p({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(r,{slots:t,attrs:d}){const o=b(!1);return m(()=>{o.value=!0}),k($,!0),a=>{var u;if(o.value)return(u=t.default)==null?void 0:u.call(t);const l=t.fallback||t.placeholder;if(l)return l();const n=a.fallback||a.placeholder||"",i=a.fallbackTag||a.placeholderTag||"span";return _(i,d,n)}}}),h=new WeakMap;function x(r){if(h.has(r))return h.get(r);const t={...r};return t.render?t.render=(d,o,a,l,n,i)=>{var u;if(l.mounted$??d.mounted$){const e=(u=r.render)==null?void 0:u.bind(d)(d,o,a,l,n,i);return e.children===null||typeof e.children=="string"?y(e):f(e)}else{const e=v(d._.vnode.el??null)??["<div></div>"];return g(e.join(""),e.length)}}:t.template&&(t.template=`
      <template v-if="mounted$">${r.template}</template>
      <template v-else><div></div></template>
    `),t.setup=(d,o)=>{var u;const a=T(),l=b(a.isHydrating===!1),n=O();if(a.isHydrating){const e={...n.attrs},c=C(n);for(const s in e)delete n.attrs[s];m(()=>{Object.assign(n.attrs,e),n.vnode.dirs=c})}m(()=>{l.value=!0});const i=((u=r.setup)==null?void 0:u.call(r,d,o))||{};return j(i)?Promise.resolve(i).then(e=>typeof e!="function"?(e=e||{},e.mounted$=l,e):(...c)=>{if(l.value||!a.isHydrating){const s=e(...c);return s.children===null||typeof s.children=="string"?y(s):f(s)}else{const s=v((n==null?void 0:n.vnode.el)??null)??["<div></div>"];return g(s.join(""),s.length)}}):typeof i=="function"?(...e)=>{if(l.value)return f(i(...e),o.attrs);const c=v((n==null?void 0:n.vnode.el)??null)??["<div></div>"];return g(c.join(""),c.length)}:Object.assign(i,{mounted$:l})},h.set(r,t),t}function C(r){if(!r||!r.vnode.dirs)return null;const t=r.vnode.dirs;return r.vnode.dirs=null,t}export{M as _,x as c};
