goog.provide('todoapp.core');
todoapp.core.dev_setup = (function todoapp$core$dev_setup(){
if(todoapp.config.debug_QMARK_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
todoapp.core.mount_root = (function todoapp$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_();

var root_el = document.getElementById("app");
reagent.dom.unmount_component_at_node(root_el);

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [todoapp.views.main_panel], null),root_el);
});
todoapp.core.init = (function todoapp$core$init(){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todoapp.events","initialize-db","todoapp.events/initialize-db",1699803620)], null));

todoapp.core.dev_setup();

return todoapp.core.mount_root();
});

//# sourceMappingURL=todoapp.core.js.map
