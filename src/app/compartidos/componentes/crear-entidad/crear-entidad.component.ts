import { AfterViewInit, Component, ComponentRef, Input, ViewChild, ViewContainerRef, inject } from '@angular/core';
import { SERVICIO_CRUD_TOKEN } from '../../provedores/provedores';
import { IServicioCRUD } from '../../interfaces/IServicioCRUD';
import { Router } from '@angular/router';
import { extraerErrores } from '../../funciones/extraerErrores';
import { MostrarErroresComponent } from "../mostrar-errores/mostrar-errores.component";

@Component({
  selector: 'app-crear-entidad',
  standalone: true,
  imports: [MostrarErroresComponent],
  templateUrl: './crear-entidad.component.html',
  styleUrl: './crear-entidad.component.css'
})
export class CrearEntidadComponent<TDTO, TCreacionDTO> implements AfterViewInit {

  ngAfterViewInit(): void {
    this.componentRef = this.contendorFormulario.createComponent(this.formulario);
    this.componentRef.instance.posteoFormulario.subscribe( (entidad: any) => {
      this.guardarCambios(entidad);
    });
  }


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
    this.servicioCrud.crear(entidad)
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
