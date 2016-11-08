import 'zone.js';
import 'reflect-metadata';

import {Component} from '@angular/core';
import './style.css';

@Component({
  selector: 'about',
  template: require('./template.html')
})
export class About {
    constructor() {
    }
}