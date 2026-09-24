import { CRMController } from "./controllers/crm.controller";

//Instanciamos el motor  (creamos el objeto en memoria)
const miEscuelaCRM = new CRMController("1.0.0");

console.log("version:", miEscuelaCRM.verVersion());
//Usamos sus metodos
const profesor = miEscuelaCRM.filtrarUsuariosPorRol("profesor");
console.log("profesores:" , profesor);

miEscuelaCRM.agregarUsuario({ id: 8, nombre: 'Porro', rol: 'alumno', activo: false });