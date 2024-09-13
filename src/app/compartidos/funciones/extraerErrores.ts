

export function extraerErrores( obj: any ):string[] {
  const errors = obj.error.errors;
  let mensajesDeError: string[] = [];

  for (let llave in errors) {
    let campo = llave;
    const mensajesConCampos = errors[llave].map( (err:string) => `${campo}: ${err}`);
    mensajesDeError = mensajesDeError.concat(mensajesConCampos);
  }

  return mensajesDeError;
}
