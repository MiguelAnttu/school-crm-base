import type { Usuario , Rol} from "../models/interface";

export class CRMController {
   
    //Propiedades
     private usuariosDelCentro: Usuario[] = [];
    private readonly CLAVE_STORAGE = "school-crm-usuarios"; // Constante privada, no se puede cambiar desde fuera de la clase

    //Constructor
    constructor(private version: string ) {
    // IInicializamo el array de usuarios si no existe en localStorage
    const datosLocales = localStorage.getItem(this.CLAVE_STORAGE);
    if (datosLocales) {
      this.usuariosDelCentro = JSON.parse(datosLocales);
    } else {
      this.usuariosDelCentro = [
        { id: 1, nombre: "Juan Pérez", rol: "admin", activo: true },
        { id: 2, nombre: "María López", rol: "profesor", activo: true },
        { id: 3, nombre: "Carlos García", rol: "alumno", activo: true },
      ]; // Inicializamos el array vacío si no hay datos en localStorage
    }
  }

  public async registrarUsuarioAsync(usuario: Usuario): Promise<boolean> {
    console.log(
      `[NETWORK]: Conectando con el servidor escolar para registrar a ${usuario.id}...`,
    );

    await new Promise<void>((resolve) => setTimeout(resolve, 2000));

    const idExiste = this.usuariosDelCentro.some(
      (usuarioActual) => usuarioActual.id === usuario.id,
    );

    if (idExiste) {
      console.error("Usuario no añadido debido a repetición de id");
      return false;
    }

    this.usuariosDelCentro.push(usuario);
    this.guardarEnDisco();
    console.log("Usuario añadido correctamente");
    return true;
  }

  public async agregarUsuario(nuevoUsuario: Usuario): Promise<boolean> {
    return this.registrarUsuarioAsync(nuevoUsuario);
  }

    //Métodos: La función de ayer, que estaba en counter convertida en metodo o habilidad
     filtrarUsuariosPorRol(rolBuscado: Rol): Usuario[] {
        //Usuamos this para referirnos a la propieda de esta clase
  return this.usuariosDelCentro.filter(usuario => usuario.rol === rolBuscado );
}

    actualizaVersion(nuevaVersion:string): void{
        this.version = nuevaVersion;
    }

    verVersion():string{
        return this.version;
    }

    private guardarEnDisco(): void{
        localStorage.setItem(this.CLAVE_STORAGE, JSON.stringify(this.usuariosDelCentro));
        
    }
    }

