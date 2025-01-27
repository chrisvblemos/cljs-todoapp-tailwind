goog.provide('todoapp.utils');
/**
 * Generates a random task UUID
 *   without duplicates.
 */
todoapp.utils.safe_random_task_uuid = (function todoapp$utils$safe_random_task_uuid(tasks){
var uuid = cljs.core.random_uuid();
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tasks,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [uuid], null)))){
return (todoapp.utils.safe_random_task_uuid.cljs$core$IFn$_invoke$arity$1 ? todoapp.utils.safe_random_task_uuid.cljs$core$IFn$_invoke$arity$1(tasks) : todoapp.utils.safe_random_task_uuid.call(null,tasks));
} else {
return uuid;
}
});
todoapp.utils.str__GT_date = (function todoapp$utils$str__GT_date(date_str){
return (new Date(date_str));
});
todoapp.utils.compare_date = (function todoapp$utils$compare_date(date,other_date){
var parsed_date = todoapp.utils.str__GT_date(date).setHours((0),(0),(0),(0));
var parsed_other_date = todoapp.utils.str__GT_date(other_date).setHours((0),(0),(0),(0));
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["comparing ",parsed_date," with ",parsed_other_date], 0));

if((parsed_date < parsed_other_date)){
return new cljs.core.Keyword(null,"past","past",182249289);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(parsed_date,parsed_other_date)){
return new cljs.core.Keyword(null,"today","today",945271563);
} else {
if((parsed_date > parsed_other_date)){
return new cljs.core.Keyword(null,"future","future",1877842724);
} else {
return null;
}
}
}
});
todoapp.utils.get_task_status = (function todoapp$utils$get_task_status(p__11982,date_today){
var map__11995 = p__11982;
var map__11995__$1 = cljs.core.__destructure_map(map__11995);
var deadline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11995__$1,new cljs.core.Keyword(null,"deadline","deadline",628964572));
var is_done_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11995__$1,new cljs.core.Keyword(null,"is-done?","is-done?",1151196800));
var time_relative = todoapp.utils.compare_date(deadline,date_today);
if(cljs.core.truth_(is_done_QMARK_)){
return new cljs.core.Keyword(null,"done","done",-889844188);
} else {
var G__12022 = time_relative;
var G__12022__$1 = (((G__12022 instanceof cljs.core.Keyword))?G__12022.fqn:null);
switch (G__12022__$1) {
case "past":
return new cljs.core.Keyword(null,"late","late",1988108422);

break;
case "today":
return new cljs.core.Keyword(null,"today","today",945271563);

break;
case "future":
return new cljs.core.Keyword(null,"pending","pending",-220036727);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12022__$1)].join('')));

}
}
});

//# sourceMappingURL=todoapp.utils.js.map
