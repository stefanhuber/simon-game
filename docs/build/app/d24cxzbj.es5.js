/*! Built with http://stenciljs.com */
App.loadBundle("d24cxzbj",["exports","./chunk1.js"],function(t,e){var i=window.App.h,n=function(){function t(){this.unsubscribe=function(){},this.exact=!1,this.activeClass="link-active",this.match=null}return t.prototype.computeMatch=function(t){return t||(t=this.activeRouter.get("location").pathname),e.matchPath(t,{path:this.urlMatch||this.url,exact:this.exact,strict:!0})},t.prototype.componentWillLoad=function(){var t=this;this.unsubscribe=this.activeRouter.subscribe(function(){t.match=t.computeMatch()}),this.match=this.computeMatch()},t.prototype.componentDidUnload=function(){this.unsubscribe()},t.prototype.handleClick=function(t){if(t.preventDefault(),this.activeRouter)return this.activeRouter.get("history").push(this.getUrl(this.url),{});console.warn('<stencil-route-link> wasn\'t passed an instance of the router as the "router" prop!')},t.prototype.getUrl=function(t){var e=this.activeRouter.get("root")||"/";return"/"==t.charAt(0)&&"/"==e.charAt(e.length-1)?e.slice(0,e.length-1)+t:e+t},t.prototype.render=function(){var t,e=((t={})[this.activeClass]=null!==this.match,t);return this.custom?i(this.custom,{class:e,onClick:this.handleClick.bind(this)},i("slot",null)):i("a",{class:e,href:this.url,onClick:this.handleClick.bind(this)},i("slot",null))},Object.defineProperty(t,"is",{get:function(){return"stencil-route-link"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{activeClass:{type:String,attr:"active-class"},activeRouter:{context:"activeRouter"},custom:{type:String,attr:"custom"},exact:{type:Boolean,attr:"exact"},location:{context:"location"},match:{state:!0},url:{type:String,attr:"url"},urlMatch:{type:"Any",attr:"url-match"}}},enumerable:!0,configurable:!0}),t}();t.StencilRouteLink=n,Object.defineProperty(t,"__esModule",{value:!0})});