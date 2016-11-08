import 'zone.js';
import 'reflect-metadata';

import {Component} from '@angular/core';
import './style.css';

@Component({
  selector: 'footer',
  template: require('./template.html')
})
export class Footer {
    constructor() {
    }
}