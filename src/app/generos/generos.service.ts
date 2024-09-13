import { inject, Injectable } from '@angular/core';
import { IGeneroCreacionDTO, IGeneroDto } from './generos';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { PaginacionDto } from '../compartidos/modelos/PaginacionDto';
import { construirQueryParams } from '../compartidos/funciones/construirQueryParams';
import { IServicioCRUD } from '../compartidos/interfaces/IServicioCRUD';


@Injectable({
  providedIn: 'root'
})
export class GenerosService implements IServicioCRUD<IGeneroDto, IGeneroCreacionDTO> {

  private http = inject(HttpClient);
  private urlBase = environment.apiUrl;

  constructor() { }


  public obtenerPaginado(paginacion: PaginacionDto):Observable<HttpResponse<IGeneroDto[]>> {
    let queryParams = construirQueryParams(paginacion);
    return this.http.get<IGeneroDto[]>(`${this.urlBase}/generos`, {params: queryParams, observe: 'response'});
  }

  public obtenerPorId(id: number): Observable<IGeneroDto>{
    return this.http.get<IGeneroDto>(`${this.urlBase}/generos/${id}`);
  }

  public actualizar(id: number, genero: IGeneroCreacionDTO):Observable<any>{
    return this.http.put(`${this.urlBase}/generos/${id}`, genero);
  }

  public crear( genero: IGeneroCreacionDTO ): Observable<any>{
    return this.http.post(`${this.urlBase}/generos`, genero);
  }

  public borrar( id: number ): Observable<any>{
    return this.http.delete(`${this.urlBase}/generos/${id}`);
  }
}
