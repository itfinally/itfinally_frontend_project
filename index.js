import Vue from "vue";
import IView from "iview";
import VueRouter from "vue-router";
import "iview/dist/styles/iview.css";

import routes from "./src/admin/config/view_router";
import { GLOBAL_CACHE } from "./src/admin/tools/constant";
import { ROUTER_KEY, VUE_KEY } from "@admin/tools/constant";

Vue.use( VueRouter );
Vue.use( IView );

let router = new VueRouter( { routes } ),
    vue = new Vue( { el: "#app", router } );

GLOBAL_CACHE.put( VUE_KEY, vue );
GLOBAL_CACHE.put( ROUTER_KEY, router );

vue.$Message.config( { "duration": 3 } );