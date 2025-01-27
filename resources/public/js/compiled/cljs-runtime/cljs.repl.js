goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__21241){
var map__21242 = p__21241;
var map__21242__$1 = cljs.core.__destructure_map(map__21242);
var m = map__21242__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21242__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21242__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__21245_21636 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__21246_21637 = null;
var count__21247_21638 = (0);
var i__21248_21639 = (0);
while(true){
if((i__21248_21639 < count__21247_21638)){
var f_21644 = chunk__21246_21637.cljs$core$IIndexed$_nth$arity$2(null,i__21248_21639);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_21644], 0));


var G__21647 = seq__21245_21636;
var G__21648 = chunk__21246_21637;
var G__21649 = count__21247_21638;
var G__21650 = (i__21248_21639 + (1));
seq__21245_21636 = G__21647;
chunk__21246_21637 = G__21648;
count__21247_21638 = G__21649;
i__21248_21639 = G__21650;
continue;
} else {
var temp__5804__auto___21652 = cljs.core.seq(seq__21245_21636);
if(temp__5804__auto___21652){
var seq__21245_21653__$1 = temp__5804__auto___21652;
if(cljs.core.chunked_seq_QMARK_(seq__21245_21653__$1)){
var c__5568__auto___21654 = cljs.core.chunk_first(seq__21245_21653__$1);
var G__21655 = cljs.core.chunk_rest(seq__21245_21653__$1);
var G__21656 = c__5568__auto___21654;
var G__21657 = cljs.core.count(c__5568__auto___21654);
var G__21658 = (0);
seq__21245_21636 = G__21655;
chunk__21246_21637 = G__21656;
count__21247_21638 = G__21657;
i__21248_21639 = G__21658;
continue;
} else {
var f_21659 = cljs.core.first(seq__21245_21653__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_21659], 0));


var G__21660 = cljs.core.next(seq__21245_21653__$1);
var G__21661 = null;
var G__21662 = (0);
var G__21663 = (0);
seq__21245_21636 = G__21660;
chunk__21246_21637 = G__21661;
count__21247_21638 = G__21662;
i__21248_21639 = G__21663;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_21664 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_21664], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_21664)))?cljs.core.second(arglists_21664):arglists_21664)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__21262_21667 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__21263_21668 = null;
var count__21264_21669 = (0);
var i__21265_21670 = (0);
while(true){
if((i__21265_21670 < count__21264_21669)){
var vec__21306_21671 = chunk__21263_21668.cljs$core$IIndexed$_nth$arity$2(null,i__21265_21670);
var name_21672 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21306_21671,(0),null);
var map__21309_21673 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21306_21671,(1),null);
var map__21309_21674__$1 = cljs.core.__destructure_map(map__21309_21673);
var doc_21675 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21309_21674__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_21676 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21309_21674__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_21672], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_21676], 0));

if(cljs.core.truth_(doc_21675)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_21675], 0));
} else {
}


var G__21688 = seq__21262_21667;
var G__21689 = chunk__21263_21668;
var G__21690 = count__21264_21669;
var G__21691 = (i__21265_21670 + (1));
seq__21262_21667 = G__21688;
chunk__21263_21668 = G__21689;
count__21264_21669 = G__21690;
i__21265_21670 = G__21691;
continue;
} else {
var temp__5804__auto___21696 = cljs.core.seq(seq__21262_21667);
if(temp__5804__auto___21696){
var seq__21262_21698__$1 = temp__5804__auto___21696;
if(cljs.core.chunked_seq_QMARK_(seq__21262_21698__$1)){
var c__5568__auto___21703 = cljs.core.chunk_first(seq__21262_21698__$1);
var G__21706 = cljs.core.chunk_rest(seq__21262_21698__$1);
var G__21707 = c__5568__auto___21703;
var G__21708 = cljs.core.count(c__5568__auto___21703);
var G__21709 = (0);
seq__21262_21667 = G__21706;
chunk__21263_21668 = G__21707;
count__21264_21669 = G__21708;
i__21265_21670 = G__21709;
continue;
} else {
var vec__21323_21715 = cljs.core.first(seq__21262_21698__$1);
var name_21716 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21323_21715,(0),null);
var map__21326_21717 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21323_21715,(1),null);
var map__21326_21718__$1 = cljs.core.__destructure_map(map__21326_21717);
var doc_21719 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21326_21718__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_21720 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21326_21718__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_21716], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_21720], 0));

if(cljs.core.truth_(doc_21719)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_21719], 0));
} else {
}


var G__21727 = cljs.core.next(seq__21262_21698__$1);
var G__21728 = null;
var G__21729 = (0);
var G__21730 = (0);
seq__21262_21667 = G__21727;
chunk__21263_21668 = G__21728;
count__21264_21669 = G__21729;
i__21265_21670 = G__21730;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__21333 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__21334 = null;
var count__21335 = (0);
var i__21336 = (0);
while(true){
if((i__21336 < count__21335)){
var role = chunk__21334.cljs$core$IIndexed$_nth$arity$2(null,i__21336);
var temp__5804__auto___21735__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___21735__$1)){
var spec_21736 = temp__5804__auto___21735__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_21736)], 0));
} else {
}


var G__21737 = seq__21333;
var G__21738 = chunk__21334;
var G__21739 = count__21335;
var G__21740 = (i__21336 + (1));
seq__21333 = G__21737;
chunk__21334 = G__21738;
count__21335 = G__21739;
i__21336 = G__21740;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__21333);
if(temp__5804__auto____$1){
var seq__21333__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__21333__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__21333__$1);
var G__21750 = cljs.core.chunk_rest(seq__21333__$1);
var G__21751 = c__5568__auto__;
var G__21752 = cljs.core.count(c__5568__auto__);
var G__21753 = (0);
seq__21333 = G__21750;
chunk__21334 = G__21751;
count__21335 = G__21752;
i__21336 = G__21753;
continue;
} else {
var role = cljs.core.first(seq__21333__$1);
var temp__5804__auto___21755__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___21755__$2)){
var spec_21758 = temp__5804__auto___21755__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_21758)], 0));
} else {
}


var G__21763 = cljs.core.next(seq__21333__$1);
var G__21764 = null;
var G__21765 = (0);
var G__21766 = (0);
seq__21333 = G__21763;
chunk__21334 = G__21764;
count__21335 = G__21765;
i__21336 = G__21766;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__21817 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__21818 = cljs.core.ex_cause(t);
via = G__21817;
t = G__21818;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__21426 = datafied_throwable;
var map__21426__$1 = cljs.core.__destructure_map(map__21426);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21426__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21426__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21426__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__21428 = cljs.core.last(via);
var map__21428__$1 = cljs.core.__destructure_map(map__21428);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21428__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21428__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21428__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__21429 = data;
var map__21429__$1 = cljs.core.__destructure_map(map__21429);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21429__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21429__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21429__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__21430 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__21430__$1 = cljs.core.__destructure_map(map__21430);
var top_data = map__21430__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21430__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__21438 = phase;
var G__21438__$1 = (((G__21438 instanceof cljs.core.Keyword))?G__21438.fqn:null);
switch (G__21438__$1) {
case "read-source":
var map__21451 = data;
var map__21451__$1 = cljs.core.__destructure_map(map__21451);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21451__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21451__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__21455 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__21455__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21455,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__21455);
var G__21455__$2 = (cljs.core.truth_((function (){var fexpr__21460 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__21460.cljs$core$IFn$_invoke$arity$1 ? fexpr__21460.cljs$core$IFn$_invoke$arity$1(source) : fexpr__21460.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__21455__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__21455__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21455__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__21455__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__21465 = top_data;
var G__21465__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21465,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__21465);
var G__21465__$2 = (cljs.core.truth_((function (){var fexpr__21466 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__21466.cljs$core$IFn$_invoke$arity$1 ? fexpr__21466.cljs$core$IFn$_invoke$arity$1(source) : fexpr__21466.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__21465__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__21465__$1);
var G__21465__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21465__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__21465__$2);
var G__21465__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21465__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__21465__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21465__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__21465__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__21471 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21471,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21471,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21471,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21471,(3),null);
var G__21477 = top_data;
var G__21477__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21477,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__21477);
var G__21477__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21477__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__21477__$1);
var G__21477__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21477__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__21477__$2);
var G__21477__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21477__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__21477__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21477__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__21477__$4;
}

break;
case "execution":
var vec__21481 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21481,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21481,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21481,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21481,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__21425_SHARP_){
var or__5045__auto__ = (p1__21425_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__21488 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__21488.cljs$core$IFn$_invoke$arity$1 ? fexpr__21488.cljs$core$IFn$_invoke$arity$1(p1__21425_SHARP_) : fexpr__21488.call(null,p1__21425_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__21490 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__21490__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21490,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__21490);
var G__21490__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21490__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__21490__$1);
var G__21490__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21490__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__21490__$2);
var G__21490__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21490__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__21490__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21490__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__21490__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21438__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__21523){
var map__21525 = p__21523;
var map__21525__$1 = cljs.core.__destructure_map(map__21525);
var triage_data = map__21525__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21525__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21525__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21525__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21525__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21525__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21525__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21525__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21525__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__21544 = phase;
var G__21544__$1 = (((G__21544 instanceof cljs.core.Keyword))?G__21544.fqn:null);
switch (G__21544__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__21547 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__21548 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__21549 = loc;
var G__21550 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__21552_21955 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__21553_21956 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__21554_21957 = true;
var _STAR_print_fn_STAR__temp_val__21555_21958 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__21554_21957);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__21555_21958);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__21505_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__21505_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__21553_21956);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__21552_21955);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__21547,G__21548,G__21549,G__21550) : format.call(null,G__21547,G__21548,G__21549,G__21550));

break;
case "macroexpansion":
var G__21572 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__21573 = cause_type;
var G__21574 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__21575 = loc;
var G__21576 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__21572,G__21573,G__21574,G__21575,G__21576) : format.call(null,G__21572,G__21573,G__21574,G__21575,G__21576));

break;
case "compile-syntax-check":
var G__21578 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__21579 = cause_type;
var G__21580 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__21581 = loc;
var G__21582 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__21578,G__21579,G__21580,G__21581,G__21582) : format.call(null,G__21578,G__21579,G__21580,G__21581,G__21582));

break;
case "compilation":
var G__21585 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__21586 = cause_type;
var G__21587 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__21588 = loc;
var G__21589 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__21585,G__21586,G__21587,G__21588,G__21589) : format.call(null,G__21585,G__21586,G__21587,G__21588,G__21589));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__21593 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__21594 = symbol;
var G__21595 = loc;
var G__21596 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__21597_21968 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__21598_21969 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__21599_21970 = true;
var _STAR_print_fn_STAR__temp_val__21600_21971 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__21599_21970);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__21600_21971);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__21514_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__21514_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__21598_21969);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__21597_21968);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__21593,G__21594,G__21595,G__21596) : format.call(null,G__21593,G__21594,G__21595,G__21596));
} else {
var G__21609 = "Execution error%s at %s(%s).\n%s\n";
var G__21610 = cause_type;
var G__21612 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__21613 = loc;
var G__21614 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__21609,G__21610,G__21612,G__21613,G__21614) : format.call(null,G__21609,G__21610,G__21612,G__21613,G__21614));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21544__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
