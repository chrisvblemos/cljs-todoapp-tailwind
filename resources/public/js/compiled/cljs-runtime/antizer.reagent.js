goog.provide('antizer.reagent');
goog.scope(function(){
  antizer.reagent.goog$module$goog$object = goog.module.get('goog.object');
});
/**
 * Calls Form.create() decorator with the form to be created. form can be
 * any hiccup form. Accepts the following options:
 * 
 * * :options - map of Form.create() options. Refer to: 
 *              https://ant.design/components/form/#Form.create(options) for
 *              details
 * * :props - the properties hashmap to be passed to the component. Note that
 *            the received properties will be in the form of a JavaScript associative map
 */
antizer.reagent.create_form = (function antizer$reagent$create_form(var_args){
var args__5775__auto__ = [];
var len__5769__auto___12554 = arguments.length;
var i__5770__auto___12555 = (0);
while(true){
if((i__5770__auto___12555 < len__5769__auto___12554)){
args__5775__auto__.push((arguments[i__5770__auto___12555]));

var G__12556 = (i__5770__auto___12555 + (1));
i__5770__auto___12555 = G__12556;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return antizer.reagent.create_form.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(antizer.reagent.create_form.cljs$core$IFn$_invoke$arity$variadic = (function (form,p__12481){
var map__12482 = p__12481;
var map__12482__$1 = cljs.core.__destructure_map(map__12482);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12482__$1,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY);
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12482__$1,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY);
return reagent.core.create_element.cljs$core$IFn$_invoke$arity$2((function (){var G__12486 = reagent.core.reactify_component.cljs$core$IFn$_invoke$arity$1(form);
var fexpr__12485 = (function (){var G__12488 = cljs.core.clj__GT_js(antizer.core.map_keys__GT_camel_case(options));
var fexpr__12487 = antizer.reagent.goog$module$goog$object.getValueByKeys(antd,"Form","create");
return (fexpr__12487.cljs$core$IFn$_invoke$arity$1 ? fexpr__12487.cljs$core$IFn$_invoke$arity$1(G__12488) : fexpr__12487.call(null,G__12488));
})();
return (fexpr__12485.cljs$core$IFn$_invoke$arity$1 ? fexpr__12485.cljs$core$IFn$_invoke$arity$1(G__12486) : fexpr__12485.call(null,G__12486));
})(),cljs.core.clj__GT_js(props));
}));

(antizer.reagent.create_form.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(antizer.reagent.create_form.cljs$lang$applyTo = (function (seq12476){
var G__12477 = cljs.core.first(seq12476);
var seq12476__$1 = cljs.core.next(seq12476);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12477,seq12476__$1);
}));

/**
 * Returns the `form` created by Form.create(). This function must be called
 * from within the `form` component
 */
antizer.reagent.get_form = (function antizer$reagent$get_form(){
return new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(reagent.core.props(reagent.core.current_component()),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)));
});
/**
 * Decorate a form field, corresponds to antd's getFieldDecorator() function
 * Arguments:
 * 
 * * form - the `form` object, obtained from `(get-form)`
 * * id - field identifier, supports nested fields format in string format
 * * options - the validation options for the field
 * * field - the input field element that the validation will be applied to
 * 
 * For more information about the validation options, please refer to: 
 * https://ant.design/components/form/#getFieldDecorator(id,-options)-parameters
 */
antizer.reagent.decorate_field = (function antizer$reagent$decorate_field(var_args){
var G__12490 = arguments.length;
switch (G__12490) {
case 3:
return antizer.reagent.decorate_field.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return antizer.reagent.decorate_field.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(antizer.reagent.decorate_field.cljs$core$IFn$_invoke$arity$3 = (function (form,id,field){
return antizer.reagent.decorate_field.cljs$core$IFn$_invoke$arity$4(form,id,cljs.core.PersistentArrayMap.EMPTY,field);
}));

(antizer.reagent.decorate_field.cljs$core$IFn$_invoke$arity$4 = (function (form,id,options,field){
var field_decorator = new cljs.core.Keyword(null,"getFieldDecorator","getFieldDecorator",-1859085334).cljs$core$IFn$_invoke$arity$1(form);
var params = cljs.core.clj__GT_js(antizer.core.map_keys__GT_camel_case(options));
var G__12492 = reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(field);
var fexpr__12491 = (field_decorator.cljs$core$IFn$_invoke$arity$2 ? field_decorator.cljs$core$IFn$_invoke$arity$2(id,params) : field_decorator.call(null,id,params));
return (fexpr__12491.cljs$core$IFn$_invoke$arity$1 ? fexpr__12491.cljs$core$IFn$_invoke$arity$1(G__12492) : fexpr__12491.call(null,G__12492));
}));

(antizer.reagent.decorate_field.cljs$lang$maxFixedArity = 4);

antizer.reagent.get_field_decorator = (function antizer$reagent$get_field_decorator(var_args){
var args__5775__auto__ = [];
var len__5769__auto___12558 = arguments.length;
var i__5770__auto___12559 = (0);
while(true){
if((i__5770__auto___12559 < len__5769__auto___12558)){
args__5775__auto__.push((arguments[i__5770__auto___12559]));

var G__12560 = (i__5770__auto___12559 + (1));
i__5770__auto___12559 = G__12560;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return antizer.reagent.get_field_decorator.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(antizer.reagent.get_field_decorator.cljs$core$IFn$_invoke$arity$variadic = (function (form__12442__auto__,args__12443__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_js_func,(function (){var fexpr__12495 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("getFieldDecorator");
return (fexpr__12495.cljs$core$IFn$_invoke$arity$1 ? fexpr__12495.cljs$core$IFn$_invoke$arity$1(form__12442__auto__) : fexpr__12495.call(null,form__12442__auto__));
})(),args__12443__auto__);
}));

(antizer.reagent.get_field_decorator.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(antizer.reagent.get_field_decorator.cljs$lang$applyTo = (function (seq12493){
var G__12494 = cljs.core.first(seq12493);
var seq12493__$1 = cljs.core.next(seq12493);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12494,seq12493__$1);
}));


antizer.reagent.get_field_error = (function antizer$reagent$get_field_error(var_args){
var args__5775__auto__ = [];
var len__5769__auto___12561 = arguments.length;
var i__5770__auto___12562 = (0);
while(true){
if((i__5770__auto___12562 < len__5769__auto___12561)){
args__5775__auto__.push((arguments[i__5770__auto___12562]));

var G__12563 = (i__5770__auto___12562 + (1));
i__5770__auto___12562 = G__12563;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return antizer.reagent.get_field_error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(antizer.reagent.get_field_error.cljs$core$IFn$_invoke$arity$variadic = (function (form__12442__auto__,args__12443__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_js_func,(function (){var fexpr__12498 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("getFieldError");
return (fexpr__12498.cljs$core$IFn$_invoke$arity$1 ? fexpr__12498.cljs$core$IFn$_invoke$arity$1(form__12442__auto__) : fexpr__12498.call(null,form__12442__auto__));
})(),args__12443__auto__);
}));

(antizer.reagent.get_field_error.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(antizer.reagent.get_field_error.cljs$lang$applyTo = (function (seq12496){
var G__12497 = cljs.core.first(seq12496);
var seq12496__$1 = cljs.core.next(seq12496);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12497,seq12496__$1);
}));


antizer.reagent.get_fields_error = (function antizer$reagent$get_fields_error(var_args){
var args__5775__auto__ = [];
var len__5769__auto___12564 = arguments.length;
var i__5770__auto___12565 = (0);
while(true){
if((i__5770__auto___12565 < len__5769__auto___12564)){
args__5775__auto__.push((arguments[i__5770__auto___12565]));

var G__12566 = (i__5770__auto___12565 + (1));
i__5770__auto___12565 = G__12566;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return antizer.reagent.get_fields_error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(antizer.reagent.get_fields_error.cljs$core$IFn$_invoke$arity$variadic = (function (form__12442__auto__,args__12443__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_js_func,(function (){var fexpr__12501 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("getFieldsError");
return (fexpr__12501.cljs$core$IFn$_invoke$arity$1 ? fexpr__12501.cljs$core$IFn$_invoke$arity$1(form__12442__auto__) : fexpr__12501.call(null,form__12442__auto__));
})(),args__12443__auto__);
}));

(antizer.reagent.get_fields_error.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(antizer.reagent.get_fields_error.cljs$lang$applyTo = (function (seq12499){
var G__12500 = cljs.core.first(seq12499);
var seq12499__$1 = cljs.core.next(seq12499);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12500,seq12499__$1);
}));


antizer.reagent.get_fields_value = (function antizer$reagent$get_fields_value(var_args){
var args__5775__auto__ = [];
var len__5769__auto___12567 = arguments.length;
var i__5770__auto___12568 = (0);
while(true){
if((i__5770__auto___12568 < len__5769__auto___12567)){
args__5775__auto__.push((arguments[i__5770__auto___12568]));

var G__12569 = (i__5770__auto___12568 + (1));
i__5770__auto___12568 = G__12569;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return antizer.reagent.get_fields_value.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(antizer.reagent.get_fields_value.cljs$core$IFn$_invoke$arity$variadic = (function (form__12442__auto__,args__12443__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_js_func,(function (){var fexpr__12504 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("getFieldsValue");
return (fexpr__12504.cljs$core$IFn$_invoke$arity$1 ? fexpr__12504.cljs$core$IFn$_invoke$arity$1(form__12442__auto__) : fexpr__12504.call(null,form__12442__auto__));
})(),args__12443__auto__);
}));

(antizer.reagent.get_fields_value.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(antizer.reagent.get_fields_value.cljs$lang$applyTo = (function (seq12502){
var G__12503 = cljs.core.first(seq12502);
var seq12502__$1 = cljs.core.next(seq12502);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12503,seq12502__$1);
}));


antizer.reagent.get_field_value = (function antizer$reagent$get_field_value(var_args){
var args__5775__auto__ = [];
var len__5769__auto___12570 = arguments.length;
var i__5770__auto___12571 = (0);
while(true){
if((i__5770__auto___12571 < len__5769__auto___12570)){
args__5775__auto__.push((arguments[i__5770__auto___12571]));

var G__12572 = (i__5770__auto___12571 + (1));
i__5770__auto___12571 = G__12572;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return antizer.reagent.get_field_value.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(antizer.reagent.get_field_value.cljs$core$IFn$_invoke$arity$variadic = (function (form__12442__auto__,args__12443__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_js_func,(function (){var fexpr__12507 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("getFieldValue");
return (fexpr__12507.cljs$core$IFn$_invoke$arity$1 ? fexpr__12507.cljs$core$IFn$_invoke$arity$1(form__12442__auto__) : fexpr__12507.call(null,form__12442__auto__));
})(),args__12443__auto__);
}));

(antizer.reagent.get_field_value.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(antizer.reagent.get_field_value.cljs$lang$applyTo = (function (seq12505){
var G__12506 = cljs.core.first(seq12505);
var seq12505__$1 = cljs.core.next(seq12505);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12506,seq12505__$1);
}));


antizer.reagent.is_fields_touched = (function antizer$reagent$is_fields_touched(var_args){
var args__5775__auto__ = [];
var len__5769__auto___12573 = arguments.length;
var i__5770__auto___12574 = (0);
while(true){
if((i__5770__auto___12574 < len__5769__auto___12573)){
args__5775__auto__.push((arguments[i__5770__auto___12574]));

var G__12575 = (i__5770__auto___12574 + (1));
i__5770__auto___12574 = G__12575;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return antizer.reagent.is_fields_touched.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(antizer.reagent.is_fields_touched.cljs$core$IFn$_invoke$arity$variadic = (function (form__12442__auto__,args__12443__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_js_func,(function (){var fexpr__12510 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("isFieldsTouched");
return (fexpr__12510.cljs$core$IFn$_invoke$arity$1 ? fexpr__12510.cljs$core$IFn$_invoke$arity$1(form__12442__auto__) : fexpr__12510.call(null,form__12442__auto__));
})(),args__12443__auto__);
}));

(antizer.reagent.is_fields_touched.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(antizer.reagent.is_fields_touched.cljs$lang$applyTo = (function (seq12508){
var G__12509 = cljs.core.first(seq12508);
var seq12508__$1 = cljs.core.next(seq12508);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12509,seq12508__$1);
}));


antizer.reagent.is_field_touched = (function antizer$reagent$is_field_touched(var_args){
var args__5775__auto__ = [];
var len__5769__auto___12576 = arguments.length;
var i__5770__auto___12577 = (0);
while(true){
if((i__5770__auto___12577 < len__5769__auto___12576)){
args__5775__auto__.push((arguments[i__5770__auto___12577]));

var G__12578 = (i__5770__auto___12577 + (1));
i__5770__auto___12577 = G__12578;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return antizer.reagent.is_field_touched.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(antizer.reagent.is_field_touched.cljs$core$IFn$_invoke$arity$variadic = (function (form__12442__auto__,args__12443__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_js_func,(function (){var fexpr__12513 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("isFieldTouched");
return (fexpr__12513.cljs$core$IFn$_invoke$arity$1 ? fexpr__12513.cljs$core$IFn$_invoke$arity$1(form__12442__auto__) : fexpr__12513.call(null,form__12442__auto__));
})(),args__12443__auto__);
}));

(antizer.reagent.is_field_touched.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(antizer.reagent.is_field_touched.cljs$lang$applyTo = (function (seq12511){
var G__12512 = cljs.core.first(seq12511);
var seq12511__$1 = cljs.core.next(seq12511);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12512,seq12511__$1);
}));


antizer.reagent.is_field_validating = (function antizer$reagent$is_field_validating(var_args){
var args__5775__auto__ = [];
var len__5769__auto___12579 = arguments.length;
var i__5770__auto___12580 = (0);
while(true){
if((i__5770__auto___12580 < len__5769__auto___12579)){
args__5775__auto__.push((arguments[i__5770__auto___12580]));

var G__12581 = (i__5770__auto___12580 + (1));
i__5770__auto___12580 = G__12581;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return antizer.reagent.is_field_validating.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(antizer.reagent.is_field_validating.cljs$core$IFn$_invoke$arity$variadic = (function (form__12442__auto__,args__12443__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_js_func,(function (){var fexpr__12516 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("isFieldValidating");
return (fexpr__12516.cljs$core$IFn$_invoke$arity$1 ? fexpr__12516.cljs$core$IFn$_invoke$arity$1(form__12442__auto__) : fexpr__12516.call(null,form__12442__auto__));
})(),args__12443__auto__);
}));

(antizer.reagent.is_field_validating.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(antizer.reagent.is_field_validating.cljs$lang$applyTo = (function (seq12514){
var G__12515 = cljs.core.first(seq12514);
var seq12514__$1 = cljs.core.next(seq12514);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12515,seq12514__$1);
}));


antizer.reagent.reset_fields = (function antizer$reagent$reset_fields(var_args){
var args__5775__auto__ = [];
var len__5769__auto___12582 = arguments.length;
var i__5770__auto___12583 = (0);
while(true){
if((i__5770__auto___12583 < len__5769__auto___12582)){
args__5775__auto__.push((arguments[i__5770__auto___12583]));

var G__12584 = (i__5770__auto___12583 + (1));
i__5770__auto___12583 = G__12584;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return antizer.reagent.reset_fields.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(antizer.reagent.reset_fields.cljs$core$IFn$_invoke$arity$variadic = (function (form__12442__auto__,args__12443__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_js_func,(function (){var fexpr__12519 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("resetFields");
return (fexpr__12519.cljs$core$IFn$_invoke$arity$1 ? fexpr__12519.cljs$core$IFn$_invoke$arity$1(form__12442__auto__) : fexpr__12519.call(null,form__12442__auto__));
})(),args__12443__auto__);
}));

(antizer.reagent.reset_fields.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(antizer.reagent.reset_fields.cljs$lang$applyTo = (function (seq12517){
var G__12518 = cljs.core.first(seq12517);
var seq12517__$1 = cljs.core.next(seq12517);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12518,seq12517__$1);
}));


antizer.reagent.set_fields = (function antizer$reagent$set_fields(var_args){
var args__5775__auto__ = [];
var len__5769__auto___12585 = arguments.length;
var i__5770__auto___12586 = (0);
while(true){
if((i__5770__auto___12586 < len__5769__auto___12585)){
args__5775__auto__.push((arguments[i__5770__auto___12586]));

var G__12587 = (i__5770__auto___12586 + (1));
i__5770__auto___12586 = G__12587;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return antizer.reagent.set_fields.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(antizer.reagent.set_fields.cljs$core$IFn$_invoke$arity$variadic = (function (form__12442__auto__,args__12443__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_js_func,(function (){var fexpr__12522 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("setFields");
return (fexpr__12522.cljs$core$IFn$_invoke$arity$1 ? fexpr__12522.cljs$core$IFn$_invoke$arity$1(form__12442__auto__) : fexpr__12522.call(null,form__12442__auto__));
})(),args__12443__auto__);
}));

(antizer.reagent.set_fields.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(antizer.reagent.set_fields.cljs$lang$applyTo = (function (seq12520){
var G__12521 = cljs.core.first(seq12520);
var seq12520__$1 = cljs.core.next(seq12520);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12521,seq12520__$1);
}));


antizer.reagent.set_fields_value = (function antizer$reagent$set_fields_value(var_args){
var args__5775__auto__ = [];
var len__5769__auto___12588 = arguments.length;
var i__5770__auto___12589 = (0);
while(true){
if((i__5770__auto___12589 < len__5769__auto___12588)){
args__5775__auto__.push((arguments[i__5770__auto___12589]));

var G__12590 = (i__5770__auto___12589 + (1));
i__5770__auto___12589 = G__12590;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return antizer.reagent.set_fields_value.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(antizer.reagent.set_fields_value.cljs$core$IFn$_invoke$arity$variadic = (function (form__12442__auto__,args__12443__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_js_func,(function (){var fexpr__12525 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("setFieldsValue");
return (fexpr__12525.cljs$core$IFn$_invoke$arity$1 ? fexpr__12525.cljs$core$IFn$_invoke$arity$1(form__12442__auto__) : fexpr__12525.call(null,form__12442__auto__));
})(),args__12443__auto__);
}));

(antizer.reagent.set_fields_value.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(antizer.reagent.set_fields_value.cljs$lang$applyTo = (function (seq12523){
var G__12524 = cljs.core.first(seq12523);
var seq12523__$1 = cljs.core.next(seq12523);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12524,seq12523__$1);
}));


antizer.reagent.validate_fields = (function antizer$reagent$validate_fields(var_args){
var args__5775__auto__ = [];
var len__5769__auto___12591 = arguments.length;
var i__5770__auto___12592 = (0);
while(true){
if((i__5770__auto___12592 < len__5769__auto___12591)){
args__5775__auto__.push((arguments[i__5770__auto___12592]));

var G__12593 = (i__5770__auto___12592 + (1));
i__5770__auto___12592 = G__12593;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return antizer.reagent.validate_fields.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(antizer.reagent.validate_fields.cljs$core$IFn$_invoke$arity$variadic = (function (form__12442__auto__,args__12443__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_js_func,(function (){var fexpr__12528 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("validateFields");
return (fexpr__12528.cljs$core$IFn$_invoke$arity$1 ? fexpr__12528.cljs$core$IFn$_invoke$arity$1(form__12442__auto__) : fexpr__12528.call(null,form__12442__auto__));
})(),args__12443__auto__);
}));

(antizer.reagent.validate_fields.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(antizer.reagent.validate_fields.cljs$lang$applyTo = (function (seq12526){
var G__12527 = cljs.core.first(seq12526);
var seq12526__$1 = cljs.core.next(seq12526);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12527,seq12526__$1);
}));


antizer.reagent.validate_fields_and_scroll = (function antizer$reagent$validate_fields_and_scroll(var_args){
var args__5775__auto__ = [];
var len__5769__auto___12594 = arguments.length;
var i__5770__auto___12595 = (0);
while(true){
if((i__5770__auto___12595 < len__5769__auto___12594)){
args__5775__auto__.push((arguments[i__5770__auto___12595]));

var G__12596 = (i__5770__auto___12595 + (1));
i__5770__auto___12595 = G__12596;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return antizer.reagent.validate_fields_and_scroll.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(antizer.reagent.validate_fields_and_scroll.cljs$core$IFn$_invoke$arity$variadic = (function (form__12442__auto__,args__12443__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_js_func,(function (){var fexpr__12531 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("validateFieldsAndScroll");
return (fexpr__12531.cljs$core$IFn$_invoke$arity$1 ? fexpr__12531.cljs$core$IFn$_invoke$arity$1(form__12442__auto__) : fexpr__12531.call(null,form__12442__auto__));
})(),args__12443__auto__);
}));

(antizer.reagent.validate_fields_and_scroll.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(antizer.reagent.validate_fields_and_scroll.cljs$lang$applyTo = (function (seq12529){
var G__12530 = cljs.core.first(seq12529);
var seq12529__$1 = cljs.core.next(seq12529);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12530,seq12529__$1);
}));

antizer.reagent.message_config = (function antizer$reagent$message_config(var_args){
var args__5775__auto__ = [];
var len__5769__auto___12597 = arguments.length;
var i__5770__auto___12598 = (0);
while(true){
if((i__5770__auto___12598 < len__5769__auto___12597)){
args__5775__auto__.push((arguments[i__5770__auto___12598]));

var G__12599 = (i__5770__auto___12598 + (1));
i__5770__auto___12598 = G__12599;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return antizer.reagent.message_config.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(antizer.reagent.message_config.cljs$core$IFn$_invoke$arity$variadic = (function (args__12438__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_func,"message.config",args__12438__auto__);
}));

(antizer.reagent.message_config.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(antizer.reagent.message_config.cljs$lang$applyTo = (function (seq12532){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12532));
}));


antizer.reagent.message_destroy = (function antizer$reagent$message_destroy(var_args){
var args__5775__auto__ = [];
var len__5769__auto___12600 = arguments.length;
var i__5770__auto___12601 = (0);
while(true){
if((i__5770__auto___12601 < len__5769__auto___12600)){
args__5775__auto__.push((arguments[i__5770__auto___12601]));

var G__12602 = (i__5770__auto___12601 + (1));
i__5770__auto___12601 = G__12602;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return antizer.reagent.message_destroy.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(antizer.reagent.message_destroy.cljs$core$IFn$_invoke$arity$variadic = (function (args__12438__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_func,"message.destroy",args__12438__auto__);
}));

(antizer.reagent.message_destroy.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(antizer.reagent.message_destroy.cljs$lang$applyTo = (function (seq12533){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12533));
}));


antizer.reagent.message_error = (function antizer$reagent$message_error(var_args){
var args__5775__auto__ = [];
var len__5769__auto___12603 = arguments.length;
var i__5770__auto___12604 = (0);
while(true){
if((i__5770__auto___12604 < len__5769__auto___12603)){
args__5775__auto__.push((arguments[i__5770__auto___12604]));

var G__12605 = (i__5770__auto___12604 + (1));
i__5770__auto___12604 = G__12605;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return antizer.reagent.message_error.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(antizer.reagent.message_error.cljs$core$IFn$_invoke$arity$variadic = (function (args__12438__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_func,"message.error",args__12438__auto__);
}));

(antizer.reagent.message_error.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(antizer.reagent.message_error.cljs$lang$applyTo = (function (seq12534){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12534));
}));


antizer.reagent.message_info = (function antizer$reagent$message_info(var_args){
var args__5775__auto__ = [];
var len__5769__auto___12606 = arguments.length;
var i__5770__auto___12607 = (0);
while(true){
if((i__5770__auto___12607 < len__5769__auto___12606)){
args__5775__auto__.push((arguments[i__5770__auto___12607]));

var G__12608 = (i__5770__auto___12607 + (1));
i__5770__auto___12607 = G__12608;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return antizer.reagent.message_info.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(antizer.reagent.message_info.cljs$core$IFn$_invoke$arity$variadic = (function (args__12438__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_func,"message.info",args__12438__auto__);
}));

(antizer.reagent.message_info.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(antizer.reagent.message_info.cljs$lang$applyTo = (function (seq12535){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12535));
}));


antizer.reagent.message_loading = (function antizer$reagent$message_loading(var_args){
var args__5775__auto__ = [];
var len__5769__auto___12609 = arguments.length;
var i__5770__auto___12610 = (0);
while(true){
if((i__5770__auto___12610 < len__5769__auto___12609)){
args__5775__auto__.push((arguments[i__5770__auto___12610]));

var G__12611 = (i__5770__auto___12610 + (1));
i__5770__auto___12610 = G__12611;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return antizer.reagent.message_loading.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(antizer.reagent.message_loading.cljs$core$IFn$_invoke$arity$variadic = (function (args__12438__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_func,"message.loading",args__12438__auto__);
}));

(antizer.reagent.message_loading.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(antizer.reagent.message_loading.cljs$lang$applyTo = (function (seq12536){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12536));
}));


antizer.reagent.message_success = (function antizer$reagent$message_success(var_args){
var args__5775__auto__ = [];
var len__5769__auto___12612 = arguments.length;
var i__5770__auto___12613 = (0);
while(true){
if((i__5770__auto___12613 < len__5769__auto___12612)){
args__5775__auto__.push((arguments[i__5770__auto___12613]));

var G__12614 = (i__5770__auto___12613 + (1));
i__5770__auto___12613 = G__12614;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return antizer.reagent.message_success.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(antizer.reagent.message_success.cljs$core$IFn$_invoke$arity$variadic = (function (args__12438__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_func,"message.success",args__12438__auto__);
}));

(antizer.reagent.message_success.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(antizer.reagent.message_success.cljs$lang$applyTo = (function (seq12537){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12537));
}));


antizer.reagent.message_warn = (function antizer$reagent$message_warn(var_args){
var args__5775__auto__ = [];
var len__5769__auto___12615 = arguments.length;
var i__5770__auto___12616 = (0);
while(true){
if((i__5770__auto___12616 < len__5769__auto___12615)){
args__5775__auto__.push((arguments[i__5770__auto___12616]));

var G__12617 = (i__5770__auto___12616 + (1));
i__5770__auto___12616 = G__12617;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return antizer.reagent.message_warn.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(antizer.reagent.message_warn.cljs$core$IFn$_invoke$arity$variadic = (function (args__12438__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_func,"message.warn",args__12438__auto__);
}));

(antizer.reagent.message_warn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(antizer.reagent.message_warn.cljs$lang$applyTo = (function (seq12538){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12538));
}));


antizer.reagent.message_warning = (function antizer$reagent$message_warning(var_args){
var args__5775__auto__ = [];
var len__5769__auto___12618 = arguments.length;
var i__5770__auto___12619 = (0);
while(true){
if((i__5770__auto___12619 < len__5769__auto___12618)){
args__5775__auto__.push((arguments[i__5770__auto___12619]));

var G__12620 = (i__5770__auto___12619 + (1));
i__5770__auto___12619 = G__12620;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return antizer.reagent.message_warning.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(antizer.reagent.message_warning.cljs$core$IFn$_invoke$arity$variadic = (function (args__12438__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_func,"message.warning",args__12438__auto__);
}));

(antizer.reagent.message_warning.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(antizer.reagent.message_warning.cljs$lang$applyTo = (function (seq12539){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12539));
}));


antizer.reagent.modal_confirm = (function antizer$reagent$modal_confirm(var_args){
var args__5775__auto__ = [];
var len__5769__auto___12621 = arguments.length;
var i__5770__auto___12622 = (0);
while(true){
if((i__5770__auto___12622 < len__5769__auto___12621)){
args__5775__auto__.push((arguments[i__5770__auto___12622]));

var G__12623 = (i__5770__auto___12622 + (1));
i__5770__auto___12622 = G__12623;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return antizer.reagent.modal_confirm.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(antizer.reagent.modal_confirm.cljs$core$IFn$_invoke$arity$variadic = (function (args__12438__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_func,"Modal.confirm",args__12438__auto__);
}));

(antizer.reagent.modal_confirm.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(antizer.reagent.modal_confirm.cljs$lang$applyTo = (function (seq12540){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12540));
}));


antizer.reagent.modal_error = (function antizer$reagent$modal_error(var_args){
var args__5775__auto__ = [];
var len__5769__auto___12624 = arguments.length;
var i__5770__auto___12625 = (0);
while(true){
if((i__5770__auto___12625 < len__5769__auto___12624)){
args__5775__auto__.push((arguments[i__5770__auto___12625]));

var G__12626 = (i__5770__auto___12625 + (1));
i__5770__auto___12625 = G__12626;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return antizer.reagent.modal_error.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(antizer.reagent.modal_error.cljs$core$IFn$_invoke$arity$variadic = (function (args__12438__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_func,"Modal.error",args__12438__auto__);
}));

(antizer.reagent.modal_error.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(antizer.reagent.modal_error.cljs$lang$applyTo = (function (seq12541){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12541));
}));


antizer.reagent.modal_info = (function antizer$reagent$modal_info(var_args){
var args__5775__auto__ = [];
var len__5769__auto___12627 = arguments.length;
var i__5770__auto___12628 = (0);
while(true){
if((i__5770__auto___12628 < len__5769__auto___12627)){
args__5775__auto__.push((arguments[i__5770__auto___12628]));

var G__12629 = (i__5770__auto___12628 + (1));
i__5770__auto___12628 = G__12629;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return antizer.reagent.modal_info.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(antizer.reagent.modal_info.cljs$core$IFn$_invoke$arity$variadic = (function (args__12438__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_func,"Modal.info",args__12438__auto__);
}));

(antizer.reagent.modal_info.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(antizer.reagent.modal_info.cljs$lang$applyTo = (function (seq12542){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12542));
}));


antizer.reagent.modal_success = (function antizer$reagent$modal_success(var_args){
var args__5775__auto__ = [];
var len__5769__auto___12630 = arguments.length;
var i__5770__auto___12631 = (0);
while(true){
if((i__5770__auto___12631 < len__5769__auto___12630)){
args__5775__auto__.push((arguments[i__5770__auto___12631]));

var G__12632 = (i__5770__auto___12631 + (1));
i__5770__auto___12631 = G__12632;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return antizer.reagent.modal_success.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(antizer.reagent.modal_success.cljs$core$IFn$_invoke$arity$variadic = (function (args__12438__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_func,"Modal.success",args__12438__auto__);
}));

(antizer.reagent.modal_success.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(antizer.reagent.modal_success.cljs$lang$applyTo = (function (seq12543){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12543));
}));


antizer.reagent.modal_warning = (function antizer$reagent$modal_warning(var_args){
var args__5775__auto__ = [];
var len__5769__auto___12633 = arguments.length;
var i__5770__auto___12634 = (0);
while(true){
if((i__5770__auto___12634 < len__5769__auto___12633)){
args__5775__auto__.push((arguments[i__5770__auto___12634]));

var G__12635 = (i__5770__auto___12634 + (1));
i__5770__auto___12634 = G__12635;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return antizer.reagent.modal_warning.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(antizer.reagent.modal_warning.cljs$core$IFn$_invoke$arity$variadic = (function (args__12438__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_func,"Modal.warning",args__12438__auto__);
}));

(antizer.reagent.modal_warning.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(antizer.reagent.modal_warning.cljs$lang$applyTo = (function (seq12544){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12544));
}));


antizer.reagent.notification_close = (function antizer$reagent$notification_close(var_args){
var args__5775__auto__ = [];
var len__5769__auto___12636 = arguments.length;
var i__5770__auto___12637 = (0);
while(true){
if((i__5770__auto___12637 < len__5769__auto___12636)){
args__5775__auto__.push((arguments[i__5770__auto___12637]));

var G__12638 = (i__5770__auto___12637 + (1));
i__5770__auto___12637 = G__12638;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_close.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(antizer.reagent.notification_close.cljs$core$IFn$_invoke$arity$variadic = (function (args__12438__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_func,"notification.close",args__12438__auto__);
}));

(antizer.reagent.notification_close.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(antizer.reagent.notification_close.cljs$lang$applyTo = (function (seq12545){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12545));
}));


antizer.reagent.notification_config = (function antizer$reagent$notification_config(var_args){
var args__5775__auto__ = [];
var len__5769__auto___12639 = arguments.length;
var i__5770__auto___12640 = (0);
while(true){
if((i__5770__auto___12640 < len__5769__auto___12639)){
args__5775__auto__.push((arguments[i__5770__auto___12640]));

var G__12641 = (i__5770__auto___12640 + (1));
i__5770__auto___12640 = G__12641;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_config.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(antizer.reagent.notification_config.cljs$core$IFn$_invoke$arity$variadic = (function (args__12438__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_func,"notification.config",args__12438__auto__);
}));

(antizer.reagent.notification_config.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(antizer.reagent.notification_config.cljs$lang$applyTo = (function (seq12546){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12546));
}));


antizer.reagent.notification_destroy = (function antizer$reagent$notification_destroy(var_args){
var args__5775__auto__ = [];
var len__5769__auto___12642 = arguments.length;
var i__5770__auto___12643 = (0);
while(true){
if((i__5770__auto___12643 < len__5769__auto___12642)){
args__5775__auto__.push((arguments[i__5770__auto___12643]));

var G__12644 = (i__5770__auto___12643 + (1));
i__5770__auto___12643 = G__12644;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_destroy.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(antizer.reagent.notification_destroy.cljs$core$IFn$_invoke$arity$variadic = (function (args__12438__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_func,"notification.destroy",args__12438__auto__);
}));

(antizer.reagent.notification_destroy.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(antizer.reagent.notification_destroy.cljs$lang$applyTo = (function (seq12547){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12547));
}));


antizer.reagent.notification_error = (function antizer$reagent$notification_error(var_args){
var args__5775__auto__ = [];
var len__5769__auto___12645 = arguments.length;
var i__5770__auto___12646 = (0);
while(true){
if((i__5770__auto___12646 < len__5769__auto___12645)){
args__5775__auto__.push((arguments[i__5770__auto___12646]));

var G__12647 = (i__5770__auto___12646 + (1));
i__5770__auto___12646 = G__12647;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_error.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(antizer.reagent.notification_error.cljs$core$IFn$_invoke$arity$variadic = (function (args__12438__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_func,"notification.error",args__12438__auto__);
}));

(antizer.reagent.notification_error.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(antizer.reagent.notification_error.cljs$lang$applyTo = (function (seq12548){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12548));
}));


antizer.reagent.notification_info = (function antizer$reagent$notification_info(var_args){
var args__5775__auto__ = [];
var len__5769__auto___12648 = arguments.length;
var i__5770__auto___12649 = (0);
while(true){
if((i__5770__auto___12649 < len__5769__auto___12648)){
args__5775__auto__.push((arguments[i__5770__auto___12649]));

var G__12650 = (i__5770__auto___12649 + (1));
i__5770__auto___12649 = G__12650;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_info.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(antizer.reagent.notification_info.cljs$core$IFn$_invoke$arity$variadic = (function (args__12438__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_func,"notification.info",args__12438__auto__);
}));

(antizer.reagent.notification_info.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(antizer.reagent.notification_info.cljs$lang$applyTo = (function (seq12549){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12549));
}));


antizer.reagent.notification_open = (function antizer$reagent$notification_open(var_args){
var args__5775__auto__ = [];
var len__5769__auto___12651 = arguments.length;
var i__5770__auto___12652 = (0);
while(true){
if((i__5770__auto___12652 < len__5769__auto___12651)){
args__5775__auto__.push((arguments[i__5770__auto___12652]));

var G__12653 = (i__5770__auto___12652 + (1));
i__5770__auto___12652 = G__12653;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_open.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(antizer.reagent.notification_open.cljs$core$IFn$_invoke$arity$variadic = (function (args__12438__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_func,"notification.open",args__12438__auto__);
}));

(antizer.reagent.notification_open.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(antizer.reagent.notification_open.cljs$lang$applyTo = (function (seq12550){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12550));
}));


antizer.reagent.notification_success = (function antizer$reagent$notification_success(var_args){
var args__5775__auto__ = [];
var len__5769__auto___12654 = arguments.length;
var i__5770__auto___12655 = (0);
while(true){
if((i__5770__auto___12655 < len__5769__auto___12654)){
args__5775__auto__.push((arguments[i__5770__auto___12655]));

var G__12656 = (i__5770__auto___12655 + (1));
i__5770__auto___12655 = G__12656;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_success.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(antizer.reagent.notification_success.cljs$core$IFn$_invoke$arity$variadic = (function (args__12438__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_func,"notification.success",args__12438__auto__);
}));

(antizer.reagent.notification_success.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(antizer.reagent.notification_success.cljs$lang$applyTo = (function (seq12551){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12551));
}));


antizer.reagent.notification_warn = (function antizer$reagent$notification_warn(var_args){
var args__5775__auto__ = [];
var len__5769__auto___12657 = arguments.length;
var i__5770__auto___12658 = (0);
while(true){
if((i__5770__auto___12658 < len__5769__auto___12657)){
args__5775__auto__.push((arguments[i__5770__auto___12658]));

var G__12659 = (i__5770__auto___12658 + (1));
i__5770__auto___12658 = G__12659;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_warn.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(antizer.reagent.notification_warn.cljs$core$IFn$_invoke$arity$variadic = (function (args__12438__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_func,"notification.warn",args__12438__auto__);
}));

(antizer.reagent.notification_warn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(antizer.reagent.notification_warn.cljs$lang$applyTo = (function (seq12552){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12552));
}));


antizer.reagent.notification_warning = (function antizer$reagent$notification_warning(var_args){
var args__5775__auto__ = [];
var len__5769__auto___12660 = arguments.length;
var i__5770__auto___12661 = (0);
while(true){
if((i__5770__auto___12661 < len__5769__auto___12660)){
args__5775__auto__.push((arguments[i__5770__auto___12661]));

var G__12662 = (i__5770__auto___12661 + (1));
i__5770__auto___12661 = G__12662;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_warning.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(antizer.reagent.notification_warning.cljs$core$IFn$_invoke$arity$variadic = (function (args__12438__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.core.call_func,"notification.warning",args__12438__auto__);
}));

(antizer.reagent.notification_warning.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(antizer.reagent.notification_warning.cljs$lang$applyTo = (function (seq12553){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12553));
}));

antizer.reagent.locales = (function antizer$reagent$locales(prop__12440__auto__){
return antizer.core.get_prop("locales",prop__12440__auto__);
});
antizer.reagent.affix = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Affix"], null)));

antizer.reagent.alert = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Alert"], null)));

antizer.reagent.anchor = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Anchor"], null)));

antizer.reagent.anchor_link = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Anchor","Link"], null)));

antizer.reagent.auto_complete = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["AutoComplete"], null)));

antizer.reagent.auto_complete_opt_group = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["AutoComplete","OptGroup"], null)));

antizer.reagent.auto_complete_option = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["AutoComplete","Option"], null)));

antizer.reagent.avatar = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Avatar"], null)));

antizer.reagent.back_top = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["BackTop"], null)));

antizer.reagent.badge = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Badge"], null)));

antizer.reagent.breadcrumb = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Breadcrumb"], null)));

antizer.reagent.breadcrumb_item = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Breadcrumb","Item"], null)));

antizer.reagent.button = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Button"], null)));

antizer.reagent.button_group = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Button","Group"], null)));

antizer.reagent.calendar = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Calendar"], null)));

antizer.reagent.card = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Card"], null)));

antizer.reagent.card_grid = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Card","Grid"], null)));

antizer.reagent.card_meta = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Card","Meta"], null)));

antizer.reagent.carousel = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Carousel"], null)));

antizer.reagent.cascader = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cascader"], null)));

antizer.reagent.checkbox = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Checkbox"], null)));

antizer.reagent.checkbox_group = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Checkbox","Group"], null)));

antizer.reagent.col = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Col"], null)));

antizer.reagent.collapse = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Collapse"], null)));

antizer.reagent.collapse_panel = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Collapse","Panel"], null)));

antizer.reagent.comment = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Comment"], null)));

antizer.reagent.config_provider = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ConfigProvider"], null)));

antizer.reagent.date_picker = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["DatePicker"], null)));

antizer.reagent.date_picker_month_picker = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["DatePicker","MonthPicker"], null)));

antizer.reagent.date_picker_range_picker = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["DatePicker","RangePicker"], null)));

antizer.reagent.date_picker_week_picker = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["DatePicker","WeekPicker"], null)));

antizer.reagent.descriptions = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Descriptions"], null)));

antizer.reagent.descriptions_item = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Descriptions","Item"], null)));

antizer.reagent.divider = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Divider"], null)));

antizer.reagent.drawer = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Drawer"], null)));

antizer.reagent.dropdown = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Dropdown"], null)));

antizer.reagent.dropdown_button = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Dropdown","Button"], null)));

antizer.reagent.empty = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Empty"], null)));

antizer.reagent.form = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Form"], null)));

antizer.reagent.form_item = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Form","Item"], null)));

antizer.reagent.icon = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Icon"], null)));

antizer.reagent.input = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Input"], null)));

antizer.reagent.input_group = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Input","Group"], null)));

antizer.reagent.input_number = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["InputNumber"], null)));

antizer.reagent.input_search = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Input","Search"], null)));

antizer.reagent.input_text_area = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Input","TextArea"], null)));

antizer.reagent.layout = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Layout"], null)));

antizer.reagent.layout_content = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Layout","Content"], null)));

antizer.reagent.layout_footer = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Layout","Footer"], null)));

antizer.reagent.layout_header = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Layout","Header"], null)));

antizer.reagent.layout_sider = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Layout","Sider"], null)));

antizer.reagent.list = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["List"], null)));

antizer.reagent.list_item = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["List","Item"], null)));

antizer.reagent.list_item_meta = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["List","Item","Meta"], null)));

antizer.reagent.locale_provider = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["LocaleProvider"], null)));

antizer.reagent.mention = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Mention"], null)));

antizer.reagent.mention_nav = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Mention","Nav"], null)));

antizer.reagent.mentions = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Mentions"], null)));

antizer.reagent.menu = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Menu"], null)));

antizer.reagent.menu_divider = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Menu","Divider"], null)));

antizer.reagent.menu_item = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Menu","Item"], null)));

antizer.reagent.menu_item_group = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Menu","ItemGroup"], null)));

antizer.reagent.menu_sub_menu = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Menu","SubMenu"], null)));

antizer.reagent.modal = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Modal"], null)));

antizer.reagent.page_header = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["PageHeader"], null)));

antizer.reagent.pagination = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Pagination"], null)));

antizer.reagent.popconfirm = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Popconfirm"], null)));

antizer.reagent.popover = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Popover"], null)));

antizer.reagent.progress = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Progress"], null)));

antizer.reagent.radio = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Radio"], null)));

antizer.reagent.radio_button = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Radio","Button"], null)));

antizer.reagent.radio_group = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Radio","Group"], null)));

antizer.reagent.rate = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Rate"], null)));

antizer.reagent.result = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Result"], null)));

antizer.reagent.row = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Row"], null)));

antizer.reagent.select = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Select"], null)));

antizer.reagent.select_opt_group = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Select","OptGroup"], null)));

antizer.reagent.select_option = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Select","Option"], null)));

antizer.reagent.skeleton = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Skeleton"], null)));

antizer.reagent.slider = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Slider"], null)));

antizer.reagent.spin = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Spin"], null)));

antizer.reagent.statistic = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Statistic"], null)));

antizer.reagent.steps = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Steps"], null)));

antizer.reagent.steps_step = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Steps","Step"], null)));

antizer.reagent.switch$ = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Switch"], null)));

antizer.reagent.table = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Table"], null)));

antizer.reagent.table_column = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Table","Column"], null)));

antizer.reagent.table_column_group = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Table","ColumnGroup"], null)));

antizer.reagent.tabs = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Tabs"], null)));

antizer.reagent.tabs_tab_pane = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Tabs","TabPane"], null)));

antizer.reagent.tag = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Tag"], null)));

antizer.reagent.tag_checkable_tag = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Tag","CheckableTag"], null)));

antizer.reagent.timeline = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Timeline"], null)));

antizer.reagent.timeline_item = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Timeline","Item"], null)));

antizer.reagent.time_picker = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TimePicker"], null)));

antizer.reagent.tooltip = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Tooltip"], null)));

antizer.reagent.transfer = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Transfer"], null)));

antizer.reagent.tree = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Tree"], null)));

antizer.reagent.tree_directory_tree = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Tree","DirectoryTree"], null)));

antizer.reagent.tree_select = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TreeSelect"], null)));

antizer.reagent.tree_select_tree_node = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TreeSelect","TreeNode"], null)));

antizer.reagent.tree_tree_node = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Tree","TreeNode"], null)));

antizer.reagent.typography = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Typography"], null)));

antizer.reagent.typography_paragraph = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Typography","Paragraph"], null)));

antizer.reagent.typography_text = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Typography","Text"], null)));

antizer.reagent.typography_title = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Typography","Title"], null)));

antizer.reagent.upload = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Upload"], null)));

antizer.reagent.upload_dragger = reagent.core.adapt_react_class(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(antizer.reagent.goog$module$goog$object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Upload","Dragger"], null)));

//# sourceMappingURL=antizer.reagent.js.map
