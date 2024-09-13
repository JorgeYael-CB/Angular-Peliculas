import { HttpResponse } from "@angular/common/http";
import { PaginacionDto } from "../modelos/PaginacionDto";
import { Observable } from "rxjs";


export interface IServicioCRUD<TDTO, TCREACION> {
  obtenerPaginado: ( paginacion: PaginacionDto ) => Observable<HttpResponse<TDTO[]>>;
  obtenerPorId: (id: number) => Observable<TDTO>;
  actualizar: (id: number, entidad: TCREACION) => Observable<any>;
  crear: (entidad: TCREACION) => Observable<any>;
  borrar: (id: number) => Observable<HttpResponse<any>>;
}

