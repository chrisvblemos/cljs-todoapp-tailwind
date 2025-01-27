goog.provide('front.core');
front.core.dev_setup = (function front$core$dev_setup(){
if(front.config.debug_QMARK_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
front.core.mount_root = (function front$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_();

var root_el = document.getElementById("app");
reagent.dom.unmount_component_at_node(root_el);

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [front.views.main_panel], null),root_el);
});
front.core.init = (function front$core$init(){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("front.events","initialize-db","front.events/initialize-db",-1005307874)], null));

front.core.dev_setup();

return front.core.mount_root();
});

//# sourceMappingURL=front.core.js.map
