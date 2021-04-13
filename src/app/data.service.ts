import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
//import "rxjs/add/operator/map";

export interface Skin {}

const url = "https://www.alphaskins.com/bcknd_acdb/skins_table.php";

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}

  public readAll(): Observable<Skin[]> {
    return this.http.get<Skin[]>(url);
  }

  read(id): Observable<any> {
    return this.http.get(`${url}/${id}`);
  }

  create(data): Observable<any> {
    return this.http.post(url, data);
  }

  update(id, data): Observable<any> {
    return this.http.put(`${url}/${id}`, data);
  }

  delete(id): Observable<any> {
    return this.http.delete(`${url}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(url);
  }

  searchByName(name): Observable<Skin[]> {
//    confirm(`${url}?name=${name}`);
    return this.http.get<Skin[]>(`${url}?name=${name}`);
  }
}
