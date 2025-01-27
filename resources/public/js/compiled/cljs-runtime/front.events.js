goog.provide('front.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("front.events","initialize-db","front.events/initialize-db",-1005307874),(function (_,___$1){
return front.db.default_db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"add-task","add-task",-913525549),(function (db,p__20782){
var vec__20783 = p__20782;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20783,(0),null);
var task_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20783,(1),null);
var task_description = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20783,(2),null);
var task_deadline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20783,(3),null);
var tasks = new cljs.core.Keyword(null,"tasks","tasks",-1754368880).cljs$core$IFn$_invoke$arity$1(db);
var uuid = front.utils.safe_random_task_uuid(tasks);
var uuid_string = cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tasks","tasks",-1754368880),uuid_string], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),uuid_string,new cljs.core.Keyword(null,"name","name",1843675177),task_name,new cljs.core.Keyword(null,"description","description",-1428560544),task_description,new cljs.core.Keyword(null,"deadline","deadline",628964572),task_deadline,new cljs.core.Keyword(null,"is-done?","is-done?",1151196800),false], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"remove-task-uuid","remove-task-uuid",561153597),(function (db,p__20786){
var vec__20787 = p__20786;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20787,(0),null);
var uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20787,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tasks","tasks",-1754368880)], null),cljs.core.dissoc,uuid);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-task-is-done?","set-task-is-done?",-956760885),(function (db,p__20790){
var vec__20791 = p__20790;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20791,(0),null);
var uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20791,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20791,(2),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tasks","tasks",-1754368880),uuid,new cljs.core.Keyword(null,"is-done?","is-done?",1151196800)], null),cljs.core.constantly(value));
}));
re_frame.core.reg_cofx(new cljs.core.Keyword(null,"now","now",-1650525531),(function (cofx,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cofx,new cljs.core.Keyword(null,"now","now",-1650525531),(new Date()));
}));

//# sourceMappingURL=front.events.js.map
