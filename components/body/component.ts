import 'zone.js';
import 'reflect-metadata';

import {Component} from '@angular/core';
import './style.css';

@Component({
  selector: 'body',
  template: require('./template.html')
})
export class Body {
    constructor() {
    }
}