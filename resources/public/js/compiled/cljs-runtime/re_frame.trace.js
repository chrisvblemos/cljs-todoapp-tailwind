goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__23144){
var map__23145 = p__23144;
var map__23145__$1 = cljs.core.__destructure_map(map__23145);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23145__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23145__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23145__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23145__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__5045__auto__ = child_of;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__23149_23197 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__23150_23198 = null;
var count__23151_23199 = (0);
var i__23152_23200 = (0);
while(true){
if((i__23152_23200 < count__23151_23199)){
var vec__23163_23201 = chunk__23150_23198.cljs$core$IIndexed$_nth$arity$2(null,i__23152_23200);
var k_23202 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23163_23201,(0),null);
var cb_23203 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23163_23201,(1),null);
try{var G__23167_23204 = cljs.core.deref(re_frame.trace.traces);
(cb_23203.cljs$core$IFn$_invoke$arity$1 ? cb_23203.cljs$core$IFn$_invoke$arity$1(G__23167_23204) : cb_23203.call(null,G__23167_23204));
}catch (e23166){var e_23205 = e23166;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_23202,"while storing",cljs.core.deref(re_frame.trace.traces),e_23205], 0));
}

var G__23206 = seq__23149_23197;
var G__23207 = chunk__23150_23198;
var G__23208 = count__23151_23199;
var G__23209 = (i__23152_23200 + (1));
seq__23149_23197 = G__23206;
chunk__23150_23198 = G__23207;
count__23151_23199 = G__23208;
i__23152_23200 = G__23209;
continue;
} else {
var temp__5804__auto___23210 = cljs.core.seq(seq__23149_23197);
if(temp__5804__auto___23210){
var seq__23149_23211__$1 = temp__5804__auto___23210;
if(cljs.core.chunked_seq_QMARK_(seq__23149_23211__$1)){
var c__5568__auto___23212 = cljs.core.chunk_first(seq__23149_23211__$1);
var G__23213 = cljs.core.chunk_rest(seq__23149_23211__$1);
var G__23214 = c__5568__auto___23212;
var G__23215 = cljs.core.count(c__5568__auto___23212);
var G__23216 = (0);
seq__23149_23197 = G__23213;
chunk__23150_23198 = G__23214;
count__23151_23199 = G__23215;
i__23152_23200 = G__23216;
continue;
} else {
var vec__23171_23217 = cljs.core.first(seq__23149_23211__$1);
var k_23218 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23171_23217,(0),null);
var cb_23219 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23171_23217,(1),null);
try{var G__23184_23220 = cljs.core.deref(re_frame.trace.traces);
(cb_23219.cljs$core$IFn$_invoke$arity$1 ? cb_23219.cljs$core$IFn$_invoke$arity$1(G__23184_23220) : cb_23219.call(null,G__23184_23220));
}catch (e23174){var e_23221 = e23174;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_23218,"while storing",cljs.core.deref(re_frame.trace.traces),e_23221], 0));
}

var G__23222 = cljs.core.next(seq__23149_23211__$1);
var G__23223 = null;
var G__23224 = (0);
var G__23225 = (0);
seq__23149_23197 = G__23222;
chunk__23150_23198 = G__23223;
count__23151_23199 = G__23224;
i__23152_23200 = G__23225;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
