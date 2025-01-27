goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__23678 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__23679 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__23679);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___23838 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___23838)){
var new_db_23839 = temp__5804__auto___23838;
var fexpr__23683_23840 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__23683_23840.cljs$core$IFn$_invoke$arity$1 ? fexpr__23683_23840.cljs$core$IFn$_invoke$arity$1(new_db_23839) : fexpr__23683_23840.call(null,new_db_23839));
} else {
}

var seq__23684 = cljs.core.seq(effects_without_db);
var chunk__23685 = null;
var count__23686 = (0);
var i__23687 = (0);
while(true){
if((i__23687 < count__23686)){
var vec__23700 = chunk__23685.cljs$core$IIndexed$_nth$arity$2(null,i__23687);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23700,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23700,(1),null);
var temp__5802__auto___23842 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___23842)){
var effect_fn_23843 = temp__5802__auto___23842;
(effect_fn_23843.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23843.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23843.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__23845 = seq__23684;
var G__23846 = chunk__23685;
var G__23847 = count__23686;
var G__23848 = (i__23687 + (1));
seq__23684 = G__23845;
chunk__23685 = G__23846;
count__23686 = G__23847;
i__23687 = G__23848;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23684);
if(temp__5804__auto__){
var seq__23684__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23684__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__23684__$1);
var G__23849 = cljs.core.chunk_rest(seq__23684__$1);
var G__23850 = c__5568__auto__;
var G__23851 = cljs.core.count(c__5568__auto__);
var G__23852 = (0);
seq__23684 = G__23849;
chunk__23685 = G__23850;
count__23686 = G__23851;
i__23687 = G__23852;
continue;
} else {
var vec__23703 = cljs.core.first(seq__23684__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23703,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23703,(1),null);
var temp__5802__auto___23853 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___23853)){
var effect_fn_23854 = temp__5802__auto___23853;
(effect_fn_23854.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23854.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23854.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__23855 = cljs.core.next(seq__23684__$1);
var G__23856 = null;
var G__23857 = (0);
var G__23858 = (0);
seq__23684 = G__23855;
chunk__23685 = G__23856;
count__23686 = G__23857;
i__23687 = G__23858;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__23115__auto___23859 = re_frame.interop.now();
var duration__23116__auto___23860 = (end__23115__auto___23859 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__23116__auto___23860,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__23115__auto___23859);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__23678);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___23861 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___23861)){
var new_db_23862 = temp__5804__auto___23861;
var fexpr__23715_23863 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__23715_23863.cljs$core$IFn$_invoke$arity$1 ? fexpr__23715_23863.cljs$core$IFn$_invoke$arity$1(new_db_23862) : fexpr__23715_23863.call(null,new_db_23862));
} else {
}

var seq__23718 = cljs.core.seq(effects_without_db);
var chunk__23719 = null;
var count__23720 = (0);
var i__23721 = (0);
while(true){
if((i__23721 < count__23720)){
var vec__23732 = chunk__23719.cljs$core$IIndexed$_nth$arity$2(null,i__23721);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23732,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23732,(1),null);
var temp__5802__auto___23864 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___23864)){
var effect_fn_23865 = temp__5802__auto___23864;
(effect_fn_23865.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23865.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23865.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__23866 = seq__23718;
var G__23867 = chunk__23719;
var G__23868 = count__23720;
var G__23869 = (i__23721 + (1));
seq__23718 = G__23866;
chunk__23719 = G__23867;
count__23720 = G__23868;
i__23721 = G__23869;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23718);
if(temp__5804__auto__){
var seq__23718__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23718__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__23718__$1);
var G__23870 = cljs.core.chunk_rest(seq__23718__$1);
var G__23871 = c__5568__auto__;
var G__23872 = cljs.core.count(c__5568__auto__);
var G__23873 = (0);
seq__23718 = G__23870;
chunk__23719 = G__23871;
count__23720 = G__23872;
i__23721 = G__23873;
continue;
} else {
var vec__23768 = cljs.core.first(seq__23718__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23768,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23768,(1),null);
var temp__5802__auto___23874 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___23874)){
var effect_fn_23875 = temp__5802__auto___23874;
(effect_fn_23875.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23875.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23875.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__23886 = cljs.core.next(seq__23718__$1);
var G__23887 = null;
var G__23888 = (0);
var G__23889 = (0);
seq__23718 = G__23886;
chunk__23719 = G__23887;
count__23720 = G__23888;
i__23721 = G__23889;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__23773){
var map__23774 = p__23773;
var map__23774__$1 = cljs.core.__destructure_map(map__23774);
var effect = map__23774__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23774__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23774__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__23776 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__23777 = null;
var count__23778 = (0);
var i__23779 = (0);
while(true){
if((i__23779 < count__23778)){
var effect = chunk__23777.cljs$core$IIndexed$_nth$arity$2(null,i__23779);
re_frame.fx.dispatch_later(effect);


var G__23890 = seq__23776;
var G__23891 = chunk__23777;
var G__23892 = count__23778;
var G__23893 = (i__23779 + (1));
seq__23776 = G__23890;
chunk__23777 = G__23891;
count__23778 = G__23892;
i__23779 = G__23893;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23776);
if(temp__5804__auto__){
var seq__23776__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23776__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__23776__$1);
var G__23894 = cljs.core.chunk_rest(seq__23776__$1);
var G__23895 = c__5568__auto__;
var G__23896 = cljs.core.count(c__5568__auto__);
var G__23897 = (0);
seq__23776 = G__23894;
chunk__23777 = G__23895;
count__23778 = G__23896;
i__23779 = G__23897;
continue;
} else {
var effect = cljs.core.first(seq__23776__$1);
re_frame.fx.dispatch_later(effect);


var G__23898 = cljs.core.next(seq__23776__$1);
var G__23899 = null;
var G__23900 = (0);
var G__23901 = (0);
seq__23776 = G__23898;
chunk__23777 = G__23899;
count__23778 = G__23900;
i__23779 = G__23901;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__23790 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__23791 = null;
var count__23792 = (0);
var i__23793 = (0);
while(true){
if((i__23793 < count__23792)){
var vec__23801 = chunk__23791.cljs$core$IIndexed$_nth$arity$2(null,i__23793);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23801,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23801,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___23903 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___23903)){
var effect_fn_23904 = temp__5802__auto___23903;
(effect_fn_23904.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23904.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23904.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__23905 = seq__23790;
var G__23906 = chunk__23791;
var G__23907 = count__23792;
var G__23908 = (i__23793 + (1));
seq__23790 = G__23905;
chunk__23791 = G__23906;
count__23792 = G__23907;
i__23793 = G__23908;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23790);
if(temp__5804__auto__){
var seq__23790__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23790__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__23790__$1);
var G__23918 = cljs.core.chunk_rest(seq__23790__$1);
var G__23919 = c__5568__auto__;
var G__23920 = cljs.core.count(c__5568__auto__);
var G__23921 = (0);
seq__23790 = G__23918;
chunk__23791 = G__23919;
count__23792 = G__23920;
i__23793 = G__23921;
continue;
} else {
var vec__23806 = cljs.core.first(seq__23790__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23806,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23806,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___23922 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___23922)){
var effect_fn_23923 = temp__5802__auto___23922;
(effect_fn_23923.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23923.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23923.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__23924 = cljs.core.next(seq__23790__$1);
var G__23925 = null;
var G__23926 = (0);
var G__23927 = (0);
seq__23790 = G__23924;
chunk__23791 = G__23925;
count__23792 = G__23926;
i__23793 = G__23927;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__23816 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__23817 = null;
var count__23818 = (0);
var i__23819 = (0);
while(true){
if((i__23819 < count__23818)){
var event = chunk__23817.cljs$core$IIndexed$_nth$arity$2(null,i__23819);
re_frame.router.dispatch(event);


var G__23929 = seq__23816;
var G__23930 = chunk__23817;
var G__23931 = count__23818;
var G__23932 = (i__23819 + (1));
seq__23816 = G__23929;
chunk__23817 = G__23930;
count__23818 = G__23931;
i__23819 = G__23932;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23816);
if(temp__5804__auto__){
var seq__23816__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23816__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__23816__$1);
var G__23935 = cljs.core.chunk_rest(seq__23816__$1);
var G__23936 = c__5568__auto__;
var G__23937 = cljs.core.count(c__5568__auto__);
var G__23938 = (0);
seq__23816 = G__23935;
chunk__23817 = G__23936;
count__23818 = G__23937;
i__23819 = G__23938;
continue;
} else {
var event = cljs.core.first(seq__23816__$1);
re_frame.router.dispatch(event);


var G__23939 = cljs.core.next(seq__23816__$1);
var G__23940 = null;
var G__23941 = (0);
var G__23942 = (0);
seq__23816 = G__23939;
chunk__23817 = G__23940;
count__23818 = G__23941;
i__23819 = G__23942;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__23823 = cljs.core.seq(value);
var chunk__23824 = null;
var count__23825 = (0);
var i__23826 = (0);
while(true){
if((i__23826 < count__23825)){
var event = chunk__23824.cljs$core$IIndexed$_nth$arity$2(null,i__23826);
clear_event(event);


var G__23943 = seq__23823;
var G__23944 = chunk__23824;
var G__23945 = count__23825;
var G__23946 = (i__23826 + (1));
seq__23823 = G__23943;
chunk__23824 = G__23944;
count__23825 = G__23945;
i__23826 = G__23946;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23823);
if(temp__5804__auto__){
var seq__23823__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23823__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__23823__$1);
var G__23947 = cljs.core.chunk_rest(seq__23823__$1);
var G__23948 = c__5568__auto__;
var G__23949 = cljs.core.count(c__5568__auto__);
var G__23950 = (0);
seq__23823 = G__23947;
chunk__23824 = G__23948;
count__23825 = G__23949;
i__23826 = G__23950;
continue;
} else {
var event = cljs.core.first(seq__23823__$1);
clear_event(event);


var G__23951 = cljs.core.next(seq__23823__$1);
var G__23952 = null;
var G__23953 = (0);
var G__23954 = (0);
seq__23823 = G__23951;
chunk__23824 = G__23952;
count__23825 = G__23953;
i__23826 = G__23954;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__23828 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__23829 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("reagent","quiescent","reagent/quiescent",-16138681)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__23829);

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__23115__auto___23955 = re_frame.interop.now();
var duration__23116__auto___23956 = (end__23115__auto___23955 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__23116__auto___23956,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__23115__auto___23955);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__23828);
}} else {
return null;
}
}
}));

//# sourceMappingURL=re_frame.fx.js.map
