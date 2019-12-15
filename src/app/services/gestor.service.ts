import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Gestor } from '../models/gestor';


@Injectable({
  providedIn: 'root'
})
export class GestorService {

  constructor(private http: HttpClient) { }
  url = "https://cors-anywhere.herokuapp.com/https://rocky-oasis-50047.herokuapp.com";

  getGestores(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

  getGestor(id: string): Observable<any> {
    return this.http.get<any>(this.url + "/gestor?id=" + id);
  }

  postGestor = (gestor: Gestor) => {
    console.log(gestor.nome);
    new Promise((resolve, reject) =>
      this.http.post(this.url +
        "?nome=" + gestor.nome +
        "&matricula=" + gestor.matricula +
        "&dataDeNascimento=" + gestor.dataDeNascimento +
        "&setor=" + gestor.setor, null)
        .subscribe(
          data => console.log(data),
          error => console.log(error),
        )
    )
  }

  putGestor = (gestor: Gestor) => {

    new Promise((resolve, reject) =>
      this.http.put(this.url +
        "?nome=" + gestor.nome +
        "&matricula=" + gestor.matricula +
        "&dataDeNascimento=" + gestor.dataDeNascimento +
        "&setor=" + gestor.setor +
        "&id=" + gestor.id, null)
        .subscribe(
          data => console.log(data),
          error => console.log(error),
        )
    )

  }

  deleteGestor = (id: string) => {

    new Promise((resolve, reject) =>
      this.http.delete(this.url + "?id=" + id)
        .subscribe(
          data => console.log(data),
          error => console.log(error),
        )
    )

  }
}
