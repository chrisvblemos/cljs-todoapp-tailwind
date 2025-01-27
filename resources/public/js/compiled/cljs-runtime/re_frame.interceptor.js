goog.provide('re_frame.interceptor');
re_frame.interceptor.mandatory_interceptor_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"after","after",594996914),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"before","before",-1633692388),null], null), null);
re_frame.interceptor.optional_interceptor_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comment","comment",532206069),null], null), null);
re_frame.interceptor.interceptor_QMARK_ = (function re_frame$interceptor$interceptor_QMARK_(m){
return ((cljs.core.map_QMARK_(m)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(re_frame.interceptor.mandatory_interceptor_keys,clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(m)),re_frame.interceptor.optional_interceptor_keys))));
});
re_frame.interceptor.__GT_interceptor = (function re_frame$interceptor$__GT_interceptor(var_args){
var args__5775__auto__ = [];
var len__5769__auto___23362 = arguments.length;
var i__5770__auto___23363 = (0);
while(true){
if((i__5770__auto___23363 < len__5769__auto___23362)){
args__5775__auto__.push((arguments[i__5770__auto___23363]));

var G__23364 = (i__5770__auto___23363 + (1));
i__5770__auto___23363 = G__23364;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic = (function (p__23257){
var map__23258 = p__23257;
var map__23258__$1 = cljs.core.__destructure_map(map__23258);
var m = map__23258__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23258__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var comment = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23258__$1,new cljs.core.Keyword(null,"comment","comment",532206069));
var before = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23258__$1,new cljs.core.Keyword(null,"before","before",-1633692388));
var after = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23258__$1,new cljs.core.Keyword(null,"after","after",594996914));
if(re_frame.interop.debug_enabled_QMARK_){
var temp__5802__auto___23368 = cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(m)),re_frame.interceptor.mandatory_interceptor_keys,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_frame.interceptor.optional_interceptor_keys], 0)));
if(temp__5802__auto___23368){
var unknown_keys_23369 = temp__5802__auto___23368;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ->interceptor",m,"has unknown keys:",unknown_keys_23369], 0));
} else {
}
} else {
}

var G__23261 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(function (){var or__5045__auto__ = id;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"unnamed","unnamed",-26044928);
}
})(),new cljs.core.Keyword(null,"before","before",-1633692388),before,new cljs.core.Keyword(null,"after","after",594996914),after], null);
if(cljs.core.truth_(comment)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23261,new cljs.core.Keyword(null,"comment","comment",532206069),comment);
} else {
return G__23261;
}
}));

(re_frame.interceptor.__GT_interceptor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frame.interceptor.__GT_interceptor.cljs$lang$applyTo = (function (seq23254){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23254));
}));

re_frame.interceptor.get_effect = (function re_frame$interceptor$get_effect(var_args){
var G__23267 = arguments.length;
switch (G__23267) {
case 1:
return re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$1 = (function (context){
return new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
}));

(re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$2 = (function (context,key){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"effects","effects",-282369292),key], null));
}));

(re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$3 = (function (context,key,not_found){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"effects","effects",-282369292),key], null),not_found);
}));

(re_frame.interceptor.get_effect.cljs$lang$maxFixedArity = 3);

re_frame.interceptor.assoc_effect = (function re_frame$interceptor$assoc_effect(context,key,value){
return cljs.core.assoc_in(context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"effects","effects",-282369292),key], null),value);
});
re_frame.interceptor.update_effect = (function re_frame$interceptor$update_effect(var_args){
var args__5775__auto__ = [];
var len__5769__auto___23376 = arguments.length;
var i__5770__auto___23377 = (0);
while(true){
if((i__5770__auto___23377 < len__5769__auto___23376)){
args__5775__auto__.push((arguments[i__5770__auto___23377]));

var G__23378 = (i__5770__auto___23377 + (1));
i__5770__auto___23377 = G__23378;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return re_frame.interceptor.update_effect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(re_frame.interceptor.update_effect.cljs$core$IFn$_invoke$arity$variadic = (function (context,key,f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.update_in,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"effects","effects",-282369292),key], null),f,args);
}));

(re_frame.interceptor.update_effect.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(re_frame.interceptor.update_effect.cljs$lang$applyTo = (function (seq23274){
var G__23275 = cljs.core.first(seq23274);
var seq23274__$1 = cljs.core.next(seq23274);
var G__23276 = cljs.core.first(seq23274__$1);
var seq23274__$2 = cljs.core.next(seq23274__$1);
var G__23277 = cljs.core.first(seq23274__$2);
var seq23274__$3 = cljs.core.next(seq23274__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23275,G__23276,G__23277,seq23274__$3);
}));

re_frame.interceptor.get_coeffect = (function re_frame$interceptor$get_coeffect(var_args){
var G__23288 = arguments.length;
switch (G__23288) {
case 1:
return re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$1 = (function (context){
return new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context);
}));

(re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2 = (function (context,key){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),key], null));
}));

(re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$3 = (function (context,key,not_found){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),key], null),not_found);
}));

(re_frame.interceptor.get_coeffect.cljs$lang$maxFixedArity = 3);

re_frame.interceptor.assoc_coeffect = (function re_frame$interceptor$assoc_coeffect(context,key,value){
return cljs.core.assoc_in(context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),key], null),value);
});
re_frame.interceptor.update_coeffect = (function re_frame$interceptor$update_coeffect(var_args){
var args__5775__auto__ = [];
var len__5769__auto___23386 = arguments.length;
var i__5770__auto___23387 = (0);
while(true){
if((i__5770__auto___23387 < len__5769__auto___23386)){
args__5775__auto__.push((arguments[i__5770__auto___23387]));

var G__23388 = (i__5770__auto___23387 + (1));
i__5770__auto___23387 = G__23388;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return re_frame.interceptor.update_coeffect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(re_frame.interceptor.update_coeffect.cljs$core$IFn$_invoke$arity$variadic = (function (context,key,f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.update_in,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),key], null),f,args);
}));

(re_frame.interceptor.update_coeffect.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(re_frame.interceptor.update_coeffect.cljs$lang$applyTo = (function (seq23292){
var G__23293 = cljs.core.first(seq23292);
var seq23292__$1 = cljs.core.next(seq23292);
var G__23294 = cljs.core.first(seq23292__$1);
var seq23292__$2 = cljs.core.next(seq23292__$1);
var G__23295 = cljs.core.first(seq23292__$2);
var seq23292__$3 = cljs.core.next(seq23292__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23293,G__23294,G__23295,seq23292__$3);
}));

re_frame.interceptor.exception__GT_ex_info = (function re_frame$interceptor$exception__GT_ex_info(e,interceptor,direction){
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(["Interceptor Exception: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ex_message(e))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"interceptor","interceptor",1127739076),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(interceptor)], null),e);
});
re_frame.interceptor.invoke_interceptor_fn = (function re_frame$interceptor$invoke_interceptor_fn(p__23301,interceptor,direction){
var map__23302 = p__23301;
var map__23302__$1 = cljs.core.__destructure_map(map__23302);
var context = map__23302__$1;
var original_exception_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23302__$1,new cljs.core.Keyword("re-frame.interceptor","original-exception?","re-frame.interceptor/original-exception?",-527923945));
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(interceptor,direction);
if(cljs.core.not(f)){
return context;
} else {
if(cljs.core.truth_(original_exception_QMARK_)){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(context) : f.call(null,context));
} else {
try{return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(context) : f.call(null,context));
}catch (e23303){var e = e23303;
throw re_frame.interceptor.exception__GT_ex_info(e,interceptor,direction);
}
}
}
});
/**
 * Loop over all interceptors, calling `direction` function on each,
 *   threading the value of `context` through every call.
 * 
 *   `direction` is one of `:before` or `:after`.
 * 
 *   Each iteration, the next interceptor to process is obtained from
 *   context's `:queue`. After they are processed, interceptors are popped
 *   from `:queue` and added to `:stack`.
 * 
 *   After sufficient iteration, `:queue` will be empty, and `:stack` will
 *   contain all interceptors processed.
 * 
 *   Returns updated `context`. Ie. the `context` which has been threaded
 *   through all interceptor functions.
 * 
 *   Generally speaking, an interceptor's `:before` function will (if present)
 *   add to a `context's` `:coeffects`, while its `:after` function
 *   will modify the `context`'s `:effects`.  Very approximately.
 * 
 *   But because all interceptor functions are given `context`, and can
 *   return a modified version of it, the way is clear for an interceptor
 *   to introspect the stack or queue, or even modify the queue
 *   (add new interceptors via `enqueue`?). This is a very fluid arrangement.
 */
re_frame.interceptor.invoke_interceptors = (function re_frame$interceptor$invoke_interceptors(context,direction){
var context__$1 = context;
while(true){
var queue = new cljs.core.Keyword(null,"queue","queue",1455835879).cljs$core$IFn$_invoke$arity$1(context__$1);
if(cljs.core.empty_QMARK_(queue)){
return context__$1;
} else {
var interceptor = cljs.core.peek(queue);
var stack = new cljs.core.Keyword(null,"stack","stack",-793405930).cljs$core$IFn$_invoke$arity$1(context__$1);
var G__23403 = re_frame.interceptor.invoke_interceptor_fn(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(context__$1,new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.core.pop(queue),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,interceptor)], 0)),interceptor,direction);
context__$1 = G__23403;
continue;
}
break;
}
});
re_frame.interceptor.enqueue = (function re_frame$interceptor$enqueue(context,interceptors){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(context,new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,re_frame.interop.empty_queue),interceptors);
});
/**
 * Create a fresh context
 */
re_frame.interceptor.context = (function re_frame$interceptor$context(var_args){
var G__23318 = arguments.length;
switch (G__23318) {
case 2:
return re_frame.interceptor.context.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_frame.interceptor.context.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frame.interceptor.context.cljs$core$IFn$_invoke$arity$2 = (function (event,interceptors){
return re_frame.interceptor.enqueue(re_frame.interceptor.assoc_coeffect(re_frame.interceptor.assoc_coeffect(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"event","event",301435442),event),new cljs.core.Keyword(null,"original-event","original-event",2121330403),event),interceptors);
}));

(re_frame.interceptor.context.cljs$core$IFn$_invoke$arity$3 = (function (event,interceptors,db){
return re_frame.interceptor.assoc_coeffect(re_frame.interceptor.context.cljs$core$IFn$_invoke$arity$2(event,interceptors),new cljs.core.Keyword(null,"db","db",993250759),db);
}));

(re_frame.interceptor.context.cljs$lang$maxFixedArity = 3);

/**
 * Called on completion of `:before` processing, this function prepares/modifies
 * `context` for the backwards sweep of processing in which an interceptor
 * chain's `:after` fns are called.
 * 
 *   At this point in processing, the `:queue` is empty and `:stack` holds all
 *   the previously run interceptors. So this function enables the backwards walk
 *   by priming `:queue` with what's currently in `:stack`
 */
re_frame.interceptor.change_direction = (function re_frame$interceptor$change_direction(context){
return re_frame.interceptor.enqueue(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"queue","queue",1455835879)),new cljs.core.Keyword(null,"stack","stack",-793405930).cljs$core$IFn$_invoke$arity$1(context));
});
re_frame.interceptor.execute_STAR_ = (function re_frame$interceptor$execute_STAR_(ctx){
return re_frame.interceptor.invoke_interceptors(re_frame.interceptor.change_direction(re_frame.interceptor.invoke_interceptors(ctx,new cljs.core.Keyword(null,"before","before",-1633692388))),new cljs.core.Keyword(null,"after","after",594996914));
});
re_frame.interceptor.merge_ex_data = (function re_frame$interceptor$merge_ex_data(var_args){
var args__5775__auto__ = [];
var len__5769__auto___23408 = arguments.length;
var i__5770__auto___23409 = (0);
while(true){
if((i__5770__auto___23409 < len__5769__auto___23408)){
args__5775__auto__.push((arguments[i__5770__auto___23409]));

var G__23410 = (i__5770__auto___23409 + (1));
i__5770__auto___23409 = G__23410;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return re_frame.interceptor.merge_ex_data.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(re_frame.interceptor.merge_ex_data.cljs$core$IFn$_invoke$arity$variadic = (function (e,ms){
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(cljs.core.ex_message(e),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,cljs.core.ex_data(e),ms),cljs.core.ex_cause(e));
}));

(re_frame.interceptor.merge_ex_data.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(re_frame.interceptor.merge_ex_data.cljs$lang$applyTo = (function (seq23327){
var G__23328 = cljs.core.first(seq23327);
var seq23327__$1 = cljs.core.next(seq23327);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23328,seq23327__$1);
}));

re_frame.interceptor.default_error_handler = (function re_frame$interceptor$default_error_handler(original_error,re_frame_error){
var map__23336 = cljs.core.ex_data(re_frame_error);
var map__23336__$1 = cljs.core.__destructure_map(map__23336);
var event_v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23336__$1,new cljs.core.Keyword(null,"event-v","event-v",1378681365));
var direction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23336__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));
var interceptor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23336__$1,new cljs.core.Keyword(null,"interceptor","interceptor",1127739076));
var event_handler_QMARK_ = (function (){var fexpr__23340 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fx-handler","fx-handler",-549783097),null,new cljs.core.Keyword(null,"db-handler","db-handler",579530098),null,new cljs.core.Keyword(null,"ctx-handler","ctx-handler",-1777672230),null], null), null);
return (fexpr__23340.cljs$core$IFn$_invoke$arity$1 ? fexpr__23340.cljs$core$IFn$_invoke$arity$1(interceptor) : fexpr__23340.call(null,interceptor));
})();
cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(re_frame.loggers.console,new cljs.core.Keyword(null,"error","error",-978969032),"An error occured while handling the re-frame event:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_v),"\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.str,(cljs.core.truth_(event_handler_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Within the",cljs.core.first(event_v),"event handler function."], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Within the",direction,"phase of the",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([interceptor], 0)),"interceptor."], null)))], 0));

throw original_error;
});
/**
 * Executes the given chain (coll) of interceptors.
 * 
 * Each interceptor has this form:
 *     {:before  (fn [context] ...)     ;; returns possibly modified context
 *      :after   (fn [context] ...)}    ;; `identity` would be a noop
 * 
 * Walks the queue of interceptors from beginning to end, calling the
 * `:before` fn on each, then reverse direction and walk backwards,
 * calling the `:after` fn on each.
 * 
 * The last interceptor in the chain presumably wraps an event
 * handler fn. So the overall goal of the process is to "handle
 * the given event".
 * 
 * Thread a `context` through all calls. `context` has this form:
 * 
 *   {:coeffects {:event [:a-query-id :some-param]
 *                :db    <original contents of app-db>}
 *    :effects   {:db    <new value for app-db>
 *                :fx  [:dispatch [:an-event-id :param1]]}
 *    :queue     <a collection of further interceptors>
 *    :stack     <a collection of interceptors already walked>}
 * 
 * `context` has `:coeffects` and `:effects` which, if this was a web
 * server, would be somewhat analogous to `request` and `response`
 * respectively.
 * 
 * `coeffects` will contain data like `event` and the initial
 * state of `db` -  the inputs required by the event handler
 * (sitting presumably on the end of the chain), while handler-returned
 * side effects are put into `:effects` including, but not limited to,
 * new values for `db`.
 * 
 * The first few interceptors in a chain will likely have `:before`
 * functions which "prime" the `context` by adding the event, and
 * the current state of app-db into `:coeffects`. But interceptors can
 * add whatever they want to `:coeffects` - perhaps the event handler needs
 * some information from localstore, or a random number, or access to
 * a DataScript connection.
 * 
 * Equally, some interceptors in the chain will have `:after` fn
 * which can process the side effects accumulated into `:effects`
 * including but, not limited to, updates to app-db.
 * 
 * Through both stages (before and after), `context` contains a `:queue`
 * of interceptors yet to be processed, and a `:stack` of interceptors
 * already done.  In advanced cases, these values can be modified by the
 * functions through which the context is threaded.
 */
re_frame.interceptor.execute = (function re_frame$interceptor$execute(event_v,interceptors){
var ctx = re_frame.interceptor.context.cljs$core$IFn$_invoke$arity$2(event_v,interceptors);
var error_handler = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"event-handler","event-handler",-487718843));
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__23117__auto___23411 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951),interceptors], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951),interceptors], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
(re_frame.trace._STAR_current_trace_STAR_ = new_trace__23117__auto___23411);

} else {
}

if(cljs.core.not(error_handler)){
return re_frame.interceptor.execute_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword("re-frame.interceptor","original-exception?","re-frame.interceptor/original-exception?",-527923945),true));
} else {
try{return re_frame.interceptor.execute_STAR_(ctx);
}catch (e23355){var e = e23355;
var G__23356 = cljs.core.ex_cause(e);
var G__23357 = re_frame.interceptor.merge_ex_data.cljs$core$IFn$_invoke$arity$variadic(e,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event-v","event-v",1378681365),event_v], null)], 0));
return (error_handler.cljs$core$IFn$_invoke$arity$2 ? error_handler.cljs$core$IFn$_invoke$arity$2(G__23356,G__23357) : error_handler.call(null,G__23356,G__23357));
}}
});

//# sourceMappingURL=re_frame.interceptor.js.map
