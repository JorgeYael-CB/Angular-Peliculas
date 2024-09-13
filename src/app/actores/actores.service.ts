import { HttpClient, HttpResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { IActorCreacionDTO, IActorDTO } from './actores';
import { PaginacionDto } from '../compartidos/modelos/PaginacionDto';
import { Observable } from 'rxjs';
import { construirQueryParams } from '../compartidos/funciones/construirQueryParams';
import { IServicioCRUD } from '../compartidos/interfaces/IServicioCRUD';

@Injectable({
  providedIn: 'root'
})
export class ActoresService implements IServicioCRUD<IActorDTO, IActorCreacionDTO> {

  constructor() { }

  private http = inject(HttpClient);
  private urlBase = `${environment.apiUrl}/actores`;


  public crear(actor: IActorCreacionDTO): Observable<any>{
    const formData: FormData = this.construirFormData(actor);

    return this.http.post(this.urlBase, formData);
  }

  private construirFormData(actor: IActorCreacionDTO): FormData{
    const formData = new FormData();

    formData.append('nombre', actor.nombre);
    // 2024-01-25T15:18:20
    formData.append('fechaNacimiento', actor.fechaNacimiento.toISOString().split('T')[0]);

    if( actor.foto ){
      formData.append('foto', actor.foto);
    }

    return formData;
  }

  public obtenerPaginado(paginacion:PaginacionDto):Observable<HttpResponse<IActorDTO[]>>{
    let queryParams = construirQueryParams(paginacion);

    return this.http.get<IActorDTO[]>(this.urlBase, {params: queryParams, observe: 'response'});
  }

  public obtenerPorId(id: number): Observable<IActorDTO>{
    return this.http.get<IActorDTO>(`${this.urlBase}/${id}`);
  }

  public actualizar(id: number, actor:IActorCreacionDTO):Observable<any>{
    const formData = this.construirFormData(actor);

    return this.http.put(`${this.urlBase}/${id}`, formData);
  }

  public borrar(id: number): Observable<any>{
    return this.http.delete(`${this.urlBase}/${id}`);
  }
}
