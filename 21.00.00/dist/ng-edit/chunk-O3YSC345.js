function a(r){return new Promise((o,n)=>{let e=new FileReader;e.readAsDataURL(r),e.onload=()=>{o(e.result.split(",")[1])},e.onerror=t=>{n(t)}})}function s(r){return new Promise((o,n)=>{let e=new FileReader;e.readAsText(r),e.onload=()=>{o(e.result)},e.onerror=t=>{n(t)}})}export{a,s as b};
//# sourceMappingURL=https://sources.2sxc.org/21.00.00/dist/ng-edit/chunk-O3YSC345.js.map
