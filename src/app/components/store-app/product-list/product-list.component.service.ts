import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Item } from "./model/item";

@Injectable ()

export class ProductService {
  private url = "";

  httpOptions={
    Headers: new HttpHeaders ({'content-type': 'application/json'})
  }

  constructor (private http:HttpClient) {

  }

  getItem () {
    return this.http.get(this.url)
  }
}
