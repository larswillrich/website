import 'zone.js';
import 'reflect-metadata';

import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Component} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {Navigation} from "./components/navigation/component"
import {Header} from "./components/header/component"
import {Body} from "./components/body/component"
import {About} from "./components/about/component"
import {Footer} from "./components/footer/component"

require("./style.less");

@Component({
    selector: 'app',
    template:   `<navigation></navigation><header></header><body></body><about></about><footer></footer>`,
})
export class App {
    constructor() {
    }
}

@NgModule({
    imports: [BrowserModule, NgbModule],
    declarations: [Header, Navigation, About, Body, Footer, App],
    bootstrap: [App]
})
class AppModule {
}


const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);