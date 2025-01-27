const dropzoneClass = 'dropzone';
const dropzoneDisabledClass = 'dropzone-disabled';
const draggingClass = 'eav-dragging';

/** Prevent drop on page - can only drop on dropzone */
window.addEventListener('dragover', function (event) {
  const dropzone = event.target.closest('.' + dropzoneClass + ':not(.' + dropzoneDisabledClass + ')');
  if (dropzone === null) {
    event.preventDefault();
  }
});
window.addEventListener('drop', function (event) {
  const dropzone = event.target.closest('.' + dropzoneClass + ':not(.' + dropzoneDisabledClass + ')');
  if (dropzone === null) {
    event.preventDefault();
  }
});

/**
 * Add draggingClass to body when something is dragged over and
 * add draggingClass to dropzone over which something is dragged
 */
(function addDraggingClass() {
  windowBodyTimeouts = [];
  let dropzones;
  let dropzoneTimeouts = [];
  let windowDropzonesTimeouts = [];
  let dropzonesListeners = [];
  let activeDropzoneIndex;
  let previousDropzoneIndex;

  // listeners on window
  window.addEventListener('dragover', function () {
    clearTimeouts(windowBodyTimeouts);
    document.body.classList.add(draggingClass);
    clearTimeouts(windowDropzonesTimeouts);
    initDropzones();
  }, { passive: true });
  window.addEventListener('drop', function () {
    clearAllDropzonesAndListeners();
  }, { passive: true });
  window.addEventListener('dragleave', function () {
    let timeout = setTimeout(function () { document.body.classList.remove(draggingClass); }, 50);
    windowBodyTimeouts.push(timeout);
    timeout = setTimeout(clearAllDropzonesAndListeners, 50);
    windowDropzonesTimeouts.push(timeout);
  }, { passive: true });

  function initDropzones() {
    if (dropzones) { return; }
    const dropzonesSelector = '.' + dropzoneClass + ':not(.' + dropzoneDisabledClass + ')';
    dropzones = document.querySelectorAll(dropzonesSelector);

    for (let i = 0; i < dropzones.length; i++) {
      const dropzone = dropzones[i];
      const addClassBind = addClass.bind(null, dropzone, i);

      // listeners on dropzones
      dropzone.addEventListener('dragover', addClassBind, { passive: true });
      dropzone.addEventListener('drop', clearAllDropzonesAndListeners, { passive: true });
      dropzone.addEventListener('dragleave', addClearClassesTimeout, { passive: true });
      dropzonesListeners.push({ el: dropzone, type: 'dragover', func: addClassBind });
      dropzonesListeners.push({ el: dropzone, type: 'drop', func: clearAllDropzonesAndListeners });
      dropzonesListeners.push({ el: dropzone, type: 'dragleave', func: addClearClassesTimeout });
    }
  }

  function addClass(dropzone, index) {
    clearTimeouts(windowBodyTimeouts);
    document.body.classList.add(draggingClass);
    clearTimeouts(windowDropzonesTimeouts);
    clearTimeouts(dropzoneTimeouts);
    activeDropzoneIndex = index;
    if (activeDropzoneIndex !== previousDropzoneIndex) {
      clearClassFromElements(draggingClass, dropzones);
      previousDropzoneIndex = index;
    }
    dropzone.classList.add(draggingClass);
  }

  function addClearClassesTimeout() {
    const clearClassesBind = clearClassFromElements.bind(null, draggingClass, dropzones);
    const timeout = setTimeout(clearClassesBind, 50);
    dropzoneTimeouts.push(timeout);
  }

  function clearAllDropzonesAndListeners() {
    if (!dropzones) { return; }
    document.body.classList.remove(draggingClass);
    clearListeners(dropzonesListeners);
    clearClassFromElements(draggingClass, dropzones);
    dropzones = null;
  }
})();

// add draggingClass helpers
function clearTimeouts(timeoutsArray) {
  for (let i = 0; i < timeoutsArray.length; i++) {
    clearTimeout(timeoutsArray[i]);
  }
  timeoutsArray.splice(0, timeoutsArray.length);
}
function clearClassFromElements(cssClass, elementsArray) {
  for (let i = 0; i < elementsArray.length; i++) {
    elementsArray[i].classList.remove(cssClass);
  }
}
function clearListeners(listenersArray) {
  for (let i = 0; i < listenersArray.length; i++) {
    const element = listenersArray[i].el;
    const type = listenersArray[i].type;
    const func = listenersArray[i].func;
    element.removeEventListener(type, func);
  }
  listenersArray.splice(0, listenersArray.length);
}

;/*
paste.js is an interface to read image from clipboard in different browsers. It also contains several hacks.
implementation is based on https://github.com/layerssss/paste.js
*/

(function () {

    var matches = function (el, selector) {
        return (el.matches || el.matchesSelector || el.msMatchesSelector || el.mozMatchesSelector || el.webkitMatchesSelector || el.oMatchesSelector).call(el, selector);
    };

    function createHiddenEditable() {
        var hiddenEditable = document.createElement('div');
        hiddenEditable.setAttribute('contenteditable', true);
        hiddenEditable.setAttribute('aria-hidden', true);
        hiddenEditable.setAttribute('tabindex', -1);
        hiddenEditable.style.width = 1;
        hiddenEditable.style.height = 1;
        hiddenEditable.style.position = 'fixed';
        hiddenEditable.style.left = -100;
        hiddenEditable.style.overflow = 'hidden';
        hiddenEditable.style.opacity = 1e-17;
        return hiddenEditable;
    }

    var isFocusable = function (element, hasTabindex) {
        var fieldset;
        var focusableIfVisible;
        var nodeName = element.nodeName.toLowerCase();

        if (/^(input|select|textarea|button|object)$/.test(nodeName)) {
            focusableIfVisible = !element.disabled;
            if (focusableIfVisible) {
                fieldset = element.closest('fieldset');
                if (fieldset) {
                    focusableIfVisible = !fieldset.disabled;
                }
            }
        } else if ('a' === nodeName) {
            focusableIfVisible = element.href || hasTabindex;
        } else {
            focusableIfVisible = hasTabindex;
        }
        focusableIfVisible = focusableIfVisible || matches(element, '[contenteditable]');
        return focusableIfVisible;
    };

    var Paste = (function () {
        Paste.prototype._target = null;
        Paste.prototype._container = null;

        Paste.mountNonInputable = function (nonInputable) {
            var hiddenEditable = createHiddenEditable();
            nonInputable.appendChild(hiddenEditable);
            var paste = new Paste(hiddenEditable, nonInputable);

            nonInputable.addEventListener('click', (function (_this) {
                return function (ev) {
                    if (!isFocusable(ev.target, false)) {
                        paste._container.focus();
                        return;
                    }
                };
            })(this));

            paste._container.addEventListener('focus', (function (_this) {
                return function () {
                    nonInputable.classList.add('pastable-focus');
                    return;
                };
            })(this));

            paste._container.addEventListener('blur', (function (_this) {
                return function () {
                    nonInputable.classList.remove('pastable-focus');
                    return;
                };
            })(this));

            return paste;
        };

        Paste.mountTextarea = function (textarea) {
            var ref, ref1;
            if (((DataTransfer) ? DataTransfer.prototype : undefined) &&
                ((ref = Object.getOwnPropertyDescriptor) ? (ref1 = ref.call(Object, DataTransfer.prototype, 'items')) ? ref1.get : undefined : undefined)) {
                this.mountContenteditable(textarea);
                return;
            }

            var paste = new Paste(createHiddenEditable().insertBefore(textarea), textarea);

            var ctlDown = false;

            textarea.addEventListener('keyup', function (ev) {
                if (ev.keyCode === 17 || ev.keyCode === 224) {
                    ctlDown = false;
                }
                return;
            });

            textarea.addEventListener('keydown', function (ev) {
                if (ev.keyCode === 17 || ev.keyCode === 224) {
                    ctlDown = true;
                }
                if ((ev.ctrlKey) && (ev.metaKey)) {
                    ctlDown = ev.ctrlKey || ev.metaKey;
                }
                if (ctlDown && ev.keyCode === 86) {
                    paste._textarea_focus_stolen = true;
                    paste._container.focus();
                    paste._paste_event_fired = false;
                    setTimeout((function (_this) {
                        return function () {
                            if (!paste._paste_event_fired) {
                                textarea.focus();
                                paste._textarea_focus_stolen = false;
                                return;
                            }
                        };
                    })(this), 1);
                }
                return;
            });

            textarea.addEventListener('paste', (function (_this) {
                return function () { };
            })(this));

            textarea.addEventListener('focus', (function (_this) {
                return function () {
                    if (!paste._textarea_focus_stolen) {
                        textarea.classList.add('pastable-focus');
                        return;
                    }
                };
            })(this));

            textarea.addEventListener('blur', (function (_this) {
                return function () {
                    if (!paste._textarea_focus_stolen) {
                        textarea.classList.remove('pastable-focus');
                        return;
                    }
                };
            })(this));

            return paste;
        };

        Paste.mountContenteditable = function (contenteditable) {
            var paste = new Paste(contenteditable, contenteditable);

            contenteditable.addEventListener('focus', (function (_this) {
                return function () {
                    contenteditable.classList.add('pastable-focus');
                    return;
                };
            })(this));

            contenteditable.addEventListener('blur', (function (_this) {
                return function () {
                    contenteditable.classList.remove('pastable-focus');
                    return;
                };
            })(this));

            return paste;
        };

        function Paste(_container, _target) {
            this._container = _container;
            this._target = _target;

            this._target.classList.add('pastable');

            this._container.addEventListener('paste', (function (_this) {
                return function (ev) {

                    var _i, clipboardData, file, item, k, l, len1, len2, pastedFilename, ref2, ref4;
                    _this.originalEvent = ev;
                    _this._paste_event_fired = true;
                    if (ev.clipboardData) {
                        clipboardData = ev.clipboardData;
                        if (clipboardData.items) {
                            pastedFilename = null;
                            _this.originalEvent.pastedTypes = [];
                            ref2 = clipboardData.items;
                            for (_i = k = 0, len1 = ref2.length; k < len1; _i = ++k) {
                                item = ref2[_i];
                                if (item.type.match(/^image\//)) {
                                    ev.preventDefault();
                                    ev.stopPropagation();
                                    // todo: generate hash sha256 for file name and avoid duplicate files
                                    var imageFileName = 'image';
                                    if (!/MSIE/.test(navigator.userAgent) && !/rv:11/.test(navigator.userAgent)) {
                                        imageFileName = window.prompt('Enter clipboard image file name: ', imageFileName); // todo: i18n
                                        if (imageFileName === null) { // user click Cancel
                                            ev.preventDefault();
                                            ev.stopImmediatePropagation();
                                            return; //break out of the function early because user click on Cancel
                                        } else { // user click OK
                                            if (imageFileName.trim().length === 0) imageFileName = 'image';
                                        }
                                    }
                                    if (imageFileName.endsWith('.png') === false) imageFileName = imageFileName + '.png';
                                    try {
                                        var clipboardImageAsFile = item.getAsFile();
                                        triggerCustomEvent(
                                            _this._target, 'handleImage', {
                                                file: clipboardImageAsFile,
                                                originalEvent: _this.originalEvent,
                                                imageFileName: imageFileName
                                            });
                                    } catch (error) {
                                        console.log('clipboard paste image error', error);
                                        ev.stopImmediatePropagation();
                                    }
                                    break;
                                }
                            }
                        }
                    }
                    // IE code not working
                    //if (window.clipboardData) {
                    //    ref4 = window.clipboardData.files;
                    //    for (l = 0, len2 = ref4.length; l < len2; l++) {
                    //        // ev.stopImmediatePropagation();
                    //        ev.stopPropagation();
                    //        file = ref4[l];
                    //        triggerCustomEvent(
                    //            _this._target, 'handleImage', {
                    //                file: file,
                    //                originalEvent: _this.originalEvent
                    //            });
                    //        ev.preventDefault();
                    //    }
                    //}
                    return;
                };
            })(this));

            function triggerCustomEvent(el, eventName, data) {
                var event;
                if (!/MSIE/.test(navigator.userAgent) && !/rv:11/.test(navigator.userAgent)) {
                    event = new CustomEvent(eventName, { detail: data });
                } else { // fix for IE
                    event = document.createEvent('CustomEvent');
                    event.initCustomEvent(eventName, true, true, data);
                }

                el.dispatchEvent(event);
            }

        }

        return Paste;

    })();

    Element.prototype.paste = function (pasteContainer) {
        var pm = Paste.mountNonInputable(pasteContainer);
        return pm._container;
    };

    Element.prototype.pastableNonInputable = function () {
        var el = this;
        if (el._pastable || matches(el, 'textarea, input, [contenteditable]')) {
            return;
        }
        Paste.mountNonInputable(el);
        el._pastable = true;
        return;
    };

    Element.prototype.pastableTextarea = function () {
        var el = this;
        if (el._pastable || matches(el, 'textarea, input') === false) {
            return;
        }
        Paste.mountTextarea(el);
        el._pastable = true;
        return;
    };

    Element.prototype.pastableContenteditable = function () {
        var el = this;
        if (el._pastable || matches(el, '[contenteditable]') === false) {
            return;
        }
        Paste.mountContenteditable(el);
        el._pastable = true;
        return;
    };

}).call(this);

;/*! (C) Andrea Giammarchi - @WebReflection - Mit Style License */
(function(window,polyfill){"use strict";var document=window.document,Object=window.Object;var htmlClass=function(info){var catchClass=/^[A-Z]+[a-z]/,filterBy=function(re){var arr=[],tag;for(tag in register){if(re.test(tag))arr.push(tag)}return arr},add=function(Class,tag){tag=tag.toLowerCase();if(!(tag in register)){register[Class]=(register[Class]||[]).concat(tag);register[tag]=register[tag.toUpperCase()]=Class}},register=(Object.create||Object)(null),htmlClass={},i,section,tags,Class;for(section in info){for(Class in info[section]){tags=info[section][Class];register[Class]=tags;for(i=0;i<tags.length;i++){register[tags[i].toLowerCase()]=register[tags[i].toUpperCase()]=Class}}}htmlClass.get=function get(tagOrClass){return typeof tagOrClass==="string"?register[tagOrClass]||(catchClass.test(tagOrClass)?[]:""):filterBy(tagOrClass)};htmlClass.set=function set(tag,Class){return catchClass.test(tag)?add(tag,Class):add(Class,tag),htmlClass};return htmlClass}({collections:{HTMLAllCollection:["all"],HTMLCollection:["forms"],HTMLFormControlsCollection:["elements"],HTMLOptionsCollection:["options"]},elements:{Element:["element"],HTMLAnchorElement:["a"],HTMLAppletElement:["applet"],HTMLAreaElement:["area"],HTMLAttachmentElement:["attachment"],HTMLAudioElement:["audio"],HTMLBRElement:["br"],HTMLBaseElement:["base"],HTMLBodyElement:["body"],HTMLButtonElement:["button"],HTMLCanvasElement:["canvas"],HTMLContentElement:["content"],HTMLDListElement:["dl"],HTMLDataElement:["data"],HTMLDataListElement:["datalist"],HTMLDetailsElement:["details"],HTMLDialogElement:["dialog"],HTMLDirectoryElement:["dir"],HTMLDivElement:["div"],HTMLDocument:["document"],HTMLElement:["element","abbr","address","article","aside","b","bdi","bdo","cite","code","command","dd","dfn","dt","em","figcaption","figure","footer","header","i","kbd","mark","nav","noscript","rp","rt","ruby","s","samp","section","small","strong","sub","summary","sup","u","var","wbr"],HTMLEmbedElement:["embed"],HTMLFieldSetElement:["fieldset"],HTMLFontElement:["font"],HTMLFormElement:["form"],HTMLFrameElement:["frame"],HTMLFrameSetElement:["frameset"],HTMLHRElement:["hr"],HTMLHeadElement:["head"],HTMLHeadingElement:["h1","h2","h3","h4","h5","h6"],HTMLHtmlElement:["html"],HTMLIFrameElement:["iframe"],HTMLImageElement:["img"],HTMLInputElement:["input"],HTMLKeygenElement:["keygen"],HTMLLIElement:["li"],HTMLLabelElement:["label"],HTMLLegendElement:["legend"],HTMLLinkElement:["link"],HTMLMapElement:["map"],HTMLMarqueeElement:["marquee"],HTMLMediaElement:["media"],HTMLMenuElement:["menu"],HTMLMenuItemElement:["menuitem"],HTMLMetaElement:["meta"],HTMLMeterElement:["meter"],HTMLModElement:["del","ins"],HTMLOListElement:["ol"],HTMLObjectElement:["object"],HTMLOptGroupElement:["optgroup"],HTMLOptionElement:["option"],HTMLOutputElement:["output"],HTMLParagraphElement:["p"],HTMLParamElement:["param"],HTMLPictureElement:["picture"],HTMLPreElement:["pre"],HTMLProgressElement:["progress"],HTMLQuoteElement:["blockquote","q","quote"],HTMLScriptElement:["script"],HTMLSelectElement:["select"],HTMLShadowElement:["shadow"],HTMLSlotElement:["slot"],HTMLSourceElement:["source"],HTMLSpanElement:["span"],HTMLStyleElement:["style"],HTMLTableCaptionElement:["caption"],HTMLTableCellElement:["td","th"],HTMLTableColElement:["col","colgroup"],HTMLTableElement:["table"],HTMLTableRowElement:["tr"],HTMLTableSectionElement:["thead","tbody","tfoot"],HTMLTemplateElement:["template"],HTMLTextAreaElement:["textarea"],HTMLTimeElement:["time"],HTMLTitleElement:["title"],HTMLTrackElement:["track"],HTMLUListElement:["ul"],HTMLUnknownElement:["unknown","vhgroupv","vkeygen"],HTMLVideoElement:["video"]},nodes:{Attr:["node"],Audio:["audio"],CDATASection:["node"],CharacterData:["node"],Comment:["#comment"],Document:["#document"],DocumentFragment:["#document-fragment"],DocumentType:["node"],HTMLDocument:["#document"],Image:["img"],Option:["option"],ProcessingInstruction:["node"],ShadowRoot:["#shadow-root"],Text:["#text"],XMLDocument:["xml"]}});if(typeof polyfill!=="object")polyfill={type:polyfill||"auto"};var REGISTER_ELEMENT="registerElement",EXPANDO_UID="__"+REGISTER_ELEMENT+(window.Math.random()*1e5>>0),ADD_EVENT_LISTENER="addEventListener",ATTACHED="attached",CALLBACK="Callback",DETACHED="detached",EXTENDS="extends",ATTRIBUTE_CHANGED_CALLBACK="attributeChanged"+CALLBACK,ATTACHED_CALLBACK=ATTACHED+CALLBACK,CONNECTED_CALLBACK="connected"+CALLBACK,DISCONNECTED_CALLBACK="disconnected"+CALLBACK,CREATED_CALLBACK="created"+CALLBACK,DETACHED_CALLBACK=DETACHED+CALLBACK,ADDITION="ADDITION",MODIFICATION="MODIFICATION",REMOVAL="REMOVAL",DOM_ATTR_MODIFIED="DOMAttrModified",DOM_CONTENT_LOADED="DOMContentLoaded",DOM_SUBTREE_MODIFIED="DOMSubtreeModified",PREFIX_TAG="<",PREFIX_IS="=",validName=/^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/,invalidNames=["ANNOTATION-XML","COLOR-PROFILE","FONT-FACE","FONT-FACE-SRC","FONT-FACE-URI","FONT-FACE-FORMAT","FONT-FACE-NAME","MISSING-GLYPH"],types=[],protos=[],query="",documentElement=document.documentElement,indexOf=types.indexOf||function(v){for(var i=this.length;i--&&this[i]!==v;){}return i},OP=Object.prototype,hOP=OP.hasOwnProperty,iPO=OP.isPrototypeOf,defineProperty=Object.defineProperty,empty=[],gOPD=Object.getOwnPropertyDescriptor,gOPN=Object.getOwnPropertyNames,gPO=Object.getPrototypeOf,sPO=Object.setPrototypeOf,hasProto=!!Object.__proto__,fixGetClass=false,DRECEV1="__dreCEv1",customElements=window.customElements,usableCustomElements=!/^force/.test(polyfill.type)&&!!(customElements&&customElements.define&&customElements.get&&customElements.whenDefined),Dict=Object.create||Object,Map=window.Map||function Map(){var K=[],V=[],i;return{get:function(k){return V[indexOf.call(K,k)]},set:function(k,v){i=indexOf.call(K,k);if(i<0)V[K.push(k)-1]=v;else V[i]=v}}},Promise=window.Promise||function(fn){var notify=[],done=false,p={catch:function(){return p},then:function(cb){notify.push(cb);if(done)setTimeout(resolve,1);return p}};function resolve(value){done=true;while(notify.length)notify.shift()(value)}fn(resolve);return p},justCreated=false,constructors=Dict(null),waitingList=Dict(null),nodeNames=new Map,secondArgument=function(is){return is.toLowerCase()},create=Object.create||function Bridge(proto){return proto?(Bridge.prototype=proto,new Bridge):this},setPrototype=sPO||(hasProto?function(o,p){o.__proto__=p;return o}:gOPN&&gOPD?function(){function setProperties(o,p){for(var key,names=gOPN(p),i=0,length=names.length;i<length;i++){key=names[i];if(!hOP.call(o,key)){defineProperty(o,key,gOPD(p,key))}}}return function(o,p){do{setProperties(o,p)}while((p=gPO(p))&&!iPO.call(p,o));return o}}():function(o,p){for(var key in p){o[key]=p[key]}return o}),MutationObserver=window.MutationObserver||window.WebKitMutationObserver,HTMLElementPrototype=(window.HTMLElement||window.Element||window.Node).prototype,IE8=!iPO.call(HTMLElementPrototype,documentElement),safeProperty=IE8?function(o,k,d){o[k]=d.value;return o}:defineProperty,isValidNode=IE8?function(node){return node.nodeType===1}:function(node){return iPO.call(HTMLElementPrototype,node)},targets=IE8&&[],attachShadow=HTMLElementPrototype.attachShadow,cloneNode=HTMLElementPrototype.cloneNode,dispatchEvent=HTMLElementPrototype.dispatchEvent,getAttribute=HTMLElementPrototype.getAttribute,hasAttribute=HTMLElementPrototype.hasAttribute,removeAttribute=HTMLElementPrototype.removeAttribute,setAttribute=HTMLElementPrototype.setAttribute,createElement=document.createElement,patchedCreateElement=createElement,attributesObserver=MutationObserver&&{attributes:true,characterData:true,attributeOldValue:true},DOMAttrModified=MutationObserver||function(e){doesNotSupportDOMAttrModified=false;documentElement.removeEventListener(DOM_ATTR_MODIFIED,DOMAttrModified)},asapQueue,asapTimer=0,V0=REGISTER_ELEMENT in document&&!/^force-all/.test(polyfill.type),setListener=true,justSetup=false,doesNotSupportDOMAttrModified=true,dropDomContentLoaded=true,notFromInnerHTMLHelper=true,onSubtreeModified,callDOMAttrModified,getAttributesMirror,observer,observe,patchIfNotAlready,patch,tmp;if(MutationObserver){tmp=document.createElement("div");tmp.innerHTML="<div><div></div></div>";new MutationObserver(function(mutations,observer){if(mutations[0]&&mutations[0].type=="childList"&&!mutations[0].removedNodes[0].childNodes.length){tmp=gOPD(HTMLElementPrototype,"innerHTML");var set=tmp&&tmp.set;if(set)defineProperty(HTMLElementPrototype,"innerHTML",{set:function(value){while(this.lastChild)this.removeChild(this.lastChild);set.call(this,value)}})}observer.disconnect();tmp=null}).observe(tmp,{childList:true,subtree:true});tmp.innerHTML=""}if(!V0){if(sPO||hasProto){patchIfNotAlready=function(node,proto){if(!iPO.call(proto,node)){setupNode(node,proto)}};patch=setupNode}else{patchIfNotAlready=function(node,proto){if(!node[EXPANDO_UID]){node[EXPANDO_UID]=Object(true);setupNode(node,proto)}};patch=patchIfNotAlready}if(IE8){doesNotSupportDOMAttrModified=false;(function(){var descriptor=gOPD(HTMLElementPrototype,ADD_EVENT_LISTENER),addEventListener=descriptor.value,patchedRemoveAttribute=function(name){var e=new CustomEvent(DOM_ATTR_MODIFIED,{bubbles:true});e.attrName=name;e.prevValue=getAttribute.call(this,name);e.newValue=null;e[REMOVAL]=e.attrChange=2;removeAttribute.call(this,name);dispatchEvent.call(this,e)},patchedSetAttribute=function(name,value){var had=hasAttribute.call(this,name),old=had&&getAttribute.call(this,name),e=new CustomEvent(DOM_ATTR_MODIFIED,{bubbles:true});setAttribute.call(this,name,value);e.attrName=name;e.prevValue=had?old:null;e.newValue=value;if(had){e[MODIFICATION]=e.attrChange=1}else{e[ADDITION]=e.attrChange=0}dispatchEvent.call(this,e)},onPropertyChange=function(e){var node=e.currentTarget,superSecret=node[EXPANDO_UID],propertyName=e.propertyName,event;if(superSecret.hasOwnProperty(propertyName)){superSecret=superSecret[propertyName];event=new CustomEvent(DOM_ATTR_MODIFIED,{bubbles:true});event.attrName=superSecret.name;event.prevValue=superSecret.value||null;event.newValue=superSecret.value=node[propertyName]||null;if(event.prevValue==null){event[ADDITION]=event.attrChange=0}else{event[MODIFICATION]=event.attrChange=1}dispatchEvent.call(node,event)}};descriptor.value=function(type,handler,capture){if(type===DOM_ATTR_MODIFIED&&this[ATTRIBUTE_CHANGED_CALLBACK]&&this.setAttribute!==patchedSetAttribute){this[EXPANDO_UID]={className:{name:"class",value:this.className}};this.setAttribute=patchedSetAttribute;this.removeAttribute=patchedRemoveAttribute;addEventListener.call(this,"propertychange",onPropertyChange)}addEventListener.call(this,type,handler,capture)};defineProperty(HTMLElementPrototype,ADD_EVENT_LISTENER,descriptor)})()}else if(!MutationObserver){documentElement[ADD_EVENT_LISTENER](DOM_ATTR_MODIFIED,DOMAttrModified);documentElement.setAttribute(EXPANDO_UID,1);documentElement.removeAttribute(EXPANDO_UID);if(doesNotSupportDOMAttrModified){onSubtreeModified=function(e){var node=this,oldAttributes,newAttributes,key;if(node===e.target){oldAttributes=node[EXPANDO_UID];node[EXPANDO_UID]=newAttributes=getAttributesMirror(node);for(key in newAttributes){if(!(key in oldAttributes)){return callDOMAttrModified(0,node,key,oldAttributes[key],newAttributes[key],ADDITION)}else if(newAttributes[key]!==oldAttributes[key]){return callDOMAttrModified(1,node,key,oldAttributes[key],newAttributes[key],MODIFICATION)}}for(key in oldAttributes){if(!(key in newAttributes)){return callDOMAttrModified(2,node,key,oldAttributes[key],newAttributes[key],REMOVAL)}}}};callDOMAttrModified=function(attrChange,currentTarget,attrName,prevValue,newValue,action){var e={attrChange:attrChange,currentTarget:currentTarget,attrName:attrName,prevValue:prevValue,newValue:newValue};e[action]=attrChange;onDOMAttrModified(e)};getAttributesMirror=function(node){for(var attr,name,result={},attributes=node.attributes,i=0,length=attributes.length;i<length;i++){attr=attributes[i];name=attr.name;if(name!=="setAttribute"){result[name]=attr.value}}return result}}}document[REGISTER_ELEMENT]=function registerElement(type,options){upperType=type.toUpperCase();if(setListener){setListener=false;if(MutationObserver){observer=function(attached,detached){function checkEmAll(list,callback){for(var i=0,length=list.length;i<length;callback(list[i++])){}}return new MutationObserver(function(records){for(var current,node,newValue,i=0,length=records.length;i<length;i++){current=records[i];if(current.type==="childList"){checkEmAll(current.addedNodes,attached);checkEmAll(current.removedNodes,detached)}else{node=current.target;if(notFromInnerHTMLHelper&&node[ATTRIBUTE_CHANGED_CALLBACK]&&current.attributeName!=="style"){newValue=getAttribute.call(node,current.attributeName);if(newValue!==current.oldValue){node[ATTRIBUTE_CHANGED_CALLBACK](current.attributeName,current.oldValue,newValue)}}}}})}(executeAction(ATTACHED),executeAction(DETACHED));observe=function(node){observer.observe(node,{childList:true,subtree:true});return node};observe(document);if(attachShadow){HTMLElementPrototype.attachShadow=function(){return observe(attachShadow.apply(this,arguments))}}}else{asapQueue=[];document[ADD_EVENT_LISTENER]("DOMNodeInserted",onDOMNode(ATTACHED));document[ADD_EVENT_LISTENER]("DOMNodeRemoved",onDOMNode(DETACHED))}document[ADD_EVENT_LISTENER](DOM_CONTENT_LOADED,onReadyStateChange);document[ADD_EVENT_LISTENER]("readystatechange",onReadyStateChange);HTMLElementPrototype.cloneNode=function(deep){var node=cloneNode.call(this,!!deep),i=getTypeIndex(node);if(-1<i)patch(node,protos[i]);if(deep&&query.length)loopAndSetup(node.querySelectorAll(query));return node}}if(justSetup)return justSetup=false;if(-2<indexOf.call(types,PREFIX_IS+upperType)+indexOf.call(types,PREFIX_TAG+upperType)){throwTypeError(type)}if(!validName.test(upperType)||-1<indexOf.call(invalidNames,upperType)){throw new Error("The type "+type+" is invalid")}var constructor=function(){return extending?document.createElement(nodeName,upperType):document.createElement(nodeName)},opt=options||OP,extending=hOP.call(opt,EXTENDS),nodeName=extending?options[EXTENDS].toUpperCase():upperType,upperType,i;if(extending&&-1<indexOf.call(types,PREFIX_TAG+nodeName)){throwTypeError(nodeName)}i=types.push((extending?PREFIX_IS:PREFIX_TAG)+upperType)-1;query=query.concat(query.length?",":"",extending?nodeName+'[is="'+type.toLowerCase()+'"]':nodeName);constructor.prototype=protos[i]=hOP.call(opt,"prototype")?opt.prototype:create(HTMLElementPrototype);if(query.length)loopAndVerify(document.querySelectorAll(query),ATTACHED);return constructor};document.createElement=patchedCreateElement=function(localName,typeExtension){var is=getIs(typeExtension),node=is?createElement.call(document,localName,secondArgument(is)):createElement.call(document,localName),name=""+localName,i=indexOf.call(types,(is?PREFIX_IS:PREFIX_TAG)+(is||name).toUpperCase()),setup=-1<i;if(is){node.setAttribute("is",is=is.toLowerCase());if(setup){setup=isInQSA(name.toUpperCase(),is)}}notFromInnerHTMLHelper=!document.createElement.innerHTMLHelper;if(setup)patch(node,protos[i]);return node}}function ASAP(){var queue=asapQueue.splice(0,asapQueue.length);asapTimer=0;while(queue.length){queue.shift().call(null,queue.shift())}}function loopAndVerify(list,action){for(var i=0,length=list.length;i<length;i++){verifyAndSetupAndAction(list[i],action)}}function loopAndSetup(list){for(var i=0,length=list.length,node;i<length;i++){node=list[i];patch(node,protos[getTypeIndex(node)])}}function executeAction(action){return function(node){if(isValidNode(node)){verifyAndSetupAndAction(node,action);if(query.length)loopAndVerify(node.querySelectorAll(query),action)}}}function getTypeIndex(target){var is=getAttribute.call(target,"is"),nodeName=target.nodeName.toUpperCase(),i=indexOf.call(types,is?PREFIX_IS+is.toUpperCase():PREFIX_TAG+nodeName);return is&&-1<i&&!isInQSA(nodeName,is)?-1:i}function isInQSA(name,type){return-1<query.indexOf(name+'[is="'+type+'"]')}function onDOMAttrModified(e){var node=e.currentTarget,attrChange=e.attrChange,attrName=e.attrName,target=e.target,addition=e[ADDITION]||2,removal=e[REMOVAL]||3;if(notFromInnerHTMLHelper&&(!target||target===node)&&node[ATTRIBUTE_CHANGED_CALLBACK]&&attrName!=="style"&&(e.prevValue!==e.newValue||e.newValue===""&&(attrChange===addition||attrChange===removal))){node[ATTRIBUTE_CHANGED_CALLBACK](attrName,attrChange===addition?null:e.prevValue,attrChange===removal?null:e.newValue)}}function onDOMNode(action){var executor=executeAction(action);return function(e){asapQueue.push(executor,e.target);if(asapTimer)clearTimeout(asapTimer);asapTimer=setTimeout(ASAP,1)}}function onReadyStateChange(e){if(dropDomContentLoaded){dropDomContentLoaded=false;e.currentTarget.removeEventListener(DOM_CONTENT_LOADED,onReadyStateChange)}if(query.length)loopAndVerify((e.target||document).querySelectorAll(query),e.detail===DETACHED?DETACHED:ATTACHED);if(IE8)purge()}function patchedSetAttribute(name,value){var self=this;setAttribute.call(self,name,value);onSubtreeModified.call(self,{target:self})}function setupNode(node,proto){setPrototype(node,proto);if(observer){observer.observe(node,attributesObserver)}else{if(doesNotSupportDOMAttrModified){node.setAttribute=patchedSetAttribute;node[EXPANDO_UID]=getAttributesMirror(node);node[ADD_EVENT_LISTENER](DOM_SUBTREE_MODIFIED,onSubtreeModified)}node[ADD_EVENT_LISTENER](DOM_ATTR_MODIFIED,onDOMAttrModified)}if(node[CREATED_CALLBACK]&&notFromInnerHTMLHelper){node.created=true;node[CREATED_CALLBACK]();node.created=false}}function purge(){for(var node,i=0,length=targets.length;i<length;i++){node=targets[i];if(!documentElement.contains(node)){length--;targets.splice(i--,1);verifyAndSetupAndAction(node,DETACHED)}}}function throwTypeError(type){throw new Error("A "+type+" type is already registered")}function verifyAndSetupAndAction(node,action){var fn,i=getTypeIndex(node),counterAction;if(-1<i){patchIfNotAlready(node,protos[i]);i=0;if(action===ATTACHED&&!node[ATTACHED]){node[DETACHED]=false;node[ATTACHED]=true;counterAction="connected";i=1;if(IE8&&indexOf.call(targets,node)<0){targets.push(node)}}else if(action===DETACHED&&!node[DETACHED]){node[ATTACHED]=false;node[DETACHED]=true;counterAction="disconnected";i=1}if(i&&(fn=node[action+CALLBACK]||node[counterAction+CALLBACK]))fn.call(node)}}function CustomElementRegistry(){}CustomElementRegistry.prototype={constructor:CustomElementRegistry,define:usableCustomElements?function(name,Class,options){if(options){CERDefine(name,Class,options)}else{var NAME=name.toUpperCase();constructors[NAME]={constructor:Class,create:[NAME]};nodeNames.set(Class,NAME);customElements.define(name,Class)}}:CERDefine,get:usableCustomElements?function(name){return customElements.get(name)||get(name)}:get,whenDefined:usableCustomElements?function(name){return Promise.race([customElements.whenDefined(name),whenDefined(name)])}:whenDefined};function CERDefine(name,Class,options){var is=options&&options[EXTENDS]||"",CProto=Class.prototype,proto=create(CProto),attributes=Class.observedAttributes||empty,definition={prototype:proto};safeProperty(proto,CREATED_CALLBACK,{value:function(){if(justCreated)justCreated=false;else if(!this[DRECEV1]){this[DRECEV1]=true;new Class(this);if(CProto[CREATED_CALLBACK])CProto[CREATED_CALLBACK].call(this);var info=constructors[nodeNames.get(Class)];if(!usableCustomElements||info.create.length>1){notifyAttributes(this)}}}});safeProperty(proto,ATTRIBUTE_CHANGED_CALLBACK,{value:function(name){if(-1<indexOf.call(attributes,name))CProto[ATTRIBUTE_CHANGED_CALLBACK].apply(this,arguments)}});if(CProto[CONNECTED_CALLBACK]){safeProperty(proto,ATTACHED_CALLBACK,{value:CProto[CONNECTED_CALLBACK]})}if(CProto[DISCONNECTED_CALLBACK]){safeProperty(proto,DETACHED_CALLBACK,{value:CProto[DISCONNECTED_CALLBACK]})}if(is)definition[EXTENDS]=is;name=name.toUpperCase();constructors[name]={constructor:Class,create:is?[is,secondArgument(name)]:[name]};nodeNames.set(Class,name);document[REGISTER_ELEMENT](name.toLowerCase(),definition);whenDefined(name);waitingList[name].r()}function get(name){var info=constructors[name.toUpperCase()];return info&&info.constructor}function getIs(options){return typeof options==="string"?options:options&&options.is||""}function notifyAttributes(self){var callback=self[ATTRIBUTE_CHANGED_CALLBACK],attributes=callback?self.attributes:empty,i=attributes.length,attribute;while(i--){attribute=attributes[i];callback.call(self,attribute.name||attribute.nodeName,null,attribute.value||attribute.nodeValue)}}function whenDefined(name){name=name.toUpperCase();if(!(name in waitingList)){waitingList[name]={};waitingList[name].p=new Promise(function(resolve){waitingList[name].r=resolve})}return waitingList[name].p}function polyfillV1(){if(customElements)delete window.customElements;defineProperty(window,"customElements",{configurable:true,value:new CustomElementRegistry});defineProperty(window,"CustomElementRegistry",{configurable:true,value:CustomElementRegistry});for(var patchClass=function(name){var Class=window[name];if(Class){window[name]=function CustomElementsV1(self){var info,isNative;if(!self)self=this;if(!self[DRECEV1]){justCreated=true;info=constructors[nodeNames.get(self.constructor)];isNative=usableCustomElements&&info.create.length===1;self=isNative?Reflect.construct(Class,empty,info.constructor):document.createElement.apply(document,info.create);self[DRECEV1]=true;justCreated=false;if(!isNative)notifyAttributes(self)}return self};window[name].prototype=Class.prototype;try{Class.prototype.constructor=window[name]}catch(WebKit){fixGetClass=true;defineProperty(Class,DRECEV1,{value:window[name]})}}},Classes=htmlClass.get(/^HTML[A-Z]*[a-z]/),i=Classes.length;i--;patchClass(Classes[i])){}document.createElement=function(name,options){var is=getIs(options);return is?patchedCreateElement.call(this,name,secondArgument(is)):patchedCreateElement.call(this,name)};if(!V0){justSetup=true;document[REGISTER_ELEMENT]("")}}if(!customElements||/^force/.test(polyfill.type))polyfillV1();else if(!polyfill.noBuiltIn){try{(function(DRE,options,name){options[EXTENDS]="a";DRE.prototype=create(HTMLAnchorElement.prototype);DRE.prototype.constructor=DRE;window.customElements.define(name,DRE,options);if(getAttribute.call(document.createElement("a",{is:name}),"is")!==name||usableCustomElements&&getAttribute.call(new DRE,"is")!==name){throw options}})(function DRE(){return Reflect.construct(HTMLAnchorElement,[],DRE)},{},"document-register-element-a")}catch(o_O){polyfillV1()}}if(!polyfill.noBuiltIn){try{createElement.call(document,"a","a")}catch(FireFox){secondArgument=function(is){return{is:is.toLowerCase()}}}}})(window);

;
//# sourceMappingURL=scripts.js.map