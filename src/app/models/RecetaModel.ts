export class RecetaModel {
    id: string;
    nombre: string;
    ingredientes: string[];
    urlImagen: string;

    constructor(id: string, nombre: string, ingredientes: string[], urlImagen: string) {
        this.id = id;
        this.nombre = nombre;
        this.ingredientes = ingredientes;
        this.urlImagen = urlImagen;
    }
}