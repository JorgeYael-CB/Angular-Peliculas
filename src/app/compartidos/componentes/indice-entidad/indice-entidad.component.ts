import { Component, inject, Input } from '@angular/core';
import { PaginacionDto } from '../../modelos/PaginacionDto';
import { SERVICIO_CRUD_TOKEN } from '../../provedores/provedores';
import { HttpResponse } from '@angular/common/http';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { ListadoGenericoComponent } from "../listado-generico/listado-generico.component";
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { MatButtonModule } from '@angular/material/button';
import { IServicioCRUD } from '../../interfaces/IServicioCRUD';



@Component({
  selector: 'app-indice-entidad',
  standalone: true,
  imports: [ListadoGenericoComponent, MatTableModule, MatPaginatorModule, RouterLink,
    SweetAlert2Module, MatButtonModule
  ],
  templateUrl: './indice-entidad.component.html',
  styleUrl: './indice-entidad.component.css'
})
export class IndiceEntidadComponent<TDTO, TCREACION> {
  @Input({required: true})
  title!: string;

  @Input({required: true})
  rutaCrear!: string;

  @Input({required: true})
  rutaEditar!: string;

  @Input()
  columnasAMostrar = ['id', 'nombre', 'acciones'];

  @Input()
  paginacion: PaginacionDto = {pagina: 1, recordsPorPagina: 5};

  entidades!: TDTO[];
  servicioCRUD= inject(SERVICIO_CRUD_TOKEN) as IServicioCRUD<TDTO, TCREACION>;
  cantidadTotalRegistros!: number;


  constructor(){
    this.cargarRegistros();
  }

  cargarRegistros(){
    this.servicioCRUD.obtenerPaginado(this.paginacion).subscribe( (res: HttpResponse<TDTO[]>) => {
      this.entidades = res.body as TDTO[];
      const cabecera = res.headers.get('cantidad-total-registros') as string;
      this.cantidadTotalRegistros = +cabecera;
    });
  }

  actualizarPaginacion(data:PageEvent){
    this.paginacion = {pagina: data.pageIndex + 1, recordsPorPagina: data.pageSize};
    this.cargarRegistros();
  }

  borrar(id: number){
    this.servicioCRUD.borrar(id)
      .subscribe( () => {
        this.paginacion.pagina = 1;
        this.cargarRegistros()
      });
  }

  letraAMayuscula(value: string){
    if(!value) return;

    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}
