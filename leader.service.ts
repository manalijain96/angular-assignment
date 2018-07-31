import { Injectable } from '@angular/core';

import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

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
export class LeaderService {

  constructor(private restangular: Restangular,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

  getLeaders(): Observable<Leader[]> {
    return this.restangular.all('leaders').getList();
}

  getLeader(id: number): Observable<Leader> {
    return this.restangular.all('leaders',id).get();
    
  }

  getFeaturedLeader(): Observable<Leader> {
   return this.restangular.all('leaders').getList({featured: true})
      .pipe(map(leaders => leaders[0]));
  
  }
}
