import { inject, Injectable } from '@angular/core';
import { IGeneroDto } from './generos';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GenerosService {

  private http = inject(HttpClient);

  constructor() { }


  public obtenerTodos():Observable<IGeneroDto[]> {
    return this.http.get<IGeneroDto[]>("http://localhost:5271/api/generos");
  }
}
