"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_component_1 = require("./home/home.component"); //import home components
var appRoutes = [
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: '',
        component: home_component_1.HomeComponent,
        pathMatch: 'full'
    } // redirect to home page on load
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map