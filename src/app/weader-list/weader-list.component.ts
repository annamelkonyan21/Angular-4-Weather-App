import { Component, OnInit, Input } from '@angular/core';
import { WEADER_ITEM }  from './weader-item/weader.data';
import { WeaderItem } from './weader-item/weader-item';
import { WeaderItemService } from './weader-item/weader-item.service';

@Component({
  selector: 'app-weader-list',
  templateUrl: './weader-list.component.html',
  styleUrls: ['./weader-list.component.css'],
  providers: [WeaderItemService]
})
export class WeaderListComponent implements OnInit {
  
 

  constructor(private _weaderItemServices: WeaderItemService) { }
   
  weaderItems : WeaderItem[];
  ngOnInit():any {
    this.weaderItems = this._weaderItemServices.getWeaderService();
  }

}
