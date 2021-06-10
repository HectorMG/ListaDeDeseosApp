import { ListaItem } from "./lista-item.model";

export class Lista{
    id:number;
    titulo:string;
    creadaEn: Date;
    terminadaEn: Date;
    estado: boolean;
    items: ListaItem[];

    constructor(titulo:string){
        this.id = new Date().getTime();
        this.titulo = titulo;
        this.creadaEn = new Date();
        this.estado = false;
        this.items = [];
    }
}