goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__17484){
var map__17485 = p__17484;
var map__17485__$1 = cljs.core.__destructure_map(map__17485);
var runtime = map__17485__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17485__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_17798 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_17798)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__17506 = runtime;
var G__17507 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_17798);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__17506,G__17507) : shadow.remote.runtime.shared.process.call(null,G__17506,G__17507));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__17512,res){
var map__17513 = p__17512;
var map__17513__$1 = cljs.core.__destructure_map(map__17513);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17513__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17513__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__17514 = res;
var G__17514__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17514,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__17514);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17514__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__17514__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__17520 = arguments.length;
switch (G__17520) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__17523,msg,handlers,timeout_after_ms){
var map__17526 = p__17523;
var map__17526__$1 = cljs.core.__destructure_map(map__17526);
var runtime = map__17526__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17526__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___17824 = arguments.length;
var i__5770__auto___17826 = (0);
while(true){
if((i__5770__auto___17826 < len__5769__auto___17824)){
args__5775__auto__.push((arguments[i__5770__auto___17826]));

var G__17828 = (i__5770__auto___17826 + (1));
i__5770__auto___17826 = G__17828;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__17600,ev,args){
var map__17603 = p__17600;
var map__17603__$1 = cljs.core.__destructure_map(map__17603);
var runtime = map__17603__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17603__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__17607 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__17610 = null;
var count__17611 = (0);
var i__17612 = (0);
while(true){
if((i__17612 < count__17611)){
var ext = chunk__17610.cljs$core$IIndexed$_nth$arity$2(null,i__17612);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__17842 = seq__17607;
var G__17843 = chunk__17610;
var G__17844 = count__17611;
var G__17845 = (i__17612 + (1));
seq__17607 = G__17842;
chunk__17610 = G__17843;
count__17611 = G__17844;
i__17612 = G__17845;
continue;
} else {
var G__17846 = seq__17607;
var G__17847 = chunk__17610;
var G__17848 = count__17611;
var G__17849 = (i__17612 + (1));
seq__17607 = G__17846;
chunk__17610 = G__17847;
count__17611 = G__17848;
i__17612 = G__17849;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17607);
if(temp__5804__auto__){
var seq__17607__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17607__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17607__$1);
var G__17850 = cljs.core.chunk_rest(seq__17607__$1);
var G__17851 = c__5568__auto__;
var G__17852 = cljs.core.count(c__5568__auto__);
var G__17853 = (0);
seq__17607 = G__17850;
chunk__17610 = G__17851;
count__17611 = G__17852;
i__17612 = G__17853;
continue;
} else {
var ext = cljs.core.first(seq__17607__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__17859 = cljs.core.next(seq__17607__$1);
var G__17860 = null;
var G__17861 = (0);
var G__17862 = (0);
seq__17607 = G__17859;
chunk__17610 = G__17860;
count__17611 = G__17861;
i__17612 = G__17862;
continue;
} else {
var G__17863 = cljs.core.next(seq__17607__$1);
var G__17864 = null;
var G__17865 = (0);
var G__17866 = (0);
seq__17607 = G__17863;
chunk__17610 = G__17864;
count__17611 = G__17865;
i__17612 = G__17866;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq17584){
var G__17591 = cljs.core.first(seq17584);
var seq17584__$1 = cljs.core.next(seq17584);
var G__17592 = cljs.core.first(seq17584__$1);
var seq17584__$2 = cljs.core.next(seq17584__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17591,G__17592,seq17584__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__17660,p__17661){
var map__17662 = p__17660;
var map__17662__$1 = cljs.core.__destructure_map(map__17662);
var runtime = map__17662__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17662__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__17663 = p__17661;
var map__17663__$1 = cljs.core.__destructure_map(map__17663);
var msg = map__17663__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17663__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__17665 = cljs.core.deref(state_ref);
var map__17665__$1 = cljs.core.__destructure_map(map__17665);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17665__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17665__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__17676,msg){
var map__17678 = p__17676;
var map__17678__$1 = cljs.core.__destructure_map(map__17678);
var runtime = map__17678__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17678__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__17689,key,p__17690){
var map__17692 = p__17689;
var map__17692__$1 = cljs.core.__destructure_map(map__17692);
var state = map__17692__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17692__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__17693 = p__17690;
var map__17693__$1 = cljs.core.__destructure_map(map__17693);
var spec = map__17693__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17693__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__17700,key,spec){
var map__17701 = p__17700;
var map__17701__$1 = cljs.core.__destructure_map(map__17701);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17701__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__17703_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__17703_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__17704_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__17704_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__17705_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__17705_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__17706_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__17706_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__17707_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__17707_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__17715,key){
var map__17716 = p__17715;
var map__17716__$1 = cljs.core.__destructure_map(map__17716);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17716__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__17720,msg){
var map__17721 = p__17720;
var map__17721__$1 = cljs.core.__destructure_map(map__17721);
var runtime = map__17721__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17721__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__17722,p__17723){
var map__17724 = p__17722;
var map__17724__$1 = cljs.core.__destructure_map(map__17724);
var runtime = map__17724__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17724__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__17725 = p__17723;
var map__17725__$1 = cljs.core.__destructure_map(map__17725);
var msg = map__17725__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17725__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17725__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__17732 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__17734 = null;
var count__17735 = (0);
var i__17736 = (0);
while(true){
if((i__17736 < count__17735)){
var map__17756 = chunk__17734.cljs$core$IIndexed$_nth$arity$2(null,i__17736);
var map__17756__$1 = cljs.core.__destructure_map(map__17756);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17756__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__18022 = seq__17732;
var G__18023 = chunk__17734;
var G__18024 = count__17735;
var G__18025 = (i__17736 + (1));
seq__17732 = G__18022;
chunk__17734 = G__18023;
count__17735 = G__18024;
i__17736 = G__18025;
continue;
} else {
var G__18029 = seq__17732;
var G__18030 = chunk__17734;
var G__18031 = count__17735;
var G__18032 = (i__17736 + (1));
seq__17732 = G__18029;
chunk__17734 = G__18030;
count__17735 = G__18031;
i__17736 = G__18032;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17732);
if(temp__5804__auto__){
var seq__17732__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17732__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17732__$1);
var G__18042 = cljs.core.chunk_rest(seq__17732__$1);
var G__18043 = c__5568__auto__;
var G__18044 = cljs.core.count(c__5568__auto__);
var G__18045 = (0);
seq__17732 = G__18042;
chunk__17734 = G__18043;
count__17735 = G__18044;
i__17736 = G__18045;
continue;
} else {
var map__17774 = cljs.core.first(seq__17732__$1);
var map__17774__$1 = cljs.core.__destructure_map(map__17774);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17774__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__18058 = cljs.core.next(seq__17732__$1);
var G__18059 = null;
var G__18060 = (0);
var G__18061 = (0);
seq__17732 = G__18058;
chunk__17734 = G__18059;
count__17735 = G__18060;
i__17736 = G__18061;
continue;
} else {
var G__18062 = cljs.core.next(seq__17732__$1);
var G__18063 = null;
var G__18064 = (0);
var G__18065 = (0);
seq__17732 = G__18062;
chunk__17734 = G__18063;
count__17735 = G__18064;
i__17736 = G__18065;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
