goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___24041 = arguments.length;
var i__5770__auto___24042 = (0);
while(true){
if((i__5770__auto___24042 < len__5769__auto___24041)){
args__5775__auto__.push((arguments[i__5770__auto___24042]));

var G__24043 = (i__5770__auto___24042 + (1));
i__5770__auto___24042 = G__24043;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq23320){
var G__23321 = cljs.core.first(seq23320);
var seq23320__$1 = cljs.core.next(seq23320);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23321,seq23320__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__23341 = cljs.core.seq(sources);
var chunk__23342 = null;
var count__23343 = (0);
var i__23344 = (0);
while(true){
if((i__23344 < count__23343)){
var map__23358 = chunk__23342.cljs$core$IIndexed$_nth$arity$2(null,i__23344);
var map__23358__$1 = cljs.core.__destructure_map(map__23358);
var src = map__23358__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23358__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23358__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23358__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23358__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e23359){var e_24044 = e23359;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_24044);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_24044.message)].join('')));
}

var G__24045 = seq__23341;
var G__24046 = chunk__23342;
var G__24047 = count__23343;
var G__24048 = (i__23344 + (1));
seq__23341 = G__24045;
chunk__23342 = G__24046;
count__23343 = G__24047;
i__23344 = G__24048;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23341);
if(temp__5804__auto__){
var seq__23341__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23341__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__23341__$1);
var G__24049 = cljs.core.chunk_rest(seq__23341__$1);
var G__24050 = c__5568__auto__;
var G__24051 = cljs.core.count(c__5568__auto__);
var G__24052 = (0);
seq__23341 = G__24049;
chunk__23342 = G__24050;
count__23343 = G__24051;
i__23344 = G__24052;
continue;
} else {
var map__23371 = cljs.core.first(seq__23341__$1);
var map__23371__$1 = cljs.core.__destructure_map(map__23371);
var src = map__23371__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23371__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23371__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23371__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23371__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e23372){var e_24057 = e23372;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_24057);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_24057.message)].join('')));
}

var G__24058 = cljs.core.next(seq__23341__$1);
var G__24059 = null;
var G__24060 = (0);
var G__24061 = (0);
seq__23341 = G__24058;
chunk__23342 = G__24059;
count__23343 = G__24060;
i__23344 = G__24061;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__23393 = cljs.core.seq(js_requires);
var chunk__23394 = null;
var count__23395 = (0);
var i__23396 = (0);
while(true){
if((i__23396 < count__23395)){
var js_ns = chunk__23394.cljs$core$IIndexed$_nth$arity$2(null,i__23396);
var require_str_24062 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_24062);


var G__24063 = seq__23393;
var G__24064 = chunk__23394;
var G__24065 = count__23395;
var G__24066 = (i__23396 + (1));
seq__23393 = G__24063;
chunk__23394 = G__24064;
count__23395 = G__24065;
i__23396 = G__24066;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23393);
if(temp__5804__auto__){
var seq__23393__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23393__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__23393__$1);
var G__24067 = cljs.core.chunk_rest(seq__23393__$1);
var G__24068 = c__5568__auto__;
var G__24069 = cljs.core.count(c__5568__auto__);
var G__24070 = (0);
seq__23393 = G__24067;
chunk__23394 = G__24068;
count__23395 = G__24069;
i__23396 = G__24070;
continue;
} else {
var js_ns = cljs.core.first(seq__23393__$1);
var require_str_24071 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_24071);


var G__24072 = cljs.core.next(seq__23393__$1);
var G__24073 = null;
var G__24074 = (0);
var G__24075 = (0);
seq__23393 = G__24072;
chunk__23394 = G__24073;
count__23395 = G__24074;
i__23396 = G__24075;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__23444){
var map__23445 = p__23444;
var map__23445__$1 = cljs.core.__destructure_map(map__23445);
var msg = map__23445__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23445__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23445__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__23446(s__23447){
return (new cljs.core.LazySeq(null,(function (){
var s__23447__$1 = s__23447;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__23447__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__23455 = cljs.core.first(xs__6360__auto__);
var map__23455__$1 = cljs.core.__destructure_map(map__23455);
var src = map__23455__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23455__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23455__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__23447__$1,map__23455,map__23455__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__23445,map__23445__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__23446_$_iter__23448(s__23449){
return (new cljs.core.LazySeq(null,((function (s__23447__$1,map__23455,map__23455__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__23445,map__23445__$1,msg,info,reload_info){
return (function (){
var s__23449__$1 = s__23449;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__23449__$1);
if(temp__5804__auto____$1){
var s__23449__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__23449__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__23449__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__23451 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__23450 = (0);
while(true){
if((i__23450 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__23450);
cljs.core.chunk_append(b__23451,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__24076 = (i__23450 + (1));
i__23450 = G__24076;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23451),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__23446_$_iter__23448(cljs.core.chunk_rest(s__23449__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23451),null);
}
} else {
var warning = cljs.core.first(s__23449__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__23446_$_iter__23448(cljs.core.rest(s__23449__$2)));
}
} else {
return null;
}
break;
}
});})(s__23447__$1,map__23455,map__23455__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__23445,map__23445__$1,msg,info,reload_info))
,null,null));
});})(s__23447__$1,map__23455,map__23455__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__23445,map__23445__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__23446(cljs.core.rest(s__23447__$1)));
} else {
var G__24077 = cljs.core.rest(s__23447__$1);
s__23447__$1 = G__24077;
continue;
}
} else {
var G__24078 = cljs.core.rest(s__23447__$1);
s__23447__$1 = G__24078;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__23467_24079 = cljs.core.seq(warnings);
var chunk__23468_24080 = null;
var count__23469_24081 = (0);
var i__23470_24082 = (0);
while(true){
if((i__23470_24082 < count__23469_24081)){
var map__23481_24083 = chunk__23468_24080.cljs$core$IIndexed$_nth$arity$2(null,i__23470_24082);
var map__23481_24085__$1 = cljs.core.__destructure_map(map__23481_24083);
var w_24086 = map__23481_24085__$1;
var msg_24087__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23481_24085__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_24088 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23481_24085__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_24089 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23481_24085__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_24090 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23481_24085__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_24090)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_24088),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_24089),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_24087__$1)].join(''));


var G__24092 = seq__23467_24079;
var G__24093 = chunk__23468_24080;
var G__24094 = count__23469_24081;
var G__24095 = (i__23470_24082 + (1));
seq__23467_24079 = G__24092;
chunk__23468_24080 = G__24093;
count__23469_24081 = G__24094;
i__23470_24082 = G__24095;
continue;
} else {
var temp__5804__auto___24096 = cljs.core.seq(seq__23467_24079);
if(temp__5804__auto___24096){
var seq__23467_24097__$1 = temp__5804__auto___24096;
if(cljs.core.chunked_seq_QMARK_(seq__23467_24097__$1)){
var c__5568__auto___24098 = cljs.core.chunk_first(seq__23467_24097__$1);
var G__24099 = cljs.core.chunk_rest(seq__23467_24097__$1);
var G__24100 = c__5568__auto___24098;
var G__24101 = cljs.core.count(c__5568__auto___24098);
var G__24102 = (0);
seq__23467_24079 = G__24099;
chunk__23468_24080 = G__24100;
count__23469_24081 = G__24101;
i__23470_24082 = G__24102;
continue;
} else {
var map__23489_24103 = cljs.core.first(seq__23467_24097__$1);
var map__23489_24104__$1 = cljs.core.__destructure_map(map__23489_24103);
var w_24105 = map__23489_24104__$1;
var msg_24106__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23489_24104__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_24107 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23489_24104__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_24108 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23489_24104__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_24109 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23489_24104__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_24109)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_24107),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_24108),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_24106__$1)].join(''));


var G__24111 = cljs.core.next(seq__23467_24097__$1);
var G__24112 = null;
var G__24113 = (0);
var G__24114 = (0);
seq__23467_24079 = G__24111;
chunk__23468_24080 = G__24112;
count__23469_24081 = G__24113;
i__23470_24082 = G__24114;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__23428_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__23428_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__23500){
var map__23501 = p__23500;
var map__23501__$1 = cljs.core.__destructure_map(map__23501);
var msg = map__23501__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23501__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23501__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__23504 = cljs.core.seq(updates);
var chunk__23507 = null;
var count__23508 = (0);
var i__23509 = (0);
while(true){
if((i__23509 < count__23508)){
var path = chunk__23507.cljs$core$IIndexed$_nth$arity$2(null,i__23509);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__23747_24115 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__23751_24116 = null;
var count__23752_24117 = (0);
var i__23753_24118 = (0);
while(true){
if((i__23753_24118 < count__23752_24117)){
var node_24119 = chunk__23751_24116.cljs$core$IIndexed$_nth$arity$2(null,i__23753_24118);
if(cljs.core.not(node_24119.shadow$old)){
var path_match_24120 = shadow.cljs.devtools.client.browser.match_paths(node_24119.getAttribute("href"),path);
if(cljs.core.truth_(path_match_24120)){
var new_link_24121 = (function (){var G__23805 = node_24119.cloneNode(true);
G__23805.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_24120),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__23805;
})();
(node_24119.shadow$old = true);

(new_link_24121.onload = ((function (seq__23747_24115,chunk__23751_24116,count__23752_24117,i__23753_24118,seq__23504,chunk__23507,count__23508,i__23509,new_link_24121,path_match_24120,node_24119,path,map__23501,map__23501__$1,msg,updates,reload_info){
return (function (e){
var seq__23809_24123 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__23811_24124 = null;
var count__23812_24125 = (0);
var i__23813_24126 = (0);
while(true){
if((i__23813_24126 < count__23812_24125)){
var map__23821_24127 = chunk__23811_24124.cljs$core$IIndexed$_nth$arity$2(null,i__23813_24126);
var map__23821_24128__$1 = cljs.core.__destructure_map(map__23821_24127);
var task_24129 = map__23821_24128__$1;
var fn_str_24130 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23821_24128__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_24131 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23821_24128__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_24132 = goog.getObjectByName(fn_str_24130,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_24131)].join(''));

(fn_obj_24132.cljs$core$IFn$_invoke$arity$2 ? fn_obj_24132.cljs$core$IFn$_invoke$arity$2(path,new_link_24121) : fn_obj_24132.call(null,path,new_link_24121));


var G__24133 = seq__23809_24123;
var G__24134 = chunk__23811_24124;
var G__24135 = count__23812_24125;
var G__24136 = (i__23813_24126 + (1));
seq__23809_24123 = G__24133;
chunk__23811_24124 = G__24134;
count__23812_24125 = G__24135;
i__23813_24126 = G__24136;
continue;
} else {
var temp__5804__auto___24137 = cljs.core.seq(seq__23809_24123);
if(temp__5804__auto___24137){
var seq__23809_24138__$1 = temp__5804__auto___24137;
if(cljs.core.chunked_seq_QMARK_(seq__23809_24138__$1)){
var c__5568__auto___24139 = cljs.core.chunk_first(seq__23809_24138__$1);
var G__24140 = cljs.core.chunk_rest(seq__23809_24138__$1);
var G__24141 = c__5568__auto___24139;
var G__24142 = cljs.core.count(c__5568__auto___24139);
var G__24143 = (0);
seq__23809_24123 = G__24140;
chunk__23811_24124 = G__24141;
count__23812_24125 = G__24142;
i__23813_24126 = G__24143;
continue;
} else {
var map__23822_24144 = cljs.core.first(seq__23809_24138__$1);
var map__23822_24145__$1 = cljs.core.__destructure_map(map__23822_24144);
var task_24146 = map__23822_24145__$1;
var fn_str_24147 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23822_24145__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_24148 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23822_24145__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_24149 = goog.getObjectByName(fn_str_24147,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_24148)].join(''));

(fn_obj_24149.cljs$core$IFn$_invoke$arity$2 ? fn_obj_24149.cljs$core$IFn$_invoke$arity$2(path,new_link_24121) : fn_obj_24149.call(null,path,new_link_24121));


var G__24150 = cljs.core.next(seq__23809_24138__$1);
var G__24151 = null;
var G__24152 = (0);
var G__24153 = (0);
seq__23809_24123 = G__24150;
chunk__23811_24124 = G__24151;
count__23812_24125 = G__24152;
i__23813_24126 = G__24153;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_24119);
});})(seq__23747_24115,chunk__23751_24116,count__23752_24117,i__23753_24118,seq__23504,chunk__23507,count__23508,i__23509,new_link_24121,path_match_24120,node_24119,path,map__23501,map__23501__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_24120], 0));

goog.dom.insertSiblingAfter(new_link_24121,node_24119);


var G__24154 = seq__23747_24115;
var G__24155 = chunk__23751_24116;
var G__24156 = count__23752_24117;
var G__24157 = (i__23753_24118 + (1));
seq__23747_24115 = G__24154;
chunk__23751_24116 = G__24155;
count__23752_24117 = G__24156;
i__23753_24118 = G__24157;
continue;
} else {
var G__24158 = seq__23747_24115;
var G__24159 = chunk__23751_24116;
var G__24160 = count__23752_24117;
var G__24161 = (i__23753_24118 + (1));
seq__23747_24115 = G__24158;
chunk__23751_24116 = G__24159;
count__23752_24117 = G__24160;
i__23753_24118 = G__24161;
continue;
}
} else {
var G__24162 = seq__23747_24115;
var G__24163 = chunk__23751_24116;
var G__24164 = count__23752_24117;
var G__24165 = (i__23753_24118 + (1));
seq__23747_24115 = G__24162;
chunk__23751_24116 = G__24163;
count__23752_24117 = G__24164;
i__23753_24118 = G__24165;
continue;
}
} else {
var temp__5804__auto___24166 = cljs.core.seq(seq__23747_24115);
if(temp__5804__auto___24166){
var seq__23747_24167__$1 = temp__5804__auto___24166;
if(cljs.core.chunked_seq_QMARK_(seq__23747_24167__$1)){
var c__5568__auto___24168 = cljs.core.chunk_first(seq__23747_24167__$1);
var G__24169 = cljs.core.chunk_rest(seq__23747_24167__$1);
var G__24170 = c__5568__auto___24168;
var G__24171 = cljs.core.count(c__5568__auto___24168);
var G__24172 = (0);
seq__23747_24115 = G__24169;
chunk__23751_24116 = G__24170;
count__23752_24117 = G__24171;
i__23753_24118 = G__24172;
continue;
} else {
var node_24173 = cljs.core.first(seq__23747_24167__$1);
if(cljs.core.not(node_24173.shadow$old)){
var path_match_24174 = shadow.cljs.devtools.client.browser.match_paths(node_24173.getAttribute("href"),path);
if(cljs.core.truth_(path_match_24174)){
var new_link_24175 = (function (){var G__23827 = node_24173.cloneNode(true);
G__23827.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_24174),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__23827;
})();
(node_24173.shadow$old = true);

(new_link_24175.onload = ((function (seq__23747_24115,chunk__23751_24116,count__23752_24117,i__23753_24118,seq__23504,chunk__23507,count__23508,i__23509,new_link_24175,path_match_24174,node_24173,seq__23747_24167__$1,temp__5804__auto___24166,path,map__23501,map__23501__$1,msg,updates,reload_info){
return (function (e){
var seq__23830_24176 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__23832_24177 = null;
var count__23833_24178 = (0);
var i__23834_24179 = (0);
while(true){
if((i__23834_24179 < count__23833_24178)){
var map__23841_24180 = chunk__23832_24177.cljs$core$IIndexed$_nth$arity$2(null,i__23834_24179);
var map__23841_24181__$1 = cljs.core.__destructure_map(map__23841_24180);
var task_24182 = map__23841_24181__$1;
var fn_str_24183 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23841_24181__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_24184 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23841_24181__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_24185 = goog.getObjectByName(fn_str_24183,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_24184)].join(''));

(fn_obj_24185.cljs$core$IFn$_invoke$arity$2 ? fn_obj_24185.cljs$core$IFn$_invoke$arity$2(path,new_link_24175) : fn_obj_24185.call(null,path,new_link_24175));


var G__24186 = seq__23830_24176;
var G__24187 = chunk__23832_24177;
var G__24188 = count__23833_24178;
var G__24189 = (i__23834_24179 + (1));
seq__23830_24176 = G__24186;
chunk__23832_24177 = G__24187;
count__23833_24178 = G__24188;
i__23834_24179 = G__24189;
continue;
} else {
var temp__5804__auto___24190__$1 = cljs.core.seq(seq__23830_24176);
if(temp__5804__auto___24190__$1){
var seq__23830_24191__$1 = temp__5804__auto___24190__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23830_24191__$1)){
var c__5568__auto___24192 = cljs.core.chunk_first(seq__23830_24191__$1);
var G__24193 = cljs.core.chunk_rest(seq__23830_24191__$1);
var G__24194 = c__5568__auto___24192;
var G__24195 = cljs.core.count(c__5568__auto___24192);
var G__24196 = (0);
seq__23830_24176 = G__24193;
chunk__23832_24177 = G__24194;
count__23833_24178 = G__24195;
i__23834_24179 = G__24196;
continue;
} else {
var map__23844_24197 = cljs.core.first(seq__23830_24191__$1);
var map__23844_24198__$1 = cljs.core.__destructure_map(map__23844_24197);
var task_24199 = map__23844_24198__$1;
var fn_str_24200 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23844_24198__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_24201 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23844_24198__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_24202 = goog.getObjectByName(fn_str_24200,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_24201)].join(''));

(fn_obj_24202.cljs$core$IFn$_invoke$arity$2 ? fn_obj_24202.cljs$core$IFn$_invoke$arity$2(path,new_link_24175) : fn_obj_24202.call(null,path,new_link_24175));


var G__24203 = cljs.core.next(seq__23830_24191__$1);
var G__24204 = null;
var G__24205 = (0);
var G__24206 = (0);
seq__23830_24176 = G__24203;
chunk__23832_24177 = G__24204;
count__23833_24178 = G__24205;
i__23834_24179 = G__24206;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_24173);
});})(seq__23747_24115,chunk__23751_24116,count__23752_24117,i__23753_24118,seq__23504,chunk__23507,count__23508,i__23509,new_link_24175,path_match_24174,node_24173,seq__23747_24167__$1,temp__5804__auto___24166,path,map__23501,map__23501__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_24174], 0));

goog.dom.insertSiblingAfter(new_link_24175,node_24173);


var G__24207 = cljs.core.next(seq__23747_24167__$1);
var G__24208 = null;
var G__24209 = (0);
var G__24210 = (0);
seq__23747_24115 = G__24207;
chunk__23751_24116 = G__24208;
count__23752_24117 = G__24209;
i__23753_24118 = G__24210;
continue;
} else {
var G__24211 = cljs.core.next(seq__23747_24167__$1);
var G__24212 = null;
var G__24213 = (0);
var G__24214 = (0);
seq__23747_24115 = G__24211;
chunk__23751_24116 = G__24212;
count__23752_24117 = G__24213;
i__23753_24118 = G__24214;
continue;
}
} else {
var G__24215 = cljs.core.next(seq__23747_24167__$1);
var G__24216 = null;
var G__24217 = (0);
var G__24218 = (0);
seq__23747_24115 = G__24215;
chunk__23751_24116 = G__24216;
count__23752_24117 = G__24217;
i__23753_24118 = G__24218;
continue;
}
}
} else {
}
}
break;
}


var G__24219 = seq__23504;
var G__24220 = chunk__23507;
var G__24221 = count__23508;
var G__24222 = (i__23509 + (1));
seq__23504 = G__24219;
chunk__23507 = G__24220;
count__23508 = G__24221;
i__23509 = G__24222;
continue;
} else {
var G__24224 = seq__23504;
var G__24225 = chunk__23507;
var G__24226 = count__23508;
var G__24227 = (i__23509 + (1));
seq__23504 = G__24224;
chunk__23507 = G__24225;
count__23508 = G__24226;
i__23509 = G__24227;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23504);
if(temp__5804__auto__){
var seq__23504__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23504__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__23504__$1);
var G__24228 = cljs.core.chunk_rest(seq__23504__$1);
var G__24229 = c__5568__auto__;
var G__24230 = cljs.core.count(c__5568__auto__);
var G__24231 = (0);
seq__23504 = G__24228;
chunk__23507 = G__24229;
count__23508 = G__24230;
i__23509 = G__24231;
continue;
} else {
var path = cljs.core.first(seq__23504__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__23876_24232 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__23880_24233 = null;
var count__23881_24234 = (0);
var i__23882_24235 = (0);
while(true){
if((i__23882_24235 < count__23881_24234)){
var node_24236 = chunk__23880_24233.cljs$core$IIndexed$_nth$arity$2(null,i__23882_24235);
if(cljs.core.not(node_24236.shadow$old)){
var path_match_24237 = shadow.cljs.devtools.client.browser.match_paths(node_24236.getAttribute("href"),path);
if(cljs.core.truth_(path_match_24237)){
var new_link_24238 = (function (){var G__23980 = node_24236.cloneNode(true);
G__23980.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_24237),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__23980;
})();
(node_24236.shadow$old = true);

(new_link_24238.onload = ((function (seq__23876_24232,chunk__23880_24233,count__23881_24234,i__23882_24235,seq__23504,chunk__23507,count__23508,i__23509,new_link_24238,path_match_24237,node_24236,path,seq__23504__$1,temp__5804__auto__,map__23501,map__23501__$1,msg,updates,reload_info){
return (function (e){
var seq__23981_24240 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__23983_24241 = null;
var count__23984_24242 = (0);
var i__23985_24243 = (0);
while(true){
if((i__23985_24243 < count__23984_24242)){
var map__23989_24244 = chunk__23983_24241.cljs$core$IIndexed$_nth$arity$2(null,i__23985_24243);
var map__23989_24245__$1 = cljs.core.__destructure_map(map__23989_24244);
var task_24246 = map__23989_24245__$1;
var fn_str_24247 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23989_24245__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_24248 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23989_24245__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_24249 = goog.getObjectByName(fn_str_24247,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_24248)].join(''));

(fn_obj_24249.cljs$core$IFn$_invoke$arity$2 ? fn_obj_24249.cljs$core$IFn$_invoke$arity$2(path,new_link_24238) : fn_obj_24249.call(null,path,new_link_24238));


var G__24250 = seq__23981_24240;
var G__24251 = chunk__23983_24241;
var G__24252 = count__23984_24242;
var G__24253 = (i__23985_24243 + (1));
seq__23981_24240 = G__24250;
chunk__23983_24241 = G__24251;
count__23984_24242 = G__24252;
i__23985_24243 = G__24253;
continue;
} else {
var temp__5804__auto___24255__$1 = cljs.core.seq(seq__23981_24240);
if(temp__5804__auto___24255__$1){
var seq__23981_24256__$1 = temp__5804__auto___24255__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23981_24256__$1)){
var c__5568__auto___24257 = cljs.core.chunk_first(seq__23981_24256__$1);
var G__24258 = cljs.core.chunk_rest(seq__23981_24256__$1);
var G__24259 = c__5568__auto___24257;
var G__24260 = cljs.core.count(c__5568__auto___24257);
var G__24261 = (0);
seq__23981_24240 = G__24258;
chunk__23983_24241 = G__24259;
count__23984_24242 = G__24260;
i__23985_24243 = G__24261;
continue;
} else {
var map__23990_24262 = cljs.core.first(seq__23981_24256__$1);
var map__23990_24263__$1 = cljs.core.__destructure_map(map__23990_24262);
var task_24264 = map__23990_24263__$1;
var fn_str_24265 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23990_24263__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_24266 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23990_24263__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_24267 = goog.getObjectByName(fn_str_24265,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_24266)].join(''));

(fn_obj_24267.cljs$core$IFn$_invoke$arity$2 ? fn_obj_24267.cljs$core$IFn$_invoke$arity$2(path,new_link_24238) : fn_obj_24267.call(null,path,new_link_24238));


var G__24269 = cljs.core.next(seq__23981_24256__$1);
var G__24270 = null;
var G__24271 = (0);
var G__24272 = (0);
seq__23981_24240 = G__24269;
chunk__23983_24241 = G__24270;
count__23984_24242 = G__24271;
i__23985_24243 = G__24272;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_24236);
});})(seq__23876_24232,chunk__23880_24233,count__23881_24234,i__23882_24235,seq__23504,chunk__23507,count__23508,i__23509,new_link_24238,path_match_24237,node_24236,path,seq__23504__$1,temp__5804__auto__,map__23501,map__23501__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_24237], 0));

goog.dom.insertSiblingAfter(new_link_24238,node_24236);


var G__24273 = seq__23876_24232;
var G__24274 = chunk__23880_24233;
var G__24275 = count__23881_24234;
var G__24276 = (i__23882_24235 + (1));
seq__23876_24232 = G__24273;
chunk__23880_24233 = G__24274;
count__23881_24234 = G__24275;
i__23882_24235 = G__24276;
continue;
} else {
var G__24277 = seq__23876_24232;
var G__24278 = chunk__23880_24233;
var G__24279 = count__23881_24234;
var G__24280 = (i__23882_24235 + (1));
seq__23876_24232 = G__24277;
chunk__23880_24233 = G__24278;
count__23881_24234 = G__24279;
i__23882_24235 = G__24280;
continue;
}
} else {
var G__24281 = seq__23876_24232;
var G__24282 = chunk__23880_24233;
var G__24283 = count__23881_24234;
var G__24284 = (i__23882_24235 + (1));
seq__23876_24232 = G__24281;
chunk__23880_24233 = G__24282;
count__23881_24234 = G__24283;
i__23882_24235 = G__24284;
continue;
}
} else {
var temp__5804__auto___24285__$1 = cljs.core.seq(seq__23876_24232);
if(temp__5804__auto___24285__$1){
var seq__23876_24286__$1 = temp__5804__auto___24285__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23876_24286__$1)){
var c__5568__auto___24287 = cljs.core.chunk_first(seq__23876_24286__$1);
var G__24288 = cljs.core.chunk_rest(seq__23876_24286__$1);
var G__24289 = c__5568__auto___24287;
var G__24290 = cljs.core.count(c__5568__auto___24287);
var G__24291 = (0);
seq__23876_24232 = G__24288;
chunk__23880_24233 = G__24289;
count__23881_24234 = G__24290;
i__23882_24235 = G__24291;
continue;
} else {
var node_24292 = cljs.core.first(seq__23876_24286__$1);
if(cljs.core.not(node_24292.shadow$old)){
var path_match_24295 = shadow.cljs.devtools.client.browser.match_paths(node_24292.getAttribute("href"),path);
if(cljs.core.truth_(path_match_24295)){
var new_link_24297 = (function (){var G__23993 = node_24292.cloneNode(true);
G__23993.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_24295),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__23993;
})();
(node_24292.shadow$old = true);

(new_link_24297.onload = ((function (seq__23876_24232,chunk__23880_24233,count__23881_24234,i__23882_24235,seq__23504,chunk__23507,count__23508,i__23509,new_link_24297,path_match_24295,node_24292,seq__23876_24286__$1,temp__5804__auto___24285__$1,path,seq__23504__$1,temp__5804__auto__,map__23501,map__23501__$1,msg,updates,reload_info){
return (function (e){
var seq__23994_24298 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__23996_24299 = null;
var count__23997_24300 = (0);
var i__23998_24301 = (0);
while(true){
if((i__23998_24301 < count__23997_24300)){
var map__24006_24302 = chunk__23996_24299.cljs$core$IIndexed$_nth$arity$2(null,i__23998_24301);
var map__24006_24303__$1 = cljs.core.__destructure_map(map__24006_24302);
var task_24304 = map__24006_24303__$1;
var fn_str_24305 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24006_24303__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_24306 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24006_24303__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_24307 = goog.getObjectByName(fn_str_24305,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_24306)].join(''));

(fn_obj_24307.cljs$core$IFn$_invoke$arity$2 ? fn_obj_24307.cljs$core$IFn$_invoke$arity$2(path,new_link_24297) : fn_obj_24307.call(null,path,new_link_24297));


var G__24309 = seq__23994_24298;
var G__24310 = chunk__23996_24299;
var G__24311 = count__23997_24300;
var G__24312 = (i__23998_24301 + (1));
seq__23994_24298 = G__24309;
chunk__23996_24299 = G__24310;
count__23997_24300 = G__24311;
i__23998_24301 = G__24312;
continue;
} else {
var temp__5804__auto___24313__$2 = cljs.core.seq(seq__23994_24298);
if(temp__5804__auto___24313__$2){
var seq__23994_24314__$1 = temp__5804__auto___24313__$2;
if(cljs.core.chunked_seq_QMARK_(seq__23994_24314__$1)){
var c__5568__auto___24315 = cljs.core.chunk_first(seq__23994_24314__$1);
var G__24316 = cljs.core.chunk_rest(seq__23994_24314__$1);
var G__24317 = c__5568__auto___24315;
var G__24318 = cljs.core.count(c__5568__auto___24315);
var G__24319 = (0);
seq__23994_24298 = G__24316;
chunk__23996_24299 = G__24317;
count__23997_24300 = G__24318;
i__23998_24301 = G__24319;
continue;
} else {
var map__24007_24320 = cljs.core.first(seq__23994_24314__$1);
var map__24007_24321__$1 = cljs.core.__destructure_map(map__24007_24320);
var task_24322 = map__24007_24321__$1;
var fn_str_24323 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24007_24321__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_24324 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24007_24321__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_24328 = goog.getObjectByName(fn_str_24323,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_24324)].join(''));

(fn_obj_24328.cljs$core$IFn$_invoke$arity$2 ? fn_obj_24328.cljs$core$IFn$_invoke$arity$2(path,new_link_24297) : fn_obj_24328.call(null,path,new_link_24297));


var G__24329 = cljs.core.next(seq__23994_24314__$1);
var G__24330 = null;
var G__24331 = (0);
var G__24332 = (0);
seq__23994_24298 = G__24329;
chunk__23996_24299 = G__24330;
count__23997_24300 = G__24331;
i__23998_24301 = G__24332;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_24292);
});})(seq__23876_24232,chunk__23880_24233,count__23881_24234,i__23882_24235,seq__23504,chunk__23507,count__23508,i__23509,new_link_24297,path_match_24295,node_24292,seq__23876_24286__$1,temp__5804__auto___24285__$1,path,seq__23504__$1,temp__5804__auto__,map__23501,map__23501__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_24295], 0));

goog.dom.insertSiblingAfter(new_link_24297,node_24292);


var G__24334 = cljs.core.next(seq__23876_24286__$1);
var G__24335 = null;
var G__24336 = (0);
var G__24337 = (0);
seq__23876_24232 = G__24334;
chunk__23880_24233 = G__24335;
count__23881_24234 = G__24336;
i__23882_24235 = G__24337;
continue;
} else {
var G__24338 = cljs.core.next(seq__23876_24286__$1);
var G__24339 = null;
var G__24340 = (0);
var G__24341 = (0);
seq__23876_24232 = G__24338;
chunk__23880_24233 = G__24339;
count__23881_24234 = G__24340;
i__23882_24235 = G__24341;
continue;
}
} else {
var G__24342 = cljs.core.next(seq__23876_24286__$1);
var G__24343 = null;
var G__24344 = (0);
var G__24345 = (0);
seq__23876_24232 = G__24342;
chunk__23880_24233 = G__24343;
count__23881_24234 = G__24344;
i__23882_24235 = G__24345;
continue;
}
}
} else {
}
}
break;
}


var G__24346 = cljs.core.next(seq__23504__$1);
var G__24347 = null;
var G__24348 = (0);
var G__24349 = (0);
seq__23504 = G__24346;
chunk__23507 = G__24347;
count__23508 = G__24348;
i__23509 = G__24349;
continue;
} else {
var G__24350 = cljs.core.next(seq__23504__$1);
var G__24351 = null;
var G__24352 = (0);
var G__24353 = (0);
seq__23504 = G__24350;
chunk__23507 = G__24351;
count__23508 = G__24352;
i__23509 = G__24353;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__24012){
var map__24013 = p__24012;
var map__24013__$1 = cljs.core.__destructure_map(map__24013);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24013__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__24014,done,error){
var map__24015 = p__24014;
var map__24015__$1 = cljs.core.__destructure_map(map__24015);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24015__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__24019,done,error){
var map__24020 = p__24019;
var map__24020__$1 = cljs.core.__destructure_map(map__24020);
var msg = map__24020__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24020__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24020__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24020__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__24023){
var map__24024 = p__24023;
var map__24024__$1 = cljs.core.__destructure_map(map__24024);
var src = map__24024__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24024__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__24025 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__24025) : done.call(null,G__24025));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__24026){
var map__24027 = p__24026;
var map__24027__$1 = cljs.core.__destructure_map(map__24027);
var msg__$1 = map__24027__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24027__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e24029){var ex = e24029;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__24031){
var map__24032 = p__24031;
var map__24032__$1 = cljs.core.__destructure_map(map__24032);
var env = map__24032__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24032__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__24033){
var map__24034 = p__24033;
var map__24034__$1 = cljs.core.__destructure_map(map__24034);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24034__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24034__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__24037){
var map__24038 = p__24037;
var map__24038__$1 = cljs.core.__destructure_map(map__24038);
var svc = map__24038__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24038__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
