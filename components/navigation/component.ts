import 'zone.js';
import 'reflect-metadata';

import {Component} from '@angular/core';
import './style.css';

@Component({
  selector: 'navigation',
  template: require('./template.html')
})
export class Navigation {
    constructor() {
    }
}