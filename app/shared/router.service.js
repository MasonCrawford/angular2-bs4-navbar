"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_metadata_1 = require('./router.metadata');
exports.ROUTES_BS4 = [
    { path: '', title: "Angular2 Bootstrap4 Navbar", menuType: router_metadata_1.MenuType.BRAND },
    { path: 'heroes', title: "Heroes", menuType: router_metadata_1.MenuType.LEFT },
    { path: 'about', title: "About Us", menuType: router_metadata_1.MenuType.RIGHT },
    { path: 'contact', title: "Contact", menuType: router_metadata_1.MenuType.RIGHT }
];
var RouterService = (function () {
    function RouterService() {
    }
    RouterService.prototype.getRoutes = function () {
        return exports.ROUTES_BS4;
    };
    RouterService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], RouterService);
    return RouterService;
}());
exports.RouterService = RouterService;

//# sourceMappingURL=router.service.js.map