

export interface IPeliculaDto {
  id: number;
  titulo: string;
  fechaLanzamiento: Date;
  trailer: string;
  poster?: string;
}

export interface IPeliculaCreacionDto {
  titulo: string;
  fechaLanzamiento: Date;
  trailer: string;
  poster?: File;
  generosIds?: number[];
  cinesIds: number[];
}
