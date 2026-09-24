import type { Usuario , Rol} from "../models/interface";

export class CRMController {
    //Propiedades
    private usuarioDelCentro: Usuario[] = [];
    private readonly CLAVE_STORAGE = 'school-crm-usuarios'; //Constante privada, no se puede ca
    //Constructor
    constructor(private version: string ) {
          const datosLocales = localStorage.getItem(this.CLAVE_STORAGE); 
          if (datosLocales) { 
          this.usuarioDelCentro = JSON.parse(datosLocales); 
          } else { this.usuarioDelCentro = [
            { id: 1, nombre: 'Juan', rol: 'alumno', activo: true },
            { id: 2, nombre: 'María', rol: 'profesor', activo: true },
            { id: 3, nombre: 'Pedro', rol: 'admin', activo: true },
            { id: 4, nombre: 'Juanete', rol: 'profesor', activo: false },
            { id: 5, nombre: 'Marihuana', rol: 'alumno', activo: true },
            { id: 6, nombre: 'Porro', rol: 'alumno', activo: false }
        ]
             this.guardarEnDisco(); 
         } 
   }
        
    

    //Métodos: La función de ayer, que estaba en counter convertida en metodo o habilidad
     filtrarUsuariosPorRol(rolBuscado: Rol): Usuario[] {
        //Usuamos this para referirnos a la propieda de esta clase
  return this.usuarioDelCentro.filter(usuario => usuario.rol === rolBuscado );
}

    actualizaVersion(nuevaVersion:string): void{
        this.version = nuevaVersion;
    }

    verVersion():string{
        return this.version;
    }

    //Añade un método llamado agregarUsuario(nuevoUsuario:Usuario):void
    //Este método empuja (.push) el nuevo usuario al array privado, con una condición
    //Debes comprobar id del nuevo usuario no existe. Un log con el resultado

   public agregarUsuario(nuevoUsuario: Usuario): void {
        const idExiste = this.usuarioDelCentro.some
        (usuario => usuario.id === nuevoUsuario.id);

        if (idExiste) {
            console.error("Usuario no añadido debido a repetición de id");
            return;
        }
        this.usuarioDelCentro.push(nuevoUsuario);
        console.log("Usuario añadido correctamente");
        this.guardarEnDisco();
    }
    
    private guardarEnDisco(): void{
        localStorage.setItem(this.CLAVE_STORAGE, JSON.stringify(this.usuarioDelCentro));
        
    }
    }
    
    