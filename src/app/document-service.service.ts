import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentServiceService {

  constructor(private http: HttpClient) { 

   }

  onPageLoad : BehaviorSubject<{ IsLoad:boolean,URL:any}> = new BehaviorSubject<{IsLoad:boolean,URL:any}>({ IsLoad:false,URL:null});

  loadMarkDown(Url:any){
    return this.http.get(Url, { responseType: 'text' });
  }

  getMenu(){
    let URL = 'assets/JSON/menu.json';
    return this.http.get(URL);
  }

  loadLocation(){
    let URL = 'assets/JSON/document.json';
    return this.http.get(URL);
  }
}
