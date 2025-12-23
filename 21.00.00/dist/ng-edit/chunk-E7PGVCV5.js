function w(o,t,u=0){let f=o.length===u+1?t:w.bind(this,o,t,u+1),n=o[u],s=typeof n.test=="string"?n.test:null,i=typeof n.test=="function"?n.test:null,e=window;if(s!=null&&e[s]){t();return}if(i!=null&&i()){t();return}window.require([n.src],l=>{l&&!e[s]&&(e[s]=l),f()})}export{w as a};
//# sourceMappingURL=https://sources.2sxc.org/21.00.00/dist/ng-edit/chunk-E7PGVCV5.js.map
