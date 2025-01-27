
shadow.cljs.devtools.client.env.module_loaded('app');

try { todoapp.core.init(); } catch (e) { console.error("An error occurred when calling (todoapp.core/init)"); throw(e); }