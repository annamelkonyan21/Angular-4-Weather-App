import { Component, OnInit, Input } from '@angular/core';
import { WeaderItem } from './weader-item';
@Component({
  selector: 'app-weader-item',
  templateUrl: './weader-item.component.html',
  styleUrls: ['./weader-item.component.css']
})

export class WeaderItemComponent implements OnInit {
  @Input('item')   weatherItem : WeaderItem;
  
  constructor() { 
      
  }
  
  ngOnInit() {
  }

}
