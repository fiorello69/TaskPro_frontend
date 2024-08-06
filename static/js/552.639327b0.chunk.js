"use strict";(self.webpackChunktask_pro_frontend=self.webpackChunktask_pro_frontend||[]).push([[552],{2552:(e,t,o)=>{o.r(t),o.d(t,{default:()=>je});var n=o(3003),i=o(1529);const r=i.Ay.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;

  height: calc(100vh - 60px);

  background-image: url(${e=>e.$bgcUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  padding: 14px 20px 0 20px;

  margin-left: ${e=>e.$isOpen?"225px":"0"};
  opacity: ${e=>e.$isOpen?"0.6":"1"};
  transition: all 250ms linear;

  @media screen and (min-width: 768px) {
    height: calc(100vh - 68px);
    padding: 26px 32px 0 32px;

    margin-left: ${e=>e.$isOpen?"260px":"0"};
  }

  @media screen and (min-width: 1280px) {
    padding: 10px 24px 0 24px;
    margin-left: 260px;
  }
`;var l=o(2972),a=o(4868);const d=i.Ay.button`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;
`,s=i.Ay.span`
  font-family: Poppins;
  color: ${e=>e.theme.themePopup.textMain};
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.28px;
`,c=i.Ay.svg`
  width: 18px;
  height: 18px;
  stroke: ${e=>e.theme.themePopup.icon};
  transition: all 250ms linear;
  fill: transparent;

  ${e=>e.$isOpen&&"transform: rotate(-180deg)"};
`;var p=o(1581),x=o(4934),u=o(5043),h=o(3516);const m=i.Ay.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`,g=i.Ay.h2`
  color: ${e=>e.theme.modal.textMain};
  font-size: 18px;
  font-family: 'Poppins';
  font-weight: 500;
  letter-spacing: -0.36px;
  margin-bottom: 14px;
`,b=i.Ay.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  margin-bottom: 24px;

  &:first-of-type {
    padding-top: 14px;
    padding-bottom: 14px;
    border-top: 1px solid ${e=>e.theme.modal.line};
    border-bottom: 1px solid ${e=>e.theme.modal.line};
  }

  &:last-of-type {
    position: relative;
    margin-bottom: 0;
  }
`,f=i.Ay.h3`
  color: ${e=>e.theme.modal.textMain};
  font-size: 14px;
  font-family: 'Poppins';
  font-weight: 500;
  letter-spacing: -0.28px;
  margin-bottom: 14px;
`,y=i.Ay.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 252px;
  gap: 4px;
`,j=i.Ay.div`
  border-radius: 8px;
  border: none;
  outline: none;
  width: 28px;
  height: 28px;
  background-color: ${e=>e.theme.modal.iconDefault};
  background-position: center;
  background-size: contain;

  cursor: pointer;
  transition: all 250ms linear;

  &.active {
    scale: 1.1;
  }
`,v=i.Ay.div`
  border-radius: 8px;
  width: 28px;
  height: 28px;

  background-image: url(${e=>e.url});
  background-position: center;
  background-size: cover;

  cursor: pointer;
  background-color: ${e=>e.theme.modal.backgroundSecondary};
  transition: all 250ms linear;

  &.active {
    scale: 1.1;
  }
`,k=(0,i.Ay)(h.D0)`
  appearance: none;
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;

  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`,w=i.Ay.p`
  color: ${e=>e.theme.modal.textSecondary};
  font-size: 12px;
  font-family: Poppins;
  letter-spacing: -0.24px;
  text-decoration-line: underline;
  cursor: pointer;

  position: absolute;
  top: 2px;
  right: 0;
`,$=i.Ay.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  gap: 12px;
`,A=i.Ay.label`
  display: flex;
  align-items: center;
  position: relative;
  width: 16px;
  height: 14px;
  border-radius: 14px;

  cursor: pointer;

  &.active {
    border: ${e=>"without"===e.value&&"2px solid rgb(128, 128, 128)"};
    border: ${e=>"low"===e.value&&"2px solid rgba(143, 161, 208, 1)"};
    border: ${e=>"medium"===e.value&&"2px solid rgba(224, 156, 181, 1)"};
    border: ${e=>"high"===e.value&&"2px solid rgba(190, 219, 176, 1)"};
  }
`,C=i.Ay.div`
  width: 14px;
  height: 14px;
  border-radius: 14px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: ${e=>"without"===e.value&&"rgb(128, 128, 128)"};
  background-color: ${e=>"low"===e.value&&"rgba(143, 161, 208, 1)"};
  background-color: ${e=>"medium"===e.value&&"rgba(224, 156, 181, 1)"};
  background-color: ${e=>"high"===e.value&&"rgba(190, 219, 176, 1)"};

  transition: all 250ms linear;

  &.active {
    width: 6px;
    height: 6px;
  }
`,N=i.Ay.p`
  display: block;
  width: 100%;
  color: ${e=>e.theme.modal.textSecondary};
  font-size: 12px;
  font-family: Poppins;
  letter-spacing: -0.24px;

  &.active {
    color: ${e=>e.theme.modal.textMain};
  }

  cursor: pointer;
`,E=i.Ay.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,P=(0,i.Ay)(h.lV)`
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
`;var z=o(8813),S=o(1138),L=o(7956),I=o(8686),_=o(579);const B=["without","low","medium","high"],M=()=>{const e=(0,n.wA)(),t=(0,n.d4)(I.kk),[o,i]=(0,u.useState)(""),[r,l]=(0,u.useState)(""),a={bg:o,label:r},d=e=>{i(e)};return(0,_.jsxs)(m,{children:[(0,_.jsx)(g,{children:"Filters"}),(0,_.jsx)(h.l1,{initialValues:a,children:(0,_.jsxs)(P,{children:[(0,_.jsxs)(b,{children:[(0,_.jsx)(f,{children:"Backgraunds "}),(0,_.jsx)(y,{children:z.map(((n,i)=>(0,_.jsxs)("div",{children:[(0,_.jsx)(j,{onClick:()=>d(n.url),onMouseDown:()=>(o=>{const n={backgroundURL:o};e((0,L.q6)({dashboardId:t._id,updatedData:n}))})(n.url),className:o===n.url?"active":"",children:""!==n.url&&(0,_.jsx)(v,{url:n.url,onClick:()=>d(n.url),className:o===n.url?"active":""})}),(0,_.jsx)(k,{type:"radio",value:n.url,name:"bg"})]},i)))})]}),(0,_.jsxs)(b,{children:[(0,_.jsx)(f,{children:"Label color"}),(0,_.jsx)(w,{onClick:()=>e((0,S.X)("show all")),children:"Show all"}),(0,_.jsx)($,{children:B.map(((t,o)=>(0,_.jsxs)(E,{onClick:()=>{(e=>{l(e)})(t),e((0,S.X)(t))},children:[(0,_.jsxs)(A,{value:t,className:r===t?"active":"",children:[(0,_.jsx)(C,{value:t,className:r===t?"active":""}),(0,_.jsx)(k,{type:"radio",value:t,name:"label"})]}),(0,_.jsx)(N,{className:r===t?"active":"",children:"without"===t?`${t[0].toUpperCase()+t.slice(1)} priority`:t[0].toUpperCase()+t.slice(1)})]},o)))})]})]})})]})},D=()=>{const[e,t]=(0,u.useState)(!1),o=()=>t(!1);return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)(d,{onClick:()=>t(!0),children:[(0,_.jsx)(c,{children:(0,_.jsx)("use",{href:p.A+"#icon-filter"})}),(0,_.jsx)(s,{children:"Filters"})]}),(0,_.jsx)(x.A,{name:"Filters",open:e,closeModal:o,children:(0,_.jsx)(M,{closeModal:o})})]})},O=i.Ay.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 10px;
`,R=i.Ay.h2`
  color: ${e=>e.theme.header.userName};
  font-size: 20px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  letter-spacing: -0.36px;
`,F=e=>{let{children:t}=e;return(0,_.jsxs)(O,{children:[(0,_.jsx)(R,{children:t}),(0,_.jsx)(D,{})]})},G=i.Ay.div`
  display: flex;

  overflow-x: auto;
  width: 100%;
  height: 90%;
  margin-bottom: 8px;

  user-select: none;

  @media screen and (min-width: 768px) {
    overflow-x: ${e=>e.$length<2?"hidden":"scroll"};
  }

  @media screen and (min-width: 1280px) {
    overflow-x: ${e=>e.$length<3?"hidden":"scroll"};
  }
`;var T=o(3703),U=o(184),q=o(7950);const H=i.Ay.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`,X=i.Ay.div`
  &.modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
    background: ${e=>e.theme.modal.backgroundMain};
    color: #ffff;
    border: 1px solid ${e=>e.theme.modal.border};
    border-radius: 8px;
    padding: 24px;
    width: 335px;

    @media screen and (min-width: 768px) {
      width: 350px;
    }
    &.modalAddColumn {
      height: 221px;
    }

    &.modalAddCard {
      height: 522px;
    }
  }
`,V=i.Ay.button`
  position: absolute;
  top: 14px;
  right: 14px;
  stroke: ${e=>e.theme.modal.iconClose};
  background: none;
  border: none;
  font-size: 24px;
  color: ${e=>e.theme.modal.iconClose};
  width: 18px;
  height: 18px;
  cursor: pointer;
  transition: all 250ms linear;

  &:hover {
    opacity: 0.8;
    scale: 1.2;
  }
`,Y=i.Ay.p`
  font-family: 'Poppins';
  font-size: 18px;
  font-weight: 500;
  line-height: 27px;
  letter-spacing: -0.36px;
  text-align: left;
  margin-bottom: 10px;
  color: ${e=>e.theme.modal.textMain};
`,J=i.Ay.input`
  width: 100%;
  height: 49px;
  padding: 14px 18px;

  font-size: 14px;
  font-family: 'Poppins';
  letter-spacing: -0.28px;

  background-color: ${e=>e.theme.modal.backgroundMain};
  border: 1px solid ${e=>e.theme.modal.buttonBackground};
  box-shadow: 0px 4px 16px rgba(22, 22, 22, 0.08);
  outline: none;
  border-radius: 8px;

  color: ${e=>e.theme.modal.textMain};
  transition: all 250ms ease;
  opacity: 0.4;

  &::placeholder {
    color: ${e=>e.theme.modal.textMain};
    font-size: 14px;
    font-family: 'Poppins';
    letter-spacing: -0.28px;
  }

  &:focus {
    opacity: 1;
  }
`,Z=i.Ay.textarea`
  resize: none;
  width: 100%;
  height: 154px;
  padding: 14px 18px;

  font-size: 14px;
  font-family: 'Poppins';
  letter-spacing: -0.28px;

  margin-top: 14px;
  box-shadow: 0px 4px 16px rgba(22, 22, 22, 0.08);

  background-color: ${e=>e.theme.modal.backgroundMain};
  border: 1px solid ${e=>e.theme.modal.buttonBackground};
  box-shadow: 0px 4px 16px rgba(22, 22, 22, 0.08);
  outline: none;
  border-radius: 8px;

  color: ${e=>e.theme.modal.textMain};
  transition: all 250ms ease;
  opacity: 0.4;

  &::placeholder {
    color: ${e=>e.theme.modal.textMain};
    font-size: 14px;
    font-family: 'Poppins';
    letter-spacing: -0.28px;
  }

  &:focus {
    opacity: 1;
  }
`,K=i.Ay.div`
  margin-top: 12px;
  font-size: 12px;
  //   color: #ffffff80;
  color: ${e=>e.theme.modal.buttonBackground};
  width: 127px;
  label {
    display: block;
  }

  input {
    width: 100%;
    margin-top: 5px;
    background-color: transparent;
    border: none;
    border-radius: 4px;
    color: #bedbb0;
  }
`,Q=i.Ay.div`
  margin-top: 24px;
  font-size: 12px;
  label {
    display: block;
  }
  div {
    display: flex;
    gap: 8px;
    margin-top: 5px;
  }
`,W=i.Ay.label`
  color: ${e=>e.theme.modal.textSecondary};
  font-size: 12px;
  font-family: 'Poppins';
  font-weight: 400;
  letter-spacing: -0.24px;
`,ee=i.Ay.span`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  cursor: pointer;
  &.blue {
    background-color: #8fa1d0;
  }
  &.pink {
    background-color: #e09cb5;
  }
  &.green {
    background-color: #bedbb0;
  }
  &.black {
    background-color: rgb(102, 98, 98);
  }
  &.selected {
    border: 3px solid darkgray;
    scale: 1.2;
  }
`,te=i.Ay.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${e=>e.$margintop||"40px"};
  padding: 14px;
  width: 100%;
  height: 49px;
  border: none;
  background: ${e=>e.theme.modal.buttonBackground};
  border-radius: 10px;

  font-family: 'Poppins';
  font-size: 14px;
  font-family: Poppins;
  font-weight: 500;
  letter-spacing: -0.28px;
  color: ${e=>e.theme.modal.buttonText};

  transition: all 150ms linear;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`,oe=i.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;

  width: 28px;
  height: 28px;
  background-color: ${e=>e.theme.modal.plusBackground};
  margin-right: 8px;
  padding: 7px;
`,ne=i.Ay.svg`
  width: 14px;
  height: 14px;
  stroke: ${e=>e.theme.modal.plusColor};
`,ie=e=>{let{dashboardId:t,onClose:o}=e;const[i,r]=(0,u.useState)(""),l=(0,n.wA)();(0,n.d4)(I.Gs);(0,u.useEffect)((()=>{const e=e=>{"Escape"===e.key&&o()},t=e=>{e.target.classList.contains("modals-overlay")&&o()};return document.addEventListener("keydown",e),document.addEventListener("click",t),()=>{document.removeEventListener("keydown",e),document.removeEventListener("click",t)}}),[o]);return q.createPortal((0,_.jsx)(H,{children:(0,_.jsxs)(X,{className:"modal modalAddColumn",children:[(0,_.jsx)(V,{className:"modal-close-btn",onClick:o,children:"\xd7"}),(0,_.jsx)(Y,{children:"Add column"}),(0,_.jsx)(J,{type:"text",placeholder:"Title",value:i,onChange:e=>r(e.target.value)}),(0,_.jsxs)(te,{type:"button",onClick:()=>{l((0,L.cq)({dashboardId:t,title:i})),o()},children:[(0,_.jsx)(oe,{children:(0,_.jsx)(ne,{children:(0,_.jsx)("use",{href:p.A+"#icon-plus"})})}),"Add"]})]})}),document.getElementById("modal-root-addColumn"))},re=e=>{let{title:t,columnId:o,onClose:i}=e;const[r,l]=(0,u.useState)(t),a=(0,n.wA)();(0,u.useEffect)((()=>{const e=e=>{"Escape"===e.key&&i()},t=e=>{e.target.classList.contains("modals-overlay")&&i()};return document.addEventListener("keydown",e),document.addEventListener("click",t),()=>{document.removeEventListener("keydown",e),document.removeEventListener("click",t)}}),[i]);return q.createPortal((0,_.jsx)(H,{children:(0,_.jsxs)(X,{className:"modal modalEditColumn",children:[(0,_.jsx)(V,{className:"modal-close-btn",onClick:i,children:"\xd7"}),(0,_.jsx)(Y,{children:"Edit column"}),(0,_.jsx)(J,{type:"text",placeholder:"Title",value:r,onChange:e=>l(e.target.value)}),(0,_.jsxs)(te,{type:"button",onClick:()=>{a((0,L.ZD)({columnId:o,title:r})),i()},children:[(0,_.jsx)(oe,{children:(0,_.jsx)(ne,{children:(0,_.jsx)("use",{href:p.A+"#icon-plus"})})}),"Edit"]})]})}),document.getElementById("modal-root-addColumn"))},le=e=>{let{columnId:t,onClose:o}=e;const[i,r]=(0,u.useState)(""),[l,a]=(0,u.useState)(""),[d,s]=(0,u.useState)(""),[c,x]=(0,u.useState)((new Date).toISOString().substr(0,10)),h=(0,n.wA)();(0,u.useEffect)((()=>{const e=e=>{"Escape"===e.key&&o()},t=e=>{e.target.classList.contains("modals-overlay")&&o()};return document.addEventListener("keydown",e),document.addEventListener("click",t),()=>{document.removeEventListener("keydown",e),document.removeEventListener("click",t)}}),[o]);return q.createPortal((0,_.jsx)(H,{children:(0,_.jsxs)(X,{className:"modal modalAddCard",children:[(0,_.jsx)(V,{className:"modal-close-btn",onClick:o,children:"\xd7"}),(0,_.jsx)(Y,{children:"Add card"}),(0,_.jsx)(J,{type:"text",placeholder:"Title",value:i,onChange:e=>r(e.target.value)}),(0,_.jsx)(Z,{placeholder:"Description",value:l,onChange:e=>a(e.target.value)}),(0,_.jsxs)(Q,{children:[(0,_.jsx)(W,{children:"Label color"}),(0,_.jsxs)("div",{className:"colors",children:[(0,_.jsx)(ee,{className:"color blue "+("blue"===d?"selected":""),onClick:()=>s("blue")}),(0,_.jsx)(ee,{className:"color pink "+("pink"===d?"selected":""),onClick:()=>s("pink")}),(0,_.jsx)(ee,{className:"color green "+("green"===d?"selected":""),onClick:()=>s("green")}),(0,_.jsx)(ee,{className:"color black "+("black"===d?"selected":""),onClick:()=>s("black")})]})]}),(0,_.jsxs)(K,{children:[(0,_.jsx)(W,{children:"Deadline"}),(0,_.jsx)("input",{type:"date",value:c,onChange:e=>x(e.target.value)})]}),(0,_.jsxs)(te,{type:"button",onClick:()=>{let e;switch(d){case"blue":e="high";break;case"pink":e="medium";break;case"green":e="low";break;default:e="without"}h((0,L.gm)({columnId:t,title:i,description:l,priority:e,deadline:new Date(c)})),o()},children:[(0,_.jsx)(oe,{children:(0,_.jsx)(ne,{children:(0,_.jsx)("use",{href:p.A+"#icon-plus"})})}),"Add"]})]})}),document.getElementById("modal-root-addCard"))},ae=e=>{let{card:t,onClose:o}=e;const i=(0,n.wA)(),[r,l]=(0,u.useState)(t.title),[a,d]=(0,u.useState)(t.description),[s,c]=(0,u.useState)((()=>{switch(t.priority){case"high":return"blue";case"medium":return"pink";case"low":return"green";default:return"black"}})),[x,h]=(0,u.useState)(t.deadline.substr(0,10));(0,u.useEffect)((()=>{const e=e=>{"Escape"===e.key&&o()},t=e=>{e.target.classList.contains("modals-overlay")&&o()};return document.addEventListener("keydown",e),document.addEventListener("click",t),()=>{document.removeEventListener("keydown",e),document.removeEventListener("click",t)}}),[o]);return q.createPortal((0,_.jsx)(H,{children:(0,_.jsxs)(X,{className:"modal modalEditCard",children:[(0,_.jsx)(V,{className:"modal-close-btn",onClick:o,children:"\xd7"}),(0,_.jsx)(Y,{children:"Edit card"}),(0,_.jsx)(J,{type:"text",placeholder:"Title",value:r,onChange:e=>l(e.target.value)}),(0,_.jsx)(Z,{placeholder:"Description",value:a,onChange:e=>d(e.target.value)}),(0,_.jsxs)(Q,{children:[(0,_.jsx)(W,{children:"Label color"}),(0,_.jsxs)("div",{className:"colors",children:[(0,_.jsx)(ee,{className:"color blue "+("blue"===s?"selected":""),onClick:()=>c("blue")}),(0,_.jsx)(ee,{className:"color pink "+("pink"===s?"selected":""),onClick:()=>c("pink")}),(0,_.jsx)(ee,{className:"color green "+("green"===s?"selected":""),onClick:()=>c("green")}),(0,_.jsx)(ee,{className:"color black "+("black"===s?"selected":""),onClick:()=>c("black")})]})]}),(0,_.jsxs)(K,{children:[(0,_.jsx)(W,{children:"Deadline"}),(0,_.jsx)("input",{type:"date",value:x,onChange:e=>h(e.target.value)})]}),(0,_.jsxs)(te,{type:"button",onClick:()=>{let e;switch(s){case"blue":e="high";break;case"pink":e="medium";break;case"green":e="low";break;default:e="without"}i((0,L.Lo)({cardId:t._id,title:r,description:a,priority:e,deadline:new Date(x),owner:t.owner})),o()},children:[(0,_.jsx)(oe,{children:(0,_.jsx)(ne,{children:(0,_.jsx)("use",{href:p.A+"#icon-plus"})})}),"Edit"]})]})}),document.getElementById("modal-root-addCard"))},de=i.Ay.div`
  display: flex;
  background: ${e=>e.theme.column.backgroundMain};
  color: ${e=>e.theme.column.textMain};

  border-radius: 4px;

  overflow: hidden;
  position: relative;
  min-height: 154px;
  height: 154px;

  .card-priority-bar {
    width: 7px;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
`,se=i.Ay.div`
  flex-grow: 1;
  padding: 14px 24px;
  h4 {
    font-family: 'Poppins';
    font-size: 14px;
    line-height: 21px;
    margin: 0;
    margin-bottom: 4px;
    color: ${e=>e.theme.column.textMain};
  }

  .card-description {
    font-family: 'Poppins';
    font-size: 12px;
    line-height: 16px;
    margin: 0;
    padding-bottom: 14px;
    color: ${e=>e.theme.column.textSecondary};
    max-height: 40px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`,ce=i.Ay.div`
  position: absolute;
  top: 95px;
  width: 280px;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${e=>e.theme.column.borderColor};
  padding-top: 14px;

  .card-info {
    display: flex;
    gap: 14px;
    width: 123px;
  }
  .card-priority,
  .card-deadline {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .card-footer-text {
    font-size: 8px;
    line-height: 12px;
    color: ${e=>e.theme.column.textSecondary};
  }
  .card-priority-div {
    display: flex;
    gap: 2px;
  }
  .card-priority-bullet {
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }
  .card-footer-data {
    font-size: 10px;
    line-height: 15px;
    color: ${e=>e.theme.column.textMain};
  }
  .card-actions {
    display: flex;
    align-items: last baseline;
    gap: 8px;
  }

  .card-button {
    background: none;
    border: none;
    color: ${e=>e.theme.column.icon};
    cursor: pointer;
    height: 16px;
  }

  .card-button:hover {
    scale: 1.2;
  }
`,pe=e=>{let{card:t,index:o}=e;const[i,r]=(0,u.useState)(!1),l=(0,n.d4)(I.Gs),a=(0,n.wA)(),d=e=>{switch(e){case"high":return"#8FA1D0";case"medium":return"#E09CB5";case"low":return"#BEDBB0";default:return"rgb(102, 98, 98)"}},s=()=>{const e=(l.findIndex((e=>e._id===t.owner))+1)%l.length,o=l[e]._id;a((0,L.GO)(t._id)),a((0,L.gm)({columnId:o,title:t.title,description:t.description,priority:t.priority,deadline:t.deadline}))},c=()=>{a((0,L.GO)(t._id))};return(0,_.jsx)(T.sx,{draggableId:t._id,index:o,children:e=>(0,_.jsxs)(de,{ref:e.innerRef,...e.draggableProps,...e.dragHandleProps,style:{...e.draggableProps.style,marginRight:"8px"},children:[(0,_.jsx)("div",{className:"card-priority-bar",style:{backgroundColor:d(t.priority)}}),(0,_.jsxs)(se,{children:[(0,_.jsx)("h4",{className:"card-title",children:t.title}),(0,_.jsx)("p",{className:"card-description",children:t.description}),(0,_.jsxs)(ce,{children:[(0,_.jsxs)("div",{className:"card-info",children:[(0,_.jsxs)("div",{className:"card-priority",children:[(0,_.jsx)("span",{className:"card-footer-text",children:"Priority"}),(0,_.jsxs)("div",{className:"card-priority-div",children:[(0,_.jsx)("div",{className:"card-priority-bullet",style:{backgroundColor:d(t.priority)}}),(0,_.jsx)("span",{className:"card-footer-data",children:t.priority})]})]}),(0,_.jsxs)("div",{className:"card-deadline",children:[(0,_.jsx)("span",{className:"card-footer-text",children:"Deadline"}),(0,_.jsx)("span",{className:"card-footer-data",children:t.deadline.substr(0,10)})]})]}),(0,_.jsxs)("div",{className:"card-actions",children:[(0,_.jsx)("button",{className:"card-button",onClick:s,children:(0,_.jsx)(U.BEG,{})}),(0,_.jsx)("button",{className:"card-button",onClick:()=>r(!0),children:(0,_.jsx)(U.F7,{})}),i&&(0,_.jsx)(ae,{columnId:t.owner,card:t,onClose:()=>r(!1)}),(0,_.jsx)("button",{className:"card-button",onClick:c,children:(0,_.jsx)(U.qbC,{})})]})]})]})]})})},xe=i.Ay.div`
  width: 334px;
  display: flex;
  flex-direction: column;
  background-color: transparent;

  .column-title {
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    margin-bottom: 14px;
    align-items: center;
    max-width: 400px;
    height: 56px;
    border-radius: 8px;
    font-family: 'Poppins';
    font-size: 14px;
    line-height: 21px;
    background: ${e=>e.theme.column.backgroundMain};
    color: ${e=>e.theme.column.textMain};
  }
  .title-icons {
    display: flex;
    gap: 8px;
  }
  .title-icons > button {
    cursor: pointer;
    border: none;
    color: ${e=>e.theme.column.icon};
    background-color: transparent;
  }
  .title-icons > button:hover {
    scale: 1.2;
  }
`,ue=e=>{let{column:t,index:o}=e;const[i,r]=(0,u.useState)(!1),[l,a]=(0,u.useState)(!1),d=(0,n.wA)(),s=()=>{d((0,L.gR)(t._id))};return(0,_.jsx)(T.sx,{draggableId:t._id,index:o,children:e=>(0,_.jsxs)(xe,{ref:e.innerRef,...e.draggableProps,style:{...e.draggableProps.style,height:"99%"},children:[(0,_.jsxs)("div",{className:"column-title",...e.dragHandleProps,children:[t.title,(0,_.jsxs)("div",{className:"title-icons",id:t.title,children:[(0,_.jsx)("button",{type:"button",onClick:()=>a(!0),children:(0,_.jsx)(U.F7,{})}),l&&(0,_.jsx)(re,{title:t.title,columnId:t._id,onClose:()=>a(!1)}),(0,_.jsx)("button",{type:"button",onClick:s,children:(0,_.jsx)(U.qbC,{})})]})]}),(0,_.jsx)(T.gL,{droppableId:t._id,type:"card",children:e=>(0,_.jsxs)("div",{ref:e.innerRef,...e.droppableProps,style:{overflowY:"auto",overflowX:"hidden",display:"flex",flexDirection:"column",gap:"8px",...Array.isArray(t.cards)&&t.cards.$length>2&&{maxHeight:"456px"}},children:[Array.isArray(t.cards)&&t.cards.map(((e,t)=>(0,_.jsx)(pe,{card:e,index:t},e._id))),e.placeholder]})}),(0,_.jsxs)(te,{$margintop:"14px",onClick:()=>r(!0),children:[(0,_.jsx)(oe,{children:(0,_.jsx)(ne,{children:(0,_.jsx)("use",{href:p.A+"#icon-plus"})})}),"Add another card"]}),i&&(0,_.jsx)(le,{columnId:t._id,onClose:()=>r(!1)})]})})},he=i.Ay.div`
  display: flex;
  gap: 18px;
  // overflow-x: auto;
`,me=i.Ay.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px;
  width: 334px;
  height: 56px;
  border: none;
  background: ${e=>e.theme.addColumnButton.background};
  border-radius: 10px;

  font-family: 'Poppins';
  font-size: 14px;
  font-family: Poppins;
  font-weight: 500;
  letter-spacing: -0.28px;
  color: ${e=>e.theme.addColumnButton.color};

  transition: all 150ms linear;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`,ge=i.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;

  width: 28px;
  height: 28px;
  background-color: ${e=>e.theme.addColumnButton.plusBackground};
  margin-right: 8px;
  padding: 7px;
`,be=i.Ay.svg`
  width: 14px;
  height: 14px;
  stroke: ${e=>e.theme.addColumnButton.plusColor};
`,fe=()=>{const[e,t]=(0,u.useState)(!1),o=(0,n.d4)(I.kk),i=(0,n.d4)(I.Gs),[r,l]=(0,u.useState)([]),a=(0,n.wA)();(0,u.useEffect)((()=>{i&&i.length>0&&l(i)}),[i]);return(0,_.jsxs)(he,{children:[(0,_.jsx)(T.JY,{onDragEnd:e=>{const{destination:t,source:o,type:n}=e;if(!t)return;const i=o.index,d=t.index,s=o.droppableId,c=t.droppableId;if(i!==d||s!==c){if("column"===n){const e=r[i];let t=[...r];return t.splice(i,1),t.splice(d,0,e),void l(t)}if("card"===n){const e=r.find((e=>e._id===s)),t=r.find((e=>e._id===c)),o=e.cards[i];return a((0,L.GO)(o._id)),void a((0,L.gm)({columnId:t._id,title:o.title,description:o.description,priority:o.priority,deadline:o.deadline}))}}},children:(0,_.jsx)(T.gL,{droppableId:"all-columns",id:"all-columns",direction:"horizontal",type:"column",children:e=>(0,_.jsxs)("div",{ref:e.innerRef,...e.droppableProps,style:{display:"flex",gap:"18px"},children:[Array.isArray(r)&&r.length>0&&r.map(((e,t)=>(0,_.jsx)(ue,{column:e,index:t},e._id))),e.placeholder]})})}),(0,_.jsxs)(me,{onClick:()=>t(!0),children:[(0,_.jsx)(ge,{children:(0,_.jsx)(be,{children:(0,_.jsx)("use",{href:p.A+"#icon-plus"})})}),"Add another column"]}),e&&(0,_.jsx)(ie,{dashboardId:null===o||void 0===o?void 0:o._id,onClose:()=>t(!1)})]})},ye=()=>{const e=(0,n.d4)(I.Ss),t=(0,u.useRef)(null);return(0,_.jsx)(G,{$length:e,ref:t,children:(0,_.jsx)(fe,{})})},je=()=>{const e=(0,n.wA)(),t=(0,n.d4)(l._),o=(0,n.d4)((e=>{var t;return null===e||void 0===e||null===(t=e.dashboards)||void 0===t?void 0:t.currentBg})),i=(0,n.d4)((e=>{var t;return null===e||void 0===e||null===(t=e.dashboards)||void 0===t?void 0:t.currentName}));return(0,_.jsxs)(r,{onClick:()=>{t&&e((0,a.$i)())},$bgcUrl:o,$isOpen:t,children:[(0,_.jsx)(F,{children:i}),(0,_.jsx)(ye,{})]})}}}]);
//# sourceMappingURL=552.639327b0.chunk.js.map