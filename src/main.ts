import { CRMController } from "./controllers/crm.controller";

async function main(): Promise<void> {
  const miEscuelaCRM = new CRMController("1.0.0");

  console.log("version:", miEscuelaCRM.verVersion());

  const profesor = miEscuelaCRM.filtrarUsuariosPorRol("profesor");
  console.log("profesores:", profesor);

  const registrado = await miEscuelaCRM.agregarUsuario({
    id: 8,
    nombre: "Porra",
    rol: "alumno",
    activo: false,
  });

  console.log(registrado ? "Usuario registrado" : "No se pudo registrar");
}

void main();

