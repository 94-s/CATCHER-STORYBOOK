import{jsx as n,jsxs as e,Fragment as r}from"react/jsx-runtime";import o,{css as t}from"styled-components";import i,{useRef as l,useState as a}from"react";var c=function(){return c=Object.assign||function(n){for(var e,r=1,o=arguments.length;r<o;r++)for(var t in e=arguments[r])Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n},c.apply(this,arguments)};function d(n,e){var r={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&e.indexOf(o)<0&&(r[o]=n[o]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var t=0;for(o=Object.getOwnPropertySymbols(n);t<o.length;t++)e.indexOf(o[t])<0&&Object.prototype.propertyIsEnumerable.call(n,o[t])&&(r[o[t]]=n[o[t]])}return r}function s(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n}var p,u,g,h,x,b,f,m,w,k,v,y,z,C,O,D,j,F,E,B,A,N,S,P,L,T,M,V,I,X,Z,R="#ffffff",W="#000000",Y="#FC762A",H="#FC8643",q="#EFEFEF",G="#E6E6E6",J="#ABABAB",K="#727272",Q=function(e){var r=d(e,[]);return n($,c({disabled:!r.disabled},r,{children:r.label}))},U=t(b||(b=s(["\n  ","\n  ","\n        ","\n    ","\n"],["\n  ","\n  ","\n        ","\n    ","\n"])),(function(n){return n.color&&t(p||(p=s(["\n      color: ",";\n    "],["\n      color: ",";\n    "])),n.color)}),(function(n){return n.disabled?t(u||(u=s(["\n          background: ",";\n        "],["\n          background: ",";\n        "])),q):t(g||(g=s(["\n          opacity: 1;\n          &:hover {\n            background: ",";\n          }\n        "],["\n          opacity: 1;\n          &:hover {\n            background: ",";\n          }\n        "])),H)}),(function(n){return n.outLine&&t(h||(h=s(["\n      color: ",";\n      background-color: ",";\n      border: 1px solid ",";\n      &:hover {\n        opacity: 0.7;\n        background-color: ",";\n      }\n    "],["\n      color: ",";\n      background-color: ",";\n      border: 1px solid ",";\n      &:hover {\n        opacity: 0.7;\n        background-color: ",";\n      }\n    "])),n.disabled?G:H,R,n.disabled?G:H,R)}),(function(n){return n.fullWidth&&t(x||(x=s(["\n      width: 100%;\n    "],["\n      width: 100%;\n    "])))})),$=o.button(f||(f=s(["\n  display: flex;\n  color: ",";\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  padding: 16px;\n  gap: 10px;\n  width: 380px;\n  height: 56px;\n  background: ",";\n  border-radius: 4px;\n  flex: none;\n  order: 0;\n  flex-grow: 0;\n  border: none;\n  ","\n"],["\n  display: flex;\n  color: ",";\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  padding: 16px;\n  gap: 10px;\n  width: 380px;\n  height: 56px;\n  background: ",";\n  border-radius: 4px;\n  flex: none;\n  order: 0;\n  flex-grow: 0;\n  border: none;\n  ","\n"])),R,Y,U),_=function(r){var o=d(r,[]);return e(rn,c({htmlFor:o.value},{children:[n(en,c({type:"checkbox",style:{width:o.width?o.width:"1.5rem",height:o.height?o.height:"1.5rem"},id:o.value,name:o.value},o,{onChange:o.onChange,value:o.value})),n(on,c({style:{color:o.Valid?W:J}},{children:o.value?o.value:"항목을 입력해 주세요"}))]}))},nn=t(k||(k=s(["\n  ","\n"],["\n  ","\n"])),(function(n){return n.Valid?t(m||(m=s(["\n          &:checked {\n            background-color: ",";\n          }\n        "],["\n          &:checked {\n            background-color: ",";\n          }\n        "])),H):t(w||(w=s(["\n          &:checked {\n            background-color: ",";\n          }\n        "],["\n          &:checked {\n            background-color: ",";\n          }\n        "])),J)})),en=o.input(v||(v=s(["\n  appearance: none;\n  width: 1.5rem;\n  height: 1.5rem;\n  border: 1.5px solid gainsboro;\n  border-radius: 0.35rem;\n  margin: 0;\n  ","\n  &:checked {\n    border-color: transparent;\n    background-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e\");\n    background-size: 100% 100%;\n    background-position: 50%;\n    background-repeat: no-repeat;\n    ","\n  }\n"],["\n  appearance: none;\n  width: 1.5rem;\n  height: 1.5rem;\n  border: 1.5px solid gainsboro;\n  border-radius: 0.35rem;\n  margin: 0;\n  ","\n  &:checked {\n    border-color: transparent;\n    background-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e\");\n    background-size: 100% 100%;\n    background-position: 50%;\n    background-repeat: no-repeat;\n    ","\n  }\n"])),nn,nn),rn=o.label(y||(y=s(["\n  display: flex;\n  align-items: center;\n  user-select: none;\n"],["\n  display: flex;\n  align-items: center;\n  user-select: none;\n"]))),on=o.p(z||(z=s(["\n  margin: 0;\n  margin-left: 0.25rem;\n"],["\n  margin: 0;\n  margin-left: 0.25rem;\n"]))),tn=i.forwardRef((function(e,o){return n(r,{children:n(an,c({ref:o},e,{className:e.buttonType},{children:n(r,{children:e.label})}))})})),ln=t(F||(F=s(["\n  ","\n  ","\n    ","\n    ","\n"],["\n  ","\n  ","\n    ","\n    ","\n"])),(function(n){return"main"===n.buttonType&&t(C||(C=s(["\n      color: ",";\n      background-color: ",";\n      border: 1px solid ",";\n    "],["\n      color: ",";\n      background-color: ",";\n      border: 1px solid ",";\n    "])),R,H,H)}),(function(n){return"sub"===n.buttonType&&t(O||(O=s(["\n      color: ",";\n      background-color: ",";\n      border: 1px solid ",";\n    "],["\n      color: ",";\n      background-color: ",";\n      border: 1px solid ",";\n    "])),H,R,H)}),(function(n){return"disabled"===n.buttonType&&t(D||(D=s(["\n      color: ",";\n      background-color: ",";\n      border: 1px solid ",";\n    "],["\n      color: ",";\n      background-color: ",";\n      border: 1px solid ",";\n    "])),R,G,G)}),(function(n){return"cancel"===n.buttonType&&t(j||(j=s(["\n      color: ",";\n      background-color: ",";\n      border: 1px solid ",";\n    "],["\n      color: ",";\n      background-color: ",";\n      border: 1px solid ",";\n    "])),K,R,G)})),an=o.button(E||(E=s(['\n  width: 100%;\n  font-size: 16px;\n  font-weight: 500;\n  padding: 13px 16px 12px;\n  border-radius: 8px;\n  transition: 0.21s;\n  //라벨 앞에 아이콘, 백그라운드로 넣을 수 있음.\n  /* &:before {\n    content: "123";\n    display: inline-block;\n    color: #fff;\n    margin-right: 10px;\n  } */\n  ',"\n"],['\n  width: 100%;\n  font-size: 16px;\n  font-weight: 500;\n  padding: 13px 16px 12px;\n  border-radius: 8px;\n  transition: 0.21s;\n  //라벨 앞에 아이콘, 백그라운드로 넣을 수 있음.\n  /* &:before {\n    content: "123";\n    display: inline-block;\n    color: #fff;\n    margin-right: 10px;\n  } */\n  ',"\n"])),ln),cn=i.forwardRef((function(o,t){var i=l(null),d=a(!1),s=d[0],p=d[1],u=a(!1),g=u[0],h=u[1],x=a(o.type),b=x[0],f=x[1];return n(r,{children:e(dn,{children:[e("div",c({className:"inputInner ".concat(s?"focus":"")},{children:[o.label?n("label",c({className:s||o.value&&o.value.length>0?"focus":"",onClick:function(){p(!0),i.current&&i.current.focus()}},{children:o.label})):null,n("div",c({className:"scaleBox"},{children:n(sn,c({ref:i},o,{type:b,value:o.value,onFocus:function(){return p(!0)},onBlur:function(){return p(!1)},autoComplete:"new-password"}))})),e("div",c({className:"util"},{children:[o.value&&o.value.length>0?n("button",{type:"button",className:"delete",onClick:function(){return o.onDelete()}}):null,"password"===o.type&&n("button",{type:"button",className:"isVisible ".concat(g?"visible":""),onClick:function(){h(!g),f("password"===b?"text":"password")}})]}))]})),o.error?n("p",{children:o.error}):null]})})})),dn=o.div(B||(B=s(["\n  .inputInner {\n    display: flex;\n    align-items: center;\n    position: relative;\n    border: 1px solid #e6e6e6;\n    border-radius: 5px;\n    padding: 12px 12px 12px;\n    transition: border-color 0.21s;\n\n    &.focus {\n      border-color: ",";\n    }\n    label {\n      position: absolute;\n      top: 50%;\n      left: 12px;\n      transform: translateY(-50%);\n      font-size: 14px;\n      color: ",";\n      transition: 0.21s;\n      background-color: ",";\n      cursor: pointer;\n      z-index: 1;\n      &.focus {\n        top: -0px;\n        font-size: 11px;\n        font-weight: 500;\n        color: ",";\n      }\n    }\n    .scaleBox {\n      flex: 1;\n    }\n    .util {\n      display: flex;\n      height: 24px;\n      button {\n        width: 24px;\n        height: 24px;\n        background-color: transparent;\n        background-size: cover;\n        transition: background-image 0.21s;\n        cursor: pointer;\n        &.delete {\n          background-image: ",";\n        }\n        &.isVisible {\n          margin-left: 6px;\n          background-color: red;\n          &.visible {\n            background-color: initial;\n            background-image: ",";\n          }\n        }\n      }\n    }\n  }\n\n  p {\n    font-size: 12px;\n    color: ",";\n    margin-top: 4px;\n  }\n"],["\n  .inputInner {\n    display: flex;\n    align-items: center;\n    position: relative;\n    border: 1px solid #e6e6e6;\n    border-radius: 5px;\n    padding: 12px 12px 12px;\n    transition: border-color 0.21s;\n\n    &.focus {\n      border-color: ",";\n    }\n    label {\n      position: absolute;\n      top: 50%;\n      left: 12px;\n      transform: translateY(-50%);\n      font-size: 14px;\n      color: ",";\n      transition: 0.21s;\n      background-color: ",";\n      cursor: pointer;\n      z-index: 1;\n      &.focus {\n        top: -0px;\n        font-size: 11px;\n        font-weight: 500;\n        color: ",";\n      }\n    }\n    .scaleBox {\n      flex: 1;\n    }\n    .util {\n      display: flex;\n      height: 24px;\n      button {\n        width: 24px;\n        height: 24px;\n        background-color: transparent;\n        background-size: cover;\n        transition: background-image 0.21s;\n        cursor: pointer;\n        &.delete {\n          background-image: ",";\n        }\n        &.isVisible {\n          margin-left: 6px;\n          background-color: red;\n          &.visible {\n            background-color: initial;\n            background-image: ",";\n          }\n        }\n      }\n    }\n  }\n\n  p {\n    font-size: 12px;\n    color: ",";\n    margin-top: 4px;\n  }\n"])),Y,J,R,W,"url(".concat("data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M12%2021C16.9706%2021%2021%2016.9706%2021%2012C21%207.02944%2016.9706%203%2012%203C7.02944%203%203%207.02944%203%2012C3%2016.9706%207.02944%2021%2012%2021Z%22%20fill%3D%22%23ABABAB%22%2F%3E%3Cpath%20d%3D%22M15%209L9%2015%22%20stroke%3D%22white%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3Cpath%20d%3D%22M15%2015L9%209%22%20stroke%3D%22white%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E",")"),"url(".concat("data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M12%205.25C4.5%205.25%201.5%2012%201.5%2012C1.5%2012%204.5%2018.75%2012%2018.75C19.5%2018.75%2022.5%2012%2022.5%2012C22.5%2012%2019.5%205.25%2012%205.25Z%22%20stroke%3D%22%234A4A4A%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3Cpath%20d%3D%22M12%2015.75C14.0711%2015.75%2015.75%2014.0711%2015.75%2012C15.75%209.92893%2014.0711%208.25%2012%208.25C9.92893%208.25%208.25%209.92893%208.25%2012C8.25%2014.0711%209.92893%2015.75%2012%2015.75Z%22%20stroke%3D%22%234A4A4A%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E",")"),Y),sn=o.input(A||(A=s(["\n  font-size: 16px;\n  font-weight: 500;\n  transition: 0.21s;\n  color: ",";\n  //input이 모바일에서 16px 보다 작을때, 접근성을위해 zoom in이 되는데 그걸 해결하기 위한 스타일\n  width: 114%;\n  transform: scale(0.875);\n  transform-origin: left;\n"],["\n  font-size: 16px;\n  font-weight: 500;\n  transition: 0.21s;\n  color: ",";\n  //input이 모바일에서 16px 보다 작을때, 접근성을위해 zoom in이 되는데 그걸 해결하기 위한 스타일\n  width: 114%;\n  transform: scale(0.875);\n  transform-origin: left;\n"])),W),pn=function(r){var o=d(r,[]);return e(gn,c({style:{width:o.width?o.width:"10rem",height:o.height?o.height:"2.5rem"}},{children:[e(hn,{children:[o.label&&n(xn,{children:o.label}),n(bn,{onChange:o.onChange,value:o.value,placeholder:o.placeholder})]}),o.value&&n(fn,{children:n(mn,c({onClick:o.onClick},{children:n(wn,{children:"x"})}))})]}))},un=t(P||(P=s(["\n  ","\n"],["\n  ","\n"])),(function(n){return n.textVaild?t(N||(N=s(["\n          &:focus-within {\n            border: 1px solid ",";\n          }\n        "],["\n          &:focus-within {\n            border: 1px solid ",";\n          }\n        "])),Y):t(S||(S=s(["\n          &:focus-within {\n            border: 1px solid ",";\n          }\n        "],["\n          &:focus-within {\n            border: 1px solid ",";\n          }\n        "])),K)})),gn=o.div(L||(L=s(["\n  display: flex;\n  padding: 2px 12px;\n  box-sizing: border-box;\n  background: ",";\n  border: 1px solid ",";\n  border-radius: 5px;\n  flex: none;\n  ","\n"],["\n  display: flex;\n  padding: 2px 12px;\n  box-sizing: border-box;\n  background: ",";\n  border: 1px solid ",";\n  border-radius: 5px;\n  flex: none;\n  ","\n"])),R,q,un),hn=o.div(T||(T=s(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  width: 100%;\n  height: 100%;\n"],["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  width: 100%;\n  height: 100%;\n"]))),xn=o.label(M||(M=s(["\n  color: ",";\n  font-size: 12px;\n"],["\n  color: ",";\n  font-size: 12px;\n"])),K),bn=o.input(V||(V=s(["\n  width: 100%;\n  height: 100%;\n  border: none;\n  outline: none;\n  font-family: Pretendard;\n  font-weight: 500;\n  line-height: 30px;\n  letter-spacing: -0.01em;\n  padding-left: 0;\n  color: ",";\n"],["\n  width: 100%;\n  height: 100%;\n  border: none;\n  outline: none;\n  font-family: Pretendard;\n  font-weight: 500;\n  line-height: 30px;\n  letter-spacing: -0.01em;\n  padding-left: 0;\n  color: ",";\n"])),W),fn=o.div(I||(I=s(["\n  display: flex;\n  align-items: center;\n  margin-left: auto;\n  margin-left: 20px;\n"],["\n  display: flex;\n  align-items: center;\n  margin-left: auto;\n  margin-left: 20px;\n"]))),mn=o.button(X||(X=s(["\n  cursor: pointer;\n  height: 20px;\n  width: 20px;\n  border-radius: 15px;\n  background-color: ",";\n  border: none;\n  color: ",";\n"],["\n  cursor: pointer;\n  height: 20px;\n  width: 20px;\n  border-radius: 15px;\n  background-color: ",";\n  border: none;\n  color: ",";\n"])),G,R),wn=o.p(Z||(Z=s(["\n  margin: 0;\n"],["\n  margin: 0;\n"]))),kn={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},vn=i.createContext&&i.createContext(kn),yn=function(){return yn=Object.assign||function(n){for(var e,r=1,o=arguments.length;r<o;r++)for(var t in e=arguments[r])Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n},yn.apply(this,arguments)},zn=function(n,e){var r={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&e.indexOf(o)<0&&(r[o]=n[o]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var t=0;for(o=Object.getOwnPropertySymbols(n);t<o.length;t++)e.indexOf(o[t])<0&&Object.prototype.propertyIsEnumerable.call(n,o[t])&&(r[o[t]]=n[o[t]])}return r};function Cn(n){return n&&n.map((function(n,e){return i.createElement(n.tag,yn({key:e},n.attr),Cn(n.child))}))}function On(n){return function(e){return i.createElement(Dn,yn({attr:yn({},n.attr)},e),Cn(n.child))}}function Dn(n){var e=function(e){var r,o=n.attr,t=n.size,l=n.title,a=zn(n,["attr","size","title"]),c=t||e.size||"1em";return e.className&&(r=e.className),n.className&&(r=(r?r+" ":"")+n.className),i.createElement("svg",yn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,o,a,{className:r,style:yn(yn({color:n.color||e.color},e.style),n.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),l&&i.createElement("title",null,l),n.children)};return void 0!==vn?i.createElement(vn.Consumer,null,(function(n){return e(n)})):e(kn)}function jn(n){return On({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M11.707 2.293A.997.997 0 0 0 11 2H6a.997.997 0 0 0-.707.293l-3 3A.996.996 0 0 0 2 6v5c0 .266.105.52.293.707l10 10a.997.997 0 0 0 1.414 0l8-8a.999.999 0 0 0 0-1.414l-10-10zM13 19.586l-9-9V6.414L6.414 4h4.172l9 9L13 19.586z"}},{tag:"circle",attr:{cx:"8.353",cy:"8.353",r:"1.647"}}]})(n)}var Fn,En,Bn,An,Nn,Sn,Pn,Ln,Tn,Mn,Vn,In,Xn,Zn,Rn,Wn,Yn,Hn,qn,Gn,Jn=function(r){var o=d(r,[]);return e(Un,c({},o,{children:[o.icon&&n(_n,{children:n(jn,{className:"icon"})}),n($n,{children:o.label})]}))},Kn={L:{width:"75px",height:"34px",fontSize:"1.25rem"},S:{width:"50px",height:"26px",fontSize:"0.875rem"}},Qn=t(An||(An=s(["\n  ","\n  ","\n    ","\n"],["\n  ","\n  ","\n    ","\n"])),(function(n){return n.size&&t(Fn||(Fn=s(["\n      width: ",";\n      height: ",";\n      font-size: ",";\n    "],["\n      width: ",";\n      height: ",";\n      font-size: ",";\n    "])),Kn[n.size].width,Kn[n.size].height,Kn[n.size].fontSize)}),(function(n){return"S"===n.size&&t(En||(En=s(["\n      .icon {\n        width: 15px;\n        height: 15px;\n        fill: ",";\n      }\n    "],["\n      .icon {\n        width: 15px;\n        height: 15px;\n        fill: ",";\n      }\n    "])),Y)}),(function(n){return"L"===n.size&&t(Bn||(Bn=s(["\n      .icon {\n        width: 20px;\n        height: 20px;\n        fill: ",";\n      }\n    "],["\n      .icon {\n        width: 20px;\n        height: 20px;\n        fill: ",";\n      }\n    "])),Y)})),Un=o.div(Nn||(Nn=s(["\n  ","\n  border: 1px solid ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n"],["\n  ","\n  border: 1px solid ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n"])),Qn,Y),$n=o.p(Sn||(Sn=s(["\n  margin: 0;\n  margin-right: 3px;\n  color: ",";\n"],["\n  margin: 0;\n  margin-right: 3px;\n  color: ",";\n"])),Y),_n=o.p(Pn||(Pn=s(["\n  margin: 0;\n  height: 100%;\n  display: flex;\n  align-items: center;\n"],["\n  margin: 0;\n  height: 100%;\n  display: flex;\n  align-items: center;\n"]))),ne=function(r){var o=d(r,[]);return e(oe,c({htmlFor:o.value},{children:[n(re,c({type:"radio",style:{width:o.width?o.width:"1.5rem",height:o.height?o.height:"1.5rem"},id:o.value,name:o.value},o,{onChange:o.onChange,value:o.value})),n(te,c({style:{color:o.Valid?W:J}},{children:o.value?o.value:"항목을 입력해 주세요"}))]}))},ee=t(Mn||(Mn=s(["\n  ","\n"],["\n  ","\n"])),(function(n){return n.Valid?t(Ln||(Ln=s(["\n          &:checked {\n            border: 5px solid ",";\n          }\n        "],["\n          &:checked {\n            border: 5px solid ",";\n          }\n        "])),Y):t(Tn||(Tn=s(["\n          &:checked {\n            border: 5px solid ",";\n          }\n        "],["\n          &:checked {\n            border: 5px solid ",";\n          }\n        "])),J)})),re=o.input(Vn||(Vn=s(["\n  appearance: none;\n  width: 1.5rem;\n  height: 1.5rem;\n  border: 1.5px solid gainsboro;\n  border-radius: 100%;\n  margin: 0;\n  ","\n  &:checked {\n    /* border-color: transparent; */\n    background-size: 100% 100%;\n    background-position: 50%;\n    background-repeat: no-repeat;\n    ","\n  }\n"],["\n  appearance: none;\n  width: 1.5rem;\n  height: 1.5rem;\n  border: 1.5px solid gainsboro;\n  border-radius: 100%;\n  margin: 0;\n  ","\n  &:checked {\n    /* border-color: transparent; */\n    background-size: 100% 100%;\n    background-position: 50%;\n    background-repeat: no-repeat;\n    ","\n  }\n"])),ee,ee),oe=o.label(In||(In=s(["\n  display: flex;\n  align-items: center;\n  user-select: none;\n"],["\n  display: flex;\n  align-items: center;\n  user-select: none;\n"]))),te=o.p(Xn||(Xn=s(["\n  margin: 0;\n  margin-left: 0.25rem;\n"],["\n  margin: 0;\n  margin-left: 0.25rem;\n"]))),ie=function(r){var o=d(r,[]);return n(ae,c({},o,{children:e(ce,c({className:"ToggleSwitchBox",onClick:o.onClick},{children:[n(de,{className:o.state?"swichOn":"switchOff"}),n(se,{onClick:o.onClick,className:o.state?"buttonOn":"buttonOff"})]}))}))},le=t(Wn||(Wn=s(["\n  ","\n"],["\n  ","\n"])),(function(n){return n.disabled?t(Zn||(Zn=s(["\n          .ToggleSwitchBox {\n            background-color: ",";\n          }\n          .swichOn {\n            background-color: ",";\n          }\n        "],["\n          .ToggleSwitchBox {\n            background-color: ",";\n          }\n          .swichOn {\n            background-color: ",";\n          }\n        "])),G,Y):t(Rn||(Rn=s(["\n          .ToggleSwitchBox {\n            background-color: ",";\n          }\n          .swichOn {\n            background-color: ",";\n          }\n        "],["\n          .ToggleSwitchBox {\n            background-color: ",";\n          }\n          .swichOn {\n            background-color: ",";\n          }\n        "])),J,J)})),ae=o.div(Yn||(Yn=s(["\n  ","\n  .buttonOn {\n    transform: translateX(55px);\n    transition: 1s;\n  }\n\n  .buttonOff {\n    transition: 1s;\n  }\n\n  .swichOn {\n    transform: translateX(100px);\n    transition: 1.1s;\n    position: relative;\n    z-index: 2;\n  }\n\n  .switchOff {\n    transform: translateX(-100px);\n    transition: 2.3s;\n    position: relative;\n    z-index: 2;\n    background-color: ",";\n  }\n"],["\n  ","\n  .buttonOn {\n    transform: translateX(55px);\n    transition: 1s;\n  }\n\n  .buttonOff {\n    transition: 1s;\n  }\n\n  .swichOn {\n    transform: translateX(100px);\n    transition: 1.1s;\n    position: relative;\n    z-index: 2;\n  }\n\n  .switchOff {\n    transform: translateX(-100px);\n    transition: 2.3s;\n    position: relative;\n    z-index: 2;\n    background-color: ",";\n  }\n"])),le,J),ce=o.div(Hn||(Hn=s(["\n  width: 100px;\n  height: 40px;\n  border: none;\n  border-radius: 20px;\n  overflow: hidden;\n"],["\n  width: 100px;\n  height: 40px;\n  border: none;\n  border-radius: 20px;\n  overflow: hidden;\n"]))),de=o.div(qn||(qn=s(["\n  height: 100%;\n  width: 100%;\n  z-index: 2;\n  left: -100px;\n"],["\n  height: 100%;\n  width: 100%;\n  z-index: 2;\n  left: -100px;\n"]))),se=o.button(Gn||(Gn=s(["\n  width: 30px;\n  height: 30px;\n  display: block;\n  border: none;\n  border-radius: 15px;\n  position: relative;\n  cursor: pointer;\n  top: -42px;\n  margin: 7px;\n  z-index: 5;\n  background-color: ",";\n"],["\n  width: 30px;\n  height: 30px;\n  display: block;\n  border: none;\n  border-radius: 15px;\n  position: relative;\n  cursor: pointer;\n  top: -42px;\n  margin: 7px;\n  z-index: 5;\n  background-color: ",";\n"])),R);export{Q as Button,_ as Checkbox,tn as CommonButton,cn as CommonInput,pn as Input,Jn as Label,ne as Radiobox,ie as Toggle};
//# sourceMappingURL=index.js.map
