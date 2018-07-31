import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { Restangular } from 'ngx-restangular';


@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(private restangular: Restangular,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

   getPromotions(): Observable<Promotion[]> {
    return this.restangular.all('promotions').getList();
   
  }

  getPromotion(id: number): Observable<Promotion>{
    return this.restangular.all('promotions',id).get();
    
  }

  getFeaturedPromotion(): Observable<Promotion> {
    return this.restangular.all('promotions').getList({featured: true})
      .pipe(map(promotions => promotions[0]));
  }
}
