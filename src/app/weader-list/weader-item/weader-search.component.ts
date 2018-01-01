import { Component, OnInit } from '@angular/core';
import { WeaderItemService } from './weader-item.service';
import { WeaderItem } from './weader-item';

@Component({
  selector: 'app-weader-search',
  templateUrl: './weader-search.component.html',
  styleUrls: ['./weader-search.component.css']
})
export class WeaderSearchComponent implements OnInit {

  constructor(private _weaderService: WeaderItemService) { }
  city:string = '';
  
  onSubmit(city: string){
    this. _weaderService.searchWeaderData(city)
        .subscribe(
          data => {
            const weaderItem = new WeaderItem(data.name, data.weather[0].description, data.main.temp);
            this._weaderService.addWeaderItem(weaderItem);

          }
        )
        city = ' ';
  }
  ngOnInit() {
  }

}
