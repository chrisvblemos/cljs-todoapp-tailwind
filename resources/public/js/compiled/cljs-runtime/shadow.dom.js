goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_20318 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_20318(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_20327 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_20327(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__19164 = coll;
var G__19165 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__19164,G__19165) : shadow.dom.lazy_native_coll_seq.call(null,G__19164,G__19165));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__19205 = arguments.length;
switch (G__19205) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__19223 = arguments.length;
switch (G__19223) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__19238 = arguments.length;
switch (G__19238) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__19256 = arguments.length;
switch (G__19256) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__19283 = arguments.length;
switch (G__19283) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__19311 = arguments.length;
switch (G__19311) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e19321){if((e19321 instanceof Object)){
var e = e19321;
return console.log("didnt support attachEvent",el,e);
} else {
throw e19321;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__19337 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__19338 = null;
var count__19339 = (0);
var i__19340 = (0);
while(true){
if((i__19340 < count__19339)){
var el = chunk__19338.cljs$core$IIndexed$_nth$arity$2(null,i__19340);
var handler_20359__$1 = ((function (seq__19337,chunk__19338,count__19339,i__19340,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__19337,chunk__19338,count__19339,i__19340,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_20359__$1);


var G__20360 = seq__19337;
var G__20361 = chunk__19338;
var G__20362 = count__19339;
var G__20363 = (i__19340 + (1));
seq__19337 = G__20360;
chunk__19338 = G__20361;
count__19339 = G__20362;
i__19340 = G__20363;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19337);
if(temp__5804__auto__){
var seq__19337__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19337__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19337__$1);
var G__20365 = cljs.core.chunk_rest(seq__19337__$1);
var G__20366 = c__5568__auto__;
var G__20367 = cljs.core.count(c__5568__auto__);
var G__20368 = (0);
seq__19337 = G__20365;
chunk__19338 = G__20366;
count__19339 = G__20367;
i__19340 = G__20368;
continue;
} else {
var el = cljs.core.first(seq__19337__$1);
var handler_20369__$1 = ((function (seq__19337,chunk__19338,count__19339,i__19340,el,seq__19337__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__19337,chunk__19338,count__19339,i__19340,el,seq__19337__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_20369__$1);


var G__20371 = cljs.core.next(seq__19337__$1);
var G__20372 = null;
var G__20373 = (0);
var G__20374 = (0);
seq__19337 = G__20371;
chunk__19338 = G__20372;
count__19339 = G__20373;
i__19340 = G__20374;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__19357 = arguments.length;
switch (G__19357) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__19368 = cljs.core.seq(events);
var chunk__19369 = null;
var count__19370 = (0);
var i__19371 = (0);
while(true){
if((i__19371 < count__19370)){
var vec__19389 = chunk__19369.cljs$core$IIndexed$_nth$arity$2(null,i__19371);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19389,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19389,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__20382 = seq__19368;
var G__20383 = chunk__19369;
var G__20384 = count__19370;
var G__20385 = (i__19371 + (1));
seq__19368 = G__20382;
chunk__19369 = G__20383;
count__19370 = G__20384;
i__19371 = G__20385;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19368);
if(temp__5804__auto__){
var seq__19368__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19368__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19368__$1);
var G__20387 = cljs.core.chunk_rest(seq__19368__$1);
var G__20388 = c__5568__auto__;
var G__20389 = cljs.core.count(c__5568__auto__);
var G__20390 = (0);
seq__19368 = G__20387;
chunk__19369 = G__20388;
count__19370 = G__20389;
i__19371 = G__20390;
continue;
} else {
var vec__19393 = cljs.core.first(seq__19368__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19393,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19393,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__20391 = cljs.core.next(seq__19368__$1);
var G__20392 = null;
var G__20393 = (0);
var G__20394 = (0);
seq__19368 = G__20391;
chunk__19369 = G__20392;
count__19370 = G__20393;
i__19371 = G__20394;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__19401 = cljs.core.seq(styles);
var chunk__19402 = null;
var count__19403 = (0);
var i__19404 = (0);
while(true){
if((i__19404 < count__19403)){
var vec__19418 = chunk__19402.cljs$core$IIndexed$_nth$arity$2(null,i__19404);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19418,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19418,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__20396 = seq__19401;
var G__20397 = chunk__19402;
var G__20398 = count__19403;
var G__20399 = (i__19404 + (1));
seq__19401 = G__20396;
chunk__19402 = G__20397;
count__19403 = G__20398;
i__19404 = G__20399;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19401);
if(temp__5804__auto__){
var seq__19401__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19401__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19401__$1);
var G__20400 = cljs.core.chunk_rest(seq__19401__$1);
var G__20401 = c__5568__auto__;
var G__20402 = cljs.core.count(c__5568__auto__);
var G__20403 = (0);
seq__19401 = G__20400;
chunk__19402 = G__20401;
count__19403 = G__20402;
i__19404 = G__20403;
continue;
} else {
var vec__19425 = cljs.core.first(seq__19401__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19425,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19425,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__20404 = cljs.core.next(seq__19401__$1);
var G__20405 = null;
var G__20406 = (0);
var G__20407 = (0);
seq__19401 = G__20404;
chunk__19402 = G__20405;
count__19403 = G__20406;
i__19404 = G__20407;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__19430_20408 = key;
var G__19430_20409__$1 = (((G__19430_20408 instanceof cljs.core.Keyword))?G__19430_20408.fqn:null);
switch (G__19430_20409__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_20411 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_20411,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_20411,"aria-");
}
})())){
el.setAttribute(ks_20411,value);
} else {
(el[ks_20411] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__19462){
var map__19463 = p__19462;
var map__19463__$1 = cljs.core.__destructure_map(map__19463);
var props = map__19463__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19463__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__19464 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19464,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19464,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19464,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__19467 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__19467,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__19467;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__19475 = arguments.length;
switch (G__19475) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__19502){
var vec__19503 = p__19502;
var seq__19504 = cljs.core.seq(vec__19503);
var first__19505 = cljs.core.first(seq__19504);
var seq__19504__$1 = cljs.core.next(seq__19504);
var nn = first__19505;
var first__19505__$1 = cljs.core.first(seq__19504__$1);
var seq__19504__$2 = cljs.core.next(seq__19504__$1);
var np = first__19505__$1;
var nc = seq__19504__$2;
var node = vec__19503;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__19515 = nn;
var G__19516 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__19515,G__19516) : create_fn.call(null,G__19515,G__19516));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__19518 = nn;
var G__19519 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__19518,G__19519) : create_fn.call(null,G__19518,G__19519));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__19531 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19531,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19531,(1),null);
var seq__19535_20420 = cljs.core.seq(node_children);
var chunk__19536_20421 = null;
var count__19537_20422 = (0);
var i__19538_20423 = (0);
while(true){
if((i__19538_20423 < count__19537_20422)){
var child_struct_20427 = chunk__19536_20421.cljs$core$IIndexed$_nth$arity$2(null,i__19538_20423);
var children_20428 = shadow.dom.dom_node(child_struct_20427);
if(cljs.core.seq_QMARK_(children_20428)){
var seq__19610_20429 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_20428));
var chunk__19612_20430 = null;
var count__19613_20431 = (0);
var i__19614_20432 = (0);
while(true){
if((i__19614_20432 < count__19613_20431)){
var child_20437 = chunk__19612_20430.cljs$core$IIndexed$_nth$arity$2(null,i__19614_20432);
if(cljs.core.truth_(child_20437)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_20437);


var G__20442 = seq__19610_20429;
var G__20443 = chunk__19612_20430;
var G__20444 = count__19613_20431;
var G__20445 = (i__19614_20432 + (1));
seq__19610_20429 = G__20442;
chunk__19612_20430 = G__20443;
count__19613_20431 = G__20444;
i__19614_20432 = G__20445;
continue;
} else {
var G__20446 = seq__19610_20429;
var G__20447 = chunk__19612_20430;
var G__20448 = count__19613_20431;
var G__20449 = (i__19614_20432 + (1));
seq__19610_20429 = G__20446;
chunk__19612_20430 = G__20447;
count__19613_20431 = G__20448;
i__19614_20432 = G__20449;
continue;
}
} else {
var temp__5804__auto___20451 = cljs.core.seq(seq__19610_20429);
if(temp__5804__auto___20451){
var seq__19610_20452__$1 = temp__5804__auto___20451;
if(cljs.core.chunked_seq_QMARK_(seq__19610_20452__$1)){
var c__5568__auto___20453 = cljs.core.chunk_first(seq__19610_20452__$1);
var G__20457 = cljs.core.chunk_rest(seq__19610_20452__$1);
var G__20458 = c__5568__auto___20453;
var G__20459 = cljs.core.count(c__5568__auto___20453);
var G__20460 = (0);
seq__19610_20429 = G__20457;
chunk__19612_20430 = G__20458;
count__19613_20431 = G__20459;
i__19614_20432 = G__20460;
continue;
} else {
var child_20461 = cljs.core.first(seq__19610_20452__$1);
if(cljs.core.truth_(child_20461)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_20461);


var G__20462 = cljs.core.next(seq__19610_20452__$1);
var G__20463 = null;
var G__20464 = (0);
var G__20465 = (0);
seq__19610_20429 = G__20462;
chunk__19612_20430 = G__20463;
count__19613_20431 = G__20464;
i__19614_20432 = G__20465;
continue;
} else {
var G__20466 = cljs.core.next(seq__19610_20452__$1);
var G__20467 = null;
var G__20468 = (0);
var G__20469 = (0);
seq__19610_20429 = G__20466;
chunk__19612_20430 = G__20467;
count__19613_20431 = G__20468;
i__19614_20432 = G__20469;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_20428);
}


var G__20471 = seq__19535_20420;
var G__20472 = chunk__19536_20421;
var G__20473 = count__19537_20422;
var G__20474 = (i__19538_20423 + (1));
seq__19535_20420 = G__20471;
chunk__19536_20421 = G__20472;
count__19537_20422 = G__20473;
i__19538_20423 = G__20474;
continue;
} else {
var temp__5804__auto___20475 = cljs.core.seq(seq__19535_20420);
if(temp__5804__auto___20475){
var seq__19535_20477__$1 = temp__5804__auto___20475;
if(cljs.core.chunked_seq_QMARK_(seq__19535_20477__$1)){
var c__5568__auto___20478 = cljs.core.chunk_first(seq__19535_20477__$1);
var G__20479 = cljs.core.chunk_rest(seq__19535_20477__$1);
var G__20480 = c__5568__auto___20478;
var G__20481 = cljs.core.count(c__5568__auto___20478);
var G__20482 = (0);
seq__19535_20420 = G__20479;
chunk__19536_20421 = G__20480;
count__19537_20422 = G__20481;
i__19538_20423 = G__20482;
continue;
} else {
var child_struct_20484 = cljs.core.first(seq__19535_20477__$1);
var children_20485 = shadow.dom.dom_node(child_struct_20484);
if(cljs.core.seq_QMARK_(children_20485)){
var seq__19635_20486 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_20485));
var chunk__19637_20487 = null;
var count__19638_20488 = (0);
var i__19639_20489 = (0);
while(true){
if((i__19639_20489 < count__19638_20488)){
var child_20490 = chunk__19637_20487.cljs$core$IIndexed$_nth$arity$2(null,i__19639_20489);
if(cljs.core.truth_(child_20490)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_20490);


var G__20491 = seq__19635_20486;
var G__20492 = chunk__19637_20487;
var G__20493 = count__19638_20488;
var G__20494 = (i__19639_20489 + (1));
seq__19635_20486 = G__20491;
chunk__19637_20487 = G__20492;
count__19638_20488 = G__20493;
i__19639_20489 = G__20494;
continue;
} else {
var G__20495 = seq__19635_20486;
var G__20496 = chunk__19637_20487;
var G__20497 = count__19638_20488;
var G__20498 = (i__19639_20489 + (1));
seq__19635_20486 = G__20495;
chunk__19637_20487 = G__20496;
count__19638_20488 = G__20497;
i__19639_20489 = G__20498;
continue;
}
} else {
var temp__5804__auto___20503__$1 = cljs.core.seq(seq__19635_20486);
if(temp__5804__auto___20503__$1){
var seq__19635_20504__$1 = temp__5804__auto___20503__$1;
if(cljs.core.chunked_seq_QMARK_(seq__19635_20504__$1)){
var c__5568__auto___20505 = cljs.core.chunk_first(seq__19635_20504__$1);
var G__20509 = cljs.core.chunk_rest(seq__19635_20504__$1);
var G__20510 = c__5568__auto___20505;
var G__20511 = cljs.core.count(c__5568__auto___20505);
var G__20512 = (0);
seq__19635_20486 = G__20509;
chunk__19637_20487 = G__20510;
count__19638_20488 = G__20511;
i__19639_20489 = G__20512;
continue;
} else {
var child_20513 = cljs.core.first(seq__19635_20504__$1);
if(cljs.core.truth_(child_20513)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_20513);


var G__20514 = cljs.core.next(seq__19635_20504__$1);
var G__20515 = null;
var G__20516 = (0);
var G__20517 = (0);
seq__19635_20486 = G__20514;
chunk__19637_20487 = G__20515;
count__19638_20488 = G__20516;
i__19639_20489 = G__20517;
continue;
} else {
var G__20518 = cljs.core.next(seq__19635_20504__$1);
var G__20519 = null;
var G__20520 = (0);
var G__20521 = (0);
seq__19635_20486 = G__20518;
chunk__19637_20487 = G__20519;
count__19638_20488 = G__20520;
i__19639_20489 = G__20521;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_20485);
}


var G__20525 = cljs.core.next(seq__19535_20477__$1);
var G__20526 = null;
var G__20527 = (0);
var G__20528 = (0);
seq__19535_20420 = G__20525;
chunk__19536_20421 = G__20526;
count__19537_20422 = G__20527;
i__19538_20423 = G__20528;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__19696 = cljs.core.seq(node);
var chunk__19699 = null;
var count__19700 = (0);
var i__19701 = (0);
while(true){
if((i__19701 < count__19700)){
var n = chunk__19699.cljs$core$IIndexed$_nth$arity$2(null,i__19701);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__20536 = seq__19696;
var G__20537 = chunk__19699;
var G__20538 = count__19700;
var G__20539 = (i__19701 + (1));
seq__19696 = G__20536;
chunk__19699 = G__20537;
count__19700 = G__20538;
i__19701 = G__20539;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19696);
if(temp__5804__auto__){
var seq__19696__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19696__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19696__$1);
var G__20543 = cljs.core.chunk_rest(seq__19696__$1);
var G__20544 = c__5568__auto__;
var G__20545 = cljs.core.count(c__5568__auto__);
var G__20546 = (0);
seq__19696 = G__20543;
chunk__19699 = G__20544;
count__19700 = G__20545;
i__19701 = G__20546;
continue;
} else {
var n = cljs.core.first(seq__19696__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__20550 = cljs.core.next(seq__19696__$1);
var G__20551 = null;
var G__20552 = (0);
var G__20553 = (0);
seq__19696 = G__20550;
chunk__19699 = G__20551;
count__19700 = G__20552;
i__19701 = G__20553;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__19711 = arguments.length;
switch (G__19711) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__19716 = arguments.length;
switch (G__19716) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__19731 = arguments.length;
switch (G__19731) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___20570 = arguments.length;
var i__5770__auto___20571 = (0);
while(true){
if((i__5770__auto___20571 < len__5769__auto___20570)){
args__5775__auto__.push((arguments[i__5770__auto___20571]));

var G__20572 = (i__5770__auto___20571 + (1));
i__5770__auto___20571 = G__20572;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__19774_20573 = cljs.core.seq(nodes);
var chunk__19775_20574 = null;
var count__19776_20575 = (0);
var i__19777_20576 = (0);
while(true){
if((i__19777_20576 < count__19776_20575)){
var node_20577 = chunk__19775_20574.cljs$core$IIndexed$_nth$arity$2(null,i__19777_20576);
fragment.appendChild(shadow.dom._to_dom(node_20577));


var G__20578 = seq__19774_20573;
var G__20579 = chunk__19775_20574;
var G__20580 = count__19776_20575;
var G__20581 = (i__19777_20576 + (1));
seq__19774_20573 = G__20578;
chunk__19775_20574 = G__20579;
count__19776_20575 = G__20580;
i__19777_20576 = G__20581;
continue;
} else {
var temp__5804__auto___20582 = cljs.core.seq(seq__19774_20573);
if(temp__5804__auto___20582){
var seq__19774_20583__$1 = temp__5804__auto___20582;
if(cljs.core.chunked_seq_QMARK_(seq__19774_20583__$1)){
var c__5568__auto___20584 = cljs.core.chunk_first(seq__19774_20583__$1);
var G__20585 = cljs.core.chunk_rest(seq__19774_20583__$1);
var G__20586 = c__5568__auto___20584;
var G__20587 = cljs.core.count(c__5568__auto___20584);
var G__20588 = (0);
seq__19774_20573 = G__20585;
chunk__19775_20574 = G__20586;
count__19776_20575 = G__20587;
i__19777_20576 = G__20588;
continue;
} else {
var node_20589 = cljs.core.first(seq__19774_20583__$1);
fragment.appendChild(shadow.dom._to_dom(node_20589));


var G__20590 = cljs.core.next(seq__19774_20583__$1);
var G__20591 = null;
var G__20592 = (0);
var G__20593 = (0);
seq__19774_20573 = G__20590;
chunk__19775_20574 = G__20591;
count__19776_20575 = G__20592;
i__19777_20576 = G__20593;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq19760){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19760));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__19810_20594 = cljs.core.seq(scripts);
var chunk__19811_20595 = null;
var count__19812_20596 = (0);
var i__19813_20597 = (0);
while(true){
if((i__19813_20597 < count__19812_20596)){
var vec__19835_20598 = chunk__19811_20595.cljs$core$IIndexed$_nth$arity$2(null,i__19813_20597);
var script_tag_20599 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19835_20598,(0),null);
var script_body_20600 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19835_20598,(1),null);
eval(script_body_20600);


var G__20601 = seq__19810_20594;
var G__20602 = chunk__19811_20595;
var G__20603 = count__19812_20596;
var G__20604 = (i__19813_20597 + (1));
seq__19810_20594 = G__20601;
chunk__19811_20595 = G__20602;
count__19812_20596 = G__20603;
i__19813_20597 = G__20604;
continue;
} else {
var temp__5804__auto___20605 = cljs.core.seq(seq__19810_20594);
if(temp__5804__auto___20605){
var seq__19810_20606__$1 = temp__5804__auto___20605;
if(cljs.core.chunked_seq_QMARK_(seq__19810_20606__$1)){
var c__5568__auto___20607 = cljs.core.chunk_first(seq__19810_20606__$1);
var G__20608 = cljs.core.chunk_rest(seq__19810_20606__$1);
var G__20609 = c__5568__auto___20607;
var G__20610 = cljs.core.count(c__5568__auto___20607);
var G__20611 = (0);
seq__19810_20594 = G__20608;
chunk__19811_20595 = G__20609;
count__19812_20596 = G__20610;
i__19813_20597 = G__20611;
continue;
} else {
var vec__19845_20612 = cljs.core.first(seq__19810_20606__$1);
var script_tag_20613 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19845_20612,(0),null);
var script_body_20614 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19845_20612,(1),null);
eval(script_body_20614);


var G__20615 = cljs.core.next(seq__19810_20606__$1);
var G__20616 = null;
var G__20617 = (0);
var G__20618 = (0);
seq__19810_20594 = G__20615;
chunk__19811_20595 = G__20616;
count__19812_20596 = G__20617;
i__19813_20597 = G__20618;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__19851){
var vec__19852 = p__19851;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19852,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19852,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__19880 = arguments.length;
switch (G__19880) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__19905 = cljs.core.seq(style_keys);
var chunk__19907 = null;
var count__19908 = (0);
var i__19909 = (0);
while(true){
if((i__19909 < count__19908)){
var it = chunk__19907.cljs$core$IIndexed$_nth$arity$2(null,i__19909);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__20624 = seq__19905;
var G__20625 = chunk__19907;
var G__20626 = count__19908;
var G__20627 = (i__19909 + (1));
seq__19905 = G__20624;
chunk__19907 = G__20625;
count__19908 = G__20626;
i__19909 = G__20627;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19905);
if(temp__5804__auto__){
var seq__19905__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19905__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19905__$1);
var G__20628 = cljs.core.chunk_rest(seq__19905__$1);
var G__20629 = c__5568__auto__;
var G__20630 = cljs.core.count(c__5568__auto__);
var G__20631 = (0);
seq__19905 = G__20628;
chunk__19907 = G__20629;
count__19908 = G__20630;
i__19909 = G__20631;
continue;
} else {
var it = cljs.core.first(seq__19905__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__20632 = cljs.core.next(seq__19905__$1);
var G__20633 = null;
var G__20634 = (0);
var G__20635 = (0);
seq__19905 = G__20632;
chunk__19907 = G__20633;
count__19908 = G__20634;
i__19909 = G__20635;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k19943,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__19966 = k19943;
var G__19966__$1 = (((G__19966 instanceof cljs.core.Keyword))?G__19966.fqn:null);
switch (G__19966__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19943,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__19971){
var vec__19973 = p__19971;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19973,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19973,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19942){
var self__ = this;
var G__19942__$1 = this;
return (new cljs.core.RecordIter((0),G__19942__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this19944,other19945){
var self__ = this;
var this19944__$1 = this;
return (((!((other19945 == null)))) && ((((this19944__$1.constructor === other19945.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19944__$1.x,other19945.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19944__$1.y,other19945.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19944__$1.__extmap,other19945.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k19943){
var self__ = this;
var this__5350__auto____$1 = this;
var G__20039 = k19943;
var G__20039__$1 = (((G__20039 instanceof cljs.core.Keyword))?G__20039.fqn:null);
switch (G__20039__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k19943);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__19942){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__20046 = cljs.core.keyword_identical_QMARK_;
var expr__20047 = k__5352__auto__;
if(cljs.core.truth_((pred__20046.cljs$core$IFn$_invoke$arity$2 ? pred__20046.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__20047) : pred__20046.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__20047)))){
return (new shadow.dom.Coordinate(G__19942,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__20046.cljs$core$IFn$_invoke$arity$2 ? pred__20046.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__20047) : pred__20046.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__20047)))){
return (new shadow.dom.Coordinate(self__.x,G__19942,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__19942),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__19942){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__19942,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__19947){
var extmap__5385__auto__ = (function (){var G__20066 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__19947,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__19947)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__20066);
} else {
return G__20066;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__19947),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__19947),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k20088,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__20107 = k20088;
var G__20107__$1 = (((G__20107 instanceof cljs.core.Keyword))?G__20107.fqn:null);
switch (G__20107__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20088,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__20114){
var vec__20115 = p__20114;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20115,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20115,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20087){
var self__ = this;
var G__20087__$1 = this;
return (new cljs.core.RecordIter((0),G__20087__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20089,other20090){
var self__ = this;
var this20089__$1 = this;
return (((!((other20090 == null)))) && ((((this20089__$1.constructor === other20090.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20089__$1.w,other20090.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20089__$1.h,other20090.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20089__$1.__extmap,other20090.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k20088){
var self__ = this;
var this__5350__auto____$1 = this;
var G__20131 = k20088;
var G__20131__$1 = (((G__20131 instanceof cljs.core.Keyword))?G__20131.fqn:null);
switch (G__20131__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k20088);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__20087){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__20132 = cljs.core.keyword_identical_QMARK_;
var expr__20133 = k__5352__auto__;
if(cljs.core.truth_((pred__20132.cljs$core$IFn$_invoke$arity$2 ? pred__20132.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__20133) : pred__20132.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__20133)))){
return (new shadow.dom.Size(G__20087,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__20132.cljs$core$IFn$_invoke$arity$2 ? pred__20132.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__20133) : pred__20132.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__20133)))){
return (new shadow.dom.Size(self__.w,G__20087,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__20087),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__20087){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__20087,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__20095){
var extmap__5385__auto__ = (function (){var G__20142 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__20095,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__20095)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__20142);
} else {
return G__20142;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__20095),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__20095),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__20669 = (i + (1));
var G__20670 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__20669;
ret = G__20670;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__20154){
var vec__20155 = p__20154;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20155,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20155,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__20159 = arguments.length;
switch (G__20159) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__20674 = ps;
var G__20675 = (i + (1));
el__$1 = G__20674;
i = G__20675;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__20173 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20173,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20173,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20173,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__20176_20685 = cljs.core.seq(props);
var chunk__20177_20686 = null;
var count__20178_20687 = (0);
var i__20179_20688 = (0);
while(true){
if((i__20179_20688 < count__20178_20687)){
var vec__20186_20689 = chunk__20177_20686.cljs$core$IIndexed$_nth$arity$2(null,i__20179_20688);
var k_20690 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20186_20689,(0),null);
var v_20691 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20186_20689,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_20690);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_20690),v_20691);


var G__20692 = seq__20176_20685;
var G__20693 = chunk__20177_20686;
var G__20694 = count__20178_20687;
var G__20695 = (i__20179_20688 + (1));
seq__20176_20685 = G__20692;
chunk__20177_20686 = G__20693;
count__20178_20687 = G__20694;
i__20179_20688 = G__20695;
continue;
} else {
var temp__5804__auto___20698 = cljs.core.seq(seq__20176_20685);
if(temp__5804__auto___20698){
var seq__20176_20699__$1 = temp__5804__auto___20698;
if(cljs.core.chunked_seq_QMARK_(seq__20176_20699__$1)){
var c__5568__auto___20700 = cljs.core.chunk_first(seq__20176_20699__$1);
var G__20701 = cljs.core.chunk_rest(seq__20176_20699__$1);
var G__20702 = c__5568__auto___20700;
var G__20703 = cljs.core.count(c__5568__auto___20700);
var G__20704 = (0);
seq__20176_20685 = G__20701;
chunk__20177_20686 = G__20702;
count__20178_20687 = G__20703;
i__20179_20688 = G__20704;
continue;
} else {
var vec__20189_20705 = cljs.core.first(seq__20176_20699__$1);
var k_20706 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20189_20705,(0),null);
var v_20707 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20189_20705,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_20706);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_20706),v_20707);


var G__20708 = cljs.core.next(seq__20176_20699__$1);
var G__20709 = null;
var G__20710 = (0);
var G__20711 = (0);
seq__20176_20685 = G__20708;
chunk__20177_20686 = G__20709;
count__20178_20687 = G__20710;
i__20179_20688 = G__20711;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__20193 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20193,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20193,(1),null);
var seq__20196_20715 = cljs.core.seq(node_children);
var chunk__20198_20716 = null;
var count__20199_20717 = (0);
var i__20200_20718 = (0);
while(true){
if((i__20200_20718 < count__20199_20717)){
var child_struct_20719 = chunk__20198_20716.cljs$core$IIndexed$_nth$arity$2(null,i__20200_20718);
if((!((child_struct_20719 == null)))){
if(typeof child_struct_20719 === 'string'){
var text_20720 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_20720),child_struct_20719].join(''));
} else {
var children_20721 = shadow.dom.svg_node(child_struct_20719);
if(cljs.core.seq_QMARK_(children_20721)){
var seq__20223_20722 = cljs.core.seq(children_20721);
var chunk__20225_20723 = null;
var count__20226_20724 = (0);
var i__20227_20725 = (0);
while(true){
if((i__20227_20725 < count__20226_20724)){
var child_20726 = chunk__20225_20723.cljs$core$IIndexed$_nth$arity$2(null,i__20227_20725);
if(cljs.core.truth_(child_20726)){
node.appendChild(child_20726);


var G__20727 = seq__20223_20722;
var G__20728 = chunk__20225_20723;
var G__20729 = count__20226_20724;
var G__20730 = (i__20227_20725 + (1));
seq__20223_20722 = G__20727;
chunk__20225_20723 = G__20728;
count__20226_20724 = G__20729;
i__20227_20725 = G__20730;
continue;
} else {
var G__20731 = seq__20223_20722;
var G__20732 = chunk__20225_20723;
var G__20733 = count__20226_20724;
var G__20734 = (i__20227_20725 + (1));
seq__20223_20722 = G__20731;
chunk__20225_20723 = G__20732;
count__20226_20724 = G__20733;
i__20227_20725 = G__20734;
continue;
}
} else {
var temp__5804__auto___20735 = cljs.core.seq(seq__20223_20722);
if(temp__5804__auto___20735){
var seq__20223_20736__$1 = temp__5804__auto___20735;
if(cljs.core.chunked_seq_QMARK_(seq__20223_20736__$1)){
var c__5568__auto___20737 = cljs.core.chunk_first(seq__20223_20736__$1);
var G__20738 = cljs.core.chunk_rest(seq__20223_20736__$1);
var G__20739 = c__5568__auto___20737;
var G__20740 = cljs.core.count(c__5568__auto___20737);
var G__20741 = (0);
seq__20223_20722 = G__20738;
chunk__20225_20723 = G__20739;
count__20226_20724 = G__20740;
i__20227_20725 = G__20741;
continue;
} else {
var child_20742 = cljs.core.first(seq__20223_20736__$1);
if(cljs.core.truth_(child_20742)){
node.appendChild(child_20742);


var G__20743 = cljs.core.next(seq__20223_20736__$1);
var G__20744 = null;
var G__20745 = (0);
var G__20746 = (0);
seq__20223_20722 = G__20743;
chunk__20225_20723 = G__20744;
count__20226_20724 = G__20745;
i__20227_20725 = G__20746;
continue;
} else {
var G__20747 = cljs.core.next(seq__20223_20736__$1);
var G__20748 = null;
var G__20749 = (0);
var G__20750 = (0);
seq__20223_20722 = G__20747;
chunk__20225_20723 = G__20748;
count__20226_20724 = G__20749;
i__20227_20725 = G__20750;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_20721);
}
}


var G__20751 = seq__20196_20715;
var G__20752 = chunk__20198_20716;
var G__20753 = count__20199_20717;
var G__20754 = (i__20200_20718 + (1));
seq__20196_20715 = G__20751;
chunk__20198_20716 = G__20752;
count__20199_20717 = G__20753;
i__20200_20718 = G__20754;
continue;
} else {
var G__20755 = seq__20196_20715;
var G__20756 = chunk__20198_20716;
var G__20757 = count__20199_20717;
var G__20758 = (i__20200_20718 + (1));
seq__20196_20715 = G__20755;
chunk__20198_20716 = G__20756;
count__20199_20717 = G__20757;
i__20200_20718 = G__20758;
continue;
}
} else {
var temp__5804__auto___20759 = cljs.core.seq(seq__20196_20715);
if(temp__5804__auto___20759){
var seq__20196_20760__$1 = temp__5804__auto___20759;
if(cljs.core.chunked_seq_QMARK_(seq__20196_20760__$1)){
var c__5568__auto___20766 = cljs.core.chunk_first(seq__20196_20760__$1);
var G__20768 = cljs.core.chunk_rest(seq__20196_20760__$1);
var G__20769 = c__5568__auto___20766;
var G__20770 = cljs.core.count(c__5568__auto___20766);
var G__20771 = (0);
seq__20196_20715 = G__20768;
chunk__20198_20716 = G__20769;
count__20199_20717 = G__20770;
i__20200_20718 = G__20771;
continue;
} else {
var child_struct_20775 = cljs.core.first(seq__20196_20760__$1);
if((!((child_struct_20775 == null)))){
if(typeof child_struct_20775 === 'string'){
var text_20777 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_20777),child_struct_20775].join(''));
} else {
var children_20779 = shadow.dom.svg_node(child_struct_20775);
if(cljs.core.seq_QMARK_(children_20779)){
var seq__20233_20780 = cljs.core.seq(children_20779);
var chunk__20235_20781 = null;
var count__20236_20782 = (0);
var i__20237_20783 = (0);
while(true){
if((i__20237_20783 < count__20236_20782)){
var child_20785 = chunk__20235_20781.cljs$core$IIndexed$_nth$arity$2(null,i__20237_20783);
if(cljs.core.truth_(child_20785)){
node.appendChild(child_20785);


var G__20786 = seq__20233_20780;
var G__20787 = chunk__20235_20781;
var G__20788 = count__20236_20782;
var G__20789 = (i__20237_20783 + (1));
seq__20233_20780 = G__20786;
chunk__20235_20781 = G__20787;
count__20236_20782 = G__20788;
i__20237_20783 = G__20789;
continue;
} else {
var G__20790 = seq__20233_20780;
var G__20791 = chunk__20235_20781;
var G__20792 = count__20236_20782;
var G__20793 = (i__20237_20783 + (1));
seq__20233_20780 = G__20790;
chunk__20235_20781 = G__20791;
count__20236_20782 = G__20792;
i__20237_20783 = G__20793;
continue;
}
} else {
var temp__5804__auto___20795__$1 = cljs.core.seq(seq__20233_20780);
if(temp__5804__auto___20795__$1){
var seq__20233_20796__$1 = temp__5804__auto___20795__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20233_20796__$1)){
var c__5568__auto___20797 = cljs.core.chunk_first(seq__20233_20796__$1);
var G__20798 = cljs.core.chunk_rest(seq__20233_20796__$1);
var G__20799 = c__5568__auto___20797;
var G__20800 = cljs.core.count(c__5568__auto___20797);
var G__20801 = (0);
seq__20233_20780 = G__20798;
chunk__20235_20781 = G__20799;
count__20236_20782 = G__20800;
i__20237_20783 = G__20801;
continue;
} else {
var child_20802 = cljs.core.first(seq__20233_20796__$1);
if(cljs.core.truth_(child_20802)){
node.appendChild(child_20802);


var G__20803 = cljs.core.next(seq__20233_20796__$1);
var G__20804 = null;
var G__20805 = (0);
var G__20806 = (0);
seq__20233_20780 = G__20803;
chunk__20235_20781 = G__20804;
count__20236_20782 = G__20805;
i__20237_20783 = G__20806;
continue;
} else {
var G__20807 = cljs.core.next(seq__20233_20796__$1);
var G__20808 = null;
var G__20809 = (0);
var G__20810 = (0);
seq__20233_20780 = G__20807;
chunk__20235_20781 = G__20808;
count__20236_20782 = G__20809;
i__20237_20783 = G__20810;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_20779);
}
}


var G__20811 = cljs.core.next(seq__20196_20760__$1);
var G__20812 = null;
var G__20813 = (0);
var G__20814 = (0);
seq__20196_20715 = G__20811;
chunk__20198_20716 = G__20812;
count__20199_20717 = G__20813;
i__20200_20718 = G__20814;
continue;
} else {
var G__20815 = cljs.core.next(seq__20196_20760__$1);
var G__20816 = null;
var G__20817 = (0);
var G__20818 = (0);
seq__20196_20715 = G__20815;
chunk__20198_20716 = G__20816;
count__20199_20717 = G__20817;
i__20200_20718 = G__20818;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___20824 = arguments.length;
var i__5770__auto___20825 = (0);
while(true){
if((i__5770__auto___20825 < len__5769__auto___20824)){
args__5775__auto__.push((arguments[i__5770__auto___20825]));

var G__20828 = (i__5770__auto___20825 + (1));
i__5770__auto___20825 = G__20828;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq20260){
var G__20261 = cljs.core.first(seq20260);
var seq20260__$1 = cljs.core.next(seq20260);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20261,seq20260__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__20294 = arguments.length;
switch (G__20294) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__15614__auto___20842 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15615__auto__ = (function (){var switch__15401__auto__ = (function (state_20308){
var state_val_20309 = (state_20308[(1)]);
if((state_val_20309 === (1))){
var state_20308__$1 = state_20308;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20308__$1,(2),once_or_cleanup);
} else {
if((state_val_20309 === (2))){
var inst_20305 = (state_20308[(2)]);
var inst_20306 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_20308__$1 = (function (){var statearr_20310 = state_20308;
(statearr_20310[(7)] = inst_20305);

return statearr_20310;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20308__$1,inst_20306);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__15402__auto__ = null;
var shadow$dom$state_machine__15402__auto____0 = (function (){
var statearr_20311 = [null,null,null,null,null,null,null,null];
(statearr_20311[(0)] = shadow$dom$state_machine__15402__auto__);

(statearr_20311[(1)] = (1));

return statearr_20311;
});
var shadow$dom$state_machine__15402__auto____1 = (function (state_20308){
while(true){
var ret_value__15403__auto__ = (function (){try{while(true){
var result__15404__auto__ = switch__15401__auto__(state_20308);
if(cljs.core.keyword_identical_QMARK_(result__15404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15404__auto__;
}
break;
}
}catch (e20312){var ex__15405__auto__ = e20312;
var statearr_20313_20844 = state_20308;
(statearr_20313_20844[(2)] = ex__15405__auto__);


if(cljs.core.seq((state_20308[(4)]))){
var statearr_20314_20845 = state_20308;
(statearr_20314_20845[(1)] = cljs.core.first((state_20308[(4)])));

} else {
throw ex__15405__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20849 = state_20308;
state_20308 = G__20849;
continue;
} else {
return ret_value__15403__auto__;
}
break;
}
});
shadow$dom$state_machine__15402__auto__ = function(state_20308){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__15402__auto____0.call(this);
case 1:
return shadow$dom$state_machine__15402__auto____1.call(this,state_20308);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__15402__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__15402__auto____0;
shadow$dom$state_machine__15402__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__15402__auto____1;
return shadow$dom$state_machine__15402__auto__;
})()
})();
var state__15616__auto__ = (function (){var statearr_20315 = f__15615__auto__();
(statearr_20315[(6)] = c__15614__auto___20842);

return statearr_20315;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15616__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
