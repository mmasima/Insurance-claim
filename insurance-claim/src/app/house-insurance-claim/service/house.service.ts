import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { House } from '../models/house.model';

@Injectable({
  providedIn: 'root',
})
export class HouseService {
  private readonly baseUrl = 'http://localhost:8080/api/houses'; 
  constructor(private http: HttpClient) {}

  getHouses(): Observable<any> {
    return this.http.get(`${this.baseUrl}/get-houses.php`);
  }

  addHouse(houseData: House): Observable<any> {
    return this.http.post(`${this.baseUrl}/add.php`, houseData);
  }  
  
  deleteHouse(house: House): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete.php?id=${house.id}`);
  }
  
}
