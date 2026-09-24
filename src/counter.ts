
/*export function setupCounter(element: HTMLButtonElement) {
  let counter = 0
  const setCounter = (count: number) => {
    counter = count
    element.innerHTML = `Count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}*/

import type { Usuario } from "./models/interface";

export function devuelveAlumno(usuarioDelCentro: Usuario[], id: number, activo: boolean): Usuario {
  return usuarioDelCentro.find(usuario => usuario.id === id && usuario.rol === 'alumno' && usuario.activo === activo)!;

}


