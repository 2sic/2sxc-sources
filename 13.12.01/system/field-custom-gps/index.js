(()=>{"use strict";var e={568:(e,t,n)=>{function i(e,...t){}n.d(t,{i:()=>i})},54:(e,t,n)=>{n.d(t,{b:()=>s,o:()=>i});const i={lat:47.17465989999999,lng:9.469142499999975};function s(){let e="https://maps.googleapis.com/maps/api/js?key=";return e&&(e+="AIzaSyDPhn"),e&&(e+="NKpEg8FmY8nooE7Zwnue6SusxEnHE"),e}},241:(e,t,n)=>{n.d(t,{R$:()=>s,eC:()=>i,uT:()=>a,vY:()=>o});const i={mapMarker:'<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" class="svg-inline--fa fa-map-marker-alt fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>'};function s(e,t){return`${e}<style>\n${t}\n</style>`}function a(e){return JSON.parse(e.replace("latitude","lat").replace("longitude","lng"))}function o(e){return JSON.stringify(e).replace("lat","latitude").replace("lng","longitude")}}},t={};function n(i){var s=t[i];if(void 0!==s)return s.exports;var a=t[i]={exports:{}};return e[i](a,a.exports,n),a.exports}n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{class e{constructor(e,t,n,i,s){this.changeEvent=n,this.eavConfig=s,this.fields=[],this.findFields=/\[.*?\]/gi,this.unwrapField=/[\[\]]/gi,this.subscriptions=[],this.mask=e,this.model=t,this.fields=this.fieldList(),i&&(this.preClean=i),t&&n&&this.watchAllFields()}resolve(){let e=this.mask;return null!=this.eavConfig&&null!=e&&(e=e.replace("[App:AppId]",this.eavConfig.appId),e=e.replace("[App:ZoneId]",this.eavConfig.zoneId)),this.fields.forEach(((t,n)=>{const i=this.model.hasOwnProperty(t)&&this.model[t]&&this.model[t].value?this.model[t].value:"",s=this.preClean(t,i);e=e.replace("["+t+"]",s)})),e}fieldList(){const e=[];if(!this.mask)return e;const t=this.mask.match(this.findFields);return t?t.forEach(((t,n)=>{const i=t.replace(this.unwrapField,"");e.push(i)})):e.push(this.mask),e}preClean(e,t){return t}onChange(){const e=this.resolve();this.value!==e&&this.changeEvent(e),this.value=e}watchAllFields(){this.fields.forEach((e=>{if(!this.model[e])return;const t=this.model[e].valueChanges.subscribe((e=>this.onChange()));this.subscriptions.push(t)}))}destroy(){this.subscriptions.forEach((e=>{e.unsubscribe()}))}}var t=n(568),i=n(54),s=n(241);const a="field-custom-gps-dialog";class o extends HTMLElement{constructor(){super(),(0,t.i)(`${a} constructor called`),this.fieldInitialized=!1}connectedCallback(){if(this.fieldInitialized)return;this.fieldInitialized=!0,(0,t.i)(`${a} connectedCallback called`),this.eventListeners=[],this.mapApiUrl=(0,i.b)(),this.innerHTML=(0,s.R$)('<div class="custom-gps-container">\r\n  <div class="map-info">\r\n    <div class="input-component">\r\n      <label for="lat">Lat:</label>\r\n      <input id="lat" type="number" step="0.001" />\r\n    </div>\r\n    &nbsp;\r\n    <div class="input-component">\r\n      <label for="lng">Lng:</label>\r\n      <input id="lng" type="number" step="0.001" />\r\n    </div>\r\n  </div>\r\n\r\n  <div id="address-mask-container" class="map-info address-mask-container hidden">\r\n    <a id="icon-search" class="btn">\r\n      <i class="material-icons-outlined">search</i>\r\n    </a>\r\n    <span id="formatted-address-container"></span>\r\n  </div>\r\n\r\n  <div id="map" class="map-info__map"></div>\r\n</div>\r\n',".custom-gps-container{display:flex;flex-direction:column;height:100%}.map-info{flex:0 0 32px;display:flex;flex-wrap:wrap;align-items:center;padding:4px;padding-left:14px;border-bottom:1px solid #e1e1e1;background:#fff}.map-info label,.map-info #icon-search{margin-right:8px;display:flex;justify-content:center;align-items:center;font-size:12px;text-transform:uppercase;padding:4px}.map-info #icon-search i{font-size:14px;width:14px;height:14px;font-weight:bold}.map-info input{margin-right:8px;padding:4px 16px;border:none;background:transparent;outline:none !important}.address-mask-container{flex-wrap:nowrap}.map-info__map{flex:1 1 auto;width:100%;display:block}.hidden{display:none}.btn{border:1px solid silver;border-radius:4px}.btn:hover{background-color:rgba(69,79,99,.08);cursor:pointer}.input-component{display:flex;background-color:rgba(69,79,99,.08);padding:4px;border-radius:4px 4px 0 0;border-bottom:1px solid silver;margin:8px 0}.input-component:hover{border-bottom:1px solid #002753}"),this.latInput=this.querySelector("#lat"),this.lngInput=this.querySelector("#lng");const n=this.querySelector("#address-mask-container");this.iconSearch=this.querySelector("#icon-search");const o=this.querySelector("#formatted-address-container");this.mapContainer=this.querySelector("#map");const l=this.connector._experimental.allInputTypeNames.map((e=>e.name));l.includes(this.connector.field.settings.LatField)&&(this.latFieldName=this.connector.field.settings.LatField),l.includes(this.connector.field.settings.LongField)&&(this.lngFieldName=this.connector.field.settings.LongField);const r=this.connector.field.settings.AddressMask||this.connector.field.settings["Address Mask"];this.addressMask=new e(r,this.connector._experimental.formGroup.controls,null,null),(0,t.i)(`${a} addressMask:`,r),r&&(n.classList.remove("hidden"),o.innerText=this.addressMask.resolve()),this.connector.loadScript("google",this.mapApiUrl,(()=>{this.mapScriptLoaded()}))}mapScriptLoaded(){(0,t.i)(`${a} mapScriptLoaded called`),this.map=new google.maps.Map(this.mapContainer,{zoom:15,center:i.o,gestureHandling:"greedy",streetViewControlOptions:{position:google.maps.ControlPosition.RIGHT_CENTER},zoomControlOptions:{position:google.maps.ControlPosition.RIGHT_CENTER}}),this.marker=new google.maps.Marker({position:i.o,map:this.map,draggable:!0}),this.geocoder=new google.maps.Geocoder,this.connector.data.value?this.updateHtml((0,s.uT)(this.connector.data.value)):this.updateHtml(i.o);const e=()=>{this.onLatLngInputChange()};this.latInput.addEventListener("change",e),this.lngInput.addEventListener("change",e);const n=()=>{this.autoSelect()};this.iconSearch.addEventListener("click",n),this.eventListeners.push({element:this.latInput,type:"change",listener:e},{element:this.lngInput,type:"change",listener:e},{element:this.iconSearch,type:"click",listener:n}),this.marker.addListener("dragend",(e=>{this.onMarkerDragend(e)}))}updateHtml(e){var t,n,i,s;this.latInput.value=null!==(n=null===(t=e.lat)||void 0===t?void 0:t.toString())&&void 0!==n?n:"",this.lngInput.value=null!==(s=null===(i=e.lng)||void 0===i?void 0:i.toString())&&void 0!==s?s:"",this.map.setCenter(e),this.marker.setPosition(e)}updateForm(e){this.connector.data.update((0,s.vY)(e)),this.latFieldName&&this.connector._experimental.updateField(this.latFieldName,e.lat),this.lngFieldName&&this.connector._experimental.updateField(this.lngFieldName,e.lng)}onLatLngInputChange(){(0,t.i)(`${a} input changed`);const e={lat:this.latInput.value.length>0?parseFloat(this.latInput.value):null,lng:this.lngInput.value.length>0?parseFloat(this.lngInput.value):null};this.updateHtml(e),this.updateForm(e)}autoSelect(){(0,t.i)(`${a} geocoder called`);const e=this.addressMask.resolve();this.geocoder.geocode({address:e},((t,n)=>{if(n===google.maps.GeocoderStatus.OK){const e=t[0].geometry.location,n={lat:e.lat(),lng:e.lng()};this.updateHtml(n),this.updateForm(n)}else alert(`Could not locate address: ${e}`)}))}onMarkerDragend(e){(0,t.i)(`${a} marker changed`);const n={lat:e.latLng.lat(),lng:e.latLng.lng()};this.updateHtml(n),this.updateForm(n)}disconnectedCallback(){(0,t.i)(`${a} disconnectedCallback called`),null===google||void 0===google||google.maps.event.clearInstanceListeners(this.marker),null===google||void 0===google||google.maps.event.clearInstanceListeners(this.map),this.eventListeners.forEach((({element:e,type:t,listener:n})=>{e.removeEventListener(t,n)})),this.addressMask.destroy()}}customElements.get(a)||customElements.define(a,o)})(),(()=>{var e=n(568),t=n(54),i=n(241);const s="field-custom-gps";class a extends HTMLElement{constructor(){super(),(0,e.i)(`${s} constructor called`),this.fieldInitialized=!1}connectedCallback(){if(this.fieldInitialized)return;this.fieldInitialized=!0,(0,e.i)(`${s} connectedCallback called`),this.innerHTML=(0,i.R$)('<div class="custom-gps-preview">\r\n  <div class="custom-gps-preview__text">\r\n    Lat: <span id="lat-container"></span>, Lng: <span id="lng-container"></span>\r\n  </div>\r\n  <div class="custom-gps-preview__spacer"></div>\r\n  <div id="map-icon-container" class="custom-gps-preview__map-icon"></div>\r\n</div>\r\n',".custom-gps-preview{width:100%;display:flex;align-items:center;position:absolute;top:0;bottom:0;font-size:16px;line-height:20px;margin-bottom:-2px;cursor:pointer}.custom-gps-preview__text{flex-shrink:0;max-width:80%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.custom-gps-preview__spacer{flex-grow:1}.custom-gps-preview__map-icon{flex-shrink:0;margin-right:4px;display:flex;align-items:center;justify-content:center}.custom-gps-preview__map-icon svg{width:20px;height:20px;line-height:20px}"),this.querySelector("#map-icon-container").innerHTML=i.eC.mapMarker,this.latContainer=this.querySelector("#lat-container"),this.lngContainer=this.querySelector("#lng-container"),this.eventListeners=[];const n=()=>{this.expand()};this.addEventListener("click",n),this.eventListeners.push({element:this,type:"click",listener:n}),this.connector.data.value?this.updateHtml((0,i.uT)(this.connector.data.value)):this.updateHtml(t.o),this.connector.data.onValueChange((e=>{if(e){const t=(0,i.uT)(e);this.updateHtml(t)}else this.updateHtml(t.o)}))}updateHtml(e){var t,n,i,s;this.latContainer.innerText=null!==(n=null===(t=e.lat)||void 0===t?void 0:t.toString())&&void 0!==n?n:"",this.lngContainer.innerText=null!==(s=null===(i=e.lng)||void 0===i?void 0:i.toString())&&void 0!==s?s:""}expand(){this.connector.dialog.open()}disconnectedCallback(){(0,e.i)(`${s} disconnectedCallback called`),this.eventListeners.forEach((({element:e,type:t,listener:n})=>{e.removeEventListener(t,n)}))}}customElements.get(s)||customElements.define(s,a)})()})();
//# sourceMappingURL=https://sources.2sxc.org/13.12.01/system/field-custom-gps/index.js.map