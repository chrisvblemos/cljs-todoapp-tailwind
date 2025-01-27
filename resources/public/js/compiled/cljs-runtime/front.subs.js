goog.provide('front.subs');
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"tasks","tasks",-1754368880),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword(null,"tasks","tasks",-1754368880).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"tasks-sorted-by-date-asc","tasks-sorted-by-date-asc",542453869),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
var tasks = new cljs.core.Keyword(null,"tasks","tasks",-1754368880).cljs$core$IFn$_invoke$arity$1(db);
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p__20269){
var vec__20270 = p__20269;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20270,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20270,(1),null);
return new cljs.core.Keyword(null,"deadline","deadline",628964572).cljs$core$IFn$_invoke$arity$1(v);
}),tasks);
})], 0));

//# sourceMappingURL=front.subs.js.map
