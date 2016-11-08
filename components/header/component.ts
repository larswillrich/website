import 'zone.js';
import 'reflect-metadata';

import {Component} from '@angular/core';
import './style.css';

@Component({
  selector: 'header',
  template: require('./template.html')
})
export class Header {
    constructor() {
    }
}