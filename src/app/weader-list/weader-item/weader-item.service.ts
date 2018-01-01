import { Injectable } from '@angular/core';

import { Http } from '@angular/http' ;
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { WEADER_ITEM } from './weader.data';
import { WeaderItem } from './weader-item';

@Injectable()
export class WeaderItemService{
    constructor(private _http: Http){}

    getWeaderService(){
        return  WEADER_ITEM;
    }

    addWeaderItem(weaderItem: WeaderItem){
        WEADER_ITEM.push(weaderItem); 
    }
    
    searchWeaderData(cityName: string){
        return this._http.get('http://api.openweathermap.org/data/2.5/weather?q='+cityName+'&APPID=fe4ee887171f0aa0c0aefd1f04703306&units=metric')
            .map(res => res.json())
            .catch(error => {
                console.error(error);
                return Observable.throw(error.json())
            });
    }
}