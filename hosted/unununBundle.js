(()=>{var e={603:e=>{const t=e=>{document.getElementById("errorMessage").textContent=e,document.getElementById("domoMessage").classList.remove("hidden")};e.exports={handleError:t,sendPost:async(e,n,o)=>{const r=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}),s=await r.json();document.getElementById("domoMessage").classList.add("hidden"),s.error&&t(s.error),s.redirect&&(window.location=s.redirect),o&&o(s)},hideError:()=>{document.getElementById("domoMessage").classList.add("hidden")}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var s=t[o]={exports:{}};return e[o](s,s.exports,n),s.exports}(()=>{n(603);const e=e=>React.createElement("img",{src:"/assets/img/ununun.png",alt:"ununun"});window.onload=async()=>{const t=await fetch("/getToken"),n=await t.json();ReactDOM.render(React.createElement(e,{csrf:n.csrfToken}),document.getElementById("content"))}})()})();