

export interface IGeneroCreacionDTO {
  nombre: string;
}

export interface IGeneroEditDto extends IGeneroCreacionDTO {
  id: number | string;
}
