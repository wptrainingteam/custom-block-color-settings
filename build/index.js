!function(){"use strict";var e,t={414:function(){var e=window.wp.blocks,t=window.React,r=window.wp.blockEditor,n=window.wp.i18n,o=JSON.parse('{"apiVersion":3,"version":"20231019","name":"devblog/custom-block-color-settings","title":"Dev Blog: Custom Block Color Settings","category":"widgets","description":"Description...","attributes":{"markerColor":{"type":"string","default":""}},"supports":{"color":{"link":true,"gradients":true,"__experimentalDefaultControls":{"background":true,"text":true,"link":true}}},"textdomain":"custom-block-color-settings","editorScript":"file:./index.js","style":"file:./style-index.css","example":{}}');(0,e.registerBlockType)(o,{edit:function({attributes:{markerColor:e},setAttributes:o,style:l,clientId:i}){const s=(0,r.__experimentalUseMultipleOriginColorsAndGradients)(),c=(0,r.useBlockProps)({style:{...l,"--marker":null!=e?e:null}}),u=(0,t.createElement)(r.__experimentalColorGradientSettingsDropdown,{settings:[{label:(0,n.__)("Marker Color","custom-block-color-settings"),colorValue:e,onColorChange:e=>o({markerColor:e})}],panelId:i,hasColorsOrGradients:!1,__experimentalIsRenderedInSidebar:!0,...s});return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(r.InspectorControls,{group:"color"},u),(0,t.createElement)("ul",{...c},(0,t.createElement)("li",null,"List Item 1"),(0,t.createElement)("li",null,"List Item 2"),(0,t.createElement)("li",null,"List Item 3"),(0,t.createElement)("li",null,"List Item 4"),(0,t.createElement)("li",null,"List Item 5")))}})}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var l=r[e]={exports:{}};return t[e](l,l.exports,n),l.exports}n.m=t,e=[],n.O=function(t,r,o,l){if(!r){var i=1/0;for(a=0;a<e.length;a++){r=e[a][0],o=e[a][1],l=e[a][2];for(var s=!0,c=0;c<r.length;c++)(!1&l||i>=l)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(s=!1,l<i&&(i=l));if(s){e.splice(a--,1);var u=o();void 0!==u&&(t=u)}}return t}l=l||0;for(var a=e.length;a>0&&e[a-1][2]>l;a--)e[a]=e[a-1];e[a]=[r,o,l]},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={826:0,431:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,l,i=r[0],s=r[1],c=r[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(c)var a=c(n)}for(t&&t(r);u<i.length;u++)l=i[u],n.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return n.O(a)},r=self.webpackChunkcustom_block_color_settings=self.webpackChunkcustom_block_color_settings||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var o=n.O(void 0,[431],(function(){return n(414)}));o=n.O(o)}();