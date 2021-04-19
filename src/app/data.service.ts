import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export interface Skin {}

export interface Author {}

const url = "https://www.alphaskins.com/bcknd_acdb/skins_table.php";
const urlutils = "https://www.alphaskins.com/bcknd_acdb/skins_utils.php";

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
    //    confirm(url + " create:" + data.SKIN_NAME);
    return this.http.post(url, data);
  }

  update(data): Observable<any> {
    //    confirm(url + " update:" + data.SKIN_NAME);
    return this.http.put(url, data);
  }

  delete(id): Observable<any> {
    return this.http.delete(`${url}?id=${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(url);
  }

  searchByName(name): Observable<Skin[]> {
    return this.http.get<Skin[]>(`${url}?name=${name}`);
  }

  getMaxNum(): Observable<any> {
    return this.http.get(`${urlutils}?action=maxnum`);
  }
}
