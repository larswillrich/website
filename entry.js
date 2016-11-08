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
require('zone.js');
require('reflect-metadata');
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var core_2 = require('@angular/core');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var ng_bootstrap_1 = require('@ng-bootstrap/ng-bootstrap');
var component_1 = require("./components/navigation/component");
var component_2 = require("./components/header/component");
var component_3 = require("./components/body/component");
var component_4 = require("./components/about/component");
var component_5 = require("./components/footer/component");
require("./style.less");
var App = (function () {
    function App() {
    }
    App = __decorate([
        core_2.Component({
            selector: 'app',
            template: "<navigation></navigation><header></header><body></body><about></about><footer></footer>",
        }), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
}());
exports.App = App;
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, ng_bootstrap_1.NgbModule],
            declarations: [component_2.Header, component_1.Navigation, component_4.About, component_3.Body, component_5.Footer, App],
            bootstrap: [App]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(AppModule);
//# sourceMappingURL=entry.js.map