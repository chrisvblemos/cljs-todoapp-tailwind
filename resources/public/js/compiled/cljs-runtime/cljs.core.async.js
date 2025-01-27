goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15736 = (function (f,blockable,meta15737){
this.f = f;
this.blockable = blockable;
this.meta15737 = meta15737;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15736.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15738,meta15737__$1){
var self__ = this;
var _15738__$1 = this;
return (new cljs.core.async.t_cljs$core$async15736(self__.f,self__.blockable,meta15737__$1));
}));

(cljs.core.async.t_cljs$core$async15736.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15738){
var self__ = this;
var _15738__$1 = this;
return self__.meta15737;
}));

(cljs.core.async.t_cljs$core$async15736.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15736.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15736.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async15736.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async15736.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta15737","meta15737",2044268543,null)], null);
}));

(cljs.core.async.t_cljs$core$async15736.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15736.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15736");

(cljs.core.async.t_cljs$core$async15736.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15736");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15736.
 */
cljs.core.async.__GT_t_cljs$core$async15736 = (function cljs$core$async$__GT_t_cljs$core$async15736(f,blockable,meta15737){
return (new cljs.core.async.t_cljs$core$async15736(f,blockable,meta15737));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__15732 = arguments.length;
switch (G__15732) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async15736(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__15796 = arguments.length;
switch (G__15796) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__15819 = arguments.length;
switch (G__15819) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__15846 = arguments.length;
switch (G__15846) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_19148 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_19148) : fn1.call(null,val_19148));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_19148) : fn1.call(null,val_19148));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__15882 = arguments.length;
switch (G__15882) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___19157 = n;
var x_19158 = (0);
while(true){
if((x_19158 < n__5636__auto___19157)){
(a[x_19158] = x_19158);

var G__19159 = (x_19158 + (1));
x_19158 = G__19159;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15891 = (function (flag,meta15892){
this.flag = flag;
this.meta15892 = meta15892;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15891.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15893,meta15892__$1){
var self__ = this;
var _15893__$1 = this;
return (new cljs.core.async.t_cljs$core$async15891(self__.flag,meta15892__$1));
}));

(cljs.core.async.t_cljs$core$async15891.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15893){
var self__ = this;
var _15893__$1 = this;
return self__.meta15892;
}));

(cljs.core.async.t_cljs$core$async15891.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15891.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async15891.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15891.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async15891.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta15892","meta15892",-1164503956,null)], null);
}));

(cljs.core.async.t_cljs$core$async15891.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15891.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15891");

(cljs.core.async.t_cljs$core$async15891.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15891");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15891.
 */
cljs.core.async.__GT_t_cljs$core$async15891 = (function cljs$core$async$__GT_t_cljs$core$async15891(flag,meta15892){
return (new cljs.core.async.t_cljs$core$async15891(flag,meta15892));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async15891(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15920 = (function (flag,cb,meta15921){
this.flag = flag;
this.cb = cb;
this.meta15921 = meta15921;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15920.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15922,meta15921__$1){
var self__ = this;
var _15922__$1 = this;
return (new cljs.core.async.t_cljs$core$async15920(self__.flag,self__.cb,meta15921__$1));
}));

(cljs.core.async.t_cljs$core$async15920.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15922){
var self__ = this;
var _15922__$1 = this;
return self__.meta15921;
}));

(cljs.core.async.t_cljs$core$async15920.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15920.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async15920.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15920.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async15920.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta15921","meta15921",-2081513291,null)], null);
}));

(cljs.core.async.t_cljs$core$async15920.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15920.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15920");

(cljs.core.async.t_cljs$core$async15920.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15920");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15920.
 */
cljs.core.async.__GT_t_cljs$core$async15920 = (function cljs$core$async$__GT_t_cljs$core$async15920(flag,cb,meta15921){
return (new cljs.core.async.t_cljs$core$async15920(flag,cb,meta15921));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async15920(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15927_SHARP_){
var G__15934 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15927_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15934) : fret.call(null,G__15934));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15928_SHARP_){
var G__15940 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15928_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15940) : fret.call(null,G__15940));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__19171 = (i + (1));
i = G__19171;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___19177 = arguments.length;
var i__5770__auto___19178 = (0);
while(true){
if((i__5770__auto___19178 < len__5769__auto___19177)){
args__5775__auto__.push((arguments[i__5770__auto___19178]));

var G__19179 = (i__5770__auto___19178 + (1));
i__5770__auto___19178 = G__19179;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__15964){
var map__15965 = p__15964;
var map__15965__$1 = cljs.core.__destructure_map(map__15965);
var opts = map__15965__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq15941){
var G__15942 = cljs.core.first(seq15941);
var seq15941__$1 = cljs.core.next(seq15941);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15942,seq15941__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__15984 = arguments.length;
switch (G__15984) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__15614__auto___19188 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15615__auto__ = (function (){var switch__15401__auto__ = (function (state_16045){
var state_val_16046 = (state_16045[(1)]);
if((state_val_16046 === (7))){
var inst_16040 = (state_16045[(2)]);
var state_16045__$1 = state_16045;
var statearr_16048_19191 = state_16045__$1;
(statearr_16048_19191[(2)] = inst_16040);

(statearr_16048_19191[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16046 === (1))){
var state_16045__$1 = state_16045;
var statearr_16049_19192 = state_16045__$1;
(statearr_16049_19192[(2)] = null);

(statearr_16049_19192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16046 === (4))){
var inst_16011 = (state_16045[(7)]);
var inst_16011__$1 = (state_16045[(2)]);
var inst_16018 = (inst_16011__$1 == null);
var state_16045__$1 = (function (){var statearr_16051 = state_16045;
(statearr_16051[(7)] = inst_16011__$1);

return statearr_16051;
})();
if(cljs.core.truth_(inst_16018)){
var statearr_16053_19197 = state_16045__$1;
(statearr_16053_19197[(1)] = (5));

} else {
var statearr_16054_19198 = state_16045__$1;
(statearr_16054_19198[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16046 === (13))){
var state_16045__$1 = state_16045;
var statearr_16057_19200 = state_16045__$1;
(statearr_16057_19200[(2)] = null);

(statearr_16057_19200[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16046 === (6))){
var inst_16011 = (state_16045[(7)]);
var state_16045__$1 = state_16045;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16045__$1,(11),to,inst_16011);
} else {
if((state_val_16046 === (3))){
var inst_16043 = (state_16045[(2)]);
var state_16045__$1 = state_16045;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16045__$1,inst_16043);
} else {
if((state_val_16046 === (12))){
var state_16045__$1 = state_16045;
var statearr_16061_19206 = state_16045__$1;
(statearr_16061_19206[(2)] = null);

(statearr_16061_19206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16046 === (2))){
var state_16045__$1 = state_16045;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16045__$1,(4),from);
} else {
if((state_val_16046 === (11))){
var inst_16032 = (state_16045[(2)]);
var state_16045__$1 = state_16045;
if(cljs.core.truth_(inst_16032)){
var statearr_16062_19211 = state_16045__$1;
(statearr_16062_19211[(1)] = (12));

} else {
var statearr_16063_19212 = state_16045__$1;
(statearr_16063_19212[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16046 === (9))){
var state_16045__$1 = state_16045;
var statearr_16064_19213 = state_16045__$1;
(statearr_16064_19213[(2)] = null);

(statearr_16064_19213[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16046 === (5))){
var state_16045__$1 = state_16045;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16068_19215 = state_16045__$1;
(statearr_16068_19215[(1)] = (8));

} else {
var statearr_16073_19216 = state_16045__$1;
(statearr_16073_19216[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16046 === (14))){
var inst_16038 = (state_16045[(2)]);
var state_16045__$1 = state_16045;
var statearr_16082_19218 = state_16045__$1;
(statearr_16082_19218[(2)] = inst_16038);

(statearr_16082_19218[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16046 === (10))){
var inst_16029 = (state_16045[(2)]);
var state_16045__$1 = state_16045;
var statearr_16083_19222 = state_16045__$1;
(statearr_16083_19222[(2)] = inst_16029);

(statearr_16083_19222[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16046 === (8))){
var inst_16026 = cljs.core.async.close_BANG_(to);
var state_16045__$1 = state_16045;
var statearr_16099_19224 = state_16045__$1;
(statearr_16099_19224[(2)] = inst_16026);

(statearr_16099_19224[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15402__auto__ = null;
var cljs$core$async$state_machine__15402__auto____0 = (function (){
var statearr_16104 = [null,null,null,null,null,null,null,null];
(statearr_16104[(0)] = cljs$core$async$state_machine__15402__auto__);

(statearr_16104[(1)] = (1));

return statearr_16104;
});
var cljs$core$async$state_machine__15402__auto____1 = (function (state_16045){
while(true){
var ret_value__15403__auto__ = (function (){try{while(true){
var result__15404__auto__ = switch__15401__auto__(state_16045);
if(cljs.core.keyword_identical_QMARK_(result__15404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15404__auto__;
}
break;
}
}catch (e16105){var ex__15405__auto__ = e16105;
var statearr_16109_19229 = state_16045;
(statearr_16109_19229[(2)] = ex__15405__auto__);


if(cljs.core.seq((state_16045[(4)]))){
var statearr_16110_19231 = state_16045;
(statearr_16110_19231[(1)] = cljs.core.first((state_16045[(4)])));

} else {
throw ex__15405__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19233 = state_16045;
state_16045 = G__19233;
continue;
} else {
return ret_value__15403__auto__;
}
break;
}
});
cljs$core$async$state_machine__15402__auto__ = function(state_16045){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15402__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15402__auto____1.call(this,state_16045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15402__auto____0;
cljs$core$async$state_machine__15402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15402__auto____1;
return cljs$core$async$state_machine__15402__auto__;
})()
})();
var state__15616__auto__ = (function (){var statearr_16119 = f__15615__auto__();
(statearr_16119[(6)] = c__15614__auto___19188);

return statearr_16119;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15616__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__16131){
var vec__16132 = p__16131;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16132,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16132,(1),null);
var job = vec__16132;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__15614__auto___19240 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15615__auto__ = (function (){var switch__15401__auto__ = (function (state_16139){
var state_val_16140 = (state_16139[(1)]);
if((state_val_16140 === (1))){
var state_16139__$1 = state_16139;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16139__$1,(2),res,v);
} else {
if((state_val_16140 === (2))){
var inst_16136 = (state_16139[(2)]);
var inst_16137 = cljs.core.async.close_BANG_(res);
var state_16139__$1 = (function (){var statearr_16141 = state_16139;
(statearr_16141[(7)] = inst_16136);

return statearr_16141;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16139__$1,inst_16137);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15402__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15402__auto____0 = (function (){
var statearr_16150 = [null,null,null,null,null,null,null,null];
(statearr_16150[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15402__auto__);

(statearr_16150[(1)] = (1));

return statearr_16150;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15402__auto____1 = (function (state_16139){
while(true){
var ret_value__15403__auto__ = (function (){try{while(true){
var result__15404__auto__ = switch__15401__auto__(state_16139);
if(cljs.core.keyword_identical_QMARK_(result__15404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15404__auto__;
}
break;
}
}catch (e16155){var ex__15405__auto__ = e16155;
var statearr_16156_19247 = state_16139;
(statearr_16156_19247[(2)] = ex__15405__auto__);


if(cljs.core.seq((state_16139[(4)]))){
var statearr_16157_19249 = state_16139;
(statearr_16157_19249[(1)] = cljs.core.first((state_16139[(4)])));

} else {
throw ex__15405__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19250 = state_16139;
state_16139 = G__19250;
continue;
} else {
return ret_value__15403__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15402__auto__ = function(state_16139){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15402__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15402__auto____1.call(this,state_16139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15402__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15402__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15402__auto__;
})()
})();
var state__15616__auto__ = (function (){var statearr_16158 = f__15615__auto__();
(statearr_16158[(6)] = c__15614__auto___19240);

return statearr_16158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15616__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__16160){
var vec__16161 = p__16160;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16161,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16161,(1),null);
var job = vec__16161;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___19257 = n;
var __19258 = (0);
while(true){
if((__19258 < n__5636__auto___19257)){
var G__16165_19260 = type;
var G__16165_19261__$1 = (((G__16165_19260 instanceof cljs.core.Keyword))?G__16165_19260.fqn:null);
switch (G__16165_19261__$1) {
case "compute":
var c__15614__auto___19263 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__19258,c__15614__auto___19263,G__16165_19260,G__16165_19261__$1,n__5636__auto___19257,jobs,results,process__$1,async){
return (function (){
var f__15615__auto__ = (function (){var switch__15401__auto__ = ((function (__19258,c__15614__auto___19263,G__16165_19260,G__16165_19261__$1,n__5636__auto___19257,jobs,results,process__$1,async){
return (function (state_16184){
var state_val_16185 = (state_16184[(1)]);
if((state_val_16185 === (1))){
var state_16184__$1 = state_16184;
var statearr_16192_19267 = state_16184__$1;
(statearr_16192_19267[(2)] = null);

(statearr_16192_19267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16185 === (2))){
var state_16184__$1 = state_16184;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16184__$1,(4),jobs);
} else {
if((state_val_16185 === (3))){
var inst_16182 = (state_16184[(2)]);
var state_16184__$1 = state_16184;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16184__$1,inst_16182);
} else {
if((state_val_16185 === (4))){
var inst_16169 = (state_16184[(2)]);
var inst_16175 = process__$1(inst_16169);
var state_16184__$1 = state_16184;
if(cljs.core.truth_(inst_16175)){
var statearr_16199_19272 = state_16184__$1;
(statearr_16199_19272[(1)] = (5));

} else {
var statearr_16202_19273 = state_16184__$1;
(statearr_16202_19273[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16185 === (5))){
var state_16184__$1 = state_16184;
var statearr_16203_19275 = state_16184__$1;
(statearr_16203_19275[(2)] = null);

(statearr_16203_19275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16185 === (6))){
var state_16184__$1 = state_16184;
var statearr_16210_19276 = state_16184__$1;
(statearr_16210_19276[(2)] = null);

(statearr_16210_19276[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16185 === (7))){
var inst_16180 = (state_16184[(2)]);
var state_16184__$1 = state_16184;
var statearr_16215_19280 = state_16184__$1;
(statearr_16215_19280[(2)] = inst_16180);

(statearr_16215_19280[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__19258,c__15614__auto___19263,G__16165_19260,G__16165_19261__$1,n__5636__auto___19257,jobs,results,process__$1,async))
;
return ((function (__19258,switch__15401__auto__,c__15614__auto___19263,G__16165_19260,G__16165_19261__$1,n__5636__auto___19257,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15402__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15402__auto____0 = (function (){
var statearr_16216 = [null,null,null,null,null,null,null];
(statearr_16216[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15402__auto__);

(statearr_16216[(1)] = (1));

return statearr_16216;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15402__auto____1 = (function (state_16184){
while(true){
var ret_value__15403__auto__ = (function (){try{while(true){
var result__15404__auto__ = switch__15401__auto__(state_16184);
if(cljs.core.keyword_identical_QMARK_(result__15404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15404__auto__;
}
break;
}
}catch (e16219){var ex__15405__auto__ = e16219;
var statearr_16220_19285 = state_16184;
(statearr_16220_19285[(2)] = ex__15405__auto__);


if(cljs.core.seq((state_16184[(4)]))){
var statearr_16223_19289 = state_16184;
(statearr_16223_19289[(1)] = cljs.core.first((state_16184[(4)])));

} else {
throw ex__15405__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19290 = state_16184;
state_16184 = G__19290;
continue;
} else {
return ret_value__15403__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15402__auto__ = function(state_16184){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15402__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15402__auto____1.call(this,state_16184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15402__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15402__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15402__auto__;
})()
;})(__19258,switch__15401__auto__,c__15614__auto___19263,G__16165_19260,G__16165_19261__$1,n__5636__auto___19257,jobs,results,process__$1,async))
})();
var state__15616__auto__ = (function (){var statearr_16224 = f__15615__auto__();
(statearr_16224[(6)] = c__15614__auto___19263);

return statearr_16224;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15616__auto__);
});})(__19258,c__15614__auto___19263,G__16165_19260,G__16165_19261__$1,n__5636__auto___19257,jobs,results,process__$1,async))
);


break;
case "async":
var c__15614__auto___19292 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__19258,c__15614__auto___19292,G__16165_19260,G__16165_19261__$1,n__5636__auto___19257,jobs,results,process__$1,async){
return (function (){
var f__15615__auto__ = (function (){var switch__15401__auto__ = ((function (__19258,c__15614__auto___19292,G__16165_19260,G__16165_19261__$1,n__5636__auto___19257,jobs,results,process__$1,async){
return (function (state_16237){
var state_val_16238 = (state_16237[(1)]);
if((state_val_16238 === (1))){
var state_16237__$1 = state_16237;
var statearr_16242_19296 = state_16237__$1;
(statearr_16242_19296[(2)] = null);

(statearr_16242_19296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16238 === (2))){
var state_16237__$1 = state_16237;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16237__$1,(4),jobs);
} else {
if((state_val_16238 === (3))){
var inst_16235 = (state_16237[(2)]);
var state_16237__$1 = state_16237;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16237__$1,inst_16235);
} else {
if((state_val_16238 === (4))){
var inst_16227 = (state_16237[(2)]);
var inst_16228 = async(inst_16227);
var state_16237__$1 = state_16237;
if(cljs.core.truth_(inst_16228)){
var statearr_16253_19297 = state_16237__$1;
(statearr_16253_19297[(1)] = (5));

} else {
var statearr_16254_19298 = state_16237__$1;
(statearr_16254_19298[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16238 === (5))){
var state_16237__$1 = state_16237;
var statearr_16267_19304 = state_16237__$1;
(statearr_16267_19304[(2)] = null);

(statearr_16267_19304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16238 === (6))){
var state_16237__$1 = state_16237;
var statearr_16268_19306 = state_16237__$1;
(statearr_16268_19306[(2)] = null);

(statearr_16268_19306[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16238 === (7))){
var inst_16233 = (state_16237[(2)]);
var state_16237__$1 = state_16237;
var statearr_16270_19307 = state_16237__$1;
(statearr_16270_19307[(2)] = inst_16233);

(statearr_16270_19307[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__19258,c__15614__auto___19292,G__16165_19260,G__16165_19261__$1,n__5636__auto___19257,jobs,results,process__$1,async))
;
return ((function (__19258,switch__15401__auto__,c__15614__auto___19292,G__16165_19260,G__16165_19261__$1,n__5636__auto___19257,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15402__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15402__auto____0 = (function (){
var statearr_16272 = [null,null,null,null,null,null,null];
(statearr_16272[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15402__auto__);

(statearr_16272[(1)] = (1));

return statearr_16272;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15402__auto____1 = (function (state_16237){
while(true){
var ret_value__15403__auto__ = (function (){try{while(true){
var result__15404__auto__ = switch__15401__auto__(state_16237);
if(cljs.core.keyword_identical_QMARK_(result__15404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15404__auto__;
}
break;
}
}catch (e16275){var ex__15405__auto__ = e16275;
var statearr_16276_19309 = state_16237;
(statearr_16276_19309[(2)] = ex__15405__auto__);


if(cljs.core.seq((state_16237[(4)]))){
var statearr_16277_19310 = state_16237;
(statearr_16277_19310[(1)] = cljs.core.first((state_16237[(4)])));

} else {
throw ex__15405__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19312 = state_16237;
state_16237 = G__19312;
continue;
} else {
return ret_value__15403__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15402__auto__ = function(state_16237){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15402__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15402__auto____1.call(this,state_16237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15402__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15402__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15402__auto__;
})()
;})(__19258,switch__15401__auto__,c__15614__auto___19292,G__16165_19260,G__16165_19261__$1,n__5636__auto___19257,jobs,results,process__$1,async))
})();
var state__15616__auto__ = (function (){var statearr_16280 = f__15615__auto__();
(statearr_16280[(6)] = c__15614__auto___19292);

return statearr_16280;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15616__auto__);
});})(__19258,c__15614__auto___19292,G__16165_19260,G__16165_19261__$1,n__5636__auto___19257,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16165_19261__$1)].join('')));

}

var G__19313 = (__19258 + (1));
__19258 = G__19313;
continue;
} else {
}
break;
}

var c__15614__auto___19314 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15615__auto__ = (function (){var switch__15401__auto__ = (function (state_16309){
var state_val_16310 = (state_16309[(1)]);
if((state_val_16310 === (7))){
var inst_16304 = (state_16309[(2)]);
var state_16309__$1 = state_16309;
var statearr_16311_19315 = state_16309__$1;
(statearr_16311_19315[(2)] = inst_16304);

(statearr_16311_19315[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16310 === (1))){
var state_16309__$1 = state_16309;
var statearr_16312_19316 = state_16309__$1;
(statearr_16312_19316[(2)] = null);

(statearr_16312_19316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16310 === (4))){
var inst_16287 = (state_16309[(7)]);
var inst_16287__$1 = (state_16309[(2)]);
var inst_16288 = (inst_16287__$1 == null);
var state_16309__$1 = (function (){var statearr_16313 = state_16309;
(statearr_16313[(7)] = inst_16287__$1);

return statearr_16313;
})();
if(cljs.core.truth_(inst_16288)){
var statearr_16314_19317 = state_16309__$1;
(statearr_16314_19317[(1)] = (5));

} else {
var statearr_16317_19318 = state_16309__$1;
(statearr_16317_19318[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16310 === (6))){
var inst_16287 = (state_16309[(7)]);
var inst_16293 = (state_16309[(8)]);
var inst_16293__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_16294 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16296 = [inst_16287,inst_16293__$1];
var inst_16297 = (new cljs.core.PersistentVector(null,2,(5),inst_16294,inst_16296,null));
var state_16309__$1 = (function (){var statearr_16319 = state_16309;
(statearr_16319[(8)] = inst_16293__$1);

return statearr_16319;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16309__$1,(8),jobs,inst_16297);
} else {
if((state_val_16310 === (3))){
var inst_16306 = (state_16309[(2)]);
var state_16309__$1 = state_16309;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16309__$1,inst_16306);
} else {
if((state_val_16310 === (2))){
var state_16309__$1 = state_16309;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16309__$1,(4),from);
} else {
if((state_val_16310 === (9))){
var inst_16301 = (state_16309[(2)]);
var state_16309__$1 = (function (){var statearr_16320 = state_16309;
(statearr_16320[(9)] = inst_16301);

return statearr_16320;
})();
var statearr_16321_19319 = state_16309__$1;
(statearr_16321_19319[(2)] = null);

(statearr_16321_19319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16310 === (5))){
var inst_16290 = cljs.core.async.close_BANG_(jobs);
var state_16309__$1 = state_16309;
var statearr_16322_19320 = state_16309__$1;
(statearr_16322_19320[(2)] = inst_16290);

(statearr_16322_19320[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16310 === (8))){
var inst_16293 = (state_16309[(8)]);
var inst_16299 = (state_16309[(2)]);
var state_16309__$1 = (function (){var statearr_16323 = state_16309;
(statearr_16323[(10)] = inst_16299);

return statearr_16323;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16309__$1,(9),results,inst_16293);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15402__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15402__auto____0 = (function (){
var statearr_16325 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16325[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15402__auto__);

(statearr_16325[(1)] = (1));

return statearr_16325;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15402__auto____1 = (function (state_16309){
while(true){
var ret_value__15403__auto__ = (function (){try{while(true){
var result__15404__auto__ = switch__15401__auto__(state_16309);
if(cljs.core.keyword_identical_QMARK_(result__15404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15404__auto__;
}
break;
}
}catch (e16328){var ex__15405__auto__ = e16328;
var statearr_16329_19322 = state_16309;
(statearr_16329_19322[(2)] = ex__15405__auto__);


if(cljs.core.seq((state_16309[(4)]))){
var statearr_16330_19323 = state_16309;
(statearr_16330_19323[(1)] = cljs.core.first((state_16309[(4)])));

} else {
throw ex__15405__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19325 = state_16309;
state_16309 = G__19325;
continue;
} else {
return ret_value__15403__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15402__auto__ = function(state_16309){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15402__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15402__auto____1.call(this,state_16309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15402__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15402__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15402__auto__;
})()
})();
var state__15616__auto__ = (function (){var statearr_16332 = f__15615__auto__();
(statearr_16332[(6)] = c__15614__auto___19314);

return statearr_16332;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15616__auto__);
}));


var c__15614__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15615__auto__ = (function (){var switch__15401__auto__ = (function (state_16375){
var state_val_16376 = (state_16375[(1)]);
if((state_val_16376 === (7))){
var inst_16371 = (state_16375[(2)]);
var state_16375__$1 = state_16375;
var statearr_16378_19327 = state_16375__$1;
(statearr_16378_19327[(2)] = inst_16371);

(statearr_16378_19327[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16376 === (20))){
var state_16375__$1 = state_16375;
var statearr_16380_19328 = state_16375__$1;
(statearr_16380_19328[(2)] = null);

(statearr_16380_19328[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16376 === (1))){
var state_16375__$1 = state_16375;
var statearr_16381_19329 = state_16375__$1;
(statearr_16381_19329[(2)] = null);

(statearr_16381_19329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16376 === (4))){
var inst_16335 = (state_16375[(7)]);
var inst_16335__$1 = (state_16375[(2)]);
var inst_16336 = (inst_16335__$1 == null);
var state_16375__$1 = (function (){var statearr_16384 = state_16375;
(statearr_16384[(7)] = inst_16335__$1);

return statearr_16384;
})();
if(cljs.core.truth_(inst_16336)){
var statearr_16385_19330 = state_16375__$1;
(statearr_16385_19330[(1)] = (5));

} else {
var statearr_16386_19331 = state_16375__$1;
(statearr_16386_19331[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16376 === (15))){
var inst_16350 = (state_16375[(8)]);
var state_16375__$1 = state_16375;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16375__$1,(18),to,inst_16350);
} else {
if((state_val_16376 === (21))){
var inst_16366 = (state_16375[(2)]);
var state_16375__$1 = state_16375;
var statearr_16387_19332 = state_16375__$1;
(statearr_16387_19332[(2)] = inst_16366);

(statearr_16387_19332[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16376 === (13))){
var inst_16368 = (state_16375[(2)]);
var state_16375__$1 = (function (){var statearr_16389 = state_16375;
(statearr_16389[(9)] = inst_16368);

return statearr_16389;
})();
var statearr_16391_19333 = state_16375__$1;
(statearr_16391_19333[(2)] = null);

(statearr_16391_19333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16376 === (6))){
var inst_16335 = (state_16375[(7)]);
var state_16375__$1 = state_16375;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16375__$1,(11),inst_16335);
} else {
if((state_val_16376 === (17))){
var inst_16360 = (state_16375[(2)]);
var state_16375__$1 = state_16375;
if(cljs.core.truth_(inst_16360)){
var statearr_16392_19334 = state_16375__$1;
(statearr_16392_19334[(1)] = (19));

} else {
var statearr_16393_19335 = state_16375__$1;
(statearr_16393_19335[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16376 === (3))){
var inst_16373 = (state_16375[(2)]);
var state_16375__$1 = state_16375;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16375__$1,inst_16373);
} else {
if((state_val_16376 === (12))){
var inst_16345 = (state_16375[(10)]);
var state_16375__$1 = state_16375;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16375__$1,(14),inst_16345);
} else {
if((state_val_16376 === (2))){
var state_16375__$1 = state_16375;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16375__$1,(4),results);
} else {
if((state_val_16376 === (19))){
var state_16375__$1 = state_16375;
var statearr_16400_19336 = state_16375__$1;
(statearr_16400_19336[(2)] = null);

(statearr_16400_19336[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16376 === (11))){
var inst_16345 = (state_16375[(2)]);
var state_16375__$1 = (function (){var statearr_16401 = state_16375;
(statearr_16401[(10)] = inst_16345);

return statearr_16401;
})();
var statearr_16402_19341 = state_16375__$1;
(statearr_16402_19341[(2)] = null);

(statearr_16402_19341[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16376 === (9))){
var state_16375__$1 = state_16375;
var statearr_16404_19342 = state_16375__$1;
(statearr_16404_19342[(2)] = null);

(statearr_16404_19342[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16376 === (5))){
var state_16375__$1 = state_16375;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16406_19343 = state_16375__$1;
(statearr_16406_19343[(1)] = (8));

} else {
var statearr_16407_19344 = state_16375__$1;
(statearr_16407_19344[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16376 === (14))){
var inst_16352 = (state_16375[(11)]);
var inst_16350 = (state_16375[(8)]);
var inst_16350__$1 = (state_16375[(2)]);
var inst_16351 = (inst_16350__$1 == null);
var inst_16352__$1 = cljs.core.not(inst_16351);
var state_16375__$1 = (function (){var statearr_16408 = state_16375;
(statearr_16408[(11)] = inst_16352__$1);

(statearr_16408[(8)] = inst_16350__$1);

return statearr_16408;
})();
if(inst_16352__$1){
var statearr_16409_19345 = state_16375__$1;
(statearr_16409_19345[(1)] = (15));

} else {
var statearr_16410_19346 = state_16375__$1;
(statearr_16410_19346[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16376 === (16))){
var inst_16352 = (state_16375[(11)]);
var state_16375__$1 = state_16375;
var statearr_16412_19347 = state_16375__$1;
(statearr_16412_19347[(2)] = inst_16352);

(statearr_16412_19347[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16376 === (10))){
var inst_16342 = (state_16375[(2)]);
var state_16375__$1 = state_16375;
var statearr_16413_19348 = state_16375__$1;
(statearr_16413_19348[(2)] = inst_16342);

(statearr_16413_19348[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16376 === (18))){
var inst_16357 = (state_16375[(2)]);
var state_16375__$1 = state_16375;
var statearr_16415_19349 = state_16375__$1;
(statearr_16415_19349[(2)] = inst_16357);

(statearr_16415_19349[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16376 === (8))){
var inst_16339 = cljs.core.async.close_BANG_(to);
var state_16375__$1 = state_16375;
var statearr_16416_19350 = state_16375__$1;
(statearr_16416_19350[(2)] = inst_16339);

(statearr_16416_19350[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15402__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15402__auto____0 = (function (){
var statearr_16417 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16417[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15402__auto__);

(statearr_16417[(1)] = (1));

return statearr_16417;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15402__auto____1 = (function (state_16375){
while(true){
var ret_value__15403__auto__ = (function (){try{while(true){
var result__15404__auto__ = switch__15401__auto__(state_16375);
if(cljs.core.keyword_identical_QMARK_(result__15404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15404__auto__;
}
break;
}
}catch (e16423){var ex__15405__auto__ = e16423;
var statearr_16424_19351 = state_16375;
(statearr_16424_19351[(2)] = ex__15405__auto__);


if(cljs.core.seq((state_16375[(4)]))){
var statearr_16427_19352 = state_16375;
(statearr_16427_19352[(1)] = cljs.core.first((state_16375[(4)])));

} else {
throw ex__15405__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19353 = state_16375;
state_16375 = G__19353;
continue;
} else {
return ret_value__15403__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15402__auto__ = function(state_16375){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15402__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15402__auto____1.call(this,state_16375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15402__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15402__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15402__auto__;
})()
})();
var state__15616__auto__ = (function (){var statearr_16430 = f__15615__auto__();
(statearr_16430[(6)] = c__15614__auto__);

return statearr_16430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15616__auto__);
}));

return c__15614__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__16448 = arguments.length;
switch (G__16448) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__16457 = arguments.length;
switch (G__16457) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__16474 = arguments.length;
switch (G__16474) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__15614__auto___19359 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15615__auto__ = (function (){var switch__15401__auto__ = (function (state_16500){
var state_val_16501 = (state_16500[(1)]);
if((state_val_16501 === (7))){
var inst_16496 = (state_16500[(2)]);
var state_16500__$1 = state_16500;
var statearr_16506_19360 = state_16500__$1;
(statearr_16506_19360[(2)] = inst_16496);

(statearr_16506_19360[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16501 === (1))){
var state_16500__$1 = state_16500;
var statearr_16509_19361 = state_16500__$1;
(statearr_16509_19361[(2)] = null);

(statearr_16509_19361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16501 === (4))){
var inst_16477 = (state_16500[(7)]);
var inst_16477__$1 = (state_16500[(2)]);
var inst_16478 = (inst_16477__$1 == null);
var state_16500__$1 = (function (){var statearr_16515 = state_16500;
(statearr_16515[(7)] = inst_16477__$1);

return statearr_16515;
})();
if(cljs.core.truth_(inst_16478)){
var statearr_16517_19362 = state_16500__$1;
(statearr_16517_19362[(1)] = (5));

} else {
var statearr_16520_19363 = state_16500__$1;
(statearr_16520_19363[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16501 === (13))){
var state_16500__$1 = state_16500;
var statearr_16521_19364 = state_16500__$1;
(statearr_16521_19364[(2)] = null);

(statearr_16521_19364[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16501 === (6))){
var inst_16477 = (state_16500[(7)]);
var inst_16483 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16477) : p.call(null,inst_16477));
var state_16500__$1 = state_16500;
if(cljs.core.truth_(inst_16483)){
var statearr_16530_19365 = state_16500__$1;
(statearr_16530_19365[(1)] = (9));

} else {
var statearr_16535_19366 = state_16500__$1;
(statearr_16535_19366[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16501 === (3))){
var inst_16498 = (state_16500[(2)]);
var state_16500__$1 = state_16500;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16500__$1,inst_16498);
} else {
if((state_val_16501 === (12))){
var state_16500__$1 = state_16500;
var statearr_16537_19367 = state_16500__$1;
(statearr_16537_19367[(2)] = null);

(statearr_16537_19367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16501 === (2))){
var state_16500__$1 = state_16500;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16500__$1,(4),ch);
} else {
if((state_val_16501 === (11))){
var inst_16477 = (state_16500[(7)]);
var inst_16487 = (state_16500[(2)]);
var state_16500__$1 = state_16500;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16500__$1,(8),inst_16487,inst_16477);
} else {
if((state_val_16501 === (9))){
var state_16500__$1 = state_16500;
var statearr_16538_19373 = state_16500__$1;
(statearr_16538_19373[(2)] = tc);

(statearr_16538_19373[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16501 === (5))){
var inst_16480 = cljs.core.async.close_BANG_(tc);
var inst_16481 = cljs.core.async.close_BANG_(fc);
var state_16500__$1 = (function (){var statearr_16542 = state_16500;
(statearr_16542[(8)] = inst_16480);

return statearr_16542;
})();
var statearr_16544_19378 = state_16500__$1;
(statearr_16544_19378[(2)] = inst_16481);

(statearr_16544_19378[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16501 === (14))){
var inst_16494 = (state_16500[(2)]);
var state_16500__$1 = state_16500;
var statearr_16547_19379 = state_16500__$1;
(statearr_16547_19379[(2)] = inst_16494);

(statearr_16547_19379[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16501 === (10))){
var state_16500__$1 = state_16500;
var statearr_16548_19380 = state_16500__$1;
(statearr_16548_19380[(2)] = fc);

(statearr_16548_19380[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16501 === (8))){
var inst_16489 = (state_16500[(2)]);
var state_16500__$1 = state_16500;
if(cljs.core.truth_(inst_16489)){
var statearr_16549_19381 = state_16500__$1;
(statearr_16549_19381[(1)] = (12));

} else {
var statearr_16550_19382 = state_16500__$1;
(statearr_16550_19382[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15402__auto__ = null;
var cljs$core$async$state_machine__15402__auto____0 = (function (){
var statearr_16551 = [null,null,null,null,null,null,null,null,null];
(statearr_16551[(0)] = cljs$core$async$state_machine__15402__auto__);

(statearr_16551[(1)] = (1));

return statearr_16551;
});
var cljs$core$async$state_machine__15402__auto____1 = (function (state_16500){
while(true){
var ret_value__15403__auto__ = (function (){try{while(true){
var result__15404__auto__ = switch__15401__auto__(state_16500);
if(cljs.core.keyword_identical_QMARK_(result__15404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15404__auto__;
}
break;
}
}catch (e16552){var ex__15405__auto__ = e16552;
var statearr_16553_19386 = state_16500;
(statearr_16553_19386[(2)] = ex__15405__auto__);


if(cljs.core.seq((state_16500[(4)]))){
var statearr_16554_19387 = state_16500;
(statearr_16554_19387[(1)] = cljs.core.first((state_16500[(4)])));

} else {
throw ex__15405__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19388 = state_16500;
state_16500 = G__19388;
continue;
} else {
return ret_value__15403__auto__;
}
break;
}
});
cljs$core$async$state_machine__15402__auto__ = function(state_16500){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15402__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15402__auto____1.call(this,state_16500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15402__auto____0;
cljs$core$async$state_machine__15402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15402__auto____1;
return cljs$core$async$state_machine__15402__auto__;
})()
})();
var state__15616__auto__ = (function (){var statearr_16563 = f__15615__auto__();
(statearr_16563[(6)] = c__15614__auto___19359);

return statearr_16563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15616__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__15614__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15615__auto__ = (function (){var switch__15401__auto__ = (function (state_16609){
var state_val_16611 = (state_16609[(1)]);
if((state_val_16611 === (7))){
var inst_16603 = (state_16609[(2)]);
var state_16609__$1 = state_16609;
var statearr_16628_19392 = state_16609__$1;
(statearr_16628_19392[(2)] = inst_16603);

(statearr_16628_19392[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16611 === (1))){
var inst_16573 = init;
var inst_16574 = inst_16573;
var state_16609__$1 = (function (){var statearr_16634 = state_16609;
(statearr_16634[(7)] = inst_16574);

return statearr_16634;
})();
var statearr_16635_19396 = state_16609__$1;
(statearr_16635_19396[(2)] = null);

(statearr_16635_19396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16611 === (4))){
var inst_16577 = (state_16609[(8)]);
var inst_16577__$1 = (state_16609[(2)]);
var inst_16579 = (inst_16577__$1 == null);
var state_16609__$1 = (function (){var statearr_16639 = state_16609;
(statearr_16639[(8)] = inst_16577__$1);

return statearr_16639;
})();
if(cljs.core.truth_(inst_16579)){
var statearr_16640_19397 = state_16609__$1;
(statearr_16640_19397[(1)] = (5));

} else {
var statearr_16643_19398 = state_16609__$1;
(statearr_16643_19398[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16611 === (6))){
var inst_16577 = (state_16609[(8)]);
var inst_16583 = (state_16609[(9)]);
var inst_16574 = (state_16609[(7)]);
var inst_16583__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_16574,inst_16577) : f.call(null,inst_16574,inst_16577));
var inst_16584 = cljs.core.reduced_QMARK_(inst_16583__$1);
var state_16609__$1 = (function (){var statearr_16647 = state_16609;
(statearr_16647[(9)] = inst_16583__$1);

return statearr_16647;
})();
if(inst_16584){
var statearr_16649_19399 = state_16609__$1;
(statearr_16649_19399[(1)] = (8));

} else {
var statearr_16654_19400 = state_16609__$1;
(statearr_16654_19400[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16611 === (3))){
var inst_16606 = (state_16609[(2)]);
var state_16609__$1 = state_16609;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16609__$1,inst_16606);
} else {
if((state_val_16611 === (2))){
var state_16609__$1 = state_16609;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16609__$1,(4),ch);
} else {
if((state_val_16611 === (9))){
var inst_16583 = (state_16609[(9)]);
var inst_16574 = inst_16583;
var state_16609__$1 = (function (){var statearr_16660 = state_16609;
(statearr_16660[(7)] = inst_16574);

return statearr_16660;
})();
var statearr_16661_19405 = state_16609__$1;
(statearr_16661_19405[(2)] = null);

(statearr_16661_19405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16611 === (5))){
var inst_16574 = (state_16609[(7)]);
var state_16609__$1 = state_16609;
var statearr_16662_19409 = state_16609__$1;
(statearr_16662_19409[(2)] = inst_16574);

(statearr_16662_19409[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16611 === (10))){
var inst_16601 = (state_16609[(2)]);
var state_16609__$1 = state_16609;
var statearr_16664_19410 = state_16609__$1;
(statearr_16664_19410[(2)] = inst_16601);

(statearr_16664_19410[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16611 === (8))){
var inst_16583 = (state_16609[(9)]);
var inst_16597 = cljs.core.deref(inst_16583);
var state_16609__$1 = state_16609;
var statearr_16669_19411 = state_16609__$1;
(statearr_16669_19411[(2)] = inst_16597);

(statearr_16669_19411[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__15402__auto__ = null;
var cljs$core$async$reduce_$_state_machine__15402__auto____0 = (function (){
var statearr_16673 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16673[(0)] = cljs$core$async$reduce_$_state_machine__15402__auto__);

(statearr_16673[(1)] = (1));

return statearr_16673;
});
var cljs$core$async$reduce_$_state_machine__15402__auto____1 = (function (state_16609){
while(true){
var ret_value__15403__auto__ = (function (){try{while(true){
var result__15404__auto__ = switch__15401__auto__(state_16609);
if(cljs.core.keyword_identical_QMARK_(result__15404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15404__auto__;
}
break;
}
}catch (e16677){var ex__15405__auto__ = e16677;
var statearr_16678_19412 = state_16609;
(statearr_16678_19412[(2)] = ex__15405__auto__);


if(cljs.core.seq((state_16609[(4)]))){
var statearr_16679_19413 = state_16609;
(statearr_16679_19413[(1)] = cljs.core.first((state_16609[(4)])));

} else {
throw ex__15405__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19417 = state_16609;
state_16609 = G__19417;
continue;
} else {
return ret_value__15403__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__15402__auto__ = function(state_16609){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__15402__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__15402__auto____1.call(this,state_16609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__15402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__15402__auto____0;
cljs$core$async$reduce_$_state_machine__15402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__15402__auto____1;
return cljs$core$async$reduce_$_state_machine__15402__auto__;
})()
})();
var state__15616__auto__ = (function (){var statearr_16681 = f__15615__auto__();
(statearr_16681[(6)] = c__15614__auto__);

return statearr_16681;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15616__auto__);
}));

return c__15614__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__15614__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15615__auto__ = (function (){var switch__15401__auto__ = (function (state_16698){
var state_val_16699 = (state_16698[(1)]);
if((state_val_16699 === (1))){
var inst_16687 = cljs.core.async.reduce(f__$1,init,ch);
var state_16698__$1 = state_16698;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16698__$1,(2),inst_16687);
} else {
if((state_val_16699 === (2))){
var inst_16695 = (state_16698[(2)]);
var inst_16696 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_16695) : f__$1.call(null,inst_16695));
var state_16698__$1 = state_16698;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16698__$1,inst_16696);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__15402__auto__ = null;
var cljs$core$async$transduce_$_state_machine__15402__auto____0 = (function (){
var statearr_16725 = [null,null,null,null,null,null,null];
(statearr_16725[(0)] = cljs$core$async$transduce_$_state_machine__15402__auto__);

(statearr_16725[(1)] = (1));

return statearr_16725;
});
var cljs$core$async$transduce_$_state_machine__15402__auto____1 = (function (state_16698){
while(true){
var ret_value__15403__auto__ = (function (){try{while(true){
var result__15404__auto__ = switch__15401__auto__(state_16698);
if(cljs.core.keyword_identical_QMARK_(result__15404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15404__auto__;
}
break;
}
}catch (e16732){var ex__15405__auto__ = e16732;
var statearr_16733_19421 = state_16698;
(statearr_16733_19421[(2)] = ex__15405__auto__);


if(cljs.core.seq((state_16698[(4)]))){
var statearr_16734_19422 = state_16698;
(statearr_16734_19422[(1)] = cljs.core.first((state_16698[(4)])));

} else {
throw ex__15405__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19423 = state_16698;
state_16698 = G__19423;
continue;
} else {
return ret_value__15403__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__15402__auto__ = function(state_16698){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__15402__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__15402__auto____1.call(this,state_16698);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__15402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__15402__auto____0;
cljs$core$async$transduce_$_state_machine__15402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__15402__auto____1;
return cljs$core$async$transduce_$_state_machine__15402__auto__;
})()
})();
var state__15616__auto__ = (function (){var statearr_16737 = f__15615__auto__();
(statearr_16737[(6)] = c__15614__auto__);

return statearr_16737;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15616__auto__);
}));

return c__15614__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__16742 = arguments.length;
switch (G__16742) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__15614__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15615__auto__ = (function (){var switch__15401__auto__ = (function (state_16794){
var state_val_16795 = (state_16794[(1)]);
if((state_val_16795 === (7))){
var inst_16772 = (state_16794[(2)]);
var state_16794__$1 = state_16794;
var statearr_16796_19428 = state_16794__$1;
(statearr_16796_19428[(2)] = inst_16772);

(statearr_16796_19428[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16795 === (1))){
var inst_16750 = cljs.core.seq(coll);
var inst_16751 = inst_16750;
var state_16794__$1 = (function (){var statearr_16797 = state_16794;
(statearr_16797[(7)] = inst_16751);

return statearr_16797;
})();
var statearr_16798_19429 = state_16794__$1;
(statearr_16798_19429[(2)] = null);

(statearr_16798_19429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16795 === (4))){
var inst_16751 = (state_16794[(7)]);
var inst_16770 = cljs.core.first(inst_16751);
var state_16794__$1 = state_16794;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16794__$1,(7),ch,inst_16770);
} else {
if((state_val_16795 === (13))){
var inst_16784 = (state_16794[(2)]);
var state_16794__$1 = state_16794;
var statearr_16799_19431 = state_16794__$1;
(statearr_16799_19431[(2)] = inst_16784);

(statearr_16799_19431[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16795 === (6))){
var inst_16775 = (state_16794[(2)]);
var state_16794__$1 = state_16794;
if(cljs.core.truth_(inst_16775)){
var statearr_16806_19432 = state_16794__$1;
(statearr_16806_19432[(1)] = (8));

} else {
var statearr_16807_19433 = state_16794__$1;
(statearr_16807_19433[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16795 === (3))){
var inst_16789 = (state_16794[(2)]);
var state_16794__$1 = state_16794;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16794__$1,inst_16789);
} else {
if((state_val_16795 === (12))){
var state_16794__$1 = state_16794;
var statearr_16808_19434 = state_16794__$1;
(statearr_16808_19434[(2)] = null);

(statearr_16808_19434[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16795 === (2))){
var inst_16751 = (state_16794[(7)]);
var state_16794__$1 = state_16794;
if(cljs.core.truth_(inst_16751)){
var statearr_16809_19435 = state_16794__$1;
(statearr_16809_19435[(1)] = (4));

} else {
var statearr_16810_19436 = state_16794__$1;
(statearr_16810_19436[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16795 === (11))){
var inst_16781 = cljs.core.async.close_BANG_(ch);
var state_16794__$1 = state_16794;
var statearr_16815_19437 = state_16794__$1;
(statearr_16815_19437[(2)] = inst_16781);

(statearr_16815_19437[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16795 === (9))){
var state_16794__$1 = state_16794;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16818_19438 = state_16794__$1;
(statearr_16818_19438[(1)] = (11));

} else {
var statearr_16821_19439 = state_16794__$1;
(statearr_16821_19439[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16795 === (5))){
var inst_16751 = (state_16794[(7)]);
var state_16794__$1 = state_16794;
var statearr_16824_19440 = state_16794__$1;
(statearr_16824_19440[(2)] = inst_16751);

(statearr_16824_19440[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16795 === (10))){
var inst_16787 = (state_16794[(2)]);
var state_16794__$1 = state_16794;
var statearr_16825_19441 = state_16794__$1;
(statearr_16825_19441[(2)] = inst_16787);

(statearr_16825_19441[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16795 === (8))){
var inst_16751 = (state_16794[(7)]);
var inst_16777 = cljs.core.next(inst_16751);
var inst_16751__$1 = inst_16777;
var state_16794__$1 = (function (){var statearr_16827 = state_16794;
(statearr_16827[(7)] = inst_16751__$1);

return statearr_16827;
})();
var statearr_16828_19442 = state_16794__$1;
(statearr_16828_19442[(2)] = null);

(statearr_16828_19442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15402__auto__ = null;
var cljs$core$async$state_machine__15402__auto____0 = (function (){
var statearr_16831 = [null,null,null,null,null,null,null,null];
(statearr_16831[(0)] = cljs$core$async$state_machine__15402__auto__);

(statearr_16831[(1)] = (1));

return statearr_16831;
});
var cljs$core$async$state_machine__15402__auto____1 = (function (state_16794){
while(true){
var ret_value__15403__auto__ = (function (){try{while(true){
var result__15404__auto__ = switch__15401__auto__(state_16794);
if(cljs.core.keyword_identical_QMARK_(result__15404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15404__auto__;
}
break;
}
}catch (e16832){var ex__15405__auto__ = e16832;
var statearr_16833_19443 = state_16794;
(statearr_16833_19443[(2)] = ex__15405__auto__);


if(cljs.core.seq((state_16794[(4)]))){
var statearr_16834_19444 = state_16794;
(statearr_16834_19444[(1)] = cljs.core.first((state_16794[(4)])));

} else {
throw ex__15405__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19446 = state_16794;
state_16794 = G__19446;
continue;
} else {
return ret_value__15403__auto__;
}
break;
}
});
cljs$core$async$state_machine__15402__auto__ = function(state_16794){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15402__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15402__auto____1.call(this,state_16794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15402__auto____0;
cljs$core$async$state_machine__15402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15402__auto____1;
return cljs$core$async$state_machine__15402__auto__;
})()
})();
var state__15616__auto__ = (function (){var statearr_16837 = f__15615__auto__();
(statearr_16837[(6)] = c__15614__auto__);

return statearr_16837;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15616__auto__);
}));

return c__15614__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__16841 = arguments.length;
switch (G__16841) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_19449 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_19449(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_19450 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_19450(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_19455 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_19455(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_19461 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_19461(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16862 = (function (ch,cs,meta16863){
this.ch = ch;
this.cs = cs;
this.meta16863 = meta16863;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16862.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16864,meta16863__$1){
var self__ = this;
var _16864__$1 = this;
return (new cljs.core.async.t_cljs$core$async16862(self__.ch,self__.cs,meta16863__$1));
}));

(cljs.core.async.t_cljs$core$async16862.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16864){
var self__ = this;
var _16864__$1 = this;
return self__.meta16863;
}));

(cljs.core.async.t_cljs$core$async16862.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16862.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16862.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16862.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async16862.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async16862.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async16862.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta16863","meta16863",372325206,null)], null);
}));

(cljs.core.async.t_cljs$core$async16862.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16862.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16862");

(cljs.core.async.t_cljs$core$async16862.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16862");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16862.
 */
cljs.core.async.__GT_t_cljs$core$async16862 = (function cljs$core$async$__GT_t_cljs$core$async16862(ch,cs,meta16863){
return (new cljs.core.async.t_cljs$core$async16862(ch,cs,meta16863));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async16862(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__15614__auto___19469 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15615__auto__ = (function (){var switch__15401__auto__ = (function (state_17100){
var state_val_17101 = (state_17100[(1)]);
if((state_val_17101 === (7))){
var inst_17093 = (state_17100[(2)]);
var state_17100__$1 = state_17100;
var statearr_17110_19470 = state_17100__$1;
(statearr_17110_19470[(2)] = inst_17093);

(statearr_17110_19470[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17101 === (20))){
var inst_16929 = (state_17100[(7)]);
var inst_16944 = cljs.core.first(inst_16929);
var inst_16945 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16944,(0),null);
var inst_16946 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16944,(1),null);
var state_17100__$1 = (function (){var statearr_17113 = state_17100;
(statearr_17113[(8)] = inst_16945);

return statearr_17113;
})();
if(cljs.core.truth_(inst_16946)){
var statearr_17116_19476 = state_17100__$1;
(statearr_17116_19476[(1)] = (22));

} else {
var statearr_17118_19477 = state_17100__$1;
(statearr_17118_19477[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17101 === (27))){
var inst_16985 = (state_17100[(9)]);
var inst_16983 = (state_17100[(10)]);
var inst_17005 = (state_17100[(11)]);
var inst_16885 = (state_17100[(12)]);
var inst_17005__$1 = cljs.core._nth(inst_16983,inst_16985);
var inst_17009 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_17005__$1,inst_16885,done);
var state_17100__$1 = (function (){var statearr_17126 = state_17100;
(statearr_17126[(11)] = inst_17005__$1);

return statearr_17126;
})();
if(cljs.core.truth_(inst_17009)){
var statearr_17127_19481 = state_17100__$1;
(statearr_17127_19481[(1)] = (30));

} else {
var statearr_17128_19482 = state_17100__$1;
(statearr_17128_19482[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17101 === (1))){
var state_17100__$1 = state_17100;
var statearr_17129_19483 = state_17100__$1;
(statearr_17129_19483[(2)] = null);

(statearr_17129_19483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17101 === (24))){
var inst_16929 = (state_17100[(7)]);
var inst_16951 = (state_17100[(2)]);
var inst_16953 = cljs.core.next(inst_16929);
var inst_16894 = inst_16953;
var inst_16895 = null;
var inst_16896 = (0);
var inst_16897 = (0);
var state_17100__$1 = (function (){var statearr_17133 = state_17100;
(statearr_17133[(13)] = inst_16951);

(statearr_17133[(14)] = inst_16894);

(statearr_17133[(15)] = inst_16897);

(statearr_17133[(16)] = inst_16895);

(statearr_17133[(17)] = inst_16896);

return statearr_17133;
})();
var statearr_17134_19485 = state_17100__$1;
(statearr_17134_19485[(2)] = null);

(statearr_17134_19485[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17101 === (39))){
var state_17100__$1 = state_17100;
var statearr_17145_19486 = state_17100__$1;
(statearr_17145_19486[(2)] = null);

(statearr_17145_19486[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17101 === (4))){
var inst_16885 = (state_17100[(12)]);
var inst_16885__$1 = (state_17100[(2)]);
var inst_16886 = (inst_16885__$1 == null);
var state_17100__$1 = (function (){var statearr_17147 = state_17100;
(statearr_17147[(12)] = inst_16885__$1);

return statearr_17147;
})();
if(cljs.core.truth_(inst_16886)){
var statearr_17148_19487 = state_17100__$1;
(statearr_17148_19487[(1)] = (5));

} else {
var statearr_17150_19488 = state_17100__$1;
(statearr_17150_19488[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17101 === (15))){
var inst_16894 = (state_17100[(14)]);
var inst_16897 = (state_17100[(15)]);
var inst_16895 = (state_17100[(16)]);
var inst_16896 = (state_17100[(17)]);
var inst_16924 = (state_17100[(2)]);
var inst_16926 = (inst_16897 + (1));
var tmp17136 = inst_16894;
var tmp17137 = inst_16895;
var tmp17138 = inst_16896;
var inst_16894__$1 = tmp17136;
var inst_16895__$1 = tmp17137;
var inst_16896__$1 = tmp17138;
var inst_16897__$1 = inst_16926;
var state_17100__$1 = (function (){var statearr_17157 = state_17100;
(statearr_17157[(14)] = inst_16894__$1);

(statearr_17157[(18)] = inst_16924);

(statearr_17157[(15)] = inst_16897__$1);

(statearr_17157[(16)] = inst_16895__$1);

(statearr_17157[(17)] = inst_16896__$1);

return statearr_17157;
})();
var statearr_17159_19489 = state_17100__$1;
(statearr_17159_19489[(2)] = null);

(statearr_17159_19489[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17101 === (21))){
var inst_16957 = (state_17100[(2)]);
var state_17100__$1 = state_17100;
var statearr_17164_19490 = state_17100__$1;
(statearr_17164_19490[(2)] = inst_16957);

(statearr_17164_19490[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17101 === (31))){
var inst_17005 = (state_17100[(11)]);
var inst_17030 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_17005);
var state_17100__$1 = state_17100;
var statearr_17165_19491 = state_17100__$1;
(statearr_17165_19491[(2)] = inst_17030);

(statearr_17165_19491[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17101 === (32))){
var inst_16985 = (state_17100[(9)]);
var inst_16982 = (state_17100[(19)]);
var inst_16983 = (state_17100[(10)]);
var inst_16984 = (state_17100[(20)]);
var inst_17032 = (state_17100[(2)]);
var inst_17035 = (inst_16985 + (1));
var tmp17160 = inst_16982;
var tmp17161 = inst_16983;
var tmp17162 = inst_16984;
var inst_16982__$1 = tmp17160;
var inst_16983__$1 = tmp17161;
var inst_16984__$1 = tmp17162;
var inst_16985__$1 = inst_17035;
var state_17100__$1 = (function (){var statearr_17167 = state_17100;
(statearr_17167[(9)] = inst_16985__$1);

(statearr_17167[(21)] = inst_17032);

(statearr_17167[(19)] = inst_16982__$1);

(statearr_17167[(10)] = inst_16983__$1);

(statearr_17167[(20)] = inst_16984__$1);

return statearr_17167;
})();
var statearr_17169_19496 = state_17100__$1;
(statearr_17169_19496[(2)] = null);

(statearr_17169_19496[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17101 === (40))){
var inst_17057 = (state_17100[(22)]);
var inst_17061 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_17057);
var state_17100__$1 = state_17100;
var statearr_17170_19497 = state_17100__$1;
(statearr_17170_19497[(2)] = inst_17061);

(statearr_17170_19497[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17101 === (33))){
var inst_17043 = (state_17100[(23)]);
var inst_17049 = cljs.core.chunked_seq_QMARK_(inst_17043);
var state_17100__$1 = state_17100;
if(inst_17049){
var statearr_17171_19498 = state_17100__$1;
(statearr_17171_19498[(1)] = (36));

} else {
var statearr_17172_19499 = state_17100__$1;
(statearr_17172_19499[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17101 === (13))){
var inst_16918 = (state_17100[(24)]);
var inst_16921 = cljs.core.async.close_BANG_(inst_16918);
var state_17100__$1 = state_17100;
var statearr_17175_19500 = state_17100__$1;
(statearr_17175_19500[(2)] = inst_16921);

(statearr_17175_19500[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17101 === (22))){
var inst_16945 = (state_17100[(8)]);
var inst_16948 = cljs.core.async.close_BANG_(inst_16945);
var state_17100__$1 = state_17100;
var statearr_17183_19501 = state_17100__$1;
(statearr_17183_19501[(2)] = inst_16948);

(statearr_17183_19501[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17101 === (36))){
var inst_17043 = (state_17100[(23)]);
var inst_17051 = cljs.core.chunk_first(inst_17043);
var inst_17052 = cljs.core.chunk_rest(inst_17043);
var inst_17054 = cljs.core.count(inst_17051);
var inst_16982 = inst_17052;
var inst_16983 = inst_17051;
var inst_16984 = inst_17054;
var inst_16985 = (0);
var state_17100__$1 = (function (){var statearr_17203 = state_17100;
(statearr_17203[(9)] = inst_16985);

(statearr_17203[(19)] = inst_16982);

(statearr_17203[(10)] = inst_16983);

(statearr_17203[(20)] = inst_16984);

return statearr_17203;
})();
var statearr_17217_19506 = state_17100__$1;
(statearr_17217_19506[(2)] = null);

(statearr_17217_19506[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17101 === (41))){
var inst_17043 = (state_17100[(23)]);
var inst_17063 = (state_17100[(2)]);
var inst_17066 = cljs.core.next(inst_17043);
var inst_16982 = inst_17066;
var inst_16983 = null;
var inst_16984 = (0);
var inst_16985 = (0);
var state_17100__$1 = (function (){var statearr_17241 = state_17100;
(statearr_17241[(25)] = inst_17063);

(statearr_17241[(9)] = inst_16985);

(statearr_17241[(19)] = inst_16982);

(statearr_17241[(10)] = inst_16983);

(statearr_17241[(20)] = inst_16984);

return statearr_17241;
})();
var statearr_17242_19510 = state_17100__$1;
(statearr_17242_19510[(2)] = null);

(statearr_17242_19510[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17101 === (43))){
var state_17100__$1 = state_17100;
var statearr_17249_19511 = state_17100__$1;
(statearr_17249_19511[(2)] = null);

(statearr_17249_19511[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17101 === (29))){
var inst_17078 = (state_17100[(2)]);
var state_17100__$1 = state_17100;
var statearr_17264_19513 = state_17100__$1;
(statearr_17264_19513[(2)] = inst_17078);

(statearr_17264_19513[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17101 === (44))){
var inst_17089 = (state_17100[(2)]);
var state_17100__$1 = (function (){var statearr_17277 = state_17100;
(statearr_17277[(26)] = inst_17089);

return statearr_17277;
})();
var statearr_17278_19514 = state_17100__$1;
(statearr_17278_19514[(2)] = null);

(statearr_17278_19514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17101 === (6))){
var inst_16967 = (state_17100[(27)]);
var inst_16966 = cljs.core.deref(cs);
var inst_16967__$1 = cljs.core.keys(inst_16966);
var inst_16972 = cljs.core.count(inst_16967__$1);
var inst_16973 = cljs.core.reset_BANG_(dctr,inst_16972);
var inst_16981 = cljs.core.seq(inst_16967__$1);
var inst_16982 = inst_16981;
var inst_16983 = null;
var inst_16984 = (0);
var inst_16985 = (0);
var state_17100__$1 = (function (){var statearr_17286 = state_17100;
(statearr_17286[(28)] = inst_16973);

(statearr_17286[(9)] = inst_16985);

(statearr_17286[(27)] = inst_16967__$1);

(statearr_17286[(19)] = inst_16982);

(statearr_17286[(10)] = inst_16983);

(statearr_17286[(20)] = inst_16984);

return statearr_17286;
})();
var statearr_17292_19517 = state_17100__$1;
(statearr_17292_19517[(2)] = null);

(statearr_17292_19517[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17101 === (28))){
var inst_16982 = (state_17100[(19)]);
var inst_17043 = (state_17100[(23)]);
var inst_17043__$1 = cljs.core.seq(inst_16982);
var state_17100__$1 = (function (){var statearr_17297 = state_17100;
(statearr_17297[(23)] = inst_17043__$1);

return statearr_17297;
})();
if(inst_17043__$1){
var statearr_17298_19520 = state_17100__$1;
(statearr_17298_19520[(1)] = (33));

} else {
var statearr_17299_19521 = state_17100__$1;
(statearr_17299_19521[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17101 === (25))){
var inst_16985 = (state_17100[(9)]);
var inst_16984 = (state_17100[(20)]);
var inst_16991 = (inst_16985 < inst_16984);
var inst_16993 = inst_16991;
var state_17100__$1 = state_17100;
if(cljs.core.truth_(inst_16993)){
var statearr_17304_19525 = state_17100__$1;
(statearr_17304_19525[(1)] = (27));

} else {
var statearr_17308_19526 = state_17100__$1;
(statearr_17308_19526[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17101 === (34))){
var state_17100__$1 = state_17100;
var statearr_17312_19528 = state_17100__$1;
(statearr_17312_19528[(2)] = null);

(statearr_17312_19528[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17101 === (17))){
var state_17100__$1 = state_17100;
var statearr_17315_19529 = state_17100__$1;
(statearr_17315_19529[(2)] = null);

(statearr_17315_19529[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17101 === (3))){
var inst_17095 = (state_17100[(2)]);
var state_17100__$1 = state_17100;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17100__$1,inst_17095);
} else {
if((state_val_17101 === (12))){
var inst_16962 = (state_17100[(2)]);
var state_17100__$1 = state_17100;
var statearr_17317_19530 = state_17100__$1;
(statearr_17317_19530[(2)] = inst_16962);

(statearr_17317_19530[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17101 === (2))){
var state_17100__$1 = state_17100;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17100__$1,(4),ch);
} else {
if((state_val_17101 === (23))){
var state_17100__$1 = state_17100;
var statearr_17325_19534 = state_17100__$1;
(statearr_17325_19534[(2)] = null);

(statearr_17325_19534[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17101 === (35))){
var inst_17072 = (state_17100[(2)]);
var state_17100__$1 = state_17100;
var statearr_17328_19539 = state_17100__$1;
(statearr_17328_19539[(2)] = inst_17072);

(statearr_17328_19539[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17101 === (19))){
var inst_16929 = (state_17100[(7)]);
var inst_16933 = cljs.core.chunk_first(inst_16929);
var inst_16935 = cljs.core.chunk_rest(inst_16929);
var inst_16937 = cljs.core.count(inst_16933);
var inst_16894 = inst_16935;
var inst_16895 = inst_16933;
var inst_16896 = inst_16937;
var inst_16897 = (0);
var state_17100__$1 = (function (){var statearr_17335 = state_17100;
(statearr_17335[(14)] = inst_16894);

(statearr_17335[(15)] = inst_16897);

(statearr_17335[(16)] = inst_16895);

(statearr_17335[(17)] = inst_16896);

return statearr_17335;
})();
var statearr_17337_19546 = state_17100__$1;
(statearr_17337_19546[(2)] = null);

(statearr_17337_19546[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17101 === (11))){
var inst_16894 = (state_17100[(14)]);
var inst_16929 = (state_17100[(7)]);
var inst_16929__$1 = cljs.core.seq(inst_16894);
var state_17100__$1 = (function (){var statearr_17347 = state_17100;
(statearr_17347[(7)] = inst_16929__$1);

return statearr_17347;
})();
if(inst_16929__$1){
var statearr_17350_19548 = state_17100__$1;
(statearr_17350_19548[(1)] = (16));

} else {
var statearr_17356_19549 = state_17100__$1;
(statearr_17356_19549[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17101 === (9))){
var inst_16964 = (state_17100[(2)]);
var state_17100__$1 = state_17100;
var statearr_17358_19550 = state_17100__$1;
(statearr_17358_19550[(2)] = inst_16964);

(statearr_17358_19550[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17101 === (5))){
var inst_16892 = cljs.core.deref(cs);
var inst_16893 = cljs.core.seq(inst_16892);
var inst_16894 = inst_16893;
var inst_16895 = null;
var inst_16896 = (0);
var inst_16897 = (0);
var state_17100__$1 = (function (){var statearr_17364 = state_17100;
(statearr_17364[(14)] = inst_16894);

(statearr_17364[(15)] = inst_16897);

(statearr_17364[(16)] = inst_16895);

(statearr_17364[(17)] = inst_16896);

return statearr_17364;
})();
var statearr_17366_19551 = state_17100__$1;
(statearr_17366_19551[(2)] = null);

(statearr_17366_19551[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17101 === (14))){
var state_17100__$1 = state_17100;
var statearr_17372_19556 = state_17100__$1;
(statearr_17372_19556[(2)] = null);

(statearr_17372_19556[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17101 === (45))){
var inst_17086 = (state_17100[(2)]);
var state_17100__$1 = state_17100;
var statearr_17378_19557 = state_17100__$1;
(statearr_17378_19557[(2)] = inst_17086);

(statearr_17378_19557[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17101 === (26))){
var inst_16967 = (state_17100[(27)]);
var inst_17080 = (state_17100[(2)]);
var inst_17081 = cljs.core.seq(inst_16967);
var state_17100__$1 = (function (){var statearr_17379 = state_17100;
(statearr_17379[(29)] = inst_17080);

return statearr_17379;
})();
if(inst_17081){
var statearr_17380_19562 = state_17100__$1;
(statearr_17380_19562[(1)] = (42));

} else {
var statearr_17381_19563 = state_17100__$1;
(statearr_17381_19563[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17101 === (16))){
var inst_16929 = (state_17100[(7)]);
var inst_16931 = cljs.core.chunked_seq_QMARK_(inst_16929);
var state_17100__$1 = state_17100;
if(inst_16931){
var statearr_17386_19564 = state_17100__$1;
(statearr_17386_19564[(1)] = (19));

} else {
var statearr_17390_19565 = state_17100__$1;
(statearr_17390_19565[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17101 === (38))){
var inst_17069 = (state_17100[(2)]);
var state_17100__$1 = state_17100;
var statearr_17391_19566 = state_17100__$1;
(statearr_17391_19566[(2)] = inst_17069);

(statearr_17391_19566[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17101 === (30))){
var state_17100__$1 = state_17100;
var statearr_17392_19567 = state_17100__$1;
(statearr_17392_19567[(2)] = null);

(statearr_17392_19567[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17101 === (10))){
var inst_16897 = (state_17100[(15)]);
var inst_16895 = (state_17100[(16)]);
var inst_16917 = cljs.core._nth(inst_16895,inst_16897);
var inst_16918 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16917,(0),null);
var inst_16919 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16917,(1),null);
var state_17100__$1 = (function (){var statearr_17393 = state_17100;
(statearr_17393[(24)] = inst_16918);

return statearr_17393;
})();
if(cljs.core.truth_(inst_16919)){
var statearr_17394_19572 = state_17100__$1;
(statearr_17394_19572[(1)] = (13));

} else {
var statearr_17395_19573 = state_17100__$1;
(statearr_17395_19573[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17101 === (18))){
var inst_16960 = (state_17100[(2)]);
var state_17100__$1 = state_17100;
var statearr_17396_19574 = state_17100__$1;
(statearr_17396_19574[(2)] = inst_16960);

(statearr_17396_19574[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17101 === (42))){
var state_17100__$1 = state_17100;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17100__$1,(45),dchan);
} else {
if((state_val_17101 === (37))){
var inst_17043 = (state_17100[(23)]);
var inst_17057 = (state_17100[(22)]);
var inst_16885 = (state_17100[(12)]);
var inst_17057__$1 = cljs.core.first(inst_17043);
var inst_17058 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_17057__$1,inst_16885,done);
var state_17100__$1 = (function (){var statearr_17402 = state_17100;
(statearr_17402[(22)] = inst_17057__$1);

return statearr_17402;
})();
if(cljs.core.truth_(inst_17058)){
var statearr_17406_19578 = state_17100__$1;
(statearr_17406_19578[(1)] = (39));

} else {
var statearr_17407_19579 = state_17100__$1;
(statearr_17407_19579[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17101 === (8))){
var inst_16897 = (state_17100[(15)]);
var inst_16896 = (state_17100[(17)]);
var inst_16906 = (inst_16897 < inst_16896);
var inst_16907 = inst_16906;
var state_17100__$1 = state_17100;
if(cljs.core.truth_(inst_16907)){
var statearr_17415_19581 = state_17100__$1;
(statearr_17415_19581[(1)] = (10));

} else {
var statearr_17416_19582 = state_17100__$1;
(statearr_17416_19582[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__15402__auto__ = null;
var cljs$core$async$mult_$_state_machine__15402__auto____0 = (function (){
var statearr_17419 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17419[(0)] = cljs$core$async$mult_$_state_machine__15402__auto__);

(statearr_17419[(1)] = (1));

return statearr_17419;
});
var cljs$core$async$mult_$_state_machine__15402__auto____1 = (function (state_17100){
while(true){
var ret_value__15403__auto__ = (function (){try{while(true){
var result__15404__auto__ = switch__15401__auto__(state_17100);
if(cljs.core.keyword_identical_QMARK_(result__15404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15404__auto__;
}
break;
}
}catch (e17420){var ex__15405__auto__ = e17420;
var statearr_17421_19592 = state_17100;
(statearr_17421_19592[(2)] = ex__15405__auto__);


if(cljs.core.seq((state_17100[(4)]))){
var statearr_17422_19593 = state_17100;
(statearr_17422_19593[(1)] = cljs.core.first((state_17100[(4)])));

} else {
throw ex__15405__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19595 = state_17100;
state_17100 = G__19595;
continue;
} else {
return ret_value__15403__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__15402__auto__ = function(state_17100){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__15402__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__15402__auto____1.call(this,state_17100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__15402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__15402__auto____0;
cljs$core$async$mult_$_state_machine__15402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__15402__auto____1;
return cljs$core$async$mult_$_state_machine__15402__auto__;
})()
})();
var state__15616__auto__ = (function (){var statearr_17430 = f__15615__auto__();
(statearr_17430[(6)] = c__15614__auto___19469);

return statearr_17430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15616__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__17432 = arguments.length;
switch (G__17432) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_19598 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_19598(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_19599 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_19599(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_19600 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_19600(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_19608 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_19608(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_19616 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_19616(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___19621 = arguments.length;
var i__5770__auto___19622 = (0);
while(true){
if((i__5770__auto___19622 < len__5769__auto___19621)){
args__5775__auto__.push((arguments[i__5770__auto___19622]));

var G__19623 = (i__5770__auto___19622 + (1));
i__5770__auto___19622 = G__19623;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__17468){
var map__17469 = p__17468;
var map__17469__$1 = cljs.core.__destructure_map(map__17469);
var opts = map__17469__$1;
var statearr_17470_19627 = state;
(statearr_17470_19627[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_17473_19628 = state;
(statearr_17473_19628[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_17475_19630 = state;
(statearr_17475_19630[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq17460){
var G__17461 = cljs.core.first(seq17460);
var seq17460__$1 = cljs.core.next(seq17460);
var G__17462 = cljs.core.first(seq17460__$1);
var seq17460__$2 = cljs.core.next(seq17460__$1);
var G__17463 = cljs.core.first(seq17460__$2);
var seq17460__$3 = cljs.core.next(seq17460__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17461,G__17462,G__17463,seq17460__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17492 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17493){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta17493 = meta17493;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17492.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17494,meta17493__$1){
var self__ = this;
var _17494__$1 = this;
return (new cljs.core.async.t_cljs$core$async17492(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta17493__$1));
}));

(cljs.core.async.t_cljs$core$async17492.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17494){
var self__ = this;
var _17494__$1 = this;
return self__.meta17493;
}));

(cljs.core.async.t_cljs$core$async17492.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17492.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async17492.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17492.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17492.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17492.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17492.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17492.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17492.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta17493","meta17493",167891240,null)], null);
}));

(cljs.core.async.t_cljs$core$async17492.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17492.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17492");

(cljs.core.async.t_cljs$core$async17492.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17492");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17492.
 */
cljs.core.async.__GT_t_cljs$core$async17492 = (function cljs$core$async$__GT_t_cljs$core$async17492(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17493){
return (new cljs.core.async.t_cljs$core$async17492(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17493));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async17492(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__15614__auto___19642 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15615__auto__ = (function (){var switch__15401__auto__ = (function (state_17596){
var state_val_17597 = (state_17596[(1)]);
if((state_val_17597 === (7))){
var inst_17551 = (state_17596[(2)]);
var state_17596__$1 = state_17596;
if(cljs.core.truth_(inst_17551)){
var statearr_17598_19643 = state_17596__$1;
(statearr_17598_19643[(1)] = (8));

} else {
var statearr_17599_19644 = state_17596__$1;
(statearr_17599_19644[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17597 === (20))){
var inst_17543 = (state_17596[(7)]);
var state_17596__$1 = state_17596;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17596__$1,(23),out,inst_17543);
} else {
if((state_val_17597 === (1))){
var inst_17525 = calc_state();
var inst_17527 = cljs.core.__destructure_map(inst_17525);
var inst_17528 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17527,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_17529 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17527,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17530 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17527,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_17531 = inst_17525;
var state_17596__$1 = (function (){var statearr_17616 = state_17596;
(statearr_17616[(8)] = inst_17529);

(statearr_17616[(9)] = inst_17531);

(statearr_17616[(10)] = inst_17528);

(statearr_17616[(11)] = inst_17530);

return statearr_17616;
})();
var statearr_17619_19649 = state_17596__$1;
(statearr_17619_19649[(2)] = null);

(statearr_17619_19649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17597 === (24))){
var inst_17534 = (state_17596[(12)]);
var inst_17531 = inst_17534;
var state_17596__$1 = (function (){var statearr_17621 = state_17596;
(statearr_17621[(9)] = inst_17531);

return statearr_17621;
})();
var statearr_17622_19653 = state_17596__$1;
(statearr_17622_19653[(2)] = null);

(statearr_17622_19653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17597 === (4))){
var inst_17543 = (state_17596[(7)]);
var inst_17545 = (state_17596[(13)]);
var inst_17542 = (state_17596[(2)]);
var inst_17543__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17542,(0),null);
var inst_17544 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17542,(1),null);
var inst_17545__$1 = (inst_17543__$1 == null);
var state_17596__$1 = (function (){var statearr_17625 = state_17596;
(statearr_17625[(7)] = inst_17543__$1);

(statearr_17625[(13)] = inst_17545__$1);

(statearr_17625[(14)] = inst_17544);

return statearr_17625;
})();
if(cljs.core.truth_(inst_17545__$1)){
var statearr_17626_19655 = state_17596__$1;
(statearr_17626_19655[(1)] = (5));

} else {
var statearr_17627_19656 = state_17596__$1;
(statearr_17627_19656[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17597 === (15))){
var inst_17567 = (state_17596[(15)]);
var inst_17535 = (state_17596[(16)]);
var inst_17567__$1 = cljs.core.empty_QMARK_(inst_17535);
var state_17596__$1 = (function (){var statearr_17630 = state_17596;
(statearr_17630[(15)] = inst_17567__$1);

return statearr_17630;
})();
if(inst_17567__$1){
var statearr_17631_19657 = state_17596__$1;
(statearr_17631_19657[(1)] = (17));

} else {
var statearr_17632_19658 = state_17596__$1;
(statearr_17632_19658[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17597 === (21))){
var inst_17534 = (state_17596[(12)]);
var inst_17531 = inst_17534;
var state_17596__$1 = (function (){var statearr_17633 = state_17596;
(statearr_17633[(9)] = inst_17531);

return statearr_17633;
})();
var statearr_17634_19659 = state_17596__$1;
(statearr_17634_19659[(2)] = null);

(statearr_17634_19659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17597 === (13))){
var inst_17559 = (state_17596[(2)]);
var inst_17560 = calc_state();
var inst_17531 = inst_17560;
var state_17596__$1 = (function (){var statearr_17644 = state_17596;
(statearr_17644[(9)] = inst_17531);

(statearr_17644[(17)] = inst_17559);

return statearr_17644;
})();
var statearr_17646_19660 = state_17596__$1;
(statearr_17646_19660[(2)] = null);

(statearr_17646_19660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17597 === (22))){
var inst_17588 = (state_17596[(2)]);
var state_17596__$1 = state_17596;
var statearr_17651_19661 = state_17596__$1;
(statearr_17651_19661[(2)] = inst_17588);

(statearr_17651_19661[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17597 === (6))){
var inst_17544 = (state_17596[(14)]);
var inst_17549 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17544,change);
var state_17596__$1 = state_17596;
var statearr_17653_19665 = state_17596__$1;
(statearr_17653_19665[(2)] = inst_17549);

(statearr_17653_19665[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17597 === (25))){
var state_17596__$1 = state_17596;
var statearr_17657_19667 = state_17596__$1;
(statearr_17657_19667[(2)] = null);

(statearr_17657_19667[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17597 === (17))){
var inst_17544 = (state_17596[(14)]);
var inst_17536 = (state_17596[(18)]);
var inst_17569 = (inst_17536.cljs$core$IFn$_invoke$arity$1 ? inst_17536.cljs$core$IFn$_invoke$arity$1(inst_17544) : inst_17536.call(null,inst_17544));
var inst_17570 = cljs.core.not(inst_17569);
var state_17596__$1 = state_17596;
var statearr_17658_19668 = state_17596__$1;
(statearr_17658_19668[(2)] = inst_17570);

(statearr_17658_19668[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17597 === (3))){
var inst_17594 = (state_17596[(2)]);
var state_17596__$1 = state_17596;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17596__$1,inst_17594);
} else {
if((state_val_17597 === (12))){
var state_17596__$1 = state_17596;
var statearr_17659_19672 = state_17596__$1;
(statearr_17659_19672[(2)] = null);

(statearr_17659_19672[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17597 === (2))){
var inst_17531 = (state_17596[(9)]);
var inst_17534 = (state_17596[(12)]);
var inst_17534__$1 = cljs.core.__destructure_map(inst_17531);
var inst_17535 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17534__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_17536 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17534__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17537 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17534__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_17596__$1 = (function (){var statearr_17664 = state_17596;
(statearr_17664[(12)] = inst_17534__$1);

(statearr_17664[(16)] = inst_17535);

(statearr_17664[(18)] = inst_17536);

return statearr_17664;
})();
return cljs.core.async.ioc_alts_BANG_(state_17596__$1,(4),inst_17537);
} else {
if((state_val_17597 === (23))){
var inst_17578 = (state_17596[(2)]);
var state_17596__$1 = state_17596;
if(cljs.core.truth_(inst_17578)){
var statearr_17666_19674 = state_17596__$1;
(statearr_17666_19674[(1)] = (24));

} else {
var statearr_17667_19675 = state_17596__$1;
(statearr_17667_19675[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17597 === (19))){
var inst_17573 = (state_17596[(2)]);
var state_17596__$1 = state_17596;
var statearr_17671_19679 = state_17596__$1;
(statearr_17671_19679[(2)] = inst_17573);

(statearr_17671_19679[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17597 === (11))){
var inst_17544 = (state_17596[(14)]);
var inst_17556 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_17544);
var state_17596__$1 = state_17596;
var statearr_17673_19681 = state_17596__$1;
(statearr_17673_19681[(2)] = inst_17556);

(statearr_17673_19681[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17597 === (9))){
var inst_17563 = (state_17596[(19)]);
var inst_17544 = (state_17596[(14)]);
var inst_17535 = (state_17596[(16)]);
var inst_17563__$1 = (inst_17535.cljs$core$IFn$_invoke$arity$1 ? inst_17535.cljs$core$IFn$_invoke$arity$1(inst_17544) : inst_17535.call(null,inst_17544));
var state_17596__$1 = (function (){var statearr_17674 = state_17596;
(statearr_17674[(19)] = inst_17563__$1);

return statearr_17674;
})();
if(cljs.core.truth_(inst_17563__$1)){
var statearr_17675_19682 = state_17596__$1;
(statearr_17675_19682[(1)] = (14));

} else {
var statearr_17677_19683 = state_17596__$1;
(statearr_17677_19683[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17597 === (5))){
var inst_17545 = (state_17596[(13)]);
var state_17596__$1 = state_17596;
var statearr_17680_19684 = state_17596__$1;
(statearr_17680_19684[(2)] = inst_17545);

(statearr_17680_19684[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17597 === (14))){
var inst_17563 = (state_17596[(19)]);
var state_17596__$1 = state_17596;
var statearr_17681_19685 = state_17596__$1;
(statearr_17681_19685[(2)] = inst_17563);

(statearr_17681_19685[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17597 === (26))){
var inst_17583 = (state_17596[(2)]);
var state_17596__$1 = state_17596;
var statearr_17683_19686 = state_17596__$1;
(statearr_17683_19686[(2)] = inst_17583);

(statearr_17683_19686[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17597 === (16))){
var inst_17575 = (state_17596[(2)]);
var state_17596__$1 = state_17596;
if(cljs.core.truth_(inst_17575)){
var statearr_17684_19687 = state_17596__$1;
(statearr_17684_19687[(1)] = (20));

} else {
var statearr_17685_19688 = state_17596__$1;
(statearr_17685_19688[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17597 === (10))){
var inst_17590 = (state_17596[(2)]);
var state_17596__$1 = state_17596;
var statearr_17686_19689 = state_17596__$1;
(statearr_17686_19689[(2)] = inst_17590);

(statearr_17686_19689[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17597 === (18))){
var inst_17567 = (state_17596[(15)]);
var state_17596__$1 = state_17596;
var statearr_17688_19690 = state_17596__$1;
(statearr_17688_19690[(2)] = inst_17567);

(statearr_17688_19690[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17597 === (8))){
var inst_17543 = (state_17596[(7)]);
var inst_17553 = (inst_17543 == null);
var state_17596__$1 = state_17596;
if(cljs.core.truth_(inst_17553)){
var statearr_17694_19692 = state_17596__$1;
(statearr_17694_19692[(1)] = (11));

} else {
var statearr_17695_19693 = state_17596__$1;
(statearr_17695_19693[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__15402__auto__ = null;
var cljs$core$async$mix_$_state_machine__15402__auto____0 = (function (){
var statearr_17696 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17696[(0)] = cljs$core$async$mix_$_state_machine__15402__auto__);

(statearr_17696[(1)] = (1));

return statearr_17696;
});
var cljs$core$async$mix_$_state_machine__15402__auto____1 = (function (state_17596){
while(true){
var ret_value__15403__auto__ = (function (){try{while(true){
var result__15404__auto__ = switch__15401__auto__(state_17596);
if(cljs.core.keyword_identical_QMARK_(result__15404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15404__auto__;
}
break;
}
}catch (e17697){var ex__15405__auto__ = e17697;
var statearr_17698_19702 = state_17596;
(statearr_17698_19702[(2)] = ex__15405__auto__);


if(cljs.core.seq((state_17596[(4)]))){
var statearr_17699_19703 = state_17596;
(statearr_17699_19703[(1)] = cljs.core.first((state_17596[(4)])));

} else {
throw ex__15405__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19704 = state_17596;
state_17596 = G__19704;
continue;
} else {
return ret_value__15403__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__15402__auto__ = function(state_17596){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__15402__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__15402__auto____1.call(this,state_17596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__15402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__15402__auto____0;
cljs$core$async$mix_$_state_machine__15402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__15402__auto____1;
return cljs$core$async$mix_$_state_machine__15402__auto__;
})()
})();
var state__15616__auto__ = (function (){var statearr_17702 = f__15615__auto__();
(statearr_17702[(6)] = c__15614__auto___19642);

return statearr_17702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15616__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_19706 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_19706(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_19707 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_19707(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_19708 = (function() {
var G__19709 = null;
var G__19709__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__19709__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__19709 = function(p,v){
switch(arguments.length){
case 1:
return G__19709__1.call(this,p);
case 2:
return G__19709__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19709.cljs$core$IFn$_invoke$arity$1 = G__19709__1;
G__19709.cljs$core$IFn$_invoke$arity$2 = G__19709__2;
return G__19709;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__17744 = arguments.length;
switch (G__17744) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_19708(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_19708(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17800 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta17801){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta17801 = meta17801;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17800.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17802,meta17801__$1){
var self__ = this;
var _17802__$1 = this;
return (new cljs.core.async.t_cljs$core$async17800(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta17801__$1));
}));

(cljs.core.async.t_cljs$core$async17800.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17802){
var self__ = this;
var _17802__$1 = this;
return self__.meta17801;
}));

(cljs.core.async.t_cljs$core$async17800.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17800.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async17800.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17800.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async17800.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async17800.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async17800.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async17800.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta17801","meta17801",-980556658,null)], null);
}));

(cljs.core.async.t_cljs$core$async17800.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17800.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17800");

(cljs.core.async.t_cljs$core$async17800.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17800");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17800.
 */
cljs.core.async.__GT_t_cljs$core$async17800 = (function cljs$core$async$__GT_t_cljs$core$async17800(ch,topic_fn,buf_fn,mults,ensure_mult,meta17801){
return (new cljs.core.async.t_cljs$core$async17800(ch,topic_fn,buf_fn,mults,ensure_mult,meta17801));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__17784 = arguments.length;
switch (G__17784) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__17778_SHARP_){
if(cljs.core.truth_((p1__17778_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__17778_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__17778_SHARP_.call(null,topic)))){
return p1__17778_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17778_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async17800(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__15614__auto___19718 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15615__auto__ = (function (){var switch__15401__auto__ = (function (state_18075){
var state_val_18076 = (state_18075[(1)]);
if((state_val_18076 === (7))){
var inst_18053 = (state_18075[(2)]);
var state_18075__$1 = state_18075;
var statearr_18083_19719 = state_18075__$1;
(statearr_18083_19719[(2)] = inst_18053);

(statearr_18083_19719[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18076 === (20))){
var state_18075__$1 = state_18075;
var statearr_18089_19720 = state_18075__$1;
(statearr_18089_19720[(2)] = null);

(statearr_18089_19720[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18076 === (1))){
var state_18075__$1 = state_18075;
var statearr_18092_19721 = state_18075__$1;
(statearr_18092_19721[(2)] = null);

(statearr_18092_19721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18076 === (24))){
var inst_18028 = (state_18075[(7)]);
var inst_18041 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_18028);
var state_18075__$1 = state_18075;
var statearr_18099_19722 = state_18075__$1;
(statearr_18099_19722[(2)] = inst_18041);

(statearr_18099_19722[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18076 === (4))){
var inst_17935 = (state_18075[(8)]);
var inst_17935__$1 = (state_18075[(2)]);
var inst_17936 = (inst_17935__$1 == null);
var state_18075__$1 = (function (){var statearr_18106 = state_18075;
(statearr_18106[(8)] = inst_17935__$1);

return statearr_18106;
})();
if(cljs.core.truth_(inst_17936)){
var statearr_18110_19723 = state_18075__$1;
(statearr_18110_19723[(1)] = (5));

} else {
var statearr_18112_19724 = state_18075__$1;
(statearr_18112_19724[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18076 === (15))){
var inst_18016 = (state_18075[(2)]);
var state_18075__$1 = state_18075;
var statearr_18115_19725 = state_18075__$1;
(statearr_18115_19725[(2)] = inst_18016);

(statearr_18115_19725[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18076 === (21))){
var inst_18050 = (state_18075[(2)]);
var state_18075__$1 = (function (){var statearr_18119 = state_18075;
(statearr_18119[(9)] = inst_18050);

return statearr_18119;
})();
var statearr_18120_19726 = state_18075__$1;
(statearr_18120_19726[(2)] = null);

(statearr_18120_19726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18076 === (13))){
var inst_17985 = (state_18075[(10)]);
var inst_17989 = cljs.core.chunked_seq_QMARK_(inst_17985);
var state_18075__$1 = state_18075;
if(inst_17989){
var statearr_18125_19727 = state_18075__$1;
(statearr_18125_19727[(1)] = (16));

} else {
var statearr_18127_19729 = state_18075__$1;
(statearr_18127_19729[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18076 === (22))){
var inst_18038 = (state_18075[(2)]);
var state_18075__$1 = state_18075;
if(cljs.core.truth_(inst_18038)){
var statearr_18131_19730 = state_18075__$1;
(statearr_18131_19730[(1)] = (23));

} else {
var statearr_18134_19732 = state_18075__$1;
(statearr_18134_19732[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18076 === (6))){
var inst_17935 = (state_18075[(8)]);
var inst_18034 = (state_18075[(11)]);
var inst_18028 = (state_18075[(7)]);
var inst_18028__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_17935) : topic_fn.call(null,inst_17935));
var inst_18033 = cljs.core.deref(mults);
var inst_18034__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18033,inst_18028__$1);
var state_18075__$1 = (function (){var statearr_18142 = state_18075;
(statearr_18142[(11)] = inst_18034__$1);

(statearr_18142[(7)] = inst_18028__$1);

return statearr_18142;
})();
if(cljs.core.truth_(inst_18034__$1)){
var statearr_18143_19733 = state_18075__$1;
(statearr_18143_19733[(1)] = (19));

} else {
var statearr_18145_19734 = state_18075__$1;
(statearr_18145_19734[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18076 === (25))){
var inst_18047 = (state_18075[(2)]);
var state_18075__$1 = state_18075;
var statearr_18150_19735 = state_18075__$1;
(statearr_18150_19735[(2)] = inst_18047);

(statearr_18150_19735[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18076 === (17))){
var inst_17985 = (state_18075[(10)]);
var inst_18002 = cljs.core.first(inst_17985);
var inst_18004 = cljs.core.async.muxch_STAR_(inst_18002);
var inst_18005 = cljs.core.async.close_BANG_(inst_18004);
var inst_18009 = cljs.core.next(inst_17985);
var inst_17951 = inst_18009;
var inst_17952 = null;
var inst_17953 = (0);
var inst_17954 = (0);
var state_18075__$1 = (function (){var statearr_18154 = state_18075;
(statearr_18154[(12)] = inst_18005);

(statearr_18154[(13)] = inst_17954);

(statearr_18154[(14)] = inst_17953);

(statearr_18154[(15)] = inst_17951);

(statearr_18154[(16)] = inst_17952);

return statearr_18154;
})();
var statearr_18158_19736 = state_18075__$1;
(statearr_18158_19736[(2)] = null);

(statearr_18158_19736[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18076 === (3))){
var inst_18055 = (state_18075[(2)]);
var state_18075__$1 = state_18075;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18075__$1,inst_18055);
} else {
if((state_val_18076 === (12))){
var inst_18018 = (state_18075[(2)]);
var state_18075__$1 = state_18075;
var statearr_18159_19737 = state_18075__$1;
(statearr_18159_19737[(2)] = inst_18018);

(statearr_18159_19737[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18076 === (2))){
var state_18075__$1 = state_18075;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18075__$1,(4),ch);
} else {
if((state_val_18076 === (23))){
var state_18075__$1 = state_18075;
var statearr_18166_19738 = state_18075__$1;
(statearr_18166_19738[(2)] = null);

(statearr_18166_19738[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18076 === (19))){
var inst_17935 = (state_18075[(8)]);
var inst_18034 = (state_18075[(11)]);
var inst_18036 = cljs.core.async.muxch_STAR_(inst_18034);
var state_18075__$1 = state_18075;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18075__$1,(22),inst_18036,inst_17935);
} else {
if((state_val_18076 === (11))){
var inst_17985 = (state_18075[(10)]);
var inst_17951 = (state_18075[(15)]);
var inst_17985__$1 = cljs.core.seq(inst_17951);
var state_18075__$1 = (function (){var statearr_18173 = state_18075;
(statearr_18173[(10)] = inst_17985__$1);

return statearr_18173;
})();
if(inst_17985__$1){
var statearr_18176_19739 = state_18075__$1;
(statearr_18176_19739[(1)] = (13));

} else {
var statearr_18179_19741 = state_18075__$1;
(statearr_18179_19741[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18076 === (9))){
var inst_18020 = (state_18075[(2)]);
var state_18075__$1 = state_18075;
var statearr_18181_19742 = state_18075__$1;
(statearr_18181_19742[(2)] = inst_18020);

(statearr_18181_19742[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18076 === (5))){
var inst_17947 = cljs.core.deref(mults);
var inst_17948 = cljs.core.vals(inst_17947);
var inst_17949 = cljs.core.seq(inst_17948);
var inst_17951 = inst_17949;
var inst_17952 = null;
var inst_17953 = (0);
var inst_17954 = (0);
var state_18075__$1 = (function (){var statearr_18192 = state_18075;
(statearr_18192[(13)] = inst_17954);

(statearr_18192[(14)] = inst_17953);

(statearr_18192[(15)] = inst_17951);

(statearr_18192[(16)] = inst_17952);

return statearr_18192;
})();
var statearr_18195_19744 = state_18075__$1;
(statearr_18195_19744[(2)] = null);

(statearr_18195_19744[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18076 === (14))){
var state_18075__$1 = state_18075;
var statearr_18203_19745 = state_18075__$1;
(statearr_18203_19745[(2)] = null);

(statearr_18203_19745[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18076 === (16))){
var inst_17985 = (state_18075[(10)]);
var inst_17995 = cljs.core.chunk_first(inst_17985);
var inst_17996 = cljs.core.chunk_rest(inst_17985);
var inst_17997 = cljs.core.count(inst_17995);
var inst_17951 = inst_17996;
var inst_17952 = inst_17995;
var inst_17953 = inst_17997;
var inst_17954 = (0);
var state_18075__$1 = (function (){var statearr_18207 = state_18075;
(statearr_18207[(13)] = inst_17954);

(statearr_18207[(14)] = inst_17953);

(statearr_18207[(15)] = inst_17951);

(statearr_18207[(16)] = inst_17952);

return statearr_18207;
})();
var statearr_18208_19746 = state_18075__$1;
(statearr_18208_19746[(2)] = null);

(statearr_18208_19746[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18076 === (10))){
var inst_17954 = (state_18075[(13)]);
var inst_17953 = (state_18075[(14)]);
var inst_17951 = (state_18075[(15)]);
var inst_17952 = (state_18075[(16)]);
var inst_17963 = cljs.core._nth(inst_17952,inst_17954);
var inst_17964 = cljs.core.async.muxch_STAR_(inst_17963);
var inst_17965 = cljs.core.async.close_BANG_(inst_17964);
var inst_17966 = (inst_17954 + (1));
var tmp18200 = inst_17953;
var tmp18201 = inst_17951;
var tmp18202 = inst_17952;
var inst_17951__$1 = tmp18201;
var inst_17952__$1 = tmp18202;
var inst_17953__$1 = tmp18200;
var inst_17954__$1 = inst_17966;
var state_18075__$1 = (function (){var statearr_18218 = state_18075;
(statearr_18218[(13)] = inst_17954__$1);

(statearr_18218[(17)] = inst_17965);

(statearr_18218[(14)] = inst_17953__$1);

(statearr_18218[(15)] = inst_17951__$1);

(statearr_18218[(16)] = inst_17952__$1);

return statearr_18218;
})();
var statearr_18226_19747 = state_18075__$1;
(statearr_18226_19747[(2)] = null);

(statearr_18226_19747[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18076 === (18))){
var inst_18013 = (state_18075[(2)]);
var state_18075__$1 = state_18075;
var statearr_18227_19750 = state_18075__$1;
(statearr_18227_19750[(2)] = inst_18013);

(statearr_18227_19750[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18076 === (8))){
var inst_17954 = (state_18075[(13)]);
var inst_17953 = (state_18075[(14)]);
var inst_17958 = (inst_17954 < inst_17953);
var inst_17959 = inst_17958;
var state_18075__$1 = state_18075;
if(cljs.core.truth_(inst_17959)){
var statearr_18231_19751 = state_18075__$1;
(statearr_18231_19751[(1)] = (10));

} else {
var statearr_18233_19752 = state_18075__$1;
(statearr_18233_19752[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15402__auto__ = null;
var cljs$core$async$state_machine__15402__auto____0 = (function (){
var statearr_18234 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18234[(0)] = cljs$core$async$state_machine__15402__auto__);

(statearr_18234[(1)] = (1));

return statearr_18234;
});
var cljs$core$async$state_machine__15402__auto____1 = (function (state_18075){
while(true){
var ret_value__15403__auto__ = (function (){try{while(true){
var result__15404__auto__ = switch__15401__auto__(state_18075);
if(cljs.core.keyword_identical_QMARK_(result__15404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15404__auto__;
}
break;
}
}catch (e18235){var ex__15405__auto__ = e18235;
var statearr_18236_19754 = state_18075;
(statearr_18236_19754[(2)] = ex__15405__auto__);


if(cljs.core.seq((state_18075[(4)]))){
var statearr_18237_19755 = state_18075;
(statearr_18237_19755[(1)] = cljs.core.first((state_18075[(4)])));

} else {
throw ex__15405__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19756 = state_18075;
state_18075 = G__19756;
continue;
} else {
return ret_value__15403__auto__;
}
break;
}
});
cljs$core$async$state_machine__15402__auto__ = function(state_18075){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15402__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15402__auto____1.call(this,state_18075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15402__auto____0;
cljs$core$async$state_machine__15402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15402__auto____1;
return cljs$core$async$state_machine__15402__auto__;
})()
})();
var state__15616__auto__ = (function (){var statearr_18242 = f__15615__auto__();
(statearr_18242[(6)] = c__15614__auto___19718);

return statearr_18242;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15616__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__18248 = arguments.length;
switch (G__18248) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__18261 = arguments.length;
switch (G__18261) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__18268 = arguments.length;
switch (G__18268) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__15614__auto___19765 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15615__auto__ = (function (){var switch__15401__auto__ = (function (state_18325){
var state_val_18326 = (state_18325[(1)]);
if((state_val_18326 === (7))){
var state_18325__$1 = state_18325;
var statearr_18327_19767 = state_18325__$1;
(statearr_18327_19767[(2)] = null);

(statearr_18327_19767[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18326 === (1))){
var state_18325__$1 = state_18325;
var statearr_18328_19770 = state_18325__$1;
(statearr_18328_19770[(2)] = null);

(statearr_18328_19770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18326 === (4))){
var inst_18273 = (state_18325[(7)]);
var inst_18274 = (state_18325[(8)]);
var inst_18276 = (inst_18274 < inst_18273);
var state_18325__$1 = state_18325;
if(cljs.core.truth_(inst_18276)){
var statearr_18329_19771 = state_18325__$1;
(statearr_18329_19771[(1)] = (6));

} else {
var statearr_18330_19772 = state_18325__$1;
(statearr_18330_19772[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18326 === (15))){
var inst_18311 = (state_18325[(9)]);
var inst_18316 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_18311);
var state_18325__$1 = state_18325;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18325__$1,(17),out,inst_18316);
} else {
if((state_val_18326 === (13))){
var inst_18311 = (state_18325[(9)]);
var inst_18311__$1 = (state_18325[(2)]);
var inst_18312 = cljs.core.some(cljs.core.nil_QMARK_,inst_18311__$1);
var state_18325__$1 = (function (){var statearr_18331 = state_18325;
(statearr_18331[(9)] = inst_18311__$1);

return statearr_18331;
})();
if(cljs.core.truth_(inst_18312)){
var statearr_18332_19773 = state_18325__$1;
(statearr_18332_19773[(1)] = (14));

} else {
var statearr_18333_19778 = state_18325__$1;
(statearr_18333_19778[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18326 === (6))){
var state_18325__$1 = state_18325;
var statearr_18334_19779 = state_18325__$1;
(statearr_18334_19779[(2)] = null);

(statearr_18334_19779[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18326 === (17))){
var inst_18318 = (state_18325[(2)]);
var state_18325__$1 = (function (){var statearr_18336 = state_18325;
(statearr_18336[(10)] = inst_18318);

return statearr_18336;
})();
var statearr_18337_19780 = state_18325__$1;
(statearr_18337_19780[(2)] = null);

(statearr_18337_19780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18326 === (3))){
var inst_18323 = (state_18325[(2)]);
var state_18325__$1 = state_18325;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18325__$1,inst_18323);
} else {
if((state_val_18326 === (12))){
var _ = (function (){var statearr_18338 = state_18325;
(statearr_18338[(4)] = cljs.core.rest((state_18325[(4)])));

return statearr_18338;
})();
var state_18325__$1 = state_18325;
var ex18335 = (state_18325__$1[(2)]);
var statearr_18339_19781 = state_18325__$1;
(statearr_18339_19781[(5)] = ex18335);


if((ex18335 instanceof Object)){
var statearr_18340_19782 = state_18325__$1;
(statearr_18340_19782[(1)] = (11));

(statearr_18340_19782[(5)] = null);

} else {
throw ex18335;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18326 === (2))){
var inst_18271 = cljs.core.reset_BANG_(dctr,cnt);
var inst_18273 = cnt;
var inst_18274 = (0);
var state_18325__$1 = (function (){var statearr_18345 = state_18325;
(statearr_18345[(7)] = inst_18273);

(statearr_18345[(8)] = inst_18274);

(statearr_18345[(11)] = inst_18271);

return statearr_18345;
})();
var statearr_18346_19784 = state_18325__$1;
(statearr_18346_19784[(2)] = null);

(statearr_18346_19784[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18326 === (11))){
var inst_18286 = (state_18325[(2)]);
var inst_18291 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_18325__$1 = (function (){var statearr_18350 = state_18325;
(statearr_18350[(12)] = inst_18286);

return statearr_18350;
})();
var statearr_18351_19785 = state_18325__$1;
(statearr_18351_19785[(2)] = inst_18291);

(statearr_18351_19785[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18326 === (9))){
var inst_18274 = (state_18325[(8)]);
var _ = (function (){var statearr_18352 = state_18325;
(statearr_18352[(4)] = cljs.core.cons((12),(state_18325[(4)])));

return statearr_18352;
})();
var inst_18297 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_18274) : chs__$1.call(null,inst_18274));
var inst_18298 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_18274) : done.call(null,inst_18274));
var inst_18299 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_18297,inst_18298);
var ___$1 = (function (){var statearr_18358 = state_18325;
(statearr_18358[(4)] = cljs.core.rest((state_18325[(4)])));

return statearr_18358;
})();
var state_18325__$1 = state_18325;
var statearr_18359_19788 = state_18325__$1;
(statearr_18359_19788[(2)] = inst_18299);

(statearr_18359_19788[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18326 === (5))){
var inst_18309 = (state_18325[(2)]);
var state_18325__$1 = (function (){var statearr_18363 = state_18325;
(statearr_18363[(13)] = inst_18309);

return statearr_18363;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18325__$1,(13),dchan);
} else {
if((state_val_18326 === (14))){
var inst_18314 = cljs.core.async.close_BANG_(out);
var state_18325__$1 = state_18325;
var statearr_18369_19791 = state_18325__$1;
(statearr_18369_19791[(2)] = inst_18314);

(statearr_18369_19791[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18326 === (16))){
var inst_18321 = (state_18325[(2)]);
var state_18325__$1 = state_18325;
var statearr_18375_19792 = state_18325__$1;
(statearr_18375_19792[(2)] = inst_18321);

(statearr_18375_19792[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18326 === (10))){
var inst_18274 = (state_18325[(8)]);
var inst_18302 = (state_18325[(2)]);
var inst_18303 = (inst_18274 + (1));
var inst_18274__$1 = inst_18303;
var state_18325__$1 = (function (){var statearr_18376 = state_18325;
(statearr_18376[(8)] = inst_18274__$1);

(statearr_18376[(14)] = inst_18302);

return statearr_18376;
})();
var statearr_18377_19794 = state_18325__$1;
(statearr_18377_19794[(2)] = null);

(statearr_18377_19794[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18326 === (8))){
var inst_18307 = (state_18325[(2)]);
var state_18325__$1 = state_18325;
var statearr_18381_19795 = state_18325__$1;
(statearr_18381_19795[(2)] = inst_18307);

(statearr_18381_19795[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15402__auto__ = null;
var cljs$core$async$state_machine__15402__auto____0 = (function (){
var statearr_18382 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18382[(0)] = cljs$core$async$state_machine__15402__auto__);

(statearr_18382[(1)] = (1));

return statearr_18382;
});
var cljs$core$async$state_machine__15402__auto____1 = (function (state_18325){
while(true){
var ret_value__15403__auto__ = (function (){try{while(true){
var result__15404__auto__ = switch__15401__auto__(state_18325);
if(cljs.core.keyword_identical_QMARK_(result__15404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15404__auto__;
}
break;
}
}catch (e18386){var ex__15405__auto__ = e18386;
var statearr_18387_19797 = state_18325;
(statearr_18387_19797[(2)] = ex__15405__auto__);


if(cljs.core.seq((state_18325[(4)]))){
var statearr_18389_19798 = state_18325;
(statearr_18389_19798[(1)] = cljs.core.first((state_18325[(4)])));

} else {
throw ex__15405__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19800 = state_18325;
state_18325 = G__19800;
continue;
} else {
return ret_value__15403__auto__;
}
break;
}
});
cljs$core$async$state_machine__15402__auto__ = function(state_18325){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15402__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15402__auto____1.call(this,state_18325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15402__auto____0;
cljs$core$async$state_machine__15402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15402__auto____1;
return cljs$core$async$state_machine__15402__auto__;
})()
})();
var state__15616__auto__ = (function (){var statearr_18397 = f__15615__auto__();
(statearr_18397[(6)] = c__15614__auto___19765);

return statearr_18397;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15616__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__18404 = arguments.length;
switch (G__18404) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15614__auto___19804 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15615__auto__ = (function (){var switch__15401__auto__ = (function (state_18459){
var state_val_18460 = (state_18459[(1)]);
if((state_val_18460 === (7))){
var inst_18427 = (state_18459[(7)]);
var inst_18428 = (state_18459[(8)]);
var inst_18427__$1 = (state_18459[(2)]);
var inst_18428__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18427__$1,(0),null);
var inst_18431 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18427__$1,(1),null);
var inst_18432 = (inst_18428__$1 == null);
var state_18459__$1 = (function (){var statearr_18474 = state_18459;
(statearr_18474[(9)] = inst_18431);

(statearr_18474[(7)] = inst_18427__$1);

(statearr_18474[(8)] = inst_18428__$1);

return statearr_18474;
})();
if(cljs.core.truth_(inst_18432)){
var statearr_18475_19807 = state_18459__$1;
(statearr_18475_19807[(1)] = (8));

} else {
var statearr_18476_19808 = state_18459__$1;
(statearr_18476_19808[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18460 === (1))){
var inst_18412 = cljs.core.vec(chs);
var inst_18413 = inst_18412;
var state_18459__$1 = (function (){var statearr_18478 = state_18459;
(statearr_18478[(10)] = inst_18413);

return statearr_18478;
})();
var statearr_18479_19809 = state_18459__$1;
(statearr_18479_19809[(2)] = null);

(statearr_18479_19809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18460 === (4))){
var inst_18413 = (state_18459[(10)]);
var state_18459__$1 = state_18459;
return cljs.core.async.ioc_alts_BANG_(state_18459__$1,(7),inst_18413);
} else {
if((state_val_18460 === (6))){
var inst_18451 = (state_18459[(2)]);
var state_18459__$1 = state_18459;
var statearr_18481_19815 = state_18459__$1;
(statearr_18481_19815[(2)] = inst_18451);

(statearr_18481_19815[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18460 === (3))){
var inst_18453 = (state_18459[(2)]);
var state_18459__$1 = state_18459;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18459__$1,inst_18453);
} else {
if((state_val_18460 === (2))){
var inst_18413 = (state_18459[(10)]);
var inst_18417 = cljs.core.count(inst_18413);
var inst_18418 = (inst_18417 > (0));
var state_18459__$1 = state_18459;
if(cljs.core.truth_(inst_18418)){
var statearr_18486_19821 = state_18459__$1;
(statearr_18486_19821[(1)] = (4));

} else {
var statearr_18487_19822 = state_18459__$1;
(statearr_18487_19822[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18460 === (11))){
var inst_18413 = (state_18459[(10)]);
var inst_18443 = (state_18459[(2)]);
var tmp18485 = inst_18413;
var inst_18413__$1 = tmp18485;
var state_18459__$1 = (function (){var statearr_18489 = state_18459;
(statearr_18489[(11)] = inst_18443);

(statearr_18489[(10)] = inst_18413__$1);

return statearr_18489;
})();
var statearr_18490_19826 = state_18459__$1;
(statearr_18490_19826[(2)] = null);

(statearr_18490_19826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18460 === (9))){
var inst_18428 = (state_18459[(8)]);
var state_18459__$1 = state_18459;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18459__$1,(11),out,inst_18428);
} else {
if((state_val_18460 === (5))){
var inst_18449 = cljs.core.async.close_BANG_(out);
var state_18459__$1 = state_18459;
var statearr_18492_19828 = state_18459__$1;
(statearr_18492_19828[(2)] = inst_18449);

(statearr_18492_19828[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18460 === (10))){
var inst_18446 = (state_18459[(2)]);
var state_18459__$1 = state_18459;
var statearr_18497_19832 = state_18459__$1;
(statearr_18497_19832[(2)] = inst_18446);

(statearr_18497_19832[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18460 === (8))){
var inst_18431 = (state_18459[(9)]);
var inst_18427 = (state_18459[(7)]);
var inst_18413 = (state_18459[(10)]);
var inst_18428 = (state_18459[(8)]);
var inst_18436 = (function (){var cs = inst_18413;
var vec__18421 = inst_18427;
var v = inst_18428;
var c = inst_18431;
return (function (p1__18400_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__18400_SHARP_);
});
})();
var inst_18437 = cljs.core.filterv(inst_18436,inst_18413);
var inst_18413__$1 = inst_18437;
var state_18459__$1 = (function (){var statearr_18501 = state_18459;
(statearr_18501[(10)] = inst_18413__$1);

return statearr_18501;
})();
var statearr_18502_19833 = state_18459__$1;
(statearr_18502_19833[(2)] = null);

(statearr_18502_19833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15402__auto__ = null;
var cljs$core$async$state_machine__15402__auto____0 = (function (){
var statearr_18506 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18506[(0)] = cljs$core$async$state_machine__15402__auto__);

(statearr_18506[(1)] = (1));

return statearr_18506;
});
var cljs$core$async$state_machine__15402__auto____1 = (function (state_18459){
while(true){
var ret_value__15403__auto__ = (function (){try{while(true){
var result__15404__auto__ = switch__15401__auto__(state_18459);
if(cljs.core.keyword_identical_QMARK_(result__15404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15404__auto__;
}
break;
}
}catch (e18507){var ex__15405__auto__ = e18507;
var statearr_18508_19838 = state_18459;
(statearr_18508_19838[(2)] = ex__15405__auto__);


if(cljs.core.seq((state_18459[(4)]))){
var statearr_18510_19840 = state_18459;
(statearr_18510_19840[(1)] = cljs.core.first((state_18459[(4)])));

} else {
throw ex__15405__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19842 = state_18459;
state_18459 = G__19842;
continue;
} else {
return ret_value__15403__auto__;
}
break;
}
});
cljs$core$async$state_machine__15402__auto__ = function(state_18459){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15402__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15402__auto____1.call(this,state_18459);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15402__auto____0;
cljs$core$async$state_machine__15402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15402__auto____1;
return cljs$core$async$state_machine__15402__auto__;
})()
})();
var state__15616__auto__ = (function (){var statearr_18515 = f__15615__auto__();
(statearr_18515[(6)] = c__15614__auto___19804);

return statearr_18515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15616__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__18517 = arguments.length;
switch (G__18517) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15614__auto___19849 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15615__auto__ = (function (){var switch__15401__auto__ = (function (state_18544){
var state_val_18545 = (state_18544[(1)]);
if((state_val_18545 === (7))){
var inst_18526 = (state_18544[(7)]);
var inst_18526__$1 = (state_18544[(2)]);
var inst_18527 = (inst_18526__$1 == null);
var inst_18528 = cljs.core.not(inst_18527);
var state_18544__$1 = (function (){var statearr_18549 = state_18544;
(statearr_18549[(7)] = inst_18526__$1);

return statearr_18549;
})();
if(inst_18528){
var statearr_18550_19855 = state_18544__$1;
(statearr_18550_19855[(1)] = (8));

} else {
var statearr_18551_19856 = state_18544__$1;
(statearr_18551_19856[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18545 === (1))){
var inst_18521 = (0);
var state_18544__$1 = (function (){var statearr_18553 = state_18544;
(statearr_18553[(8)] = inst_18521);

return statearr_18553;
})();
var statearr_18558_19857 = state_18544__$1;
(statearr_18558_19857[(2)] = null);

(statearr_18558_19857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18545 === (4))){
var state_18544__$1 = state_18544;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18544__$1,(7),ch);
} else {
if((state_val_18545 === (6))){
var inst_18539 = (state_18544[(2)]);
var state_18544__$1 = state_18544;
var statearr_18572_19862 = state_18544__$1;
(statearr_18572_19862[(2)] = inst_18539);

(statearr_18572_19862[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18545 === (3))){
var inst_18541 = (state_18544[(2)]);
var inst_18542 = cljs.core.async.close_BANG_(out);
var state_18544__$1 = (function (){var statearr_18580 = state_18544;
(statearr_18580[(9)] = inst_18541);

return statearr_18580;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18544__$1,inst_18542);
} else {
if((state_val_18545 === (2))){
var inst_18521 = (state_18544[(8)]);
var inst_18523 = (inst_18521 < n);
var state_18544__$1 = state_18544;
if(cljs.core.truth_(inst_18523)){
var statearr_18581_19863 = state_18544__$1;
(statearr_18581_19863[(1)] = (4));

} else {
var statearr_18582_19864 = state_18544__$1;
(statearr_18582_19864[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18545 === (11))){
var inst_18521 = (state_18544[(8)]);
var inst_18531 = (state_18544[(2)]);
var inst_18532 = (inst_18521 + (1));
var inst_18521__$1 = inst_18532;
var state_18544__$1 = (function (){var statearr_18583 = state_18544;
(statearr_18583[(8)] = inst_18521__$1);

(statearr_18583[(10)] = inst_18531);

return statearr_18583;
})();
var statearr_18584_19866 = state_18544__$1;
(statearr_18584_19866[(2)] = null);

(statearr_18584_19866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18545 === (9))){
var state_18544__$1 = state_18544;
var statearr_18585_19867 = state_18544__$1;
(statearr_18585_19867[(2)] = null);

(statearr_18585_19867[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18545 === (5))){
var state_18544__$1 = state_18544;
var statearr_18586_19868 = state_18544__$1;
(statearr_18586_19868[(2)] = null);

(statearr_18586_19868[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18545 === (10))){
var inst_18536 = (state_18544[(2)]);
var state_18544__$1 = state_18544;
var statearr_18589_19870 = state_18544__$1;
(statearr_18589_19870[(2)] = inst_18536);

(statearr_18589_19870[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18545 === (8))){
var inst_18526 = (state_18544[(7)]);
var state_18544__$1 = state_18544;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18544__$1,(11),out,inst_18526);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15402__auto__ = null;
var cljs$core$async$state_machine__15402__auto____0 = (function (){
var statearr_18592 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18592[(0)] = cljs$core$async$state_machine__15402__auto__);

(statearr_18592[(1)] = (1));

return statearr_18592;
});
var cljs$core$async$state_machine__15402__auto____1 = (function (state_18544){
while(true){
var ret_value__15403__auto__ = (function (){try{while(true){
var result__15404__auto__ = switch__15401__auto__(state_18544);
if(cljs.core.keyword_identical_QMARK_(result__15404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15404__auto__;
}
break;
}
}catch (e18593){var ex__15405__auto__ = e18593;
var statearr_18594_19875 = state_18544;
(statearr_18594_19875[(2)] = ex__15405__auto__);


if(cljs.core.seq((state_18544[(4)]))){
var statearr_18595_19876 = state_18544;
(statearr_18595_19876[(1)] = cljs.core.first((state_18544[(4)])));

} else {
throw ex__15405__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19877 = state_18544;
state_18544 = G__19877;
continue;
} else {
return ret_value__15403__auto__;
}
break;
}
});
cljs$core$async$state_machine__15402__auto__ = function(state_18544){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15402__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15402__auto____1.call(this,state_18544);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15402__auto____0;
cljs$core$async$state_machine__15402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15402__auto____1;
return cljs$core$async$state_machine__15402__auto__;
})()
})();
var state__15616__auto__ = (function (){var statearr_18596 = f__15615__auto__();
(statearr_18596[(6)] = c__15614__auto___19849);

return statearr_18596;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15616__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18608 = (function (f,ch,meta18602,_,fn1,meta18609){
this.f = f;
this.ch = ch;
this.meta18602 = meta18602;
this._ = _;
this.fn1 = fn1;
this.meta18609 = meta18609;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18608.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18610,meta18609__$1){
var self__ = this;
var _18610__$1 = this;
return (new cljs.core.async.t_cljs$core$async18608(self__.f,self__.ch,self__.meta18602,self__._,self__.fn1,meta18609__$1));
}));

(cljs.core.async.t_cljs$core$async18608.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18610){
var self__ = this;
var _18610__$1 = this;
return self__.meta18609;
}));

(cljs.core.async.t_cljs$core$async18608.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18608.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async18608.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18608.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__18598_SHARP_){
var G__18616 = (((p1__18598_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__18598_SHARP_) : self__.f.call(null,p1__18598_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__18616) : f1.call(null,G__18616));
});
}));

(cljs.core.async.t_cljs$core$async18608.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18602","meta18602",213088801,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async18600","cljs.core.async/t_cljs$core$async18600",-1007321133,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta18609","meta18609",-1881181717,null)], null);
}));

(cljs.core.async.t_cljs$core$async18608.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18608.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18608");

(cljs.core.async.t_cljs$core$async18608.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18608");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18608.
 */
cljs.core.async.__GT_t_cljs$core$async18608 = (function cljs$core$async$__GT_t_cljs$core$async18608(f,ch,meta18602,_,fn1,meta18609){
return (new cljs.core.async.t_cljs$core$async18608(f,ch,meta18602,_,fn1,meta18609));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18600 = (function (f,ch,meta18602){
this.f = f;
this.ch = ch;
this.meta18602 = meta18602;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18600.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18603,meta18602__$1){
var self__ = this;
var _18603__$1 = this;
return (new cljs.core.async.t_cljs$core$async18600(self__.f,self__.ch,meta18602__$1));
}));

(cljs.core.async.t_cljs$core$async18600.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18603){
var self__ = this;
var _18603__$1 = this;
return self__.meta18602;
}));

(cljs.core.async.t_cljs$core$async18600.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18600.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18600.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18600.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18600.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async18608(self__.f,self__.ch,self__.meta18602,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__18619 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__18619) : self__.f.call(null,G__18619));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async18600.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18600.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async18600.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18602","meta18602",213088801,null)], null);
}));

(cljs.core.async.t_cljs$core$async18600.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18600.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18600");

(cljs.core.async.t_cljs$core$async18600.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18600");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18600.
 */
cljs.core.async.__GT_t_cljs$core$async18600 = (function cljs$core$async$__GT_t_cljs$core$async18600(f,ch,meta18602){
return (new cljs.core.async.t_cljs$core$async18600(f,ch,meta18602));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async18600(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18620 = (function (f,ch,meta18621){
this.f = f;
this.ch = ch;
this.meta18621 = meta18621;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18620.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18622,meta18621__$1){
var self__ = this;
var _18622__$1 = this;
return (new cljs.core.async.t_cljs$core$async18620(self__.f,self__.ch,meta18621__$1));
}));

(cljs.core.async.t_cljs$core$async18620.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18622){
var self__ = this;
var _18622__$1 = this;
return self__.meta18621;
}));

(cljs.core.async.t_cljs$core$async18620.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18620.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18620.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18620.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async18620.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18620.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async18620.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18621","meta18621",355965848,null)], null);
}));

(cljs.core.async.t_cljs$core$async18620.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18620.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18620");

(cljs.core.async.t_cljs$core$async18620.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18620");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18620.
 */
cljs.core.async.__GT_t_cljs$core$async18620 = (function cljs$core$async$__GT_t_cljs$core$async18620(f,ch,meta18621){
return (new cljs.core.async.t_cljs$core$async18620(f,ch,meta18621));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async18620(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18627 = (function (p,ch,meta18628){
this.p = p;
this.ch = ch;
this.meta18628 = meta18628;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18627.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18629,meta18628__$1){
var self__ = this;
var _18629__$1 = this;
return (new cljs.core.async.t_cljs$core$async18627(self__.p,self__.ch,meta18628__$1));
}));

(cljs.core.async.t_cljs$core$async18627.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18629){
var self__ = this;
var _18629__$1 = this;
return self__.meta18628;
}));

(cljs.core.async.t_cljs$core$async18627.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18627.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18627.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18627.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18627.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async18627.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18627.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async18627.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18628","meta18628",-1416292983,null)], null);
}));

(cljs.core.async.t_cljs$core$async18627.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18627.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18627");

(cljs.core.async.t_cljs$core$async18627.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18627");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18627.
 */
cljs.core.async.__GT_t_cljs$core$async18627 = (function cljs$core$async$__GT_t_cljs$core$async18627(p,ch,meta18628){
return (new cljs.core.async.t_cljs$core$async18627(p,ch,meta18628));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async18627(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__18635 = arguments.length;
switch (G__18635) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15614__auto___19900 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15615__auto__ = (function (){var switch__15401__auto__ = (function (state_18657){
var state_val_18658 = (state_18657[(1)]);
if((state_val_18658 === (7))){
var inst_18653 = (state_18657[(2)]);
var state_18657__$1 = state_18657;
var statearr_18659_19902 = state_18657__$1;
(statearr_18659_19902[(2)] = inst_18653);

(statearr_18659_19902[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18658 === (1))){
var state_18657__$1 = state_18657;
var statearr_18660_19913 = state_18657__$1;
(statearr_18660_19913[(2)] = null);

(statearr_18660_19913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18658 === (4))){
var inst_18639 = (state_18657[(7)]);
var inst_18639__$1 = (state_18657[(2)]);
var inst_18640 = (inst_18639__$1 == null);
var state_18657__$1 = (function (){var statearr_18662 = state_18657;
(statearr_18662[(7)] = inst_18639__$1);

return statearr_18662;
})();
if(cljs.core.truth_(inst_18640)){
var statearr_18663_19916 = state_18657__$1;
(statearr_18663_19916[(1)] = (5));

} else {
var statearr_18664_19917 = state_18657__$1;
(statearr_18664_19917[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18658 === (6))){
var inst_18639 = (state_18657[(7)]);
var inst_18644 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_18639) : p.call(null,inst_18639));
var state_18657__$1 = state_18657;
if(cljs.core.truth_(inst_18644)){
var statearr_18666_19918 = state_18657__$1;
(statearr_18666_19918[(1)] = (8));

} else {
var statearr_18667_19919 = state_18657__$1;
(statearr_18667_19919[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18658 === (3))){
var inst_18655 = (state_18657[(2)]);
var state_18657__$1 = state_18657;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18657__$1,inst_18655);
} else {
if((state_val_18658 === (2))){
var state_18657__$1 = state_18657;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18657__$1,(4),ch);
} else {
if((state_val_18658 === (11))){
var inst_18647 = (state_18657[(2)]);
var state_18657__$1 = state_18657;
var statearr_18668_19921 = state_18657__$1;
(statearr_18668_19921[(2)] = inst_18647);

(statearr_18668_19921[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18658 === (9))){
var state_18657__$1 = state_18657;
var statearr_18669_19925 = state_18657__$1;
(statearr_18669_19925[(2)] = null);

(statearr_18669_19925[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18658 === (5))){
var inst_18642 = cljs.core.async.close_BANG_(out);
var state_18657__$1 = state_18657;
var statearr_18670_19927 = state_18657__$1;
(statearr_18670_19927[(2)] = inst_18642);

(statearr_18670_19927[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18658 === (10))){
var inst_18650 = (state_18657[(2)]);
var state_18657__$1 = (function (){var statearr_18671 = state_18657;
(statearr_18671[(8)] = inst_18650);

return statearr_18671;
})();
var statearr_18672_19929 = state_18657__$1;
(statearr_18672_19929[(2)] = null);

(statearr_18672_19929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18658 === (8))){
var inst_18639 = (state_18657[(7)]);
var state_18657__$1 = state_18657;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18657__$1,(11),out,inst_18639);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15402__auto__ = null;
var cljs$core$async$state_machine__15402__auto____0 = (function (){
var statearr_18674 = [null,null,null,null,null,null,null,null,null];
(statearr_18674[(0)] = cljs$core$async$state_machine__15402__auto__);

(statearr_18674[(1)] = (1));

return statearr_18674;
});
var cljs$core$async$state_machine__15402__auto____1 = (function (state_18657){
while(true){
var ret_value__15403__auto__ = (function (){try{while(true){
var result__15404__auto__ = switch__15401__auto__(state_18657);
if(cljs.core.keyword_identical_QMARK_(result__15404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15404__auto__;
}
break;
}
}catch (e18675){var ex__15405__auto__ = e18675;
var statearr_18676_19933 = state_18657;
(statearr_18676_19933[(2)] = ex__15405__auto__);


if(cljs.core.seq((state_18657[(4)]))){
var statearr_18677_19934 = state_18657;
(statearr_18677_19934[(1)] = cljs.core.first((state_18657[(4)])));

} else {
throw ex__15405__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19937 = state_18657;
state_18657 = G__19937;
continue;
} else {
return ret_value__15403__auto__;
}
break;
}
});
cljs$core$async$state_machine__15402__auto__ = function(state_18657){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15402__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15402__auto____1.call(this,state_18657);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15402__auto____0;
cljs$core$async$state_machine__15402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15402__auto____1;
return cljs$core$async$state_machine__15402__auto__;
})()
})();
var state__15616__auto__ = (function (){var statearr_18706 = f__15615__auto__();
(statearr_18706[(6)] = c__15614__auto___19900);

return statearr_18706;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15616__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__18708 = arguments.length;
switch (G__18708) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__15614__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15615__auto__ = (function (){var switch__15401__auto__ = (function (state_18771){
var state_val_18772 = (state_18771[(1)]);
if((state_val_18772 === (7))){
var inst_18767 = (state_18771[(2)]);
var state_18771__$1 = state_18771;
var statearr_18774_19949 = state_18771__$1;
(statearr_18774_19949[(2)] = inst_18767);

(statearr_18774_19949[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18772 === (20))){
var inst_18737 = (state_18771[(7)]);
var inst_18748 = (state_18771[(2)]);
var inst_18749 = cljs.core.next(inst_18737);
var inst_18723 = inst_18749;
var inst_18724 = null;
var inst_18725 = (0);
var inst_18726 = (0);
var state_18771__$1 = (function (){var statearr_18775 = state_18771;
(statearr_18775[(8)] = inst_18723);

(statearr_18775[(9)] = inst_18724);

(statearr_18775[(10)] = inst_18726);

(statearr_18775[(11)] = inst_18725);

(statearr_18775[(12)] = inst_18748);

return statearr_18775;
})();
var statearr_18776_19957 = state_18771__$1;
(statearr_18776_19957[(2)] = null);

(statearr_18776_19957[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18772 === (1))){
var state_18771__$1 = state_18771;
var statearr_18777_19958 = state_18771__$1;
(statearr_18777_19958[(2)] = null);

(statearr_18777_19958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18772 === (4))){
var inst_18712 = (state_18771[(13)]);
var inst_18712__$1 = (state_18771[(2)]);
var inst_18713 = (inst_18712__$1 == null);
var state_18771__$1 = (function (){var statearr_18778 = state_18771;
(statearr_18778[(13)] = inst_18712__$1);

return statearr_18778;
})();
if(cljs.core.truth_(inst_18713)){
var statearr_18779_19959 = state_18771__$1;
(statearr_18779_19959[(1)] = (5));

} else {
var statearr_18781_19960 = state_18771__$1;
(statearr_18781_19960[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18772 === (15))){
var state_18771__$1 = state_18771;
var statearr_18785_19962 = state_18771__$1;
(statearr_18785_19962[(2)] = null);

(statearr_18785_19962[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18772 === (21))){
var state_18771__$1 = state_18771;
var statearr_18786_19963 = state_18771__$1;
(statearr_18786_19963[(2)] = null);

(statearr_18786_19963[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18772 === (13))){
var inst_18723 = (state_18771[(8)]);
var inst_18724 = (state_18771[(9)]);
var inst_18726 = (state_18771[(10)]);
var inst_18725 = (state_18771[(11)]);
var inst_18733 = (state_18771[(2)]);
var inst_18734 = (inst_18726 + (1));
var tmp18782 = inst_18723;
var tmp18783 = inst_18724;
var tmp18784 = inst_18725;
var inst_18723__$1 = tmp18782;
var inst_18724__$1 = tmp18783;
var inst_18725__$1 = tmp18784;
var inst_18726__$1 = inst_18734;
var state_18771__$1 = (function (){var statearr_18787 = state_18771;
(statearr_18787[(14)] = inst_18733);

(statearr_18787[(8)] = inst_18723__$1);

(statearr_18787[(9)] = inst_18724__$1);

(statearr_18787[(10)] = inst_18726__$1);

(statearr_18787[(11)] = inst_18725__$1);

return statearr_18787;
})();
var statearr_18788_19969 = state_18771__$1;
(statearr_18788_19969[(2)] = null);

(statearr_18788_19969[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18772 === (22))){
var state_18771__$1 = state_18771;
var statearr_18790_19970 = state_18771__$1;
(statearr_18790_19970[(2)] = null);

(statearr_18790_19970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18772 === (6))){
var inst_18712 = (state_18771[(13)]);
var inst_18721 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18712) : f.call(null,inst_18712));
var inst_18722 = cljs.core.seq(inst_18721);
var inst_18723 = inst_18722;
var inst_18724 = null;
var inst_18725 = (0);
var inst_18726 = (0);
var state_18771__$1 = (function (){var statearr_18791 = state_18771;
(statearr_18791[(8)] = inst_18723);

(statearr_18791[(9)] = inst_18724);

(statearr_18791[(10)] = inst_18726);

(statearr_18791[(11)] = inst_18725);

return statearr_18791;
})();
var statearr_18792_19972 = state_18771__$1;
(statearr_18792_19972[(2)] = null);

(statearr_18792_19972[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18772 === (17))){
var inst_18737 = (state_18771[(7)]);
var inst_18741 = cljs.core.chunk_first(inst_18737);
var inst_18742 = cljs.core.chunk_rest(inst_18737);
var inst_18743 = cljs.core.count(inst_18741);
var inst_18723 = inst_18742;
var inst_18724 = inst_18741;
var inst_18725 = inst_18743;
var inst_18726 = (0);
var state_18771__$1 = (function (){var statearr_18793 = state_18771;
(statearr_18793[(8)] = inst_18723);

(statearr_18793[(9)] = inst_18724);

(statearr_18793[(10)] = inst_18726);

(statearr_18793[(11)] = inst_18725);

return statearr_18793;
})();
var statearr_18794_19983 = state_18771__$1;
(statearr_18794_19983[(2)] = null);

(statearr_18794_19983[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18772 === (3))){
var inst_18769 = (state_18771[(2)]);
var state_18771__$1 = state_18771;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18771__$1,inst_18769);
} else {
if((state_val_18772 === (12))){
var inst_18757 = (state_18771[(2)]);
var state_18771__$1 = state_18771;
var statearr_18796_19990 = state_18771__$1;
(statearr_18796_19990[(2)] = inst_18757);

(statearr_18796_19990[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18772 === (2))){
var state_18771__$1 = state_18771;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18771__$1,(4),in$);
} else {
if((state_val_18772 === (23))){
var inst_18765 = (state_18771[(2)]);
var state_18771__$1 = state_18771;
var statearr_18797_19997 = state_18771__$1;
(statearr_18797_19997[(2)] = inst_18765);

(statearr_18797_19997[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18772 === (19))){
var inst_18752 = (state_18771[(2)]);
var state_18771__$1 = state_18771;
var statearr_18798_19998 = state_18771__$1;
(statearr_18798_19998[(2)] = inst_18752);

(statearr_18798_19998[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18772 === (11))){
var inst_18723 = (state_18771[(8)]);
var inst_18737 = (state_18771[(7)]);
var inst_18737__$1 = cljs.core.seq(inst_18723);
var state_18771__$1 = (function (){var statearr_18799 = state_18771;
(statearr_18799[(7)] = inst_18737__$1);

return statearr_18799;
})();
if(inst_18737__$1){
var statearr_18801_19999 = state_18771__$1;
(statearr_18801_19999[(1)] = (14));

} else {
var statearr_18802_20000 = state_18771__$1;
(statearr_18802_20000[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18772 === (9))){
var inst_18759 = (state_18771[(2)]);
var inst_18760 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_18771__$1 = (function (){var statearr_18803 = state_18771;
(statearr_18803[(15)] = inst_18759);

return statearr_18803;
})();
if(cljs.core.truth_(inst_18760)){
var statearr_18804_20001 = state_18771__$1;
(statearr_18804_20001[(1)] = (21));

} else {
var statearr_18805_20002 = state_18771__$1;
(statearr_18805_20002[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18772 === (5))){
var inst_18715 = cljs.core.async.close_BANG_(out);
var state_18771__$1 = state_18771;
var statearr_18806_20003 = state_18771__$1;
(statearr_18806_20003[(2)] = inst_18715);

(statearr_18806_20003[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18772 === (14))){
var inst_18737 = (state_18771[(7)]);
var inst_18739 = cljs.core.chunked_seq_QMARK_(inst_18737);
var state_18771__$1 = state_18771;
if(inst_18739){
var statearr_18807_20008 = state_18771__$1;
(statearr_18807_20008[(1)] = (17));

} else {
var statearr_18808_20012 = state_18771__$1;
(statearr_18808_20012[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18772 === (16))){
var inst_18755 = (state_18771[(2)]);
var state_18771__$1 = state_18771;
var statearr_18809_20013 = state_18771__$1;
(statearr_18809_20013[(2)] = inst_18755);

(statearr_18809_20013[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18772 === (10))){
var inst_18724 = (state_18771[(9)]);
var inst_18726 = (state_18771[(10)]);
var inst_18731 = cljs.core._nth(inst_18724,inst_18726);
var state_18771__$1 = state_18771;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18771__$1,(13),out,inst_18731);
} else {
if((state_val_18772 === (18))){
var inst_18737 = (state_18771[(7)]);
var inst_18746 = cljs.core.first(inst_18737);
var state_18771__$1 = state_18771;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18771__$1,(20),out,inst_18746);
} else {
if((state_val_18772 === (8))){
var inst_18726 = (state_18771[(10)]);
var inst_18725 = (state_18771[(11)]);
var inst_18728 = (inst_18726 < inst_18725);
var inst_18729 = inst_18728;
var state_18771__$1 = state_18771;
if(cljs.core.truth_(inst_18729)){
var statearr_18811_20017 = state_18771__$1;
(statearr_18811_20017[(1)] = (10));

} else {
var statearr_18812_20018 = state_18771__$1;
(statearr_18812_20018[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__15402__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__15402__auto____0 = (function (){
var statearr_18813 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18813[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__15402__auto__);

(statearr_18813[(1)] = (1));

return statearr_18813;
});
var cljs$core$async$mapcat_STAR__$_state_machine__15402__auto____1 = (function (state_18771){
while(true){
var ret_value__15403__auto__ = (function (){try{while(true){
var result__15404__auto__ = switch__15401__auto__(state_18771);
if(cljs.core.keyword_identical_QMARK_(result__15404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15404__auto__;
}
break;
}
}catch (e18814){var ex__15405__auto__ = e18814;
var statearr_18815_20020 = state_18771;
(statearr_18815_20020[(2)] = ex__15405__auto__);


if(cljs.core.seq((state_18771[(4)]))){
var statearr_18816_20023 = state_18771;
(statearr_18816_20023[(1)] = cljs.core.first((state_18771[(4)])));

} else {
throw ex__15405__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20028 = state_18771;
state_18771 = G__20028;
continue;
} else {
return ret_value__15403__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__15402__auto__ = function(state_18771){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__15402__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__15402__auto____1.call(this,state_18771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__15402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__15402__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__15402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__15402__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__15402__auto__;
})()
})();
var state__15616__auto__ = (function (){var statearr_18818 = f__15615__auto__();
(statearr_18818[(6)] = c__15614__auto__);

return statearr_18818;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15616__auto__);
}));

return c__15614__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__18820 = arguments.length;
switch (G__18820) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__18823 = arguments.length;
switch (G__18823) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__18826 = arguments.length;
switch (G__18826) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15614__auto___20034 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15615__auto__ = (function (){var switch__15401__auto__ = (function (state_18852){
var state_val_18853 = (state_18852[(1)]);
if((state_val_18853 === (7))){
var inst_18846 = (state_18852[(2)]);
var state_18852__$1 = state_18852;
var statearr_18854_20035 = state_18852__$1;
(statearr_18854_20035[(2)] = inst_18846);

(statearr_18854_20035[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18853 === (1))){
var inst_18828 = null;
var state_18852__$1 = (function (){var statearr_18855 = state_18852;
(statearr_18855[(7)] = inst_18828);

return statearr_18855;
})();
var statearr_18856_20036 = state_18852__$1;
(statearr_18856_20036[(2)] = null);

(statearr_18856_20036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18853 === (4))){
var inst_18831 = (state_18852[(8)]);
var inst_18831__$1 = (state_18852[(2)]);
var inst_18832 = (inst_18831__$1 == null);
var inst_18833 = cljs.core.not(inst_18832);
var state_18852__$1 = (function (){var statearr_18858 = state_18852;
(statearr_18858[(8)] = inst_18831__$1);

return statearr_18858;
})();
if(inst_18833){
var statearr_18859_20037 = state_18852__$1;
(statearr_18859_20037[(1)] = (5));

} else {
var statearr_18860_20038 = state_18852__$1;
(statearr_18860_20038[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18853 === (6))){
var state_18852__$1 = state_18852;
var statearr_18861_20040 = state_18852__$1;
(statearr_18861_20040[(2)] = null);

(statearr_18861_20040[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18853 === (3))){
var inst_18848 = (state_18852[(2)]);
var inst_18849 = cljs.core.async.close_BANG_(out);
var state_18852__$1 = (function (){var statearr_18862 = state_18852;
(statearr_18862[(9)] = inst_18848);

return statearr_18862;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18852__$1,inst_18849);
} else {
if((state_val_18853 === (2))){
var state_18852__$1 = state_18852;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18852__$1,(4),ch);
} else {
if((state_val_18853 === (11))){
var inst_18831 = (state_18852[(8)]);
var inst_18840 = (state_18852[(2)]);
var inst_18828 = inst_18831;
var state_18852__$1 = (function (){var statearr_18864 = state_18852;
(statearr_18864[(10)] = inst_18840);

(statearr_18864[(7)] = inst_18828);

return statearr_18864;
})();
var statearr_18865_20042 = state_18852__$1;
(statearr_18865_20042[(2)] = null);

(statearr_18865_20042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18853 === (9))){
var inst_18831 = (state_18852[(8)]);
var state_18852__$1 = state_18852;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18852__$1,(11),out,inst_18831);
} else {
if((state_val_18853 === (5))){
var inst_18828 = (state_18852[(7)]);
var inst_18831 = (state_18852[(8)]);
var inst_18835 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18831,inst_18828);
var state_18852__$1 = state_18852;
if(inst_18835){
var statearr_18867_20049 = state_18852__$1;
(statearr_18867_20049[(1)] = (8));

} else {
var statearr_18868_20050 = state_18852__$1;
(statearr_18868_20050[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18853 === (10))){
var inst_18843 = (state_18852[(2)]);
var state_18852__$1 = state_18852;
var statearr_18869_20051 = state_18852__$1;
(statearr_18869_20051[(2)] = inst_18843);

(statearr_18869_20051[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18853 === (8))){
var inst_18828 = (state_18852[(7)]);
var tmp18866 = inst_18828;
var inst_18828__$1 = tmp18866;
var state_18852__$1 = (function (){var statearr_18870 = state_18852;
(statearr_18870[(7)] = inst_18828__$1);

return statearr_18870;
})();
var statearr_18872_20052 = state_18852__$1;
(statearr_18872_20052[(2)] = null);

(statearr_18872_20052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15402__auto__ = null;
var cljs$core$async$state_machine__15402__auto____0 = (function (){
var statearr_18873 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18873[(0)] = cljs$core$async$state_machine__15402__auto__);

(statearr_18873[(1)] = (1));

return statearr_18873;
});
var cljs$core$async$state_machine__15402__auto____1 = (function (state_18852){
while(true){
var ret_value__15403__auto__ = (function (){try{while(true){
var result__15404__auto__ = switch__15401__auto__(state_18852);
if(cljs.core.keyword_identical_QMARK_(result__15404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15404__auto__;
}
break;
}
}catch (e18874){var ex__15405__auto__ = e18874;
var statearr_18875_20053 = state_18852;
(statearr_18875_20053[(2)] = ex__15405__auto__);


if(cljs.core.seq((state_18852[(4)]))){
var statearr_18876_20054 = state_18852;
(statearr_18876_20054[(1)] = cljs.core.first((state_18852[(4)])));

} else {
throw ex__15405__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20055 = state_18852;
state_18852 = G__20055;
continue;
} else {
return ret_value__15403__auto__;
}
break;
}
});
cljs$core$async$state_machine__15402__auto__ = function(state_18852){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15402__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15402__auto____1.call(this,state_18852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15402__auto____0;
cljs$core$async$state_machine__15402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15402__auto____1;
return cljs$core$async$state_machine__15402__auto__;
})()
})();
var state__15616__auto__ = (function (){var statearr_18878 = f__15615__auto__();
(statearr_18878[(6)] = c__15614__auto___20034);

return statearr_18878;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15616__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__18880 = arguments.length;
switch (G__18880) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15614__auto___20057 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15615__auto__ = (function (){var switch__15401__auto__ = (function (state_18920){
var state_val_18921 = (state_18920[(1)]);
if((state_val_18921 === (7))){
var inst_18916 = (state_18920[(2)]);
var state_18920__$1 = state_18920;
var statearr_18923_20058 = state_18920__$1;
(statearr_18923_20058[(2)] = inst_18916);

(statearr_18923_20058[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18921 === (1))){
var inst_18882 = (new Array(n));
var inst_18883 = inst_18882;
var inst_18884 = (0);
var state_18920__$1 = (function (){var statearr_18924 = state_18920;
(statearr_18924[(7)] = inst_18883);

(statearr_18924[(8)] = inst_18884);

return statearr_18924;
})();
var statearr_18925_20059 = state_18920__$1;
(statearr_18925_20059[(2)] = null);

(statearr_18925_20059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18921 === (4))){
var inst_18887 = (state_18920[(9)]);
var inst_18887__$1 = (state_18920[(2)]);
var inst_18888 = (inst_18887__$1 == null);
var inst_18889 = cljs.core.not(inst_18888);
var state_18920__$1 = (function (){var statearr_18926 = state_18920;
(statearr_18926[(9)] = inst_18887__$1);

return statearr_18926;
})();
if(inst_18889){
var statearr_18927_20060 = state_18920__$1;
(statearr_18927_20060[(1)] = (5));

} else {
var statearr_18928_20061 = state_18920__$1;
(statearr_18928_20061[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18921 === (15))){
var inst_18910 = (state_18920[(2)]);
var state_18920__$1 = state_18920;
var statearr_18929_20062 = state_18920__$1;
(statearr_18929_20062[(2)] = inst_18910);

(statearr_18929_20062[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18921 === (13))){
var state_18920__$1 = state_18920;
var statearr_18930_20063 = state_18920__$1;
(statearr_18930_20063[(2)] = null);

(statearr_18930_20063[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18921 === (6))){
var inst_18884 = (state_18920[(8)]);
var inst_18906 = (inst_18884 > (0));
var state_18920__$1 = state_18920;
if(cljs.core.truth_(inst_18906)){
var statearr_18932_20064 = state_18920__$1;
(statearr_18932_20064[(1)] = (12));

} else {
var statearr_18933_20065 = state_18920__$1;
(statearr_18933_20065[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18921 === (3))){
var inst_18918 = (state_18920[(2)]);
var state_18920__$1 = state_18920;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18920__$1,inst_18918);
} else {
if((state_val_18921 === (12))){
var inst_18883 = (state_18920[(7)]);
var inst_18908 = cljs.core.vec(inst_18883);
var state_18920__$1 = state_18920;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18920__$1,(15),out,inst_18908);
} else {
if((state_val_18921 === (2))){
var state_18920__$1 = state_18920;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18920__$1,(4),ch);
} else {
if((state_val_18921 === (11))){
var inst_18899 = (state_18920[(2)]);
var inst_18900 = (new Array(n));
var inst_18883 = inst_18900;
var inst_18884 = (0);
var state_18920__$1 = (function (){var statearr_18935 = state_18920;
(statearr_18935[(7)] = inst_18883);

(statearr_18935[(8)] = inst_18884);

(statearr_18935[(10)] = inst_18899);

return statearr_18935;
})();
var statearr_18936_20067 = state_18920__$1;
(statearr_18936_20067[(2)] = null);

(statearr_18936_20067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18921 === (9))){
var inst_18883 = (state_18920[(7)]);
var inst_18897 = cljs.core.vec(inst_18883);
var state_18920__$1 = state_18920;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18920__$1,(11),out,inst_18897);
} else {
if((state_val_18921 === (5))){
var inst_18883 = (state_18920[(7)]);
var inst_18884 = (state_18920[(8)]);
var inst_18892 = (state_18920[(11)]);
var inst_18887 = (state_18920[(9)]);
var inst_18891 = (inst_18883[inst_18884] = inst_18887);
var inst_18892__$1 = (inst_18884 + (1));
var inst_18893 = (inst_18892__$1 < n);
var state_18920__$1 = (function (){var statearr_18937 = state_18920;
(statearr_18937[(11)] = inst_18892__$1);

(statearr_18937[(12)] = inst_18891);

return statearr_18937;
})();
if(cljs.core.truth_(inst_18893)){
var statearr_18938_20072 = state_18920__$1;
(statearr_18938_20072[(1)] = (8));

} else {
var statearr_18939_20073 = state_18920__$1;
(statearr_18939_20073[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18921 === (14))){
var inst_18913 = (state_18920[(2)]);
var inst_18914 = cljs.core.async.close_BANG_(out);
var state_18920__$1 = (function (){var statearr_18941 = state_18920;
(statearr_18941[(13)] = inst_18913);

return statearr_18941;
})();
var statearr_18942_20074 = state_18920__$1;
(statearr_18942_20074[(2)] = inst_18914);

(statearr_18942_20074[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18921 === (10))){
var inst_18903 = (state_18920[(2)]);
var state_18920__$1 = state_18920;
var statearr_18944_20075 = state_18920__$1;
(statearr_18944_20075[(2)] = inst_18903);

(statearr_18944_20075[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18921 === (8))){
var inst_18883 = (state_18920[(7)]);
var inst_18892 = (state_18920[(11)]);
var tmp18940 = inst_18883;
var inst_18883__$1 = tmp18940;
var inst_18884 = inst_18892;
var state_18920__$1 = (function (){var statearr_18946 = state_18920;
(statearr_18946[(7)] = inst_18883__$1);

(statearr_18946[(8)] = inst_18884);

return statearr_18946;
})();
var statearr_18947_20076 = state_18920__$1;
(statearr_18947_20076[(2)] = null);

(statearr_18947_20076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15402__auto__ = null;
var cljs$core$async$state_machine__15402__auto____0 = (function (){
var statearr_18948 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18948[(0)] = cljs$core$async$state_machine__15402__auto__);

(statearr_18948[(1)] = (1));

return statearr_18948;
});
var cljs$core$async$state_machine__15402__auto____1 = (function (state_18920){
while(true){
var ret_value__15403__auto__ = (function (){try{while(true){
var result__15404__auto__ = switch__15401__auto__(state_18920);
if(cljs.core.keyword_identical_QMARK_(result__15404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15404__auto__;
}
break;
}
}catch (e18949){var ex__15405__auto__ = e18949;
var statearr_18950_20078 = state_18920;
(statearr_18950_20078[(2)] = ex__15405__auto__);


if(cljs.core.seq((state_18920[(4)]))){
var statearr_18951_20080 = state_18920;
(statearr_18951_20080[(1)] = cljs.core.first((state_18920[(4)])));

} else {
throw ex__15405__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20081 = state_18920;
state_18920 = G__20081;
continue;
} else {
return ret_value__15403__auto__;
}
break;
}
});
cljs$core$async$state_machine__15402__auto__ = function(state_18920){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15402__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15402__auto____1.call(this,state_18920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15402__auto____0;
cljs$core$async$state_machine__15402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15402__auto____1;
return cljs$core$async$state_machine__15402__auto__;
})()
})();
var state__15616__auto__ = (function (){var statearr_18952 = f__15615__auto__();
(statearr_18952[(6)] = c__15614__auto___20057);

return statearr_18952;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15616__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__18956 = arguments.length;
switch (G__18956) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15614__auto___20083 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15615__auto__ = (function (){var switch__15401__auto__ = (function (state_19001){
var state_val_19002 = (state_19001[(1)]);
if((state_val_19002 === (7))){
var inst_18997 = (state_19001[(2)]);
var state_19001__$1 = state_19001;
var statearr_19003_20085 = state_19001__$1;
(statearr_19003_20085[(2)] = inst_18997);

(statearr_19003_20085[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19002 === (1))){
var inst_18957 = [];
var inst_18958 = inst_18957;
var inst_18959 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_19001__$1 = (function (){var statearr_19006 = state_19001;
(statearr_19006[(7)] = inst_18958);

(statearr_19006[(8)] = inst_18959);

return statearr_19006;
})();
var statearr_19007_20086 = state_19001__$1;
(statearr_19007_20086[(2)] = null);

(statearr_19007_20086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19002 === (4))){
var inst_18962 = (state_19001[(9)]);
var inst_18962__$1 = (state_19001[(2)]);
var inst_18963 = (inst_18962__$1 == null);
var inst_18964 = cljs.core.not(inst_18963);
var state_19001__$1 = (function (){var statearr_19008 = state_19001;
(statearr_19008[(9)] = inst_18962__$1);

return statearr_19008;
})();
if(inst_18964){
var statearr_19009_20092 = state_19001__$1;
(statearr_19009_20092[(1)] = (5));

} else {
var statearr_19010_20093 = state_19001__$1;
(statearr_19010_20093[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19002 === (15))){
var inst_18958 = (state_19001[(7)]);
var inst_18989 = cljs.core.vec(inst_18958);
var state_19001__$1 = state_19001;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19001__$1,(18),out,inst_18989);
} else {
if((state_val_19002 === (13))){
var inst_18984 = (state_19001[(2)]);
var state_19001__$1 = state_19001;
var statearr_19011_20094 = state_19001__$1;
(statearr_19011_20094[(2)] = inst_18984);

(statearr_19011_20094[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19002 === (6))){
var inst_18958 = (state_19001[(7)]);
var inst_18986 = inst_18958.length;
var inst_18987 = (inst_18986 > (0));
var state_19001__$1 = state_19001;
if(cljs.core.truth_(inst_18987)){
var statearr_19012_20096 = state_19001__$1;
(statearr_19012_20096[(1)] = (15));

} else {
var statearr_19013_20097 = state_19001__$1;
(statearr_19013_20097[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19002 === (17))){
var inst_18994 = (state_19001[(2)]);
var inst_18995 = cljs.core.async.close_BANG_(out);
var state_19001__$1 = (function (){var statearr_19014 = state_19001;
(statearr_19014[(10)] = inst_18994);

return statearr_19014;
})();
var statearr_19015_20101 = state_19001__$1;
(statearr_19015_20101[(2)] = inst_18995);

(statearr_19015_20101[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19002 === (3))){
var inst_18999 = (state_19001[(2)]);
var state_19001__$1 = state_19001;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19001__$1,inst_18999);
} else {
if((state_val_19002 === (12))){
var inst_18958 = (state_19001[(7)]);
var inst_18977 = cljs.core.vec(inst_18958);
var state_19001__$1 = state_19001;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19001__$1,(14),out,inst_18977);
} else {
if((state_val_19002 === (2))){
var state_19001__$1 = state_19001;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19001__$1,(4),ch);
} else {
if((state_val_19002 === (11))){
var inst_18958 = (state_19001[(7)]);
var inst_18966 = (state_19001[(11)]);
var inst_18962 = (state_19001[(9)]);
var inst_18974 = inst_18958.push(inst_18962);
var tmp19016 = inst_18958;
var inst_18958__$1 = tmp19016;
var inst_18959 = inst_18966;
var state_19001__$1 = (function (){var statearr_19017 = state_19001;
(statearr_19017[(7)] = inst_18958__$1);

(statearr_19017[(8)] = inst_18959);

(statearr_19017[(12)] = inst_18974);

return statearr_19017;
})();
var statearr_19018_20102 = state_19001__$1;
(statearr_19018_20102[(2)] = null);

(statearr_19018_20102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19002 === (9))){
var inst_18959 = (state_19001[(8)]);
var inst_18970 = cljs.core.keyword_identical_QMARK_(inst_18959,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_19001__$1 = state_19001;
var statearr_19019_20103 = state_19001__$1;
(statearr_19019_20103[(2)] = inst_18970);

(statearr_19019_20103[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19002 === (5))){
var inst_18966 = (state_19001[(11)]);
var inst_18959 = (state_19001[(8)]);
var inst_18962 = (state_19001[(9)]);
var inst_18967 = (state_19001[(13)]);
var inst_18966__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18962) : f.call(null,inst_18962));
var inst_18967__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18966__$1,inst_18959);
var state_19001__$1 = (function (){var statearr_19020 = state_19001;
(statearr_19020[(11)] = inst_18966__$1);

(statearr_19020[(13)] = inst_18967__$1);

return statearr_19020;
})();
if(inst_18967__$1){
var statearr_19021_20108 = state_19001__$1;
(statearr_19021_20108[(1)] = (8));

} else {
var statearr_19024_20109 = state_19001__$1;
(statearr_19024_20109[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19002 === (14))){
var inst_18966 = (state_19001[(11)]);
var inst_18962 = (state_19001[(9)]);
var inst_18979 = (state_19001[(2)]);
var inst_18980 = [];
var inst_18981 = inst_18980.push(inst_18962);
var inst_18958 = inst_18980;
var inst_18959 = inst_18966;
var state_19001__$1 = (function (){var statearr_19026 = state_19001;
(statearr_19026[(14)] = inst_18981);

(statearr_19026[(7)] = inst_18958);

(statearr_19026[(8)] = inst_18959);

(statearr_19026[(15)] = inst_18979);

return statearr_19026;
})();
var statearr_19027_20110 = state_19001__$1;
(statearr_19027_20110[(2)] = null);

(statearr_19027_20110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19002 === (16))){
var state_19001__$1 = state_19001;
var statearr_19031_20111 = state_19001__$1;
(statearr_19031_20111[(2)] = null);

(statearr_19031_20111[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19002 === (10))){
var inst_18972 = (state_19001[(2)]);
var state_19001__$1 = state_19001;
if(cljs.core.truth_(inst_18972)){
var statearr_19035_20112 = state_19001__$1;
(statearr_19035_20112[(1)] = (11));

} else {
var statearr_19036_20113 = state_19001__$1;
(statearr_19036_20113[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19002 === (18))){
var inst_18991 = (state_19001[(2)]);
var state_19001__$1 = state_19001;
var statearr_19037_20118 = state_19001__$1;
(statearr_19037_20118[(2)] = inst_18991);

(statearr_19037_20118[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19002 === (8))){
var inst_18967 = (state_19001[(13)]);
var state_19001__$1 = state_19001;
var statearr_19038_20119 = state_19001__$1;
(statearr_19038_20119[(2)] = inst_18967);

(statearr_19038_20119[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15402__auto__ = null;
var cljs$core$async$state_machine__15402__auto____0 = (function (){
var statearr_19040 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19040[(0)] = cljs$core$async$state_machine__15402__auto__);

(statearr_19040[(1)] = (1));

return statearr_19040;
});
var cljs$core$async$state_machine__15402__auto____1 = (function (state_19001){
while(true){
var ret_value__15403__auto__ = (function (){try{while(true){
var result__15404__auto__ = switch__15401__auto__(state_19001);
if(cljs.core.keyword_identical_QMARK_(result__15404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15404__auto__;
}
break;
}
}catch (e19044){var ex__15405__auto__ = e19044;
var statearr_19045_20121 = state_19001;
(statearr_19045_20121[(2)] = ex__15405__auto__);


if(cljs.core.seq((state_19001[(4)]))){
var statearr_19047_20123 = state_19001;
(statearr_19047_20123[(1)] = cljs.core.first((state_19001[(4)])));

} else {
throw ex__15405__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20124 = state_19001;
state_19001 = G__20124;
continue;
} else {
return ret_value__15403__auto__;
}
break;
}
});
cljs$core$async$state_machine__15402__auto__ = function(state_19001){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15402__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15402__auto____1.call(this,state_19001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15402__auto____0;
cljs$core$async$state_machine__15402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15402__auto____1;
return cljs$core$async$state_machine__15402__auto__;
})()
})();
var state__15616__auto__ = (function (){var statearr_19052 = f__15615__auto__();
(statearr_19052[(6)] = c__15614__auto___20083);

return statearr_19052;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15616__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
