goog.provide('antizer.core');
goog.scope(function(){
  antizer.core.goog$module$goog$object = goog.module.get('goog.object');
});
antizer.core.antd_module = antd;
/**
 * Converts from kebab case to camel case, eg: on-click to onClick
 */
antizer.core.kebab_case__GT_camel_case = (function antizer$core$kebab_case__GT_camel_case(input){
var words = clojure.string.split.cljs$core$IFn$_invoke$arity$2(input,/-/);
var capitalize = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__12400_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,clojure.string.upper_case(cljs.core.first(p1__12400_SHARP_)),cljs.core.rest(p1__12400_SHARP_));
}),cljs.core.rest(words));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,cljs.core.first(words),capitalize);
});
/**
 * Stringifys all the keys of a cljs hashmap and converts them
 * from kebab case to camel case. If :html-props option is specified, 
 * then rename the html properties values to their dom equivalent
 * before conversion
 */
antizer.core.map_keys__GT_camel_case = (function antizer$core$map_keys__GT_camel_case(var_args){
var args__5775__auto__ = [];
var len__5769__auto___12419 = arguments.length;
var i__5770__auto___12420 = (0);
while(true){
if((i__5770__auto___12420 < len__5769__auto___12419)){
args__5775__auto__.push((arguments[i__5770__auto___12420]));

var G__12428 = (i__5770__auto___12420 + (1));
i__5770__auto___12420 = G__12428;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return antizer.core.map_keys__GT_camel_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(antizer.core.map_keys__GT_camel_case.cljs$core$IFn$_invoke$arity$variadic = (function (data,p__12403){
var map__12404 = p__12403;
var map__12404__$1 = cljs.core.__destructure_map(map__12404);
var html_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12404__$1,new cljs.core.Keyword(null,"html-props","html-props",-455448229));
var convert_to_camel = (function (p__12405){
var vec__12406 = p__12405;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12406,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12406,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.core.kebab_case__GT_camel_case(cljs.core.name(key)),value], null);
});
return clojure.walk.postwalk((function (x){
if(cljs.core.map_QMARK_(x)){
var new_map = (cljs.core.truth_(html_props)?clojure.set.rename_keys(x,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"for","for",-1323786319),new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720)], null)):x);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(convert_to_camel,new_map));
} else {
return x;
}
}),data);
}));

(antizer.core.map_keys__GT_camel_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(antizer.core.map_keys__GT_camel_case.cljs$lang$applyTo = (function (seq12401){
var G__12402 = cljs.core.first(seq12401);
var seq12401__$1 = cljs.core.next(seq12401);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12402,seq12401__$1);
}));

antizer.core.get_module_path = (function antizer$core$get_module_path(module_name){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(module_name,/\./);
});
/**
 * Retreives the value of the module's property
 */
antizer.core.get_prop = (function antizer$core$get_prop(module_name,prop){
if(cljs.core.truth_(prop)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.goog$module$goog$object.getValueByKeys,antizer.core.antd_module,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(antizer.core.get_module_path(module_name),cljs.core.name(prop)));
} else {
return null;
}
});
/**
 * Calls a javascript function, converting the keys for any arguments 
 * that are hashmaps from kebab case to camel case
 * 
 * * func - the native javascript to be called
 */
antizer.core.call_js_func = (function antizer$core$call_js_func(var_args){
var args__5775__auto__ = [];
var len__5769__auto___12463 = arguments.length;
var i__5770__auto___12465 = (0);
while(true){
if((i__5770__auto___12465 < len__5769__auto___12463)){
args__5775__auto__.push((arguments[i__5770__auto___12465]));

var G__12470 = (i__5770__auto___12465 + (1));
i__5770__auto___12465 = G__12470;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return antizer.core.call_js_func.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(antizer.core.call_js_func.cljs$core$IFn$_invoke$arity$variadic = (function (func,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.clj__GT_js(cljs.core.map.cljs$core$IFn$_invoke$arity$2(antizer.core.map_keys__GT_camel_case,args)));
}));

(antizer.core.call_js_func.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(antizer.core.call_js_func.cljs$lang$applyTo = (function (seq12409){
var G__12410 = cljs.core.first(seq12409);
var seq12409__$1 = cljs.core.next(seq12409);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12410,seq12409__$1);
}));

/**
 * Calls the ant module function
 */
antizer.core.call_func = (function antizer$core$call_func(var_args){
var args__5775__auto__ = [];
var len__5769__auto___12478 = arguments.length;
var i__5770__auto___12479 = (0);
while(true){
if((i__5770__auto___12479 < len__5769__auto___12478)){
args__5775__auto__.push((arguments[i__5770__auto___12479]));

var G__12480 = (i__5770__auto___12479 + (1));
i__5770__auto___12479 = G__12480;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return antizer.core.call_func.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(antizer.core.call_func.cljs$core$IFn$_invoke$arity$variadic = (function (module_name,args){
var path = antizer.core.get_module_path(module_name);
var func = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.goog$module$goog$object.getValueByKeys,antizer.core.antd_module,path);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_js_func,func,args);
}));

(antizer.core.call_func.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(antizer.core.call_func.cljs$lang$applyTo = (function (seq12411){
var G__12412 = cljs.core.first(seq12411);
var seq12411__$1 = cljs.core.next(seq12411);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12412,seq12411__$1);
}));


//# sourceMappingURL=antizer.core.js.map
