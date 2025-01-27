goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__22348,p__22349){
var map__22350 = p__22348;
var map__22350__$1 = cljs.core.__destructure_map(map__22350);
var svc = map__22350__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22350__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22350__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22350__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__22351 = p__22349;
var map__22351__$1 = cljs.core.__destructure_map(map__22351);
var msg = map__22351__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22351__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22351__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22351__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22351__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__22366,p__22367){
var map__22368 = p__22366;
var map__22368__$1 = cljs.core.__destructure_map(map__22368);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22368__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__22369 = p__22367;
var map__22369__$1 = cljs.core.__destructure_map(map__22369);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22369__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__22374,p__22375){
var map__22376 = p__22374;
var map__22376__$1 = cljs.core.__destructure_map(map__22376);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22376__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22376__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__22377 = p__22375;
var map__22377__$1 = cljs.core.__destructure_map(map__22377);
var msg = map__22377__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22377__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__22389,tid){
var map__22390 = p__22389;
var map__22390__$1 = cljs.core.__destructure_map(map__22390);
var svc = map__22390__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22390__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__22402 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__22403 = null;
var count__22404 = (0);
var i__22405 = (0);
while(true){
if((i__22405 < count__22404)){
var vec__22412 = chunk__22403.cljs$core$IIndexed$_nth$arity$2(null,i__22405);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22412,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22412,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__22431 = seq__22402;
var G__22432 = chunk__22403;
var G__22433 = count__22404;
var G__22434 = (i__22405 + (1));
seq__22402 = G__22431;
chunk__22403 = G__22432;
count__22404 = G__22433;
i__22405 = G__22434;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22402);
if(temp__5804__auto__){
var seq__22402__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22402__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__22402__$1);
var G__22435 = cljs.core.chunk_rest(seq__22402__$1);
var G__22436 = c__5568__auto__;
var G__22437 = cljs.core.count(c__5568__auto__);
var G__22438 = (0);
seq__22402 = G__22435;
chunk__22403 = G__22436;
count__22404 = G__22437;
i__22405 = G__22438;
continue;
} else {
var vec__22417 = cljs.core.first(seq__22402__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22417,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22417,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__22439 = cljs.core.next(seq__22402__$1);
var G__22440 = null;
var G__22441 = (0);
var G__22442 = (0);
seq__22402 = G__22439;
chunk__22403 = G__22440;
count__22404 = G__22441;
i__22405 = G__22442;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__22391_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__22391_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__22392_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__22392_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__22393_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__22393_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__22394_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__22394_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__22422){
var map__22423 = p__22422;
var map__22423__$1 = cljs.core.__destructure_map(map__22423);
var svc = map__22423__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22423__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22423__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
