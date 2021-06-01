(this["webpackJsonpmy-time-tracking"]=this["webpackJsonpmy-time-tracking"]||[]).push([[0],{109:function(t,e,n){"use strict";n.r(e);var r=n(0),i=n.n(r),a=n(10),c=n.n(a),o=(n(79),n(12)),s=n(13),u=n(9),l=n(17),p=n(16),m=(n(55),n(3)),d=function(t){Object(l.a)(n,t);var e=Object(p.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(m.jsx)("div",{className:"NavMain",children:Object(m.jsx)("h1",{className:"NavMain__header",children:"Timers"})})}}]),n}(r.Component),j=n(22),h=n(65),b=n.n(h).a.create({baseURL:"https://my-json-server.typicode.com/yuuumiao/time-tracking-json-server",withCredentials:!0});function O(t){if(t.response)throw console.log(t.response.data.message),t.response.data;throw t}var f={service:b,getAllTimers:function(){return b.get("/timers").then((function(t){return t.data})).catch(O)},createOneTimer:function(t){return b.post("/timers",t).then((function(t){return t.data})).catch(O)},updateOneTimer:function(t,e){return b.patch("/timers/".concat(t),e).then((function(t){return t.data})).catch(O)},deleteOneTimer:function(t){return b.delete("/timers/".concat(t)).then((function(t){return t.data})).catch(O)}},v=i.a.createContext(),g=function(t){Object(l.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(s.a)(this,n);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return(t=e.call.apply(e,[this].concat(i))).state={timers:[],isLoading:!1},t.createTimer=function(e){f.createOneTimer(e).then((function(e){return t.setState({timers:[].concat(Object(j.a)(t.state.timers),[e])})})).catch((function(e){return t.setState({isLoading:!1})}))},t.updateTimer=function(e){f.updateOneTimer(e.id,e).then((function(n){return t.setState({timers:t.state.timers.map((function(t){return t.id===e.id?Object.assign({},t,{title:e.title,project:e.project}):t}))})})).catch((function(e){return t.setState({isLoading:!1})}))},t.removeTimer=function(e){f.deleteOneTimer(e).then((function(){return t.setState({timers:t.state.timers.filter((function(t){return t.id!==e}))})})).catch((function(e){return t.setState({isLoading:!1})}))},t.startTimer=function(e){var n=Date.now();t.setState({timers:t.state.timers.map((function(t){return t.id===e?Object.assign({},t,{runningSince:n}):t}))});var r=Object(j.a)(t.state.timers).filter((function(t){return t.id===e}))[0];f.updateOneTimer(e,{runningSince:r.runningSince,elapsed:r.elapsed})},t.stopTimer=function(e){var n=Date.now();t.setState({timers:t.state.timers.map((function(t){if(e===t.id){var r=n-t.runningSince;return Object.assign({},t,{elapsed:r+(t.elapsed||0),runningSince:null})}return t}))});var r=Object(j.a)(t.state.timers).filter((function(t){return t.id===e}))[0];f.updateOneTimer(e,{runningSince:r.runningSince,elapsed:r.elapsed})},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=this;f.getAllTimers().then((function(e){t.setState({timers:e,isLoading:!1})})).catch((function(t){console.log(t)}))}},{key:"render",value:function(){var t={isLoggedIn:this.state.isLoggedIn,isLoading:this.state.isLoading,timers:this.state.timers,createTimer:this.createTimer,updateTimer:this.updateTimer,removeTimer:this.removeTimer,startTimer:this.startTimer,stopTimer:this.stopTimer};return Object(m.jsx)(v.Provider,{value:t,children:this.props.children})}}]),n}(i.a.Component),T=function(t,e){var n=t;return n.length<e&&(n="0".concat(n)),n},x=function(t,e){var n=t;return e&&(n+=Date.now()-e),function(t){var e=Math.floor(t/1e3%60),n=Math.floor(t/1e3/60%60),r=Math.floor(t/1e3/60/60%60);return[T(r.toString(),2),T(n.toString(),2),T(e.toString(),2)].join(":")}(n)},S=(n(64),n(142)),y=n(67),F=n.n(y),C=n(66),k=n.n(C),_=function(t){Object(l.a)(n,t);var e=Object(p.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.forceUpdateInterval=setInterval((function(){return t.forceUpdate()}),500)}},{key:"componentWillUnmount",value:function(){clearInterval(this.forceUpdateInterval)}},{key:"render",value:function(){var t=this,e=x(this.props.elapsed||0,this.props.runningSince||0);return Object(m.jsxs)("div",{className:"Timer",children:[Object(m.jsx)("div",{className:"Timer__title",children:this.props.title}),Object(m.jsx)("div",{className:"Timer__project",children:this.props.project}),Object(m.jsx)("div",{className:"Timer__time",children:e}),Object(m.jsxs)("div",{className:"Timer__icons",children:[Object(m.jsx)(k.a,{className:"Timer__icon",onClick:this.props.openForm}),Object(m.jsx)(F.a,{className:"Timer__icon",onClick:function(){return t.context.removeTimer(t.props.id)}})]}),Object(m.jsx)("div",{className:"Timer__startStop",children:this.props.runningSince?Object(m.jsx)(S.a,{className:"Timer__buttonStop",variant:"outlined",onClick:function(){return t.context.stopTimer(t.props.id)},children:"Stop"}):Object(m.jsx)(S.a,{className:"Timer__buttonStart",variant:"outlined",onClick:function(){return t.context.startTimer(t.props.id)},children:"Start"})})]})}}]),n}(r.Component);_.contextType=v;var N=_,w=n(28),L=n(141),I=function(t){Object(l.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(s.a)(this,n);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return(t=e.call.apply(e,[this].concat(i))).state={title:t.props.title||"",project:t.props.project||""},t.handleChange=function(e){var n=e.target.name;t.setState(Object(w.a)({},n,e.target.value))},t.handleSubmitTimerForm=function(){"Edit"===t.props.submitText?(t.context.updateTimer({id:t.props.id,title:t.state.title,project:t.state.project}),t.props.closeForm()):"Create"===t.props.submitText&&(t.context.createTimer({title:t.state.title,project:t.state.project}),t.props.closeToggleableForm())},t.handleCancelTimerForm=function(){"Edit"===t.props.submitText?t.props.closeForm():t.props.closeToggleableForm()},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"TimerForm",children:[Object(m.jsxs)("div",{className:"TimerForm__inputs",children:[Object(m.jsx)(L.a,{name:"title",id:"title",type:"text",value:this.state.title,onChange:this.handleChange,label:"Title",variant:"outlined"}),Object(m.jsx)(L.a,{name:"project",id:"project",type:"text",value:this.state.project,onChange:this.handleChange,label:"Project",variant:"outlined"})]}),Object(m.jsxs)("div",{className:"TimerForm__buttons",children:[Object(m.jsx)(S.a,{variant:"outlined",color:"primary",className:this.props.submitText,onClick:this.handleSubmitTimerForm,children:this.props.submitText}),Object(m.jsx)(S.a,{variant:"outlined",color:"primary",className:"Cancel",onClick:this.handleCancelTimerForm,children:"Cancel"})]})]})}}]),n}(r.Component);I.contextType=v;var A=I,M=function(t){Object(l.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(s.a)(this,n);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return(t=e.call.apply(e,[this].concat(i))).state={editFormOpen:!1},t.closeForm=function(){t.setState({editFormOpen:!1})},t.openForm=function(){t.setState({editFormOpen:!0})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(m.jsx)("div",{children:this.state.editFormOpen?Object(m.jsx)(A,{id:this.props.id,title:this.props.title,project:this.props.project,closeForm:this.closeForm,submitText:"Edit"}):Object(m.jsx)(N,{id:this.props.id,title:this.props.title,project:this.props.project,runningSince:this.props.runningSince,elapsed:this.props.elapsed,openForm:this.openForm})})}}]),n}(r.Component),D=n(68),E=n.n(D),U=function(t){Object(l.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(s.a)(this,n);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return(t=e.call.apply(e,[this].concat(i))).state={isOpen:!1},t.openToggleableForm=function(){t.setState({isOpen:!0})},t.closeToggleableForm=function(){t.setState({isOpen:!1})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(m.jsx)("div",{children:this.state.isOpen?Object(m.jsx)(A,{submitText:"Create",closeToggleableForm:this.closeToggleableForm}):Object(m.jsx)(E.a,{className:"AddIcon",onClick:this.openToggleableForm})})}}]),n}(r.Component),P=function(t){Object(l.a)(n,t);var e=Object(p.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this;return Object(m.jsxs)("div",{children:[this.context.timers.map((function(e){return Object(m.jsx)(M,{id:e.id,title:e.title,project:e.project,runningSince:e.runningSince,elapsed:e.elapsed,onFormSubmit:t.props.onFormSubmit},e.id)})),Object(m.jsx)(U,{})]})}}]),n}(r.Component);P.contextType=v;var B=P,J=function(t){Object(l.a)(n,t);var e=Object(p.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(m.jsx)("div",{children:Object(m.jsx)(B,{onFormSubmit:this.handleEditFormSubmit})})}}]),n}(r.Component);J.contextType=v;var R=J,W=function(t){Object(l.a)(n,t);var e=Object(p.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(m.jsx)("div",{children:Object(m.jsx)(R,{})})}}]),n}(r.Component);var q=function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(d,{}),Object(m.jsx)(o.c,{children:Object(m.jsx)(o.a,{exact:!0,path:"/",component:W})})]})},z=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,144)).then((function(e){var n=e.getCLS,r=e.getFID,i=e.getFCP,a=e.getLCP,c=e.getTTFB;n(t),r(t),i(t),a(t),c(t)}))},G=n(50);c.a.render(Object(m.jsx)(G.a,{children:Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(g,{children:Object(m.jsx)(q,{})})})}),document.getElementById("root")),z()},55:function(t,e,n){},79:function(t,e,n){}},[[109,1,2]]]);
//# sourceMappingURL=main.81216458.chunk.js.map