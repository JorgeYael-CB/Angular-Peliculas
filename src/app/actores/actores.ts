
export interface IActorDTO {
  id: number;
  nombre: string;
  fechaNacimiento: Date;
  foto?: string;
}

export interface IActorCreacionDTO {
  nombre: string;
  fechaNacimiento: Date;
  foto?: File;
}
