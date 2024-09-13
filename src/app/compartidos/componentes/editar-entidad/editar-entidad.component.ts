import { Component, ComponentRef, inject, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { extraerErrores } from '../../funciones/extraerErrores';
import { IServicioCRUD } from '../../interfaces/IServicioCRUD';
import { SERVICIO_CRUD_TOKEN } from '../../provedores/provedores';
import { MostrarErroresComponent } from "../mostrar-errores/mostrar-errores.component";
import { CargandoComponent } from "../cargando/cargando.component";

@Component({
  selector: 'app-editar-entidad',
  standalone: true,
  imports: [MostrarErroresComponent, CargandoComponent],
  templateUrl: './editar-entidad.component.html',
  styleUrl: './editar-entidad.component.css'
})
export class EditarEntidadComponent<TDTO, TCreacionDTO> implements OnInit {

  ngOnInit(): void {
    this.servicioCrud.obtenerPorId(this.id)
      .subscribe( entidad => {
        this.cargarComponente(entidad);
      })
  }

  cargarComponente( entidad: any ){
    if( this.contendorFormulario ){
      this.componentRef = this.contendorFormulario.createComponent(this.formulario);
      this.componentRef.instance.modelo = entidad;
      this.componentRef.instance.posteoFormulario.subscribe( (entidad:any) => {
        this.guardarCambios(entidad);
      })

      this.cargando = false;
    }
  }


  cargando = true;

  @Input({required: true})
  id!:number;

  @Input({required: true})
  title!: string;

  @Input({required: true})
  rutaIndice!: string;

  @Input({required: true})
  formulario!: any;

  errores: string[] = [];

  servicioCrud = inject(SERVICIO_CRUD_TOKEN) as IServicioCRUD<TDTO, TCreacionDTO>;
  router = inject(Router);

  @ViewChild("contendorFormulario", {read: ViewContainerRef})
  contendorFormulario!: ViewContainerRef;

  private componentRef!: ComponentRef<any>;


  guardarCambios( entidad: TCreacionDTO ){
    //Guardar los cambios
    this.servicioCrud.actualizar(this.id, entidad)
    .subscribe({
      next: () =>  { // cuando fue exitosa
        this.router.navigate([this.rutaIndice]);
      },
      error: err => {
        const errores = extraerErrores(err);
        this.errores = errores;
      }
    });
  }
}
